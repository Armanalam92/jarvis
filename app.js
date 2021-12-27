//elements 
 

 const startBtn=document.querySelector("#start")
 const stopBtn=document.querySelector("#stop");
 const speakBtn=document.querySelector("#speak");

//speech recognition setup  
   



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//sr start 
recognition.onstart = function () {
    console.log("vr active");

};

//sr result
recognition.onresult = function (event){

    let current = event.resultIndex;
    let transcript = event.results[current]
    [0].transcript;
    transcript = transcript.toLowerCase();
    console.log('my words : ${transcript}');
 
    if (transcript.includes("jarvis are you here")) {
        readout("yes sir i don't like to go");
    };

    if (transcript.includes("no jarvis")) {
        readout("ok sir");
    };

    if (transcript.includes("jarvis am i smart")) {
        readout("yes sir i am sure about this");
    };

    if (transcript.includes("jarvis shut down yourself")) {
        readout("ok sir shuting down the system 1,2,3");
    };
  
    if (transcript.includes("hi jarvis wake up")) {
        readout("hello sir, what can i do for you today , sir you know what project we are doing yesternight can i open it");
    };
   
    if (transcript.includes("jarvis you know i dream you in childhood")) {
        readout("thanks for dreaming me sir i like you so much because you made me");
    };

    if (transcript.includes("thank you jarvis")) {
        readout("not a problem sir");
    };

    if (transcript.includes("jarvis what is my father name")) {
       readout("noor alam");
    };

    if (transcript.includes("jarvis what is my mother name")) {
       readout("Manisha");
    };

    if (transcript.includes("jarvis what is my sister name")) {
     readout("anaam alam");
    };
    
    if (transcript.includes("jarvis open youtube")) {
        readout("opening youtube sir");
        window.open("https://www.youtube.com/")
    };
  
    if (transcript.includes("jarvis open google")) {
        readout("opening Google sir");
        window.open("https://www.google.com/");
    };
  
    if (transcript.includes("jarvis open star captain youtube channel")) {
        readout("opening star captian sir");
        window.open("https://www.youtube.com/c/STAR-Captain");
    };
  
    if (transcript.includes("jarvis open my youtube channel")) {
        readout("opening code with armaan sir");
        window.open("https://www.youtube.com/channel/UC4VKiyUCYJCreaqXl_Dg8xQ");
    };
    
    if (transcript.includes("jarvis open my instagram")) {
        readout("opening instagram sir");
        window.open("https://www.instagram.com/nandu.lovemamma/");
    };
   
    if (transcript.includes("jarvis start music")) {
        readout("starting music sir");
        window.open("https://www.youtube.com/watch?v=MD_WGBjV3tI&list=PL60R4DfXP-wajmDkWxnVglDaX_-WV8viU&index=1");
    };
   
    if (transcript.includes("jarvis start cs")) {
        readout("starting ulle sir");
        window.open("https://www.youtube.com/watch?v=eYSSH0iJAa4&list=PL60R4DfXP-wajmDkWxnVglDaX_-WV8viU&index=2");
    };
      
    if (transcript.includes("jarvis open white")) {
        readout("opening whitehat sir");
        window.open("https://code.whitehatjr.com/s/dashboard");
    };
    
    if (transcript.includes("jarvis open poem")) {
        readout("opening poem sir");
        window.open("https://www.youtube.com/watch?v=vDwbA7sEryo");
    };
        
    if (transcript.includes("jarvis what about weather")) {
        readout("opening weather sir");
        window.open("https://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396");
    };
    
    if (transcript.includes("jarvis open github")) {
        readout("opening github sir");
        window.open("https://github.com/");
    };
};

//sr stop 
recognition.onend = function() {
    console.log("vr deactivated");
};
//sr conntinuous 
//recognition.continuous=true;

startBtn.addEventListener("click", () => {
    recognition.start();
});


stopBtn.addEventListener("click", () => {
    recognition.stop();
});

speakBtn.addEventListener("click", () =>{
     readout("hi, my name is JARVIS and i am a ai maded by armaan, let's talk to me");
});

// J.A.R.V.I.S speech 
function readout(message){
    const speech = new SpeechSynthesisUtterance()
    speech.text = message;
    speech.volume = 1
    window.speechSynthesis.speak(speech)
    console.log("speaking out")
} 



