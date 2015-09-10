
var textConsole=document.getElementById('iTC');
var damageConsole=document.getElementById('iDI');
var scoreConsole=document.getElementById('iSC');
var timeConsole=document.getElementById('iCC');


function setConsoleState(rem,current) {  
  textConsole.time=0;
  
  if (current) textConsole.lines=current;
  else textConsole.lines=[];
  textConsole.nlines=[];
  textConsole.lineout=[];
  for (var i=0;i<textConsole.lines.length;i+=1)   textConsole.lineout.push(textConsole.time+5000);		
  setElementClass(document.body,'play',rem);

  textConsole.currentNew="";
  textConsole.position=-1;	  
  textConsole.content="";
  textConsole.remove=rem;
  buildConsoleContent();
}

function addConsoleText(message)
{
	textConsole.nlines.push(message);	
}

function buildConsoleContent()
{  
  textConsole.content="";
  for (var i=0;i<textConsole.lines.length;i+=1) 
    textConsole.content+=textConsole.lines[i]+"\n";	
  textConsole.innerHTML=textConsole.content;
}

function consoleTick()
{	
	iCC.innerHTML="Time "+(gS.gameTime/1000).toFixed(0)+"s";
	var nextTime=5;//0;
	if (textConsole.position<0) { //waiting
	  if (textConsole.nlines.length) { //we have new lines to add
	     var e=textConsole.nlines[0];
	     textConsole.currentNew=e.replace(/<.+?>/g,"");
		 textConsole.position=0;	                  		
		 
	  }	
	  if (textConsole.lineout.length&&textConsole.remove) { //maybe we should remove some
	    if (textConsole.lineout[0]<textConsole.time) {
			textConsole.lines.shift();
			textConsole.lineout.shift();			
			buildConsoleContent();
			nextTime=100;
			aud.playnote(100,.1,0,.1,.02);		
		}			
	  }
	} else {
		//add a new character
		textConsole.innerHTML=textConsole.content+textConsole.currentNew.substring(0,textConsole.position)+"_";
		textConsole.position+=1;		
		aud.playnote(50,.3,0,.03,.01);
		if (textConsole.position==textConsole.currentNew.length) { //finished the line - rebuild 
		  textConsole.lines.push(textConsole.nlines.shift());
		  textConsole.lineout.push(textConsole.time+5000);
		  buildConsoleContent()		  
		  textConsole.position=-1;			
		  aud.playnote(100,.4,0,.05,.02);		
          nextTime=150;		  
		}		
		
    }
	textConsole.time+=nextTime;
	setTimeout(consoleTick,nextTime);
	
}


function startConsole() {
  setConsoleState(0);
  consoleTick();
}

function addConsoleEvent(direction,message,tsmessage)
{
	addEvent(direction, function(){ addConsoleText((controls.isTouch&&tsmessage)?tsmessage:message);});	
}


function takeDamage(amount)
{
	gS.avatar.damage+=amount;
	damageConsole.style.width=gS.avatar.damage.toFixed(1)+"%";    	
	if (gS.avatar.damage>100)  {
		endGame(0);		
	}	
	if (amount>0)
       aud.playSlide(400,800,.5,.1,0.01,0.01);
}

function gainScore(text,amount)
{
	if (text) {
	  if (amount>0)
	    addConsoleText("Score +"+amount.toFixed(0)+"("+text+")");
      else
	    addConsoleText("Score Penalty "+amount.toFixed(0)+"("+text+")");
    }
	
	gS.score+=Math.floor(amount);
	scoreConsole.innerHTML="SCORE "+gS.score;
}

function addScoreEvent(direction,text,amount)
{
	addEvent(direction,function() {gainScore(text,amount);});
}
