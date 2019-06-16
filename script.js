


var ball=document.getElementById("ball");

var xMin=0;
var yMin=0;
var xMax= window.innerWidth-150;   //max value of x coordinate for ball,i.e when ball is touching right= width of window-width of ball.
var yMax=window.innerHeight-150;  //max value of y coordinate for ball,i.e when ball is touching bottom= height of window-height of ball.


var flag=true;
function stop(){
    flag=false;
}

function right(){
    flag=true; //if stop fn has made flag false, then pressing right movement key will again make it true to start motion.
    ball.style.boxShadow="2px 0px 8px 2px rgba(97, 96, 96)";
    var id=setInterval(function(){
        
        var currentPos=ball.getBoundingClientRect();
        if(currentPos.x>=xMax || flag==false){
            ball.style.boxShadow="2px 0px 8px 2px rgba(157, 253, 253, 0.726)";
            clearInterval(id);
            return;
        }
        var ballPos=window.getComputedStyle(ball, null).getPropertyValue("left");
        
        ballPos=ballPos.slice(0,-2);   
        var val=eval(ballPos);
        val+=2;
        var str=val+"px";
        ball.style.left=str;

    },1);  
}

function left(){
    flag=true; 
    ball.style.boxShadow="2px 0px 8px 2px rgba(97, 96, 96)";
    var id=setInterval(function(){
        
        var currentPos=ball.getBoundingClientRect();
        if(currentPos.x<=xMin || flag==false){
            ball.style.boxShadow="2px 0px 8px 2px rgba(157, 253, 253, 0.726)";
            clearInterval(id);
            return;
        }
        var ballPos=window.getComputedStyle(ball, null).getPropertyValue("left");
        
        ballPos=ballPos.slice(0,-2);  
        var val=eval(ballPos);
        val-=2;
        var str=val+"px";
        ball.style.left=str;

    },1);
}

function down(){
    flag=true; 
    ball.style.boxShadow="2px 0px 8px 2px rgba(97, 96, 96)";
    var id=setInterval(function(){
        
        var currentPos=ball.getBoundingClientRect();
        if(currentPos.y>=yMax || flag==false){
            ball.style.boxShadow="2px 0px 8px 2px rgba(157, 253, 253, 0.726)";
            clearInterval(id);
            return;
        }

        var ballPos=window.getComputedStyle(ball, null).getPropertyValue("top");
        
        ballPos=ballPos.slice(0,-2);   
        var val=eval(ballPos);
        val+=2;
        var str=val+"px";
        ball.style.top=str;

    },1);
}

function up(){
    flag=true; 
    ball.style.boxShadow="2px 0px 8px 2px rgba(97, 96, 96)";
    var id=setInterval(function(){
        
        var currentPos=ball.getBoundingClientRect();
        if(currentPos.y<=yMin || flag==false){
            ball.style.boxShadow="2px 0px 8px 2px rgba(157, 253, 253, 0.726)";
            clearInterval(id);
            return;
        }

        var ballPos=window.getComputedStyle(ball, null).getPropertyValue("top");
        
        ballPos=ballPos.slice(0,-2);  
        var val=eval(ballPos);
        val-=2;
        var str=val+"px";
        ball.style.top=str;


    },1);
}


window.addEventListener('keydown',function(event){
    if(event.keyCode==37){
        //console.log('left');
        left();
    }
    if(event.keyCode==38){
        //console.log('up');
        up();
    }
    if(event.keyCode==39){
        //console.log('right');
        right();
    }
    if(event.keyCode==40){
        //console.log('down');
        down();
    }
    if(event.keyCode==32){
        //keycode for space bar is 32 , 
        stop();
    }
});

