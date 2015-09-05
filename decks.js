
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
  field: function(){ addSimpleTerrain('___v_V____',randomInt(10,30),1,aS.terraing);},
  fieldrise: function(){ var h=randomInt(2,5); addSlope(randomInt(15,35),h,0); addSimpleTerrain('___v_V____',randomInt(1,20),0);addSlope(randomInt(15,45),-h,1,aS.terraing); },
  
  bump: function(){ addSimpleTerrain('_,--,___',6,1);},
  bump2: function(){ addSimpleTerrain('_,--,_____',15,1);},
  dangerzone: function(){ addSimpleTerrain('!',randomInt(3,8),1);},
  block: function() { offsetTerrain(15);  addSimpleTerrain('_',10,1); offsetTerrain(-15);	 },
  cliffdown: function() { addSimpleTerrain('_',10); offsetTerrain(randomInt(-1,-5));  addSimpleTerrain('_',10,1);	 },
  cliffup: function() { addSimpleTerrain('_',10); offsetTerrain(randomInt(1,5));  addSimpleTerrain('_',10,1);	 }  ,
  to20: function() { addTerrainToAltitude(20,randomInt(20,30)); },
  tom20: function() { addTerrainToAltitude(-20,randomInt(20,30)); },
  to40: function() { addTerrainToAltitude(40,randomInt(20,30)); },
  to60: function() { addTerrainToAltitude(60,randomInt(20,30)); },
  to0: function() { addTerrainToAltitude(0,randomInt(10,20)); }  ,
  hurdle: function() { addSimpleTerrain('_',10,0); offsetTerrain(3); addSimpleTerrain('111111',6,0); offsetTerrain(-3); addSimpleTerrain('_',20,1,null,[{ pattern: "1+", replace: "*JUMP*", cls:"cBR"}]);  },
  hurdlex: function() { var h=randomInt(3,5); addSimpleTerrain('_',10,0); offsetTerrain(h); addSimpleTerrain('111111',6,0); offsetTerrain(-h); addSimpleTerrain('_',20,1,null,[{ pattern: "1+", replace: "*JUMP*", cls:"cBR"}]);  }
}; 

//terrain scenery
var tS={
  mountain: function() {   var height=randomInt(18,30); offsetTerrain(-10);  addSimpleTerrain('/',height); addSimpleTerrain('\\',height,1,aS.backdrop); } ,
  mountain2: function() {   var height=randomInt(18,40); offsetTerrain(-10);  addSimpleTerrain('/',height); addSimpleTerrain('\\',height,1,aS.backdrop2); } ,
  hill: function(){ var h=randomInt(5,20); offsetTerrain(-10);  addSlope(randomInt(30,75),h,0); addSlope(randomInt(30,75),-h,1,aS.backdrop); },
  hill2: function(){ var h=randomInt(10,25); offsetTerrain(-10);  addSlope(randomInt(30,75),h,0); addSlope(randomInt(30,75),-h,1,aS.backdrop2); }
  
};

