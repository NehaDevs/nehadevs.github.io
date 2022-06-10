console.log('Hello World!');


var date = document.getElementById("dateinput");


function check(){
  if(date.value == "2022-05-06"){
    window.location = 'owo.html';
  }
  else{
    alert('Incorrect Date');
  }
}
