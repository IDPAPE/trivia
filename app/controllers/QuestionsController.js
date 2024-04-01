import { questionsService } from "../services/QuestionsService.js"

export class QuestionsController {
    constructor() {
        console.log('questions controller loaded')
        this.fetchTriviaQuestions()
    }

    fetchTriviaQuestions() {
        questionsService.fetchTriviaQuestions()
    }
}