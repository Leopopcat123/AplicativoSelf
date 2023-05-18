var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox"); 
var Content;

function start()
{
  Textbox.innerHTML = ""; 
  recognition.start();
} 

recognition.onresult = function(event)
{
  console.log(event); 
  Content = event.results[0][0].transcript;
  Textbox.innerHTML = Content;
  console.log(Content);
  if(Content =="selfie")
  {
    console.log("tirando selfie --- ");
    speak();
  }
}

function speak()
{
  var synth = window.speechSynthesis;
  speak_data = "Tirando sua selfie em 5 segundos";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  
  setTimeout(function()
  { 
   img_id = "selfie1"
   take_selfie(); 
   speak_data = "Tirando sua proxima selfie em 10 segundos"
   var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
    save();
  }, 5000);

  setTimeout(function()
  { 
   img_id = "selfie2"
   take_selfie(); 
   speak_data = "Tirando sua proxima selfie em 15 segundos"
   var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
    save();
  }, 10000);
  
  setTimeout(function()
  { 
   img_id = "selfie3";
   take_selfie(); 
    save();
  }, 15000);
}


camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
  Webcam.snap(function(data_uri) 
  {
    if (img_id == "selfie1")
    {
      document.getElementById("result1").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';

    }
    if (img_id == "selfie2")
    {
      document.getElementById("result2").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';

    }
    if (img_id == "selfie3")
    {
      document.getElementById("result3").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';

    }
  });
}

function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}