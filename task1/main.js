// window.onload= function() {
//     // alert("hi");
// }

let image_Array = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
];

var last=-1;

$(function(){
    $("input").on("click",function(){
            // alert("Hi");
            var numberOflistin=$("li").length;
            //console.log(numberOflistin);
            var r =Math.floor(Math.random()*numberOflistin);
            while(Same(r,last)==true){
                var r =Math.floor(Math.random()*numberOflistin);
            }
            last=r;
            var same=r;
            console.log(r);
            if(Same(r,same)==true){
                $("h1").text($("li").eq(r).text());
                $("img").attr("src",image_Array[r])
            }

    });

});
function Same(r,s){
    if(r==s){
        return true;
    }
    else
    return false;
}