// write js code here corresponding to index.html
// You should add submit event on the form

var form=document.querySelector("#masaiForm");
form.addEventListener("submit",mydata);
var teamdata=JSON.parse(localStorage.getItem("schedule"))||[];

function mydata(){
    event.preventDefault()

    var data={
        Matchno:form.matchNum.value,
        team1:form.teamA.value,
        team2:form.teamB.value,
        date:form.date.value,
        place:form.venue.value,
    };
    teamdata.push(data); 
    
    localStorage.setItem("schedule",JSON.stringify(teamdata));

}
