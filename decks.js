
var tC={
  lev10: function(){ addSimpleTerrain('_',10,1);},
  lev20: function(){ addSimpleTerrain('_',20,1);},
  lev50: function(){ addSimpleTerrain('_',50,1);},
  level: function(){ addSimpleTerrain('_',randomInt(5,15),1);},
  softup: function(){ addSlope(randomInt(15,55),randomInt(5,10),1); }, 
  softdown: function(){ addSlope(randomInt(15,55),randomInt(-5,-10),1); }, 
  hill: function(){ var h=randomInt(5,10); addSlope(randomInt(15,55),h,0); addSlope(randomInt(15,55),-h,1); }, 
  rise: function(){ var h=randomInt(2,5); addSlope(randomInt(15,55),h,0); addSlope(randomInt(15,55),-h,1); }, 
  up: function(){ addSimpleTerrain('//',randomInt(3,8),1);}, 
  down: function(){ addSimpleTerrain('\\',randomInt(3,8),1);},
  rough: function(){ addSimpleTerrain('_,:,_',randomInt(5,10),1);},
  bump: function(){ addSimpleTerrain('_,--,___',6,1);},
  bump2: function(){ addSimpleTerrain('_,--,_____',15,1);},
  dangerzone: function(){ addSimpleTerrain('!',randomInt(3,8),1);},
  block: function() { offsetTerrain(15);  addSimpleTerrain('_',10,1); offsetTerrain(-15);	 },
  cliffdown: function() { addSimpleTerrain('_',10); offsetTerrain(randomInt(-1,-5));  addSimpleTerrain('_',10,1);	 },
  cliffup: function() { addSimpleTerrain('_',10); offsetTerrain(randomInt(1,5));  addSimpleTerrain('_',10,1);	 }  ,
  to20: function() { addTerrainToAltitude(20,randomInt(20,30)); },
  to40: function() { addTerrainToAltitude(40,randomInt(20,30)); },
  to0: function() { addTerrainToAltitude(0,randomInt(10,20)); }  ,
  hurdle: function() { addSimpleTerrain('_',10,0); offsetTerrain(3); addSimpleTerrain('111111',6,0); offsetTerrain(-3); addSimpleTerrain('_',20,1,null,[{ pattern: "1+", replace: "*JUMP*", cls:"cBR"}]);  },
  hurdlex: function() { var h=randomInt(3,6); addSimpleTerrain('_',10,0); offsetTerrain(h); addSimpleTerrain('111111',6,0); offsetTerrain(-h); addSimpleTerrain('_',20,1,null,[{ pattern: "1+", replace: "*JUMP*", cls:"cBR"}]);  }
}; 

//terrain scenery
var tS={
  mountain: function() {   var height=randomInt(8,30); addSimpleTerrain('_',randomInt(1,4)); addSimpleTerrain('/',height); addSimpleTerrain('\\',height,1,aS.backdrop); } ,
  hill: function(){ var h=randomInt(5,12); addSlope(randomInt(15,55),h,0); addSlope(randomInt(15,55),-h,1,aS.backdrop); }
};

var oC={
  buggy: function() { addBuggy(); },
  tower: function() { addSimpleArt(aW.tower,randomInt(-5,5),randomInt(0,-3));},
  tritower: function() { addSimpleArt(aW.tower,randomInt(-5,5),randomInt(0,-3),null,0,1); 
                         addSimpleArt(aW.tower,randomInt(0,10),randomInt(0,-3),null,0,2);
						 addSimpleArt(aW.tower,randomInt(5,15),randomInt(0,-3),null,0,3);
                         },
  base_asm: function() { addSimpleArt(aW.base,0,0,[{ pattern: "r+", replace: " ASSEMBLY X18 ", cls:"cBR"}]); },
  base_out: function() { addSimpleArt(aW.base,0,0,[{pattern:"r+", replace: " OUT-EYE-8     ", cls:"cBR"}],1,6); },
  billboard_qa1: function() { addSimpleArt(aW.billboard,0,0,[{ pattern: "1+", replace: " QA: Yard Tests ", cls:"cBR"}]); },
  billboard_qa2: function() { addSimpleArt(aW.billboard,0,0,[{ pattern: "1+", replace: " QA: Offroad Track ", cls:"cBR"}]); },
  billboard_qa3: function() { addSimpleArt(aW.billboard,0,0,[{ pattern: "1+", replace: " QA: Atmos Track ", cls:"cBR"}]); },
  loadingplatform: function() {addSimpleArt(aW.platform,0,0); var el=addSimpleArt(aW.tank,0,2.5,[{ pattern:"1+", replace:" STD-UNIT  "}]); addLoadEvent(0,el,1); },
  
  shallowsheet: function() { addEnvSheet(30,-30,'cSS'); }  ,
  skysheet: function() { addEnvSheet(90,30,'cAS'); }  
};

