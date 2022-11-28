<script>
  import { stNumberOfQuestion, stUserAnswers } from "$lib/store.js";
  import {darkTheme} from '$lib/theme'

  export let incorrectAnswers = [];
  export let correctAnswer;
  export let currentAnswers;
  export let quizProgress;

  let userAnswer = Array($stNumberOfQuestion).fill("");

  $: if (currentAnswers === $stNumberOfQuestion - 1) {
    stUserAnswers.set(userAnswer);
    // console.log($stUserAnswers)
  }

  // let array = new Uint32Array(4);
  // self.crypto.getRandomValues(array);
  // console.log(array)

  // random oder for questio
  
  
  
  function getRandomNumber() {
    let array = Array(4);
    
    function random() {
      return( Math.floor(Math.random() * array.length ))
    }
    
    
    for (let i = 0; i < array.length; i++) {
      array[i] = random();
    }                         
    //  console.log(array)
    if (quizProgress % 2 === 0) {
      return array.reverse()
    }

    return array
  }




  let randomOrder = getRandomNumber();

  $: if (quizProgress) {
    randomOrder = getRandomNumber();
  }
</script>

<div class="container" class:bg-card={$darkTheme}>
  {#each incorrectAnswers as item, i}
    <label for={item} style="--order: {randomOrder[i]}">
      <span class:paragraph-color={$darkTheme}>
        {item}
      </span>
      <input
        type="radio"
        name="answers"
        id={item}
        value={item}
        bind:group={userAnswer[currentAnswers]}
      />
    </label>
  {/each}

  <label for={correctAnswer} style="--order: {randomOrder[4]}" >
    <span class:paragraph-color={$darkTheme}>
      {correctAnswer}
    </span>
    <input
      type="radio"
      name="answers"
      id={correctAnswer}
      value={correctAnswer}
      bind:group={userAnswer[currentAnswers]}
    />
  </label>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 35rem;
    background-color: var(--light-card-bg);
  }
  label {
    width: 100%;
    height: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.255);
    transition: all 0.3s ease;
    order: var(--order);
  }

  label span {
    color: var(--light-paragraph);
  }

  .container label:nth-child(1) {
    order: var(--order);
  }
  .container label:nth-child(2) {
    order: var(--order);
  }
  .container label:nth-child(3) {
    order: var(--order);
  }
  .container label:nth-child(4) {
    /* background-color: blue; */
    order: var(--order);
  }

  label span {
    font-size: 1.6rem;
    font-weight: 700;
  }

  label:hover {
    transform: scale(1.03);
  }

  input[type="radio"]:checked {
    border: 5px solid var(--light-input);
  }

  input[type="radio"] {
    border: 1px solid var(--light-input);
  }

  /* dark theme */

  .bg-card {
    background-color: var(--dark-bg-card);
  }

  .paragraph-color {
    color: var(--dark-paragraph);
  }
</style>
