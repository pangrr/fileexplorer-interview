// For expected types see ./api.ts

export const getSentencesForTextBlock = (textBlock) => {
  return [];
};

export const getContract = () => {
  return Promise.resolve(dataFromBackend);
};

/**
 * An example contract payload, to be used in this exercise.
 *
 * In reality, this would be the result following a query like:
 * GET /contract/<id>/
 */
const dataFromBackend = {
  id: "VGV4dEJsb2NrTm9kZToxMDI3Mw==",
  name: "Sample NDA",
  textBlocks: [
    {
      id: "VGV4dEJsb2NrTm9kZToxMDI3Mw==",
      text: "THIS AGREEMENT is dated 27th January 2021",
      blockNumber: 0,
      sentenceIndices: [
        {
          start: 0,
          end: 41,
        },
      ],
    },
    {
      id: "VGV4dEJsb2NrTm9kZToxMDI3OA==",
      text:
        "Each party wishes to disclose to the other party Confidential " +
        "Information in relation to the possibility of entering into a " +
        "commercial relationship (the Purpose). Each party wishes to " +
        "ensure that the other party maintains the confidentiality of " +
        "its Confidential Information. In consideration of the benefits " +
        "to the parties of the disclosure of the Confidential Information, " +
        "the parties have agreed to comply with the following terms " +
        "regarding the use and disclosure of Confidential Information.",
      blockNumber: 1,
      sentenceIndices: [
        {
          start: 0,
          end: 162,
        },
        {
          start: 163,
          end: 274,
        },
        {
          start: 275,
          end: 494,
        },
      ],
    },
    {
      id: "VGV4dEJsb2NrTm9kZToxMDMyMQ==",
      text: "1) At the written request of the Disclosing Party, the Recipient shall:",
      blockNumber: 2,
      sentenceIndices: [
        {
          start: 0,
          end: 71,
        },
      ],
    },
    {
      id: "VGV4dEJsb2NrTm9kZToxMDMyMg==",
      text:
        "1) destroy or return to the Disclosing Party all documents and " +
        "materials (and any copies) containing, reflecting, incorporating, or " +
        "based on the Disclosing Party's Confidential Information;",
      blockNumber: 3,
      sentenceIndices: [
        {
          start: 0,
          end: 189,
        },
      ],
    },
    {
      id: "VGV4dEJsb2NrTm9kZToxMDMyMw==",
      text:
        "2) erase all the Disclosing Party's Confidential Information from its " +
        "computer systems or which is stored in electronic form (to the extent possible); and",
      blockNumber: 4,
      sentenceIndices: [
        {
          start: 0,
          end: 150,
        },
        {
          start: 151,
          end: 154,
        },
      ],
    },
    {
      id: "VGV4dEJsb2NrTm9kZToxMDMyNA==",
      text:
        "3) confirm in writing to the Disclosing Party that it has complied " +
        "with the requirements of this clause, provided that a Recipient may " +
        "retain documents and materials containing, reflecting, incorporating, " +
        "or based on the Disclosing Party's Confidential Information to the " +
        "extent required by law or any applicable governmental or regulatory " +
        "authority and to the extent reasonable to permit the Recipient to " +
        "keep evidence that it has performed its obligations under this " +
        "agreement. The provisions of this clause 3 shall continue to apply " +
        "to any such documents and materials retained by the Recipient, " +
        "subject to clause 5.1.",
      blockNumber: 5,
      sentenceIndices: [
        {
          start: 0,
          end: 479,
        },
        {
          start: 480,
          end: 621,
        },
      ],
    },
  ],
};
