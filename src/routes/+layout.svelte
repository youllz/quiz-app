<script>
  import '../app.scss'
    import Nav from '$lib/components/Nav.svelte';
</script>


<div class="nav"><Nav/></div>

<slot/>

<style>
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>