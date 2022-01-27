

function show(){
var date =new Date();
var h =date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
var session="AM";
 if(h==0)
 {
     h=12; 
    //  12 hour format
 }
 if(h>12)
 {
     h=h-12
     session="PM";
 }

// to get double the digits before less than 10 numbers

//    if(h<10)
//     {
//         h="0"+h
//     }
//     if(m<10)
//     {
//         m="0"+m
//     }
//     if(s<10)
//     {
//         s="0"+s
//     }
 h= h<10? "0"+h:h;
 m= m<10? "0"+m:m;
 s= s<10? "0"+s:s;


document.getElementById("digitalclock").innerHTML=h +":" + m + ":"+ s +" " + session

// the seconds started running by default method
setTimeout(show,1000);
    

}
show();