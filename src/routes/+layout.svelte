<script>
  import '../app.scss'
    import Nav from '$lib/components/Nav.svelte';
    let navToggle = false 
</script>


<div class="nav">
  <Nav {navToggle}/>
  <button class="hamburger" on:click={() => { navToggle = !navToggle}}>
    <span>
      <svg width="13" height="13" viewBox="0 0 24 24"><path fill="#fff" d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"/></svg>
    </span>
  </button>
</div>

<slot/>

<style>
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .hamburger {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
     display: none;
    align-self: end;
    padding: 8px;
    border-radius: 20px;
    background-color: #724cf9;
    transition: all 0.3s ease;
    
  }
  
  .hamburger span {
    columns: #fff;

  }

  .hamburger:hover {
    transform: scale(1.05);
  }

  /* responsive */



   @media screen and (max-width: 850px) {
    .hamburger {
      position: absolute;
      top: 3%;
      right: 20px;
      display: block;
    }
    }

    :global(html) {
      font-size: 60%;
    }
/* 
    @media screen and (max-width: 960px) {

    :global(html) {
      font-size: 60%;
    }
    } */
    @media screen and (max-width: 960px) {

    :global(html) {
      font-size: 60%;
    }
    }
    @media screen and (max-width: 635px) {

    :global(html) {
      font-size: 50%;
    }
    }
    @media screen and (max-width: 375px) {

    :global(html) {
      font-size: 48%;
    }
    }
    @media screen and (max-width: 281px) {

    :global(html) {
      font-size: 44%;
    }
    } 

</style>