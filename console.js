//console thing

var textConsole=document.getElementById('iTC');
var damageConsole=document.getElementById('iDI');
var scoreConsole=document.getElementById('iSC');

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

function addConsoleEvent(direction,message)
{
	addEvent(direction, function(){ addConsoleText(message);});
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

function takeDamage(amount)
{
	gS.avatar.damage+=amount;
	damageConsole.style.width=gS.avatar.damage.toFixed(1)+"%";    	
}

function gainScore(text,amount)
{
	addConsoleText("Score +"+amount.toFixed(0)+"("+text+")");
	gS.score+=amount;
	scoreConsole.innerHTML="SCORE "+gS.score;
}

function addScoreEvent(direction,text,amount)
{
	addEvent(direction,function() {gainScore(text,amount);});
}