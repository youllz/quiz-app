<script>
  import {quizMounted, stProgress} from '$lib/store'
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    
    
    onMount(() => {
      quizMounted.set(true)
    })
    
    export let category
    export let difficulty
    export let question
    export let progressValue

    const Progress = tweened(0, {
      duration: 400,
      easing: cubicOut
    })

    $: Progress.set(progressValue)

  
</script>

<div class="container">
  <div class="info">
    <h2>{category}</h2>
    <h2>{difficulty}</h2>
  </div>
  <h1>{$stProgress + 1}</h1>
  <p>
    {question}
  </p>
  <progress max="320" value="{$Progress}"  > </progress>
</div>

<style>
  .container {
    width: 100%;
    height: 33rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    background-color: #f8f9fa;
    padding: 2rem;
    box-shadow: 0px 0px 10px rgb(114, 76, 249);
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
      to right,
      #5a189a,
      #7532b2,
      #904bcb,
      #ab64e5,
      #c77dff
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
    background-image: linear-gradient(to right, #5a189a, #7532b2, #904bcb, #ab64e5, #c77dff);
    display: inline-block;
    position: absolute;
    bottom: -2px;
    left: 0;
  }

  progress {
    width: 100%;
  }


  

  progress {
    width: 100%;
  }
</style>
