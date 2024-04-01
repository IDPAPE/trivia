

export class Question {

    constructor(data) {
        this.type = data.type
        this.difficulty = data.difficulty
        this.category = data.category
        this.question = data.question
        this.correctAnswer = data.correctAnswer
        this.incorrectAnswers = data.incorrectAnswers
    }


}