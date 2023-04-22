
 var sum1 = 0;
 var sum2 = 0;

 var c = 0,c1 = 0;
 
 function fun(){
  if(c<6 && c == c1){
  var rNo1 =Math.floor(Math.random()*6)+1;
  var replace1 = "images/"+"dice"+rNo1+".png";
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src",replace1);
  c = c+1;
  sum1 = sum1 +rNo1;
  }
  if(6-c>=0){
    document.querySelectorAll("h1")[1].innerHTML=(6-c)+" chances";
    }

    validity();
    document.querySelector("h2").innerHTML="Player 2 turn........";
  
 

  }

  

 
 function fun1(){
  if(c1<6 && c-1 ==c1){
  var rNo2 =Math.floor(Math.random()*6)+1;
  var replace2 = "images/"+"dice"+rNo2+".png";
  var image2= document.querySelectorAll("img")[1];
  image2.setAttribute("src",replace2);
  c1 = c1+1;
  sum2 = sum2 +rNo2;
  }
  if(6-c1>=0){
    document.querySelectorAll("h1")[2].innerHTML=(6-c1)+" chances";
    }
    validity();
    document.querySelector("h2").innerHTML="Player 1 turn......";
 }

 function validity(){
  if(6-c == 0 && 6-c1 ==0){
    if(sum1 > sum2){
      document.querySelectorAll("h1")[3].innerHTML="Player 1 wins";
      alert("refrseh the page to play again");
    }
    else if(sum1 < sum2){
      document.querySelectorAll("h1")[3].innerHTML="Player 2  wins";
      alert("refresh the page to play again");
    }else{
      
      document.querySelectorAll("h1")[3].innerHTML="Match draw";
       alert("refresh the page to play again");
    }
  }
}
function refresh(){
  location.reload();
}