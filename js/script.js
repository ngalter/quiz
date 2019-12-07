var taga = document.createElement("div");
var question = document.createElement("div");
var showResults = document.createElement("div");
var quizTimer = document.createElement("div");
var startBtn = document.createElement("button");
var highLabel = document.createElement("LABEL");
var highScore = document.createElement("INPUT");
var quiz1 = document.createElement("INPUT");
var quiz2 = document.createElement("INPUT");
var fScores = document.createElement("div");
var fBtn = document.createElement("button");
var fInput = document.createElement("input");
var quizLabel1 = document.createElement("LABEL");
var quizLabel2 = document.createElement("LABEL");
var errorAudio = document.createElement("AUDIO");
var toneAudio = document.createElement("AUDIO");
var storeBtn = document.createElement("button");
var startOver = document.createElement("button");
var correctChoice = document.createElement("div");
var hScores = document.createElement("div");
var pastScores = document.createElement("li");
var showScores = document.createElement("button");
var clearScores = document.createElement("button");
var listScores = document.createElement("div");
var myAnswer = document.createElement("div");
var quizLen = 0;
errorAudio.setAttribute("src","./snd/error.mp3");
toneAudio.setAttribute("src","./snd/tone.mp3");
quizLabel1.for="quiz1";
quizLabel2.for="quiz2";
quiz1.setAttribute("type", "radio");
quiz2.setAttribute("type", "radio");
myQuestion = document.createElement("div");
quiz1.value = "1";
quiz2.value = "2";
var distance = 0;
var num = 0;
var len = 0;
var q = 0;
var questNo = 0;
var countDownDate = 0;
var finalTime = 0;
var quizChoice = 1;
var question = [];
var myQuiz = [];
var myBtn = [];
var myChoiceLen = 0;
var myKey = " ";

taga.innerHTML = "<strong>Coding Quiz Challenge</strong><br><br>Try to answer the following code related questions within the time left!  Keep in mind that incorrect answers will penalize your score by 10 seconds. Correct answers will boost your score by 10 seconds.";
highLabel.setAttribute("style","float:left;margin-top: -3.5em;margin-left: 1.5em;text-align:left;color:#3366ff;font-weight:400;font-family:sans-serif;")
highScore.setAttribute("style","float:left;margin-top: -10em; margin-left: 2em; text-align:left;border: solid 2px #3366ff; color: #666666; padding: .5em;font-family:sans-serif;border-radius:5px;");
taga.setAttribute("style","margin-left:auto;margin-right:auto;margin-top:5%;margin-bottom:5%; width:50%; text-align:center;background-color:#f4f4f4;color:#3366ff;font-weight:500;font-size:1em;font-family:sans-serif;border:solid 2px #3366ff;border-radius:5px;padding:3em;")
//question.setAttribute("style","margin-top: 3em; margin-bottom: 0em; margin-right:25%; margin-left:25%; width:45%; padding:1em;  text-align:left;background-color:#ffffff;color:#3366ff;font-weight:500;font-size:1.1em;font-family:sans-serif;")
startBtn.setAttribute("style","margin-left:40%; margin-right: 40%; margin-top:1em; width:20%; padding:1em 0em 1em 0em;  text-align:center;background-color:#3399FF;color:#ffffff;font-size:1em;border:solid 1px #ffffff; border-radius: 5px;")
startOver.setAttribute("style","margin-left:40%; margin-right: 40%; margin-top:6em; width:20%; padding:1em 0em 1em 0em;  text-align:center;background-color:#3399FF;color:#ffffff;font-size:1em;border:solid 1px #ffffff; border-radius: 5px;")
storeBtn.setAttribute("style","float:left;margin-top: 2em;margin-left: -8.5em;padding:.5em; text-align:left;background-color:#3399ff;color:#ffffff;font-size: 1em;border-radius: 5px;")
showResults.setAttribute("style","margin-left:25%; margin-right: 25%; width:50%; padding:1em 0em 2em 2em;  text-align:left;color:#3366ff;font-weight:500;font-size:1.1em;font-family:sans-serif;")
quizTimer.setAttribute("style","margin-left: auto; margin-right: auto; margin-top: 1em; margin-bottom: 2em;text-align:center;width: 50%;color:#3366ff;font-weight:600;font-family:sans-serif;display:none;")
correctChoice.setAttribute("style","margin-left:25%; color:#3366FF;font-size:1.1em;list-style:none;font-family:sans-serif;")
quizLabel1.setAttribute("style","margin-left:46%; width:20%; margin-top:-1em;text-align:left;color:#3366ff;font-family:sans-serif;")
quiz1.setAttribute("style","margin-left:43%;")
quizLabel2.setAttribute("style","margin-left:46%; width:20%; margin-top:-1em;text-align:left;color:#3366ff;font-family:sans-serif;")
quiz2.setAttribute("style","margin-left:43%;")
fScores.setAttribute("style","margin-left:20%; margin-right: 20%; width:60%; padding:10px; text-align:left;color:#3366ff;font-weight:500;font-size:1.1em;font-family:sans-serif;background-color:#efefef;border: solid 2px #cccccc; border-radius: 5px;")
hScores.setAttribute("style","margin-left:25%; margin-right: 25%; width:50%; padding:.5em;text-align:left;color:#3399FF;font-size:.8em;font-family:sans-serif;")

