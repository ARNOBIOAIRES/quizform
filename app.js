const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['A', 'A', 'A', 'A', ]
let score = 0


form.addEventListener('submit', event => {
    event.preventDefault()
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswers.forEach((answers, index) => {
        if (answers === correctAnswers[index]) {
            score += 25
        }
    })

    scrollTo(0, 0)
    finalResult.classList.remove('d-none')
    let counter = 0
    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }
        finalResult.querySelector('span').textContent = `${counter} %`
        counter++
    }, 10)
})