var btnIndex = [];
var btnValue = [];
var buttonOne = ["Microsoft", "RPG", "FPS", "Mario", "Call of Duty"];
var buttonTwo = ["Sony", "Animal care", "Terror", "Sonic the Hedhog", "Darksides"];
var certo = ["Microsoft", "RPG", "Terror", "Mario", "Call of Duty"];
var errado = ["Sony", "Animal care", "FPS", "Sonic the Hedhog", "Darksides"];
var cont = 0;
$(document).ready(function($){
  var contQuest = 0;
  $("#games").click(function(){
    for(var i = 0;i < 5; i++){
      gamesQuestions();
    }
  });

  function notifConfirm(msg, title, buttonOne, buttonTwo){
      navigator.notification.confirm(
      msg, //message
      onClick, //Callback
      title, //Title
      [buttonOne, buttonTwo] //Buttons
      );
  }
  function onClick(buttonIndex){
    if(cont == 0)btnIndex.shift(); 
    var i = buttonIndex;
    btnIndex.push(i);
    if(btnIndex[cont] == 1)btnValue.push(buttonOne[cont]);
    else btnValue.push(buttonTwo[cont]);
    if(btnValue[cont] == certo[cont]){
      navigator.notification.beep(1);
    }
    else if(btnValue[cont] == errado[cont]){
      navigator.vibrate(500);
    }
    if(btnIndex.length = 5)add();
    cont++;
    return;
  }
  function gamesQuestions(){
    if(contQuest == 0){
      var msg = "Qual dessas franquias é de jogos de tiro?";
      var title = "Primeira Pergunta";
      notifConfirm(msg, title, buttonOne[4], buttonTwo[4]);
      contQuest++;
    }
    else if(contQuest == 1){
      var msg = "Qual desses jogos pertence a Nintendo?";
      var title = "Segunda Pergunta";
      notifConfirm(msg, title, buttonOne[3], buttonTwo[3]);
      contQuest++;
    }
    else if(contQuest == 2){
      var msg = "Qual resident evil é originalmente uma franquia de...";
      var title = "Terceira Pergunta";
      notifConfirm(msg, title, buttonOne[2], buttonTwo[2]);
      contQuest++;
    }
    else if(contQuest == 3){
      var msg = "Pokemon é um jogo de qual genero?";
      var title = "Quarta Pergunta";
      notifConfirm(msg, title, buttonOne[1], buttonTwo[1]);
      contQuest++;
    }
    else if(contQuest == 4){
      var msg = "Halo é uma franquia exclusiva da...";
      var title = "Quinta Pergunta";
      notifConfirm(msg, title, buttonOne[0], buttonTwo[0]);
      contQuest++;
    }
  }
});