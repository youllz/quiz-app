<script>
  import {darkTheme} from '$lib/theme'
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function showQuiz() {
    dispatch('onShow')
  }
</script>

<button class:text-color={$darkTheme} on:click={showQuiz}>
  <slot />
</button>

<style>
  button {
    height: 5rem;
    width: 10rem;
    padding: 10px;
    background-color: var(--light-btn);
    color: var(--light-main-text);
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: all 0.3s ease;
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  button:hover {
    transform: scale(0.9);
  }

  /* dark theme */
  .text-color {
    color: var(--dark-main-text);
  }
</style>
