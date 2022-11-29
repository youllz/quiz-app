<script>
    import Btn from "../lib/components/Btn.svelte";
    import { darkTheme } from "$lib/theme";

</script>
<section class:bg={$darkTheme}>

<div class:bg-card={$darkTheme}>
  <h1 class:text={$darkTheme}>
    Test your knowledge with this little quiz App. <br>
Choose a category, the difficulty and go
  </h1>
</div>

<a href="/games">
  <Btn> Go </Btn>
</a>




</section>




<style>
  section {
    height: calc(100vh - 4rem);
    width: 100vw;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 3rem;
    padding-top: 10rem;
  }

  div {
    height: 30rem;
    width: 45rem;
    background-color: var(--light-card-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color: var(--light-main-text);
    letter-spacing: 1.2px;
    line-height: 1.1;

  }


  /* dark theme */
  .bg {
    background-color: var(--dark-bg);
  }

  .bg-card {
    background-color: var(--dark-bg-card);
  }


  .text {
    color: var(--dark-input);
  }
  
</style>