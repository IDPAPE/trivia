import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"


class QuestionsService {

    async fetchTriviaQuestions(url) {
        if (url == undefined) url = 'https://opentdb.com/api.php?amount=30&type=multiple'
        const response = await fetch(url)
        console.log('fetched', response)
        const questionsPojo = await response.json()
        console.log('json converted', questionsPojo)
        const questions = questionsPojo.results.map(question => new Question(question))
        console.log(questions)
        AppState.questions = questions
    }

    newQuestion() {
        AppState.questions = AppState.questions
    }


}


export const questionsService = new QuestionsService()