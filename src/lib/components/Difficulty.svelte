<script>
  import {darkTheme} from '$lib/theme'
    import {stDifficulty} from '../store'

  const difficulty = ['easy', 'medium', 'hard']
  let difficultyValue

  $: stDifficulty.set(difficultyValue)


</script> 


<div class="container">
  <h1 class:text-color={$darkTheme}>DIFFICULTY</h1>
  <div class="difficulty-box">
    {#each difficulty as item}
    <label for="{item}" class:text-color={$darkTheme}>
      <span>
        {item}
      </span>
      <input type="radio" name="difficulty" id="{item}" value="{item}" bind:group={difficultyValue}>
    </label>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    width: 33.33%;
  }

  h1 {
    color: var(--light-main-text);
  }
  
  .difficulty-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  label {
    height: 8rem;
    width: 10rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--light-input);
    color: var(--light-main-text);
    padding: 10px;
  }
  span {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;

  }

  input[type='radio']:checked {
    border: 5px solid var(--light-main-text);
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