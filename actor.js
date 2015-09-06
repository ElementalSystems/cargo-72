function randomDrift(el,maxX,maxY,minalt,maxalt,time)
{
  if (el.moveTime>el.totalTime) {
	//select a move
	var moveX=random(-maxX,maxX); 
	var moveY=random(-maxY,maxY); 
	el.startX=el.posLeft;
	el.startY=el.posBottom;
	el.endX=el.startX+moveX;
	el.endY=el.startY+moveY;
	var alt=getAltitude(el.endX);
	if (el.endY<alt+minalt) el.endY=alt+minalt;
	if (el.endY>alt+maxalt) el.endY=alt+maxalt;	
    el.moveTime=0;
	el.totalTime=randomInt(time,time*2);	
  } else { //in motion
    var r=el.moveTime/el.totalTime;
	el.posLeft=interpolateSISO(el.startX,el.endX,r);
	el.posBottom=interpolateSISO(el.startY,el.endY,r);	
  }  
  el.moveTime+=gS.frameTime;  	
}

function isCollision(el,xsize,ysize) {
	if ((el.posBottom+ysize<gS.avatar.posBottom)|| //our top is beneath the avatar
	    (el.posBottom>gS.avatar.posBottom+4)|| //our bottom is above the avatars top edge
		(el.posLeft+xsize<gS.avatar.posLeft)|| //our right is left of the avatars left edge
		(el.posLeft>gS.avatar.posLeft+9)) //our left is right of the avatars right edge
   		   return 0;
    return 1;	
}

function jellyTick()
{
  randomDrift(this,20,10,0.5,12,2000);
    
  if (isCollision(this,4,2)) 
	    takeDamage(50*gS.frameTime/1000)	   
  
}

function cowTick()
{
  if (!this.dead) 
	  randomDrift(this,5,.2,-2,-.5,500);  
	
	
  //also hurt him if I must
  if (isCollision(this,5,3)) {
		if (this.dead)
	      takeDamage(25*gS.frameTime/1000)
	    else {
		  this.dead=1;
		  gS.avatar.velX=0;
		  gS.avatar.velY=0;
		  takeDamage(20);
		  gainScore("Hit Native Fauna",-200);
		}
		  
  }
	  
}

function addActor(art,func,x,y,deco,repx,repy)
{
   var el=addSimpleArt(art,x,y,deco,repx,repy);
   el.tick=func;
   el.moveTime=0;
   el.totalTime=-1;
   
   return el;   
}