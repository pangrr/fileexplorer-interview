import { useState } from "react";
import { parseContract } from "./util";
import "./Contract.css";
import Sentence from "./Sentence";

export default function Contract({ contract: _contract }) {
  const [selectedIds, setSelectedIds] = useState({});

  const contract = parseContract(_contract);

  return (
    <div className="container">
      <header>{contract.name}</header>
      <div className="blocks-container">
        {contract.textBlocks.map(({ id: blockId, sentences }) => (
          <p key={blockId} className="block">
            {sentences.map(({ id: sentenceId, text }) => (
              <Sentence
                key={sentenceId}
                text={text}
                selected={isSelected(sentenceId)}
                onClick={(e) =>
                  handleClickSentence(sentenceId, e.ctrlKey || e.metaKey)
                }
              />
            ))}
          </p>
        ))}
      </div>
      <button onClick={handleClearSelect}>Clear Select</button>
    </div>
  );

  function handleClickSentence(id, isMultiSelect) {
    let ids = {};
    if (isMultiSelect) {
      ids = { ...selectedIds };
    }
    ids[id] = true;
    setSelectedIds(ids);
  }

  function isSelected(id) {
    return selectedIds[id];
  }

  function handleClearSelect() {
    setSelectedIds({});
  }
}
