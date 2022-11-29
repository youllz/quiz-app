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
    width: 99vw;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


  h1 {
    font-size: 3rem;
    text-align: center;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-image: linear-gradient(to top, #ff8e3c, #fd7648, #f65e54, #ea4961, #d9376e);
    font-weight: 700;
  }
</style>