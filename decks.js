
var tC={
  level: function(){ addSimpleTerrain('_',randomInt(5,15),1);},
  softup: function(){ addSlope(randomInt(15,55),randomInt(5,10),1); }, 
  softdown: function(){ addSlope(randomInt(15,55),randomInt(5,10),randomInt(5,10),1); }, 
  hill: function(){ var h=randomInt(5,10); addSlope(randomInt(15,55),h,0); addSlope(randomInt(15,55),-h,1); }, 
  rise: function(){ var h=randomInt(2,5); addSlope(randomInt(15,55),h,0); addSlope(randomInt(15,55),-h,1); }, 
  up: function(){ addSimpleTerrain('//',randomInt(3,8),1);}, 
  down: function(){ addSimpleTerrain('\\',randomInt(3,8),1);},
  rough: function(){ addSimpleTerrain('_,:,_',randomInt(5,10),1);},
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
  mountain: function() {   var height=randomInt(8,30); addSimpleTerrain('_',randomInt(1,4)); addSimpleTerrain('/',height); addSimpleTerrain('\\',height,2); } ,
  hill: function(){ var h=randomInt(5,12); addSlope(randomInt(15,55),h,0); addSlope(randomInt(15,55),-h,2); }
};

var oC={
  buggy: function() { addBuggy(); }
};

var sampleLevel={
  title: 'revenge1',
  content:[
      {
		  set: [tC.block,tC.level,oC.buggy,tS.hill,tC.level,tC.level,tC.hill,tC.rough,tC.level,tC.to100,tC.level,tC.to100]
	  },
	  {
		  set: [tC.up,tC.down,tS.mountain,tS.mountain,tS.hill,tS.hill,tC.cliffdown,tC.cliffup,tC.hill,tC.level,tC.level,tC.level,tC.rough],
		  distance: 500
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

