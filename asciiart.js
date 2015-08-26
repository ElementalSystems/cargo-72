function fillString(template,length)
{
	var s="";
	while (s.length<length)
		s+=template;
	return s.substring(0,length);
}

function randomFillString(template,length)
{
	var s="";
	while (s.length<length)
		s+=template.charAt(randomInt(0,template.length));
	return s;
}

//Takes a div filled with other divs
function decorateArt(el,style)
{
	var list=el.getElementsByTagName('DIV');
	//act on every div (line) within this
	for (var i=0;i<list.length;i+=1) {
		var text=list[i].innerHTML;
		//apply every transform to it
		for (var j=0;j<style.length;j+=1)  
	      if (style[j].pattern) {
			 text=text.replace(new RegExp(style[j].pattern,'g'), 
			    function custom(x) { 
				   if (style[j].replace) x=fillString(style[j].replace,x.length);			 
				   else if (style[j].replace_r) x=randomFillString(style[j].replace_r,x.length);			 
				   if (style[j].cls) x="<span class="+style[j].cls+">"+x+"</span>";
				   return x;
				} 
			 );		     	 		     
		  }  else  {//apply stuff to whole div
		     if (style[j].cls) setElementClass(el,style[j].cls,true);
			 if (style[j].pFactor) el.posPFactor=style[j].pFactor;			 			 
		  }
	    list[i].innerHTML=text;
	}	
	
}

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
  el.posWidth=width;  
  el.innerHTML=html;
  el.posPFactor=1;
  if (art.deco) decorateArt(el,art.deco);
  el.tick=terrainTick; 
  return createGameObject(el);    
  
}

