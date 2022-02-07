# Task - "contractrender"

Robin AI's product suite will include interfaces for viewing, labelling and editing contracts.

We require the ability to interact with text on a per-sentence basis. Contract objects are stored
in a backend service, which exposes an API. `src/api.ts` includes sample data to be used in this task.
You can retrieve the contract by using the asynchronous function `getContract`.

To complete this task, implement the following features:

1. The implementation for `getSentencesForTextBlock` in `api.ts` is complete and calculates all sentences from a TextBlock
2. The contract is retrieved from `getContract` in `api.ts` and the contract's text is rendered as a document.
3. While hovering on text, the surrounding sentence should be highlighted in blue.
4. The user can select a single sentence on click, or multiple sentences on ctrl-click.
   The selected sentence(s) should be highlighted in red.
5. The user can click a button to clear their selection. The button should be disabled if
   no sentences are selected.

Don't worry if you do not finish implementing all functionality in 40 minutes - the quality of the code you write
is more important than whether the task has been completed. If you do finish, feel free to write some tests to verify
the functionality.

## Setting up the project

You are welcome to use whichever SPA framework you are most comfortable in.
We recommend setting up in the simplest way possible !

**Note:** you may use Typescript or Javascript.
