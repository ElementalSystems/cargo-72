
var tC={
  level: function(){ addSimpleTerrain('_',randomInt(5,15),1);},
  up: function(){ addSimpleTerrain('//',randomInt(3,10),1);}, 
  down: function(){ addSimpleTerrain('\\',randomInt(3,10),1);},
  rough: function(){ addSimpleTerrain('_,:',randomInt(5,10),1);},
  cliffdown: function() { addSimpleTerrain('_',10); offsetTerrain(randomInt(-1,-5));  addSimpleTerrain('_',10);	 },
  cliffup: function() { addSimpleTerrain('_',10); offsetTerrain(randomInt(1,5));  addSimpleTerrain('_',10);	 }
}; 

var sampleLevel={
  title: 'revenge1',
  content:[
      {
		  set: [tC.level,tC.up,tC.level,tC.up,tC.level,tC.up]
	  },
	  {
		  set: [tC.up,tC.down,tC.cliffdown,tC.cliffup,tC.level,tC.level,tC.level,tC.level,tC.level,tC.rough],
		  distance: 400
	  },
	  {
		  set: [tC.down,tC.down,tC.down,tC.down,tC.down, tC.level,tC.level]
	  }	  
  ]
};

