/***************************************************/
/* Diana Aguilar Zaragoza                          */
/***************************************************/
function compress()
{
  var str = 'aaaaaabbbbbbbbbcccddweee';
  var shortened = '';
  var counter = 1;
  
  for(i=0; i<str.length; i++)
  {
    var next = i+1;
    if(str.charAt(i) === str.charAt(next))
    {
      counter++;
    }
    
    else
    {
      shortened = shortened + str.charAt(i) + counter.toString();
      counter = 1;      
    }    
  }
  
  console.log(shortened);
}

compress();