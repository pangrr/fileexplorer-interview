import { useState, useEffect } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}

export function useFetch(input) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (input) {
        const resp = await getData(input);
        if (!ignore) setData(resp);
      } else {
        setData([]);
      }
    }

    fetchData();
    return () => (ignore = true);
  }, [input]);

  return { data, error, loading };
}

async function getData(input) {
  return Array(5)
    .fill("")
    .map((_, i) => repeat(input, i));
}

function repeat(s, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}
