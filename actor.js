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



function cowsTick()
{
  if (!this.dead) 
	  randomDrift(this,.1,1,-2.5,-1.5,4000);  
		
  //also hurt him if I must
  if (isCollision(this,5,3)) {
		if (this.dead)
	      takeDamage(15*gS.frameTime/1000)
	    else {
		  this.dead=1;
		  
		  gS.avatar.velX=0;
		  gS.avatar.velY=0;
		  gainScore("Killed Native Fauna",-200);
		  takeDamage(20);
		}
		  
  }
	  
}

function cowTick()
{
  if (!this.dead) 
	  randomDrift(this,5,.2,-2,-.5,500);  
	
	
  //also hurt him if I must
  if (isCollision(this,5,3)) {
		if (this.dead)
	      takeDamage(15*gS.frameTime/1000)
	    else {
		  this.dead=1;
		  gS.avatar.velX=0;
		  gS.avatar.velY=0;
		  takeDamage(20);
		  gainScore("Hit Native Fauna",-200);
		}		  
  }	  
}

function addBattleThing(art,y,tickfunc)
{
   var el=addActor(art,tickfunc,0,-gS.terrainAlt+y);
   el.ammo=[];
   for (var i=0;i<5;i+=1) 
	 el.ammo.push(addAmmo()); 
   el.nextFire=0;   
   return el;
}

function humanTick()
{
  randomDrift(this,5,.1,0,.5,1000);  
  //also hurt him if I must
  if (isCollision(this,5,3)) 
		  takeDamage(15*gS.frameTime/1000);	    		   	  
}


function fireAmmoTick(el,xs,xe,time)
{
	if (gS.gameTime>el.nextFire) {
		el.nextFire=gS.gameTime+randomInt(time,time*2);
		//find an inactive ammo and drop italics
		for (var i=0;i<el.ammo.length;i+=1)
		  if (!el.ammo[i].active) {
			  el.ammo[i].posBottom=el.posBottom+5;
			  el.ammo[i].posLeft=el.posLeft+randomInt(xs,xe);			  
			  el.ammo[i].active=1;
			  break;
		  }
	}
}

function battleshipTick()
{
	fireAmmoTick(this,20,60,800);	
}

function zeppelinTick()
{
    randomDrift(this,10,5,12,12,1000)	
	fireAmmoTick(this,2,5,1000);	
}

function addAmmo()
{
  var el=addActor(aW.ammo,ammoTick,0,-1000);
  el.active=0;
  return el;
}

function ammoTick()
{
	if (this.active) {
		if (this.explode) {
			if (gS.gameTime>this.explodeEnd) {
			  this.posLeft-=2;
			  this.posBottom-=2;
			  if (isCollision(this,5,5))
				  takeDamage(15);			  
			  this.active=0;
			  this.posBottom=-1000;
			  this.explode=0;	
			  setElementClass(this,'x',0);			
			}
	    } else { 
		  this.velY=(this.posBottom<30)?-10:-20;
		  this.posBottom+=this.velY*gS.frameTime/1000;
		  //detect collision
		  if (this.posBottom<getAltitude(this.posLeft)||
		      isCollision(this,2,2)) {
				//explode here
				this.explodeEnd=gS.gameTime+250;
				this.explode=1;
				setElementClass(this,'x',1);
			  }
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