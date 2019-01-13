// Creating variables
var korab=new Image();
var korab1=new Image();
var korab2=new Image();
var korab3=new Image();
var asteroid=new Image();
var asteroid2=new Image();
var bonus=new Image();
var home=new Image();
var xp,yp,dead,xe,ye,xe1,ye1,xe2,ye2,xe3,ye3,xe4,ye4,xe5,ye5,xe6,ye6,xe7,ye7,xe8,ye8,xe9,ye9,xe10,ye10,xe11,ye11,xe12,ye12,we,we1,we2,we3,we4,we5,we6,we7,we8,we9,we10,we11,we12,enovaigra,money,score,highscore,dalisiminalrekord,otk1,otk2,slovil,move,kupli1,kupli2m,pusigra,xzlmon,yzlmon,xes,xes1,xes2,xes3,xes4,xes5,xes6,xes7,xes8,xes9,xes10,xes11,xes12,vremetabela,pokazva,kontroler,dasedwnalqwosega,dasedwnagoresega,dasedwnadqsnosega,dasedwnadolusega,viwot=500;
score=0;
dasedwnalqwosega=0;
dasedwnadolusega=0;
dasedwnadqsnosega=0;
dasedwnagoresega=0;
xpsl=1000;
ypsl=300;
korab3.src="vikingnormal.PNG";
korab2.src="spaceship 7.PNG";
korab1.src="spaceship5.PNG";
korab.src="rsH6n.PNG";
asteroid.src="asteroid3.PNG";
asteroid2.src="asteroid4.PNG";
bonus.src="Death-Star-2nd-icon.PNG";
home.src="vikingbegin.PNG";
highscore=0;
dalisiminalrekord=0;
pusigra=0;
kupli1=0;
kupli2=0;
move=0;
money=9999999999999999999; 
xp=1000;
yp=300;
dead=0;
slovil=1;
novaigra=0;
otk1=0;
otk2=0;
kontroler=0;
xe=0;xe1=0;xe=0;xe2=0;xe3=0;xe4=0;xe5=0;xe6=0;xe7=0;xe8=0;xe9=0;xe10=0;xe11=0;xe12=0;
ye=0;ye1=50;ye2=100;ye3=150;ye4=200;ye5=250;ye6=300;ye7=350;ye8=400;ye9=450;ye10=500;ye11=550;ye12=600;
we=(Math.floor((Math.random()*2)+1));
we1=(Math.floor((Math.random()*2)+1));
we2=(Math.floor((Math.random()*2)+1));
we3=(Math.floor((Math.random()*2)+1));
we4=(Math.floor((Math.random()*2)+1));
we5=(Math.floor((Math.random()*2)+1));
we6=(Math.floor((Math.random()*2)+1));
we7=(Math.floor((Math.random()*2)+1));
we8=(Math.floor((Math.random()*2)+1));
we9=(Math.floor((Math.random()*2)+1));
we10=(Math.floor((Math.random()*2)+1));
we11=(Math.floor((Math.random()*2)+1));
we12=(Math.floor((Math.random()*2)+1));
xzlmon=(Math.floor((Math.random()*24)+1))*50;
yzlmon=(Math.floor((Math.random()*11)+1))*50;
xes=(Math.floor((Math.random()*4)+1));
xes1=(Math.floor((Math.random()*4)+1));
xes2=(Math.floor((Math.random()*4)+1));
xes3=(Math.floor((Math.random()*4)+1));
xes4=(Math.floor((Math.random()*4)+1));
xes5=(Math.floor((Math.random()*4)+1));
xes6=(Math.floor((Math.random()*4)+1));
xes7=(Math.floor((Math.random()*4)+1));
xes8=(Math.floor((Math.random()*4)+1));
xes9=(Math.floor((Math.random()*4)+1));
xes10=(Math.floor((Math.random()*4)+1));
xes11=(Math.floor((Math.random()*4)+1));
xes12=(Math.floor((Math.random()*4)+1));
function update() {	
if(dead==0){
if(pusigra==1){	
xe=xe+xes;
xe1=xe1+xes1;
xe2=xe2+xes2;
xe3=xe3+xes3;
xe4=xe4+xes4;
xe5=xe5+xes5;
xe6=xe6+xes6;
xe7=xe7+xes7;
xe8=xe8+xes8;
xe9=xe9+xes9;
xe10=xe10+xes10;
xe11=xe11+xes11;
xe12=xe12+xes12;
if(score>highscore){
dalisiminalrekord=1;	
}	
}
//Pridwivda koraba
if(dead==0 & kontroler==2 & mouseX<1300 & mouseY<620){
xp=mouseX;
yp=mouseY;
}
if(dasedwnalqwosega==1 & xp>10){
xp=xp-5;	
}
if(dasedwnagoresega==1 & yp>0){
yp=yp-5;	
}
if(dasedwnadqsnosega==1 & xp<1200){
xp=xp+5;	
}
if(dasedwnadolusega==1 & yp<600){
yp=yp+5;	
}
if(xzlmon-30<xp & xp<xzlmon+50 & yzlmon-30<yp & yp<yzlmon+50){
money=money+5000;
xzlmon=(Math.floor((Math.random()*24)+1))*50;
yzlmon=(Math.floor((Math.random()*11)+1))*50;	
}
if(xe-30<xp & xp<xe+50 & ye-30<yp & yp<ye+50){
viwot=viwot-10*xes;	
}
if(xe1-30<xp & xp<xe1+50 & ye1-30<yp & yp<ye1+50){
viwot=viwot-10*xes1;	
}
if(xe2-30<xp & xp<xe2+50 & ye2-30<yp & yp<ye2+50 ){
viwot=viwot-10*xes2;	
}
if(xe3-30<xp & xp<xe3+50 & ye3-30<yp & yp<ye3+50){
viwot=viwot-10*xes3;	
}
if(xe4-30<xp & xp<xe4+50 & ye4-30<yp & yp<ye4+50){
viwot=viwot-10*xes4;		
}
if(xe5-30<xp & xp<xe5+50 & ye5-30<yp & yp<ye5+50){
viwot=viwot-10*xes5;		
}
if(xe6-30<xp & xp<xe6+50 & ye6-30<yp & yp<ye6+50){
viwot=viwot-10*xes6;		
}
if(xe7-30<xp & xp<xe7+50 & ye7-30<yp & yp<ye7+50){
viwot=viwot-10*xes7;		
}
if(xe8-30<xp & xp<xe8+50 & ye8-30<yp & yp<ye8+50){
viwot=viwot-10*xes8;		
}
if(xe9-30<xp & xp<xe9+50 & ye9-30<yp & yp<ye9+50){
viwot=viwot-10*xes9;		
}
if(xe10-30<xp & xp<xe10+50 & ye10-30<yp & yp<ye10+50){
viwot=viwot-10*xes10;
}
if(xe11-30<xp & xp<xe11+50 & ye11-30<yp & yp<ye11+50){
viwot=viwot-10*xes11;
}
if(xe12-30<xp & xp<xe12+50 & ye12-30<yp & yp<ye12+50){
viwot=viwot-10*xes12;
}
if(viwot<=0){
dead=1	
}	
if(xe>=1300){
xe=0;
xes=(Math.floor((Math.random()*4)+1));	
}
if(xe1>=1300){
xe1=0;
xes1=(Math.floor((Math.random()*4)+1));	
}
if(xe2>=1300){
xe2=0;
xes2=(Math.floor((Math.random()*4)+1));	
}
if(xe3>=1300){
xe3=0;
xes3=(Math.floor((Math.random()*4)+1));	
}
if(xe4>=1300){
xe4=0;
xes4=(Math.floor((Math.random()*4)+1));	
}
if(xe5>=1300){
xe5=0;
xes5=(Math.floor((Math.random()*4)+1));	
}
if(xe6>=1300){
xe6=0;
xes6=(Math.floor((Math.random()*4)+1));	
}
if(xe7>=1300){
xe7=0;
xes7=(Math.floor((Math.random()*4)+1));	
}
if(xe8>=1300){
xe8=0;
xes8=(Math.floor((Math.random()*4)+1));	
}
if(xe9>=1300){
xe9=0;
xes9=(Math.floor((Math.random()*4)+1));	
}
if(xe10>=1300){
xe10=0;
xes10=(Math.floor((Math.random()*4)+1));	
}
if(xe11>=1300){
xe11=0;
xes11=(Math.floor((Math.random()*4)+1));	
}
if(xe12>=1300){
xe12=0;
xes12=(Math.floor((Math.random()*4)+1));	
}
}


}

