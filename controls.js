
	  
var controls={
    
    //keyboard handler
	keyList: [],
	
	keyEvent: function(keyCode,keyDown) {
		this.keyList[keyCode]=keyDown;
	},
		
	isKeyDown: function(keyCode) {
	    return this.keyList[keyCode];
	}	
}

function bindControls(el) {
  el.onkeydown=function(evt) { controls.keyEvent(evt.keyCode,1);  };
  el.onkeyup=function(evt) { controls.keyEvent(evt.keyCode,0);  };
}