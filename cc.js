var a=document.getElementById("iGS");function h(b){a.u.push(b);return b}function k(b){if(0>b)return 0;var c=Math.floor(b);b=b-c;c=a.I[c];return c.altitude+(1-b)*c.C+b*c.F}
function l(b){a.M?a.h=b-a.da:(a.M=b,a.h=100);a.da=b;a.ha=b-a.M;for(b=0;b<a.g.length;b+=1)a.g[b].P();a.L?(a.o=-a.L.a+20,a.fa=-a.L.f+5):a.o=0;for(b=0;b<a.g.length;b+=1){var c=a.g[b];c.style.bottom=(c.f+a.fa)*a.O+"px";c.style.left=(c.a+a.o)*a.K+"px"}if(Math.abs(a.o-a.V)>.8*a.D){b=[];for(c=0;c<a.u.length;c+=1){var d=a.u[c].a;d+a.o>-a.D&&d+a.o<a.Y+a.D&&b.push(a.u[c])}for(c=0;c<b.length;c+=1)a.u.splice(a.u.indexOf(b[c]),1),a.appendChild(b[c]),a.g.push(b[c]);b=[];for(c=0;c<a.g.length;c+=1)d=a.g[c].a,(d+
a.o<-a.D||d+a.o>a.Y+a.D)&&b.push(a.g[c]);for(c=0;c<b.length;c+=1)a.g.splice(a.g.indexOf(b[c]),1),a.removeChild(b[c]),a.u.push(b[c]);a.V=a.o}window.requestAnimationFrame(l)}
window.fOL=function(){var b=document.getElementById("iMM");a.K=b.clientWidth;a.O=b.clientHeight;a.X=a.O/a.K;a.Y=a.offsetWidth/a.K;b=m;a.innerHTML="";a.g=[];a.u=[];a.level=b;a.I=[];a.m=0;a.ea=0;a.A=0;a.b=0;a.J=-99999;a.j=99999;a.V=1E5;a.D=30;a.M=0;a.ca=10;a.aa=1;n();for(var c=0;c<b.content.length;c+=1)for(var d=b.content[c].U?a.m+b.content[c].U:0,f=p(b.content[c].set),e=null;;)if(e=d?f.ba():f.next(),e(),d){if(a.m>d)break}else if(f.N())break;window.requestAnimationFrame(l)};var q={B:"                _mmmmm_;                |''o..|>;                 |  |;L_______________/    \\;|=====================|;|======================\\;|=(( ))==(( ))==(( ))==/;    V      V      V     ; ".split(";"),s:"cAB"},r={B:["  nnnnn  ","/#######\\","|##(O)##|","\\#######/","  uuuuu  "],s:"cAW",T:[{pattern:"#+",s:"cWS"},{pattern:"\\(O\\)",s:"cWH"}]},t=[{pattern:"#+",s:"cTS"},{pattern:"[,:]+",s:"cTD"}];var u=[];function n(){a.onkeydown=function(b){u[b.keyCode]=1};a.onkeyup=function(b){u[b.keyCode]=0}};function v(b,c){return Math.floor(b+(c-b+1)*Math.random())}function w(b){return String(b).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function x(b,c){b.classList.contains(c)||b.classList.add(c)}
function p(b){var c={};c.source=b;c.current=[];c.N=function(){return!this.current.length};c.next=function(){this.N()&&(this.current=this.source.slice());return c.current.shift()};c.ba=function(){this.N()&&(this.current=this.source.slice());return c.current.splice(v(0,this.current.length-1),1)[0]};return c};function y(){z("_",v(5,15),1)}function A(){z("\\",v(3,8),1)}function B(){z("_,:,_",v(5,10),1)}function C(){for(var b=v(10,20),c=0;c<b;c+=1){var d=100-a.b;switch(v(0,Math.abs(d+6))){case 0:case 1:case 2:case 3:D("_");break;case 4:D("/");break;case 5:D("\\");break;default:D(0<d?"/":"\\")}}E()}
var m={title:"revenge1",content:[{set:[y,function(){var b=F(q,5,5);a.L=b;b.P=G;b.c=0;b.S=[F(r,0,0),F(r,0,0),F(r,0,0)];b.v=[2,5,8];b.i=0;b.l=0;b.H=0;b.W=1.57;b.G=0;b.R=0},y,y,B,y,C,y,C]},{set:[function(){z("//",v(3,8),1)},A,function(){z("_",10);a.b+=v(-1,-5);z("_",10,1)},y,y,C,y,B],U:4E3},{set:[A,A,A,A,A,y,y]}]};function z(b,c,d){for(var f=0;f<c;f+=1)D(b.charAt(f%(b.length-1)));d&&E()}function E(){a.j-=20;var b=Math.floor(a.J-a.j+1),c=document.createElement("DIV"),d=a.A-a.m;x(c,"cGO");x(c,"cPT");c.w=[];for(var f=0;f<b;f+=1){c.w[f]="";for(var e=0;e<d;e+=1){var g=a.I[e+a.m].altitude-a.j;c.w[f]=f==g?c.w[f]+a.I[e+a.m].symbol:f<g?c.w[f]+"#":c.w[f]+" "}}c.a=a.m;c.Z=a.A;c.f=a.j;c.$=a.j+b;d="";for(f=b-1;0<=f;--f)d+="<div>"+w(c.w[f])+"</div>";c.innerHTML=d;c.P=H;I(c,t);h(c);a.m=a.A;a.ea=a.b;a.J=-99999;a.j=99999}
function D(b){b={C:0,F:0,symbol:b};switch(b.symbol){case "\\":b.C=1;break;case "/":b.F=1;break;case ":":b.C=b.F=.4;case ",":b.C=b.F=.2}a.b-=Math.floor(b.C);b.altitude=Math.floor(a.b);a.b>a.J&&(a.J=a.b);a.b<a.j&&(a.j=a.b);a.b+=Math.floor(b.F);a.I[a.A]=b;a.A+=1}function H(){};function I(b,c){for(var d=b.getElementsByTagName("DIV"),f=0;f<d.length;f+=1){for(var e=d[f].innerHTML,g=0;g<c.length;g+=1)e=e.replace(new RegExp(c[g].pattern,"g"),function(b){return"<span class="+c[g].s+">"+b+"</span>"});d[f].innerHTML=e}}
function F(b,c,d){var f=b.B.length,e=document.createElement("DIV"),g=0;x(e,"cGO");x(e,b.s);e.a=a.m+c;e.f=a.b+d;e.$=a.b+f+d;c="";for(d=0;d<f;d+=1)g<b.B[d].length&&(g=b.B[d].length),c+="<div>"+w(b.B[d])+"</div>";e.Z=e.a+g;e.ga=g;e.innerHTML=c;b.T&&I(e,b.T);e.P=H;return h(e)};function G(){this.H=0;u[68]&&(this.H=30);u[65]&&(this.H=-20);var b=Math.cos(this.c),c=Math.sin(this.c);this.i+=(this.H*this.G*b-a.aa*this.G*this.i)*a.h/1E3;this.l+=(this.H*this.G*c-a.ca)*a.h/1E3;this.speed=Math.sqrt(this.i*this.i+this.l*this.l);0>this.i&&(this.speed*=-1);this.a+=this.i*a.h/1E3;this.f+=this.l*a.h/1E3;var d=0;do{for(var d=0,f=1E3,e=0;3>e;e+=1){var g=this.f-c*this.v[e]/a.X-k(this.a+b*this.v[e]);f>g&&(f=g)}-1.5>f&&(this.a-=this.i*a.h*2/1E3,this.f-=this.l*a.h/1E3,this.i*=-.1,this.l=0,
d=1)}while(d);0>f?(0>this.l&&(this.l=0),this.f-=f,this.G=1):this.G=0;.5>f&&(d=Math.atan2((k(this.a+b*this.v[0])-k(this.a+b*this.v[2]))*a.O,b*this.v[2]*a.K),d>this.c?(this.c+=this.W*a.h/1E3,this.c>d&&(this.c=d)):d<this.c&&(this.c-=this.W*a.h/1E3,this.c<d&&(this.c=d)),this.style.transform="rotate("+this.c.toFixed(3)+"rad)",this.R+=this.speed/1*a.h/1E3);for(e=0;3>e;e+=1)this.S[e].a=this.a-2+b*this.v[e],this.S[e].f=this.f-c*this.v[e]/a.X,this.S[e].style.transform="rotate("+this.R+"rad)"};
