<script>
  import {darkTheme} from '$lib/theme'
  import { fly, fade } from 'svelte/transition';  
  export let navToggle 
  let dark = false
  $: darkTheme.set(dark)

  



</script>



<header class:navToggle class:text-color={$darkTheme}>
  <div class="logo">
    <a href="/">
      <svg width="2.2rem" height="2.2rem" viewBox="0 0 24 24"
        ><g fill="none"
          ><path
            d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
          /><path
            fill="currentColor"
            d="m11.514 2.142l-1.26-.755l-.24 1.449C9.632 5.124 8.069 7.25 6.345 8.744C2.97 11.67 2.231 14.85 3.276 17.475c1 2.512 3.538 4.232 6.114 4.519l.596.066c-1.474-.901-2.42-3.006-2.09-4.579c.326-1.546 1.438-2.994 3.574-4.33l1.077-.672l.402 1.205c.237.712.647 1.284 1.064 1.865c.2.28.403.563.589.864c.643 1.045.813 2.207.398 3.36c-.378 1.048-1.002 1.872-1.86 2.329l.97-.108c2.418-.269 4.193-1.096 5.346-2.479C20.599 18.144 21 16.379 21 14.5c0-1.75-.719-3.554-1.567-5.055c-.994-1.758-2.291-3.218-3.707-4.633c-.245.49-.226.688-.73 1.475a8.146 8.146 0 0 0-3.482-4.145Z"
          /></g
        ></svg
      >
    </a>
  </div>
  <nav>
    <div class="dark-box">
      {#if !$darkTheme}
      <span in:fly="{{ x: -20, duration: 1000 }}" out:fade title="dark">
        <svg width="2.2rem" height="2.2rem" viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
          /></svg
        >
      </span>

      {:else}
        
      <span in:fly="{{ x: -20, duration: 1000 }}" out:fade title="light">
        <svg width="2.2rem" height="2.2rem" viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M11 5V1h2v4Zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425ZM19 13v-2h4v2Zm-8 10v-4h2v4ZM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35Zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75ZM1 13v-2h4v2Zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"
          /></svg
        >
      </span>
      {/if}
      <input type="checkbox" name="dark" id="dark" bind:checked={dark}/>
    </div>
    <a href="/" title="github">
      <span>
        <svg width="2.2rem" height="2.2rem" viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
          /></svg
        >
      </span></a
    >
  </nav>
</header>

<style lang="scss">
  header {
    width: 70%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20rem;
    margin-top: 2rem;
    /* background-color: rgb(114, 76, 249); */
    background-color: var(--light-nav);
    color: var(--light-main-text);
    border-radius: 10px;
    transition: all 0.3s ease;
    
  }

  nav {
    display: flex;
    align-items: center;
    gap: 5rem;
  }

  .dark-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dark-box span {
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  input {
    opacity: 0;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }


  /* dark theme class */
  .text-color {
    color: var(--dark-main-text);
  }
 


  .navToggle {
  transform: translateY(20%);
 }



  @media screen and (max-width: 850px) {
    header {
      width: 60%;
      height: 7rem;
      position: absolute;
      transform: translateY(-100%);
      margin-top: 0;
      justify-content: space-around;
      align-items: center;
      padding: 1rem;
    }
    
    nav {
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      
      
    }
    
    .logo {
      margin-top: 2rem;

    }

    
}

</style>
