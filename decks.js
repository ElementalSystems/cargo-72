
var tC={
  lev10: function(){ addSimpleTerrain('_',10,1);},
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
  dangerzone: function(){ addSimpleTerrain('!',randomInt(3,5),1);},
  block: function() { offsetTerrain(15);  addSimpleTerrain('_',10,1); offsetTerrain(-15);	 },
  cliffdown: function() { addSimpleTerrain('_',10); offsetTerrain(randomInt(-1,-5));  addSimpleTerrain('_',10,1);	 },
  cliffup: function() { addSimpleTerrain('_',10); offsetTerrain(randomInt(1,5));  addSimpleTerrain('_',10,1);	 }  ,
  to100: function() { addTerrainToAltitude(100,randomInt(10,20)); },
  to150: function() { addTerrainToAltitude(150,randomInt(10,20)); },
  to0: function() { addTerrainToAltitude(0,randomInt(10,20)); }  
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
  billboard: function() { addSimpleArt(aW.billboard,0,0,aS.building_asm); },
  loadingplatform: function() {addSimpleArt(aW.platform,0,0); var el=addSimpleArt(aW.tank,0,2.5,[{ pattern:"1+", replace:" STD-UNIT  "}]); addLoadEvent(0,el); },
  
  shallowsheet: function() { addEnvSheet(30,-30,'cSS'); }  
  
};

var eC={
  welcome: function() { addConsoleEvent(0,"Unit CARGO-72 Online..."); addConsoleEvent(0,"Internal Diagnostics: OKAY"); addConsoleEvent(0,"Status: In Field Testing");  },
  jumpInstruct: function() { addConsoleEvent(0,"Press [Space] to Jump");  }
};

var sampleLevel={
  title: 'revenge1',
  content:[
      {
		  set: [tC.block,oC.shallowsheet,eC.welcome,tC.lev10,oC.base_asm,tC.lev10,oC.buggy,tC.lev50,oC.tritower,tC.bump,tC.lev10,tC.bump,tC.lev50,oC.tower,tC.lev10,oC.billboard,tC.lev10,eC.jumpInstruct]
	  },	  
	  {
		  set: [tC.up,tC.down,tS.mountain,tS.mountain,tS.hill,tS.hill,tC.hill,tC.rise,tC.rough,tC.softup,tC.softdown],
		  distance: 500
	  },
	  {
		  set: [tC.to0,tC.to0,tC.lev10,oC.tower,tC.lev50,oC.loadingplatform,tC.lev10,oC.base_out,tC.lev50,tC.block]
	  },
	  {
		  set: [tC.down,tC.to0,tC.down,tC.to0, tC.level,tC.level],
		  distance: 100
	  },
	  {
		  set: [tC.level,tC.level,tC.block]
	  }	  
  ]
};

