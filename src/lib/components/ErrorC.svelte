<script>
  import Btn from "./Btn.svelte";
  export let error
</script>

<div>
  <h1>
    {error}
  </h1>

  <a href="/">
    <Btn> BACK </Btn>
  </a>
</div>


<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }


  h1 {
    font-size: 3rem;
    text-align: center;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-image: linear-gradient(
      to right,
      #5a189a,
      #7532b2,
      #904bcb,
      #ab64e5,
      #c77dff
    );
    font-weight: 700;
  }
</style>