function draw() {
	// This is how you draw a rectangle
	if(pusigra==1){	 
	if(dead==0){
	context.fillStyle="black";		
	context.fillRect(0,0,1350,650);
	context.drawImage(bonus,xzlmon,yzlmon,50,50);
	context.fillStyle="grey";
    if(we==1){	
	context.drawImage(asteroid,xe,ye,50,50);
	}else{
	context.drawImage(asteroid2,xe,ye,50,50);		
	}
	if(we1==1){
	context.drawImage(asteroid,xe1,ye1,50,50);
    }else{
	context.drawImage(asteroid2,xe1,ye1,50,50);
	}
    if(we2==1){	
	context.drawImage(asteroid,xe2,ye2,50,50);
    }else{
	context.drawImage(asteroid2,xe2,ye2,50,50);	
    }
    if(we3==1){
	context.drawImage(asteroid,xe3,ye3,50,50);	
	}else{
	context.drawImage(asteroid2,xe3,ye3,50,50);	
	}
    if(we4==1){
	context.drawImage(asteroid,xe4,ye4,50,50);	
	}else{
	context.drawImage(asteroid2,xe4,ye4,50,50);	
	}
    if(we5==1){
	context.drawImage(asteroid,xe5,ye5,50,50);	
	}else{
	context.drawImage(asteroid2,xe5,ye5,50,50);	
	} 
    if(we6==1){
	context.drawImage(asteroid,xe6,ye6,50,50);	
	}else{
	context.drawImage(asteroid2,xe6,ye6,50,50);	
	}
    if(we7==1){
	context.drawImage(asteroid,xe7,ye7,50,50);	
	}else{
	context.drawImage(asteroid2,xe7,ye7,50,50);	
	}
    if(we8==1){
	context.drawImage(asteroid,xe8,ye8,50,50);	
	}else{
	context.drawImage(asteroid2,xe8,ye8,50,50);	
	}
    if(we9==1){
	context.drawImage(asteroid,xe9,ye9,50,50);	
	}else{
	context.drawImage(asteroid2,xe9,ye9,50,50);	
	}
    if(we10==1){
	context.drawImage(asteroid,xe10,ye10,50,50);	
	}else{
	context.drawImage(asteroid2,xe10,ye10,50,50);	
	}
    if(we11==1){
	context.drawImage(asteroid,xe11,ye11,50,50);	
	}else{
	context.drawImage(asteroid2,xe11,ye11,50,50);	
	}
    if(we12==1){
	context.drawImage(asteroid,xe12,ye12,50,50);	
	}else{
	context.drawImage(asteroid2,xe12,ye12,50,50);	
	} 		
	score=score+5;	
	if(slovil==1 ){
    context.drawImage(korab,xp-10,yp-10,50,50);
	}
	if(slovil==2 & otk1==1){
    context.drawImage(korab1,xp-10,yp-10,50,50);		
	}
	if(slovil==3 & otk2==1){
    context.drawImage(korab2,xp-10,yp-10,50,50);			
	}
	if(slovil==4){
    context.drawImage(korab3,xp-10,yp-10,50,50);		
	}
	context.fillStyle="yellow";
	context.font = "40px Arial";
	context.fillText("Score:",0,50);
	context.fillText(score,115,50 );
	context.fillStyle="red";	
	context.fillRect(400,10,viwot/5,25);	
    if(dalisiminalrekord==1){
	context.fillText("New Record",0,100);	
	}	
	}else{
	money=money+score;
	if(score>highscore){
    highscore=score;
    dalisiminalrekord=0;	
    }
    score=0;
	context.fillStyle="gray";
	context.fillRect(0,0,1350,650);
	context.fillStyle=" darkgray";
	context.fillRect(0,0,1350,100);	
	context.fillStyle="red";	
    if(slovil==1){
	context.fillRect(290,165,220,220);	
	}
	if(slovil==2){
	context.fillRect(540,165,220,220);		
	}
	context.fillStyle="black";	
	context.fillRect(300,175,200,200);
	context.fillRect(550,175,200,200);
    context.drawImage(korab,350,225,100,100);
    context.drawImage(korab1,600,225,100,100);	
	context.fillStyle="red";
	if(slovil==3){
	context.fillRect(790,165,220,220);		
	}	
	context.fillStyle="black";	
	context.fillRect(800,175,200,200);
	context.fillStyle="red";	
	context.drawImage(korab2,850,225,100,100);	
	context.font = "40px Arial";
    context.fillText("Shop",600,50);
	context.fillStyle="gold";
	context.font = "30px Arial";
    context.fillText(money,120,50);
    context.fillText("Money-",20,50);
	context.fillStyle="white";
	context.fillRect(275,400,750,100);
	context.fillStyle="red";	
	context.fillText(highscore,290,485);
    if(otk1==0){
	context.font = "20px Arial";		
    context.fillText("Need 25,000$",590,350);		
	}
    if(otk2==0){
	context.font = "20px Arial";		
    context.fillText("Need 75,000$",840,350);		
	}
	context.fillStyle="red";
    
	}
}else{
	context.fillStyle="black";
	context.fillRect(0,0,1350,650);
	context.fillStyle="white";	
	context.font = "60px Arial";		
    context.fillText("Asteroid Field",465,100);
	context.font = "30px Arial";
    context.fillText("Choose your controls-Press A for arrows or press D for mouse.Then press S to start.",100,600);		
	context.drawImage(home,300,150,400,400);




	
}
}
function keydown(key) {
	// Show the pressed keycode in the console
	// Zapo`wa dwivenieto
	console.log("Pressed", key);
	if(key==37){
	dasedwnalqwosega=1;	
	}
	if(key==38){
	dasedwnagoresega=1;	
	}
	if(key==39){
	dasedwnadqsnosega=1;	
	}
	if(key==40){
	dasedwnadolusega=1;	
	}	
}
function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
if(key==65 & kontroler==0){
kontroler=1;	
}
if(key==68 & kontroler==0){
kontroler=2;	
}	
if(key==83 & kontroler>0){
pusigra=1;	
}	
if(dead==0){
if(kontroler==1){
	if(key==37){
    dasedwnalqwosega=0;
	move=move+1;	
	}
	if(key==38){
	dasedwnagoresega=0;
    move=move+1;	
	}
	if(key==39){	
	dasedwnadqsnosega=0;
	move=move+1;
}
	if(key==40){
	dasedwnadolusega=0;	
	move=move+1;
}	
}
}else{
	if(key==13){
    dead=0;
	if(slovil==1){
	viwot=500;	
	}
	if(slovil==2){
	viwot=1000;			
	}
	if(slovil==3){
	viwot=1500;			
	}
	if(slovil==4){
	viwot=1500;			
	}	
	if(kontroler==1){
    xp=1000;
    yp=300;
	}
we=(Math.floor((Math.random()*2)+1));
we1=(Math.floor((Math.random()*2)+1));
we2=(Math.floor((Math.random()*2)+1));
we3=(Math.floor((Math.random()*2)+1));
we4=(Math.floor((Math.random()*2)+1));
we5=(Math.floor((Math.random()*2)+1));
we6=(Math.floor((Math.random()*2)+1));
we7=(Math.floor((Math.random()*2)+1));
we8=(Math.floor((Math.random()*2)+1));
we9=(Math.floor((Math.random()*2)+1));
we10=(Math.floor((Math.random()*2)+1));
we11=(Math.floor((Math.random()*2)+1));
we12=(Math.floor((Math.random()*2)+1));
xzlmon=(Math.floor((Math.random()*24)+1))*50;
yzlmon=(Math.floor((Math.random()*11)+1))*50;
xes=(Math.floor((Math.random()*4)+1));
xes1=(Math.floor((Math.random()*4)+1));
xes2=(Math.floor((Math.random()*4)+1));
xes3=(Math.floor((Math.random()*4)+1));
xes4=(Math.floor((Math.random()*4)+1));
xes5=(Math.floor((Math.random()*4)+1));
xes6=(Math.floor((Math.random()*4)+1));
xes7=(Math.floor((Math.random()*4)+1));
xes8=(Math.floor((Math.random()*4)+1));
xes9=(Math.floor((Math.random()*4)+1));
xes10=(Math.floor((Math.random()*4)+1));
xes11=(Math.floor((Math.random()*4)+1));
xes12=(Math.floor((Math.random()*4)+1));
	xe=0;
	xe1=0;
	xe2=0;
	xe3=0;
	xe4=0;
	xe5=0;
	xe6=0;
	xe7=0;
	xe8=0;
	xe9=0;
	xe10=0;
	xe11=0;
	xe12=0;
	move=0;
dasedwnalqwosega=0;
dasedwnadolusega=0;
dasedwnadqsnosega=0;
dasedwnagoresega=0;
    }
	if(key==13){
	novaigra=1;	
	}
	if(key==49){
	if(money>=25000){
	if(kupli1==0){	
	otk1=1;
	money=money-25000;
	kupli1=1;
	}
    }  
 	}
	if(key==50){
	if(money>=75000){
	if(kupli2==0){	
	otk2=1;
	money=money-75000;
	kupli2=2;
	}
	}	
	}	
	if(key==51){
	slovil=1;	
	}
	if(key==52){
	slovil=2;	
	}
	if(key==53){
	slovil=3;	
	}
	if(key==54){
	slovil=4;	
	}	
}	
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY)
}