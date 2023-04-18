var topicinput = document.getElementById("topics");
var submitBtn = document.querySelector(".submitBtn");

function FsubmitBtn(value) {
    var str = "";
    var submitValue = topicinput.value;
    str = submitValue;
    alert(str);
    topic.push(str);
    //console.log(topic[5]);
    let millisecsPerDay = 24*60*60*1000;
    let x=topic.length-1;
    $("#coursTable").append(    
        "<tr>"+
        `<td>${x+1}</td>`+
        `<td>${(new Date(startDate.getTime() + 7*x*millisecsPerDay)).toLocaleDateString()}</td>`+
        `<td>${topic[x]}</td>`+
        "</tr>"
    );
    //console.log(topic.length);
    
    //window.location.replace(window.location.href);
  }
  submitBtn.addEventListener("click", FsubmitBtn);

$(function tableee(){
    $("#coursTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount=topic.length;
    console.log(topicCount)

    let millisecsPerDay = 24*60*60*1000;

    for(let x=0;x<topicCount;x++){
        $("#coursTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+
            `<td>${(new Date(startDate.getTime() + 7*x*millisecsPerDay)).toLocaleDateString()}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>"
        );
    }
    //submitBtn.addEventListener("click", tableee);
});
