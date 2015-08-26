var aW={
  buggy: {
	  l:[
		  "                _mmmmm_",
		  "                |''o..|>",
		  "                 |  |",
		  "L_______________/    \\",
		  "|=====================|",
		  "|======================\\",
		  "|=(( ))==(( ))==(( ))==/",
		  "    V      V      V     ",
		  " "
		  ],
      cls: "cAB"      
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
  }
  
};


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
	
  ]
};