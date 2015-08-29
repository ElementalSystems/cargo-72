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

function addSimpleArt(art,xOff,yOff,deco,repXCount,repYCount)
{
  if ((!repXCount)&&(art.repXCount)) repXCount=art.repXCount; //use default repeats if not specified
  if ((!repYCount)&&(art.repYCount)) repYCount=art.repYCount;
  
  //expand out the ascii art
  var l=art.l.slice();  //copy the string list
  if (repXCount) {
	 if (!art.repXStart) art.repXStart=0;
     if (!art.repXEnd) art.repXEnd=l[0].length-1;	 
     var s="";
     //do it to every line
	 for (var j=0;j<l.length;j+=1) {
	   var v=l[j].substring(art.repXStart,art.repXEnd+1);
	   var f=v;
	   for (var i=0;i<repXCount-1;i+=1) f=f+v;
	   l[j]=l[j].substring(0,art.repXStart)+f+l[j].substring(art.repXEnd+1);
     }		 
  }
  if (repYCount) {
	 if (!art.repYStart) art.repYStart=0;
     if (!art.repYEnd) art.repYEnd=l.length-1;	 
	 for (var i=0;i<repYCount-1;i+=1) 
		 insertArrayAt(l,art.repYStart,l.slice(art.repYStart,art.repYEnd+1));
  }     
	
	
  var height=l.length;  
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
    if (width<l[i].length) width=l[i].length;	
    html+="<div>"+stringForHtml(l[i])+"</div>";
  }	      
  el.posWidth=width;  
  el.innerHTML=html;
  el.posPFactor=1;
  if (art.deco) decorateArt(el,art.deco);
  if (deco) decorateArt(el,deco);
  el.tick=terrainTick; 
  return createGameObject(el);      
}

