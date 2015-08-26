//console thing

var textConsole=document.getElementById('iTC');

textConsole.position=0;	  
textConsole.lines=0;
	
function addConsoleText(message)
{
  if (!textConsole.active) {
	  textConsole.content=message+"\n";
	  textConsole.active=1;
	  doTextConsole();
  } else
	 textConsole.content+=message+"\n";
  textConsole.lines+=1;
  setTimeout(removeTextConsoleLine,4000+500*textConsole.lines+50*textConsole.content.length); 
}

function doTextConsole()
{
	textConsole.position+=1;
	if (textConsole.position>textConsole.content.length) 
		textConsole.active=0;
	else
		setTimeout(doTextConsole,(textConsole.content.charAt(textConsole.position)=='\n')?500:50);	
	
	textConsole.innerHTML=textConsole.content.substring(0,textConsole.position)+(textConsole.active?"_":"");
	
}

function removeTextConsoleLine()
{
	var i=textConsole.content.indexOf('\n');
	if (i>0) 
	     textConsole.content=textConsole.content.substring(i+1);
	textConsole.position-=i;
	textConsole.lines-=1;	
	if (!textConsole.active) doTextConsole();
}