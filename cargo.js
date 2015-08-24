
var gS=document.getElementById('iGS');
	
function createGameObject(el)
{
	//add it to the passive object list
	gS.passiveList.push(el);	
	return el;
}

function positionGameObject(el)
{
  el.style.bottom=((el.posBottom+gS.yOffset)*gS.textHeight)+"px";
  el.style.left=((el.posLeft+gS.xOffset)*gS.textWidth)+"px";	  
}

function examinePassiveList() 
{
	//go through the passive list and see what you want to upgrade
	var transfer=[];
	for (var i=0;i<gS.passiveList.length;i+=1) {
		var xpos=gS.passiveList[i].posLeft;
		if (((xpos+gS.xOffset)>(-gS.passiveSafetyMargin))&& //is it within margin of the left edge?
		    ((xpos+gS.xOffset)<(gS.widthInText+gS.passiveSafetyMargin)))  //is within safety of the right edge
			    transfer.push(gS.passiveList[i]);			
	}      
	//upgrade!
	for (var i=0;i<transfer.length;i+=1) {
		gS.passiveList.splice(gS.passiveList.indexOf(transfer[i]),1); //removes from passive list
		gS.appendChild(transfer[i]); //add it to the DOM
		gS.activeList.push(transfer[i]); //add it to the active list				
	}
	
	//go through the active list and collect who you want to downgrade
	transfer=[];
	for (var i=0;i<gS.activeList.length;i+=1) {
		var xpos=gS.activeList[i].posLeft;		
		if (((xpos+gS.xOffset)<(-gS.passiveSafetyMargin))|| //left of the left edge
		    ((xpos+gS.xOffset)>(gS.widthInText+gS.passiveSafetyMargin)))  //right of the right edge
			    transfer.push(gS.activeList[i]);			
	}
	//downgrade!
	for (var i=0;i<transfer.length;i+=1) {
		gS.activeList.splice(gS.activeList.indexOf(transfer[i]),1); //removes from active list
		gS.removeChild(transfer[i]); //remove it from the DOM
		gS.passiveList.push(transfer[i]); //add it to the passive list
	}
	
	//reset the marker for terrain safety
	gS.lastPassiveXOffset=gS.xOffset;	
}


function createGame(level)
{
	//clear out the display space and buffers
	gS.innerHTML='';
	gS.activeList=[];
	gS.passiveList=[];
	gS.level=level;
	gS.heightMap=[];
	gS.terrainStart=0;
	gS.terrainAltStart=0;
	gS.terrainEnd=0;
	gS.terrainAlt=0;
	gS.terrainAltMax=-99999;
	gS.terrainAltMin=99999;
	gS.lastPassiveXOffset=100000;
	gS.passiveSafetyMargin=30;
	gS.gameStartTime=0;
	
	gS.gravity=10;
	gS.drag=1;
	bindControls(gS);
	   
	
	//now do each section of the content
    for (var i=0; i<level.content.length;i+=1) {
		var endPos=(level.content[i].distance)?gS.terrainStart+level.content[i].distance:0;
	    var deck=createDeck(level.content[i].set);
		var card=null;
		while (true) {
			if (endPos)
			  card=deck.draw();
			else 
		      card=deck.next();
			//run card somehow
			card();
			if (endPos) {
			   if (gS.terrainStart>endPos) break; //wide enough now
			} else if (deck.isEmpty()) break; //finished the sequence						
		}
	}
}


function getAltitude(x)
{
	if (x<0) return 0;
	//get the main altitude
	var xmain=Math.floor(x);
	//establish how far across this block we are looking
	var xfrac=x-xmain;
	var hm=gS.heightMap[xmain];	
	return hm.altitude+(1-xfrac)*hm.leftAF+xfrac*hm.rightAF;
}

function tick(timestamp)
{
	//lets work out the times
	if (!gS.gameStartTime) {
		gS.gameStartTime=timestamp;
		gS.frameTime=100;
	} else gS.frameTime=timestamp-gS.lastFrameStart;
	gS.lastFrameStart=timestamp;
	gS.gameTime=timestamp-gS.gameStartTime;	
	
	//tick for active elements
	for (var i=0;i<gS.activeList.length;i+=1) 
	  gS.activeList[i].tick();
  
    //figure out the camera
    if (gS.avatar) {
	   gS.xOffset=-gS.avatar.posLeft+20;	   
	   gS.yOffset=-gS.avatar.posBottom+5;	
	} else 
	   gS.xOffset=0;
	
    //position active elements
	for (var i=0;i<gS.activeList.length;i+=1) 
	  positionGameObject(gS.activeList[i]);
     
	
	
    //if we have moved 80% of our safety margin	on making objects active then we needs to have a look
	if (Math.abs(gS.xOffset-gS.lastPassiveXOffset)>gS.passiveSafetyMargin*.8)
	  examinePassiveList();
      
	window.requestAnimationFrame(tick);
}

window['fOL']=function fOL()
{
	//measure the world
   var e=document.getElementById('iMM');
   gS.textWidth=e.clientWidth;
   gS.textHeight=e.clientHeight;
   gS.textRatio=gS.textHeight/gS.textWidth;
   gS.widthInText=gS.offsetWidth/gS.textWidth;
	
   createGame(sampleLevel);
   window.requestAnimationFrame(tick);   
}