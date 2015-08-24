	
function addBuggy()
{
	var el=addSimpleArt(aW.buggy,5,5);
	gS.avatar=el;
	el.tick=avatarTick;	
	el.angle=0;
	el.wheels=[addSimpleArt(aW.buggy_w,0,0),addSimpleArt(aW.buggy_w,0,0),addSimpleArt(aW.buggy_w,0,0)];
	el.wheeloff=[2,5,8];
	
	el.velX=0;
	el.velY=0;
	el.wheelPower=0;
	el.rotateSpeed=1.57; //radians per second 1.57 = 90 deg per second
	el.traction=0;
	el.wheelRot=0;
}

function avatarTick()
{		
	this.wheelPower=0;
    if (controls.isKeyDown(68)) 
		this.wheelPower=30;
	if (controls.isKeyDown(65)) 
		this.wheelPower=-20;
	
	
	var fwxc=Math.cos(this.angle);
	var fwxs=Math.sin(this.angle);
	//so lets do physics
	this.velX+=(this.wheelPower*this.traction*fwxc-gS.drag*this.traction*this.velX)*gS.frameTime/1000; //velX+=[wheelpower*fwxc-drag(VelX*const)] * time
	this.velY+=(this.wheelPower*this.traction*fwxs-gS.gravity)*gS.frameTime/1000; 	     //velY+=[wheelpower*fwxs-gravity] *time
	
	this.speed=Math.sqrt(this.velX*this.velX+this.velY*this.velY);
	if (this.velX<0) this.speed*=-1;
	this.posLeft+=this.velX*gS.frameTime/1000;
	this.posBottom+=this.velY*gS.frameTime/1000;
	
	var recalc=0;
	do {
	  var recalc=0;
	  var distGround=1000;
	  for (var i=0;i<3;i+=1) {		
		var galt=getAltitude(this.posLeft+fwxc*this.wheeloff[i]);
		var alt=this.posBottom-fwxs*this.wheeloff[i]/gS.textRatio;
		var dif=alt-galt;
		if (distGround>dif) distGround=dif;
	  }	
	  if (distGround<-1.5) { //we hit a cliff!
	     //revert backwards out of terrain
	     this.posLeft-=this.velX*gS.frameTime*2/1000;
	     this.posBottom-=this.velY*gS.frameTime/1000;
	     this.velX*=-0.1;
		 this.velY=0;
		 recalc=1;
	  } 
	} while (recalc)
	
	if (distGround<0) { //whoops we're inside the terrain push it up and stop falling
	  if (this.velY<0) this.velY=0;
	  this.posBottom-=distGround; //push us up to the surface	  
	  this.traction=1;
	} else this.traction=0;
	
	
	if (distGround<.5) {
		//Calculate a good angle for this spot on the board
		var lH=getAltitude(this.posLeft+fwxc*this.wheeloff[0]);
		var rH=getAltitude(this.posLeft+fwxc*this.wheeloff[2]);
		var targetAngle=Math.atan2((lH-rH)*gS.textHeight,fwxc*this.wheeloff[2]*gS.textWidth);	
		if (targetAngle>this.angle) {
			this.angle+=this.rotateSpeed*gS.frameTime/1000;
			if (this.angle>targetAngle) this.angle=targetAngle;
		} else if (targetAngle<this.angle) {
			this.angle-=this.rotateSpeed*gS.frameTime/1000;
			if (this.angle<targetAngle) this.angle=targetAngle;
		}
		this.style.transform="rotate("+this.angle.toFixed(3)+"rad)";	
		
		this.wheelRot+=this.speed/1*gS.frameTime/1000;
	}
	
	//put all the wheels in place too
	for (var i=0;i<3;i+=1) {
		this.wheels[i].posLeft=this.posLeft-2+fwxc*this.wheeloff[i];
	    this.wheels[i].posBottom=this.posBottom-fwxs*this.wheeloff[i]/gS.textRatio;
		this.wheels[i].style.transform="rotate("+this.wheelRot+"rad)";	
	}
}