function addSimpleTerrain(symbolList,width,add)
{
  for (var i=0;i<width;i+=1) {
	  var sym=symbolList.charAt(i%(symbolList.length-1));
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
  el.tick=terrainTick;
  decorateArt(el,aS.terrain);
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
	   case ':': val.leftAF=val.rightAF=.4;
	   case ',': val.leftAF=val.rightAF=0.2;	   
   }

   gS.terrainAlt-=Math.floor(val.leftAF);
   val.altitude=Math.floor(gS.terrainAlt);
   if (gS.terrainAlt>gS.terrainAltMax) gS.terrainAltMax=gS.terrainAlt;
   if (gS.terrainAlt<gS.terrainAltMin) gS.terrainAltMin=gS.terrainAlt;   
   gS.terrainAlt+=Math.floor(val.rightAF);      
   
   gS.heightMap[gS.terrainEnd]=val;
   gS.terrainEnd+=1;
}

function addTerrainToAltitude(targetAlt,width)
{
  for (var i=0;i<width;i+=1) {
	var terrainDiff=targetAlt-gS.terrainAlt;
	switch (randomInt(0,Math.abs(terrainDiff+6))) {
	  case 0:
	  case 1:
	  case 2: 
	  case 3: addTerrainBlock('_'); break;
	  case 4: addTerrainBlock('/'); break;
	  case 5: addTerrainBlock('\\'); break;
	  default: addTerrainBlock((terrainDiff>0)?'/':'\\'); break;	  
	}
  }
  return createTerrainObject();  
}


function terrainTick()
{
	
}
