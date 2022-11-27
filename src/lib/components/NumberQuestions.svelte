<script>
  import { stNumberOfQuestion } from "$lib/store.js";
  let numberOfQuestion = 5

  $: stNumberOfQuestion.set(numberOfQuestion)
</script>

<div class="container">
  <h1>NUMBER OF QUESTIONS</h1>
  <div class="box">
    <input type="range" name="number" id="number" min="3" max="20" bind:value={numberOfQuestion}/>
  </div>
  <span>
    <h1 class="number">{numberOfQuestion}</h1>
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

  input {
    appearance: none;
    height: 5px;
    width: 15rem;
    background-color: #957fefde;
    outline: none;
  }

  .number {
    font-size: 4rem;
    color: #957fefde;
  }


  @media screen and (max-width: 850px) {
    .container {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
</style>