var oC={
  buggy: function() { addBuggy(); },
  tower: function() { addSimpleArt(aW.tower,randomInt(-5,5),randomInt(0,-3));},
  tritower: function() { addSimpleArt(aW.tower,randomInt(-5,5),randomInt(0,-3),null,0,1); 
                         addSimpleArt(aW.tower,randomInt(0,10),randomInt(0,-3),null,0,2);
						 addSimpleArt(aW.tower,randomInt(5,15),randomInt(0,-3),null,0,3);
                         },
  base_asm: function() { addSimpleArt(aW.base,0,0,[{ pattern: "r+", replace: " ASSEMBLY X18 ", cls:"cBR"}]); },
  base_out: function() { addSimpleArt(aW.base,0,0,[{pattern:"r+", replace:   " OUT-EYE-8    ", cls:"cBR"}],1,6); },
  base_dist: function() { addSimpleArt(aW.base,0,0,[{pattern:"r+", replace:  " DIST X19     ", cls:"cBR"}],16,2); },
  base_sky: function() { addSimpleArt(aW.ctower,0,0,[{ pattern: "1+", replace: "**SKY WTCH**", cls:"cBR"}]); addSimpleArt(aW.ctower,5,-2,[{ pattern: "1+", replace: "**SKY WTCH**", cls:"cBR"}],1,8);  },
  dome_t: function() { addSimpleArt(aW.dome,0,0,null,1,4); },
  mother: function() { addSimpleArt(aW.ctower,0,0,[{ pattern: "1+", replace: "**MOTHER-1**", cls:"cBR"}]); addSimpleTerrain('_',20,1); addSimpleArt(aW.dome,0,0,null,8,3); addSimpleTerrain('_',70,1); addSimpleArt(aW.ctower,0,0,[{ pattern: "1+", replace: "**MOTHER-1**", cls:"cBR"}]);},
  billboard_qa1: function() { addSimpleArt(aW.billboard,0,0,[{ pattern: "1+", replace: " QA: Yard Tests ", cls:"cBR"}]); },
  billboard_qa2: function() { addSimpleArt(aW.billboard,0,0,[{ pattern: "1+", replace: " QA: Offroad Track ", cls:"cBR"}]); },
  billboard_qa3: function() { addSimpleArt(aW.billboard,0,0,[{ pattern: "1+", replace: " QA: Atmos Track ", cls:"cBR"}]); },
  loadingplatform: function() {addSimpleArt(aW.platform,0,0); var el=addSimpleArt(aW.tank,0,2.5,[{ pattern:"1+", replace:" STD-UNIT  "}]); addLoadEvent(0,el,1); },
  loadingplatform_empty: function() {addSimpleArt(aW.platform,0,0); addLoadEvent(0,null,1); },
  loadingplatform_spare: function() {addSimpleArt(aW.platform,0,0); var el=addSimpleArt(aW.tank,0,2.5,[{ pattern:"1+", replace:"##-PARTS-##"}]); addLoadEvent(0,el,1); },
  loadingplatformo_fuel: function() {addSimpleArt(aW.platform,0,0); var el=addSimpleArt(aW.tank,0,2.5,[{ pattern:"1+", replace:"##-FUEL-##"}],8,3); addLoadEvent(0,el,0); },
  
  jellyfish: function() { addActor(aW.jellyfish,jellyTick,0,10); },
  jellyfish_swarm: function() { for (var i=0; i<6;i+=1) addActor(aW.jellyfish,jellyTick,randomInt(0,20),10,null,0,randomInt(2,8)); },
  
  cow: function() { addActor(aW.cow,cowTick,0,-1); },
  
  
  shallowsheet: function() { addEnvSheet(30,-50,'cSS'); }  ,
  skysheet: function() { addEnvSheet(90,30,'cAS'); }  
};

var eC={
  moveInstruct: function() { addConsoleEvent(0,"LIVE-ENV QA Test: INIT"); addConsoleEvent(0,"Use <i>[A]</i> + <i>[D]</i> to control the buggy");   },
  jumpInstruct: function() { addConsoleEvent(0,"Press [Space] to Jump");  },
  dangerInstruct: function() { addConsoleEvent(0,"HAZ-INFO: Terrain Dangerous"); addConsoleEvent(0,"Danger zones can damage you.");  },
  reverseInstruct: function() { addConsoleEvent(1,"You are slower in reverse."); addConsoleEvent(1,"Some obstacles will be harder.");  },
  outInstruct: function() { addConsoleEvent(0,"ENV-INFO: In Atmospshere"); addConsoleEvent(0,"There is less drag out of water."); addConsoleEvent(0,"But gravity affects the you more."); },
  score100: function() {  addScoreEvent(0,"Section complete",100);}  ,
  missionCompleted: function() { addWinGameEvent(1); },
  missionCompletedOW: function() { addWinGameEvent(0); }
};


var sets={
	base_asm: [tC.block,oC.shallowsheet,oC.skysheet,tC.lev10,oC.base_asm,tS.hill2,tC.lev10,tS.hill,eC.missionCompleted,oC.buggy,tC.lev50,oC.tritower,tC.bump,tS.hill2,tC.lev10,tC.bump,tS.hill,tC.lev50,oC.tower,tC.lev10],
	base_dist:[tC.block,oC.shallowsheet,oC.skysheet,tC.lev10,tC.lev20,oC.base_dist,tC.lev10,eC.missionCompleted,oC.buggy,tC.lev50,oC.tower,tC.bump2,tC.lev10]
};

