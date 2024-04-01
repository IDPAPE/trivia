import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { questionsService } from "../services/QuestionsService.js"
import { setHTML } from "../utils/Writer.js"

export class QuestionsController {
    constructor() {
        console.log('questions controller loaded')
        this.fetchTriviaQuestions()
        AppState.on('questions', this.drawQuestions)
    }

    drawQuestions() {
        let currentQuestion = ''
        let randomizedQuestion = Math.floor(Math.random() * 9)
        console.log(randomizedQuestion)
        for (let i = 0; i < AppState.questions.length; i++) {
            if (i == randomizedQuestion) {
                currentQuestion = AppState.questions[i].GetQuestionInfo
            }
        }
        console.log(currentQuestion)
        setHTML('trivia-body', currentQuestion)
    }

    //randomly picks a question from the list and returns
    randomQuestion() {
        let currentQuestion = ''
        let randomizedQuestion = Math.floor(Math.random() * 9)
        console.log(randomizedQuestion)
        for (let i = 0; i < AppState.questions.length; i++) {
            if (i == randomizedQuestion) {
                currentQuestion = AppState.questions[i].GetQuestionInfo
            }
        }
        console.log(currentQuestion)
        return currentQuestion
    }
    newQuestion() {
        console.log('getting new question')
        questionsService.newQuestion()
    }

    fetchTriviaQuestions() {
        questionsService.fetchTriviaQuestions()
    }

}