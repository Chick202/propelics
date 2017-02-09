/***************************************************/
/* Diana Aguilar Zaragoza                          */
/***************************************************/

function drawTop(i){
  var top="";
 
  for(j=0; j<i; j++){
    top = top + '*';
  }
  
  console.log(top);  
}

function writeWord(word, bl){
  var w = "* " + word;
  var spaces = "";
  
  //console.log(word);
  //console.log(bl);
  
  if(w.length < bl){
    for(i=w.length; i<bl-1; i++)
    {
      w = w + ' ';
    }
  }
   w = w +"*";    
   return w;
}


function frame() {
var arr = ["November", "is", "the", "coolest", "month", "of", "the", "Year"];
var boxlenght = 0;
var word = "";
  
  //console.log(arr);
  
  for(i=0; i<arr.length; i++)
  {
    if(arr[i].length > boxlenght){
      boxlenght = arr[i].length;
    }
  }  
  boxlenght = boxlenght + 4;
  drawTop(boxlenght);
  
  var i = 0;
  while(i < arr.length){
    word = arr[i];
    word = writeWord(word, boxlenght)
    console.log(word);
    i++;
  }
  
  drawTop(boxlenght);
   
}

frame();

