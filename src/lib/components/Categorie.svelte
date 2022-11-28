<script>
  import {darkTheme} from '$lib/theme'
  import {stCategory} from '$lib/store.js'
  const optionsDatas = [
    {
      id: "opt1",
      name: "Arts & Literature",
      value: "Arts_and_Literature".toLocaleLowerCase(),
      icone: `<svg width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 23V7q0-.825.587-1.412Q4.175 5 5 5h10q.825 0 1.413.588Q17 6.175 17 7v16l-7-3Zm16-3V3H6V1h13q.825 0 1.413.587Q21 2.175 21 3v17Z"></path></svg>`,
    },
    {
      id: "opt2",
      name: "Film & TV",
      value: "Film_&_TV".toLocaleLowerCase(),
      icone: `<svg width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="currentColor" d="M13.218 4.246L7.087 6.238a.502.502 0 0 1-.24.079L4.741 7H13.5a.5.5 0 0 1 .5.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-5c0-.106.033-.205.09-.287l-.195-.602A2.5 2.5 0 0 1 3.5 3.461l6.657-2.163a2.5 2.5 0 0 1 3.15 1.605l.232.713a.5.5 0 0 1-.321.63Zm-3.744.165l1.285-2.226a1.508 1.508 0 0 0-.293.064l-1.245.404l-1.308 2.265l1.56-.507Zm2.295-1.979a.515.515 0 0 1-.02.037l-.854 1.48l1.538-.5l-.077-.237a1.494 1.494 0 0 0-.587-.78Zm-3.97.683l-1.56.507L4.93 5.887l1.56-.507L7.8 3.115ZM2.923 6.54l.587-.19l1.307-2.266l-1.008.328a1.5 1.5 0 0 0-.963 1.89l.077.238Z"></path></svg>`,
    },
    {
      id: "opt3",
      name: "Food & Drink",
      value: "Food_and_Drink".toLocaleLowerCase(),
      icone: `<svg width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="currentColor" d="M18 11v7a2 2 0 0 1-4 0v-5h-2V3a3 3 0 0 1 3-3h3v11zM4 10a2 2 0 0 1-2-2V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v7a2 2 0 0 1-2 2v8a2 2 0 0 1-4 0v-8z"></path></svg>`,
    },
    {
      id: "opt4",
      name: "General Knowledge",
      value: "General_Knowledge".toLocaleLowerCase(),
      icone: `<svg width="1.5em" height="1.5em" viewBox="0 0 50 50"><path fill="currentColor" d="M35.484 15.034c-.248 0-.484-.167-.484-.411v-6.18c0-.244-.134-.443-.383-.443H15.382c-.249 0-.382.199-.382.443v6.18c0 .244-.269.377-.519.377H1.449c-.246 0-.449.267-.449.508v6.87c0 .242.203.622.449.622h20.986c.249 0 .565-.38.565-.622v-1.465c0-.244.092-.913.34-.913h3.321c.248 0 .339.669.339.913v1.465c0 .242.316.622.563.622h20.985c.25 0 .452-.38.452-.622v-6.87c0-.242-.202-.508-.451-.508H35.518l-.034.034zM18.093 15c-.248 0-.093-.133-.093-.376v-3.513c0-.245-.155-.111.093-.111h13.814c.248 0 .093-.134.093.111v3.513c0 .243.155.376-.093.376H18.093zm8.962 14.712c0 .242-.146.288-.394.288H23.34c-.248 0-.34.107-.34-.135v-4.938c0-.242-.316-.927-.564-.927H1.449c-.246 0-.449.685-.449.927v14.629a.45.45 0 0 0 .449.444h47.1a.449.449 0 0 0 .451-.443v-14.63c0-.242-.202-.927-.451-.927H27.563c-.247 0-.563.685-.563.927v4.938l.055-.153z"></path></svg>`,
    },
    {
      id: "opt5",
      name: "Geography",
      value: "Geography".toLocaleLowerCase(),
      icone: `<svg width="1.5em" height="1.5em" viewBox="0 0 36 36"><path fill="currentColor" d="M33.68 15.4H22.23a3.68 3.68 0 0 1-3.18-5.51l.72-1.25L14 5.68V9h-2V5.27l-9.67 4a.52.52 0 0 0-.33.48v20.7a.54.54 0 0 0 .74.49L12 27.12V23h2v4.53l9 4.61V28h2v3.79l8.63-2.7a.54.54 0 0 0 .37-.51v-13.2ZM14 21h-2v-4h2Zm0-6h-2v-4h2Zm11 11h-2v-4h2Zm0-6h-2v-4h2Z"></path><path fill="currentColor" d="m26.85 1.14l-5.72 9.91a1.27 1.27 0 0 0 1.1 1.95h11.45a1.27 1.27 0 0 0 1.1-1.91l-5.72-9.95a1.28 1.28 0 0 0-2.21 0Z" class="clr-i-alert"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>`,
    },
    {
      id: "opt6",
      name: "History",
      value: "History".toLocaleLowerCase(),
      icone: `<svg width="1.5em" height="1.5em" viewBox="0 0 1536 1536"><path fill="currentColor" d="M1536 768q0 156-61 298t-164 245t-245 164t-298 61q-172 0-327-72.5T177 1259q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9q16 2 23 12q73 95 179 147t225 52q104 0 198.5-40.5T1130 1130t109.5-163.5T1280 768t-40.5-198.5T1130 406T966.5 296.5T768 256q-98 0-188 35.5T420 393l137 138q31 30 14 69q-17 40-59 40H64q-26 0-45-19T0 576V128q0-42 40-59q39-17 69 14l130 129Q346 111 483.5 55.5T768 0q156 0 298 61t245 164t164 245t61 298zM896 480v448q0 14-9 23t-23 9H544q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224V480q0-14 9-23t23-9h64q14 0 23 9t9 23z"></path></svg>`,
    },
    {
      id: "opt7",
      name: "Music",
      value: "Music".toLocaleLowerCase(),
      icone: `<svg width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="currentColor" d="M16 17a3 3 0 0 1-3 3h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 1 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z"></path></svg>`,
    },
    {
      id: "opt8",
      name: "Science",
      value: "Science".toLocaleLowerCase(),
      icone: `<svg width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path><path fill="currentColor" d="M4.222 4.222c1.353-1.353 3.39-1.467 5.433-.822A12.26 12.26 0 0 1 12 4.444c.803-.456 1.59-.805 2.345-1.044c2.044-.646 4.08-.531 5.433.822c1.353 1.353 1.468 3.39.822 5.433A12.26 12.26 0 0 1 19.556 12c.456.803.805 1.59 1.044 2.345c.646 2.043.531 4.08-.822 5.433c-1.352 1.353-3.39 1.468-5.433.822A12.258 12.258 0 0 1 12 19.556c-.803.456-1.59.805-2.345 1.044c-2.043.645-4.08.53-5.433-.822c-1.353-1.353-1.467-3.39-.822-5.433c.239-.756.588-1.542 1.044-2.345A12.258 12.258 0 0 1 3.4 9.655c-.645-2.043-.53-4.08.822-5.433Zm1.489 9.687a9.108 9.108 0 0 0-.404 1.039c-.536 1.697-.27 2.816.33 3.416c.599.6 1.718.865 3.415.329c.333-.105.68-.24 1.04-.404a22.771 22.771 0 0 1-2.334-2.046a22.782 22.782 0 0 1-2.047-2.334Zm12.579 0a22.78 22.78 0 0 1-2.047 2.334a22.772 22.772 0 0 1-2.334 2.047c.359.163.706.298 1.039.403c1.698.536 2.816.27 3.416-.329c.6-.6.866-1.718.33-3.416a9.1 9.1 0 0 0-.404-1.04ZM12 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm2.948-5.193a9.11 9.11 0 0 0-1.04.404a22.7 22.7 0 0 1 2.335 2.046a22.787 22.787 0 0 1 2.047 2.334c.164-.359.298-.706.403-1.039c.537-1.698.271-2.816-.329-3.416c-.6-.6-1.718-.865-3.416-.329Zm-9.312.33c-.6.599-.865 1.717-.329 3.415c.105.333.24.68.404 1.04c.59-.78 1.273-1.561 2.047-2.335a22.777 22.777 0 0 1 2.333-2.046a9.11 9.11 0 0 0-1.039-.404c-1.697-.536-2.816-.27-3.416.33Z"></path></g></svg>`,
    },
    {
      id: "opt9",
      name: "Society & Culture",
      value: "Society_and_Culture".toLocaleLowerCase(),
      icone: `<svg width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="currentColor" d="M14 10.58a.371.371 0 0 0-.001-.332l-.479-.698c-.009-.013-.014-.028-.014-.045s.005-.032.014-.045l.48-.7a.371.371 0 0 0-.001-.332a.4.4 0 0 0-.236-.237l-.823-.301a.091.091 0 0 1-.06-.069V6.98a.386.386 0 0 0-.169-.299a.407.407 0 0 0-.231-.071h-.17l-.85.22a.095.095 0 0 1-.071 0l-.549-.65a.428.428 0 0 0-.63 0l-.55.65a.095.095 0 0 1-.071 0h.001l-.9-.23h-.108a.417.417 0 0 0-.234.071a.388.388 0 0 0-.168.298v.841a.092.092 0 0 1-.059.07l-.821.3a.403.403 0 0 0-.338.395c0 .06.014.117.039.167l.479.698c.009.013.014.028.014.045s-.005.032-.014.045l-.48.7a.371.371 0 0 0 .001.332a.4.4 0 0 0 .236.237l.823.301a.091.091 0 0 1 .06.069v.841a.386.386 0 0 0 .169.299a.417.417 0 0 0 .234.071h.168l.31-.07V16l1.53-2l1.47 2v-3.69l.31.08h.118a.417.417 0 0 0 .234-.071a.388.388 0 0 0 .168-.298v-.841a.092.092 0 0 1 .059-.07l.821-.3a.405.405 0 0 0 .289-.227z"></path><path fill="currentColor" d="M0 1v12h8l-.11-.05a1.131 1.131 0 0 1-.49-.867V12H1V2h14v10h-1.43v.08a1.134 1.134 0 0 1-.486.868L13 13h3V1H0z"></path><path fill="currentColor" d="M7.43 6.91a1.13 1.13 0 0 1 .486-.908A.184.184 0 0 1 8.001 6H3v1h4.43v-.09zM6.42 8H3v1h3.36a.986.986 0 0 1-.047-.837A.292.292 0 0 1 6.42 8zM3 4h10v1H3V4z"></path></svg>`,
    },
    {
      id: "op10",
      name: "Sport & Leisure",
      value: "Sport_and_Leisure".toLocaleLowerCase(),
      icone: `<svg width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M2.05 10.975H5.9Q5.725 9.7 5.138 8.512Q4.55 7.325 3.675 6.425q-.7 1-1.1 2.137q-.4 1.138-.525 2.413Zm16.05 0h3.85q-.125-1.25-.525-2.4t-1.1-2.125q-.9.9-1.475 2.075q-.575 1.175-.75 2.45ZM3.675 17.55q.875-.9 1.463-2.075q.587-1.175.762-2.45H2.05q.125 1.275.525 2.413q.4 1.137 1.1 2.112Zm16.65 0q.7-.975 1.1-2.125q.4-1.15.525-2.4H18.1q.175 1.275.75 2.45q.575 1.175 1.475 2.075Zm-12.4-6.575h3.05V2.05q-1.775.2-3.312.925Q6.125 3.7 4.925 4.9q1.25 1.225 2.025 2.75q.775 1.525.975 3.325Zm5.1 0h3.05q.2-1.8.963-3.338Q17.8 6.1 19.075 4.9q-1.2-1.2-2.738-1.925q-1.537-.725-3.312-.925Zm-2.05 10.975v-8.925h-3.05q-.2 1.8-.962 3.325q-.763 1.525-2.038 2.725q1.2 1.2 2.725 1.937q1.525.738 3.325.938Zm2.05 0q1.775-.2 3.312-.925q1.538-.725 2.738-1.925q-1.275-1.2-2.037-2.738q-.763-1.537-.963-3.337h-3.05Z"></path></svg>`,
    },
  ];

  let categoriesValue 

  $: stCategory.set(categoriesValue)

</script>

<div class="container">
  <h1 class:text-color={$darkTheme}>CATEGORIES</h1>
  <div class="categories-box">
    {#each optionsDatas as data}
    
    <label for="{data.id}" class:text-color={$darkTheme}>
      <span>
        {@html data.icone}
      </span>
      <span>
        {data.name}
      </span>
      <input type="radio" name="categories" id="{data.id}" value="{data.value}" bind:group={categoriesValue}>
    </label>
    {/each}
  </div>
  </div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    width: 33.33%;
  }
  
  .categories-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

  }

  label {
    height: 8rem;
    width: 10rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--light-input);
    color: var(--light-main-text);
    padding: 10px;
  }

  h1 {
    color: var(--light-main-text);
  }

  span {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;

  }


  /* dark theme */
  .text-color {
    color: var(--dark-main-text);
  }

  input[type='radio']:checked {
    border: 5px solid var(--light-paragraph);
  }

  @media screen and (max-width: 850px) {
    .container {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
</style>