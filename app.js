var xPos = 10;
var yPos = 390;
var xPoss= 450;
var yPoss= 0;
var xPosss= 500;
var yPosss= -90;
var xPs= 425;
var yPs= -90;

    


 
draw = function() {
    
  
    
    stroke(240, 14, 78);
    strokeWeight(1);
    background(29, 40, 115);
    fill(235, 219, 0);
    
    //tiny star1
    ellipse(100,30,5,5);
    
     //tiny star2
    ellipse(200,45,5,5);
    
   //tiny star3
    ellipse(300,45,5,5);  
    
    //tiny star4
    ellipse(20,60,5,5);
    
    //tiny star5
    ellipse(58,84,5,5);

   //tiny star6
    ellipse(82,60,5,5);
    
    //tiny star7
    ellipse(102,84,5,5);
    
      //tiny star8
    ellipse(260,60,5,5);
    
    //tiny star9
    ellipse(287,105,5,5);

   //tiny star10
    ellipse(184,89,5,5);
    
    //tiny star11
    ellipse(102,84,5,5);
    
      //tiny star1.
    ellipse(200,200,5,5);
    
     //tiny star2.
    ellipse(350,250,5,5);
    
   //tiny star3.
    ellipse(50,200,5,5);  
    
    //tiny star4.
    ellipse(375,60,5,5);
    
    //tiny star5.
    ellipse(58,275,5,5);

   //tiny star6.
    ellipse(82,235,5,5);
    
    //tiny star7.
    ellipse(102,125,5,5);
    
      //tiny star8.
    ellipse(260,150,5,5);
    
    //tiny star9.
    ellipse(287,200,5,5);

   //tiny star10.
    ellipse(184,250,5,5);
    
    //tiny star11.
    ellipse(102,200,5,5);
    
    
    //falling star1
    ellipse(xPoss, yPoss, 20, 20);
    yPoss +=2;
    xPoss -=2;
    
       
    //falling 2 
    ellipse(xPosss, yPosss, 20, 20);
    xPosss -=3;
    yPosss+=2;  

    
    
   
     //falling3
    ellipse(xPs, yPs, 20, 20);
    yPs +=3;
    xPs -=1;
  
  
    
  
    
    
    //cannon ball
    stroke(240, 14, 78);
    strokeWeight(20);
    ellipse(xPos, yPos, 30, 30);
    
    xPos +=20;
    yPos -=20;

    
    
    
    
   
   

  
  
   
   //cannon barrel 2
   stroke(219, 215, 219);
   strokeWeight(2);
   //    x1  y1  x2  y2  x3  y3  x4  y4
   fill(41, 39, 39);
   quad(70,258,145,311,92,402,-68,400);
  
   //cannon wheel
  
   fill(138, 102, 10);
   ellipse(43,375,130,130);
   
 
 
   //inner wheel
   
   fill(23, 22, 20);
   ellipse(43,375,20,20);
   
 
    
  
   
   
   
};





