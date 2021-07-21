/**
 * Type definition for a contract.
 *
 * @id Unique ID for the contract.
 * @textBlocks Array of text block objects.
 */
interface Contract {
  id: string;
  textBlocks: Array<TextBlock>;
}

/**
 * Type definition for a single text block.
 *
 * @id Unique ID for the text block.
 * @text The text contents of the block.
 * @sentenceIndices An array of indices, each specifying the start and end
 * of a sentence within the block. Only the start index is inclusive.
 */
interface TextBlock {
  id: string;
  text: string;
  sentenceIndices: Array<{ start: number; end: number }>;
}

/**
 * An example contract payload, to be used in this exercise.
 *
 * In reality, this would be the result following a query like:
 * GET /contract/<id>/
 */
export const data: Contract = {
  id: "VGV4dEJsb2NrTm9kZToxMDI3Mw==",
  textBlocks: [],
};