var eC={
  welcome: function() { addConsoleEvent(0,"Unit CARGO-72...Online..."); addConsoleEvent(0,"SYS-CHK-SUM: OKAY"); addConsoleEvent(0,"Status: Unit Ready");  addConsoleEvent(0,"Proceed to Test Zone");  addConsoleEvent(0,"Use [D] to move rightwards.");  },
  moveInstruct: function() { addConsoleEvent(0,"LIVE-ENV QA Test: INIT"); addConsoleEvent(0,"Use [A] and [D] to control the buggy");   },
  jumpInstruct: function() { addConsoleEvent(0,"Press [Space] to Jump");  },
  dangerInstruct: function() { addConsoleEvent(0,"HAZ-INFO: Terrain Dangerous"); addConsoleEvent(0,"Danger zones can damage you.");  },
  reverseInstruct: function() { addConsoleEvent(1,"You are slower in reverse."); addConsoleEvent(1,"Some obstacles will be harder.");  },
  outInstruct: function() { addConsoleEvent(0,"ENV-INFO: In Atmospshere"); addConsoleEvent(0,"There is less drag out of water."); addConsoleEvent(0,"But gravity affects the you more."); },
  score100: function() {  addScoreEvent(0,"Section complete",100);}  ,
  missionCompleted: function() { addScoreEvent(1,"Mission Completed",1000); }
};


var levels=[
  { 
    title: 'QA:MARINE',
    content: [
	   { set: [eC.welcome] },
	   { set: [tC.block,oC.shallowsheet,tC.lev10,oC.base_asm,tC.lev10,tS.hill,eC.missionCompleted,oC.buggy,tC.lev50,oC.tritower,tC.bump,tC.lev10,tC.bump,tS.hill,tC.lev50,oC.tower,tC.lev10]  },
	   { set: [tC.up,tC.lev10,oC.billboard_qa1,eC.moveInstruct,tC.lev20,oC.tritower,tC.bump2,tC.lev20,tC.down,tC.lev20,tC.up,tC.lev10,eC.jumpInstruct,tC.lev20,tC.hurdle,tC.hurdlex,tC.bump2,eC.dangerInstruct,tC.lev50,tC.dangerzone,tC.lev50,tC.dangerzone,tC.lev50,oC.billboard_qa2,tC.lev20] },
	   { set: [tC.to0,tC.rough,tC.hill,tC.rise,tS.hill,tC.cliffup,tC.softdown,tC.level,tC.dangerzone,tC.hurdlex], distance: 400 },
	   { set: [tC.to0,tC.rough,tC.to0,tC.lev10,oC.tower,tC.lev50,eC.reverseInstruct,tC.lev20,oC.loadingplatform,tC.lev10,oC.base_out,tC.lev50,tC.block] }
	]
  },
  { 
    title: 'QA:ATMOS',
    content: [
	   { set: [tC.block,oC.shallowsheet,oC.skysheet,tC.lev10,oC.base_asm,tC.lev10,tS.hill,eC.missionCompleted,oC.buggy,tC.lev50,oC.tritower,tC.bump,tC.lev10,tC.bump,tS.hill,tC.lev50,oC.tower,tC.lev10]  },
	   { set: [tC.to20,tC.to20,tC.to20,tC.softup,tC.softdown,tC.rough], distance: 200 },
	   { set: [tC.softup,tC.softup,tC.to40,tS.hill,oC.tower,tC.lev20,oC.billboard_qa3,tC.bump2,eC.outInstruct,tC.level] },
	   { set: [tC.level,tC.up,tC.down,tC.to40,oC.tower,tC.level,tC.hurdle,tC.hurdlex,tC.cliffup,tC.dangerzone,oC.tritower], distance: 400 },
	   { set: [tC.to40,tC.to40,tC.lev10,oC.tower,tC.lev50,oC.loadingplatform,tC.lev10,oC.base_out,tC.lev20,tC.block] }
	   
	]
  }

];

var sampleLevel=levels[1];

