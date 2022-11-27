<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function showQuiz() {
    dispatch('onShow')
  }
</script>

<button on:click={showQuiz}>
  <slot />
</button>

<style>
  button {
    height: 5rem;
    width: 10rem;
    padding: 10px;
    background-color: rgb(114, 76, 249);
    color: #fff;
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
</style>
