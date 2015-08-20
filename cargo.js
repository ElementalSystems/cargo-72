
var gS=document.getElementById('iGS');
//Measure the display
	



function addSimpleTerrain(symbolList,width,add)
{
  for (var i=0;i<width;i+=1) {
	  var sym=symbolList.charAt(randomInt(0,symbolList.length-1));
	  addTerrainBlock(sym);
  }
  if (add) createTerrainObject();  
}


//this guy creates and adds an object corresponding to the terrain that has been generated wil addTerrainBlock
function createTerrainObject()
{
  //add an extra 10 on the bottom
  gS.terrainAltMin-=20;
  var height=Math.floor(gS.terrainAltMax-gS.terrainAltMin+1);
  var el=document.createElement('DIV');
  var width=gS.terrainEnd-gS.terrainStart;
  setElementClass(el,'cGO',true);
  setElementClass(el,'cPT',true);
  	
  el.rowText=[];
  
  for (var i=0;i<height;i+=1) { //fill in these rows
	  el.rowText[i]='';
	  for (var j=0;j<width;j+=1) {
		var alt=gS.heightMap[j+gS.terrainStart].altitude-gS.terrainAltMin;
		if (i==alt) el.rowText[i]+=gS.heightMap[j+gS.terrainStart].symbol;
		else if (i<alt) el.rowText[i]+='#';
		else el.rowText[i]+=' ';		
	  }
  }
  
  el.posLeft=gS.terrainStart;
  el.posRight=gS.terrainEnd;
  el.posBottom=gS.terrainAltMin;
  el.posTop=gS.terrainAltMin+height;
  
  
  //finally build out the html
  var html="";
  for (var i=height-1;i>=0;i-=1) { //add divs for each row
    html+="<div>"+stringForHtml(el.rowText[i])+"</div>";
  }	      
  
  el.innerHTML=html;
  
  createGameObject(el);  
  
  //reset the control for this stuff
  gS.terrainStart=gS.terrainEnd;  
  gS.terrainAltStart=gS.terrainAlt;
  gS.terrainAltMax=-99999;
  gS.terrainAltMin=99999;	
}

function offsetTerrain(yoff)
{
	gS.terrainAlt+=yoff;
}

function addTerrainBlock(symbolgiven)
{
   var  val={
		  leftAF:0,
		  rightAF:0,
		  symbol: symbolgiven		  
	    };
		
   switch (val.symbol) {
	   case '\\': val.leftAF=1; break;
	   case '/': val.rightAF=1; break;	   	   
   }

   gS.terrainAlt-=val.leftAF;
   val.altitude=gS.terrainAlt;
   if (gS.terrainAlt>gS.terrainAltMax) gS.terrainAltMax=gS.terrainAlt;
   if (gS.terrainAlt<gS.terrainAltMin) gS.terrainAltMin=gS.terrainAlt;   
   gS.terrainAlt+=val.rightAF;      
   
   gS.heightMap[gS.terrainEnd]=val;
   gS.terrainEnd+=1;
}



function createGameObject(el)
{
	//add it to the passive object list
	gS.passiveList.push(el);	
}

function positionActiveList()
{
	for (var i=0;i<gS.activeList.length;i+=1) {
	  var el=gS.activeList[i];
	  el.style.bottom=((el.posBottom+gS.yOffset)*gS.textHeight)+"px";
	  el.style.left=((el.posLeft+gS.xOffset)*gS.textWidth)+"px";	  
	}
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


function tick(timestamp)
{
	gS.xOffset=pingPongRange(0,-3000,timestamp,240000)
	gS.yOffset=pingPongRange(0,-10,timestamp,10000)
	positionActiveList();  
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
   gS.widthInText=gS.offsetWidth/gS.textWidth;
	
   createGame(sampleLevel);
   window.requestAnimationFrame(tick);   
}