<script>
  import {darkTheme} from '$lib/theme'
  import { quizMounted, stProgress } from "$lib/store";
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  onMount(() => {
    quizMounted.set(true);
  });

  export let category;
  export let difficulty;
  export let question;
  export let progressValue;

  const Progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  $: Progress.set(progressValue);
</script>

<div class="container" class:bg-card={$darkTheme}>
  <div class="info">
    <h2  class:text-color={$darkTheme}>{category}</h2>
    <h2 class:text-color={$darkTheme}>{difficulty}</h2>
  </div>
  <h1>{$stProgress + 1}</h1>
  <p class:paragraph-color={$darkTheme}>
    {question}
  </p>
  <progress max="320" value={$Progress} />
</div>

<style>
  .container {
    width: 100%;
    height: 35rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    background-color: var(--light-card-bg);
    padding: 2rem;
    box-shadow: 0px 0px 10px var(--light-main-text);
    border-radius: 10px;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
  }

  h1 {
    font-size: 5rem;
    font-weight: 700;
    background-image: linear-gradient(
      to top,
      #ff8e3c,
      #fd7648,
      #f65e54,
      #ea4961,
      #d9376e
    );
    -webkit-background-clip: text;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  h2 {
    position: relative;
    padding: 5px 0;
    height: auto;
    color: var(--light-main-text);
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 7rem;
  }

  h2::after {
    content: "";
    width: 100%;
    height: 3px;
    background-color: var(--light-btn);
    display: inline-block;
    position: absolute;
    bottom: -2px;
    left: 0;
  }

  progress {
    width: 100%;
  }

  progress::-webkit-progress-bar {
    background-color: var(--dark-paragraph);
  }

  progress::-webkit-progress-value {
    background-color: var(--light-nav) !important;
  }

  /* For Firefox */
  progress {
    background-color: var(--dark-paragraph);
  }

  progress::-moz-progress-bar {
    background-color: var(--light-nav) !important;
  }

  /* For IE10 */
  progress {
    background-color: var(--dark-paragraph);
  }

  progress {
    background-color: var(--light-nav);
  }


  /* dark theme */
  .bg-card {
    background-color: var(--dark-bg-card);
  }

  .text-color {
    color: var(--dark-main-text);
  }

  .paragraph-color {
    color: var(--dark-paragraph);
  }

 
</style>
