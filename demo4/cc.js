var b=document.getElementById("iGS");function k(a){b.M.push(a);return a}function l(a){b.A[0].push({action:a,position:b.F})}function p(a){if(0>a)return 0;var c=Math.floor(a);a=a-c;c=b.Y[c];return c.altitude+(1-a)*c.C+a*c.s}
function q(a){b.ia?b.B=a-b.wa:(b.ia=a,b.B=100);b.wa=a;b.Ca=a-b.ia;for(a=0;a<b.l.length;a+=1)b.l[a].ea();b.m?(b.P=-b.m.c+20,b.xa=-b.m.o+10):b.P=0;0==b.oa&&0<b.A[0].length&&b.A[0][0].position<b.m.c&&(a=b.A[0].shift(),a.action());1==b.oa&&0<b.A[1].length&&b.A[1][b.A[1].length-1].position>b.m.c&&(a=b.A[1].pop(),a.action());for(a=0;a<b.l.length;a+=1){var c=b.l[a];c.style.left=(c.c+b.P)*b.U*c.N+"px";c.style.bottom=(c.o+b.xa)*b.da*c.$+"px"}if(Math.abs(b.P-b.pa)>.8*b.R){a=[];for(c=0;c<b.M.length;c+=1){var d=
b.M[c],h=(d.c+b.P)*d.N;h+d.aa>-b.R&&h<b.ga+b.R&&a.push(d)}for(c=0;c<a.length;c+=1)b.M.splice(b.M.indexOf(a[c]),1),b.appendChild(a[c]),b.l.push(a[c]);a=[];for(c=0;c<b.l.length;c+=1)d=b.l[c],h=(d.c+b.P)*d.N,(h+d.aa<-b.R||h>b.ga+b.R)&&a.push(d);for(c=0;c<a.length;c+=1)b.l.splice(b.l.indexOf(a[c]),1),b.removeChild(a[c]),b.M.push(a[c]);b.pa=b.P}window.requestAnimationFrame(q)}
window.fOL=function(){var a=document.getElementById("iMM");b.U=a.clientWidth;b.da=a.clientHeight;b.ma=b.da/b.U;b.ga=b.offsetWidth/b.U;a=r;b.l=[];b.M=[];b.oa=0;b.A=[[],[]];b.level=a;b.Y=[];b.i=0;b.ta=0;b.F=0;b.b=0;b.ca=-99999;b.u=99999;b.pa=1E5;b.R=30;b.ia=0;b.ja=30;b.ua=5;t();for(var c=0;c<a.content.length;c+=1)for(var d=a.content[c].ha?b.i+a.content[c].ha:0,h=aa(a.content[c].set),f=null;;)if(f=d?h.va():h.next(),f(),d){if(b.i>d)break}else if(h.ka())break;window.requestAnimationFrame(q)};var ba=[{a:"cPT"},{pattern:"#+",a:"cTS"},{pattern:"#+",la:"@&#%$"},{pattern:"[!]+",a:"cTD"}],u=[{a:"cST"},{ra:.8},{pattern:"#+",la:"  o .  ' , "}],v=[{pattern:"(\\S+ {0,5})*\\S",a:"cBS"},{pattern:"\\*.+\\*",a:"cBT"},{pattern:"[\\[\\]o]+",a:"cBW"}],ca={},da={H:"                   O   + o ;                  _|___|/_;                  }''o..{;                    |=|;|::::::::::::::::::/==|  ;L_________________/===|;|============CARGO-72==\\;|=(( ))==(( ))==(( ))==/;    V      V      V     ; ".split(";"),
a:"cAB",w:[{pattern:"=(.*=)*",a:"cAS"},{pattern:"\\}.*\\{",a:"cAS"}]},w={H:["  nnnnn  "," <#####>","<##(O)##>"," <#####>","  uuuuu  "],a:"cAW",w:[{pattern:"#+",a:"cWS"},{pattern:"\\(O\\)",a:"cWH"}]},x={H:"     |    ; +===+===+;<| [] [] |>; +===+===+;     |;     |;    + +;    |o|;    + +;     |;     |; ___/ \\___".split(";"),a:"cBB",w:v,O:5,T:9,ba:3},y={H:"****************;*rrrrrrrrrrrrrr*;****************;X              X;+==============+====+;| []   []   []   [] |;|'''''''''''''''''''|;|rrrrrrrrrrrrrr ___ |;|   .     .     ___ |;| .XXX'.'XXX.    '  |;| XXXXX|XXXXX   o   |;| XXXXX|XXXXX     o |;| XXXXX|XXXXX ______|".split(";"),
a:"cBB",w:v,J:16,I:19,S:10,O:5,T:6,ba:3},ea={H:"***;*1*;*2*;*3*;***;X X".split(";"),a:"cBB",w:v,J:1,I:1,S:20,O:5,T:5,ba:5},fa={H:["  .+. ",":#111#","  '+' "],a:"cCT",w:[{pattern:"\\S+",a:"cCS"}],J:3,I:3,S:8},ga={H:["T=T","| |","| |","X X"],a:"cBB",w:v,J:1,I:1,S:12};var z=[];function t(){b.onkeydown=function(a){z[a.keyCode]=1};b.onkeyup=function(a){z[a.keyCode]=0};b.focus()};function A(a,c){return Math.floor(a+(c-a+1)*Math.random())}function B(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function C(a,c){a.classList.contains(c)||a.classList.add(c)}
function aa(a){var c={};c.source=a;c.current=[];c.ka=function(){return!this.current.length};c.next=function(){this.ka()&&(this.current=this.source.slice());return c.current.shift()};c.va=function(){this.ka()&&(this.current=this.source.slice());return c.current.splice(A(0,this.current.length-1),1)[0]};return c};function D(){E("_",10,1)}function F(){E("_",50,1)}function G(){E("_",A(5,15),1)}function H(){E("\\",A(3,8),1)}function I(){E("_,--,___",6,1)}function J(){b.b+=15;E("_",10,1);b.b+=-15}function K(){for(var a=A(10,20),c=0;c<a;c+=1){var d=0-b.b;switch(A(0,Math.abs(d+6))){case 0:case 1:case 2:case 3:L("_");break;case 4:L("/");break;case 5:L("\\");break;default:L(0<d?"/":"\\")}}M(void 0)}function O(){var a=A(8,30);E("_",A(1,4));E("/",a);E("\\",a,1,u)}function P(){var a=A(5,12);Q(a,0);Q(-a,1,u)}
function R(){S(x,A(-5,5),A(0,-3))}
var r={title:"revenge1",content:[{set:[J,function(){var a=document.createElement("DIV");C(a,"cGO");C(a,"cSS");a.c=5;a.aa=b.ga;a.o=-30;a.na=30;a.N=0;a.$=1;a.ea=T;a.qa=1;a.style.height=60*b.da;a.style.width=b.ga*b.U;k(a)},function(){U("Unit CARGO-72 Online...");U("Internal Diagnostics: OKAY");U("Status: In Field Testing")},D,function(){S(y,0,0,[{pattern:"r+",replace:" ASSEMBLY X18 ",a:"cBR"}])},D,function(){var a=S(da,5,5);b.m=a;a.ea=ha;a.f=0;a.K=0;a.g=[S(w,0,0),S(w,0,0),S(w,0,0)];a.fa=[-3,0,3];a.v=
0;a.j=0;a.D=a.c;a.h=a.o;a.V=0;a.sa=3.14;a.G=0;a.g[0].W=a.g[1].W=a.g[2].W=0},F,function(){S(x,A(-5,5),A(0,-3),null,0,1);S(x,A(0,10),A(0,-3),null,0,2);S(x,A(5,15),A(0,-3),null,0,3)},I,D,I,F,R,D,function(){S(ea,0,0,ca.ya)},D,function(){U("Press [Space] to Jump")}]},{set:[function(){E("//",A(3,8),1)},H,O,O,P,P,function(){var a=A(5,10);Q(a,0);Q(-a,1)},function(){var a=A(2,5);Q(a,0);Q(-a,1)},function(){E("_,:,_",A(5,10),1)},function(){Q(A(5,10),1)},function(){Q(A(-5,-10),1)}],ha:500},{set:[K,K,D,R,F,function(){S(ga,
0,0);var a=S(fa,0,2.5,[{pattern:"1+",replace:" STD-UNIT  "}]);ia(a)},D,function(){S(y,0,0,[{pattern:"r+",replace:" OUT-EYE-8     ",a:"cBR"}],1,6)},F,J]},{set:[H,K,H,K,G,G],ha:100},{set:[G,G,J]}]};function E(a,c,d,h){for(var f=0;f<c;f+=1)L(a.charAt(f%(a.length-1)));d&&M(h)}function Q(a,c,d){ja(a,c,d,function(a){return 3*a*a-2*a*a*a})}function ja(a,c,d,h){var f=A(15,55),e=b.b;for(i=0;i<f;i+=1){var g=h(i/f)*a,m=Math.floor(g),g=g-m;b.b=e+m;m="";m=.75<g?"'":.5<g?"-":.25<g?".":"_";L(m)}.8<g&&(b.b+=1);c&&M(d)}
function M(a){b.u-=20;var c=Math.floor(b.ca-b.u+1),d=document.createElement("DIV"),h=b.F-b.i;C(d,"cGO");d.L=[];for(var f=0;f<c;f+=1){d.L[f]="";for(var e=0;e<h;e+=1){var g=b.Y[e+b.i].altitude-b.u;d.L[f]=f==g?d.L[f]+b.Y[e+b.i].symbol:f<g?d.L[f]+"#":d.L[f]+" "}}d.c=b.i;d.aa=b.F-b.i;d.o=b.u;d.na=b.u+c;h="";for(f=c-1;0<=f;--f)h+="<div>"+B(d.L[f])+"</div>";d.innerHTML=h;d.ea=T;d.N=d.$=1;V(d,a?a:ba);k(d);d.qa?(b.F=b.i,b.b=b.ta):(b.i=b.F,b.ta=b.b);b.ca=-99999;b.u=99999}
function L(a){a={C:0,s:0,symbol:a};switch(a.symbol){case "\\":a.C=1;break;case "/":a.s=1;break;case ",":a.s=.2;break;case ":":a.C=a.s=.6;break;case ".":a.C=a.s=.2;break;case "-":a.C=a.s=.5;break;case "'":a.C=a.s=.8;break;case "W":case "!":a.C=a.s=1}b.b-=Math.floor(a.C);a.altitude=Math.floor(b.b);b.b>b.ca&&(b.ca=b.b);b.b<b.u&&(b.u=b.b);b.b+=Math.floor(a.s);b.Y[b.F]=a;b.F+=1}function T(){};var W=document.getElementById("iTC");W.position=0;W.Z=0;function Y(a){W.active?W.content+=a+"\n":(W.content=a+"\n",W.active=1,Z());W.Z+=1;setTimeout(ka,4E3+500*W.Z+50*W.content.length)}function U(a){l(function(){Y(a)})}function Z(){W.position+=1;W.position>W.content.length?W.active=0:setTimeout(Z,"\n"==W.content.charAt(W.position)?500:50);W.innerHTML=W.content.substring(0,W.position)+(W.active?"_":"")}
function ka(){var a=W.content.indexOf("\n");0<a&&(W.content=W.content.substring(a+1));W.position-=a;--W.Z;W.active||Z()};function V(a,c){for(var d=a.getElementsByTagName("DIV"),h=0;h<d.length;h+=1){for(var f=d[h].innerHTML,e=0;e<c.length;e+=1)c[e].pattern?f=f.replace(new RegExp(c[e].pattern,"g"),function(a){if(c[e].replace){a=a.length;for(var d="";d.length<a;)d+=c[e].replace;a=d.substring(0,a)}else if(c[e].la){for(var d=c[e].la,f="";f.length<a.length;)f+=d.charAt(A(0,d.length));a=f}c[e].a&&(a="<span class="+c[e].a+">"+a+"</span>");return a}):(c[e].a&&C(a,c[e].a),c[e].ra&&(a.N=a.$=c[e].ra,a.qa=1));d[h].innerHTML=f}}
function S(a,c,d,h,f,e){!f&&a.S&&(f=a.S);!e&&a.ba&&(e=a.ba);var g=a.H.slice();if(f){a.J||(a.J=0);a.I||(a.I=g[0].length-1);for(var m=0;m<g.length;m+=1){for(var X=g[m].substring(a.J,a.I+1),N=X,n=0;n<f-1;n+=1)N+=X;g[m]=g[m].substring(0,a.J)+N+g[m].substring(a.I+1)}}if(e)for(a.O||(a.O=0),a.T||(a.T=g.length-1),n=0;n<e-1;n+=1)Array.prototype.splice.apply(g,[a.O,0].concat(g.slice(a.O,a.T+1)));f=g.length;e=document.createElement("DIV");m=0;C(e,"cGO");C(e,a.a);e.c=b.i+c;e.o=b.b+d;e.na=b.b+f+d;c="";for(n=0;n<
f;n+=1)m<g[n].length&&(m=g[n].length),c+="<div>"+B(g[n])+"</div>";e.aa=m;e.innerHTML=c;e.N=e.$=1;a.w&&V(e,a.w);h&&V(e,h);e.ea=T;return k(e)};function ha(){this.V=0;z[68]&&(this.V=120);z[65]&&(this.V=-100);var a=z[32];this.K>this.f?(this.f+=this.sa*b.B/1E3,this.f>this.K&&(this.f=this.K)):this.K<this.f&&(this.f-=this.sa*b.B/1E3,this.f<this.K&&(this.f=this.K));var c=Math.cos(this.f),d=Math.sin(this.f),h=this.v*b.B/1E3,f=this.j*b.B/1E3;this.D+=h;this.h+=f;for(var e=1E3,g=0;3>g;g+=1){var m=this.h-1+(1*c-d*this.fa[g])/b.ma-p(this.D+1*d+c*this.fa[g]);.25>m&&(this.g[g].W+=this.speed/5*b.B/1E3);e>m&&(e=m)}-1.5>e?(this.D-=h,this.h-=f,this.v*=-.1,
this.j=0):0>e?(0>this.j&&(this.j=0),this.h-=e,this.G=1):this.G=0;0<this.G&&a&&(this.j+=20);for(g=0;3>g;g+=1)this.g[g].c=this.D-1.5+1*d+c*this.fa[g],this.g[g].o=this.h-1+(1*c-d*this.fa[g])/b.ma,this.g[g].style.transform="rotate("+this.g[g].W+"rad)";this.c=this.D-5;this.o=this.h;this.style.transform="rotate("+this.f.toFixed(3)+"rad)";this.X&&(a=this.h+(3*c+5*d)/b.ma,this.X.c=this.D+3*d-5*c,this.X.o=a,this.X.style.transform="rotate("+this.f.toFixed(3)+"rad)");this.v+=(this.V*this.G*c-b.ua*this.G*this.v+
this.G*d*b.ja)*b.B/1E3;this.j+=(-this.V*this.G*d-b.ja+this.G*c*b.ja*.7)*b.B/1E3;this.speed=Math.sqrt(this.v*this.v+this.j*this.j);0>this.v&&(this.speed*=-1);.25>e&&(this.K=Math.atan2((p(this.g[0].c+1.5)-p(this.g[2].c+1.5))*b.da,(this.g[2].c-this.g[0].c)*b.U))}function ia(a){l(function(){Y("Loading Cargo...");Y("Complete...Return to Base");b.m.X=a;b.m.Aa=a.c;b.m.Ba=a.o;b.m.za=0})};