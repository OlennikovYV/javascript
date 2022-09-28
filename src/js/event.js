const questions = [
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 0,
    numAttempts: 2,
  },
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 1,
    numAttempts: 3,
  },
  {
    question: 'Question',
    options: ['Choice1', 'Choice2', 'Choice3', 'Choice4'],
    rightAns: 0,
    numAttempts: 1,
  },
];

questions.forEach(question => (question.usersAnswer = null));

console.log(questions);
