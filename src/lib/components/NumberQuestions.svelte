<script>
  import { darkTheme } from "$lib/theme.js";
  import { stNumberOfQuestion } from "$lib/store.js";
  let numberOfQuestion = 5

  $: stNumberOfQuestion.set(numberOfQuestion)
</script>

<div class="container">
  <h1 class:text-color={$darkTheme}>NUMBER OF QUESTIONS</h1>
  <div class="box">
    <input type="range" name="number" id="number" min="3" max="20" bind:value={numberOfQuestion}/>
  </div>
  <span>
    <h1 class="number" class:text-color={$darkTheme}>{numberOfQuestion}</h1>
  </span>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 33.33%;
  }

  h1 {
    color: var(--light-main-text);
  }

  input {
    appearance: none;
    height: 5px;
    width: 15rem;
    background-color:var(--light-input);
    outline: none;
  }

  .number {
    font-size: 4rem;
    color:var(--light-main-text);
  }


  /* dark theme */
  .text-color {
    color: var(--dark-main-text);
  }

  @media screen and (max-width: 850px) {
    .container {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
</style>
