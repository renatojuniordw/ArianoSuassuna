(function() {
  var questions = [{
    question: "Ariano Suassuna viveu boa parte de sua vida na cidade de Recife no estado de Pernambuco. Mas qual foi o verdadeiro estado que o poeta nasceu?", //perguntas
    choices: [" A - Santa Catarina", " B - Rio de Janeiro", " C - São Paulo", " D - Paraíba"], //altenativas
    correctAnswer: 3	// resposta 
  }, {
    question: "Qual ano que seu Pai, João Suassuna faleceu?",
    choices: [" A - 1935", " B - 1941", " C - 1929", " D - 1930"],
    correctAnswer: 3
  }, {
    question: "Em qual ano a família de Ariano Suassuna chega ao Recife?",
    choices: [" A - 1939", " B - 1935", " C - 1941", " D - 1942"],
    correctAnswer: 3
  }, {
    question: "Em 1945 Ariano Suassuna fez sua primeira publicação, que se dava o nome de:",
    choices: [" A -	O Auto da Compadecida", " B - Noturno", " C - O Santo e a Porca", " D - Uma Mulher Vestida de Sol"],
    correctAnswer: 1
  }, {
    question: "Qual o nome da sua primeira peça que recebeu o prêmio Nicolau Carlos Magno em 1948?",
    choices: [" A - Uma Mulher Vestida de Sol", " B - Catam as Harpas de Sião", " C - O Casamento Suspeito", " D - A História de Amor de Fernando e Isaura"],
    correctAnswer: 0
  }, {
    question: "O Auto da Compadecida foi uma das obras mais influentes de Ariano Suassuna, e conquistou medalha de ouro da Associação Brasileira de Críticos Teatrais. Em qual ano o poeta escreveu a obra?",
    choices: [" A - 1955", " B - 1950", " C - 1940", " D - 1942"],
    correctAnswer: 0
  }, {
    question: "Ariano além de escritor, poeta, dramaturgo, advogado, teatrólogo, ele também foi professor. Em qual ano Ariano passou a lecionar na Universidade Federal de Pernambuco?",
    choices: [" A -	1946", " B - 1956", " C - 1936", " D - 1976"],
    correctAnswer: 1
  }, {
    question: "Em 1959 Ariano Suassuna tomou decisões marcantes em sua vida, e elas foram:",
    choices: [" A -	Abandonou a advocacia de vez, passou a atuar como professor na Universidade Federal de Pernambuco e fundou o Teatro Popular do Nordeste.", " B -	Deu início ao Movimento Armorial, que buscava conhecer a cultura popular para formar uma arte erudita partindo dos elementos dessa cultura.", " C - Parou de escrever e passou a atuar na área de advocacia."], 
    correctAnswer: 0
  }, {
    question: "Em 1964 escreve outra de suas obras mais conhecidas, que se deu o nome de:",
    choices: [" A - A Onça Castanha e a Ilha Brasil", " B - A Caseira e a Catarina", " C -	A Farsa da Boa Preguiça", " D -	O Santo e a Porca"],
    correctAnswer: 3
  }, {
    question: "Em qual ano Ariano foi nomeado Diretor do Departamento de Extensão Cultural da Universidade Federal de Pernambuco?",
    choices: [" A -	1968", " B - 1958", " C - 1969", " D - 1965"],
    correctAnswer: 2
  }, {
    question: "O Movimento Armorial foi uma de suas obras que buscava conhecer a cultura popular para formar uma arte erudita partindo dos elementos dessa cultura. Em qual data Ariano deu início ao Movimento Armorial?",
    choices: [" A -	18 de outubro de 1970", " B - 18 de Janeiro de 1970", " C -	28 de Maio de 1971", " D - 24 de Outubro de 1973"],
    correctAnswer: 0
  }, {
    question: "Em 1976 completou 30 anos que lecionava na Universidade Federal de Pernambuco. Ariano lecionava quatro matérias, quais eram?",
    choices: [" A - Estética e Teoria do Teatro, Literatura Brasileira e História da Cultura Brasileira", " B - Música, Teatro e Literatura Brasileira", " C - Literatura Brasileira, Estética e Teatro", " D - Cultura Brasileira, Música e Estética"],
    correctAnswer: 0
  }, {
    question: "Ariano sempre se destacou pela sua grande inteligência. Na academia Pernambucana de letras ganhou um destaque ao ser eleito para a cadeira N°18. Em qual ano aconteceu essa eleição?",
    choices: [" A -	1998", " B - 1993", " C - 1997", " D - 1996"],
    correctAnswer: 1
  }, {
    question: "Ariano mesmo depois de se aposentar ele da continuidade na vida política como secretario de cultura de Pernambuco no governo de Eduardo Campos. Em que ano Ariano se aposenta?",
    choices: [" A -	1997", " B - 1996", " C - 1994", " D - 1991"],
    correctAnswer: 2
  }, {
    question: "Em que ano Ariano é eleito a ocupar a cadeira de N°35 na academia de letras da Paraíba?",
    choices: [" A -	1999", " B - 2001", " C - 2000", " D - 1998"],
    correctAnswer: 2
  }, {
    question: "Ariano Suassuna faleceu decorrente a complicações de um AVC hemorrágico. Qual foi a data do seu falecimento?",
    choices: [" A -	23 de julho de 2015", " B -	28 de julho de 2011", " C -	23 de julho de 2014", " D -	24 de maio de 2014"],
    correctAnswer: 2
  }, {
    question: "Qual foi a ultima obra de Ariano Suassuna antes de seu falecimento?",
    choices: [" A -	A História de Amor de Fernando e Isaura", " B -	A Pena e a Lei", " C - O Homem da Vaca e o Poder da Fortuna", " D -	Almanaque Armorial"],
    correctAnswer: 3
  }
  ];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Por favor, faça uma seleção !');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Questão ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('Você acertou ' + numCorrect + ' de ' +
                 questions.length + ' Questões');
    return score;
  }
})();