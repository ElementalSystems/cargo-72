
var tC={
  level: function(){ addSimpleTerrain('_',randomInt(5,15),1);},
  up: function(){ addSimpleTerrain('//',randomInt(3,8),1);}, 
  down: function(){ addSimpleTerrain('\\',randomInt(3,8),1);},
  rough: function(){ addSimpleTerrain('_,:,_',randomInt(5,10),1);},
  cliffdown: function() { addSimpleTerrain('_',10); offsetTerrain(randomInt(-1,-5));  addSimpleTerrain('_',10,1);	 },
  cliffup: function() { addSimpleTerrain('_',10); offsetTerrain(randomInt(1,5));  addSimpleTerrain('_',10,1);	 }  ,
  to100: function() { addTerrainToAltitude(100,randomInt(10,20)); },
  to150: function() { addTerrainToAltitude(150,randomInt(10,20)); },
  to0: function() { addTerrainToAltitude(0,randomInt(10,20)); }
  
}; 

var oC={
  buggy: function() { addBuggy(); }
};

var sampleLevel={
  title: 'revenge1',
  content:[
      {
		  set: [tC.level,oC.buggy,tC.level,tC.level,tC.rough,tC.level,tC.to100,tC.level,tC.to100]
	  },
	  {
		  set: [tC.up,tC.down,tC.cliffdown,tC.level,tC.level,tC.to100,tC.level,tC.rough],
		  distance: 4000
	  },
	  {
		  set: [tC.down,tC.down,tC.down,tC.down,tC.down, tC.level,tC.level]
	  }	  
  ]
};

