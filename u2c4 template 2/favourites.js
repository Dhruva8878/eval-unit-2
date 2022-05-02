// write js code here corresponding to favourites.html

var fav=JSON.parse(localStorage.getItem("favourites"))||[];
console.log(fav);

fav.forEach(function(el){

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
    td6.innerText="Delete";
    td6.style.color="red";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
        delfun(el);
    })
   
  tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)
})

function delfun(el){
   var tr=document.querySelector("tr")
   tr.innerHTML="";
   
    localStorage.setItem("favourites",JSON.stringify(el))
    window.location.reload();
}

