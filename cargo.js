var gS=document.getElementById('iGS');
	
function createGameObject(el)
{
	//add it to the passive object list
	gS.passiveList.push(el);	
	return el;
}

function addEvent(direction,act)
{
	var e={
	   action: act,
	   position: gS.terrainEnd
	};	
    gS.eQueue[direction].push(e);
}

function positionGameObject(el)
{
  el.style.left=((el.posLeft+gS.xOffset)*gS.textWidth*el.posPFactorX)+"px";	  
  el.style.bottom=((el.posBottom+gS.yOffset)*gS.textHeight*el.posPFactorY)+"px";  
}

function examinePassiveList() 
{
	//go through the passive list and see what you want to upgrade
	var transfer=[];
	for (var i=0;i<gS.passiveList.length;i+=1) {
		var el=gS.passiveList[i];
		var xpos=(el.posLeft+gS.xOffset)*el.posPFactorX;
		if (((xpos+el.posWidth)>(-gS.passiveSafetyMargin))&& //is it within margin of the left edge?
		    (xpos<(gS.widthInText+gS.passiveSafetyMargin)))  //is within safety of the right edge
			    transfer.push(el);			
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
		var el=gS.activeList[i];
		var xpos=(el.posLeft+gS.xOffset)*el.posPFactorX;
		if (((xpos+el.posWidth)<(-gS.passiveSafetyMargin))|| //left of the left edge
		    (xpos>(gS.widthInText+gS.passiveSafetyMargin)))  //right of the right edge
			    transfer.push(el);			
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
    setConsoleState(1,["Task "+level.title+" :: Downloading orders"]);
	//clear out the display space and buffers
	if (gS.activeList) {
		for (var i=0;i<gS.activeList.length;i+=1)
			gS.removeChild(gS.activeList[i]);
	}
	gS.activeList=[];
	gS.passiveList=[];
	gS.eQueueID=0;
	gS.eQueue=[[],[]];
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
	gS.gravity=30;
	gS.drag=5;
	gS.endGame=0;
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
	
	document.getElementById('iTT').innerHTML="Task: "+level.title;
	//give the initial orders
	for (var i=0;i<level.orders.length;i+=1) {
		addConsoleText(level.orders[i]);
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

function getHM(x)
{
	if (x<0) return {};
	return gS.heightMap[Math.floor(x)];		
}


function tick(timestamp)
{
	
	window.requestAnimationFrame(tick);
	if (!gS.avatar) return; //no avatar no game loop
	if (gS.endGame) return; //game over  no game loop
	
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
    gS.xOffset=-gS.avatar.posLeft+gS.widthInText/2;
    gS.yOffset=-gS.avatar.posBottom+10;	

	
	if ((gS.eQueueID==0)&&(gS.eQueue[0].length>0)) 
		if (gS.eQueue[0][0].position<gS.avatar.posLeft) {			
			var ev=gS.eQueue[0].shift();
			ev.action();
  	    } 
	if ((gS.eQueueID==1)&&(gS.eQueue[1].length>0)) 
		if (gS.eQueue[1][gS.eQueue[1].length-1].position>gS.avatar.posLeft) {			
			var ev=gS.eQueue[1].pop();
			ev.action();
  	    } 
	
    //position active elements
	for (var i=0;i<gS.activeList.length;i+=1) 
	  positionGameObject(gS.activeList[i]);
     
	//reconsider the buggy environment parameters
	if (gS.avatar.posBottom<30) {
	  gS.gravity=30;
	  gS.drag=5;
	} else {
	  gS.gravity=40;
	  gS.drag=3;
	}
	
    //if we have moved 80% of our safety margin	on making objects active then we needs to have a look
	if (Math.abs(gS.xOffset-gS.lastPassiveXOffset)>gS.passiveSafetyMargin*.8)
	  examinePassiveList();
      
}

function measureTheWorld()
{
	//measure the world
   var e=document.getElementById('iMM');
   gS.textWidth=e.clientWidth;
   gS.textHeight=e.clientHeight;
   gS.textRatio=gS.textHeight/gS.textWidth;
   gS.widthInText=gS.offsetWidth/gS.textWidth;
	
}

function mainMenu()
{
  setConsoleState(0);
  addConsoleText("CARGO-72\n");
  addConsoleText("..an invasion is only as\n    good as its supply line..\n");
  
  addConsoleText("<a onclick='start(0,1)' href='#'>[Play from Start]</a>\n");  
  addConsoleText("<a onclick='start(3,1)' href='#'>[Play from DIST-54]</a>\n");  
  //addConsoleText("<a onclick='start(0,1)' href='#'>[Play from FWD-19]</a>\n");  
  addConsoleText("a game by elementalsystems for twelvegamesayear\n");  

}

function endGame(win)
{
	gS.endGame=1;
	if (win) {	  
	  setConsoleState(0,["Task "+gS.level.title+" :: Complete\n"]);
	  var lScore=gS.levelNumber*1000+500;
	  gainScore("Level Complete",lScore);
	  if (gS.gameTime/1000<gS.level.time) 
		gainScore("Time Bonus",lScore*(1-gS.gameTime/1000/gS.level.time));
	  if (gS.avatar.damage<0.1) 
		gainScore("No Damage!",lScore*1.5);
	  else
		gainScore("Damage bonus",lScore*(1-gS.avatar.damage/100));
	  
	  addConsoleText("\nCurrent Score "+gS.score);
	  addConsoleText("\n<a href='#' onclick='start("+(gS.levelNumber+1)+",0)'>[DOWNLOAD NEW TASK]</a>");		
	} else {
	  setConsoleState(0,["Task "+gS.level.title+" :: FAILED"]);
	  addConsoleText("Final Score "+gS.score);
	  addConsoleText("\n<a href='#' onclick='mainMenu()'>[MAIN MENU]</a>");		
	  addConsoleText("\n<a href='#' onclick='start("+gS.levelNumber+",1)'>[RESTART FROM"+gS.level.title+"]</a>");				
	}
}

function addWinGameEvent(direction)
{
	 addEvent(direction,function(){
		 endGame(1);
	 });
}

window['fOL']=function fOL()
{
   measureTheWorld();
   startConsole();
   mainMenu();   
   window.requestAnimationFrame(tick);      
}

window['start']=function start(lev,clear)
{
	if (clear) 
		gS.score=0;
    gS.levelNumber=lev;	
	createGame(levels[lev]);
	return false;
}