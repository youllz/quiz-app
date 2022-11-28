<script>
  import {
    stRsultData,
    stUserAnswers,
    stShowQuiz,
    stCategory,
    stDifficulty,
    stNumberOfQuestion,
    quizMounted,
    stQuiz,
    stProgress,
  } from "$lib/store.js";
  import Btn from "./Btn.svelte";
  import { darkTheme } from "$lib/theme";

  let emojis = Array($stRsultData.length);
  let score = 0;

  function verification() {
    for (let i = 0; i < emojis.length; i++) {
      if ($stUserAnswers[i] === $stRsultData[i].correctAnswer) {
        score++;
        emojis[
          i
        ] = `<svg width="22" height="22" viewBox="0 0 24 24"><path fill="#2dc653" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"/></svg>`;
      } else {
        emojis[
          i
        ] = `<svg width="22" height="22" viewBox="0 0 15 15"><path fill="#d90429" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"/></svg>`;
      }
    }
  }

  function restart() {
    stRsultData.set([]);
    stUserAnswers.set([]);
    stShowQuiz.reset();
    stCategory.set("");
    stDifficulty.set("");
    stNumberOfQuestion.set(0);
    quizMounted.set(false);
    stQuiz.reset();
    stProgress.set(0);
    score = 0;
  }

  verification();
</script>

<div class="container" >
  <h1 class:text-color={$darkTheme}>RESULTS</h1>

  <div class="table-container" class:bg-card={$darkTheme}>
    <table >
      <tr>
        <th class:text-color={$darkTheme}>Question</th>
        {#each $stRsultData as data}
          <td class:paragraph-color={$darkTheme}>{data.question}</td>
        {/each}
      </tr>
      <tr>
        <th class:text-color={$darkTheme}>Correct answer</th>
        {#each $stRsultData as data}
          <td class:paragraph-color={$darkTheme}>{data.correctAnswer}</td>
        {/each}
      </tr>
      <tr>
        <th class:text-color={$darkTheme}>user answer</th>
        {#each $stUserAnswers as item}
          <td class:paragraph-color={$darkTheme}>{item}</td>
        {/each}
      </tr>
      <tr>
        <th class:text-color={$darkTheme}>validate</th>
        {#each emojis as emoji}
          <td>{@html emoji}</td>
        {/each}
      </tr>
    </table>
  </div>

  <h2>
    SCORE: {score}
  </h2>

  <Btn on:onShow={restart}>RESTART</Btn>
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    flex-direction: column;
    margin-top: 3rem;
  }

  .table-container {
    width: 100%;
    height: auto;
    background-color: var(--light-card-bg);
    overflow-x: auto;
  }

  table {
    width: 100%;
    background-color: transparent;
  }

  th {
    color: var(--light-main-text);
    font-weight: 700;
  }

  td {
    font-size: 1.3rem;
    color: var(--light-paragraph);
  }

  th,
  td {
    padding: 15px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.452);
  }
  tr:hover {
    box-shadow: 0px 0px 10px var(--light-input);
  }

  h2 {
    color: var(--light-main-text);
  }

  /* dark theme */
  .bg-card {
    background-color: var(--dark-bg-card);
  }

  .paragraph-color {
    color: var(--dark-paragraph);
  }

  .text-color {
    color: var(--dark-main-text);
  }
</style>
