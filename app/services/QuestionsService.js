import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"


class QuestionsService {

    async fetchTriviaQuestions() {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple')
        console.log('fetched', response)
        const questionsPojo = await response.json()
        console.log('json converted', questionsPojo)
        const questions = questionsPojo.results.map(question => new Question(question))
        console.log(questions)
        AppState.questions = questions

    }
}

export const questionsService = new QuestionsService()