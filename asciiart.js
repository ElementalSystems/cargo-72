
function addSimpleArt(art,xOff,yOff)
{
  //build divs from array
  var height=art.l.length;  
  var el=document.createElement('DIV');
  var width=0;
  setElementClass(el,'cGO',true);
  setElementClass(el,art.cls,true);
  	
  
  el.posLeft=gS.terrainStart+xOff;
  el.posBottom=gS.terrainAlt+yOff;
  el.posTop=gS.terrainAlt+height+yOff;  
  
  //finally build out the html
  var html="";
  for (var i=0;i<height;i+=1) { //add divs for each row
    if (width<art.l[i].length) width=art.l[i].length;	
    html+="<div>"+stringForHtml(art.l[i])+"</div>";
  }	      
  el.posRight=el.posLeft+width; 
  el.posWidth=width;  
  el.innerHTML=html;
  el.tick=terrainTick; 
  return createGameObject(el);    
  
}

