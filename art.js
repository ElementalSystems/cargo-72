
var aS={
  terrain:  [
    { cls: "cPT"  },    
	{ pattern: "#+", replace_r: "@&#%$" , cls: "cTS"},
	{ pattern: "[!]+", cls: "cTD" }
  ],
  terraing:  [
    { cls: "cGT"  },    
	{ pattern: "#+", replace_r: "      w v.," , cls: "cGS"}
  ],
  backdrop:  [
    { cls: "cST" } ,
	{ pFactor: .8 },    
	{ pattern: "[\\\\/.'\\-]+", cls: "cSH" },
	{ pattern: "#+", replace_r: "  o.'    ",cls:"cSG"}
	
  ],
  backdrop2:  [
    { cls: "cST2" } ,
	{ pFactor: .6 },    
	{ pattern: "[\\\\/.'\\-]+", cls: "cSH2" },
	{ pattern: "#+", replace_r: "  ^          ", cls: "cSG2" }	
  ],
  building: [
    { pattern: "(\\S+ {0,5})*\\S", cls: "cBS" }, 
	{ pattern: "\\*.+\\*", cls: "cBT" }, 
	{ pattern: "[\\[\\]oO]+", cls: "cBW" }
  ],
  building2: [
    { pattern: "(\\S+ {0,5})*\\S", cls: "cBS2" }, 	
	{ pattern: "[\\[\\]oO]+", cls: "cBW2" }
  ],
  
  aqualife: [
    { pattern: "{.+}", cls: "cLS" },
	{ pattern: "[*!]+", cls: "cLD" }
	
  ],
  
  landlife: [
    { pattern: "\\|.*?\\|", cls: "cLS" },	
	{ pattern: "\\(oo\\)|\\\\/", cls: "cLI" }
	
	

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
	       "***",
	       "X X"
	  ],
	  cls: "cBB",
	  deco: aS.building,
      repXStart: 1, repXEnd: 1, repXCount: 20,	  
	  repYStart: 3, repYEnd: 3, repYCount: 5	  	  
  },
  
  
  tank: {
	  l:[  
	       "  .+. ",
	       ":#111#",
		   "  '+' "
	      
	  ],
	  cls: "cCT",
	  deco: [{pattern: "\\S+", cls: "cCS"}],
      repXStart: 3, repXEnd: 3, repXCount: 8,
      repYStart: 1, repYEnd: 1, repYCount: 1	  	  
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
	  
  },
  
  dome: {
	  l:[  
	      "        !       ",
          "     _.-^-._    ",
          "  .-'   O   '-. ",
          " / O.  -O-  .O \\",
          "/_______________\\",
		  "       | |       " ,
		  " ||||||||||||||||"  
     ],	  
	  cls: "cBB",
	  deco: aS.building2,
      repXStart: 4, repXEnd: 12, repXCount: 3,
	  repYStart: 1, repYEnd: 5, repYCount: 3	  	  
  },
  ctower: {
	  l:[  
	      "     _.-^-._    ",
          "  .-'   O   '-. ",
          " -111111111111-",
          "  '-.   O   .-' ",
          "       | |      " ,
		  "      |[o]|      " ,
		  " ||||||||||||||||"  
     ],	  
	  cls: "cBB",
	  deco: aS.building2,
      repYStart: 4, repYEnd: 5, repYCount: 4	  	  
  },
  jellyfish: {
	  l:[
	    "  {-;':':';-}",
        " {   d   b   }",
        "{      ^      }",
        "{=-=-=-=-=-=-=}",
        "   ) { (  ){( ",
        "  (  }  )( } )",
        "  *    **   *",
		" !*! !*!*! !*!"        
	  ],
	  cls: 'cAL',
	  deco: aS.aqualife,
      repYStart: 4, repYEnd: 5, repYCount: 3	  	  
  },
  cow: {
	  l:[
	    "         (__)",
		"         (oo)",
		"  /|-----|\\/",
	    " / |     |",
        "*  ||----||",
        "   ^^    ^^" 	
	  ],
	  cls: 'cLL',
	  deco: aS.landlife
  },
  cage: {
	  l:[
	    "+-+",
		"| |",
		"###"
	  ],
	  cls: 'cCC',	  
	  repXStart: 1, repXEnd: 2, repXCount: 12,	 
	  repYStart: 0, repYEnd: 1, repYCount: 4	  	  
  }

  
  
 
  
};


