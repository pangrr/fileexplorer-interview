export function parseContract(contract) {
  return {
    ...contract,
    textBlocks: contract.textBlocks.map((b) => ({
      ...b,
      sentences: buildSentences(b.id, b.text, b.sentenceIndices),
    })),
  };
}

function buildSentences(blockId, text, sentenceIndices) {
  return sentenceIndices.map((index, i) => ({
    text: text.substring(index.start, index.end),
    id: blockId + i,
  }));
}
