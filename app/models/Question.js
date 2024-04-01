

export class Question {

    constructor(data) {
        this.type = data.type
        this.difficulty = data.difficulty
        this.category = data.category
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }

    get GetQuestionInfo() {
        // debugger
        console.log(this.correctAnswer, this.incorrectAnswers)
        let allQuestions = []
        let randomizer = Math.floor(Math.random() * 4)
        console.log('randomizer', randomizer)
        for (let i = 0; i < 4; i++) {
            if (randomizer == 3) {
                randomizer = 0
                allQuestions.push(this.correctAnswer)
            }
            else {
                allQuestions.push(this.incorrectAnswers[randomizer])
            }
            randomizer++
        }

        return `
        <div class="row border border-dark rounded text-center shadow m-3 p-3">
            <h1>${this.question}</h1>
        </div>
        <div class="row justify-content-between">
            <div class="col-6 text-center">
                <button class="btn btn-rounded border-dark shadow m-2 w-75" onclick = "app.QuestionsController.newQuestion()">A: ${allQuestions[0]}</button>
            </div>
            <div class="col-6 text-center">
                <button class="btn btn-rounded border-dark shadow m-2 w-75" onclick = "app.QuestionsController.newQuestion()">B: ${allQuestions[1]}</button>
            </div>
        </div>
        <div class="row justify-content-around">
            <div class="col-6 text-center">
                <button class="btn btn-rounded border-dark shadow m-2 w-75" onclick = "app.QuestionsController.newQuestion()">C: ${allQuestions[2]}</button>
            </div>
            <div class="col-6 text-center">
                <button class="btn btn-rounded border-dark shadow m-2 w-75" onclick = "app.QuestionsController.newQuestion()">D: ${allQuestions[3]}</button>
            </div>
        </div>
        
        `
    }

}