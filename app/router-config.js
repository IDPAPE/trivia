import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuestionsController } from "./controllers/QuestionsController.js";
import { Router } from "./utils/Router.js";

export const router = new Router([
  {
    path: '',
    controllers: [QuestionsController],
    view: 'app/views/QuestionsView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])