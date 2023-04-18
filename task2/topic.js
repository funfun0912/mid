//var topicinput = document.getElementById("topics");
//var submitBtn = document.querySelector(".submitBtn");
//var dateset =document
let topic = [
    "課程介紹",
    "環境安裝 &Lab1",
    "國定假日",
    "Lab2 & Lab3",
    "Lab4"
];


let startDate = new Date();

//function FsubmitBtn(value) {
    //var str = "";
    //var submitValue = topicinput.value;
    //str = submitValue;
    //alert(str);
    //topic.push(str);
    //console.log(topic);
    //console.log(topic[5]);
    
//  }
//  submitBtn.addEventListener("click", FsubmitBtn);

function setMonthAndDay(startmonth,startday){
    startDate.setMonth(startmonth-1,startday);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);

}
setMonthAndDay(2,14);