	
function addBuggy()
{
	var el=addSimpleArt(aW.buggy,20,5);
	gS.avatar=el;
	el.tick=avatarTick;	
	el.angle=0;
	el.wheels=[addSimpleArt(aW.buggy_w,0,0),addSimpleArt(aW.buggy_w,0,0),addSimpleArt(aW.buggy_w,0,0)];
	el.wheeloff=[2,5,8];
}

function avatarTick()
{
	this.posLeft=pingPongRange(0,3000,gS.gameTime,240000);
	
	//using our last angle plot the position of the wheels
	var fwxc=Math.cos(this.angle);
	var fwxs=Math.sin(this.angle);
	for (var i=0;i<3;i+=1) {
		this.wheels[i].posLeft=this.posLeft-1+fwxc*this.wheeloff[i];
	    this.wheels[i].posBottom=this.posBottom-fwxs*this.wheeloff[i]/gS.textRatio;
	}
	
	//Average the position and the position five ahead
	var lH=getAltitude(this.posLeft+fwxc*this.wheeloff[0]);
	var rH=getAltitude(this.posLeft+fwxc*this.wheeloff[2]);
	this.angle=Math.atan2((lH-rH)*gS.textHeight,fwxc*this.wheeloff[2]*gS.textWidth);
	
	this.style.transform="rotate("+this.angle+"rad)";
	
	this.posBottom=lH;
	
	
	
}