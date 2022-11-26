<script>
  import { stNumberOfQuestion, stUserAnswers } from "$lib/store.js";

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

<div class="container">
  {#each incorrectAnswers as item, i}
    <label for={item} style="--order: {randomOrder[i]}">
      <span>
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

  <label for={correctAnswer} style="--order: {randomOrder[4]}">
    <span>
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
    height: 33rem;
  }
  label {
    width: 100%;
    height: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #f8f9fa;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.255);
    transition: all 0.3s ease;
    order: var(--order);
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
    border: 5px solid rgb(114, 76, 249);
  }

  input[type="radio"] {
    border: 1px solid rgb(114, 76, 249);
  }
</style>
