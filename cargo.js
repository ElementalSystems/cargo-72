//This function generates a div element that represents the terrain
function makeTerrain(width,height)
{
  var el=document.createElement('DIV');
  setElementClass(el,'cGO',true);
  setElementClass(el,'cPT',true);
  
  //make an array of elements
  el.heightMap=new Array(height);
  //generates the hieght map
  var pos=height/2;
  var xpos=0;
  var wayToGo=0;
  var direction=0;
  while (xpos<width)
  {
	  var col={
		  leftAF:0,
		  rightAF:0,
		  symbol: '_'		  
	  };
	  
	  if (wayToGo==0) {
		  //select a characterSet
		  wayToGo=randomInt(2,5);
		  direction=randomInt(-1,1);
		  if ((direction>0)&&(pos>height*.9)) direction=-1;
		  if ((direction<0)&&(pos<height*.1)) direction=1;
		  
	  }
	  switch(direction){
		  case 0: break;
		  case 1: col.symbol='/'; col.rightAF=1; break;
		  case -1: col.symbol='\\'; col.leftAF=1; break;			  
	  }		  	  	 
	  el.heightMap[xpos]=col;
	  pos-=col.leftAF;
	  col.altitude=pos;
	  pos+=col.rightAF;
	  xpos++;
	  wayToGo--;
  }
  
  el.rowText=new Array(height);
  for (var i=0;i<height;i+=1) { //fill in these rows
	  el.rowText[i]='';
	  for (var j=0;j<width;j+=1) {
		var alt=el.heightMap[j].altitude
		if (i==alt) el.rowText[i]+=el.heightMap[j].symbol;
		else if (i<alt) el.rowText[i]+='#';
		else el.rowText[i]+=' ';		
	  }
  }
  
  //finally build out the html
  var html="";
  for (var i=height-1;i>=0;i-=1) { //add divs for each row
    html+="<div>"+stringForHtml(el.rowText[i])+"</div>";
  }	      
  el.innerHTML=html;
  return el;
}

var landDiv=null;

function tick(timestamp)
{
	var xpos=pingPongRange(0,-3000,timestamp,240000)
	var ypos=pingPongRange(0,-30,timestamp,10000)
	
	landDiv.style.left=xpos+"em";
	landDiv.style.top=ypos+"em";
	window.requestAnimationFrame(tick);
}

window['fOL']=function fOL()
{
   landDiv=makeTerrain(5000,70);
   document.getElementById('iGS').appendChild(landDiv);  
   window.requestAnimationFrame(tick);
}