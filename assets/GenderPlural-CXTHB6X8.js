import{c as ne,X as re,Y as se,r as oe,a as N,Z as ae,f as ie,h as F,b as le,$ as ce,g as ue,a0 as de,a1 as fe,_ as K,A as x,B as C,C as p,D as y,a2 as W,O as M,a3 as P,Q as E,K as I,T as Y,a4 as z,M as L,P as he,a5 as ge,a6 as me,W as be,a7 as A,V as O,a8 as pe,I as U}from"./index-Ds20yscY.js";import{Q as ye}from"./QBadge-CjhjIiOn.js";import{Q as ve}from"./QImg-BqvQW-eN.js";import{b as j,c as R,a as ee,Q as ke}from"./QItem--g7LJKbF.js";import{T as we}from"./DrawerToggleBtn-BYAxNq40.js";import{u as V}from"./use-quasar-OQ7wvV55.js";function xe(){let f=Object.create(null);return{getCache:(u,i)=>f[u]===void 0?f[u]=typeof i=="function"?i():i:f[u],setCache(u,i){f[u]=i},hasCache(u){return Object.hasOwnProperty.call(f,u)},clearCache(u){u!==void 0?delete f[u]:f=Object.create(null)}}}const X=[["left","center","start","width"],["right","center","end","width"],["top","start","center","height"],["bottom","end","center","height"]],_e=ne({name:"QSlideItem",props:{...re,leftColor:String,rightColor:String,topColor:String,bottomColor:String,onSlide:Function},emits:["action","top","right","bottom","left"],setup(f,{slots:u,emit:i}){const{proxy:d}=ue(),{$q:t}=d,s=se(f,t),{getCache:e}=xe(),r=oe(null);let n=null,o={},a={},l={};const c=N(()=>t.lang.rtl===!0?{left:"right",right:"left"}:{left:"left",right:"right"}),h=N(()=>"q-slide-item q-item-type overflow-hidden"+(s.value===!0?" q-slide-item--dark q-dark":""));function m(){r.value.style.transform="translate(0,0)"}function v(g,S,k){f.onSlide!==void 0&&i("slide",{side:g,ratio:S,isReset:k})}function G(g){const S=r.value;if(g.isFirst)o={dir:null,size:{left:0,right:0,top:0,bottom:0},scale:0},S.classList.add("no-transition"),X.forEach(b=>{if(u[b[0]]!==void 0){const q=l[b[0]];q.style.transform="scale(1)",o.size[b[0]]=q.getBoundingClientRect()[b[3]]}}),o.axis=g.direction==="up"||g.direction==="down"?"Y":"X";else if(g.isFinal){S.classList.remove("no-transition"),o.scale===1?(S.style.transform=`translate${o.axis}(${o.dir*100}%)`,n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,i(o.showing,{reset:m}),i("action",{side:o.showing,reset:m})},230)):(S.style.transform="translate(0,0)",v(o.showing,0,!0));return}else g.direction=o.axis==="X"?g.offset.x<0?"left":"right":g.offset.y<0?"up":"down";if(u.left===void 0&&g.direction===c.value.right||u.right===void 0&&g.direction===c.value.left||u.top===void 0&&g.direction==="down"||u.bottom===void 0&&g.direction==="up"){S.style.transform="translate(0,0)";return}let k,_,w;o.axis==="X"?(_=g.direction==="left"?-1:1,k=_===1?c.value.left:c.value.right,w=g.distance.x):(_=g.direction==="up"?-2:2,k=_===2?"top":"bottom",w=g.distance.y),!(o.dir!==null&&Math.abs(_)!==Math.abs(o.dir))&&(o.dir!==_&&(["left","right","top","bottom"].forEach(b=>{a[b]&&(a[b].style.visibility=k===b?"visible":"hidden")}),o.showing=k,o.dir=_),o.scale=Math.max(0,Math.min(1,(w-40)/o.size[k])),S.style.transform=`translate${o.axis}(${w*_/Math.abs(_)}px)`,l[k].style.transform=`scale(${o.scale})`,v(k,o.scale,!1))}return ae(()=>{a={},l={}}),ie(()=>{n!==null&&clearTimeout(n)}),Object.assign(d,{reset:m}),()=>{const g=[],S={left:u[c.value.right]!==void 0,right:u[c.value.left]!==void 0,up:u.bottom!==void 0,down:u.top!==void 0},k=Object.keys(S).filter(w=>S[w]===!0);X.forEach(w=>{const b=w[0];u[b]!==void 0&&g.push(F("div",{key:b,ref:q=>{a[b]=q},class:`q-slide-item__${b} absolute-full row no-wrap items-${w[1]} justify-${w[2]}`+(f[b+"Color"]!==void 0?` bg-${f[b+"Color"]}`:"")},[F("div",{ref:q=>{l[b]=q}},u[b]())]))});const _=F("div",{key:`${k.length===0?"only-":""} content`,ref:r,class:"q-slide-item__content"},le(u.default));return k.length===0?g.push(_):g.push(ce(_,e("dir#"+k.join(""),()=>{const w={prevent:!0,stop:!0,mouse:!0};return k.forEach(b=>{w[b]=!0}),[[we,G,void 0,w]]}))),F("div",{class:h.value},g)}}});var Q,H;function Se(){return H||(H=1,Q={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}),Q}var B,Z;function te(){if(Z)return B;Z=1;const f=Se(),u={};for(const t of Object.keys(f))u[f[t]]=t;const i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};B=i;for(const t of Object.keys(i)){if(!("channels"in i[t]))throw new Error("missing channels property: "+t);if(!("labels"in i[t]))throw new Error("missing channel labels property: "+t);if(i[t].labels.length!==i[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:s,labels:e}=i[t];delete i[t].channels,delete i[t].labels,Object.defineProperty(i[t],"channels",{value:s}),Object.defineProperty(i[t],"labels",{value:e})}i.rgb.hsl=function(t){const s=t[0]/255,e=t[1]/255,r=t[2]/255,n=Math.min(s,e,r),o=Math.max(s,e,r),a=o-n;let l,c;o===n?l=0:s===o?l=(e-r)/a:e===o?l=2+(r-s)/a:r===o&&(l=4+(s-e)/a),l=Math.min(l*60,360),l<0&&(l+=360);const h=(n+o)/2;return o===n?c=0:h<=.5?c=a/(o+n):c=a/(2-o-n),[l,c*100,h*100]},i.rgb.hsv=function(t){let s,e,r,n,o;const a=t[0]/255,l=t[1]/255,c=t[2]/255,h=Math.max(a,l,c),m=h-Math.min(a,l,c),v=function(G){return(h-G)/6/m+1/2};return m===0?(n=0,o=0):(o=m/h,s=v(a),e=v(l),r=v(c),a===h?n=r-e:l===h?n=1/3+s-r:c===h&&(n=2/3+e-s),n<0?n+=1:n>1&&(n-=1)),[n*360,o*100,h*100]},i.rgb.hwb=function(t){const s=t[0],e=t[1];let r=t[2];const n=i.rgb.hsl(t)[0],o=1/255*Math.min(s,Math.min(e,r));return r=1-1/255*Math.max(s,Math.max(e,r)),[n,o*100,r*100]},i.rgb.cmyk=function(t){const s=t[0]/255,e=t[1]/255,r=t[2]/255,n=Math.min(1-s,1-e,1-r),o=(1-s-n)/(1-n)||0,a=(1-e-n)/(1-n)||0,l=(1-r-n)/(1-n)||0;return[o*100,a*100,l*100,n*100]};function d(t,s){return(t[0]-s[0])**2+(t[1]-s[1])**2+(t[2]-s[2])**2}return i.rgb.keyword=function(t){const s=u[t];if(s)return s;let e=1/0,r;for(const n of Object.keys(f)){const o=f[n],a=d(t,o);a<e&&(e=a,r=n)}return r},i.keyword.rgb=function(t){return f[t]},i.rgb.xyz=function(t){let s=t[0]/255,e=t[1]/255,r=t[2]/255;s=s>.04045?((s+.055)/1.055)**2.4:s/12.92,e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const n=s*.4124+e*.3576+r*.1805,o=s*.2126+e*.7152+r*.0722,a=s*.0193+e*.1192+r*.9505;return[n*100,o*100,a*100]},i.rgb.lab=function(t){const s=i.rgb.xyz(t);let e=s[0],r=s[1],n=s[2];e/=95.047,r/=100,n/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;const o=116*r-16,a=500*(e-r),l=200*(r-n);return[o,a,l]},i.hsl.rgb=function(t){const s=t[0]/360,e=t[1]/100,r=t[2]/100;let n,o,a;if(e===0)return a=r*255,[a,a,a];r<.5?n=r*(1+e):n=r+e-r*e;const l=2*r-n,c=[0,0,0];for(let h=0;h<3;h++)o=s+1/3*-(h-1),o<0&&o++,o>1&&o--,6*o<1?a=l+(n-l)*6*o:2*o<1?a=n:3*o<2?a=l+(n-l)*(2/3-o)*6:a=l,c[h]=a*255;return c},i.hsl.hsv=function(t){const s=t[0];let e=t[1]/100,r=t[2]/100,n=e;const o=Math.max(r,.01);r*=2,e*=r<=1?r:2-r,n*=o<=1?o:2-o;const a=(r+e)/2,l=r===0?2*n/(o+n):2*e/(r+e);return[s,l*100,a*100]},i.hsv.rgb=function(t){const s=t[0]/60,e=t[1]/100;let r=t[2]/100;const n=Math.floor(s)%6,o=s-Math.floor(s),a=255*r*(1-e),l=255*r*(1-e*o),c=255*r*(1-e*(1-o));switch(r*=255,n){case 0:return[r,c,a];case 1:return[l,r,a];case 2:return[a,r,c];case 3:return[a,l,r];case 4:return[c,a,r];case 5:return[r,a,l]}},i.hsv.hsl=function(t){const s=t[0],e=t[1]/100,r=t[2]/100,n=Math.max(r,.01);let o,a;a=(2-e)*r;const l=(2-e)*n;return o=e*n,o/=l<=1?l:2-l,o=o||0,a/=2,[s,o*100,a*100]},i.hwb.rgb=function(t){const s=t[0]/360;let e=t[1]/100,r=t[2]/100;const n=e+r;let o;n>1&&(e/=n,r/=n);const a=Math.floor(6*s),l=1-r;o=6*s-a,a&1&&(o=1-o);const c=e+o*(l-e);let h,m,v;switch(a){default:case 6:case 0:h=l,m=c,v=e;break;case 1:h=c,m=l,v=e;break;case 2:h=e,m=l,v=c;break;case 3:h=e,m=c,v=l;break;case 4:h=c,m=e,v=l;break;case 5:h=l,m=e,v=c;break}return[h*255,m*255,v*255]},i.cmyk.rgb=function(t){const s=t[0]/100,e=t[1]/100,r=t[2]/100,n=t[3]/100,o=1-Math.min(1,s*(1-n)+n),a=1-Math.min(1,e*(1-n)+n),l=1-Math.min(1,r*(1-n)+n);return[o*255,a*255,l*255]},i.xyz.rgb=function(t){const s=t[0]/100,e=t[1]/100,r=t[2]/100;let n,o,a;return n=s*3.2406+e*-1.5372+r*-.4986,o=s*-.9689+e*1.8758+r*.0415,a=s*.0557+e*-.204+r*1.057,n=n>.0031308?1.055*n**(1/2.4)-.055:n*12.92,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,n=Math.min(Math.max(0,n),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[n*255,o*255,a*255]},i.xyz.lab=function(t){let s=t[0],e=t[1],r=t[2];s/=95.047,e/=100,r/=108.883,s=s>.008856?s**(1/3):7.787*s+16/116,e=e>.008856?e**(1/3):7.787*e+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const n=116*e-16,o=500*(s-e),a=200*(e-r);return[n,o,a]},i.lab.xyz=function(t){const s=t[0],e=t[1],r=t[2];let n,o,a;o=(s+16)/116,n=e/500+o,a=o-r/200;const l=o**3,c=n**3,h=a**3;return o=l>.008856?l:(o-16/116)/7.787,n=c>.008856?c:(n-16/116)/7.787,a=h>.008856?h:(a-16/116)/7.787,n*=95.047,o*=100,a*=108.883,[n,o,a]},i.lab.lch=function(t){const s=t[0],e=t[1],r=t[2];let n;n=Math.atan2(r,e)*360/2/Math.PI,n<0&&(n+=360);const a=Math.sqrt(e*e+r*r);return[s,a,n]},i.lch.lab=function(t){const s=t[0],e=t[1],n=t[2]/360*2*Math.PI,o=e*Math.cos(n),a=e*Math.sin(n);return[s,o,a]},i.rgb.ansi16=function(t,s=null){const[e,r,n]=t;let o=s===null?i.rgb.hsv(t)[2]:s;if(o=Math.round(o/50),o===0)return 30;let a=30+(Math.round(n/255)<<2|Math.round(r/255)<<1|Math.round(e/255));return o===2&&(a+=60),a},i.hsv.ansi16=function(t){return i.rgb.ansi16(i.hsv.rgb(t),t[2])},i.rgb.ansi256=function(t){const s=t[0],e=t[1],r=t[2];return s===e&&e===r?s<8?16:s>248?231:Math.round((s-8)/247*24)+232:16+36*Math.round(s/255*5)+6*Math.round(e/255*5)+Math.round(r/255*5)},i.ansi16.rgb=function(t){let s=t%10;if(s===0||s===7)return t>50&&(s+=3.5),s=s/10.5*255,[s,s,s];const e=(~~(t>50)+1)*.5,r=(s&1)*e*255,n=(s>>1&1)*e*255,o=(s>>2&1)*e*255;return[r,n,o]},i.ansi256.rgb=function(t){if(t>=232){const o=(t-232)*10+8;return[o,o,o]}t-=16;let s;const e=Math.floor(t/36)/5*255,r=Math.floor((s=t%36)/6)/5*255,n=s%6/5*255;return[e,r,n]},i.rgb.hex=function(t){const e=(((Math.round(t[0])&255)<<16)+((Math.round(t[1])&255)<<8)+(Math.round(t[2])&255)).toString(16).toUpperCase();return"000000".substring(e.length)+e},i.hex.rgb=function(t){const s=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!s)return[0,0,0];let e=s[0];s[0].length===3&&(e=e.split("").map(l=>l+l).join(""));const r=parseInt(e,16),n=r>>16&255,o=r>>8&255,a=r&255;return[n,o,a]},i.rgb.hcg=function(t){const s=t[0]/255,e=t[1]/255,r=t[2]/255,n=Math.max(Math.max(s,e),r),o=Math.min(Math.min(s,e),r),a=n-o;let l,c;return a<1?l=o/(1-a):l=0,a<=0?c=0:n===s?c=(e-r)/a%6:n===e?c=2+(r-s)/a:c=4+(s-e)/a,c/=6,c%=1,[c*360,a*100,l*100]},i.hsl.hcg=function(t){const s=t[1]/100,e=t[2]/100,r=e<.5?2*s*e:2*s*(1-e);let n=0;return r<1&&(n=(e-.5*r)/(1-r)),[t[0],r*100,n*100]},i.hsv.hcg=function(t){const s=t[1]/100,e=t[2]/100,r=s*e;let n=0;return r<1&&(n=(e-r)/(1-r)),[t[0],r*100,n*100]},i.hcg.rgb=function(t){const s=t[0]/360,e=t[1]/100,r=t[2]/100;if(e===0)return[r*255,r*255,r*255];const n=[0,0,0],o=s%1*6,a=o%1,l=1-a;let c=0;switch(Math.floor(o)){case 0:n[0]=1,n[1]=a,n[2]=0;break;case 1:n[0]=l,n[1]=1,n[2]=0;break;case 2:n[0]=0,n[1]=1,n[2]=a;break;case 3:n[0]=0,n[1]=l,n[2]=1;break;case 4:n[0]=a,n[1]=0,n[2]=1;break;default:n[0]=1,n[1]=0,n[2]=l}return c=(1-e)*r,[(e*n[0]+c)*255,(e*n[1]+c)*255,(e*n[2]+c)*255]},i.hcg.hsv=function(t){const s=t[1]/100,e=t[2]/100,r=s+e*(1-s);let n=0;return r>0&&(n=s/r),[t[0],n*100,r*100]},i.hcg.hsl=function(t){const s=t[1]/100,r=t[2]/100*(1-s)+.5*s;let n=0;return r>0&&r<.5?n=s/(2*r):r>=.5&&r<1&&(n=s/(2*(1-r))),[t[0],n*100,r*100]},i.hcg.hwb=function(t){const s=t[1]/100,e=t[2]/100,r=s+e*(1-s);return[t[0],(r-s)*100,(1-r)*100]},i.hwb.hcg=function(t){const s=t[1]/100,r=1-t[2]/100,n=r-s;let o=0;return n<1&&(o=(r-n)/(1-n)),[t[0],n*100,o*100]},i.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},i.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},i.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},i.gray.hsl=function(t){return[0,0,t[0]]},i.gray.hsv=i.gray.hsl,i.gray.hwb=function(t){return[0,100,t[0]]},i.gray.cmyk=function(t){return[0,0,0,t[0]]},i.gray.lab=function(t){return[t[0],0,0]},i.gray.hex=function(t){const s=Math.round(t[0]/100*255)&255,r=((s<<16)+(s<<8)+s).toString(16).toUpperCase();return"000000".substring(r.length)+r},i.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]},B}var D,$;function Ce(){if($)return D;$=1;const f=te();function u(){const s={},e=Object.keys(f);for(let r=e.length,n=0;n<r;n++)s[e[n]]={distance:-1,parent:null};return s}function i(s){const e=u(),r=[s];for(e[s].distance=0;r.length;){const n=r.pop(),o=Object.keys(f[n]);for(let a=o.length,l=0;l<a;l++){const c=o[l],h=e[c];h.distance===-1&&(h.distance=e[n].distance+1,h.parent=n,r.unshift(c))}}return e}function d(s,e){return function(r){return e(s(r))}}function t(s,e){const r=[e[s].parent,s];let n=f[e[s].parent][s],o=e[s].parent;for(;e[o].parent;)r.unshift(e[o].parent),n=d(f[e[o].parent][o],n),o=e[o].parent;return n.conversion=r,n}return D=function(s){const e=i(s),r={},n=Object.keys(e);for(let o=n.length,a=0;a<o;a++){const l=n[a];e[l].parent!==null&&(r[l]=t(l,e))}return r},D}var T,J;function Me(){if(J)return T;J=1;const f=te(),u=Ce(),i={},d=Object.keys(f);function t(e){const r=function(...n){const o=n[0];return o==null?o:(o.length>1&&(n=o),e(n))};return"conversion"in e&&(r.conversion=e.conversion),r}function s(e){const r=function(...n){const o=n[0];if(o==null)return o;o.length>1&&(n=o);const a=e(n);if(typeof a=="object")for(let l=a.length,c=0;c<l;c++)a[c]=Math.round(a[c]);return a};return"conversion"in e&&(r.conversion=e.conversion),r}return d.forEach(e=>{i[e]={},Object.defineProperty(i[e],"channels",{value:f[e].channels}),Object.defineProperty(i[e],"labels",{value:f[e].labels});const r=u(e);Object.keys(r).forEach(o=>{const a=r[o];i[e][o]=s(a),i[e][o].raw=t(a)})}),T=i,T}var qe=Me();const Ee=de(qe);function ze(f){if(f){const u=Ee.keyword.hsl(f);return u[2]=fe.isActive?10:95,`hsl(${u[0]}, ${u[1]}%, ${u[2]}%)`}else return"none"}const je={а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"e",ж:"zh",з:"z",и:"i",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"kh",ц:"ts",ч:"ch",ш:"sh",щ:"sch",ъ:"'",ы:"y",ь:"",э:"e",ю:"yu",я:"ya",А:"A",Б:"B",В:"V",Г:"G",Д:"D",Е:"E",Ё:"E",Ж:"Zh",З:"Z",И:"I",Й:"Y",К:"K",Л:"L",М:"M",Н:"N",О:"O",П:"P",Р:"R",С:"S",Т:"T",У:"U",Ф:"F",Х:"Kh",Ц:"Ts",Ч:"Ch",Ш:"Sh",Щ:"Sch",Ъ:"'",Ы:"Y",Ь:"",Э:"E",Ю:"Yu",Я:"Ya"};function Fe(f=""){return f.split("").map(u=>je[u]||u).join("")}const Oe={props:{text:{type:String,required:!0}},data(){return{expanded:!1}}};function Pe(f,u,i,d,t,s){return x(),C(ee,{clickable:"",onClick:u[0]||(u[0]=e=>t.expanded=!t.expanded)},{default:p(()=>[y(j,null,{default:p(()=>[y(R,{class:W({"ellipsis-2-lines":!t.expanded})},{default:p(()=>[M(P(i.text),1)]),_:1},8,["class"])]),_:1}),y(j,{side:""},{default:p(()=>[y(E,{name:t.expanded?"keyboard_arrow_up":"keyboard_arrow_down"},null,8,["name"])]),_:1})]),_:1})}const Le=K(Oe,[["render",Pe],["__file","ExpandableItem.vue"]]),Re={__name:"EntryPhrases",props:{entries:{type:Array,default:()=>[]},withComment:{type:Boolean,default:!1}},setup(f,{expose:u}){u();const i=V(),d=I(),t=Y(),s=z(d.settings,"fromLanguage"),e=z(d.settings,"toLanguage"),r=z(d.settings,"searchGramGender"),n=z(d.settings,"searchGramNumber"),c={$q:i,storeSettings:d,storeEntries:t,fromLang:s,toLang:e,gender:r,number:n,props:f,onEntrySlideLeft:({reset:h},m)=>{m.isFavorite=m.isFavorite?0:1,t.update(m),h()},onEntrySlideRight:({reset:h},m)=>{i.dialog({message:"Скрыть эту фразу?",cancel:!0}).onOk(()=>{t.update(m),h()}).onCancel(()=>h())},toRef:z,get useQuasar(){return V},get useStoreSettings(){return I},get useStoreEntries(){return Y},get getHslPastelCssColor(){return ze},get transliterate(){return Fe},ExpandableItem:Le};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},Ie={key:0,class:"row items-center"},Ge={key:1,class:"row items-center"},Qe={class:"row items-center"};function Be(f,u,i,d,t,s){return x(),C(ke,{separator:""},{default:p(()=>[(x(!0),L(he,null,ge(d.props.entries,(e,r)=>me(f.$slots,"default",{key:e.id},()=>[y(_e,{onLeft:n=>d.onEntrySlideLeft(n,e),onRight:n=>d.onEntrySlideRight(n,e),"left-color":"teal","right-color":"orange"},{left:p(()=>[e.isFavorite?(x(),L("div",Ge,[y(E,{left:"",name:"star_border"}),u[1]||(u[1]=M(" Убрать из избранного "))])):(x(),L("div",Ie,[y(E,{left:"",name:"star"}),u[0]||(u[0]=M(" В избранное "))]))]),right:p(()=>[be("div",Qe,[u[2]||(u[2]=M("Скрыть ")),y(E,{right:"",name:"visibility_off"})])]),default:p(()=>[e.phrase?(x(),C(ee,{key:0,class:W(["q-px-sm",[r%2?"darkness":"lightness",{"text-bold":e.style?.bold,"text-italic":e.style?.italic}]]),style:A({backgroundColor:d.getHslPastelCssColor(e.style?.bgColor)}),dense:""},{default:p(()=>[e.isFavorite?(x(),C(ye,{key:0,floating:"",class:"absolute-top-left",style:{background:"transparent"}},{default:p(()=>[y(E,{name:"star",color:"yellow-6"})]),_:1})):O("",!0),e.style?.img||e.style?.icon||e.style?.color?(x(),C(j,{key:1,avatar:"",class:"q-pr-sm",style:A({minWidth:d.storeSettings.elementSizes.avatarWidth})},{default:p(()=>[e.style.img?(x(),C(ve,{key:0,src:e.style.img,"no-spinner":"","no-native-menu":"",class:"rounded-borders",width:d.storeSettings.elementSizes.avatarWidth},null,8,["src","width"])):e.style.icon?(x(),C(E,{key:1,name:e.style.icon,color:e.style?.color,size:d.storeSettings.elementSizes.iconSize},null,8,["name","color","size"])):(x(),C(pe,{key:2,color:e.style?.color,size:d.storeSettings.elementSizes.iconSize},null,8,["color","size"]))]),_:2},1032,["style"])):O("",!0),y(j,null,{default:p(()=>[y(R,null,{default:p(()=>[M(P(e.getWord(d.fromLang,d.gender,d.number).W),1)]),_:2},1024)]),_:2},1024),y(j,{class:"text-right"},{default:p(()=>[y(R,null,{default:p(()=>[M(P(e.getWord(d.toLang,d.gender,d.number).W),1)]),_:2},1024),y(R,{style:{opacity:"0.7"}},{default:p(()=>[M(P(d.fromLang==="ru"?e.getWord(d.toLang,d.gender,d.number).T:d.transliterate(e.getWord(d.toLang,d.gender,d.number).T)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["class","style"])):O("",!0),i.withComment&&e.comment&&e.comment[d.toLang]?(x(),C(d.ExpandableItem,{key:1,class:W(["q-px-sm text-cation text-italic",r%2?"darkness":"lightness"]),style:{"font-size":"85%",opacity:"0.8"},text:e.comment[d.toLang],dense:!!e.phrase},null,8,["class","text","dense"])):O("",!0)]),_:2},1032,["onLeft","onRight"])],!0)),128))]),_:3})}const Xe=K(Re,[["render",Be],["__scopeId","data-v-a9568335"],["__file","EntryPhrases.vue"]]),De={__name:"GenderPlural",setup(f,{expose:u}){u();const d={storeSettings:I(),get useStoreSettings(){return I}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},Te={class:"q-gutter-sm"};function We(f,u,i,d,t,s){return x(),L("div",Te,[y(U,{icon:d.storeSettings.settings.searchGramGender==="M"?"man":"woman","text-color":d.storeSettings.settings.searchGramGender==="M"?"blue":"purple",onClick:u[0]||(u[0]=e=>d.storeSettings.toggleGramGender()),size:"md",padding:"sm sm"},null,8,["icon","text-color"]),y(U,{icon:d.storeSettings.settings.searchGramNumber==="S"?"person":"people",onClick:u[1]||(u[1]=e=>d.storeSettings.toggleGramNumber()),size:"md",padding:"sm sm"},null,8,["icon"])])}const He=K(De,[["render",We],["__file","GenderPlural.vue"]]);export{Xe as E,He as G};