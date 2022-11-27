<script>
  import Answer from "../../lib/components/Answer.svelte";
  import Btn from "../../lib/components/Btn.svelte";
  import Categorie from "../../lib/components/Categorie.svelte";
  import Difficulty from "../../lib/components/Difficulty.svelte";
  import NumberQuestions from "../../lib/components/NumberQuestions.svelte";
  import Question from "../../lib/components/Question.svelte";
  import {
    stCategory,
    stDifficulty,
    stNumberOfQuestion,
    stShowQuiz,
    stUserAnswers,
    quizMounted,
    stQuiz,
    stRsultData,
    stProgress
  } from "$lib/store.js";
  import { fly } from "svelte/transition";
    import Results from "../../lib/components/Results.svelte";
    import Load from "../../lib/components/Load.svelte";
    import ErrorC from "../../lib/components/ErrorC.svelte";

  
   
  
  async function getQuizData() {
    const url = `https://the-trivia-api.com/api/questions?categories=${$stCategory}&limit=${$stNumberOfQuestion}&difficulty=${$stDifficulty}`;
    const res = await fetch(url);
    const resJson = res.json();

    if(res.ok) {
      stRsultData.set(resJson)
      return resJson;

    }  else {
			throw new Error(text);
		}
    
  }
  
    let quizProgress = 0
  
  
    function getNextQuiz () {
      if(quizProgress === $stNumberOfQuestion - 1) {
        stQuiz.end()
        return
      }
      else {
        quizProgress++
        stProgress.set(quizProgress)
      }
    }

  /* next question over time */

  let time = 320; //second
  let progress = 0;

  function quizTime() {
    const id = setInterval(getTime, 44);

    function getTime() {
      if (progress === time) {
        progress = 0;
        getNextQuiz()
        clearInterval(id);
      } else {
        progress++;
      }
    }
  }

  $: {
    if($quizMounted) {
      if ((quizProgress - 1) <= ($stNumberOfQuestion - 1)) {
        quizTime()
      }
    }
  }


</script>

<main>
  {#if !$stShowQuiz && !$stQuiz}
    <section class="option" transition:fly={{ x: -40, duration: 500 }} class:disable={$stQuiz}>
      <Categorie />

      <Difficulty />

      <NumberQuestions />
    </section>

    {#if $stCategory && $stDifficulty}
      <div class="btn-box" transition:fly={{ y: 40, duration: 500 }}>
        <Btn on:onShow={stShowQuiz.display}>STARTED</Btn>
      </div>
    {/if}
  {:else }
    <section class="question" transition:fly={{ x: -40, duration: 500 }} class:disable={$stQuiz}>
      {#await getQuizData()}
        <div class="loader"><Load/></div>
      {:then datas}
      <span style="display: none;"> {stRsultData.set(datas) }</span>
        <div>
          <Question
            category={datas[quizProgress].category}
            question={datas[quizProgress].question}
            difficulty={datas[quizProgress].difficulty}
            progressValue={progress}
          />
        </div>
        <div>
          <Answer
            incorrectAnswers={datas[quizProgress].incorrectAnswers}
            correctAnswer={datas[quizProgress].correctAnswer}
            currentAnswers={quizProgress}
            {quizProgress}
          />
        </div>
        {:catch error}
        <div class="error">
          <ErrorC error={error}/>
        </div>
      {/await}
    </section>
  {/if}

  {#if $stQuiz}
    
  <section >
    <Results/>
  </section>
  {/if}
  
</main>


<style>
  .disable {
    display: none;
  }
  
  main {
    height: calc(100vh - 4rem);
    width: 100vw;
    padding: 2rem;
    padding-top: 8rem;
    display: flex;
    flex-direction: column;
    gap: 7rem;
    align-items: center;
  }

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    /* background-color: blue; */
  }

  .question {
    
    gap: 2rem;
    margin-top: 4rem;
    flex-wrap: nowrap;
    flex-wrap: nowrap;
  }

  .question > div {
    width: 48%;
  }

  .loader, .error {
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  @media screen and (max-width: 700px) {
    .option {
      flex-direction: column;
    }


    .question > div {
      width: 100%;
    }
  }
  
  @media screen and (max-width: 850px) {
    .question > div {
      width: 100%;
      
    }

  }
  @media screen and (max-width: 600px) {
  

    .question {
      flex-direction: column;
    }

  }
</style>
