function addSimpleTerrain(symbolList,width,add,deco,deco2)
{
  for (var i=0;i<width;i+=1) {
	  var sym=symbolList.charAt(i%(symbolList.length-1));
	  addTerrainBlock(sym);
  }
  if (add) createTerrainObject(deco,deco2);
  
}

function addSlope(width,height,add,deco) {
	addCurvedTerrain(width,height,add,deco,function(x) { return 3*x*x-2*x*x*x; } );
}


function addCurvedTerrain(width,height,add,deco,curvefunc)
{
	var start=gS.terrainAlt;
	for (i=0;i<width;i+=1) {
		var y=curvefunc(i/width)*height;
		var yp=Math.floor(y);
		var yfrac=y-yp;
		gS.terrainAlt=start+yp;
		var sym="";    
		if (yfrac>.75) sym="'";
		else if (yfrac>.5) sym="-";
		else if (yfrac>.25) sym=".";
		else sym="_";		
		addTerrainBlock(sym);
	}
	if (yfrac>.8)
		gS.terrainAlt+=1;		
	if (add) createTerrainObject(deco); 
}


//this guy creates and adds an object corresponding to the terrain that has been generated wil addTerrainBlock
function createTerrainObject(deco,deco2)
{
  //add an extra 10 on the bottom
  gS.terrainAltMin-=50;
  var height=Math.floor(gS.terrainAltMax-gS.terrainAltMin+1);
  var el=document.createElement('DIV');
  var width=gS.terrainEnd-gS.terrainStart;
  setElementClass(el,'cGO',true);
  	
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
  el.posWidth=gS.terrainEnd-gS.terrainStart;
  el.posBottom=gS.terrainAltMin;
  el.posTop=gS.terrainAltMin+height;
  
  
  //finally build out the html
  var html="";
  for (var i=height-1;i>=0;i-=1) { //add divs for each row
    html+="<div>"+stringForHtml(el.rowText[i])+"</div>";
  }	      
  
  el.innerHTML=html;
  el.tick=terrainTick;
  el.posPFactorX=el.posPFactorY=1;
  el.posPOffX=el.posPOffY=0;
  
  decorateArt(el,deco?deco:aS.terrain);
  if (deco2)
    decorateArt(el,deco2);
  createGameObject(el);  
  
  //reset the control for this stuff if it was not in the main plane
  if (el.outOfPlane) {
	gS.terrainEnd=gS.terrainStart;  
    gS.terrainAlt=gS.terrainAltStart;    
  } else {
	gS.terrainStart=gS.terrainEnd;  
    gS.terrainAltStart=gS.terrainAlt;    
  }
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
		  symbol: symbolgiven,
		  damage: 0
	    };
		
   switch (val.symbol) {
	   case '\\': val.leftAF=1; break;
	   case '/': val.rightAF=1; break;	   	   
	   case ',': val.rightAF=0.2; break; 
	   case ':': val.leftAF=val.rightAF=.6; break;
	   case '1': val.leftAF=val.rightAF=1; break;
	   case '.': val.leftAF=val.rightAF=0.2; break; 
	   case '-': val.leftAF=val.rightAF=0.5; break; 
	   case '\'': val.leftAF=val.rightAF=0.8; break; 
	   case 'W':
	   case '!': val.leftAF=val.rightAF=1; val.damage=100; break; 
	   
   }

   gS.terrainAlt-=Math.floor(val.leftAF);
   val.altitude=Math.floor(gS.terrainAlt);
   if (gS.terrainAlt>gS.terrainAltMax) gS.terrainAltMax=gS.terrainAlt;
   if (gS.terrainAlt<gS.terrainAltMin) gS.terrainAltMin=gS.terrainAlt;   
   gS.terrainAlt+=Math.floor(val.rightAF);      
   
   gS.heightMap[gS.terrainEnd]=val;
   gS.terrainEnd+=1;
}

function addTerrainToAltitude(targetAlt,width,deco)
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
  return createTerrainObject(deco);  
}


function terrainTick()
{
	
}



function addEnvSheet(top,bottom,cls)
{
  var el=document.createElement('DIV');
  setElementClass(el,'cGO',true);
  setElementClass(el,cls,true);
  
  el.posLeft=5;
  el.posWidth=gS.widthInText;
  el.posBottom=bottom;
  el.posTop=top;  
  el.posPFactorX=0;
  el.posPFactorY=1;
  el.posPOffX=el.posPOffY=0
  el.tick=terrainTick; 
  el.outOfPlane=1;
  el.style.height=(top-bottom)*gS.textHeight;
  el.style.width=gS.widthInText*gS.textWidth;
  return createGameObject(el);      
}