var levels=[
  { 
    title: 'QA: MARINE',
	orders: ["Unit CARGO-72...Online...","SYS-CHK-SUM: OKAY","Status: Unit Ready","Proceed to Test Zone","Use [D] to move rightwards." ],
	time:180,
    content: [
	   { set: sets.base_asm  },
	   { set: [tC.up,tC.lev10,oC.billboard_qa1,eC.moveInstruct,tC.lev20,oC.tritower,tC.bump2,tC.lev20,tS.hill,tC.down,tC.lev20,tS.hill,tC.up,tC.lev10,eC.jumpInstruct,tC.lev20,tS.hill2,tC.hurdle,tC.hurdlex,tC.bump2,tS.hill2,eC.dangerInstruct,tC.lev50,tS.hill2,tS.hill,tC.dangerzone,tC.lev50,tC.dangerzone,tC.lev50,oC.billboard_qa2,tC.lev20] },
	   { set: [tC.to0,tC.rough,tC.hill,tC.rise,tS.hill,tS.hill,tS.hill2,tS.hill2,tC.cliffup,tC.softdown,tC.level,tC.dangerzone,tC.hurdlex], distance: 400 },
	   { set: [tC.to0,tC.rough,tC.to0,tC.lev10,oC.tower,tC.lev50,eC.reverseInstruct,tC.lev20,oC.loadingplatform,tC.lev10,oC.base_out,tC.lev50,tC.block] }
	]
  },
  { 
    title: 'QA:ATMOS',
    orders: ["Report for Atmospheric Quality Assurance","Ascend to testing ground."],
    time:180,
	content: [
	   { set: sets.base_asm  },
	   { set: [tC.to20,tC.to20,tC.to20,tC.softup,tC.softdown,tC.rough], distance: 200 },
	   { set: [tC.softup,tC.softup,tC.to40,tS.hill,oC.tower,tC.lev20,oC.billboard_qa3,tC.bump2,eC.outInstruct,tC.level] },
	   { set: [tC.level,tC.up,tC.down,tC.to40,oC.tower,tC.level,tC.hurdle,tC.hurdlex,tC.cliffup,tC.dangerzone,oC.tritower], distance: 400 },
	   { set: [tC.to40,tC.to40,tC.lev10,oC.tower,tC.lev50,oC.loadingplatform,tC.lev10,oC.base_out,tC.lev20,tC.block] }
	   
	]
  },
  { 
    title: 'QA:DUTYASSIGN',
    orders: ["Proceed to DIST-E19 facility for further assignment.","HAZ_INFO: Damaged roadways in deep zones","Proceed with Caution"],
    time:180,
	content: [
	   { set: sets.base_asm  },
	   { set: [tC.tom20,tC.tom20,tC.tom20,tC.softdown,tC.softdown,tC.rough,tC.level], distance: 200 },
	   { set: [tC.softup,tC.softdown,tC.dangerzone,tC.cliffup,tC.cliffdown,tC.tom20,tC.hill], distance: 800 },
	   { set: [tC.to0,tC.lev20,tC.softup,tC.to0,tC.lev20,oC.tower,tC.lev20,oC.base_dist,tC.lev10,eC.missionCompletedOW,tC.lev50] }	   
	]
  },
  { 
    title: 'DST:MOTHERRUN',
    orders: ["Collect Spare Parts from MOTHER-1","HAZ_INFO: Native Biologicals (unconfirmed)"],
    time:180,
	content: [
	   { set: sets.base_dist  },
	   { set: [tC.tom20,tC.tom20,tC.tom20,tC.softdown,tC.softdown,tC.rough,tC.level] },
	   { set: [tC.softup,tC.softdown,tC.rise,tS.mountain,tS.mountain2,tS.mountain,tS.mountain2,tC.tom20,tC.hill,tC.dangerzone,tC.cliffup,oC.jellyfish,oC.jellyfish_swarm], distance: 500 },
	   { set: [tC.softup,tC.softup,tC.softup,tC.softup,tC.to40,tC.down,tC.down,tC.softdown,tC.down,tC.lev50,oC.mother,tC.lev20,oC.loadingplatform_spare,tC.lev50,tC.block] }	   	   
	]
  },
  { 
    title: 'DST:SKY-REFUEL',
    orders: ["Transport Fuel to Skywatch Station","HAZ-INFO: Passive local biologicals","SEC-LEV: Avoid interaction with native fauna"],
    time:180,
	content: [
	   { set: sets.base_dist  },	   
	   { set: [oC.loadingplatformo_fuel,tC.lev20,tC.to20,tC.softdown,tC.softdown,tC.rough,tC.level,tC.softup,tC.softup,tC.to40,tC.softup,tC.to40,tC.level] },
	   { set: [tS.hill,tS.mountain2,oC.cow,tC.field,tC.field,tC.field,tC.fieldrise], distance: 800 },
	   { set: [tS.mountain2,tC.up,tC.up,tC.to60,tC.up,tC.lev20,tC.bump2,oC.base_sky,tC.lev10,oC.loadingplatform_empty,tC.lev20,tC.cliffup,tC.cliffup,tC.block] }
	   
	]
  }

];

