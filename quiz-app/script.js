const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;
const questions = [
  {
    question: 'What was the name of Jon Snow wolf?',
    answers:[
      {text: 'Ghost', correct:true},
      {text: 'Summer', correct:false},
      {text: 'Snow', correct:false},
      {text: 'Copper', correct:false}

      

    ]
  },
  {
    question: 'What was the first feature-length computer-animated movie?',
    answers:[
      {text: 'Toy Story', correct:true},
      {text: 'Tron', correct:false},
      {text: 'Lion king', correct:false},
      {text: '101 Dalmatians', correct:false}

      

    ]
  },
  {
    question: 'Who directed the Kill Bill movies',
    answers:[
      {text: 'Quentin Tarantino', correct:true},
      {text: 'David Lean', correct:false},
      {text: 'Stanley Kubrick', correct:false},
      {text: 'Arnold Schwarzenegger', correct:false}

      

    ]
  },
  {
    question: 'What vehicle in PUBG has the highest top speed?',
    answers:[
      {text: 'Motorcycle', correct:true},
      {text: 'PG-117', correct:false},
      {text: 'Dacia', correct:false},
      {text: 'Buggy', correct:false}

      

    ]
  },
  {
    question: 'In the "Toaru Majutsu no Index" anime, Touma Kamijou is a level 0 esper that has the ability to do what?',
    answers:[
      {text: 'Dispell any esper or magical powers', correct:true},
      {text: 'Teleport', correct:false},
      {text: 'Make telepathic communications', correct:false},
      {text: 'Create electricity from his own body', correct:false}

      

    ]
  }
]

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click',()=>{
  currentQuestionIndex++;
  loadQuestion();
} )

function startGame(){
  

  quizContainer.classList.remove('hide')
  startBtn.classList.add('hide');
  
  shuffledQuestions = questions.sort(()=> Math.random() - .5);
  currentQuestionIndex = 0;
  loadQuestion()
}



function loadQuestion(){
  document.body.classList.remove('wrong')
  document.body.classList.remove('correct')
  resetAnswer();
  showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question){
  questionEl.innerHTML = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsEl.appendChild(button)
  })
}
function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsEl.children).forEach(button=>{
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length> currentQuestionIndex+1){
    nextBtn.classList.remove('hide');
  }else{
    startBtn.innerText='Restart';
    startBtn.classList.remove('hide')
  }

}
function setStatusClass(element, correct){
  clearStatus(element)
  if(correct){
    element.classList.add('correct')
  }else{
    element.classList.add('wrong')
  }
function clearStatus(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')

}
}
function resetAnswer(){
  nextBtn.classList.add('hide')

  while(answerButtonsEl.firstChild){
    answerButtonsEl.removeChild(answerButtonsEl.firstChild)
  }
}