/***************************************************/
/* Diana Aguilar Zaragoza                          */
/***************************************************/
function findElements()
{
  var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  var b = [3,2,9,3,7,11,15,13,23,27,32,35,36,37];
  var c = [1,3,5,7,11,13,15,17,19,21,23,27,35,37];
  var d = [9,17,32,7,2,3,1,45,46,47,55,60,6,17];
  var all = [];
  var i=0, j=0, k=0, l=0, m=0;
  
  a = a.sort(function(a, b){return a-b;});
  b = b.sort(function(a, b){return a-b;});
  c = c.sort(function(a, b){return a-b;});
  d = d.sort(function(a, b){return a-b;});
  
  /*console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);*/
  
  
  while(j<a.length && k<b.length && l<c.length && m<d.length)
  {
   
    if((a[j] === b[k]) && b[k] === c[l] && c[l] === d[m]){      
      all[i] = a[j];  
      i++; 
      j++;
      k++; 
      l++;
      m++;
    }
    
    else if(a[j] < b[k]){      
       j++;
    }
 
    else if(b[k] < c[l]){      
      k++;
    } 
    
     else if(c[l] < d[m]){
       l++;
     }
    
    else{
      m++;
    }
    
  }
  
  console.log(all);
  

}

findElements();