 /* var rNo1 =Math.floor(Math.random()*6)+1;
  var replace1 = "images/"+"dice"+rNo1+".png";
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src",replace1);
  var rNo2 =Math.floor(Math.random()*6)+1;
  var replace2 = "images/"+"dice"+rNo2+".png";
  var image2= document.querySelectorAll("img")[1];
  image2.setAttribute("src",replace2);
  if(rNo1 > rNo2 ){
    document.querySelector("h1").innerHTML="Player 1 wons";
  }
  else if(rNo1 < rNo2){
    document.querySelector("h1").innerHTML="Player 2 wons";
  }
  else{
    document.querySelector("h1").innerHTML="Draw";
  }
  */
 var sum1 = 0;
 var sum2 = 0;
 var c = 0;
 function fun(){

  var rNo1 =Math.floor(Math.random()*6)+1;
  var replace1 = "images/"+"dice"+rNo1+".png";
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src",replace1);
  var rNo2 =Math.floor(Math.random()*6)+1;
  var replace2 = "images/"+"dice"+rNo2+".png";
  var image2= document.querySelectorAll("img")[1];
  image2.setAttribute("src",replace2);
  c = c+1;
  sum1 = sum1 +rNo1;
  sum2 = sum2 +rNo2;
  if(6-c>=0){
  document.querySelectorAll("h1")[1].innerHTML="you have "+(6-c)+" chances";
  }
  if(6-c == 0){
    if(sum1 > sum2){
      alert("player 1 wins");
      alert("refresh to play");
      
    }
    else if(sum1 < sum2){
      alert("player 2 wins");
      alert("refresh to play");
     
    }else{
      alert("match draw");
      alert("refresh to play");
     
    }

  }

  

 }