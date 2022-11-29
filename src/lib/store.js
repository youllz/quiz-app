// Reexport your entry components here

import { writable } from "svelte/store";



// export const  darkMode = writable(false)


/* option */
function showQuiz() {
  const {subscribe, set, update} = writable(false)

  return {
    subscribe,
    display: () => update(n => !n),
    reset: () => set(false)
  }
}

export const stShowQuiz = showQuiz()
// ---------


/* category */
export const stCategory = writable('')
/* difficulty */
export const stDifficulty = writable('')
/* number of question  */
export const stNumberOfQuestion = writable(0)


/* get next question */

//  function getNextQuestion() {
//   const {subscribe, set, update} = writable(0)

//   return {
//     subscribe,
//     next: () => update(n => n++),

//     reset: () => set(0)
//   }

// }

// export const stQuestion = getNextQuestion()



/* quiz mounted ? */
export const quizMounted = writable(false)

/* user answers */


// function getUserAnswer() {
//   const {subscribe, set, update} = writable([])

//   return {
//     subscribe,
//     save: () => update(n => {
//       n = [...n]
//     }),
//     reset: () => set([])
//   }
// }

/* userAnswer */
export const stUserAnswers = writable([])

/* progress */
export const stProgress = writable(0)


/* quiz finish */
function finishQuiz() {
  const {subscribe, set, update} = writable(false)

  return {
    subscribe,
    end: () => update(n => !n),
    reset: () => set(false)
  }
}

export const stQuiz = finishQuiz()

/* result data */
export const stRsultData = writable([])


/*  */

function getNextQuestion() {
  const {subscribe, set, update} = writable(false)
  return {
    subscribe,
    restart: () => update((n )=> true ),
    reset: () => set(false)
  }
}
export const resetquizProgress = getNextQuestion()




