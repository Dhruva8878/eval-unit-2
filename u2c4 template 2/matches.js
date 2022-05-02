// write js code here corresponding to matches.html


var match=JSON.parse(localStorage.getItem("schedule"))
var favourite=[];
  
match.forEach(function(el){

    displaydata(el);
    function displaydata(el){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=el.Matchno;
    
        var td2=document.createElement("td");
        td2.innerText=el.team1;
    
        var td3=document.createElement("td");
        td3.innerText=el.team2;
    
        var td4=document.createElement("td");
        td4.innerText=el.date;
    
        var td5=document.createElement("td");
        td5.innerText=el.place;
    
        var td6=document.createElement("td");
        td6.innerText="favourite"
        td6.style.color="green"
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            myfav(el)
        })


       tr.append(td1,td2,td3,td4,td5,td6);
       document.querySelector("tbody").append(tr);
    }
   
})
function myfav(el){ 

    favourite.push(el);
     
    localStorage.setItem("favourites",JSON.stringify(favourite))
    
 }

