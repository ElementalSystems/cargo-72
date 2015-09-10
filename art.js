
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
  ],
  machine: [
   { pattern: "\\\\.+/", cls: "cMS" },
   { pattern: "\\|.*?\\|", cls: "cMT" }
  ],
  zeppelin: [
   { pattern: "(\\S+ {0,5})*\\S", cls: "cMS" },
   { pattern: "\\|.*?\\|", cls: "cMT" },
   { pattern: "\\[.+\\]", cls: "cMT" }
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
  },
  battleship: {
	  l:[
	"                       /\\     ( )",
    "                    ___\\/______|___",
    "                _   |            |  _",
    "          _ -==| |  |            | | |==-",
    "      -==| |...|'|__|------------|_|-|__",
    "\\--------'''   .  .  .  . -#- .  .  .   \\-----/",
    " \\  USS INCORRIGIBLE                         /",
    "  \\   o  o  o  o  o  o  o      o  o  o  o   /",
    "   \\                                       /",
    "    \\_____________________________________/"	   
	  ],
	  cls: 'cMM',	  	
      deco: aS.machine,
	  repXStart: 25, repXEnd: 29, repXCount: 5	  
  },
  zeppelin: {
	  l:[
         "     _..--=--..._",
         "  .-'  '  '   '  '-.  .-.",
	     " /.'**************'.\\/  /",
	     "|=-  USS UNLIKELY  -=| (",
	     " \\.'**************.'/\\  \\",
	     "  '-.,___________.-'  '-'",
	     "      [_#_#_#_#_]"
        ],
       cls: 'cMZ',	  	
       deco: aS.zeppelin
  },

  ammo: {
	  l:[
	    "+@@@+",
		"@@#@@",
		"+@@@+"
	  ],
      cls: 'cMA'
  },
  
  bomb: {
	  l:[
	    "++ ++ ++ ++",
		"/\\_/\\_/\\_/\\ ",
		"|| || || ||" ,
		"| @FS-18@ |",
		"|| || || ||",
		"|| || || ||",
		"|_________|"		
	  ],
      cls: 'cFS'	  	
  },
  
  
      
  
  robot: {
	  l:[
	  "     [___] /~\\ [___]",
      "     |ooo|.\\_/.|ooo|",
      "     |888||   ||888|",
      "    /|888||   ||888|\\",
      "  /_,|###||___||###|._\\",
      " /~\\  ~~~ /[_]\\ ~~~  /~\\",
      "(O_O) /~~[_____]~~\\ (O_O)",
      "     (##|       |##)",
      "    [~`#]       [#'~]",
      "    |~~|         |~~|",
      "    |##|         |##|",
      "   _<\\/>_       _<\\/>_",
      "  /_====_\\     /_====_\\"	  
	  ],
	  cls: 'cRB',
	  deco: [{ pattern: "(\\S+)*\\S", cls: "cAS"  },{ pattern: "[8oO]+", cls: "cAX"  }],
	  repYStart: 10, repYEnd: 10, repYCount: 1	  
  },
  human: {
	  l:[
     "                  __    ",
     "   __      __    |__|_",
     " _|__|    |__|_  ( oo  ",
     "  oo )   !( oo    \\o/ (\\",
     "  \\-/   (_)\\-/   /\\X/\\//",
     " /\\X/\\  |X/\\X/\\  \\\\X|\\/ ",
     " \\\\X//  |X\\\\X//   //\\\\ ",
     " //\\\\     //\\\\   // //",
     "(X)(X)   (X)(X) (X)(X)"
  ],
  cls: 'cHS',
  deco: [{ pattern:"X|(\\|__\\|)", cls: 'cHU' }]
  }, 
  clouds: {
	 l: [
		"     _          ",
		" .:(`  )`.      ",
		":(   .    )     ",
		"`.  (    ) )    ",
		"  ` _`  ) )     ",
		"     (   )  ._  ",
		"      `-'.-(`  )",
		"        :(      ))",
		"        `(    )  ))",
		"          ` __.:'"
	 ],
	 cls: 'cCL',
	 deco: [ { pattern: "(\\S+ {0,6})*\\S", cls: "cCB" }] , 
	
	 repXStart:8 ,repXEnd:10, repXCount:3,
	 repYStart:3 ,repYEnd:4, repYCount:3
	 
  },
  sun: {
	  l: [
	     "            :",
         "   `.       ;        .'",
         "     `.  .-'''-.   .'",
         "       ;'@@@@@@@@;'",
         "      /@@@@@@@@@@@\\",
         "     |@@@@@@@@@@@@@|",
         "'''''|@@@@@@@@@@@@@|``````",
         "      \\@@@@@@@@@@@/",
         "       `@@@@@@@@@'",
         "      .' `-,,,-' `.",
         "    .'      :      `.",
		 "            :"  
	  ],
	 deco: [ { pattern: "@+", cls: "cSB" }] , 
	 cls: 'cSM'
	  
  }
};


/* clouds


     _
 .:(`  )`.
:(   .    )
`.  (    ) )
  ` _`  ) )
     (   )  ._
      `-'.-(`  )
        :(      ))
        `(    )  ))
          ` __.:'


*/

/*the comment man
     "                  __    ",
     "   __      __    |__|__",
     " _|__|    |__|_  ( oo  ",
     "  oo )   _( oo    \o/ (\",
     "  \-/   (_)\-/   /\X/\//",
     " /\X/\  | /\X/\  \\X|\/ ",
     " \\X//  |_\\X//   //\\ ",
     " //\\     //\\   // //",
     "(X)(X)   (X)(X) (X)(X)"


*/

