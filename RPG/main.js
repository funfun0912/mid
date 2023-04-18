let mapArray,ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy,imgsh;
const gridLength=100;
var mbreak=false;
function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
}

$(function(){
    //  0 -> 可走 , 1-> 障礙 , 2->終點 , 3->敵人
    mapArray = [
        [0,1,1,1,0,1,1,0],
        [0,0,0,1,0,0,0,0],
        [3,1,0,1,1,0,3,1],
        [1,0,0,0,0,0,0,1],
        [1,1,1,1,0,1,1,1],
        [0,0,0,1,0,0,1,0],
        [0,1,0,1,0,1,1,0],
        [4,1,0,0,0,0,3,2],
    ];


    // getContext 為原生語法 而前面屬於 jquery 所以要用[0]
    ctx = $("#myCanvas")[0].getContext("2d")

    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain={
        x:0,
        y:0
    };
    imgMain.onload= function(){
        // (哪以張圖 , 開始的位置x,y(左上角) , 要裁寬度和高度 , 貼上的位置x,y(左上角)  , 貼上圖的寬和高)
        ctx.drawImage(imgMain,0,0,90,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    };
    //use function to load images
    let sources = { 
        Mountain:"images/material.png",
        Enemy:"images/Enemy.png",
        sh:"images/sh.jpg"
    };

    loadImages(sources,function(images){
        for(var x in mapArray){
            for(var y in mapArray[x]){
                if(mapArray[x][y]==1){
                    ctx.drawImage(images.Mountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==2){
                    ctx.drawImage(images.Mountain,224,31,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==3){
                    ctx.drawImage(images.Enemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==4){
                      ctx.drawImage(images.sh,0,0,200,200,y*gridLength,x*gridLength,gridLength,gridLength);
                }
            }
        }
    });

});  




$(document).on("keydown",function(event){
    console.log(event.code);
    
    let targetImg,targetBlock,cutImagePositionX; 
    targetImg={
        x:-1,
        y:-1
    };
    targetBlock={
        //主角的目標(對應2維陣列)
        x:-1,
        y:-1
    }
    event.preventDefault();//上下左右不影響畫面
    switch(event.code){
        case "ArrowLeft":
            targetImg.x=currentImgMain.x-gridLength;
            targetImg.y=currentImgMain.y;
            cutImagePositionX=175;//臉朝左
            break;
        case "ArrowUp":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y-gridLength;
            cutImagePositionX=355;//臉朝上
            break;
        case "ArrowRight":
            targetImg.x=currentImgMain.x+gridLength;
            targetImg.y=currentImgMain.y;
            cutImagePositionX=540;//臉朝右
            break;
        case "ArrowDown":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y+gridLength;
            cutImagePositionX=0;//臉朝下
            break;
        default://其他按鍵不處理
            return;
    }

    if(targetImg.x <= 700 && targetImg.x >= 0 && targetImg.y <= 700 && targetImg.y >= 0){
        targetBlock.x=targetImg.y / gridLength;
        targetBlock.y=targetImg.x / gridLength;
    }
    else{
        targetBlock.x=-1;
        targetBlock.y=-1;
    }

    //清空主角原本所在的位置
    ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    
    
    if(targetBlock.x!=-1&&targetBlock.y!=-1){    
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0://一般道路(可移動)
                $("#talkBox").text("");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 1://有障礙物(不可移動)
                $("#talkBox").text("竹筍");
                //console.log(mbreak);
                if(mbreak==true){
                    currentImgMain.x=targetImg.x;
                    currentImgMain.y=targetImg.y;
                    mbreak=false;
                }
                break;
            case 2://終點(可移動)
                $("#talkBox").text("抵達終點");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 3://敵人(不可移動)
                $("#talkBox").text("安抓?");
                break;
            case 4://寶箱(可移動)
                $("#talkBox").text("寶箱!可撞開竹筍!");
                mbreak=true;
                console.log(mbreak);
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
        }
    }
    else{
        $("#talkBox").text("邊界");
    }
    //重新繪製主角
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    //event.preventDefault();//上下左右不影響畫面
});



