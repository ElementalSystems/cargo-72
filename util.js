//utility functions
function makeString(fill,length)
{new Array(length).join(fill);}

function randomInt(min,max) {
     return Math.floor(min+(max-min+1)*Math.random());
   }

   
function stringForHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function cycleRange(start,end,counter,duration)
{
 return start+((end-start)*(counter%duration)/duration);
}

function pingPongRange(start,end,counter,duration)
{
 var v=(counter%duration);
 if (v>(duration/2)) 
	return cycleRange(end,start,counter,duration/2);
 else 	 
	return cycleRange(start,end,counter,duration/2);
}
   
function setElementClass(e,cls,set)
{
  var isSet=e.classList.contains(cls);
  if (set&&(!isSet))
    e.classList.add(cls);
  else if ((!set)&&isSet)
	e.classList.remove(cls);	
}
  