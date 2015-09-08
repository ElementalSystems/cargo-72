	
var aud={
     ctx: (new (window.AudioContext || window.webkitAudioContext)()),
	 
	 startSound:function(freq,vol,wave) {
	   var osc = this.ctx.createOscillator();
       var gainN = this.ctx.createGain();
	   osc.connect(gainN);
       gainN.connect(this.ctx.destination);
	   gainN.gain.value=vol;
	   if (!wave) wave='sawtooth';
       osc.type = wave; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
       osc.frequency.value = freq; // value in hertz
       osc.start();
       return { 
	     gain: gainN.gain,
		 freq: osc.frequency,
		 stop: function(when) { osc.stop(when);}
	   };
	 
	 },
	 
	 playsound:function(freq,vol,length,wave) {
	    var s=this.startSound(freq,vol,wave);
		var now = this.ctx.currentTime;
        s.stop(now+length);
        return s;		
	 },
	 
	 playnote: function(freq,vol,ut,ft,dt,wave) {
	    var now = this.ctx.currentTime;
        var s=this.playsound(freq,vol,ut+ft+dt,wave);
		s.gain.setValueAtTime(0,now);  
        s.gain.linearRampToValueAtTime(vol, now+ut);
  	    s.gain.setValueAtTime(vol,now+ut+ft);  
        s.gain.linearRampToValueAtTime(0, now+ut+ft+dt);  	        		
	 },
	 
	  playSlide: function(freq,freq2,vol,ut,ft,dt,wave) {
	    var now = this.ctx.currentTime;
        var s=this.playsound(freq,vol,ut+ft+dt,wave);
		s.freq.setValueAtTime(freq,now);  
        s.freq.linearRampToValueAtTime(freq2, now+ut);
  	    s.freq.setValueAtTime(freq2,now+ut+ft);  
        s.freq.linearRampToValueAtTime(freq, now+ut+ft+dt);  	        			    
	 }
	 
  };
  
  
  aud.playsound(50,.2,.01);
  