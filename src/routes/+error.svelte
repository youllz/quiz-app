
<script>
  import { page } from '$app/stores';
    import Btn from '../lib/components/Btn.svelte';
</script>




<div class="error">
  <h1>{$page.status}: {$page.error.message}</h1>
<a href="/">
  
    <Btn>
      HOME
    </Btn>
</a>
</div>



<style>
  .error {
    width: 100vw;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }


  h1 {
    font-size: 5rem;
    font-weight: 700;
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
  }
</style>