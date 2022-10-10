# Task - "contractrender"

Robin AI's product suite will include interfaces for viewing, labelling and editing contracts.

We require the ability to interact with text on a per-sentence basis. Contract objects are stored
in a backend service, which exposes an API. `src/api.ts` includes sample data to be used in this task - you
may use the `contract` object directly.

## The Contract

The contract object contains some metadata about a contract - its name, id and an array of text blocks. Each text block represents a paragraph of text within the contract.
Each text block contains an array of sentence objects. Each object contains details of where sentences are located within it. The start and end values are indexes within the text string of the start and end of a sentence.

## Requirements

To complete this task, implement the following features:

1. Render the paragraphs of the contract in the browser so they are clear and readable.
2. While hovering on a paragraph, the paragraph should be highlighted in blue.
3. The user can select a single paragraph on click, or multiple paragraphs on ctrl-click.
   The selected paragraph(s) should be highlighted in red.
4. The user can click a button to clear their selection. The button should be disabled if no paragraphs are selected.

---

**_If you have completed the above_** - consider changing your implementation to support sentences using the sentence indice information in the contract object.
The requirements would now be:

5. While hovering on a sentence, the sentence should be highlighted in blue.
6. The user can select a single sentence on click, or multiple sentences on ctrl-click.
   The selected sentence(s) should be highlighted in red.
7. The user can click a button to clear their selection. The button should be disabled if
   no sentences are selected.

Don't worry if you do not finish implementing all functionality in 40 minutes - the quality of the code you write
is more important than whether the task has been completed. If you do finish, feel free to write some tests to verify
the functionality.

**Note:** you may use Typescript or Javascript.

## Using Javascript

You may use Javascript for this task if you prefer. To do this simply rename `App.tsx` to `App.jsx` and you should be able to continue working in JavaScript from there.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm install`

Installs app dependencies locally.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
