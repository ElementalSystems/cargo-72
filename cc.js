var g=null;function h(b){var a=k(-30,b,1E4);g.style.left=k(-3E3,b,24E4)+"em";g.style.top=a+"em";window.requestAnimationFrame(h)}
window.fOL=function(){var b=document.createElement("DIV");b.classList.contains("cGO")||b.classList.add("cGO");b.classList.contains("cPT")||b.classList.add("cPT");b.b=Array(70);for(var a=35,c=0,e=0,f=0;5E3>c;){var d={c:0,f:0,symbol:"_"};0==e&&(e=Math.floor(2+4*Math.random()),f=Math.floor(-1+3*Math.random()),0<f&&63<a&&(f=-1),0>f&&7>a&&(f=1));switch(f){case 1:d.symbol="/";d.f=1;break;case -1:d.symbol="\\",d.c=1}b.b[c]=d;a-=d.c;d.altitude=a;a+=d.f;c++;e--}b.a=Array(70);for(a=0;70>a;a+=1)for(b.a[a]="",
c=0;5E3>c;c+=1)e=b.b[c].altitude,b.a[a]=a==e?b.a[a]+b.b[c].symbol:a<e?b.a[a]+"#":b.a[a]+" ";c="";for(a=69;0<=a;--a)c+="<div>"+String(b.a[a]).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")+"</div>";b.innerHTML=c;g=b;document.getElementById("iGS").appendChild(g);window.requestAnimationFrame(h)};function k(b,a,c){a%c>c/2?(c=c/2,b=b+a%c*(0-b)/c):(c=c/2,b=0+a%c*(b-0)/c);return b};
