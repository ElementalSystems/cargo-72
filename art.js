
var aS={
  terrain:  [
    { cls: "cPT"  },    
    { pattern: "#+", cls: "cTS" },
	{ pattern: "#+", replace_r: "@&#%$" },
	{ pattern: "[!]+", cls: "cTD" }
  ],
  backdrop:  [
    { cls: "cST" } ,
	{ pFactor: .8 },    
	{ pattern: "#+", replace_r: "  o .  ' , " }
	
  ],
  building: [
    { pattern: "(\\S+ {0,5})*\\S", cls: "cBS" }, 
	{ pattern: "\\*.+\\*", cls: "cBT" }, 
	{ pattern: "[\\[\\]o]+", cls: "cBW" }
  ]
  
  
  
};

var aW={
  buggy: {
	  l:[
		  "                   O   + o ",
		  "                  _|___|/_",
          "                  }''o..{",
		  "                    |=|",
		  "|::::::::::::::::::/==|  ",
		  "L_________________/===|",
		  "|============CARGO-72==\\",
		  "|=(( ))==(( ))==(( ))==/",
		  "    V      V      V     ",
		  " "
		  ],
      cls: "cAB",     
	  deco: [{ pattern: "=(.*=)*", cls: "cAS"  },{ pattern: "\\}.*\\{", cls: "cAS"  }]
  },
  buggy_w: { 
	  l:[ "  nnnnn  ",
	      " <#####>",
		  "<##(O)##>",
		  " <#####>",
		  "  uuuuu  "
		  ],
      cls: "cAW",
	  deco: [{ pattern: "#+", cls: "cWS" },{ pattern: "\\(O\\)", cls: "cWH" }]
  },
  
  tower: {
	  l:[  "     |    ",
	       " +===+===+",
		   "<| [] [] |>",
		   " +===+===+",
		   "     |",
	       "     |",
	       "    + +",
		   "    |o|",		   
		   "    + +",
		   "     |",
	       "     |",	       
	       " ___/ \\___"
	  ],
	  cls: "cBB",
	  deco: aS.building,
	  repYStart: 5, repYEnd: 9, repYCount: 3	  	  
  },
  
  base: {
	  l:[  
	       "****************",
	       "*rrrrrrrrrrrrrr*",
	       "****************",
		   "X              X",
	       "+==============+====+",
		   "| []   []   []   [] |",
		   "|'''''''''''''''''''|",
		   "|rrrrrrrrrrrrrr ___ |",
		   "|   .     .     ___ |",
		   "| .XXX'.'XXX.    '  |",
		   "| XXXXX|XXXXX   o   |",
		   "| XXXXX|XXXXX     o |",
		   "| XXXXX|XXXXX ______|"		   
	  ],
	  cls: "cBB",
	  deco: aS.building,
      repXStart: 16, repXEnd: 19, repXCount: 10,	  
	  repYStart: 5, repYEnd: 6, repYCount: 3	  	  
  },
  
  billboard: {
	  l:[  
	       "***",
	       "*1*",
	       "*2*",
	       "*3*",
	       "***",
	       "X X"
	  ],
	  cls: "cBB",
	  deco: aS.building,
      repXStart: 1, repXEnd: 1, repXCount: 20,	  
	  repYStart: 5, repYEnd: 5, repYCount: 5	  	  
  },
  
  
  tank: {
	  l:[  
	       "  .+. ",
	       ":#111#",
		   "  '+' "
	      
	  ],
	  cls: "cCT",
	  deco: [{pattern: "\\S+", cls: "cCS"}],
      repXStart: 3, repXEnd: 3, repXCount: 8	  	  
  },
  
  platform: {
	  l:[  
	       "T=T",
	       "| |",
	       "| |",
	       "X X"
		   
	  ],	  
	  cls: "cBB",
	  deco: aS.building,
      repXStart: 1, repXEnd: 1, repXCount: 12	  	  
	  
  }
  
  
    
};


