
	  
var controls={
    
    //keyboard handler
	keyList: [],
	touchl: { },
	touchr: { },
	
	isRight: function() {return controls.touchr.down||controls.isKeyDown(68);},
	isLeft:  function() {return controls.touchl.down||controls.isKeyDown(65);},
	
	
	keyEvent: function(keyCode,keyDown) {
		if (keyDown&&(keyCode==32)) controls.jumpTrigger=1;
	    controls.keyList[keyCode]=keyDown;
	},
		
	isKeyDown: function(keyCode) {
		return controls.keyList[keyCode];
	},	
	
	touch: function(tl,down) {
		for (var i=0;i<tl.length;i+=1) {
			var t=tl[i];
			var side=(t.clientX<controls.width/2)?controls.touchl:controls.touchr;
			if (down) {
			  side.start=gS.gameTime;
              side.down=1;			  
			} else {
			  if ((gS.gameTime-side.start)<200) controls.jumpTrigger=1;
			  side.start=0;
              side.down=0;			  
			}
		}
	}
	
	
}

function bindControls(el) {
  el.onkeydown=function(evt) { controls.keyEvent(evt.keyCode,1);  };
  el.onkeyup=function(evt) { controls.keyEvent(evt.keyCode,0);  };
  el.ontouchstart=function(evt) { evt.preventDefault(); controls.touch(evt.changedTouches,1); return false; }
  el.ontouchend=function(evt) { evt.preventDefault(); controls.touch(evt.changedTouches,0); return false; }
  controls.width=window.innerWidth;
  el.focus();
  
  //repress the context menu
  window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
  };
}