startOver.id = "sOver";
quizTimer.id = "timer";
highLabel.id = "label";
highScore.id = "high";
highLabel.for = "highScore";
storeBtn.id = "store";
quizLabel1.id = "r1";
quizLabel2.id = "r2";
quiz1.id ="q1";
quiz2.id ="q2";
startOver.innerHTML = "Start Over";
startBtn.innerHTML = "Start Quiz";
storeBtn.innerHTML = "Submit";
startBtn.id = "start";
showResults.id = "results";
correctChoice.id = "choice";

question.id = "quest";
myAnswer.id = "myA";

document.body.appendChild(quizTimer);
document.body.appendChild(highLabel);
highScore.style.display = "none";
document.body.appendChild(highScore);
document.body.appendChild(myQuestion);
highLabel.style.display = "none";
storeBtn.style.display = "none";
startOver.style.display = "none";
hScores.style.display = "none";
document.body.appendChild(correctChoice);
document.body.appendChild(storeBtn);
document.body.appendChild(taga);
document.body.appendChild(quiz1);
document.body.appendChild(quizLabel1);
document.body.appendChild(quiz2);
document.body.appendChild(quizLabel2);
document.body.appendChild(startBtn);
document.body.appendChild(showResults);
document.body.appendChild(fScores);
fScores.appendChild(fInput);
fScores.appendChild(fBtn);
fScores.appendChild(showScores);
fScores.appendChild(clearScores);
fScores.appendChild(listScores);
hScores.appendChild(pastScores);
document.body.appendChild(toneAudio);
document.body.appendChild(errorAudio);
document.body.appendChild(myAnswer);
document.body.appendChild(startOver);

fBtn.setAttribute("style","margin-left:.5em;width: 10em;")
showScores.setAttribute("style","margin-left:.5em;width: 10em;")
clearScores.setAttribute("style","margin-left:.5em; width: 10em;")
listScores.setAttribute("style","width:100%;margin-top: 1em;")
document.getElementById("label").innerHTML = "High Scorers:";
fInput.id  = "fi";
fBtn.id = "fb";
showScores.id = "ssBtn";
clearScores.id = "csBtn";
listScores.id = "listS"
hScores.id = "hs";
pastScores.id = "ps";
var myVar="time"; 

document.getElementById("q1").addEventListener("click", check1);
document.getElementById("q2").addEventListener("click", check2);
document.getElementById("sOver").addEventListener("click", startAgain);
document.getElementById("start").addEventListener("click", start);

correctChoice.style.display = "none";
document.getElementById("r1").innerHTML = "Code Quiz <i class=\"fas fa-laptop-code\"></i>";
document.getElementById("q1").checked = true;
document.getElementById("fb").innerHTML = "Your Initials"
document.getElementById("ssBtn").innerHTML = "Past Scores"
document.getElementById("csBtn").innerHTML = "Clear Scores"
document.getElementById("r2").innerHTML = "Surprise <i class=\"fas fa-paw\"></i>";
document.getElementById("q2").checked = false;
document.getElementById("listS").style.enableBackground = true;
fScores.style.display ="none";
quiz1.style.display = "block";
quiz2.style.display = "block";
quizLabel1.style.display = "block";
quizLabel2.style.display = "block";
startOver.style.display = "none"; 

function start() 
{
    getQuizType();
    myTimer();
    quiz();
}

function check1()
{
    document.getElementById("q1").checked = true;
    document.getElementById("q2").checked = false;
    quizChoice = 1;
    console.log(quizChoice);
}

function check2()
{
    document.getElementById("q2").checked = true;
    document.getElementById("q1").checked = false;
    quizChoice = 2;
    console.log(quizChoice);
}

function nextQuest()
{
    q++;
    clearQuestions();
    if (q < (questNo)&&distance>0)
    {
        quiz();
    }
    else
    {
        myQuestion.style.display = "none";
        clearQuestions();
    }
}

