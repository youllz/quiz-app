<script>
    import Btn from "../lib/components/Btn.svelte";

</script>
<section>

<div>
  <h1>
    Tester vos connaissance avec cette petite quiz app. <br> Choisser une categorie, la difficultee et allez y
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
    background-color: rgb(114, 76, 249);
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
    color: #fff;
    letter-spacing: 1.2px;
    line-height: 1.1;

  }

  
</style>