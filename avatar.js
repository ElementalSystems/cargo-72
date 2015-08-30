	
function addBuggy()
{
	var el=addSimpleArt(aW.buggy,5,5);
	gS.avatar=el;
	el.tick=avatarTick;	
	el.angle=0;
	el.targetAngle=0;
	el.wheels=[addSimpleArt(aW.buggy_w,0,0),addSimpleArt(aW.buggy_w,0,0),addSimpleArt(aW.buggy_w,0,0)];
	el.wheeloff=[-3,0,3];
	
	el.velX=0;
	el.velY=0;
	el.posX=el.posLeft;
	el.posY=el.posBottom;	
	el.wheelPower=0;
	el.rotateSpeed=3.14; //radians per second 1.57 = 90 deg per second
	el.traction=0;
	el.wheels[0].wheelRot=el.wheels[1].wheelRot=el.wheels[2].wheelRot=0;
}

function avatarTick()
{		
    //handle controls
    this.wheelPower=0;    
	if (controls.isKeyDown(68)) 
		this.wheelPower=120;
	if (controls.isKeyDown(65)) 
		this.wheelPower=-100;
	var startJump=controls.isKeyDown(32);
	
	//so lets do physics
	//rotate to the target angle
	if (this.targetAngle>this.angle) {
			this.angle+=this.rotateSpeed*gS.frameTime/1000;
			if (this.angle>this.targetAngle) this.angle=this.targetAngle;
	} else if (this.targetAngle<this.angle) {
			this.angle-=this.rotateSpeed*gS.frameTime/1000;
			if (this.angle<this.targetAngle) this.angle=this.targetAngle;
	}
	
	var fwxc=Math.cos(this.angle);
	var fwxs=Math.sin(this.angle);		
	
	//calculate the displacements
	var disX=this.velX*gS.frameTime/1000;
	var disY=this.velY*gS.frameTime/1000;
	
	//move the vehicle
	this.posX+=disX;
	this.posY+=disY;
	
	//check for collisions at every new wheel position
	var distGround=1000;
	for (var i=0;i<3;i+=1) {		
		var galt=getAltitude(this.posX+fwxs*1+fwxc*this.wheeloff[i]);
		var alt=this.posY-1+(fwxc*1-fwxs*this.wheeloff[i])/gS.textRatio;
		var dif=alt-galt;
		if (dif<.25) this.wheels[i].wheelRot+=this.speed/5*gS.frameTime/1000;
		if (distGround>dif) distGround=dif;
	}	
    
	//if beneath more than down assume collision - revert position kill all speed
	if (distGround<-1.5) { //we hit a cliff!
	     //revert backwards out of terrain
	     this.posX-=disX;
	     this.posY-=disY;
	     this.velX*=-0.1;
		 this.velY=0;		 		 
	} else if (distGround<0) { //whoops we're inside the terrain push it up and stop falling
	  if (this.velY<0) this.velY=0;
	  this.posY-=distGround; //push us up to the surface	  
	  this.traction=1;
	} else this.traction=0;
		
	if ((this.traction>0)&&startJump) this.velY+=20;
	  
	//position the wheels
	for (var i=0;i<3;i+=1) {
		this.wheels[i].posLeft=this.posX-1.5+fwxs*1+fwxc*this.wheeloff[i];
	    this.wheels[i].posBottom=this.posY-1+(fwxc*1-fwxs*this.wheeloff[i])/gS.textRatio;
		this.wheels[i].style.transform="rotate("+this.wheels[i].wheelRot+"rad)";	
	}	
	
	//position the vehicle
	this.posLeft=this.posX-5;
	this.posBottom=this.posY;
	this.style.transform="rotate("+this.angle.toFixed(3)+"rad)";	
	  
	//position the cargo
	if (this.cargo) {
		//if (this.cargoLoadTime>500) //just place the damn thing
		var x=this.posX+3*fwxs-5*fwxc;
		var y=this.posY+(3*fwxc+5*fwxs)/gS.textRatio;
		this.cargo.posLeft=x;
		this.cargo.posBottom=y;
	    this.cargo.style.transform="rotate("+this.angle.toFixed(3)+"rad)";		  		
	}
	
    //calculate new velocities
	this.velX+=(this.wheelPower*this.traction*fwxc-gS.drag*this.traction*this.velX+this.traction*fwxs*gS.gravity)*gS.frameTime/1000; 
	this.velY+=(-this.wheelPower*this.traction*fwxs-gS.gravity+this.traction*fwxc*gS.gravity*.7)*gS.frameTime/1000; 	  
	
	this.speed=Math.sqrt(this.velX*this.velX+this.velY*this.velY);
	if (this.velX<0) this.speed*=-1;
	
	if (distGround<0.25) {
	  //decide what would have been the perfect angle 
	  var lH=getAltitude(this.wheels[0].posLeft+1.5);
	  var rH=getAltitude(this.wheels[2].posLeft+1.5);
	  this.targetAngle=Math.atan2((lH-rH)*gS.textHeight,(this.wheels[2].posLeft-this.wheels[0].posLeft)*gS.textWidth);	
	}
		
}


function addLoadEvent(direction,cargo)
{
	addEvent(direction, function(){ 
	  addConsoleText("Loading Cargo...");
	  addConsoleText("Complete...Return to Base");
	  gS.avatar.cargo=cargo;
	  gS.avatar.cargoLoadX=cargo.posLeft;
	  gS.avatar.cargoLoadY=cargo.posBottom;
	  gS.avatar.cargoLoadTime=0;
	  
	  
	}
	  
	);
}
