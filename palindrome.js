/***************************************************/
/* Diana Aguilar Zaragoza                          */
/***************************************************/
function isPalindrom(str) {
    var str2 = str.split('').reverse().join('');
    str2 = str2.replace(/\s+/g, '');
    str = str.replace(/\s+/g, '');
    //console.log(str2);
    
    if(str === str2){
        console.log("yes");
    }
    
    else
    {
        console.log("no");
    }
}

isPalindrom("ireri");