function myTimer()
{
 // Set the date we're counting down to
var len = myQuiz[0].choices.length;

questNo = len;
len = len*15000 + 2000;
console.log(len);
countDownDate = new Date().getTime()+len;

var x = setInterval(function() {
    var now = new Date().getTime();
    distance = countDownDate - now;

    // Time calculations for minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))*60;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    var l = (minutes+seconds).toString();
    var str = "Time Remaining: " + l + "s";
    document.getElementById("timer").innerHTML = str;
    console.log(document.getElementById("timer").innerHTML = str);

    // If the count down is finished, write some text
    if (distance <=0 || q > 3) 
    {
        clearInterval(x);
        finalTime = minutes + seconds;
        if (finalTime < 0)
        {
            finalTime = 0;
        }
        var str = "Final Score: " + finalTime;
        document.getElementById("timer").innerHTML = str;
        myQuestion.style.display = "none";
        clearQuestions();
        correctChoice.style.display = "none";
        fScores.style.display ="block";
        startOver.style.display = "block"; 
    }
    }, 1000);
}

fBtn.addEventListener("click", function(event)
{
    var len = localStorage.length;
    console.log(len);
    myKey = (len+1).toString();
    strFT = finalTime.toString();
    user = document.getElementById("fi").value;
    result = user.concat(": ",strFT); 
    
        var input = localStorage.setItem(myKey,result);
        console.log(myKey + result);
});



function getQuizType()
{
    myQuiz = questions.filter(function(quiz) {
        console.log(quizChoice);
        return quiz.id === quizChoice;
      });
      quizLen = myQuiz.length;
     
      quiz1.style.display = "none";
      quiz2.style.display = "none";
      quizLabel1.style.display = "none";
      quizLabel2.style.display = "none";
      correctChoice.style.display = "none";
}

function clearQuestions()
{
    var myobj = document.getElementById("theList");
    if (myobj)
    {
        myobj.remove();
    }
}

function loadQuestions()
{   
    myQuestion.textContent = myQuiz[q].title;
    correctChoice.innerHTML = myQuiz[q].answer;
    var myList = document.createElement("div");
   
    myList.id = "theList";
 
    //var myList = "";
    myAnswer.setAttribute("style","margin-left:25%;borer-top: solid 2px #3366ff; color:#3366FF;font-size:1.1em;font-family:sans-serif;")
    myQuestion.setAttribute("style","margin-left:25%; margin-right: 25%; margin-top: 5em;width:50%; padding:1em 1em 1em 2em; color:#3366FF;font-size:1.1em;list-style:none;font-family:sans-serif;")
    document.body.appendChild(myList);
   
    var i = 0;
    for(i=0; i<myQuiz[q].choices.length; i++)
    {  
        var choice = myQuiz[q].choices[i];
        var li = document.createElement("li");
        li.textContent = choice;
        li.setAttribute("data-index",i);
        li.setAttribute("style","margin-left:25%; margin-right: 25%; width:50%; padding:1em 1em 1em 2em;color:#ffffff; background-color:#3366FF;font-size:1.1em; border:solid 1px #ffffff; border-radius: 5px;font-size:1.1em;list-style:none;font-family:sans-serif;")

        myList.appendChild(li);
        
    }
    myList.addEventListener("click",function(event)
    {
        var element = event.target;
        console.log(myList.setAttribute.disabled === true);
        if (element.matches("li")===true)
        {
            if (element.textContent === correctChoice.innerHTML)
            {
                toneAudio.play();
                countDownDate = countDownDate + 10000;        
                element.setAttribute("style","margin-left:25%; margin-right: 25%; width:50%; padding:1em 1em 1em 2em;color:#ffffff; background-color:#00cc00;font-size:1.1em; border:solid 1px #ffffff; border-radius: 5px;font-size:1.1em;list-style:none;font-family:sans-serif;") 
            }
            else
            {   
                errorAudio.play(); 
                countDownDate = countDownDate - 10000;
                element.setAttribute("style","margin-left:25%; margin-right: 25%; width:50%; padding:1em 1em 1em 2em;color:#ffffff; background-color:#ff0000;font-size:1.1em; border:solid 1px #ffffff; border-radius: 5px;font-size:1.1em;list-style:none;font-family:sans-serif;")
        
            }
            var xVar = setInterval(myTimer ,1000);
            function myTimer() 
            {
                console.log("timer");
                var y=clearInterval(xVar);
                correctChoice.style.display = "none";
                nextQuest();
            }     
        } 
        
    });
}

clearScores.addEventListener("click", function(event)
{
    localStorage.clear();
});

showScores.addEventListener("click", function(event)
{
    var len = localStorage.length;
    console.log(len);
    var str = "";
        for (var i = 1; i<len; i++)
        {
            key = i.toString();
            var li = document.createElement("li");
            li.innerText = localStorage.getItem(key);
            console.log(li.innerText);
            fScores.appendChild(li);   
        }
});


function startAgain()
{
    location.reload();
}

function quiz()
{
    taga.style.display = "none";
    startBtn.style.display = "none";
    quizTimer.innerHTML = "&nbsp;";
    quizTimer.style.display = "block";
    highLabel.style.display = "none";
    showResults.style.display = "none";
    myQuestion.style.display = "block";
    loadQuestions();   
}
