var b=document.getElementById("iGS");function h(a){b.D.push(a);return a}function k(a){if(0>a)return 0;var c=Math.floor(a);a=a-c;c=b.L[c];return c.altitude+(1-a)*c.v+a*c.o}
function l(a){b.S?b.i=a-b.ia:(b.S=a,b.i=100);b.ia=a;b.ka=a-b.S;for(a=0;a<b.m.length;a+=1)b.m[a].Y();b.P?(b.G=-b.P.b+20,b.ja=-b.P.g+5):b.G=0;for(a=0;a<b.m.length;a+=1){var c=b.m[a];c.style.bottom=(c.g+b.ja)*b.X*c.F+"px";c.style.left=(c.b+b.G)*b.O*c.F+"px"}if(Math.abs(b.G-b.$)>.8*b.I){a=[];for(c=0;c<b.D.length;c+=1){var d=b.D[c],g=(d.b+b.G)*d.F;g+d.V>-b.I&&g<b.ea+b.I&&a.push(d)}for(c=0;c<a.length;c+=1)b.D.splice(b.D.indexOf(a[c]),1),b.appendChild(a[c]),b.m.push(a[c]);a=[];for(c=0;c<b.m.length;c+=1)d=
b.m[c],g=(d.b+b.G)*d.F,(g+d.V<-b.I||g>b.ea+b.I)&&a.push(d);for(c=0;c<a.length;c+=1)b.m.splice(b.m.indexOf(a[c]),1),b.removeChild(a[c]),b.D.push(a[c]);b.$=b.G}window.requestAnimationFrame(l)}
window.fOL=function(){var a=document.getElementById("iMM");b.O=a.clientWidth;b.X=a.clientHeight;b.da=b.X/b.O;b.ea=b.offsetWidth/b.O;a=m;b.m=[];b.D=[];b.level=a;b.L=[];b.j=0;b.ca=0;b.A=0;b.a=0;b.N=-99999;b.s=99999;b.$=1E5;b.I=30;b.S=0;b.T=30;b.ga=5;p();for(var c=0;c<a.content.length;c+=1)for(var d=a.content[c].R?b.j+a.content[c].R:0,g=q(a.content[c].set),f=null;;)if(f=d?g.ha():g.next(),f(),d){if(b.j>d)break}else if(g.U())break;window.requestAnimationFrame(l);r("Unit CARGO-72 Online...");r("Internal Diagnostics: OKAY");
r("Current Location: DIST-X42");r("Task: On Site Testing");r("Orders: Procede to Atmospheric Testing Ground")};var t={H:"                _mmmmm_;                |''o..|>;                 |  |;L_______________/    \\;|=====================|;|======================\\;|=(( ))==(( ))==(( ))==/;    V      V      V     ; ".split(";"),f:"cAB"},u={H:["  nnnnn  "," <#####>","<##(O)##>"," <#####>","  uuuuu  "],f:"cAW",Z:[{pattern:"#+",f:"cWS"},{pattern:"\\(O\\)",f:"cWH"}]},v=[{f:"cPT"},{pattern:"#+",f:"cTS"},{pattern:"#+",W:"@&#%$"},{pattern:"[!]+",f:"cTD"}],w=[{f:"cST"},{aa:.8},{pattern:"#+",W:"  o .  ' , "}];var x=[];function p(){b.onkeydown=function(a){x[a.keyCode]=1};b.onkeyup=function(a){x[a.keyCode]=0};b.focus()};function y(a,c){return Math.floor(a+(c-a+1)*Math.random())}function z(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function A(a,c){a.classList.contains(c)||a.classList.add(c)}
function q(a){var c={};c.source=a;c.current=[];c.U=function(){return!this.current.length};c.next=function(){this.U()&&(this.current=this.source.slice());return c.current.shift()};c.ha=function(){this.U()&&(this.current=this.source.slice());return c.current.splice(y(0,this.current.length-1),1)[0]};return c};function B(){C("_",y(5,15),1)}function D(){var a=y(5,10);E(a,0);E(-a,1)}function F(){C("\\",y(3,8),1)}function G(){C("_,:,_",y(5,10),1)}function H(){I(15);C("_",10,1);I(-15)}function J(){K(100)}function L(){K(0)}function M(){var a=y(8,30);C("_",y(1,4));C("/",a);C("\\",a,2)}function N(){var a=y(5,12);E(a,0);E(-a,2)}
var m={title:"revenge1",content:[{set:[H,B,function(){var a=O(t,5,5);b.P=a;a.Y=P;a.c=0;a.u=[O(u,0,0),O(u,0,0),O(u,0,0)];a.B=[2,5,8];a.l=0;a.h=0;a.J=0;a.ba=1.57;a.w=0;a.u[0].K=a.u[1].K=a.u[2].K=0},N,B,B,D,G,B,J,B,J]},{set:[function(){C("//",y(3,8),1)},F,M,M,N,N,function(){C("_",10);I(y(-1,-5));C("_",10,1)},function(){C("_",10);I(y(1,5));C("_",10,1)},D,B,B,B,G],R:500},{set:[F,L,F,L,B,B],R:100},{set:[B,B,H]}]};function C(a,c,d){for(var g=0;g<c;g+=1)Q(a.charAt(g%(a.length-1)));d&&R(2==d)}function E(a,c){S(a,c,function(a){return 3*a*a-2*a*a*a})}function S(a,c,d){var g=y(15,55),f=b.a;for(i=0;i<g;i+=1){var e=d(i/g)*a,n=Math.floor(e),e=e-n;b.a=f+n;n="";n=.75<e?"'":.5<e?"-":.25<e?".":"_";Q(n)}.8<e&&(b.a+=1);c&&R(2==c)}
function R(a){b.s-=20;var c=Math.floor(b.N-b.s+1),d=document.createElement("DIV"),g=b.A-b.j;A(d,"cGO");d.C=[];for(var f=0;f<c;f+=1){d.C[f]="";for(var e=0;e<g;e+=1){var n=b.L[e+b.j].altitude-b.s;d.C[f]=f==n?d.C[f]+b.L[e+b.j].symbol:f<n?d.C[f]+"#":d.C[f]+" "}}d.b=b.j;d.V=b.A-b.j;d.g=b.s;d.fa=b.s+c;g="";for(f=c-1;0<=f;--f)g+="<div>"+z(d.C[f])+"</div>";d.innerHTML=g;d.Y=T;d.F=1;U(d,a?w:v);h(d);a?(b.A=b.j,b.a=b.ca):(b.j=b.A,b.ca=b.a);b.N=-99999;b.s=99999}function I(a){b.a+=a}
function Q(a){a={v:0,o:0,symbol:a};switch(a.symbol){case "\\":a.v=1;break;case "/":a.o=1;break;case ",":a.o=.2;break;case ":":a.v=a.o=.6;break;case ".":a.v=a.o=.2;break;case "-":a.v=a.o=.5;break;case "'":a.v=a.o=.8;break;case "W":case "!":a.v=a.o=1}b.a-=Math.floor(a.v);a.altitude=Math.floor(b.a);b.a>b.N&&(b.N=b.a);b.a<b.s&&(b.s=b.a);b.a+=Math.floor(a.o);b.L[b.A]=a;b.A+=1}
function K(a){for(var c=y(10,20),d=0;d<c;d+=1){var g=a-b.a;switch(y(0,Math.abs(g+6))){case 0:case 1:case 2:case 3:Q("_");break;case 4:Q("/");break;case 5:Q("\\");break;default:Q(0<g?"/":"\\")}}R()}function T(){};var V=document.getElementById("iTC");V.position=0;V.M=0;function r(a){V.active?V.content+=a+"\n":(V.content=a+"\n",V.active=1,W());V.M+=1;setTimeout(X,4E3+500*V.M+50*V.content.length)}function W(){V.position+=1;V.position>V.content.length?V.active=0:setTimeout(W,"\n"==V.content.charAt(V.position)?500:50);V.innerHTML=V.content.substring(0,V.position)+(V.active?"_":"")}function X(){var a=V.content.indexOf("\n");0<a&&(V.content=V.content.substring(a+1));V.position-=a;--V.M;V.active||W()};function U(a,c){for(var d=a.getElementsByTagName("DIV"),g=0;g<d.length;g+=1){for(var f=d[g].innerHTML,e=0;e<c.length;e+=1)c[e].pattern?f=f.replace(new RegExp(c[e].pattern,"g"),function(a){if(c[e].replace){a=a.length;for(var d="";d.length<a;)d+=c[e].replace;a=d.substring(0,a)}else if(c[e].W){for(var d=c[e].W,f="";f.length<a.length;)f+=d.charAt(y(0,d.length));a=f}c[e].f&&(a="<span class="+c[e].f+">"+a+"</span>");return a}):(c[e].f&&A(a,c[e].f),c[e].aa&&(a.F=c[e].aa));d[g].innerHTML=f}}
function O(a,c,d){var g=a.H.length,f=document.createElement("DIV"),e=0;A(f,"cGO");A(f,a.f);f.b=b.j+c;f.g=b.a+d;f.fa=b.a+g+d;c="";for(d=0;d<g;d+=1)e<a.H[d].length&&(e=a.H[d].length),c+="<div>"+z(a.H[d])+"</div>";f.V=e;f.innerHTML=c;f.F=1;a.Z&&U(f,a.Z);f.Y=T;return h(f)};function P(){this.J=0;x[68]&&(this.J=100);x[65]&&(this.J=-80);var a=x[32],c=Math.cos(this.c),d=Math.sin(this.c);this.l+=(this.J*this.w*c-b.ga*this.w*this.l+this.w*d*b.T)*b.i/1E3;this.h+=(-this.J*this.w*d-b.T+this.w*c*b.T*.7)*b.i/1E3;this.speed=Math.sqrt(this.l*this.l+this.h*this.h);0>this.l&&(this.speed*=-1);this.b+=this.l*b.i/1E3;this.g+=this.h*b.i/1E3;var g=0;do{for(var g=0,f=1E3,e=0;3>e;e+=1){var n=this.g-d*this.B[e]/b.da-k(this.b+c*this.B[e]);.25>n&&(this.u[e].K+=this.speed/1*b.i/1E3);f>n&&(f=
n)}-1.5>f&&(this.b-=this.l*b.i*2/1E3,this.g-=this.h*b.i/1E3,this.l*=-.1,this.h=0,g=1)}while(g);0>f?(0>this.h&&(this.h=0),this.g-=f,this.w=1):this.w=0;0<this.w&&a&&(this.h+=20);.5>f&&(a=Math.atan2((k(this.b+c*this.B[0])-k(this.b+c*this.B[2]))*b.X,c*this.B[2]*b.O),a>this.c?(this.c+=this.ba*b.i/1E3,this.c>a&&(this.c=a)):a<this.c&&(this.c-=this.ba*b.i/1E3,this.c<a&&(this.c=a)),this.style.transform="rotate("+this.c.toFixed(3)+"rad)");for(e=0;3>e;e+=1)this.u[e].b=this.b-2+c*this.B[e],this.u[e].g=this.g-
d*this.B[e]/b.da,this.u[e].style.transform="rotate("+this.u[e].K+"rad)"};