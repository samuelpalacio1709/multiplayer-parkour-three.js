(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="157",hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fc=0,ya=1,dc=2,cl=1,pc=2,Cn=3,qn=0,Zt=1,Pn=2,Gn=0,Ui=1,_a=2,xa=3,Ma=4,mc=5,Pi=100,vc=101,gc=102,Sa=103,Ea=104,yc=200,_c=201,xc=202,Mc=203,hl=204,ul=205,Sc=206,Ec=207,wc=208,Tc=209,bc=210,Ac=0,Rc=1,Cc=2,Xs=3,Pc=4,Lc=5,Ic=6,Dc=7,Kr=0,Uc=1,Nc=2,Wn=0,Fc=1,Bc=2,Oc=3,zc=4,Vc=5,fl=300,Fi=301,Bi=302,Vr=303,qs=304,Zr=306,ai=1e3,jt=1001,Ys=1002,zt=1003,wa=1004,ss=1005,Vt=1006,kc=1007,Oi=1008,Xn=1009,Hc=1010,Gc=1011,ra=1012,dl=1013,kn=1014,an=1015,In=1016,pl=1017,ml=1018,ii=1020,Wc=1021,nn=1023,Xc=1024,qc=1025,ri=1026,zi=1027,Yc=1028,vl=1029,jc=1030,gl=1031,yl=1033,as=33776,os=33777,ls=33778,cs=33779,Ta=35840,ba=35841,Aa=35842,Ra=35843,Kc=36196,Ca=37492,Pa=37496,La=37808,Ia=37809,Da=37810,Ua=37811,Na=37812,Fa=37813,Ba=37814,Oa=37815,za=37816,Va=37817,ka=37818,Ha=37819,Ga=37820,Wa=37821,hs=36492,Xa=36494,qa=36495,Zc=36283,Ya=36284,ja=36285,Ka=36286,kr=2300,Hr=2301,us=2302,Za=2400,$a=2401,Ja=2402,$c=2500,_l=3e3,si=3001,Jc=3200,Qc=3201,$r=0,eh=1,rn="",Ct="srgb",_n="srgb-linear",sa="display-p3",Jr="display-p3-linear",Gr="linear",Mt="srgb",Wr="rec709",Xr="p3",fs=7680,th=519,nh=512,ih=513,rh=514,sh=515,ah=516,oh=517,lh=518,ch=519,Qa=35044,eo="300 es",js=1035,Dn=2e3,qr=2001;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let to=1234567;const nr=Math.PI/180,Vi=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function aa(s,e){return(s%e+e)%e}function hh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function uh(s,e,t){return s!==e?(t-s)/(e-s):0}function ir(s,e,t){return(1-t)*s+t*e}function fh(s,e,t,n){return ir(s,e,1-Math.exp(-t*n))}function dh(s,e=1){return e-Math.abs(aa(s,e*2)-e)}function ph(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function vh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function gh(s,e){return s+Math.random()*(e-s)}function yh(s){return s*(.5-Math.random())}function _h(s){s!==void 0&&(to=s);let e=to+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xh(s){return s*nr}function Mh(s){return s*Vi}function Ks(s){return(s&s-1)===0&&s!==0}function xl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Yr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sh(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+n)/2),u=a((e+n)/2),c=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*c,l*f,o*h);break;case"YZY":s.set(l*f,o*u,l*c,o*h);break;case"ZXZ":s.set(l*c,l*f,o*u,o*h);break;case"XZX":s.set(o*u,l*v,l*d,o*h);break;case"YXY":s.set(l*d,o*u,l*v,o*h);break;case"ZYZ":s.set(l*v,l*d,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const pn={DEG2RAD:nr,RAD2DEG:Vi,generateUUID:jn,clamp:It,euclideanModulo:aa,mapLinear:hh,inverseLerp:uh,lerp:ir,damp:fh,pingpong:dh,smoothstep:ph,smootherstep:mh,randInt:vh,randFloat:gh,randFloatSpread:yh,seededRandom:_h,degToRad:xh,radToDeg:Mh,isPowerOfTwo:Ks,ceilPowerOfTwo:xl,floorPowerOfTwo:Yr,setQuaternionFromProperEuler:Sh,normalize:Xt,denormalize:Li};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,n,i,r,a,o,l,h){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,h)}set(e,t,n,i,r,a,o,l,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],u=n[4],c=n[7],f=n[2],d=n[5],v=n[8],g=i[0],m=i[3],p=i[6],_=i[1],y=i[4],x=i[7],E=i[2],A=i[5],R=i[8];return r[0]=a*g+o*_+l*E,r[3]=a*m+o*y+l*A,r[6]=a*p+o*x+l*R,r[1]=h*g+u*_+c*E,r[4]=h*m+u*y+c*A,r[7]=h*p+u*x+c*R,r[2]=f*g+d*_+v*E,r[5]=f*m+d*y+v*A,r[8]=f*p+d*x+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*l+i*r*h-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8],c=u*a-o*h,f=o*l-u*r,d=h*r-a*l,v=t*c+n*f+i*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=c*g,e[1]=(i*h-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*l-h*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-i*h,i*l,-i*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new ct;function Ml(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Eh(){const s=ar("canvas");return s.style.display="block",s}const no={};function rr(s){s in no||(no[s]=!0,console.warn(s))}const io=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ro=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fr={[_n]:{transfer:Gr,primaries:Wr,toReference:s=>s,fromReference:s=>s},[Ct]:{transfer:Mt,primaries:Wr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Jr]:{transfer:Gr,primaries:Xr,toReference:s=>s.applyMatrix3(ro),fromReference:s=>s.applyMatrix3(io)},[sa]:{transfer:Mt,primaries:Xr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ro),fromReference:s=>s.applyMatrix3(io).convertLinearToSRGB()}},wh=new Set([_n,Jr]),gt={enabled:!0,_workingColorSpace:_n,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!wh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=fr[e].toReference,i=fr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return fr[s].primaries},getTransfer:function(s){return s===rn?Gr:fr[s].transfer}};function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fi;class Sl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=ar("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Th=0;class El{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=jn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ms(i[a].image)):r.push(ms(i[a]))}else r=ms(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ms(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bh=0;class Ht extends ci{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=jt,i=jt,r=Vt,a=Oi,o=nn,l=Xn,h=Ht.DEFAULT_ANISOTROPY,u=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=jn(),this.name="",this.source=new El(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===si?Ct:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ai:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ai:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ct?si:_l}set encoding(e){rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===si?Ct:rn}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=fl;Ht.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,h=l[0],u=l[4],c=l[8],f=l[1],d=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(c-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+g)<.1&&Math.abs(v+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,x=(d+1)/2,E=(p+1)/2,A=(u+f)/4,R=(c+g)/4,C=(v+m)/4;return y>x&&y>E?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=R/n):x>E?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=C/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=R/r,i=C/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-v)*(m-v)+(c-g)*(c-g)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(c-g)/_,this.z=(f-u)/_,this.w=Math.acos((h+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ah extends ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===si?Ct:rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new El(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Ah{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wl extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rh extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],h=n[i+1],u=n[i+2],c=n[i+3];const f=r[a+0],d=r[a+1],v=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=v,e[t+3]=g;return}if(c!==g||l!==f||h!==d||u!==v){let m=1-o;const p=l*f+h*d+u*v+c*g,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),A=Math.atan2(E,p*_);m=Math.sin(m*A)/E,o=Math.sin(o*A)/E}const x=o*_;if(l=l*m+f*x,h=h*m+d*x,u=u*m+v*x,c=c*m+g*x,m===1-o){const E=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=E,h*=E,u*=E,c*=E}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],h=n[i+2],u=n[i+3],c=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return e[t]=o*v+u*c+l*d-h*f,e[t+1]=l*v+u*f+h*c-o*d,e[t+2]=h*v+u*d+o*f-l*c,e[t+3]=u*v-o*c-l*f-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(i/2),c=o(r/2),f=l(n/2),d=l(i/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*c+h*d*v,this._y=h*d*c-f*u*v,this._z=h*u*v+f*d*c,this._w=h*u*c-f*d*v;break;case"YXZ":this._x=f*u*c+h*d*v,this._y=h*d*c-f*u*v,this._z=h*u*v-f*d*c,this._w=h*u*c+f*d*v;break;case"ZXY":this._x=f*u*c-h*d*v,this._y=h*d*c+f*u*v,this._z=h*u*v+f*d*c,this._w=h*u*c-f*d*v;break;case"ZYX":this._x=f*u*c-h*d*v,this._y=h*d*c+f*u*v,this._z=h*u*v-f*d*c,this._w=h*u*c+f*d*v;break;case"YZX":this._x=f*u*c+h*d*v,this._y=h*d*c+f*u*v,this._z=h*u*v-f*d*c,this._w=h*u*c-f*d*v;break;case"XZY":this._x=f*u*c-h*d*v,this._y=h*d*c-f*u*v,this._z=h*u*v+f*d*c,this._w=h*u*c+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],u=t[6],c=t[10],f=n+o+c;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-h)*d,this._z=(a-i)*d}else if(n>o&&n>c){const d=2*Math.sqrt(1+n-o-c);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+h)/d}else if(o>c){const d=2*Math.sqrt(1+o-n-c);this._w=(r-h)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+c-n-o);this._w=(a-i)/d,this._x=(r+h)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+i*h-r*l,this._y=i*u+a*l+r*o-n*h,this._z=r*u+a*h+n*l-i*o,this._w=a*u-n*o-i*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),u=Math.atan2(h,o),c=Math.sin((1-t)*u)/h,f=Math.sin(t*u)/h;return this._w=a*c+this._w*f,this._x=n*c+this._x*f,this._y=i*c+this._y*f,this._z=r*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(so.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(so.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=l*t+a*i-o*n,u=l*n+o*t-r*i,c=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=h*l+f*-r+u*-o-c*-a,this.y=u*l+f*-a+c*-r-h*-o,this.z=c*l+f*-o+h*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vs.copy(this).projectOnVector(e),this.sub(vs)}reflect(e){return this.sub(vs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vs=new J,so=new on;class Hi{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),di.copy(e.boundingBox),di.applyMatrix4(e.matrixWorld),this.union(di);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)En.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(En)}else i.boundingBox===null&&i.computeBoundingBox(),di.copy(i.boundingBox),di.applyMatrix4(e.matrixWorld),this.union(di)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),dr.subVectors(this.max,Zi),pi.subVectors(e.a,Zi),mi.subVectors(e.b,Zi),vi.subVectors(e.c,Zi),Un.subVectors(mi,pi),Nn.subVectors(vi,mi),$n.subVectors(pi,vi);let t=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-$n.z,$n.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,$n.z,0,-$n.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-$n.y,$n.x,0];return!gs(t,pi,mi,vi,dr)||(t=[1,0,0,0,1,0,0,0,1],!gs(t,pi,mi,vi,dr))?!1:(pr.crossVectors(Un,Nn),t=[pr.x,pr.y,pr.z],gs(t,pi,mi,vi,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new J,new J,new J,new J,new J,new J,new J,new J],En=new J,di=new Hi,pi=new J,mi=new J,vi=new J,Un=new J,Nn=new J,$n=new J,Zi=new J,dr=new J,pr=new J,Jn=new J;function gs(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Jn.fromArray(s,r);const o=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),l=e.dot(Jn),h=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}const Ch=new Hi,$i=new J,ys=new J;class Gi{constructor(e=new J,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ch.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($i,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(ys)),this.expandByPoint($i.copy(e.center).sub(ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new J,_s=new J,mr=new J,Fn=new J,xs=new J,vr=new J,Ms=new J;class Qr{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_s.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(_s);const r=e.distanceTo(t)*.5,a=-this.direction.dot(mr),o=Fn.dot(this.direction),l=-Fn.dot(mr),h=Fn.lengthSq(),u=Math.abs(1-a*a);let c,f,d,v;if(u>0)if(c=a*l-o,f=a*o-l,v=r*u,c>=0)if(f>=-v)if(f<=v){const g=1/u;c*=g,f*=g,d=c*(c+a*f+2*o)+f*(a*c+f+2*l)+h}else f=r,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*l)+h;else f=-r,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*l)+h;else f<=-v?(c=Math.max(0,-(-a*r+o)),f=c>0?-r:Math.min(Math.max(-r,-l),r),d=-c*c+f*(f+2*l)+h):f<=v?(c=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+h):(c=Math.max(0,-(a*r+o)),f=c>0?r:Math.min(Math.max(-r,-l),r),d=-c*c+f*(f+2*l)+h);else f=a>0?-r:r,c=Math.max(0,-(a*f+o)),d=-c*c+f*(f+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(_s).addScaledVector(mr,f),d}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,i=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,i=(e.min.x-f.x)*h),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),c>=0?(o=(e.min.z-f.z)*c,l=(e.max.z-f.z)*c):(o=(e.max.z-f.z)*c,l=(e.min.z-f.z)*c),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,r){xs.subVectors(t,e),vr.subVectors(n,e),Ms.crossVectors(xs,vr);let a=this.direction.dot(Ms),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,e);const l=o*this.direction.dot(vr.crossVectors(Fn,vr));if(l<0)return null;const h=o*this.direction.dot(xs.cross(Fn));if(h<0||l+h>a)return null;const u=-o*Fn.dot(Ms);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,i,r,a,o,l,h,u,c,f,d,v,g,m){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,h,u,c,f,d,v,g,m)}set(e,t,n,i,r,a,o,l,h,u,c,f,d,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=f,p[3]=d,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),r=1/gi.setFromMatrixColumn(e,1).length(),a=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),c=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*c,v=o*u,g=o*c;t[0]=l*u,t[4]=-l*c,t[8]=h,t[1]=d+v*h,t[5]=f-g*h,t[9]=-o*l,t[2]=g-f*h,t[6]=v+d*h,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*c,v=h*u,g=h*c;t[0]=f+g*o,t[4]=v*o-d,t[8]=a*h,t[1]=a*c,t[5]=a*u,t[9]=-o,t[2]=d*o-v,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*c,v=h*u,g=h*c;t[0]=f-g*o,t[4]=-a*c,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*c,v=o*u,g=o*c;t[0]=l*u,t[4]=v*h-d,t[8]=f*h+g,t[1]=l*c,t[5]=g*h+f,t[9]=d*h-v,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*h,v=o*l,g=o*h;t[0]=l*u,t[4]=g-f*c,t[8]=v*c+d,t[1]=c,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=d*c+v,t[10]=f-g*c}else if(e.order==="XZY"){const f=a*l,d=a*h,v=o*l,g=o*h;t[0]=l*u,t[4]=-c,t[8]=h*u,t[1]=f*c+g,t[5]=a*u,t[9]=d*c-v,t[2]=v*c-d,t[6]=o*u,t[10]=g*c+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ph,e,Lh)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Bn.crossVectors(n,Jt),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Bn.crossVectors(n,Jt)),Bn.normalize(),gr.crossVectors(Jt,Bn),i[0]=Bn.x,i[4]=gr.x,i[8]=Jt.x,i[1]=Bn.y,i[5]=gr.y,i[9]=Jt.y,i[2]=Bn.z,i[6]=gr.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],u=n[1],c=n[5],f=n[9],d=n[13],v=n[2],g=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],E=n[15],A=i[0],R=i[4],C=i[8],M=i[12],S=i[1],P=i[5],O=i[9],V=i[13],I=i[2],G=i[6],$=i[10],B=i[14],z=i[3],Y=i[7],W=i[11],b=i[15];return r[0]=a*A+o*S+l*I+h*z,r[4]=a*R+o*P+l*G+h*Y,r[8]=a*C+o*O+l*$+h*W,r[12]=a*M+o*V+l*B+h*b,r[1]=u*A+c*S+f*I+d*z,r[5]=u*R+c*P+f*G+d*Y,r[9]=u*C+c*O+f*$+d*W,r[13]=u*M+c*V+f*B+d*b,r[2]=v*A+g*S+m*I+p*z,r[6]=v*R+g*P+m*G+p*Y,r[10]=v*C+g*O+m*$+p*W,r[14]=v*M+g*V+m*B+p*b,r[3]=_*A+y*S+x*I+E*z,r[7]=_*R+y*P+x*G+E*Y,r[11]=_*C+y*O+x*$+E*W,r[15]=_*M+y*V+x*B+E*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],u=e[2],c=e[6],f=e[10],d=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*c-i*h*c-r*o*f+n*h*f+i*o*d-n*l*d)+g*(+t*l*d-t*h*f+r*a*f-i*a*d+i*h*u-r*l*u)+m*(+t*h*c-t*o*d-r*a*c+n*a*d+r*o*u-n*h*u)+p*(-i*o*u-t*l*c+t*o*f+i*a*c-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8],c=e[9],f=e[10],d=e[11],v=e[12],g=e[13],m=e[14],p=e[15],_=c*m*h-g*f*h+g*l*d-o*m*d-c*l*p+o*f*p,y=v*f*h-u*m*h-v*l*d+a*m*d+u*l*p-a*f*p,x=u*g*h-v*c*h+v*o*d-a*g*d-u*o*p+a*c*p,E=v*c*l-u*g*l-v*o*f+a*g*f+u*o*m-a*c*m,A=t*_+n*y+i*x+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=_*R,e[1]=(g*f*r-c*m*r-g*i*d+n*m*d+c*i*p-n*f*p)*R,e[2]=(o*m*r-g*l*r+g*i*h-n*m*h-o*i*p+n*l*p)*R,e[3]=(c*l*r-o*f*r-c*i*h+n*f*h+o*i*d-n*l*d)*R,e[4]=y*R,e[5]=(u*m*r-v*f*r+v*i*d-t*m*d-u*i*p+t*f*p)*R,e[6]=(v*l*r-a*m*r-v*i*h+t*m*h+a*i*p-t*l*p)*R,e[7]=(a*f*r-u*l*r+u*i*h-t*f*h-a*i*d+t*l*d)*R,e[8]=x*R,e[9]=(v*c*r-u*g*r-v*n*d+t*g*d+u*n*p-t*c*p)*R,e[10]=(a*g*r-v*o*r+v*n*h-t*g*h-a*n*p+t*o*p)*R,e[11]=(u*o*r-a*c*r-u*n*h+t*c*h+a*n*d-t*o*d)*R,e[12]=E*R,e[13]=(u*g*i-v*c*i+v*n*f-t*g*f-u*n*m+t*c*m)*R,e[14]=(v*o*i-a*g*i-v*n*l+t*g*l+a*n*m-t*o*m)*R,e[15]=(a*c*i-u*o*i+u*n*l-t*c*l-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-i*l,h*l+i*o,0,h*o+i*l,u*o+n,u*l-i*a,0,h*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,u=a+a,c=o+o,f=r*h,d=r*u,v=r*c,g=a*u,m=a*c,p=o*c,_=l*h,y=l*u,x=l*c,E=n.x,A=n.y,R=n.z;return i[0]=(1-(g+p))*E,i[1]=(d+x)*E,i[2]=(v-y)*E,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(f+p))*A,i[6]=(m+_)*A,i[7]=0,i[8]=(v+y)*R,i[9]=(m-_)*R,i[10]=(1-(f+g))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=gi.set(i[0],i[1],i[2]).length();const a=gi.set(i[4],i[5],i[6]).length(),o=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const h=1/r,u=1/a,c=1/o;return hn.elements[0]*=h,hn.elements[1]*=h,hn.elements[2]*=h,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=c,hn.elements[9]*=c,hn.elements[10]*=c,t.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Dn){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),c=(t+e)/(t-e),f=(n+i)/(n-i);let d,v;if(o===Dn)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===qr)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Dn){const l=this.elements,h=1/(t-e),u=1/(n-i),c=1/(a-r),f=(t+e)*h,d=(n+i)*u;let v,g;if(o===Dn)v=(a+r)*c,g=-2*c;else if(o===qr)v=r*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new J,hn=new et,Ph=new J(0,0,0),Lh=new J(1,1,1),Bn=new J,gr=new J,Jt=new J,ao=new et,oo=new on;class ln{constructor(e=0,t=0,n=0,i=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],h=i[5],u=i[9],c=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ao,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oo.setFromEuler(this),this.setFromQuaternion(oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ih=0;const lo=new J,yi=new on,Tn=new et,yr=new J,Ji=new J,Dh=new J,Uh=new on,co=new J(1,0,0),ho=new J(0,1,0),uo=new J(0,0,1),Nh={type:"added"},Fh={type:"removed"};class wt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new J,t=new ln,n=new on,i=new J(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new ct}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(co,e)}rotateY(e){return this.rotateOnAxis(ho,e)}rotateZ(e){return this.rotateOnAxis(uo,e)}translateOnAxis(e,t){return lo.copy(e).applyQuaternion(this.quaternion),this.position.add(lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(co,e)}translateY(e){return this.translateOnAxis(ho,e)}translateZ(e){return this.translateOnAxis(uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yr.copy(e):yr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Ji,yr,this.up):Tn.lookAt(yr,Ji,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(Tn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,Dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];r(e.shapes,c)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),u=a(e.images),c=a(e.shapes),f=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const l=[];for(const h in o){const u=o[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new J(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new J,bn=new J,Ss=new J,An=new J,_i=new J,xi=new J,fo=new J,Es=new J,ws=new J,Ts=new J;let _r=!1;class dn{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),bn.subVectors(n,t),Ss.subVectors(e,t);const a=un.dot(un),o=un.dot(bn),l=un.dot(Ss),h=bn.dot(bn),u=bn.dot(Ss),c=a*h-o*o;if(c===0)return r.set(-2,-1,-1);const f=1/c,d=(h*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-d-v,v,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,n,i,r,a,o,l){return _r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_r=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,An),l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),bn.subVectors(e,t),un.cross(bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),un.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return _r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_r=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;_i.subVectors(i,n),xi.subVectors(r,n),Es.subVectors(e,n);const l=_i.dot(Es),h=xi.dot(Es);if(l<=0&&h<=0)return t.copy(n);ws.subVectors(e,i);const u=_i.dot(ws),c=xi.dot(ws);if(u>=0&&c<=u)return t.copy(i);const f=l*c-u*h;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_i,a);Ts.subVectors(e,r);const d=_i.dot(Ts),v=xi.dot(Ts);if(v>=0&&d<=v)return t.copy(r);const g=d*h-l*v;if(g<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(n).addScaledVector(xi,o);const m=u*v-d*c;if(m<=0&&c-u>=0&&d-v>=0)return fo.subVectors(r,i),o=(c-u)/(c-u+(d-v)),t.copy(i).addScaledVector(fo,o);const p=1/(m+g+f);return a=g*p,o=f*p,t.copy(n).addScaledVector(_i,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Bh=0;class Kn extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Ui,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=ul,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},xr={h:0,s:0,l:0};function bs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=aa(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=bs(a,r,e+1/3),this.g=bs(a,r,e),this.b=bs(a,r,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=bl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return gt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(It(Wt.r*255,0,255))*65536+Math.round(It(Wt.g*255,0,255))*256+Math.round(It(Wt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,r=Wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,h;const u=(o+a)/2;if(o===a)l=0,h=0;else{const c=a-o;switch(h=u<=.5?c/(a+o):c/(2-a-o),a){case n:l=(i-r)/c+(i<r?6:0);break;case i:l=(r-n)/c+2;break;case r:l=(n-i)/c+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Ct){gt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(xr);const n=ir(On.h,xr.h,t),i=ir(On.s,xr.s,t),r=ir(On.l,xr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ot;ot.NAMES=bl;class Al extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ln=Oh();function Oh(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const h=l-127;h<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):h<-14?(n[l]=1024>>-h-14,n[l|256]=1024>>-h-14|32768,i[l]=-h-1,i[l|256]=-h-1):h<=15?(n[l]=h+15<<10,n[l|256]=h+15<<10|32768,i[l]=13,i[l|256]=13):h<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;!(h&8388608);)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[l]=h|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function zh(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=It(s,-65504,65504),Ln.floatView[0]=s;const e=Ln.uint32View[0],t=e>>23&511;return Ln.baseTable[t]+((e&8388607)>>Ln.shiftTable[t])}function Vh(s){const e=s>>10;return Ln.uint32View[0]=Ln.mantissaTable[Ln.offsetTable[e]+(s&1023)]+Ln.exponentTable[e],Ln.floatView[0]}const Mr={toHalfFloat:zh,fromHalfFloat:Vh},Pt=new J,Sr=new st;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qa,this.updateRange={offset:0,count:-1},this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class oa extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rl extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kh=0;const tn=new et,As=new wt,Mi=new J,Qt=new Hi,Qi=new Hi,Nt=new J;class cn extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ml(e)?Rl:oa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return As.lookAt(e),As.updateMatrix(),this.applyMatrix4(As.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(Qt.min,Qi.min),Qt.expandByPoint(Nt),Nt.addVectors(Qt.max,Qi.max),Qt.expandByPoint(Nt)):(Qt.expandByPoint(Qi.min),Qt.expandByPoint(Qi.max))}Qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Nt.fromBufferAttribute(o,h),l&&(Mi.fromBufferAttribute(e,h),Nt.add(Mi)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,h=[],u=[];for(let S=0;S<o;S++)h[S]=new J,u[S]=new J;const c=new J,f=new J,d=new J,v=new st,g=new st,m=new st,p=new J,_=new J;function y(S,P,O){c.fromArray(i,S*3),f.fromArray(i,P*3),d.fromArray(i,O*3),v.fromArray(a,S*2),g.fromArray(a,P*2),m.fromArray(a,O*2),f.sub(c),d.sub(c),g.sub(v),m.sub(v);const V=1/(g.x*m.y-m.x*g.y);isFinite(V)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(V),_.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(V),h[S].add(p),h[P].add(p),h[O].add(p),u[S].add(_),u[P].add(_),u[O].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let S=0,P=x.length;S<P;++S){const O=x[S],V=O.start,I=O.count;for(let G=V,$=V+I;G<$;G+=3)y(n[G+0],n[G+1],n[G+2])}const E=new J,A=new J,R=new J,C=new J;function M(S){R.fromArray(r,S*3),C.copy(R);const P=h[S];E.copy(P),E.sub(R.multiplyScalar(R.dot(P))).normalize(),A.crossVectors(C,P);const V=A.dot(u[S])<0?-1:1;l[S*4]=E.x,l[S*4+1]=E.y,l[S*4+2]=E.z,l[S*4+3]=V}for(let S=0,P=x.length;S<P;++S){const O=x[S],V=O.start,I=O.count;for(let G=V,$=V+I;G<$;G+=3)M(n[G+0]),M(n[G+1]),M(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new J,r=new J,a=new J,o=new J,l=new J,h=new J,u=new J,c=new J;if(e)for(let f=0,d=e.count;f<d;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),c.subVectors(i,r),u.cross(c),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),o.add(u),l.add(u),h.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),c.subVectors(i,r),u.cross(c),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const h=o.array,u=o.itemSize,c=o.normalized,f=new h.constructor(l.length*u);let d=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)f[v++]=h[d++]}return new yn(f,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],h=e(l,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let u=0,c=h.length;u<c;u++){const f=h[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,f=h.length;c<f;c++){const d=h[c];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(t))}const r=e.morphAttributes;for(const h in r){const u=[],c=r[h];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,u=a.length;h<u;h++){const c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const po=new et,Qn=new Qr,Er=new Gi,mo=new J,Si=new J,Ei=new J,wi=new J,Rs=new J,wr=new J,Tr=new st,br=new st,Ar=new st,vo=new J,go=new J,yo=new J,Rr=new J,Cr=new J;class mn extends wt{constructor(e=new cn,t=new Al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=o[l],c=r[l];u!==0&&(Rs.fromBufferAttribute(c,e),a?wr.addScaledVector(Rs,u):wr.addScaledVector(Rs.sub(t),u))}t.add(wr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(Er.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Er,mo)===null||Qn.origin.distanceToSquared(mo)>(e.far-e.near)**2))&&(po.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(po),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,E=y;x<E;x+=3){const A=o.getX(x),R=o.getX(x+1),C=o.getX(x+2);i=Pr(this,p,e,n,h,u,c,A,R,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const _=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);i=Pr(this,a,e,n,h,u,c,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,E=y;x<E;x+=3){const A=x,R=x+1,C=x+2;i=Pr(this,p,e,n,h,u,c,A,R,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const _=m,y=m+1,x=m+2;i=Pr(this,a,e,n,h,u,c,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Hh(s,e,t,n,i,r,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===qn,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Cr);return h<t.near||h>t.far?null:{distance:h,point:Cr.clone(),object:s}}function Pr(s,e,t,n,i,r,a,o,l,h){s.getVertexPosition(o,Si),s.getVertexPosition(l,Ei),s.getVertexPosition(h,wi);const u=Hh(s,e,t,n,Si,Ei,wi,Rr);if(u){i&&(Tr.fromBufferAttribute(i,o),br.fromBufferAttribute(i,l),Ar.fromBufferAttribute(i,h),u.uv=dn.getInterpolation(Rr,Si,Ei,wi,Tr,br,Ar,new st)),r&&(Tr.fromBufferAttribute(r,o),br.fromBufferAttribute(r,l),Ar.fromBufferAttribute(r,h),u.uv1=dn.getInterpolation(Rr,Si,Ei,wi,Tr,br,Ar,new st),u.uv2=u.uv1),a&&(vo.fromBufferAttribute(a,o),go.fromBufferAttribute(a,l),yo.fromBufferAttribute(a,h),u.normal=dn.getInterpolation(Rr,Si,Ei,wi,vo,go,yo,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new J,materialIndex:0};dn.getNormal(Si,Ei,wi,c.normal),u.face=c}return u}class Wi extends cn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],u=[],c=[];let f=0,d=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new kt(h,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(c,2));function v(g,m,p,_,y,x,E,A,R,C,M){const S=x/R,P=E/C,O=x/2,V=E/2,I=A/2,G=R+1,$=C+1;let B=0,z=0;const Y=new J;for(let W=0;W<$;W++){const b=W*P-V;for(let F=0;F<G;F++){const U=F*S-O;Y[g]=U*_,Y[m]=b*y,Y[p]=I,h.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[p]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),c.push(F/R),c.push(1-W/C),B+=1}}for(let W=0;W<C;W++)for(let b=0;b<R;b++){const F=f+b+G*W,U=f+b+G*(W+1),D=f+(b+1)+G*(W+1),L=f+(b+1)+G*W;l.push(F,U,L),l.push(U,D,L),z+=6}o.addGroup(d,z,M),d+=z,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){const e={};for(let t=0;t<s.length;t++){const n=ki(s[t]);for(const i in n)e[i]=n[i]}return e}function Gh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Cl(s){return s.getRenderTarget()===null?s.outputColorSpace:gt.workingColorSpace}const Wh={clone:ki,merge:qt};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Gh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pl extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends Pl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,bi=1;class Yh extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(Ti,bi,e,t);i.layers=this.layers,this.add(i);const r=new Yt(Ti,bi,e,t);r.layers=this.layers,this.add(r);const a=new Yt(Ti,bi,e,t);a.layers=this.layers,this.add(a);const o=new Yt(Ti,bi,e,t);o.layers=this.layers,this.add(o);const l=new Yt(Ti,bi,e,t);l.layers=this.layers,this.add(l);const h=new Yt(Ti,bi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const h of t)this.remove(h);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,u]=this.children,c=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(c,f,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ll extends Ht{constructor(e,t,n,i,r,a,o,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,i,r,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jh extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===si?Ct:rn),this.texture=new Ll(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wi(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Gn});r.uniforms.tEquirect.value=t;const a=new mn(i,r),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Vt),new Yh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Cs=new J,Kh=new J,Zh=new ct;class Vn{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cs.subVectors(n,t).cross(Kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Cs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zh.getNormalMatrix(e),i=this.coplanarPoint(Cs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Gi,Lr=new J;class la{constructor(e=new Vn,t=new Vn,n=new Vn,i=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],h=i[4],u=i[5],c=i[6],f=i[7],d=i[8],v=i[9],g=i[10],m=i[11],p=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-r,f-h,m-d,x-p).normalize(),n[1].setComponents(l+r,f+h,m+d,x+p).normalize(),n[2].setComponents(l+a,f+u,m+v,x+_).normalize(),n[3].setComponents(l-a,f-u,m-v,x-_).normalize(),n[4].setComponents(l-o,f-c,m-g,x-y).normalize(),t===Dn)n[5].setComponents(l+o,f+c,m+g,x+y).normalize();else if(t===qr)n[5].setComponents(o,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Lr.x=i.normal.x>0?e.max.x:e.min.x,Lr.y=i.normal.y>0?e.max.y:e.min.y,Lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Il(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function $h(s,e){const t=e.isWebGL2,n=new WeakMap;function i(h,u){const c=h.array,f=h.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,c,f),h.onUploadCallback();let v;if(c instanceof Float32Array)v=s.FLOAT;else if(c instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=s.SHORT;else if(c instanceof Uint32Array)v=s.UNSIGNED_INT;else if(c instanceof Int32Array)v=s.INT;else if(c instanceof Int8Array)v=s.BYTE;else if(c instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:h.version}}function r(h,u,c){const f=u.array,d=u.updateRange;s.bindBuffer(c,h),d.count===-1?s.bufferSubData(c,0,f):(t?s.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(s.deleteBuffer(u.buffer),n.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const f=n.get(h);(!f||f.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const c=n.get(h);c===void 0?n.set(h,i(h,u)):c.version<h.version&&(r(c.buffer,h,u),c.version=h.version)}return{get:a,remove:o,update:l}}class ca extends cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),h=o+1,u=l+1,c=e/o,f=t/l,d=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const _=p*f-a;for(let y=0;y<h;y++){const x=y*c-r;v.push(x,-_,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const y=_+h*p,x=_+h*(p+1),E=_+1+h*(p+1),A=_+1+h*p;d.push(y,x,A),d.push(x,E,A)}this.setIndex(d),this.setAttribute("position",new kt(v,3)),this.setAttribute("normal",new kt(g,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,au=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_u=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Au=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ou=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ju=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ku=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ff=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,id=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,od=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ld=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,md=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_d=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Md=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ed=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Td=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:Jh,alphahash_pars_fragment:Qh,alphamap_fragment:eu,alphamap_pars_fragment:tu,alphatest_fragment:nu,alphatest_pars_fragment:iu,aomap_fragment:ru,aomap_pars_fragment:su,begin_vertex:au,beginnormal_vertex:ou,bsdfs:lu,iridescence_fragment:cu,bumpmap_pars_fragment:hu,clipping_planes_fragment:uu,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:du,clipping_planes_vertex:pu,color_fragment:mu,color_pars_fragment:vu,color_pars_vertex:gu,color_vertex:yu,common:_u,cube_uv_reflection_fragment:xu,defaultnormal_vertex:Mu,displacementmap_pars_vertex:Su,displacementmap_vertex:Eu,emissivemap_fragment:wu,emissivemap_pars_fragment:Tu,colorspace_fragment:bu,colorspace_pars_fragment:Au,envmap_fragment:Ru,envmap_common_pars_fragment:Cu,envmap_pars_fragment:Pu,envmap_pars_vertex:Lu,envmap_physical_pars_fragment:Gu,envmap_vertex:Iu,fog_vertex:Du,fog_pars_vertex:Uu,fog_fragment:Nu,fog_pars_fragment:Fu,gradientmap_pars_fragment:Bu,lightmap_fragment:Ou,lightmap_pars_fragment:zu,lights_lambert_fragment:Vu,lights_lambert_pars_fragment:ku,lights_pars_begin:Hu,lights_toon_fragment:Wu,lights_toon_pars_fragment:Xu,lights_phong_fragment:qu,lights_phong_pars_fragment:Yu,lights_physical_fragment:ju,lights_physical_pars_fragment:Ku,lights_fragment_begin:Zu,lights_fragment_maps:$u,lights_fragment_end:Ju,logdepthbuf_fragment:Qu,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:nf,map_fragment:rf,map_pars_fragment:sf,map_particle_fragment:af,map_particle_pars_fragment:of,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphcolor_vertex:hf,morphnormal_vertex:uf,morphtarget_pars_vertex:ff,morphtarget_vertex:df,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:vf,normal_pars_vertex:gf,normal_vertex:yf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:Ef,opaque_fragment:wf,packing:Tf,premultiplied_alpha_fragment:bf,project_vertex:Af,dithering_fragment:Rf,dithering_pars_fragment:Cf,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:If,shadowmap_pars_vertex:Df,shadowmap_vertex:Uf,shadowmask_pars_fragment:Nf,skinbase_vertex:Ff,skinning_pars_vertex:Bf,skinning_vertex:Of,skinnormal_vertex:zf,specularmap_fragment:Vf,specularmap_pars_fragment:kf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Gf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:qf,uv_pars_vertex:Yf,uv_vertex:jf,worldpos_vertex:Kf,background_vert:Zf,background_frag:$f,backgroundCube_vert:Jf,backgroundCube_frag:Qf,cube_vert:ed,cube_frag:td,depth_vert:nd,depth_frag:id,distanceRGBA_vert:rd,distanceRGBA_frag:sd,equirect_vert:ad,equirect_frag:od,linedashed_vert:ld,linedashed_frag:cd,meshbasic_vert:hd,meshbasic_frag:ud,meshlambert_vert:fd,meshlambert_frag:dd,meshmatcap_vert:pd,meshmatcap_frag:md,meshnormal_vert:vd,meshnormal_frag:gd,meshphong_vert:yd,meshphong_frag:_d,meshphysical_vert:xd,meshphysical_frag:Md,meshtoon_vert:Sd,meshtoon_frag:Ed,points_vert:wd,points_frag:Td,shadow_vert:bd,shadow_frag:Ad,sprite_vert:Rd,sprite_frag:Cd},ze={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},gn={basic:{uniforms:qt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:qt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new ot(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:qt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:qt([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:qt([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new ot(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:qt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:qt([ze.points,ze.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:qt([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:qt([ze.common,ze.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:qt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:qt([ze.sprite,ze.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:qt([ze.common,ze.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:qt([ze.lights,ze.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};gn.physical={uniforms:qt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Ir={r:0,b:0,g:0};function Pd(s,e,t,n,i,r,a){const o=new ot(0);let l=r===!0?0:1,h,u,c=null,f=0,d=null;function v(m,p){let _=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),_=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Zr)?(u===void 0&&(u=new mn(new Wi(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ki(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=gt.getTransfer(y.colorSpace)!==Mt,(c!==y||f!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,c=y,f=y.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new mn(new ca(2,2),new li({name:"BackgroundMaterial",uniforms:ki(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=gt.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,c=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function g(m,p){m.getRGB(Ir,Cl(s)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:v}}function Ld(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let h=l,u=!1;function c(I,G,$,B,z){let Y=!1;if(a){const W=g(B,$,G);h!==W&&(h=W,d(h.object)),Y=p(I,B,$,z),Y&&_(I,B,$,z)}else{const W=G.wireframe===!0;(h.geometry!==B.id||h.program!==$.id||h.wireframe!==W)&&(h.geometry=B.id,h.program=$.id,h.wireframe=W,Y=!0)}z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,C(I,G,$,B),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function v(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function g(I,G,$){const B=$.wireframe===!0;let z=o[I.id];z===void 0&&(z={},o[I.id]=z);let Y=z[G.id];Y===void 0&&(Y={},z[G.id]=Y);let W=Y[B];return W===void 0&&(W=m(f()),Y[B]=W),W}function m(I){const G=[],$=[],B=[];for(let z=0;z<i;z++)G[z]=0,$[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:B,object:I,attributes:{},index:null}}function p(I,G,$,B){const z=h.attributes,Y=G.attributes;let W=0;const b=$.getAttributes();for(const F in b)if(b[F].location>=0){const D=z[F];let L=Y[F];if(L===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(L=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(L=I.instanceColor)),D===void 0||D.attribute!==L||L&&D.data!==L.data)return!0;W++}return h.attributesNum!==W||h.index!==B}function _(I,G,$,B){const z={},Y=G.attributes;let W=0;const b=$.getAttributes();for(const F in b)if(b[F].location>=0){let D=Y[F];D===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(D=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(D=I.instanceColor));const L={};L.attribute=D,D&&D.data&&(L.data=D.data),z[F]=L,W++}h.attributes=z,h.attributesNum=W,h.index=B}function y(){const I=h.newAttributes;for(let G=0,$=I.length;G<$;G++)I[G]=0}function x(I){E(I,0)}function E(I,G){const $=h.newAttributes,B=h.enabledAttributes,z=h.attributeDivisors;$[I]=1,B[I]===0&&(s.enableVertexAttribArray(I),B[I]=1),z[I]!==G&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),z[I]=G)}function A(){const I=h.newAttributes,G=h.enabledAttributes;for(let $=0,B=G.length;$<B;$++)G[$]!==I[$]&&(s.disableVertexAttribArray($),G[$]=0)}function R(I,G,$,B,z,Y,W){W===!0?s.vertexAttribIPointer(I,G,$,z,Y):s.vertexAttribPointer(I,G,$,B,z,Y)}function C(I,G,$,B){if(n.isWebGL2===!1&&(I.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const z=B.attributes,Y=$.getAttributes(),W=G.defaultAttributeValues;for(const b in Y){const F=Y[b];if(F.location>=0){let U=z[b];if(U===void 0&&(b==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),b==="instanceColor"&&I.instanceColor&&(U=I.instanceColor)),U!==void 0){const D=U.normalized,L=U.itemSize,K=t.get(U);if(K===void 0)continue;const se=K.buffer,te=K.type,Q=K.bytesPerElement,he=n.isWebGL2===!0&&(te===s.INT||te===s.UNSIGNED_INT||U.gpuType===dl);if(U.isInterleavedBufferAttribute){const ce=U.data,q=ce.stride,Re=U.offset;if(ce.isInstancedInterleavedBuffer){for(let de=0;de<F.locationSize;de++)E(F.location+de,ce.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<F.locationSize;de++)x(F.location+de);s.bindBuffer(s.ARRAY_BUFFER,se);for(let de=0;de<F.locationSize;de++)R(F.location+de,L/F.locationSize,te,D,q*Q,(Re+L/F.locationSize*de)*Q,he)}else{if(U.isInstancedBufferAttribute){for(let ce=0;ce<F.locationSize;ce++)E(F.location+ce,U.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ce=0;ce<F.locationSize;ce++)x(F.location+ce);s.bindBuffer(s.ARRAY_BUFFER,se);for(let ce=0;ce<F.locationSize;ce++)R(F.location+ce,L/F.locationSize,te,D,L*Q,L/F.locationSize*ce*Q,he)}}else if(W!==void 0){const D=W[b];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(F.location,D);break;case 3:s.vertexAttrib3fv(F.location,D);break;case 4:s.vertexAttrib4fv(F.location,D);break;default:s.vertexAttrib1fv(F.location,D)}}}}A()}function M(){O();for(const I in o){const G=o[I];for(const $ in G){const B=G[$];for(const z in B)v(B[z].object),delete B[z];delete G[$]}delete o[I]}}function S(I){if(o[I.id]===void 0)return;const G=o[I.id];for(const $ in G){const B=G[$];for(const z in B)v(B[z].object),delete B[z];delete G[$]}delete o[I.id]}function P(I){for(const G in o){const $=o[G];if($[I.id]===void 0)continue;const B=$[I.id];for(const z in B)v(B[z].object),delete B[z];delete $[I.id]}}function O(){V(),u=!0,h!==l&&(h=l,d(h.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:O,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:x,disableUnusedAttributes:A}}function Id(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,c){if(c===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,h,u,c),t.update(u,r,c)}this.setMode=a,this.render=o,this.renderInstances=l}function Dd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const h=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,c=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,x=a||e.has("OES_texture_float"),E=y&&x,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:A}}function Ud(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Vn,o=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){const d=c.length!==0||f||n!==0||i;return i=f,n=c.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,f){t=u(c,f,0)},this.setState=function(c,f,d){const v=c.clippingPlanes,g=c.clipIntersection,m=c.clipShadows,p=s.get(c);if(!i||v===null||v.length===0||r&&!m)r?u(null):h();else{const _=r?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=u(v,f,y,d);for(let E=0;E!==y;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,f,d,v){const g=c!==null?c.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=d+g*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==g;++y,x+=4)a.copy(c[y]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Nd(s){let e=new WeakMap;function t(a,o){return o===Vr?a.mapping=Fi:o===qs&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Vr||o===qs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new jh(l.height/2);return h.fromEquirectangularTexture(s,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ha extends Pl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ii=4,_o=[.125,.215,.35,.446,.526,.582],ni=20,Ps=new ha,xo=new ot;let Ls=null;const ti=(1+Math.sqrt(5))/2,Ai=1/ti,Mo=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,ti,Ai),new J(0,ti,-Ai),new J(Ai,0,ti),new J(-Ai,0,ti),new J(ti,Ai,0),new J(-ti,Ai,0)];class Zs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ls=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ls),e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ls=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:In,format:nn,colorSpace:_n,depthBuffer:!1},i=So(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=So(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fd(r)),this._blurMaterial=Bd(r,e,t)}return i}_compileMaterial(e){const t=new mn(this._lodPlanes[0],e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,n,i){const o=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,f=u.toneMapping;u.getClearColor(xo),u.toneMapping=Wn,u.autoClear=!1;const d=new Al({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),v=new mn(new Wi,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(xo),g=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));const y=this._cubeSize;Dr(i,_*y,p>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=c,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fi||e.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new mn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Dr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Mo[(i-1)%Mo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new mn(this._lodPlanes[i],h),f=h.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ni-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):ni;m>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);const p=[];let _=0;for(let R=0;R<ni;++R){const C=R/g,M=Math.exp(-C*C/2);p.push(M),R===0?_+=M:R<m&&(_+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const x=this._sizeLods[i],E=3*x*(i>y-Ii?i-y+Ii:0),A=4*(this._cubeSize-x);Dr(t,E,A,3*x,2*x),l.setRenderTarget(t),l.render(c,Ps)}}function Fd(s){const e=[],t=[],n=[];let i=s;const r=s-Ii+1+_o.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ii?l=_o[a-s+Ii-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),u=-h,c=1+h,f=[u,u,c,u,c,c,u,u,c,c,u,c],d=6,v=6,g=3,m=2,p=1,_=new Float32Array(g*v*d),y=new Float32Array(m*v*d),x=new Float32Array(p*v*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,C=A>2?0:-1,M=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];_.set(M,g*v*A),y.set(f,m*v*A);const S=[A,A,A,A,A,A];x.set(S,p*v*A)}const E=new cn;E.setAttribute("position",new yn(_,g)),E.setAttribute("uv",new yn(y,m)),E.setAttribute("faceIndex",new yn(x,p)),e.push(E),i>Ii&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function So(s,e,t){const n=new oi(s,e,t);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Bd(s,e,t){const n=new Float32Array(ni),i=new J(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Eo(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function wo(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Od(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Vr||l===qs,u=l===Fi||l===Bi;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let c=e.get(o);return t===null&&(t=new Zs(s)),c=h?t.fromEquirectangular(o,c):t.fromCubemap(o,c),e.set(o,c),c.texture}else{if(e.has(o))return e.get(o).texture;{const c=o.image;if(h&&c&&c.height>0||u&&c&&i(c)){t===null&&(t=new Zs(s));const f=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function zd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vd(s,e,t,n){const i={},r=new WeakMap;function a(c){const f=c.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(c,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(c){const f=c.attributes;for(const v in f)e.update(f[v],s.ARRAY_BUFFER);const d=c.morphAttributes;for(const v in d){const g=d[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function h(c){const f=[],d=c.index,v=c.attributes.position;let g=0;if(d!==null){const _=d.array;g=d.version;for(let y=0,x=_.length;y<x;y+=3){const E=_[y+0],A=_[y+1],R=_[y+2];f.push(E,A,A,R,R,E)}}else if(v!==void 0){const _=v.array;g=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const E=y+0,A=y+1,R=y+2;f.push(E,A,A,R,R,E)}}else return;const m=new(Ml(f)?Rl:oa)(f,1);m.version=g;const p=r.get(c);p&&e.remove(p),r.set(c,m)}function u(c){const f=r.get(c);if(f){const d=c.index;d!==null&&f.version<d.version&&h(c)}else h(c);return r.get(c)}return{get:o,update:l,getWireframeAttribute:u}}function kd(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function h(f){o=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,o,f*l),t.update(d,r,1)}function c(f,d,v){if(v===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,o,f*l,v),t.update(d,r,v)}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=c}function Hd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gd(s,e){return s[0]-e[0]}function Wd(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Xd(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new mt,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,u,c){const f=h.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let G=function(){V.dispose(),r.delete(u),u.removeEventListener("dispose",G)};var d=G;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let M=0;y===!0&&(M=1),x===!0&&(M=2),E===!0&&(M=3);let S=u.attributes.position.count*M,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const O=new Float32Array(S*P*4*g),V=new wl(O,S,P,g);V.type=an,V.needsUpdate=!0;const I=M*4;for(let $=0;$<g;$++){const B=A[$],z=R[$],Y=C[$],W=S*P*4*$;for(let b=0;b<B.count;b++){const F=b*I;y===!0&&(a.fromBufferAttribute(B,b),O[W+F+0]=a.x,O[W+F+1]=a.y,O[W+F+2]=a.z,O[W+F+3]=0),x===!0&&(a.fromBufferAttribute(z,b),O[W+F+4]=a.x,O[W+F+5]=a.y,O[W+F+6]=a.z,O[W+F+7]=0),E===!0&&(a.fromBufferAttribute(Y,b),O[W+F+8]=a.x,O[W+F+9]=a.y,O[W+F+10]=a.z,O[W+F+11]=Y.itemSize===4?a.w:1)}}m={count:g,texture:V,size:new st(S,P)},r.set(u,m),u.addEventListener("dispose",G)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const _=u.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",f),c.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<v;x++){const E=g[x];E[0]=x,E[1]=f[x]}g.sort(Wd);for(let x=0;x<8;x++)x<v&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Gd);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const E=o[x],A=E[0],R=E[1];A!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+x)!==m[A]&&u.setAttribute("morphTarget"+x,m[A]),p&&u.getAttribute("morphNormal"+x)!==p[A]&&u.setAttribute("morphNormal"+x,p[A]),i[x]=R,_+=R):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const y=u.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",y),c.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function qd(s,e,t,n){let i=new WeakMap;function r(l){const h=n.render.frame,u=l.geometry,c=e.get(l,u);if(i.get(c)!==h&&(e.update(c),i.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==h&&(f.update(),i.set(f,h))}return c}function a(){i=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}const Dl=new Ht,Ul=new wl,Nl=new Rh,Fl=new Ll,To=[],bo=[],Ao=new Float32Array(16),Ro=new Float32Array(9),Co=new Float32Array(4);function Xi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=To[i];if(r===void 0&&(r=new Float32Array(i),To[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function es(s,e){let t=bo[e];t===void 0&&(t=new Int32Array(e),bo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Yd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function Kd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function Zd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function $d(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Co.set(n),s.uniformMatrix2fv(this.addr,!1,Co),Ut(t,n)}}function Jd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Ro.set(n),s.uniformMatrix3fv(this.addr,!1,Ro),Ut(t,n)}}function Qd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Ao.set(n),s.uniformMatrix4fv(this.addr,!1,Ao),Ut(t,n)}}function ep(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function ip(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function rp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function lp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Dl,i)}function cp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nl,i)}function hp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fl,i)}function up(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ul,i)}function fp(s){switch(s){case 5126:return Yd;case 35664:return jd;case 35665:return Kd;case 35666:return Zd;case 35674:return $d;case 35675:return Jd;case 35676:return Qd;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return rp;case 36294:return sp;case 36295:return ap;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}function dp(s,e){s.uniform1fv(this.addr,e)}function pp(s,e){const t=Xi(e,this.size,2);s.uniform2fv(this.addr,t)}function mp(s,e){const t=Xi(e,this.size,3);s.uniform3fv(this.addr,t)}function vp(s,e){const t=Xi(e,this.size,4);s.uniform4fv(this.addr,t)}function gp(s,e){const t=Xi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yp(s,e){const t=Xi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _p(s,e){const t=Xi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xp(s,e){s.uniform1iv(this.addr,e)}function Mp(s,e){s.uniform2iv(this.addr,e)}function Sp(s,e){s.uniform3iv(this.addr,e)}function Ep(s,e){s.uniform4iv(this.addr,e)}function wp(s,e){s.uniform1uiv(this.addr,e)}function Tp(s,e){s.uniform2uiv(this.addr,e)}function bp(s,e){s.uniform3uiv(this.addr,e)}function Ap(s,e){s.uniform4uiv(this.addr,e)}function Rp(s,e,t){const n=this.cache,i=e.length,r=es(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Dl,r[a])}function Cp(s,e,t){const n=this.cache,i=e.length,r=es(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Nl,r[a])}function Pp(s,e,t){const n=this.cache,i=e.length,r=es(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Fl,r[a])}function Lp(s,e,t){const n=this.cache,i=e.length,r=es(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ul,r[a])}function Ip(s){switch(s){case 5126:return dp;case 35664:return pp;case 35665:return mp;case 35666:return vp;case 35674:return gp;case 35675:return yp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return Ep;case 5125:return wp;case 36294:return Tp;case 36295:return bp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}class Dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=fp(t.type)}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ip(t.type)}}class Np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function Po(s,e){s.seq.push(e),s.map[e.id]=e}function Fp(s,e,t){const n=s.name,i=n.length;for(Is.lastIndex=0;;){const r=Is.exec(n),a=Is.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===i){Po(t,h===void 0?new Dp(o,s,e):new Up(o,s,e));break}else{let c=t.map[o];c===void 0&&(c=new Np(o),Po(t,c)),t=c}}}class zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Fp(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Lo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Bp=0;function Op(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function zp(s){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(s);let n;switch(e===t?n="":e===Xr&&t===Wr?n="LinearDisplayP3ToLinearSRGB":e===Wr&&t===Xr&&(n="LinearSRGBToLinearDisplayP3"),s){case _n:case Jr:return[n,"LinearTransferOETF"];case Ct:case sa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Io(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Op(s.getShaderSource(e),a)}else return i}function Vp(s,e){const t=zp(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kp(s,e){let t;switch(e){case Fc:t="Linear";break;case Bc:t="Reinhard";break;case Oc:t="OptimizedCineon";break;case zc:t="ACESFilmic";break;case Vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tr).join(`
`)}function Gp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function tr(s){return s!==""}function Do(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function $s(s){return s.replace(Xp,Yp)}const qp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yp(s,e){let t=lt[e];if(t===void 0){const n=qp.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $s(t)}const jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function No(s){return s.replace(jp,Kp)}function Kp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function $p(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fi:case Bi:e="ENVMAP_TYPE_CUBE";break;case Zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Qp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kr:e="ENVMAP_BLENDING_MULTIPLY";break;case Uc:e="ENVMAP_BLENDING_MIX";break;case Nc:e="ENVMAP_BLENDING_ADD";break}return e}function em(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tm(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zp(t),h=$p(t),u=Jp(t),c=Qp(t),f=em(t),d=t.isWebGL2?"":Hp(t),v=Gp(r),g=i.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(tr).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(m=[Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[d,Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?lt.tonemapping_pars_fragment:"",t.toneMapping!==Wn?kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Vp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=$s(a),a=Do(a,t),a=Uo(a,t),o=$s(o),o=Do(o,t),o=Uo(o,t),a=No(a),o=No(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+a,x=_+p+o,E=Lo(i,i.VERTEX_SHADER,y),A=Lo(i,i.FRAGMENT_SHADER,x);if(i.attachShader(g,E),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(g).trim(),S=i.getShaderInfoLog(E).trim(),P=i.getShaderInfoLog(A).trim();let O=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,A);else{const I=Io(i,E,"vertex"),G=Io(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+I+`
`+G)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(S===""||P==="")&&(V=!1);V&&(this.diagnostics={runnable:O,programLog:M,vertexShader:{log:S,prefix:m},fragmentShader:{log:P,prefix:p}})}i.deleteShader(E),i.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new zr(i,g)),R};let C;return this.getAttributes=function(){return C===void 0&&(C=Wp(i,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}let nm=0;class im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rm(e),t.set(e,n)),n}}class rm{constructor(e){this.id=nm++,this.code=e,this.usedTimes=0}}function sm(s,e,t,n,i,r,a){const o=new Tl,l=new im,h=[],u=i.isWebGL2,c=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,S,P,O,V){const I=O.fog,G=V.geometry,$=M.isMeshStandardMaterial?O.environment:null,B=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),z=B&&B.mapping===Zr?B.image.height:null,Y=v[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const W=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,b=W!==void 0?W.length:0;let F=0;G.morphAttributes.position!==void 0&&(F=1),G.morphAttributes.normal!==void 0&&(F=2),G.morphAttributes.color!==void 0&&(F=3);let U,D,L,K;if(Y){const at=gn[Y];U=at.vertexShader,D=at.fragmentShader}else U=M.vertexShader,D=M.fragmentShader,l.update(M),L=l.getVertexShaderID(M),K=l.getFragmentShaderID(M);const se=s.getRenderTarget(),te=V.isInstancedMesh===!0,Q=!!M.map,he=!!M.matcap,ce=!!B,q=!!M.aoMap,Re=!!M.lightMap,de=!!M.bumpMap,ae=!!M.normalMap,oe=!!M.displacementMap,Ze=!!M.emissiveMap,Le=!!M.metalnessMap,He=!!M.roughnessMap,xe=M.anisotropy>0,Qe=M.clearcoat>0,it=M.iridescence>0,N=M.sheen>0,T=M.transmission>0,ee=xe&&!!M.anisotropyMap,me=Qe&&!!M.clearcoatMap,fe=Qe&&!!M.clearcoatNormalMap,ge=Qe&&!!M.clearcoatRoughnessMap,ke=it&&!!M.iridescenceMap,we=it&&!!M.iridescenceThicknessMap,Fe=N&&!!M.sheenColorMap,X=N&&!!M.sheenRoughnessMap,Me=!!M.specularMap,pe=!!M.specularColorMap,$e=!!M.specularIntensityMap,Ye=T&&!!M.transmissionMap,Ke=T&&!!M.thicknessMap,Ge=!!M.gradientMap,H=!!M.alphaMap,Ee=M.alphaTest>0,Se=!!M.alphaHash,Ae=!!M.extensions,Ce=!!G.attributes.uv1,ve=!!G.attributes.uv2,Xe=!!G.attributes.uv3;let Je=Wn;return M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Je=s.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:U,fragmentShader:D,defines:M.defines,customVertexShaderID:L,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:te,instancingColor:te&&V.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:_n,map:Q,matcap:he,envMap:ce,envMapMode:ce&&B.mapping,envMapCubeUVHeight:z,aoMap:q,lightMap:Re,bumpMap:de,normalMap:ae,displacementMap:f&&oe,emissiveMap:Ze,normalMapObjectSpace:ae&&M.normalMapType===eh,normalMapTangentSpace:ae&&M.normalMapType===$r,metalnessMap:Le,roughnessMap:He,anisotropy:xe,anisotropyMap:ee,clearcoat:Qe,clearcoatMap:me,clearcoatNormalMap:fe,clearcoatRoughnessMap:ge,iridescence:it,iridescenceMap:ke,iridescenceThicknessMap:we,sheen:N,sheenColorMap:Fe,sheenRoughnessMap:X,specularMap:Me,specularColorMap:pe,specularIntensityMap:$e,transmission:T,transmissionMap:Ye,thicknessMap:Ke,gradientMap:Ge,opaque:M.transparent===!1&&M.blending===Ui,alphaMap:H,alphaTest:Ee,alphaHash:Se,combine:M.combine,mapUv:Q&&g(M.map.channel),aoMapUv:q&&g(M.aoMap.channel),lightMapUv:Re&&g(M.lightMap.channel),bumpMapUv:de&&g(M.bumpMap.channel),normalMapUv:ae&&g(M.normalMap.channel),displacementMapUv:oe&&g(M.displacementMap.channel),emissiveMapUv:Ze&&g(M.emissiveMap.channel),metalnessMapUv:Le&&g(M.metalnessMap.channel),roughnessMapUv:He&&g(M.roughnessMap.channel),anisotropyMapUv:ee&&g(M.anisotropyMap.channel),clearcoatMapUv:me&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:we&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:X&&g(M.sheenRoughnessMap.channel),specularMapUv:Me&&g(M.specularMap.channel),specularColorMapUv:pe&&g(M.specularColorMap.channel),specularIntensityMapUv:$e&&g(M.specularIntensityMap.channel),transmissionMapUv:Ye&&g(M.transmissionMap.channel),thicknessMapUv:Ke&&g(M.thicknessMap.channel),alphaMapUv:H&&g(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ae||xe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:ve,vertexUv3s:Xe,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Q||H),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:F,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Q&&M.map.isVideoTexture===!0&&gt.getTransfer(M.map.colorSpace)===Mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pn,flipSided:M.side===Zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ae&&M.extensions.derivatives===!0,extensionFragDepth:Ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(_(S,M),y(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function x(M){const S=v[M.type];let P;if(S){const O=gn[S];P=Wh.clone(O.uniforms)}else P=M.uniforms;return P}function E(M,S){let P;for(let O=0,V=h.length;O<V;O++){const I=h[O];if(I.cacheKey===S){P=I,++P.usedTimes;break}}return P===void 0&&(P=new tm(s,S,M,r),h.push(P)),P}function A(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:C}}function am(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Bo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Oo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(c,f,d,v,g,m){let p=s[e];return p===void 0?(p={id:c.id,object:c,geometry:f,material:d,groupOrder:v,renderOrder:c.renderOrder,z:g,group:m},s[e]=p):(p.id=c.id,p.object=c,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=c.renderOrder,p.z=g,p.group=m),e++,p}function o(c,f,d,v,g,m){const p=a(c,f,d,v,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(c,f,d,v,g,m){const p=a(c,f,d,v,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function h(c,f){t.length>1&&t.sort(c||om),n.length>1&&n.sort(f||Bo),i.length>1&&i.sort(f||Bo)}function u(){for(let c=e,f=s.length;c<f;c++){const d=s[c];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:h}}function lm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Oo,s.set(n,[a])):i>=r.length?(a=new Oo,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function cm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new ot};break;case"SpotLight":t={position:new J,direction:new J,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function hm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let um=0;function fm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dm(s,e){const t=new cm,n=hm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new J);const r=new J,a=new et,o=new et;function l(u,c){let f=0,d=0,v=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,m=0,p=0,_=0,y=0,x=0,E=0,A=0,R=0,C=0,M=0;u.sort(fm);const S=c===!0?Math.PI:1;for(let O=0,V=u.length;O<V;O++){const I=u[O],G=I.color,$=I.intensity,B=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=G.r*$*S,d+=G.g*$*S,v+=G.b*$*S;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],$);M++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const W=I.shadow,b=n.get(I);b.shadowBias=W.bias,b.shadowNormalBias=W.normalBias,b.shadowRadius=W.radius,b.shadowMapSize=W.mapSize,i.directionalShadow[g]=b,i.directionalShadowMap[g]=z,i.directionalShadowMatrix[g]=I.shadow.matrix,x++}i.directional[g]=Y,g++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(G).multiplyScalar($*S),Y.distance=B,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[p]=Y;const W=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,W.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[p]=W.matrix,I.castShadow){const b=n.get(I);b.shadowBias=W.bias,b.shadowNormalBias=W.normalBias,b.shadowRadius=W.radius,b.shadowMapSize=W.mapSize,i.spotShadow[p]=b,i.spotShadowMap[p]=z,A++}p++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(G).multiplyScalar($),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[_]=Y,_++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*S),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const W=I.shadow,b=n.get(I);b.shadowBias=W.bias,b.shadowNormalBias=W.normalBias,b.shadowRadius=W.radius,b.shadowMapSize=W.mapSize,b.shadowCameraNear=W.camera.near,b.shadowCameraFar=W.camera.far,i.pointShadow[m]=b,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=I.shadow.matrix,E++}i.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar($*S),Y.groundColor.copy(I.groundColor).multiplyScalar($*S),i.hemi[y]=Y,y++}}_>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=v;const P=i.hash;(P.directionalLength!==g||P.pointLength!==m||P.spotLength!==p||P.rectAreaLength!==_||P.hemiLength!==y||P.numDirectionalShadows!==x||P.numPointShadows!==E||P.numSpotShadows!==A||P.numSpotMaps!==R||P.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=_,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,P.directionalLength=g,P.pointLength=m,P.spotLength=p,P.rectAreaLength=_,P.hemiLength=y,P.numDirectionalShadows=x,P.numPointShadows=E,P.numSpotShadows=A,P.numSpotMaps=R,P.numLightProbes=M,i.version=um++)}function h(u,c){let f=0,d=0,v=0,g=0,m=0;const p=c.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const x=u[_];if(x.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(x.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),v++}else if(x.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(x.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:h,state:i}}function zo(s,e){const t=new dm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(c){n.push(c)}function o(c){i.push(c)}function l(c){t.setup(n,c)}function h(c){t.setupView(n,c)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function pm(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new zo(s,e),t.set(r,[l])):a>=o.length?(l=new zo(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class mm extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vm extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _m(s,e,t){let n=new la;const i=new st,r=new st,a=new mt,o=new mm({depthPacking:Qc}),l=new vm,h={},u=t.maxTextureSize,c={[qn]:Zt,[Zt]:qn,[Pn]:Pn},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:gm,fragmentShader:ym}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new cn;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new mn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let p=this.type;this.render=function(E,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const C=s.getRenderTarget(),M=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Gn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const O=p!==Cn&&this.type===Cn,V=p===Cn&&this.type!==Cn;for(let I=0,G=E.length;I<G;I++){const $=E[I],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const z=B.getFrameExtents();if(i.multiply(z),r.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/z.x),i.x=r.x*z.x,B.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/z.y),i.y=r.y*z.y,B.mapSize.y=r.y)),B.map===null||O===!0||V===!0){const W=this.type!==Cn?{minFilter:zt,magFilter:zt}:{};B.map!==null&&B.map.dispose(),B.map=new oi(i.x,i.y,W),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const Y=B.getViewportCount();for(let W=0;W<Y;W++){const b=B.getViewport(W);a.set(r.x*b.x,r.y*b.y,r.x*b.z,r.y*b.w),P.viewport(a),B.updateMatrices($,W),n=B.getFrustum(),x(A,R,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===Cn&&_(B,R),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(C,M,S)};function _(E,A){const R=e.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new oi(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,R,f,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,R,d,g,null)}function y(E,A,R,C){let M=null;const S=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)M=S;else if(M=R.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const P=M.uuid,O=A.uuid;let V=h[P];V===void 0&&(V={},h[P]=V);let I=V[O];I===void 0&&(I=M.clone(),V[O]=I),M=I}if(M.visible=A.visible,M.wireframe=A.wireframe,C===Cn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:c[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=s.properties.get(M);P.light=R}return M}function x(E,A,R,C,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Cn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const O=e.update(E),V=E.material;if(Array.isArray(V)){const I=O.groups;for(let G=0,$=I.length;G<$;G++){const B=I[G],z=V[B.materialIndex];if(z&&z.visible){const Y=y(E,z,C,M);s.renderBufferDirect(R,null,O,Y,E,B)}}}else if(V.visible){const I=y(E,V,C,M);s.renderBufferDirect(R,null,O,I,E,null)}}const P=E.children;for(let O=0,V=P.length;O<V;O++)x(P[O],A,R,C,M)}}function xm(s,e,t){const n=t.isWebGL2;function i(){let H=!1;const Ee=new mt;let Se=null;const Ae=new mt(0,0,0,0);return{setMask:function(Ce){Se!==Ce&&!H&&(s.colorMask(Ce,Ce,Ce,Ce),Se=Ce)},setLocked:function(Ce){H=Ce},setClear:function(Ce,ve,Xe,Je,yt){yt===!0&&(Ce*=Je,ve*=Je,Xe*=Je),Ee.set(Ce,ve,Xe,Je),Ae.equals(Ee)===!1&&(s.clearColor(Ce,ve,Xe,Je),Ae.copy(Ee))},reset:function(){H=!1,Se=null,Ae.set(-1,0,0,0)}}}function r(){let H=!1,Ee=null,Se=null,Ae=null;return{setTest:function(Ce){Ce?se(s.DEPTH_TEST):te(s.DEPTH_TEST)},setMask:function(Ce){Ee!==Ce&&!H&&(s.depthMask(Ce),Ee=Ce)},setFunc:function(Ce){if(Se!==Ce){switch(Ce){case Ac:s.depthFunc(s.NEVER);break;case Rc:s.depthFunc(s.ALWAYS);break;case Cc:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case Pc:s.depthFunc(s.EQUAL);break;case Lc:s.depthFunc(s.GEQUAL);break;case Ic:s.depthFunc(s.GREATER);break;case Dc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Se=Ce}},setLocked:function(Ce){H=Ce},setClear:function(Ce){Ae!==Ce&&(s.clearDepth(Ce),Ae=Ce)},reset:function(){H=!1,Ee=null,Se=null,Ae=null}}}function a(){let H=!1,Ee=null,Se=null,Ae=null,Ce=null,ve=null,Xe=null,Je=null,yt=null;return{setTest:function(at){H||(at?se(s.STENCIL_TEST):te(s.STENCIL_TEST))},setMask:function(at){Ee!==at&&!H&&(s.stencilMask(at),Ee=at)},setFunc:function(at,le,ue){(Se!==at||Ae!==le||Ce!==ue)&&(s.stencilFunc(at,le,ue),Se=at,Ae=le,Ce=ue)},setOp:function(at,le,ue){(ve!==at||Xe!==le||Je!==ue)&&(s.stencilOp(at,le,ue),ve=at,Xe=le,Je=ue)},setLocked:function(at){H=at},setClear:function(at){yt!==at&&(s.clearStencil(at),yt=at)},reset:function(){H=!1,Ee=null,Se=null,Ae=null,Ce=null,ve=null,Xe=null,Je=null,yt=null}}}const o=new i,l=new r,h=new a,u=new WeakMap,c=new WeakMap;let f={},d={},v=new WeakMap,g=[],m=null,p=!1,_=null,y=null,x=null,E=null,A=null,R=null,C=null,M=!1,S=null,P=null,O=null,V=null,I=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,B=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),$=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),$=B>=2);let Y=null,W={};const b=s.getParameter(s.SCISSOR_BOX),F=s.getParameter(s.VIEWPORT),U=new mt().fromArray(b),D=new mt().fromArray(F);function L(H,Ee,Se,Ae){const Ce=new Uint8Array(4),ve=s.createTexture();s.bindTexture(H,ve),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<Se;Xe++)n&&(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ee,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Ee+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return ve}const K={};K[s.TEXTURE_2D]=L(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=L(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(K[s.TEXTURE_2D_ARRAY]=L(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=L(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),se(s.DEPTH_TEST),l.setFunc(Xs),oe(!1),Ze(ya),se(s.CULL_FACE),de(Gn);function se(H){f[H]!==!0&&(s.enable(H),f[H]=!0)}function te(H){f[H]!==!1&&(s.disable(H),f[H]=!1)}function Q(H,Ee){return d[H]!==Ee?(s.bindFramebuffer(H,Ee),d[H]=Ee,n&&(H===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Ee),H===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function he(H,Ee){let Se=g,Ae=!1;if(H)if(Se=v.get(Ee),Se===void 0&&(Se=[],v.set(Ee,Se)),H.isWebGLMultipleRenderTargets){const Ce=H.texture;if(Se.length!==Ce.length||Se[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Xe=Ce.length;ve<Xe;ve++)Se[ve]=s.COLOR_ATTACHMENT0+ve;Se.length=Ce.length,Ae=!0}}else Se[0]!==s.COLOR_ATTACHMENT0&&(Se[0]=s.COLOR_ATTACHMENT0,Ae=!0);else Se[0]!==s.BACK&&(Se[0]=s.BACK,Ae=!0);Ae&&(t.isWebGL2?s.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function ce(H){return m!==H?(s.useProgram(H),m=H,!0):!1}const q={[Pi]:s.FUNC_ADD,[vc]:s.FUNC_SUBTRACT,[gc]:s.FUNC_REVERSE_SUBTRACT};if(n)q[Sa]=s.MIN,q[Ea]=s.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(q[Sa]=H.MIN_EXT,q[Ea]=H.MAX_EXT)}const Re={[yc]:s.ZERO,[_c]:s.ONE,[xc]:s.SRC_COLOR,[hl]:s.SRC_ALPHA,[bc]:s.SRC_ALPHA_SATURATE,[wc]:s.DST_COLOR,[Sc]:s.DST_ALPHA,[Mc]:s.ONE_MINUS_SRC_COLOR,[ul]:s.ONE_MINUS_SRC_ALPHA,[Tc]:s.ONE_MINUS_DST_COLOR,[Ec]:s.ONE_MINUS_DST_ALPHA};function de(H,Ee,Se,Ae,Ce,ve,Xe,Je){if(H===Gn){p===!0&&(te(s.BLEND),p=!1);return}if(p===!1&&(se(s.BLEND),p=!0),H!==mc){if(H!==_||Je!==M){if((y!==Pi||A!==Pi)&&(s.blendEquation(s.FUNC_ADD),y=Pi,A=Pi),Je)switch(H){case Ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _a:s.blendFunc(s.ONE,s.ONE);break;case xa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ma:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _a:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case xa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ma:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}x=null,E=null,R=null,C=null,_=H,M=Je}return}Ce=Ce||Ee,ve=ve||Se,Xe=Xe||Ae,(Ee!==y||Ce!==A)&&(s.blendEquationSeparate(q[Ee],q[Ce]),y=Ee,A=Ce),(Se!==x||Ae!==E||ve!==R||Xe!==C)&&(s.blendFuncSeparate(Re[Se],Re[Ae],Re[ve],Re[Xe]),x=Se,E=Ae,R=ve,C=Xe),_=H,M=!1}function ae(H,Ee){H.side===Pn?te(s.CULL_FACE):se(s.CULL_FACE);let Se=H.side===Zt;Ee&&(Se=!Se),oe(Se),H.blending===Ui&&H.transparent===!1?de(Gn):de(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),o.setMask(H.colorWrite);const Ae=H.stencilWrite;h.setTest(Ae),Ae&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),He(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):te(s.SAMPLE_ALPHA_TO_COVERAGE)}function oe(H){S!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),S=H)}function Ze(H){H!==fc?(se(s.CULL_FACE),H!==P&&(H===ya?s.cullFace(s.BACK):H===dc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):te(s.CULL_FACE),P=H}function Le(H){H!==O&&($&&s.lineWidth(H),O=H)}function He(H,Ee,Se){H?(se(s.POLYGON_OFFSET_FILL),(V!==Ee||I!==Se)&&(s.polygonOffset(Ee,Se),V=Ee,I=Se)):te(s.POLYGON_OFFSET_FILL)}function xe(H){H?se(s.SCISSOR_TEST):te(s.SCISSOR_TEST)}function Qe(H){H===void 0&&(H=s.TEXTURE0+G-1),Y!==H&&(s.activeTexture(H),Y=H)}function it(H,Ee,Se){Se===void 0&&(Y===null?Se=s.TEXTURE0+G-1:Se=Y);let Ae=W[Se];Ae===void 0&&(Ae={type:void 0,texture:void 0},W[Se]=Ae),(Ae.type!==H||Ae.texture!==Ee)&&(Y!==Se&&(s.activeTexture(Se),Y=Se),s.bindTexture(H,Ee||K[H]),Ae.type=H,Ae.texture=Ee)}function N(){const H=W[Y];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function X(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(H){U.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),U.copy(H))}function $e(H){D.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),D.copy(H))}function Ye(H,Ee){let Se=c.get(Ee);Se===void 0&&(Se=new WeakMap,c.set(Ee,Se));let Ae=Se.get(H);Ae===void 0&&(Ae=s.getUniformBlockIndex(Ee,H.name),Se.set(H,Ae))}function Ke(H,Ee){const Ae=c.get(Ee).get(H);u.get(Ee)!==Ae&&(s.uniformBlockBinding(Ee,Ae,H.__bindingPointIndex),u.set(Ee,Ae))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Y=null,W={},d={},v=new WeakMap,g=[],m=null,p=!1,_=null,y=null,x=null,E=null,A=null,R=null,C=null,M=!1,S=null,P=null,O=null,V=null,I=null,U.set(0,0,s.canvas.width,s.canvas.height),D.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:se,disable:te,bindFramebuffer:Q,drawBuffers:he,useProgram:ce,setBlending:de,setMaterial:ae,setFlipSided:oe,setCullFace:Ze,setLineWidth:Le,setPolygonOffset:He,setScissorTest:xe,activeTexture:Qe,bindTexture:it,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:ee,texImage2D:X,texImage3D:Me,updateUBOMapping:Ye,uniformBlockBinding:Ke,texStorage2D:we,texStorage3D:Fe,texSubImage2D:me,texSubImage3D:fe,compressedTexSubImage2D:ge,compressedTexSubImage3D:ke,scissor:pe,viewport:$e,reset:Ge}}function Mm(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,h=i.maxCubemapSize,u=i.maxTextureSize,c=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,T){return p?new OffscreenCanvas(N,T):ar("canvas")}function y(N,T,ee,me){let fe=1;if((N.width>me||N.height>me)&&(fe=me/Math.max(N.width,N.height)),fe<1||T===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const ge=T?Yr:Math.floor,ke=ge(fe*N.width),we=ge(fe*N.height);g===void 0&&(g=_(ke,we));const Fe=ee?_(ke,we):g;return Fe.width=ke,Fe.height=we,Fe.getContext("2d").drawImage(N,0,0,ke,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+ke+"x"+we+")."),Fe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function x(N){return Ks(N.width)&&Ks(N.height)}function E(N){return o?!1:N.wrapS!==jt||N.wrapT!==jt||N.minFilter!==zt&&N.minFilter!==Vt}function A(N,T){return N.generateMipmaps&&T&&N.minFilter!==zt&&N.minFilter!==Vt}function R(N){s.generateMipmap(N)}function C(N,T,ee,me,fe=!1){if(o===!1)return T;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ge=T;if(T===s.RED&&(ee===s.FLOAT&&(ge=s.R32F),ee===s.HALF_FLOAT&&(ge=s.R16F),ee===s.UNSIGNED_BYTE&&(ge=s.R8)),T===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ge=s.R8UI),ee===s.UNSIGNED_SHORT&&(ge=s.R16UI),ee===s.UNSIGNED_INT&&(ge=s.R32UI),ee===s.BYTE&&(ge=s.R8I),ee===s.SHORT&&(ge=s.R16I),ee===s.INT&&(ge=s.R32I)),T===s.RG&&(ee===s.FLOAT&&(ge=s.RG32F),ee===s.HALF_FLOAT&&(ge=s.RG16F),ee===s.UNSIGNED_BYTE&&(ge=s.RG8)),T===s.RGBA){const ke=fe?Gr:gt.getTransfer(me);ee===s.FLOAT&&(ge=s.RGBA32F),ee===s.HALF_FLOAT&&(ge=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(ge=ke===Mt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function M(N,T,ee){return A(N,ee)===!0||N.isFramebufferTexture&&N.minFilter!==zt&&N.minFilter!==Vt?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function S(N){return N===zt||N===wa||N===ss?s.NEAREST:s.LINEAR}function P(N){const T=N.target;T.removeEventListener("dispose",P),V(T),T.isVideoTexture&&v.delete(T)}function O(N){const T=N.target;T.removeEventListener("dispose",O),G(T)}function V(N){const T=n.get(N);if(T.__webglInit===void 0)return;const ee=N.source,me=m.get(ee);if(me){const fe=me[T.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&I(N),Object.keys(me).length===0&&m.delete(ee)}n.remove(N)}function I(N){const T=n.get(N);s.deleteTexture(T.__webglTexture);const ee=N.source,me=m.get(ee);delete me[T.__cacheKey],a.memory.textures--}function G(N){const T=N.texture,ee=n.get(N),me=n.get(T);if(me.__webglTexture!==void 0&&(s.deleteTexture(me.__webglTexture),a.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(ee.__webglFramebuffer[fe]))for(let ge=0;ge<ee.__webglFramebuffer[fe].length;ge++)s.deleteFramebuffer(ee.__webglFramebuffer[fe][ge]);else s.deleteFramebuffer(ee.__webglFramebuffer[fe]);ee.__webglDepthbuffer&&s.deleteRenderbuffer(ee.__webglDepthbuffer[fe])}else{if(Array.isArray(ee.__webglFramebuffer))for(let fe=0;fe<ee.__webglFramebuffer.length;fe++)s.deleteFramebuffer(ee.__webglFramebuffer[fe]);else s.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&s.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let fe=0;fe<ee.__webglColorRenderbuffer.length;fe++)ee.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(ee.__webglColorRenderbuffer[fe]);ee.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let fe=0,ge=T.length;fe<ge;fe++){const ke=n.get(T[fe]);ke.__webglTexture&&(s.deleteTexture(ke.__webglTexture),a.memory.textures--),n.remove(T[fe])}n.remove(T),n.remove(N)}let $=0;function B(){$=0}function z(){const N=$;return N>=l&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l),$+=1,N}function Y(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function W(N,T){const ee=n.get(N);if(N.isVideoTexture&&Qe(N),N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){const me=N.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ee,N,T);return}}t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+T)}function b(N,T){const ee=n.get(N);if(N.version>0&&ee.__version!==N.version){Q(ee,N,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+T)}function F(N,T){const ee=n.get(N);if(N.version>0&&ee.__version!==N.version){Q(ee,N,T);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+T)}function U(N,T){const ee=n.get(N);if(N.version>0&&ee.__version!==N.version){he(ee,N,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+T)}const D={[ai]:s.REPEAT,[jt]:s.CLAMP_TO_EDGE,[Ys]:s.MIRRORED_REPEAT},L={[zt]:s.NEAREST,[wa]:s.NEAREST_MIPMAP_NEAREST,[ss]:s.NEAREST_MIPMAP_LINEAR,[Vt]:s.LINEAR,[kc]:s.LINEAR_MIPMAP_NEAREST,[Oi]:s.LINEAR_MIPMAP_LINEAR},K={[nh]:s.NEVER,[ch]:s.ALWAYS,[ih]:s.LESS,[sh]:s.LEQUAL,[rh]:s.EQUAL,[lh]:s.GEQUAL,[ah]:s.GREATER,[oh]:s.NOTEQUAL};function se(N,T,ee){if(ee?(s.texParameteri(N,s.TEXTURE_WRAP_S,D[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,D[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,D[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,L[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,L[T.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==jt||T.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,S(T.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,S(T.minFilter)),T.minFilter!==zt&&T.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===zt||T.minFilter!==ss&&T.minFilter!==Oi||T.type===an&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===In&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(N,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function te(N,T){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",P));const me=T.source;let fe=m.get(me);fe===void 0&&(fe={},m.set(me,fe));const ge=Y(T);if(ge!==N.__cacheKey){fe[ge]===void 0&&(fe[ge]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),fe[ge].usedTimes++;const ke=fe[N.__cacheKey];ke!==void 0&&(fe[N.__cacheKey].usedTimes--,ke.usedTimes===0&&I(T)),N.__cacheKey=ge,N.__webglTexture=fe[ge].texture}return ee}function Q(N,T,ee){let me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=s.TEXTURE_3D);const fe=te(N,T),ge=T.source;t.bindTexture(me,N.__webglTexture,s.TEXTURE0+ee);const ke=n.get(ge);if(ge.version!==ke.__version||fe===!0){t.activeTexture(s.TEXTURE0+ee);const we=gt.getPrimaries(gt.workingColorSpace),Fe=T.colorSpace===rn?null:gt.getPrimaries(T.colorSpace),X=T.colorSpace===rn||we===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const Me=E(T)&&x(T.image)===!1;let pe=y(T.image,Me,!1,u);pe=it(T,pe);const $e=x(pe)||o,Ye=r.convert(T.format,T.colorSpace);let Ke=r.convert(T.type),Ge=C(T.internalFormat,Ye,Ke,T.colorSpace,T.isVideoTexture);se(me,T,$e);let H;const Ee=T.mipmaps,Se=o&&T.isVideoTexture!==!0,Ae=ke.__version===void 0||fe===!0,Ce=M(T,pe,$e);if(T.isDepthTexture)Ge=s.DEPTH_COMPONENT,o?T.type===an?Ge=s.DEPTH_COMPONENT32F:T.type===kn?Ge=s.DEPTH_COMPONENT24:T.type===ii?Ge=s.DEPTH24_STENCIL8:Ge=s.DEPTH_COMPONENT16:T.type===an&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ri&&Ge===s.DEPTH_COMPONENT&&T.type!==ra&&T.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=kn,Ke=r.convert(T.type)),T.format===zi&&Ge===s.DEPTH_COMPONENT&&(Ge=s.DEPTH_STENCIL,T.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ii,Ke=r.convert(T.type))),Ae&&(Se?t.texStorage2D(s.TEXTURE_2D,1,Ge,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,Ge,pe.width,pe.height,0,Ye,Ke,null));else if(T.isDataTexture)if(Ee.length>0&&$e){Se&&Ae&&t.texStorage2D(s.TEXTURE_2D,Ce,Ge,Ee[0].width,Ee[0].height);for(let ve=0,Xe=Ee.length;ve<Xe;ve++)H=Ee[ve],Se?t.texSubImage2D(s.TEXTURE_2D,ve,0,0,H.width,H.height,Ye,Ke,H.data):t.texImage2D(s.TEXTURE_2D,ve,Ge,H.width,H.height,0,Ye,Ke,H.data);T.generateMipmaps=!1}else Se?(Ae&&t.texStorage2D(s.TEXTURE_2D,Ce,Ge,pe.width,pe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe.width,pe.height,Ye,Ke,pe.data)):t.texImage2D(s.TEXTURE_2D,0,Ge,pe.width,pe.height,0,Ye,Ke,pe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Se&&Ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ge,Ee[0].width,Ee[0].height,pe.depth);for(let ve=0,Xe=Ee.length;ve<Xe;ve++)H=Ee[ve],T.format!==nn?Ye!==null?Se?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,H.width,H.height,pe.depth,Ye,H.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Ge,H.width,H.height,pe.depth,0,H.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,H.width,H.height,pe.depth,Ye,Ke,H.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,Ge,H.width,H.height,pe.depth,0,Ye,Ke,H.data)}else{Se&&Ae&&t.texStorage2D(s.TEXTURE_2D,Ce,Ge,Ee[0].width,Ee[0].height);for(let ve=0,Xe=Ee.length;ve<Xe;ve++)H=Ee[ve],T.format!==nn?Ye!==null?Se?t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,H.width,H.height,Ye,H.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,Ge,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage2D(s.TEXTURE_2D,ve,0,0,H.width,H.height,Ye,Ke,H.data):t.texImage2D(s.TEXTURE_2D,ve,Ge,H.width,H.height,0,Ye,Ke,H.data)}else if(T.isDataArrayTexture)Se?(Ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ge,pe.width,pe.height,pe.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ye,Ke,pe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,pe.width,pe.height,pe.depth,0,Ye,Ke,pe.data);else if(T.isData3DTexture)Se?(Ae&&t.texStorage3D(s.TEXTURE_3D,Ce,Ge,pe.width,pe.height,pe.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ye,Ke,pe.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,pe.width,pe.height,pe.depth,0,Ye,Ke,pe.data);else if(T.isFramebufferTexture){if(Ae)if(Se)t.texStorage2D(s.TEXTURE_2D,Ce,Ge,pe.width,pe.height);else{let ve=pe.width,Xe=pe.height;for(let Je=0;Je<Ce;Je++)t.texImage2D(s.TEXTURE_2D,Je,Ge,ve,Xe,0,Ye,Ke,null),ve>>=1,Xe>>=1}}else if(Ee.length>0&&$e){Se&&Ae&&t.texStorage2D(s.TEXTURE_2D,Ce,Ge,Ee[0].width,Ee[0].height);for(let ve=0,Xe=Ee.length;ve<Xe;ve++)H=Ee[ve],Se?t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ye,Ke,H):t.texImage2D(s.TEXTURE_2D,ve,Ge,Ye,Ke,H);T.generateMipmaps=!1}else Se?(Ae&&t.texStorage2D(s.TEXTURE_2D,Ce,Ge,pe.width,pe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ye,Ke,pe)):t.texImage2D(s.TEXTURE_2D,0,Ge,Ye,Ke,pe);A(T,$e)&&R(me),ke.__version=ge.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function he(N,T,ee){if(T.image.length!==6)return;const me=te(N,T),fe=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ee);const ge=n.get(fe);if(fe.version!==ge.__version||me===!0){t.activeTexture(s.TEXTURE0+ee);const ke=gt.getPrimaries(gt.workingColorSpace),we=T.colorSpace===rn?null:gt.getPrimaries(T.colorSpace),Fe=T.colorSpace===rn||ke===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const X=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let ve=0;ve<6;ve++)!X&&!Me?pe[ve]=y(T.image[ve],!1,!0,h):pe[ve]=Me?T.image[ve].image:T.image[ve],pe[ve]=it(T,pe[ve]);const $e=pe[0],Ye=x($e)||o,Ke=r.convert(T.format,T.colorSpace),Ge=r.convert(T.type),H=C(T.internalFormat,Ke,Ge,T.colorSpace),Ee=o&&T.isVideoTexture!==!0,Se=ge.__version===void 0||me===!0;let Ae=M(T,$e,Ye);se(s.TEXTURE_CUBE_MAP,T,Ye);let Ce;if(X){Ee&&Se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,H,$e.width,$e.height);for(let ve=0;ve<6;ve++){Ce=pe[ve].mipmaps;for(let Xe=0;Xe<Ce.length;Xe++){const Je=Ce[Xe];T.format!==nn?Ke!==null?Ee?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,Je.width,Je.height,Ke,Je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,H,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,Je.width,Je.height,Ke,Ge,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,H,Je.width,Je.height,0,Ke,Ge,Je.data)}}}else{Ce=T.mipmaps,Ee&&Se&&(Ce.length>0&&Ae++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,H,pe[0].width,pe[0].height));for(let ve=0;ve<6;ve++)if(Me){Ee?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,pe[ve].width,pe[ve].height,Ke,Ge,pe[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,H,pe[ve].width,pe[ve].height,0,Ke,Ge,pe[ve].data);for(let Xe=0;Xe<Ce.length;Xe++){const yt=Ce[Xe].image[ve].image;Ee?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,yt.width,yt.height,Ke,Ge,yt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,H,yt.width,yt.height,0,Ke,Ge,yt.data)}}else{Ee?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ke,Ge,pe[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,H,Ke,Ge,pe[ve]);for(let Xe=0;Xe<Ce.length;Xe++){const Je=Ce[Xe];Ee?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,Ke,Ge,Je.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,H,Ke,Ge,Je.image[ve])}}}A(T,Ye)&&R(s.TEXTURE_CUBE_MAP),ge.__version=fe.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ce(N,T,ee,me,fe,ge){const ke=r.convert(ee.format,ee.colorSpace),we=r.convert(ee.type),Fe=C(ee.internalFormat,ke,we,ee.colorSpace);if(!n.get(T).__hasExternalTextures){const Me=Math.max(1,T.width>>ge),pe=Math.max(1,T.height>>ge);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,ge,Fe,Me,pe,T.depth,0,ke,we,null):t.texImage2D(fe,ge,Fe,Me,pe,0,ke,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),xe(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,fe,n.get(ee).__webglTexture,0,He(T)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,fe,n.get(ee).__webglTexture,ge),t.bindFramebuffer(s.FRAMEBUFFER,null)}function q(N,T,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer&&!T.stencilBuffer){let me=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(ee||xe(T)){const fe=T.depthTexture;fe&&fe.isDepthTexture&&(fe.type===an?me=s.DEPTH_COMPONENT32F:fe.type===kn&&(me=s.DEPTH_COMPONENT24));const ge=He(T);xe(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,me,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,me,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,me,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(T.depthBuffer&&T.stencilBuffer){const me=He(T);ee&&xe(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,T.width,T.height):xe(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{const me=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let fe=0;fe<me.length;fe++){const ge=me[fe],ke=r.convert(ge.format,ge.colorSpace),we=r.convert(ge.type),Fe=C(ge.internalFormat,ke,we,ge.colorSpace),X=He(T);ee&&xe(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,X,Fe,T.width,T.height):xe(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X,Fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const me=n.get(T.depthTexture).__webglTexture,fe=He(T);if(T.depthTexture.format===ri)xe(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(T.depthTexture.format===zi)xe(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function de(N){const T=n.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Re(T.__webglFramebuffer,N)}else if(ee){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]=s.createRenderbuffer(),q(T.__webglDepthbuffer[me],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),q(T.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(N,T,ee){const me=n.get(N);T!==void 0&&ce(me.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&de(N)}function oe(N){const T=N.texture,ee=n.get(N),me=n.get(T);N.addEventListener("dispose",O),N.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=T.version,a.memory.textures++);const fe=N.isWebGLCubeRenderTarget===!0,ge=N.isWebGLMultipleRenderTargets===!0,ke=x(N)||o;if(fe){ee.__webglFramebuffer=[];for(let we=0;we<6;we++)if(o&&T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[we]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)ee.__webglFramebuffer[we][Fe]=s.createFramebuffer()}else ee.__webglFramebuffer[we]=s.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)ee.__webglFramebuffer[we]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(ge)if(i.drawBuffers){const we=N.texture;for(let Fe=0,X=we.length;Fe<X;Fe++){const Me=n.get(we[Fe]);Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&N.samples>0&&xe(N)===!1){const we=ge?T:[T];ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Fe=0;Fe<we.length;Fe++){const X=we[Fe];ee.__webglColorRenderbuffer[Fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Fe]);const Me=r.convert(X.format,X.colorSpace),pe=r.convert(X.type),$e=C(X.internalFormat,Me,pe,X.colorSpace,N.isXRRenderTarget===!0),Ye=He(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,$e,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),q(ee.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),se(s.TEXTURE_CUBE_MAP,T,ke);for(let we=0;we<6;we++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ce(ee.__webglFramebuffer[we][Fe],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Fe);else ce(ee.__webglFramebuffer[we],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);A(T,ke)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){const we=N.texture;for(let Fe=0,X=we.length;Fe<X;Fe++){const Me=we[Fe],pe=n.get(Me);t.bindTexture(s.TEXTURE_2D,pe.__webglTexture),se(s.TEXTURE_2D,Me,ke),ce(ee.__webglFramebuffer,N,Me,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,0),A(Me,ke)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(o?we=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,me.__webglTexture),se(we,T,ke),o&&T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ce(ee.__webglFramebuffer[Fe],N,T,s.COLOR_ATTACHMENT0,we,Fe);else ce(ee.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,we,0);A(T,ke)&&R(we),t.unbindTexture()}N.depthBuffer&&de(N)}function Ze(N){const T=x(N)||o,ee=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let me=0,fe=ee.length;me<fe;me++){const ge=ee[me];if(A(ge,T)){const ke=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,we=n.get(ge).__webglTexture;t.bindTexture(ke,we),R(ke),t.unbindTexture()}}}function Le(N){if(o&&N.samples>0&&xe(N)===!1){const T=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ee=N.width,me=N.height;let fe=s.COLOR_BUFFER_BIT;const ge=[],ke=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(N),Fe=N.isWebGLMultipleRenderTargets===!0;if(Fe)for(let X=0;X<T.length;X++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let X=0;X<T.length;X++){ge.push(s.COLOR_ATTACHMENT0+X),N.depthBuffer&&ge.push(ke);const Me=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(Me===!1&&(N.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),Fe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[X]),Me===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ke]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ke])),Fe){const pe=n.get(T[X]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pe,0)}s.blitFramebuffer(0,0,ee,me,0,0,ee,me,fe,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Fe)for(let X=0;X<T.length;X++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,we.__webglColorRenderbuffer[X]);const Me=n.get(T[X]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.TEXTURE_2D,Me,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function He(N){return Math.min(c,N.samples)}function xe(N){const T=n.get(N);return o&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Qe(N){const T=a.render.frame;v.get(N)!==T&&(v.set(N,T),N.update())}function it(N,T){const ee=N.colorSpace,me=N.format,fe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===js||ee!==_n&&ee!==rn&&(gt.getTransfer(ee)===Mt?o===!1?e.has("EXT_sRGB")===!0&&me===nn?(N.format=js,N.minFilter=Vt,N.generateMipmaps=!1):T=Sl.sRGBToLinear(T):(me!==nn||fe!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),T}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=b,this.setTexture3D=F,this.setTextureCube=U,this.rebindTextures=ae,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=xe}function Sm(s,e,t){const n=t.isWebGL2;function i(r,a=rn){let o;const l=gt.getTransfer(a);if(r===Xn)return s.UNSIGNED_BYTE;if(r===pl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ml)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Hc)return s.BYTE;if(r===Gc)return s.SHORT;if(r===ra)return s.UNSIGNED_SHORT;if(r===dl)return s.INT;if(r===kn)return s.UNSIGNED_INT;if(r===an)return s.FLOAT;if(r===In)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Wc)return s.ALPHA;if(r===nn)return s.RGBA;if(r===Xc)return s.LUMINANCE;if(r===qc)return s.LUMINANCE_ALPHA;if(r===ri)return s.DEPTH_COMPONENT;if(r===zi)return s.DEPTH_STENCIL;if(r===js)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Yc)return s.RED;if(r===vl)return s.RED_INTEGER;if(r===jc)return s.RG;if(r===gl)return s.RG_INTEGER;if(r===yl)return s.RGBA_INTEGER;if(r===as||r===os||r===ls||r===cs)if(l===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===as)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===as)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===os)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ls)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ta||r===ba||r===Aa||r===Ra)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ta)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ba)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Aa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ra)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ca||r===Pa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ca)return l===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Pa)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===La||r===Ia||r===Da||r===Ua||r===Na||r===Fa||r===Ba||r===Oa||r===za||r===Va||r===ka||r===Ha||r===Ga||r===Wa)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===La)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ia)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Da)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ua)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Na)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fa)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ba)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Oa)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===za)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Va)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ka)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ha)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ga)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wa)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hs||r===Xa||r===qa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===hs)return l===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zc||r===Ya||r===ja||r===Ka)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===hs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ya)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ja)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ka)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ii?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Em extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Di extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wm={type:"move"};class Ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,v=.005;h.inputState.pinching&&f>d+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=d-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tm extends Ht{constructor(e,t,n,i,r,a,o,l,h,u){if(u=u!==void 0?u:ri,u!==ri&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ri&&(n=kn),n===void 0&&u===zi&&(n=ii),super(null,i,r,a,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bm extends ci{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,h=null,u=null,c=null,f=null,d=null,v=null;const g=t.getContextAttributes();let m=null,p=null;const _=[],y=[],x=new Yt;x.layers.enable(1),x.viewport=new mt;const E=new Yt;E.layers.enable(2),E.viewport=new mt;const A=[x,E],R=new Em;R.layers.enable(1),R.layers.enable(2);let C=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let F=_[b];return F===void 0&&(F=new Ds,_[b]=F),F.getTargetRaySpace()},this.getControllerGrip=function(b){let F=_[b];return F===void 0&&(F=new Ds,_[b]=F),F.getGripSpace()},this.getHand=function(b){let F=_[b];return F===void 0&&(F=new Ds,_[b]=F),F.getHandSpace()};function S(b){const F=y.indexOf(b.inputSource);if(F===-1)return;const U=_[F];U!==void 0&&(U.update(b.inputSource,b.frame,h||a),U.dispatchEvent({type:b.type,data:b.inputSource}))}function P(){i.removeEventListener("select",S),i.removeEventListener("selectstart",S),i.removeEventListener("selectend",S),i.removeEventListener("squeeze",S),i.removeEventListener("squeezestart",S),i.removeEventListener("squeezeend",S),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",O);for(let b=0;b<_.length;b++){const F=y[b];F!==null&&(y[b]=null,_[b].disconnect(F))}C=null,M=null,e.setRenderTarget(m),d=null,f=null,c=null,i=null,p=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){r=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(b){h=b},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(b){if(i=b,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",S),i.addEventListener("selectstart",S),i.addEventListener("selectend",S),i.addEventListener("squeeze",S),i.addEventListener("squeezestart",S),i.addEventListener("squeezeend",S),i.addEventListener("end",P),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,F),i.updateRenderState({baseLayer:d}),p=new oi(d.framebufferWidth,d.framebufferHeight,{format:nn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let F=null,U=null,D=null;g.depth&&(D=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=g.stencil?zi:ri,U=g.stencil?ii:kn);const L={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};c=new XRWebGLBinding(i,t),f=c.createProjectionLayer(L),i.updateRenderState({layers:[f]}),p=new oi(f.textureWidth,f.textureHeight,{format:nn,type:Xn,depthTexture:new Tm(f.textureWidth,f.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const K=e.properties.get(p);K.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await i.requestReferenceSpace(o),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(b){for(let F=0;F<b.removed.length;F++){const U=b.removed[F],D=y.indexOf(U);D>=0&&(y[D]=null,_[D].disconnect(U))}for(let F=0;F<b.added.length;F++){const U=b.added[F];let D=y.indexOf(U);if(D===-1){for(let K=0;K<_.length;K++)if(K>=y.length){y.push(U),D=K;break}else if(y[K]===null){y[K]=U,D=K;break}if(D===-1)break}const L=_[D];L&&L.connect(U)}}const V=new J,I=new J;function G(b,F,U){V.setFromMatrixPosition(F.matrixWorld),I.setFromMatrixPosition(U.matrixWorld);const D=V.distanceTo(I),L=F.projectionMatrix.elements,K=U.projectionMatrix.elements,se=L[14]/(L[10]-1),te=L[14]/(L[10]+1),Q=(L[9]+1)/L[5],he=(L[9]-1)/L[5],ce=(L[8]-1)/L[0],q=(K[8]+1)/K[0],Re=se*ce,de=se*q,ae=D/(-ce+q),oe=ae*-ce;F.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(oe),b.translateZ(ae),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Ze=se+ae,Le=te+ae,He=Re-oe,xe=de+(D-oe),Qe=Q*te/Le*Ze,it=he*te/Le*Ze;b.projectionMatrix.makePerspective(He,xe,Qe,it,Ze,Le),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function $(b,F){F===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(F.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(i===null)return;R.near=E.near=x.near=b.near,R.far=E.far=x.far=b.far,(C!==R.near||M!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),C=R.near,M=R.far);const F=b.parent,U=R.cameras;$(R,F);for(let D=0;D<U.length;D++)$(U[D],F);U.length===2?G(R,x,E):R.projectionMatrix.copy(x.projectionMatrix),B(b,R,F)};function B(b,F,U){U===null?b.matrix.copy(F.matrixWorld):(b.matrix.copy(U.matrixWorld),b.matrix.invert(),b.matrix.multiply(F.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(F.projectionMatrix),b.projectionMatrixInverse.copy(F.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=Vi*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(b){l=b,f!==null&&(f.fixedFoveation=b),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=b)};let z=null;function Y(b,F){if(u=F.getViewerPose(h||a),v=F,u!==null){const U=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let D=!1;U.length!==R.cameras.length&&(R.cameras.length=0,D=!0);for(let L=0;L<U.length;L++){const K=U[L];let se=null;if(d!==null)se=d.getViewport(K);else{const Q=c.getViewSubImage(f,K);se=Q.viewport,L===0&&(e.setRenderTargetTextures(p,Q.colorTexture,f.ignoreDepthValues?void 0:Q.depthStencilTexture),e.setRenderTarget(p))}let te=A[L];te===void 0&&(te=new Yt,te.layers.enable(L),te.viewport=new mt,A[L]=te),te.matrix.fromArray(K.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(K.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(se.x,se.y,se.width,se.height),L===0&&(R.matrix.copy(te.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),D===!0&&R.cameras.push(te)}}for(let U=0;U<_.length;U++){const D=y[U],L=_[U];D!==null&&L!==void 0&&L.update(D,F,h||a)}z&&z(b,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),v=null}const W=new Il;W.setAnimationLoop(Y),this.setAnimationLoop=function(b){z=b},this.dispose=function(){}}}function Am(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),c(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Rm(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function h(_,y){let x=i[_.id];x===void 0&&(v(_),x=u(_),i[_.id]=x,_.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(_,E);const A=e.render.frame;r[_.id]!==A&&(f(_),r[_.id]=A)}function u(_){const y=c();_.__bindingPointIndex=y;const x=s.createBuffer(),E=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function c(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=i[_.id],x=_.uniforms,E=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,R=x.length;A<R;A++){const C=x[A];if(d(C,A,E)===!0){const M=C.__offset,S=Array.isArray(C.value)?C.value:[C.value];let P=0;for(let O=0;O<S.length;O++){const V=S[O],I=g(V);typeof V=="number"?(C.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,M+P,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=V.elements[0],C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=V.elements[0],C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=V.elements[0]):(V.toArray(C.__data,P),P+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,C.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,y,x){const E=_.value;if(x[y]===void 0){if(typeof E=="number")x[y]=E;else{const A=Array.isArray(E)?E:[E],R=[];for(let C=0;C<A.length;C++)R.push(A[C].clone());x[y]=R}return!0}else if(typeof E=="number"){if(x[y]!==E)return x[y]=E,!0}else{const A=Array.isArray(x[y])?x[y]:[x[y]],R=Array.isArray(E)?E:[E];for(let C=0;C<A.length;C++){const M=A[C];if(M.equals(R[C])===!1)return M.copy(R[C]),!0}}return!1}function v(_){const y=_.uniforms;let x=0;const E=16;let A=0;for(let R=0,C=y.length;R<C;R++){const M=y[R],S={boundary:0,storage:0},P=Array.isArray(M.value)?M.value:[M.value];for(let O=0,V=P.length;O<V;O++){const I=P[O],G=g(I);S.boundary+=G.boundary,S.storage+=G.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,R>0){A=x%E;const O=E-A;A!==0&&O-S.boundary<0&&(x+=E-A,M.__offset=x)}x+=S.storage}return A=x%E,A>0&&(x+=E-A),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:h,dispose:p}}class Bl{constructor(e={}){const{canvas:t=Eh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this._useLegacyLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const y=this;let x=!1,E=0,A=0,R=null,C=-1,M=null;const S=new mt,P=new mt;let O=null;const V=new ot(0);let I=0,G=t.width,$=t.height,B=1,z=null,Y=null;const W=new mt(0,0,G,$),b=new mt(0,0,G,$);let F=!1;const U=new la;let D=!1,L=!1,K=null;const se=new et,te=new st,Q=new J,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return R===null?B:1}let q=n;function Re(w,k){for(let j=0;j<w.length;j++){const Z=w[j],ne=t.getContext(Z,k);if(ne!==null)return ne}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ia}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),q===null){const k=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&k.shift(),q=Re(k,w),q===null)throw Re(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let de,ae,oe,Ze,Le,He,xe,Qe,it,N,T,ee,me,fe,ge,ke,we,Fe,X,Me,pe,$e,Ye,Ke;function Ge(){de=new zd(q),ae=new Dd(q,de,e),de.init(ae),$e=new Sm(q,de,ae),oe=new xm(q,de,ae),Ze=new Hd(q),Le=new am,He=new Mm(q,de,oe,Le,ae,$e,Ze),xe=new Nd(y),Qe=new Od(y),it=new $h(q,ae),Ye=new Ld(q,de,it,ae),N=new Vd(q,it,Ze,Ye),T=new qd(q,N,it,Ze),X=new Xd(q,ae,He),ke=new Ud(Le),ee=new sm(y,xe,Qe,de,ae,Ye,ke),me=new Am(y,Le),fe=new lm,ge=new pm(de,ae),Fe=new Pd(y,xe,Qe,oe,T,f,l),we=new _m(y,T,ae),Ke=new Rm(q,Ze,ae,oe),Me=new Id(q,de,Ze,ae),pe=new kd(q,de,Ze,ae),Ze.programs=ee.programs,y.capabilities=ae,y.extensions=de,y.properties=Le,y.renderLists=fe,y.shadowMap=we,y.state=oe,y.info=Ze}Ge();const H=new bm(y,q);this.xr=H,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const w=de.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=de.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(G,$,!1))},this.getSize=function(w){return w.set(G,$)},this.setSize=function(w,k,j=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,$=k,t.width=Math.floor(w*B),t.height=Math.floor(k*B),j===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(G*B,$*B).floor()},this.setDrawingBufferSize=function(w,k,j){G=w,$=k,B=j,t.width=Math.floor(w*j),t.height=Math.floor(k*j),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(W)},this.setViewport=function(w,k,j,Z){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,k,j,Z),oe.viewport(S.copy(W).multiplyScalar(B).floor())},this.getScissor=function(w){return w.copy(b)},this.setScissor=function(w,k,j,Z){w.isVector4?b.set(w.x,w.y,w.z,w.w):b.set(w,k,j,Z),oe.scissor(P.copy(b).multiplyScalar(B).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(w){oe.setScissorTest(F=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(w=!0,k=!0,j=!0){let Z=0;if(w){let ne=!1;if(R!==null){const ie=R.texture.format;ne=ie===yl||ie===gl||ie===vl}if(ne){const ie=R.texture.type,Te=ie===Xn||ie===kn||ie===ra||ie===ii||ie===pl||ie===ml,De=Fe.getClearColor(),qe=Fe.getClearAlpha(),Ve=De.r,Ne=De.g,be=De.b;Te?(d[0]=Ve,d[1]=Ne,d[2]=be,d[3]=qe,q.clearBufferuiv(q.COLOR,0,d)):(v[0]=Ve,v[1]=Ne,v[2]=be,v[3]=qe,q.clearBufferiv(q.COLOR,0,v))}else Z|=q.COLOR_BUFFER_BIT}k&&(Z|=q.DEPTH_BUFFER_BIT),j&&(Z|=q.STENCIL_BUFFER_BIT),q.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),fe.dispose(),ge.dispose(),Le.dispose(),xe.dispose(),Qe.dispose(),T.dispose(),Ye.dispose(),Ke.dispose(),ee.dispose(),H.dispose(),H.removeEventListener("sessionstart",at),H.removeEventListener("sessionend",le),K&&(K.dispose(),K=null),ue.stop()};function Ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=Ze.autoReset,k=we.enabled,j=we.autoUpdate,Z=we.needsUpdate,ne=we.type;Ge(),Ze.autoReset=w,we.enabled=k,we.autoUpdate=j,we.needsUpdate=Z,we.type=ne}function Ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ce(w){const k=w.target;k.removeEventListener("dispose",Ce),ve(k)}function ve(w){Xe(w),Le.remove(w)}function Xe(w){const k=Le.get(w).programs;k!==void 0&&(k.forEach(function(j){ee.releaseProgram(j)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,j,Z,ne,ie){k===null&&(k=he);const Te=ne.isMesh&&ne.matrixWorld.determinant()<0,De=Ie(w,k,j,Z,ne);oe.setMaterial(Z,Te);let qe=j.index,Ve=1;if(Z.wireframe===!0){if(qe=N.getWireframeAttribute(j),qe===void 0)return;Ve=2}const Ne=j.drawRange,be=j.attributes.position;let ut=Ne.start*Ve,dt=(Ne.start+Ne.count)*Ve;ie!==null&&(ut=Math.max(ut,ie.start*Ve),dt=Math.min(dt,(ie.start+ie.count)*Ve)),qe!==null?(ut=Math.max(ut,0),dt=Math.min(dt,qe.count)):be!=null&&(ut=Math.max(ut,0),dt=Math.min(dt,be.count));const _t=dt-ut;if(_t<0||_t===1/0)return;Ye.setup(ne,Z,De,j,qe);let Lt,ft=Me;if(qe!==null&&(Lt=it.get(qe),ft=pe,ft.setIndex(Lt)),ne.isMesh)Z.wireframe===!0?(oe.setLineWidth(Z.wireframeLinewidth*ce()),ft.setMode(q.LINES)):ft.setMode(q.TRIANGLES);else if(ne.isLine){let je=Z.linewidth;je===void 0&&(je=1),oe.setLineWidth(je*ce()),ne.isLineSegments?ft.setMode(q.LINES):ne.isLineLoop?ft.setMode(q.LINE_LOOP):ft.setMode(q.LINE_STRIP)}else ne.isPoints?ft.setMode(q.POINTS):ne.isSprite&&ft.setMode(q.TRIANGLES);if(ne.isInstancedMesh)ft.renderInstances(ut,_t,ne.count);else if(j.isInstancedBufferGeometry){const je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,$t=Math.min(j.instanceCount,je);ft.renderInstances(ut,_t,$t)}else ft.render(ut,_t)},this.compile=function(w,k){function j(Z,ne,ie){Z.transparent===!0&&Z.side===Pn&&Z.forceSinglePass===!1?(Z.side=Zt,Z.needsUpdate=!0,Ue(Z,ne,ie),Z.side=qn,Z.needsUpdate=!0,Ue(Z,ne,ie),Z.side=Pn):Ue(Z,ne,ie)}m=ge.get(w),m.init(),_.push(m),w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(y._useLegacyLights),w.traverse(function(Z){const ne=Z.material;if(ne)if(Array.isArray(ne))for(let ie=0;ie<ne.length;ie++){const Te=ne[ie];j(Te,w,Z)}else j(ne,w,Z)}),_.pop(),m=null};let Je=null;function yt(w){Je&&Je(w)}function at(){ue.stop()}function le(){ue.start()}const ue=new Il;ue.setAnimationLoop(yt),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(w){Je=w,H.setAnimationLoop(w),w===null?ue.stop():ue.start()},H.addEventListener("sessionstart",at),H.addEventListener("sessionend",le),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(k),k=H.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,k,R),m=ge.get(w,_.length),m.init(),_.push(m),se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),U.setFromProjectionMatrix(se),L=this.localClippingEnabled,D=ke.init(this.clippingPlanes,L),g=fe.get(w,p.length),g.init(),p.push(g),ye(w,k,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(z,Y),this.info.render.frame++,D===!0&&ke.beginShadows();const j=m.state.shadowsArray;if(we.render(j,w,k),D===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Fe.render(g,w),m.setupLights(y._useLegacyLights),k.isArrayCamera){const Z=k.cameras;for(let ne=0,ie=Z.length;ne<ie;ne++){const Te=Z[ne];_e(g,w,Te,Te.viewport)}}else _e(g,w,k);R!==null&&(He.updateMultisampleRenderTarget(R),He.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(y,w,k),Ye.resetDefaultState(),C=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function ye(w,k,j,Z){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||U.intersectsSprite(w)){Z&&Q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(se);const Te=T.update(w),De=w.material;De.visible&&g.push(w,Te,De,j,Q.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||U.intersectsObject(w))){const Te=T.update(w),De=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Q.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Q.copy(Te.boundingSphere.center)),Q.applyMatrix4(w.matrixWorld).applyMatrix4(se)),Array.isArray(De)){const qe=Te.groups;for(let Ve=0,Ne=qe.length;Ve<Ne;Ve++){const be=qe[Ve],ut=De[be.materialIndex];ut&&ut.visible&&g.push(w,Te,ut,j,Q.z,be)}}else De.visible&&g.push(w,Te,De,j,Q.z,null)}}const ie=w.children;for(let Te=0,De=ie.length;Te<De;Te++)ye(ie[Te],k,j,Z)}function _e(w,k,j,Z){const ne=w.opaque,ie=w.transmissive,Te=w.transparent;m.setupLightsView(j),D===!0&&ke.setGlobalState(y.clippingPlanes,j),ie.length>0&&tt(ne,ie,k,j),Z&&oe.viewport(S.copy(Z)),ne.length>0&&Be(ne,k,j),ie.length>0&&Be(ie,k,j),Te.length>0&&Be(Te,k,j),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function tt(w,k,j,Z){const ne=ae.isWebGL2;K===null&&(K=new oi(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?In:Xn,minFilter:Oi,samples:ne?4:0})),y.getDrawingBufferSize(te),ne?K.setSize(te.x,te.y):K.setSize(Yr(te.x),Yr(te.y));const ie=y.getRenderTarget();y.setRenderTarget(K),y.getClearColor(V),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();const Te=y.toneMapping;y.toneMapping=Wn,Be(w,j,Z),He.updateMultisampleRenderTarget(K),He.updateRenderTargetMipmap(K);let De=!1;for(let qe=0,Ve=k.length;qe<Ve;qe++){const Ne=k[qe],be=Ne.object,ut=Ne.geometry,dt=Ne.material,_t=Ne.group;if(dt.side===Pn&&be.layers.test(Z.layers)){const Lt=dt.side;dt.side=Zt,dt.needsUpdate=!0,Pe(be,j,Z,ut,dt,_t),dt.side=Lt,dt.needsUpdate=!0,De=!0}}De===!0&&(He.updateMultisampleRenderTarget(K),He.updateRenderTargetMipmap(K)),y.setRenderTarget(ie),y.setClearColor(V,I),y.toneMapping=Te}function Be(w,k,j){const Z=k.isScene===!0?k.overrideMaterial:null;for(let ne=0,ie=w.length;ne<ie;ne++){const Te=w[ne],De=Te.object,qe=Te.geometry,Ve=Z===null?Te.material:Z,Ne=Te.group;De.layers.test(j.layers)&&Pe(De,k,j,qe,Ve,Ne)}}function Pe(w,k,j,Z,ne,ie){w.onBeforeRender(y,k,j,Z,ne,ie),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(y,k,j,Z,w,ie),ne.transparent===!0&&ne.side===Pn&&ne.forceSinglePass===!1?(ne.side=Zt,ne.needsUpdate=!0,y.renderBufferDirect(j,k,Z,ne,w,ie),ne.side=qn,ne.needsUpdate=!0,y.renderBufferDirect(j,k,Z,ne,w,ie),ne.side=Pn):y.renderBufferDirect(j,k,Z,ne,w,ie),w.onAfterRender(y,k,j,Z,ne,ie)}function Ue(w,k,j){k.isScene!==!0&&(k=he);const Z=Le.get(w),ne=m.state.lights,ie=m.state.shadowsArray,Te=ne.state.version,De=ee.getParameters(w,ne.state,ie,k,j),qe=ee.getProgramCacheKey(De);let Ve=Z.programs;Z.environment=w.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(w.isMeshStandardMaterial?Qe:xe).get(w.envMap||Z.environment),Ve===void 0&&(w.addEventListener("dispose",Ce),Ve=new Map,Z.programs=Ve);let Ne=Ve.get(qe);if(Ne!==void 0){if(Z.currentProgram===Ne&&Z.lightsStateVersion===Te)return re(w,De),Ne}else De.uniforms=ee.getUniforms(w),w.onBuild(j,De,y),w.onBeforeCompile(De,y),Ne=ee.acquireProgram(De,qe),Ve.set(qe,Ne),Z.uniforms=De.uniforms;const be=Z.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=ke.uniform),re(w,De),Z.needsLights=We(w),Z.lightsStateVersion=Te,Z.needsLights&&(be.ambientLightColor.value=ne.state.ambient,be.lightProbe.value=ne.state.probe,be.directionalLights.value=ne.state.directional,be.directionalLightShadows.value=ne.state.directionalShadow,be.spotLights.value=ne.state.spot,be.spotLightShadows.value=ne.state.spotShadow,be.rectAreaLights.value=ne.state.rectArea,be.ltc_1.value=ne.state.rectAreaLTC1,be.ltc_2.value=ne.state.rectAreaLTC2,be.pointLights.value=ne.state.point,be.pointLightShadows.value=ne.state.pointShadow,be.hemisphereLights.value=ne.state.hemi,be.directionalShadowMap.value=ne.state.directionalShadowMap,be.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,be.spotShadowMap.value=ne.state.spotShadowMap,be.spotLightMatrix.value=ne.state.spotLightMatrix,be.spotLightMap.value=ne.state.spotLightMap,be.pointShadowMap.value=ne.state.pointShadowMap,be.pointShadowMatrix.value=ne.state.pointShadowMatrix);const ut=Ne.getUniforms(),dt=zr.seqWithValue(ut.seq,be);return Z.currentProgram=Ne,Z.uniformsList=dt,Ne}function re(w,k){const j=Le.get(w);j.outputColorSpace=k.outputColorSpace,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Ie(w,k,j,Z,ne){k.isScene!==!0&&(k=he),He.resetTextureUnits();const ie=k.fog,Te=Z.isMeshStandardMaterial?k.environment:null,De=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:_n,qe=(Z.isMeshStandardMaterial?Qe:xe).get(Z.envMap||Te),Ve=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),be=!!j.morphAttributes.position,ut=!!j.morphAttributes.normal,dt=!!j.morphAttributes.color;let _t=Wn;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=y.toneMapping);const Lt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=Lt!==void 0?Lt.length:0,je=Le.get(Z),$t=m.state.lights;if(D===!0&&(L===!0||w!==M)){const xt=w===M&&Z.id===C;ke.setState(Z,w,xt)}let rt=!1;Z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==$t.state.version||je.outputColorSpace!==De||ne.isInstancedMesh&&je.instancing===!1||!ne.isInstancedMesh&&je.instancing===!0||ne.isSkinnedMesh&&je.skinning===!1||!ne.isSkinnedMesh&&je.skinning===!0||ne.isInstancedMesh&&je.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&je.instancingColor===!1&&ne.instanceColor!==null||je.envMap!==qe||Z.fog===!0&&je.fog!==ie||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ke.numPlanes||je.numIntersection!==ke.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==Ne||je.morphTargets!==be||je.morphNormals!==ut||je.morphColors!==dt||je.toneMapping!==_t||ae.isWebGL2===!0&&je.morphTargetsCount!==ft)&&(rt=!0):(rt=!0,je.__version=Z.version);let Ft=je.currentProgram;rt===!0&&(Ft=Ue(Z,k,ne));let Bt=!1,Tt=!1,At=!1;const vt=Ft.getUniforms(),Ot=je.uniforms;if(oe.useProgram(Ft.program)&&(Bt=!0,Tt=!0,At=!0),Z.id!==C&&(C=Z.id,Tt=!0),Bt||M!==w){vt.setValue(q,"projectionMatrix",w.projectionMatrix),vt.setValue(q,"viewMatrix",w.matrixWorldInverse);const xt=vt.map.cameraPosition;xt!==void 0&&xt.setValue(q,Q.setFromMatrixPosition(w.matrixWorld)),ae.logarithmicDepthBuffer&&vt.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&vt.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Tt=!0,At=!0)}if(ne.isSkinnedMesh){vt.setOptional(q,ne,"bindMatrix"),vt.setOptional(q,ne,"bindMatrixInverse");const xt=ne.skeleton;xt&&(ae.floatVertexTextures?(xt.boneTexture===null&&xt.computeBoneTexture(),vt.setValue(q,"boneTexture",xt.boneTexture,He),vt.setValue(q,"boneTextureSize",xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const nt=j.morphAttributes;if((nt.position!==void 0||nt.normal!==void 0||nt.color!==void 0&&ae.isWebGL2===!0)&&X.update(ne,j,Ft),(Tt||je.receiveShadow!==ne.receiveShadow)&&(je.receiveShadow=ne.receiveShadow,vt.setValue(q,"receiveShadow",ne.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ot.envMap.value=qe,Ot.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Tt&&(vt.setValue(q,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&Oe(Ot,At),ie&&Z.fog===!0&&me.refreshFogUniforms(Ot,ie),me.refreshMaterialUniforms(Ot,Z,B,$,K),zr.upload(q,je.uniformsList,Ot,He)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(zr.upload(q,je.uniformsList,Ot,He),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&vt.setValue(q,"center",ne.center),vt.setValue(q,"modelViewMatrix",ne.modelViewMatrix),vt.setValue(q,"normalMatrix",ne.normalMatrix),vt.setValue(q,"modelMatrix",ne.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const xt=Z.uniformsGroups;for(let bt=0,Mn=xt.length;bt<Mn;bt++)if(ae.isWebGL2){const vn=xt[bt];Ke.update(vn,Ft),Ke.bind(vn,Ft)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ft}function Oe(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function We(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,k,j){Le.get(w.texture).__webglTexture=k,Le.get(w.depthTexture).__webglTexture=j;const Z=Le.get(w);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const j=Le.get(w);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,j=0){R=w,E=k,A=j;let Z=!0,ne=null,ie=!1,Te=!1;if(w){const qe=Le.get(w);qe.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(q.FRAMEBUFFER,null),Z=!1):qe.__webglFramebuffer===void 0?He.setupRenderTarget(w):qe.__hasExternalTextures&&He.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Te=!0);const Ne=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?ne=Ne[k][j]:ne=Ne[k],ie=!0):ae.isWebGL2&&w.samples>0&&He.useMultisampledRTT(w)===!1?ne=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?ne=Ne[j]:ne=Ne,S.copy(w.viewport),P.copy(w.scissor),O=w.scissorTest}else S.copy(W).multiplyScalar(B).floor(),P.copy(b).multiplyScalar(B).floor(),O=F;if(oe.bindFramebuffer(q.FRAMEBUFFER,ne)&&ae.drawBuffers&&Z&&oe.drawBuffers(w,ne),oe.viewport(S),oe.scissor(P),oe.setScissorTest(O),ie){const qe=Le.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+k,qe.__webglTexture,j)}else if(Te){const qe=Le.get(w.texture),Ve=k||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,qe.__webglTexture,j||0,Ve)}C=-1},this.readRenderTargetPixels=function(w,k,j,Z,ne,ie,Te){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){oe.bindFramebuffer(q.FRAMEBUFFER,De);try{const qe=w.texture,Ve=qe.format,Ne=qe.type;if(Ve!==nn&&$e.convert(Ve)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const be=Ne===In&&(de.has("EXT_color_buffer_half_float")||ae.isWebGL2&&de.has("EXT_color_buffer_float"));if(Ne!==Xn&&$e.convert(Ne)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===an&&(ae.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Z&&j>=0&&j<=w.height-ne&&q.readPixels(k,j,Z,ne,$e.convert(Ve),$e.convert(Ne),ie)}finally{const qe=R!==null?Le.get(R).__webglFramebuffer:null;oe.bindFramebuffer(q.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(w,k,j=0){const Z=Math.pow(2,-j),ne=Math.floor(k.image.width*Z),ie=Math.floor(k.image.height*Z);He.setTexture2D(k,0),q.copyTexSubImage2D(q.TEXTURE_2D,j,0,0,w.x,w.y,ne,ie),oe.unbindTexture()},this.copyTextureToTexture=function(w,k,j,Z=0){const ne=k.image.width,ie=k.image.height,Te=$e.convert(j.format),De=$e.convert(j.type);He.setTexture2D(j,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment),k.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Z,w.x,w.y,ne,ie,Te,De,k.image.data):k.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Z,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Te,k.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,Z,w.x,w.y,Te,De,k.image),Z===0&&j.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(w,k,j,Z,ne=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ie=w.max.x-w.min.x+1,Te=w.max.y-w.min.y+1,De=w.max.z-w.min.z+1,qe=$e.convert(Z.format),Ve=$e.convert(Z.type);let Ne;if(Z.isData3DTexture)He.setTexture3D(Z,0),Ne=q.TEXTURE_3D;else if(Z.isDataArrayTexture)He.setTexture2DArray(Z,0),Ne=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment);const be=q.getParameter(q.UNPACK_ROW_LENGTH),ut=q.getParameter(q.UNPACK_IMAGE_HEIGHT),dt=q.getParameter(q.UNPACK_SKIP_PIXELS),_t=q.getParameter(q.UNPACK_SKIP_ROWS),Lt=q.getParameter(q.UNPACK_SKIP_IMAGES),ft=j.isCompressedTexture?j.mipmaps[0]:j.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,ft.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ft.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,w.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,w.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?q.texSubImage3D(Ne,ne,k.x,k.y,k.z,ie,Te,De,qe,Ve,ft.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ne,ne,k.x,k.y,k.z,ie,Te,De,qe,ft.data)):q.texSubImage3D(Ne,ne,k.x,k.y,k.z,ie,Te,De,qe,Ve,ft),q.pixelStorei(q.UNPACK_ROW_LENGTH,be),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ut),q.pixelStorei(q.UNPACK_SKIP_PIXELS,dt),q.pixelStorei(q.UNPACK_SKIP_ROWS,_t),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Lt),ne===0&&Z.generateMipmaps&&q.generateMipmap(Ne),oe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?He.setTextureCube(w,0):w.isData3DTexture?He.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?He.setTexture2DArray(w,0):He.setTexture2D(w,0),oe.unbindTexture()},this.resetState=function(){E=0,A=0,R=null,oe.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sa?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Jr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ct?si:_l}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===si?Ct:_n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Cm extends Bl{}Cm.prototype.isWebGL1Renderer=!0;class Pm extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const Vo=new J,ko=new mt,Ho=new mt,Lm=new J,Go=new et,Ri=new J,Us=new Gi,Wo=new et,Ns=new Qr;class Im extends mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ri.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ri),this.boundingBox.expandByPoint(Ri)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ri.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ri),this.boundingSphere.expandByPoint(Ri)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(i),e.ray.intersectsSphere(Us)!==!1&&(Wo.copy(i).invert(),Ns.copy(e.ray).applyMatrix4(Wo),!(this.boundingBox!==null&&Ns.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ko.fromBufferAttribute(i.attributes.skinIndex,e),Ho.fromBufferAttribute(i.attributes.skinWeight,e),Vo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ho.getComponent(r);if(a!==0){const o=ko.getComponent(r);Go.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Lm.copy(Vo).applyMatrix4(Go),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Js extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ol extends Ht{constructor(e=null,t=1,n=1,i,r,a,o,l,h=zt,u=zt,c,f){super(null,a,o,l,h,u,i,r,c,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xo=new et,Dm=new et;class fa{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Dm;Xo.multiplyMatrices(o,t[r]),Xo.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=xl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ol(t,e,e,nn,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Js),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class da extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qo=new J,Yo=new J,jo=new et,Fs=new Qr,Ur=new Gi;class zl extends wt{constructor(e=new cn,t=new da){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)qo.fromBufferAttribute(t,i-1),Yo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qo.distanceTo(Yo);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=r,e.ray.intersectsSphere(Ur)===!1)return;jo.copy(i).invert(),Fs.copy(e.ray).applyMatrix4(jo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=new J,u=new J,c=new J,f=new J,d=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,a.start),_=Math.min(v.count,a.start+a.count);for(let y=p,x=_-1;y<x;y+=d){const E=v.getX(y),A=v.getX(y+1);if(h.fromBufferAttribute(m,E),u.fromBufferAttribute(m,A),Fs.distanceSqToSegment(h,u,f,c)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let y=p,x=_-1;y<x;y+=d){if(h.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),Fs.distanceSqToSegment(h,u,f,c)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Ko=new J,Zo=new J;class Um extends zl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ko.fromBufferAttribute(t,i),Zo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ko.distanceTo(Zo);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nm{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,h;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),h=n[i]-a,h<0)o=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new st:new J);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new J,i=[],r=[],a=[],o=new J,l=new et;for(let d=0;d<=e;d++){const v=d/e;i[d]=this.getTangentAt(v,new J)}r[0]=new J,a[0]=new J;let h=Number.MAX_VALUE;const u=Math.abs(i[0].x),c=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),c<=h&&(h=c,n.set(0,1,0)),f<=h&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(It(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(It(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(i[v],d*v)),a[v].crossVectors(i[v],r[v])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vl extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bs extends Kn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ot(16777215),this.specular=new ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fm extends Kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Nr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Bm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Om(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $o(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function kl(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ts{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zm extends ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Za,endingEnd:Za}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case $a:r=e,o=2*t-n;break;case Ja:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $a:a=e,l=2*n-t;break;case Ja:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=this._offsetPrev,c=this._offsetNext,f=this._weightPrev,d=this._weightNext,v=(n-t)/(i-t),g=v*v,m=g*v,p=-f*m+2*f*g-f*v,_=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*v+1,y=(-1-d)*m+(1.5+d)*g+.5*v,x=d*m-d*g;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+_*a[h+E]+y*a[l+E]+x*a[c+E];return r}}class Vm extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=(n-t)/(i-t),c=1-u;for(let f=0;f!==o;++f)r[f]=a[h+f]*c+a[l+f]*u;return r}}class km extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Nr(t,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Nr(e.times,Array),values:Nr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new km(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case us:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return us}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Bm(i))for(let o=0,l=i.length;o!==l;++o){const h=i[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===us,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(i)l=!0;else{const c=o*n,f=c-n,d=c+n;for(let v=0;v!==n;++v){const g=t[c+v];if(g!==t[f+v]||g!==t[d+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const c=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[c+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Hr;class qi extends xn{}qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=kr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;class Hl extends xn{}Hl.prototype.ValueTypeName="color";class or extends xn{}or.prototype.ValueTypeName="number";class Hm extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let h=e*o;for(let u=h+o;h!==u;h+=4)on.slerpFlat(r,0,a,h-o,a,h,l);return r}}class Yi extends xn{InterpolantFactoryMethodLinear(e){return new Hm(this.times,this.values,this.getValueSize(),e)}}Yi.prototype.ValueTypeName="quaternion";Yi.prototype.DefaultInterpolation=Hr;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class ji extends xn{}ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=kr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class lr extends xn{}lr.prototype.ValueTypeName="vector";class Gm{constructor(e,t=-1,n,i=$c){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Xm(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],h=[];l.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);const u=Om(l);l=$o(l,1,u),h=$o(h,1,u),!i&&l[0]===0&&(l.push(r),h.push(h[0])),a.push(new or(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],u=h.name.match(r);if(u&&u.length>1){const c=u[1];let f=i[c];f||(i[c]=f=[]),f.push(h)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,f,d,v,g){if(d.length!==0){const m=[],p=[];kl(d,m,p,v),m.length!==0&&g.push(new c(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const f=h[c].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let g=0;g<f[v].morphTargets.length;g++)d[f[v].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let _=0;_!==f[v].morphTargets.length;++_){const y=f[v];m.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new or(".morphTargetInfluence["+g+"]",m,p))}l=d.length*a}else{const d=".bones["+t[c].name+"]";n(lr,d+".position",f,"pos",i),n(Yi,d+".quaternion",f,"rot",i),n(lr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return or;case"vector":case"vector2":case"vector3":case"vector4":return lr;case"color":return Hl;case"quaternion":return Yi;case"bool":case"boolean":return qi;case"string":return ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Xm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wm(s.type);if(s.times===void 0){const t=[],n=[];kl(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const jr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Gl{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,f=h.length;c<f;c+=2){const d=h[c],v=h[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}}const qm=new Gl;class Yn{constructor(e){this.manager=e!==void 0?e:qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class Ym extends Error{constructor(e,t){super(e),this.response=t}}class Wl extends Yn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=jr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:n,onError:i});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Rn[e],c=h.body.getReader(),f=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),d=f?parseInt(f):0,v=d!==0;let g=0;const m=new ReadableStream({start(p){_();function _(){c.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:d});for(let A=0,R=u.length;A<R;A++){const C=u[A];C.onProgress&&C.onProgress(E)}p.enqueue(x),_()}})}}});return new Response(m)}else throw new Ym(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return h.json();default:if(o===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),f=c&&c[1]?c[1].toLowerCase():void 0,d=new TextDecoder(f);return h.arrayBuffer().then(v=>d.decode(v))}}}).then(h=>{jr.add(e,h);const u=Rn[e];delete Rn[e];for(let c=0,f=u.length;c<f;c++){const d=u[c];d.onLoad&&d.onLoad(h)}}).catch(h=>{const u=Rn[e];if(u===void 0)throw this.manager.itemError(e),h;delete Rn[e];for(let c=0,f=u.length;c<f;c++){const d=u[c];d.onError&&d.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jm extends Yn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=jr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ar("img");function l(){u(),jr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(c){u(),i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Km extends Yn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Ol,o=new Wl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let h;try{h=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:jt,a.wrapT=h.wrapT!==void 0?h.wrapT:jt,a.magFilter=h.magFilter!==void 0?h.magFilter:Vt,a.minFilter=h.minFilter!==void 0?h.minFilter:Vt,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0?a.colorSpace=h.colorSpace:h.encoding!==void 0&&(a.encoding=h.encoding),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=Oi),h.mipmapCount===1&&(a.minFilter=Vt),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h)},n,i),a}}class Xl extends Yn{constructor(e){super(e)}load(e,t,n,i){const r=new Ht,a=new jm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ns extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Os=new et,Jo=new J,Qo=new J;class pa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jo),Qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qo),t.updateMatrixWorld(),Os.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Os),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Os)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zm extends pa{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Vi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $m extends ns{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const el=new et,er=new J,zs=new J;class Jm extends pa{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),er.setFromMatrixPosition(e.matrixWorld),n.position.copy(er),zs.copy(n.position),zs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zs),n.updateMatrixWorld(),i.makeTranslation(-er.x,-er.y,-er.z),el.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el)}}class Qs extends ns{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qm extends pa{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ql extends ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Qm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yl extends ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ev{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ma="\\[\\]\\.:\\/",tv=new RegExp("["+ma+"]","g"),va="[^"+ma+"]",nv="[^"+ma.replace("\\.","")+"]",iv=/((?:WC+[\/:])*)/.source.replace("WC",va),rv=/(WCOD+)?/.source.replace("WCOD",nv),sv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",va),av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",va),ov=new RegExp("^"+iv+rv+sv+av+"$"),lv=["material","materials","bones","map"];class cv{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tv,"")}static parseTrackName(e){const t=ov.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);lv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=cv;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hv extends Um{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new cn;i.setAttribute("position",new kt(t,3)),i.setAttribute("color",new kt(n,3));const r=new da({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new ot,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var nl=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(nl(""))}catch{nl=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var sn=Uint8Array,Hn=Uint16Array,ea=Uint32Array,jl=new sn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Kl=new sn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),uv=new sn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zl=function(s,e){for(var t=new Hn(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new ea(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},$l=Zl(jl,2),Jl=$l[0],fv=$l[1];Jl[28]=258,fv[258]=28;var dv=Zl(Kl,0),pv=dv[0],ta=new Hn(32768);for(var St=0;St<32768;++St){var zn=(St&43690)>>>1|(St&21845)<<1;zn=(zn&52428)>>>2|(zn&13107)<<2,zn=(zn&61680)>>>4|(zn&3855)<<4,ta[St]=((zn&65280)>>>8|(zn&255)<<8)>>>1}var sr=function(s,e,t){for(var n=s.length,i=0,r=new Hn(e);i<n;++i)++r[s[i]-1];var a=new Hn(e);for(i=0;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(t){o=new Hn(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var h=i<<4|s[i],u=e-s[i],c=a[s[i]-1]++<<u,f=c|(1<<u)-1;c<=f;++c)o[ta[c]>>>l]=h}else for(o=new Hn(n),i=0;i<n;++i)s[i]&&(o[i]=ta[a[s[i]-1]++]>>>15-s[i]);return o},cr=new sn(288);for(var St=0;St<144;++St)cr[St]=8;for(var St=144;St<256;++St)cr[St]=9;for(var St=256;St<280;++St)cr[St]=7;for(var St=280;St<288;++St)cr[St]=8;var Ql=new sn(32);for(var St=0;St<32;++St)Ql[St]=5;var mv=sr(cr,9,1),vv=sr(Ql,5,1),Vs=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},fn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},ks=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},gv=function(s){return(s/8|0)+(s&7&&1)},yv=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof Hn?Hn:s instanceof ea?ea:sn)(t-e);return n.set(s.subarray(e,t)),n},_v=function(s,e,t){var n=s.length;if(!n||t&&!t.l&&n<5)return e||new sn(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new sn(n*3));var a=function(K){var se=e.length;if(K>se){var te=new sn(Math.max(se*2,K));te.set(e),e=te}},o=t.f||0,l=t.p||0,h=t.b||0,u=t.l,c=t.d,f=t.m,d=t.n,v=n*8;do{if(!u){t.f=o=fn(s,l,1);var g=fn(s,l+1,3);if(l+=3,g)if(g==1)u=mv,c=vv,f=9,d=5;else if(g==2){var y=fn(s,l,31)+257,x=fn(s,l+10,15)+4,E=y+fn(s,l+5,31)+1;l+=14;for(var A=new sn(E),R=new sn(19),C=0;C<x;++C)R[uv[C]]=fn(s,l+C*3,7);l+=x*3;for(var M=Vs(R),S=(1<<M)-1,P=sr(R,M,1),C=0;C<E;){var O=P[fn(s,l,S)];l+=O&15;var m=O>>>4;if(m<16)A[C++]=m;else{var V=0,I=0;for(m==16?(I=3+fn(s,l,3),l+=2,V=A[C-1]):m==17?(I=3+fn(s,l,7),l+=3):m==18&&(I=11+fn(s,l,127),l+=7);I--;)A[C++]=V}}var G=A.subarray(0,y),$=A.subarray(y);f=Vs(G),d=Vs($),u=sr(G,f,1),c=sr($,d,1)}else throw"invalid block type";else{var m=gv(l)+4,p=s[m-4]|s[m-3]<<8,_=m+p;if(_>n){if(r)throw"unexpected EOF";break}i&&a(h+p),e.set(s.subarray(m,_),h),t.b=h+=p,t.p=l=_*8;continue}if(l>v){if(r)throw"unexpected EOF";break}}i&&a(h+131072);for(var B=(1<<f)-1,z=(1<<d)-1,Y=l;;Y=l){var V=u[ks(s,l)&B],W=V>>>4;if(l+=V&15,l>v){if(r)throw"unexpected EOF";break}if(!V)throw"invalid length/literal";if(W<256)e[h++]=W;else if(W==256){Y=l,u=null;break}else{var b=W-254;if(W>264){var C=W-257,F=jl[C];b=fn(s,l,(1<<F)-1)+Jl[C],l+=F}var U=c[ks(s,l)&z],D=U>>>4;if(!U)throw"invalid distance";l+=U&15;var $=pv[D];if(D>3){var F=Kl[D];$+=ks(s,l)&(1<<F)-1,l+=F}if(l>v){if(r)throw"unexpected EOF";break}i&&a(h+131072);for(var L=h+b;h<L;h+=4)e[h]=e[h-$],e[h+1]=e[h+1-$],e[h+2]=e[h+2-$],e[h+3]=e[h+3-$];h=L}}t.l=u,t.p=Y,t.b=h,u&&(o=1,t.m=f,t.d=c,t.n=d)}while(!o);return h==e.length?e:yv(e,0,h)},xv=new sn(0),Mv=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Sv(s,e){return _v((Mv(s),s.subarray(2,-4)),e)}var Ev=typeof TextDecoder<"u"&&new TextDecoder,wv=0;try{Ev.decode(xv,{stream:!0}),wv=1}catch{}function ec(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,a=Math.floor((i+r)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?r=a:i=a,a=Math.floor((i+r)/2);return a}function Tv(s,e,t,n){const i=[],r=[],a=[];i[0]=1;for(let o=1;o<=t;++o){r[o]=e-n[s+1-o],a[o]=n[s+o]-e;let l=0;for(let h=0;h<o;++h){const u=a[h+1],c=r[o-h],f=i[h]/(u+c);i[h]=l+u*f,l=c*f}i[o]=l}return i}function bv(s,e,t,n){const i=ec(s,n,e),r=Tv(i,n,s,e),a=new mt(0,0,0,0);for(let o=0;o<=s;++o){const l=t[i-s+o],h=r[o],u=l.w*h;a.x+=l.x*u,a.y+=l.y*u,a.z+=l.z*u,a.w+=l.w*h}return a}function Av(s,e,t,n,i){const r=[];for(let c=0;c<=t;++c)r[c]=0;const a=[];for(let c=0;c<=n;++c)a[c]=r.slice(0);const o=[];for(let c=0;c<=t;++c)o[c]=r.slice(0);o[0][0]=1;const l=r.slice(0),h=r.slice(0);for(let c=1;c<=t;++c){l[c]=e-i[s+1-c],h[c]=i[s+c]-e;let f=0;for(let d=0;d<c;++d){const v=h[d+1],g=l[c-d];o[c][d]=v+g;const m=o[d][c-1]/o[c][d];o[d][c]=f+v*m,f=g*m}o[c][c]=f}for(let c=0;c<=t;++c)a[0][c]=o[c][t];for(let c=0;c<=t;++c){let f=0,d=1;const v=[];for(let g=0;g<=t;++g)v[g]=r.slice(0);v[0][0]=1;for(let g=1;g<=n;++g){let m=0;const p=c-g,_=t-g;c>=g&&(v[d][0]=v[f][0]/o[_+1][p],m=v[d][0]*o[p][_]);const y=p>=-1?1:-p,x=c-1<=_?g-1:t-c;for(let A=y;A<=x;++A)v[d][A]=(v[f][A]-v[f][A-1])/o[_+1][p+A],m+=v[d][A]*o[p+A][_];c<=_&&(v[d][g]=-v[f][g-1]/o[_+1][c],m+=v[d][g]*o[c][_]),a[g][c]=m;const E=f;f=d,d=E}}let u=t;for(let c=1;c<=n;++c){for(let f=0;f<=t;++f)a[c][f]*=u;u*=t-c}return a}function Rv(s,e,t,n,i){const r=i<s?i:s,a=[],o=ec(s,n,e),l=Av(o,n,s,r,e),h=[];for(let u=0;u<t.length;++u){const c=t[u].clone(),f=c.w;c.x*=f,c.y*=f,c.z*=f,h[u]=c}for(let u=0;u<=r;++u){const c=h[o-s].clone().multiplyScalar(l[u][0]);for(let f=1;f<=s;++f)c.add(h[o-s+f].clone().multiplyScalar(l[u][f]));a[u]=c}for(let u=r+1;u<=i+1;++u)a[u]=new mt(0,0,0);return a}function Cv(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function Pv(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const a=s[r];t[r]=new J(a.x,a.y,a.z),n[r]=a.w}const i=[];for(let r=0;r<e;++r){const a=t[r].clone();for(let o=1;o<=r;++o)a.sub(i[r-o].clone().multiplyScalar(Cv(r,o)*n[o]));i[r]=a.divideScalar(n[0])}return i}function Lv(s,e,t,n,i){const r=Rv(s,e,t,n,i);return Pv(r)}class Iv extends Nm{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let a=0;a<n.length;++a){const o=n[a];this.controlPoints[a]=new mt(o.x,o.y,o.z,o.w)}}getPoint(e,t=new J){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=bv(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new J){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=Lv(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let ht,Rt,Kt;class Dv extends Yn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=r.path===""?ev.extractUrlBase(e):r.path,o=new Wl(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(h){i?i(h):console.error(h),r.manager.itemError(e)}},n,i)}parse(e,t){if(zv(e))ht=new Ov().parse(e);else{const i=rc(e);if(!Vv(i))throw new Error("THREE.FBXLoader: Unknown format.");if(rl(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+rl(i));ht=new Bv().parse(i)}const n=new Xl(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Uv(n,this.manager).parse(ht)}}class Uv{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Rt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new Nv().parse(i);return this.parseScene(i,r,n),Kt}parseConnections(){const e=new Map;return"Connections"in ht&&ht.Connections.connections.forEach(function(n){const i=n[0],r=n[1],a=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const o={ID:r,relationship:a};e.get(i).parents.push(o),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:a};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in ht.Objects){const n=ht.Objects.Video;for(const i in n){const r=n[i],a=parseInt(i);if(e[a]=r.RelativeFilename||r.Filename,"Content"in r){const o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){const h=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=h}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in ht.Objects){const n=ht.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,a=i!==void 0?i.value:0,o=r!==void 0?r.value:0;if(n.wrapS=a===0?ai:jt,n.wrapT=o===0?ai:jt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,r=Rt.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),a=new Ht):(l.setPath(this.textureLoader.path),a=l.load(n))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),a=new Ht):a=this.textureLoader.load(n);return this.textureLoader.setPath(i),a}parseMaterials(e){const t=new Map;if("Material"in ht.Objects){const n=ht.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Rt.has(n))return null;const a=this.parseParameters(e,t,n);let o;switch(r.toLowerCase()){case"phong":o=new Bs;break;case"lambert":o=new Fm;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new Bs;break}return o.setValues(a),o.name=i,o}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new ot().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new ot().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new ot().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new ot().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new ot().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new ot().fromArray(e.SpecularColor.value).convertSRGBToLinear());const r=this;return Rt.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":i.bumpMap=r.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,a.ID),i.map!==void 0&&(i.map.colorSpace=Ct);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,a.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,a.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=Ct);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,a.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,a.ID),i.envMap!==void 0&&(i.envMap.mapping=Vr,i.envMap.colorSpace=Ct);break;case"SpecularColor":i.specularMap=r.getTexture(t,a.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=Ct);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(e,t){return"LayeredTexture"in ht.Objects&&t in ht.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Rt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in ht.Objects){const n=ht.Objects.Deformer;for(const i in n){const r=n[i],a=Rt.get(parseInt(i));if(r.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[i]=o}else if(r.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(a,n),o.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new et().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],a=t[r.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=Rt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){Kt=new Di;const i=this.parseModels(e.skeletons,t,n),r=ht.Objects.Model,a=this;i.forEach(function(l){const h=r[l.ID];a.setLookAtProperties(l,h),Rt.get(l.ID).parents.forEach(function(c){const f=i.get(c.ID);f!==void 0&&f.add(l)}),l.parent===null&&Kt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),Kt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const h=nc(l.userData.transformData);l.applyMatrix4(h),l.updateWorldMatrix()}});const o=new Fv().parse();Kt.children.length===1&&Kt.children[0].isGroup&&(Kt.children[0].animations=o,Kt=Kt.children[0]),Kt.animations=o}parseModels(e,t,n){const i=new Map,r=ht.Objects.Model;for(const a in r){const o=parseInt(a),l=r[a],h=Rt.get(o);let u=this.buildSkeleton(h,e,o,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(h);break;case"Light":u=this.createLight(h);break;case"Mesh":u=this.createMesh(h,t,n);break;case"NurbsCurve":u=this.createCurve(h,t);break;case"LimbNode":case"Root":u=new Js;break;case"Null":default:u=new Di;break}u.name=l.attrName?pt.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=o}this.getTransformData(u,l),i.set(o,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(h,u){if(h.ID===a.ID){const c=r;r=new Js,r.matrixWorld.copy(h.transformLink),r.name=i?pt.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[u]=r,c!==null&&r.add(c)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=ht.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new wt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const h=o/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const c=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Yt(u,h,r,a),c!==null&&t.setFocalLength(c);break;case 1:t=new ha(-o/2,o/2,l/2,-l/2,r,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new wt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=ht.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new wt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new ot().fromArray(n.Color.value).convertSRGBToLinear());let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Qs(r,a,o,l);break;case 1:t=new ql(r,a);break;case 2:let h=Math.PI/3;n.InnerAngle!==void 0&&(h=pn.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=pn.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new $m(r,a,o,h,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Qs(r,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,a=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new Bs({name:Yn.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new Im(r,a),i.normalizeSkinWeights()):i=new mn(r,a),i}createCurve(e,t){const n=e.children.reduce(function(r,a){return t.has(a.ID)&&(r=t.get(a.ID)),r},null),i=new da({name:Yn.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new zl(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=ic(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Rt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=ht.Objects.Model[i.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),Kt.add(e.target)):e.lookAt(new J().fromArray(a))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const a=e[r];Rt.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const h=l.ID;Rt.get(h).parents.forEach(function(c){n.has(c.ID)&&n.get(c.ID).bind(new fa(a.bones),i[c.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in ht.Objects){const t=ht.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new et().fromArray(r.Matrix.a)}):e[i.Node]=new et().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in ht&&"AmbientColor"in ht.GlobalSettings){const e=ht.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new ot(t,n,i).convertSRGBToLinear();Kt.add(new Yl(r,1))}}}}class Nv{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in ht.Objects){const n=ht.Objects.Geometry;for(const i in n){const r=Rt.get(parseInt(i)),a=this.parseGeometry(r,n[i],e);t.set(parseInt(i),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],a=e.parents.map(function(c){return ht.Objects.Model[c.ID]});if(a.length===0)return;const o=e.children.reduce(function(c,f){return i[f.ID]!==void 0&&(c=i[f.ID]),c},null);e.children.forEach(function(c){n.morphTargets[c.ID]!==void 0&&r.push(n.morphTargets[c.ID])});const l=a[0],h={};"RotationOrder"in l&&(h.eulerOrder=ic(l.RotationOrder.value)),"InheritType"in l&&(h.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(h.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(h.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(h.scale=l.GeometricScaling.value);const u=nc(h);return this.genGeometry(t,o,r,u)}genGeometry(e,t,n,i){const r=new cn;e.attrName&&(r.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new kt(o.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new kt(o.colors,3)),t&&(r.setAttribute("skinIndex",new oa(o.weightsIndices,4)),r.setAttribute("skinWeight",new kt(o.vertexWeights,4)),r.FBX_Deformer=t),o.normal.length>0){const h=new ct().getNormalMatrix(i),u=new kt(o.normal,3);u.applyNormalMatrix(h),r.setAttribute("normal",u)}if(o.uvs.forEach(function(h,u){const c=u===0?"uv":`uv${u}`;r.setAttribute(c,new kt(o.uvs[u],2))}),a.material&&a.material.mappingType!=="AllSame"){let h=o.materialIndex[0],u=0;if(o.materialIndex.forEach(function(c,f){c!==h&&(r.addGroup(u,f-u,h),h=c,u=f)}),r.groups.length>0){const c=r.groups[r.groups.length-1],f=c.start+c.count;f!==o.materialIndex.length&&r.addGroup(f,o.materialIndex.length-f,h)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:r,weight:i.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,a=[],o=[],l=[],h=[],u=[],c=[];const f=this;return e.vertexIndices.forEach(function(d,v){let g,m=!1;d<0&&(d=d^-1,m=!0);let p=[],_=[];if(a.push(d*3,d*3+1,d*3+2),e.color){const y=Fr(v,n,d,e.color);l.push(y[0],y[1],y[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(y){_.push(y.weight),p.push(y.id)}),_.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const y=[0,0,0,0],x=[0,0,0,0];_.forEach(function(E,A){let R=E,C=p[A];x.forEach(function(M,S,P){if(R>M){P[S]=R,R=M;const O=y[S];y[S]=C,C=O}})}),p=y,_=x}for(;_.length<4;)_.push(0),p.push(0);for(let y=0;y<4;++y)u.push(_[y]),c.push(p[y])}if(e.normal){const y=Fr(v,n,d,e.normal);o.push(y[0],y[1],y[2])}e.material&&e.material.mappingType!=="AllSame"&&(g=Fr(v,n,d,e.material)[0],g<0&&(f.negativeMaterialIndices=!0,g=0)),e.uv&&e.uv.forEach(function(y,x){const E=Fr(v,n,d,y);h[x]===void 0&&(h[x]=[]),h[x].push(E[0]),h[x].push(E[1])}),i++,m&&(i>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),f.genFace(t,e,a,g,o,l,h,u,c,i),n++,i=0,a=[],o=[],l=[],h=[],u=[],c=[])}),t}genFace(e,t,n,i,r,a,o,l,h,u){for(let c=2;c<u;c++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(c-1)*3]]),e.vertex.push(t.vertexPositions[n[(c-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(c-1)*3+2]]),e.vertex.push(t.vertexPositions[n[c*3]]),e.vertex.push(t.vertexPositions[n[c*3+1]]),e.vertex.push(t.vertexPositions[n[c*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(c-1)*4]),e.vertexWeights.push(l[(c-1)*4+1]),e.vertexWeights.push(l[(c-1)*4+2]),e.vertexWeights.push(l[(c-1)*4+3]),e.vertexWeights.push(l[c*4]),e.vertexWeights.push(l[c*4+1]),e.vertexWeights.push(l[c*4+2]),e.vertexWeights.push(l[c*4+3]),e.weightsIndices.push(h[0]),e.weightsIndices.push(h[1]),e.weightsIndices.push(h[2]),e.weightsIndices.push(h[3]),e.weightsIndices.push(h[(c-1)*4]),e.weightsIndices.push(h[(c-1)*4+1]),e.weightsIndices.push(h[(c-1)*4+2]),e.weightsIndices.push(h[(c-1)*4+3]),e.weightsIndices.push(h[c*4]),e.weightsIndices.push(h[c*4+1]),e.weightsIndices.push(h[c*4+2]),e.weightsIndices.push(h[c*4+3])),t.color&&(e.colors.push(a[0]),e.colors.push(a[1]),e.colors.push(a[2]),e.colors.push(a[(c-1)*3]),e.colors.push(a[(c-1)*3+1]),e.colors.push(a[(c-1)*3+2]),e.colors.push(a[c*3]),e.colors.push(a[c*3+1]),e.colors.push(a[c*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[0]),e.normal.push(r[1]),e.normal.push(r[2]),e.normal.push(r[(c-1)*3]),e.normal.push(r[(c-1)*3+1]),e.normal.push(r[(c-1)*3+2]),e.normal.push(r[c*3]),e.normal.push(r[c*3+1]),e.normal.push(r[c*3+2])),t.uv&&t.uv.forEach(function(f,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(o[d][0]),e.uvs[d].push(o[d][1]),e.uvs[d].push(o[d][(c-1)*2]),e.uvs[d].push(o[d][(c-1)*2+1]),e.uvs[d].push(o[d][c*2]),e.uvs[d].push(o[d][c*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=ht.Objects.Geometry[o.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,o.name)})})}genMorphGeometry(e,t,n,i,r){const a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],h=e.attributes.position.count*3,u=new Float32Array(h);for(let v=0;v<l.length;v++){const g=l[v]*3;u[g]=o[v*3],u[g+1]=o[v*3+1],u[g+2]=o[v*3+2]}const c={vertexIndices:a,vertexPositions:u},f=this.genBuffers(c),d=new kt(f.vertex,3);d.name=r||n.attrName,d.applyMatrix4(i),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let a=0,o=new ot;a<i.length;a+=4)o.fromArray(i,a).convertSRGBToLinear().toArray(i,a);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let a=0;a<i.length;++a)r.push(a);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new cn;const n=t-1,i=e.KnotVector.a,r=[],a=e.Points.a;for(let c=0,f=a.length;c<f;c+=4)r.push(new mt().fromArray(a,c));let o,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){o=n,l=i.length-1-o;for(let c=0;c<n;++c)r.push(r[c])}const u=new Iv(n,i,r,o,l).getPoints(r.length*12);return new cn().setFromPoints(u)}}class Fv{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(ht.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=ht.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=ht.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(kv),values:t[n].KeyValueFloat.a},r=Rt.get(i.id);if(r!==void 0){const a=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=i:o.match(/Y/)?e.get(a).curves.y=i:o.match(/Z/)?e.get(a).curves.z=i:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=i)}}}parseAnimationLayers(e){const t=ht.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],a=Rt.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,h){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[h]===void 0){const c=Rt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(c!==void 0){const f=ht.Objects.Model[c.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?pt.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Kt.traverse(function(v){v.ID===f.id&&(d.transform=v.matrix,v.userData.transformData&&(d.eulerOrder=v.userData.transformData.eulerOrder))}),d.transform||(d.transform=new et),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[h]=d}}r[h]&&(r[h][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[h]===void 0){const c=Rt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,f=Rt.get(c).parents[0].ID,d=Rt.get(f).parents[0].ID,v=Rt.get(d).parents[0].ID,g=ht.Objects.Model[v],m={modelName:g.attrName?pt.sanitizeNodeName(g.attrName):"",morphName:ht.Objects.Deformer[c].attrName};r[h]=m}r[h][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=ht.Objects.AnimationStack,n={};for(const i in t){const r=Rt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Gm(e.name,-1,t)}generateTracks(e){const t=[];let n=new J,i=new on,r=new J;if(e.transform&&e.transform.decompose(n,i,r),n=n.toArray(),i=new ln().setFromQuaternion(i,e.eulerOrder).toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(r,t,n);return new lr(e+"."+i,r,a)}generateRotationTrack(e,t,n,i,r,a){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(pn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(pn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(pn.degToRad));const o=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(o,t,n);i!==void 0&&(i=i.map(pn.degToRad),i.push(a),i=new ln().fromArray(i),i=new on().setFromEuler(i)),r!==void 0&&(r=r.map(pn.degToRad),r.push(a),r=new ln().fromArray(r),r=new on().setFromEuler(r).invert());const h=new on,u=new ln,c=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],a),h.setFromEuler(u),i!==void 0&&h.premultiply(i),r!==void 0&&h.multiply(r),h.toArray(c,f/3*4);return new Yi(e+".quaternion",o,c)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=Kt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new or(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const a=t[r];a!==i&&(t[n]=a,i=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let a=-1,o=-1,l=-1;return e.forEach(function(h){if(t.x&&(a=t.x.times.indexOf(h)),t.y&&(o=t.y.times.indexOf(h)),t.z&&(l=t.z.times.indexOf(h)),a!==-1){const u=t.x.values[a];r.push(u),i[0]=u}else r.push(i[0]);if(o!==-1){const u=t.y.values[o];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=t.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,r=Math.abs(i);if(r>=180){const a=r/180,o=i/a;let l=n+o;const h=e.times[t-1],c=(e.times[t]-h)/a;let f=h+c;const d=[],v=[];for(;f<e.times[t];)d.push(f),f+=c,v.push(l),l+=o;e.times=sl(e.times,t,d),e.values=sl(e.values,t,v)}}}}class Bv{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new tc,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const a=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(a||o)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),h=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):h?t.parseNodeProperty(i,h,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},a=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in o?(n==="PoseNode"?o.PoseNode.push(r):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=r)):typeof a.id=="number"?(o[n]={},o[n][a.id]=r):n!=="Properties70"&&(n==="PoseNode"?o[n]=[r]:o[n]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),h=parseInt(l[0]),u=parseInt(l[1]);let c=r.split(",").slice(3);c=c.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[h,u],Gv(r,c),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=r),i in a&&Array.isArray(a[i])?a[i].push(r):i!=="a"?a[i]=r:a.a=r,this.setCurrentProp(a,i),i==="a"&&r.slice(-1)!==","&&(a.a=Gs(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Gs(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],a=i[1],o=i[2],l=i[3];let h=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":h=parseFloat(h);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":h=Gs(h);break}this.getPrevNode()[r]={type:a,type2:o,flag:l,value:h},this.setCurrentProp(this.getPrevNode(),r)}}class Ov{parse(e){const t=new il(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new tc;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(i===0)return null;const l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));const h=l.length>0?l[0]:"",u=l.length>1?l[1]:"",c=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(o,n,f)}return n.propertyList=l,typeof h=="number"&&(n.id=h),u!==""&&(n.attrName=u),c!==""&&(n.attrType=c),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,a){a!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),a=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const o=Sv(new Uint8Array(e.getArrayBuffer(a))),l=new il(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class il{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class tc{add(e,t){this[e]=t}}function zv(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===rc(s,0,e.length)}function Vv(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function rl(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function kv(s){return s/46186158e3}const Hv=[];function Fr(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,a=r+n.dataSize;return Wv(Hv,n.buffer,r,a)}const Hs=new ln,Ci=new J;function nc(s){const e=new et,t=new et,n=new et,i=new et,r=new et,a=new et,o=new et,l=new et,h=new et,u=new et,c=new et,f=new et,d=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(Ci.fromArray(s.translation)),s.preRotation){const S=s.preRotation.map(pn.degToRad);S.push(s.eulerOrder||ln.DEFAULT_ORDER),t.makeRotationFromEuler(Hs.fromArray(S))}if(s.rotation){const S=s.rotation.map(pn.degToRad);S.push(s.eulerOrder||ln.DEFAULT_ORDER),n.makeRotationFromEuler(Hs.fromArray(S))}if(s.postRotation){const S=s.postRotation.map(pn.degToRad);S.push(s.eulerOrder||ln.DEFAULT_ORDER),i.makeRotationFromEuler(Hs.fromArray(S)),i.invert()}s.scale&&r.scale(Ci.fromArray(s.scale)),s.scalingOffset&&o.setPosition(Ci.fromArray(s.scalingOffset)),s.scalingPivot&&a.setPosition(Ci.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Ci.fromArray(s.rotationOffset)),s.rotationPivot&&h.setPosition(Ci.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(c.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const v=t.clone().multiply(n).multiply(i),g=new et;g.extractRotation(u);const m=new et;m.copyPosition(u);const p=m.clone().invert().multiply(u),_=g.clone().invert().multiply(p),y=r,x=new et;if(d===0)x.copy(g).multiply(v).multiply(_).multiply(y);else if(d===1)x.copy(g).multiply(_).multiply(v).multiply(y);else{const P=new et().scale(new J().setFromMatrixScale(c)).clone().invert(),O=_.clone().multiply(P);x.copy(g).multiply(v).multiply(O).multiply(y)}const E=h.clone().invert(),A=a.clone().invert();let R=e.clone().multiply(l).multiply(h).multiply(t).multiply(n).multiply(i).multiply(E).multiply(o).multiply(a).multiply(r).multiply(A);const C=new et().copyPosition(R),M=u.clone().multiply(C);return f.copyPosition(M),R=f.clone().multiply(x),R.premultiply(u.invert()),R}function ic(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Gs(s){return s.split(",").map(function(t){return parseFloat(t)})}function rc(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function Gv(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function Wv(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}function sl(s,e,t){return s.slice(0,e).concat(t).concat(s.slice(e))}const al={type:"change"},Ws={type:"start"},ol={type:"end"},Br=new Qr,ll=new Vn,Xv=Math.cos(70*pn.DEG2RAD);class qv extends ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},this.touches={ONE:ui.ROTATE,TWO:ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(X){X.addEventListener("keydown",T),this._domElementKeyEvents=X},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(al),n.update(),r=i.NONE},this.update=function(){const X=new J,Me=new on().setFromUnitVectors(e.up,new J(0,1,0)),pe=Me.clone().invert(),$e=new J,Ye=new on,Ke=new J,Ge=2*Math.PI;return function(Ee=null){const Se=n.object.position;X.copy(Se).sub(n.target),X.applyQuaternion(Me),o.setFromVector3(X),n.autoRotate&&r===i.NONE&&P(M(Ee)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ae=n.minAzimuthAngle,Ce=n.maxAzimuthAngle;isFinite(Ae)&&isFinite(Ce)&&(Ae<-Math.PI?Ae+=Ge:Ae>Math.PI&&(Ae-=Ge),Ce<-Math.PI?Ce+=Ge:Ce>Math.PI&&(Ce-=Ge),Ae<=Ce?o.theta=Math.max(Ae,Math.min(Ce,o.theta)):o.theta=o.theta>(Ae+Ce)/2?Math.max(Ae,o.theta):Math.min(Ce,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*h),X.setFromSpherical(o),X.applyQuaternion(pe),Se.copy(n.target).add(X),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ve=!1;if(n.zoomToCursor&&A){let Xe=null;if(n.object.isPerspectiveCamera){const Je=X.length();Xe=Y(Je*h);const yt=Je-Xe;n.object.position.addScaledVector(x,yt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Je=new J(E.x,E.y,0);Je.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),ve=!0;const yt=new J(E.x,E.y,0);yt.unproject(n.object),n.object.position.sub(yt).add(Je),n.object.updateMatrixWorld(),Xe=X.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Xe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Xe).add(n.object.position):(Br.origin.copy(n.object.position),Br.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Br.direction))<Xv?e.lookAt(n.target):(ll.setFromNormalAndCoplanarPoint(n.object.up,n.target),Br.intersectPlane(ll,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),ve=!0);return h=1,A=!1,ve||$e.distanceToSquared(n.object.position)>a||8*(1-Ye.dot(n.object.quaternion))>a||Ke.distanceToSquared(n.target)>0?(n.dispatchEvent(al),$e.copy(n.object.position),Ye.copy(n.object.quaternion),Ke.copy(n.target),ve=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",fe),n.domElement.removeEventListener("pointerdown",Le),n.domElement.removeEventListener("pointercancel",xe),n.domElement.removeEventListener("wheel",N),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",xe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new tl,l=new tl;let h=1;const u=new J,c=new st,f=new st,d=new st,v=new st,g=new st,m=new st,p=new st,_=new st,y=new st,x=new J,E=new st;let A=!1;const R=[],C={};function M(X){return X!==null?2*Math.PI/60*n.autoRotateSpeed*X:2*Math.PI/60/60*n.autoRotateSpeed}function S(){return Math.pow(.95,n.zoomSpeed)}function P(X){l.theta-=X}function O(X){l.phi-=X}const V=function(){const X=new J;return function(pe,$e){X.setFromMatrixColumn($e,0),X.multiplyScalar(-pe),u.add(X)}}(),I=function(){const X=new J;return function(pe,$e){n.screenSpacePanning===!0?X.setFromMatrixColumn($e,1):(X.setFromMatrixColumn($e,0),X.crossVectors(n.object.up,X)),X.multiplyScalar(pe),u.add(X)}}(),G=function(){const X=new J;return function(pe,$e){const Ye=n.domElement;if(n.object.isPerspectiveCamera){const Ke=n.object.position;X.copy(Ke).sub(n.target);let Ge=X.length();Ge*=Math.tan(n.object.fov/2*Math.PI/180),V(2*pe*Ge/Ye.clientHeight,n.object.matrix),I(2*$e*Ge/Ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(pe*(n.object.right-n.object.left)/n.object.zoom/Ye.clientWidth,n.object.matrix),I($e*(n.object.top-n.object.bottom)/n.object.zoom/Ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(X){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=X:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(X){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=X:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(X){if(!n.zoomToCursor)return;A=!0;const Me=n.domElement.getBoundingClientRect(),pe=X.clientX-Me.left,$e=X.clientY-Me.top,Ye=Me.width,Ke=Me.height;E.x=pe/Ye*2-1,E.y=-($e/Ke)*2+1,x.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(X){return Math.max(n.minDistance,Math.min(n.maxDistance,X))}function W(X){c.set(X.clientX,X.clientY)}function b(X){z(X),p.set(X.clientX,X.clientY)}function F(X){v.set(X.clientX,X.clientY)}function U(X){f.set(X.clientX,X.clientY),d.subVectors(f,c).multiplyScalar(n.rotateSpeed);const Me=n.domElement;P(2*Math.PI*d.x/Me.clientHeight),O(2*Math.PI*d.y/Me.clientHeight),c.copy(f),n.update()}function D(X){_.set(X.clientX,X.clientY),y.subVectors(_,p),y.y>0?$(S()):y.y<0&&B(S()),p.copy(_),n.update()}function L(X){g.set(X.clientX,X.clientY),m.subVectors(g,v).multiplyScalar(n.panSpeed),G(m.x,m.y),v.copy(g),n.update()}function K(X){z(X),X.deltaY<0?B(S()):X.deltaY>0&&$(S()),n.update()}function se(X){let Me=!1;switch(X.code){case n.keys.UP:X.ctrlKey||X.metaKey||X.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),Me=!0;break;case n.keys.BOTTOM:X.ctrlKey||X.metaKey||X.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),Me=!0;break;case n.keys.LEFT:X.ctrlKey||X.metaKey||X.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),Me=!0;break;case n.keys.RIGHT:X.ctrlKey||X.metaKey||X.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),Me=!0;break}Me&&(X.preventDefault(),n.update())}function te(){if(R.length===1)c.set(R[0].pageX,R[0].pageY);else{const X=.5*(R[0].pageX+R[1].pageX),Me=.5*(R[0].pageY+R[1].pageY);c.set(X,Me)}}function Q(){if(R.length===1)v.set(R[0].pageX,R[0].pageY);else{const X=.5*(R[0].pageX+R[1].pageX),Me=.5*(R[0].pageY+R[1].pageY);v.set(X,Me)}}function he(){const X=R[0].pageX-R[1].pageX,Me=R[0].pageY-R[1].pageY,pe=Math.sqrt(X*X+Me*Me);p.set(0,pe)}function ce(){n.enableZoom&&he(),n.enablePan&&Q()}function q(){n.enableZoom&&he(),n.enableRotate&&te()}function Re(X){if(R.length==1)f.set(X.pageX,X.pageY);else{const pe=Fe(X),$e=.5*(X.pageX+pe.x),Ye=.5*(X.pageY+pe.y);f.set($e,Ye)}d.subVectors(f,c).multiplyScalar(n.rotateSpeed);const Me=n.domElement;P(2*Math.PI*d.x/Me.clientHeight),O(2*Math.PI*d.y/Me.clientHeight),c.copy(f)}function de(X){if(R.length===1)g.set(X.pageX,X.pageY);else{const Me=Fe(X),pe=.5*(X.pageX+Me.x),$e=.5*(X.pageY+Me.y);g.set(pe,$e)}m.subVectors(g,v).multiplyScalar(n.panSpeed),G(m.x,m.y),v.copy(g)}function ae(X){const Me=Fe(X),pe=X.pageX-Me.x,$e=X.pageY-Me.y,Ye=Math.sqrt(pe*pe+$e*$e);_.set(0,Ye),y.set(0,Math.pow(_.y/p.y,n.zoomSpeed)),$(y.y),p.copy(_)}function oe(X){n.enableZoom&&ae(X),n.enablePan&&de(X)}function Ze(X){n.enableZoom&&ae(X),n.enableRotate&&Re(X)}function Le(X){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(X.pointerId),n.domElement.addEventListener("pointermove",He),n.domElement.addEventListener("pointerup",xe)),ge(X),X.pointerType==="touch"?ee(X):Qe(X))}function He(X){n.enabled!==!1&&(X.pointerType==="touch"?me(X):it(X))}function xe(X){ke(X),R.length===0&&(n.domElement.releasePointerCapture(X.pointerId),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",xe)),n.dispatchEvent(ol),r=i.NONE}function Qe(X){let Me;switch(X.button){case 0:Me=n.mouseButtons.LEFT;break;case 1:Me=n.mouseButtons.MIDDLE;break;case 2:Me=n.mouseButtons.RIGHT;break;default:Me=-1}switch(Me){case hi.DOLLY:if(n.enableZoom===!1)return;b(X),r=i.DOLLY;break;case hi.ROTATE:if(X.ctrlKey||X.metaKey||X.shiftKey){if(n.enablePan===!1)return;F(X),r=i.PAN}else{if(n.enableRotate===!1)return;W(X),r=i.ROTATE}break;case hi.PAN:if(X.ctrlKey||X.metaKey||X.shiftKey){if(n.enableRotate===!1)return;W(X),r=i.ROTATE}else{if(n.enablePan===!1)return;F(X),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ws)}function it(X){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;U(X);break;case i.DOLLY:if(n.enableZoom===!1)return;D(X);break;case i.PAN:if(n.enablePan===!1)return;L(X);break}}function N(X){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(X.preventDefault(),n.dispatchEvent(Ws),K(X),n.dispatchEvent(ol))}function T(X){n.enabled===!1||n.enablePan===!1||se(X)}function ee(X){switch(we(X),R.length){case 1:switch(n.touches.ONE){case ui.ROTATE:if(n.enableRotate===!1)return;te(),r=i.TOUCH_ROTATE;break;case ui.PAN:if(n.enablePan===!1)return;Q(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ui.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ce(),r=i.TOUCH_DOLLY_PAN;break;case ui.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;q(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ws)}function me(X){switch(we(X),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Re(X),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(X),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;oe(X),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ze(X),n.update();break;default:r=i.NONE}}function fe(X){n.enabled!==!1&&X.preventDefault()}function ge(X){R.push(X)}function ke(X){delete C[X.pointerId];for(let Me=0;Me<R.length;Me++)if(R[Me].pointerId==X.pointerId){R.splice(Me,1);return}}function we(X){let Me=C[X.pointerId];Me===void 0&&(Me=new st,C[X.pointerId]=Me),Me.set(X.pageX,X.pageY)}function Fe(X){const Me=X.pointerId===R[0].pointerId?R[1]:R[0];return C[Me.pointerId]}n.domElement.addEventListener("contextmenu",fe),n.domElement.addEventListener("pointerdown",Le),n.domElement.addEventListener("pointercancel",xe),n.domElement.addEventListener("wheel",N,{passive:!1}),this.update()}}class Yv extends Km{constructor(e){super(e),this.type=In}parse(e){const a=function(C,M){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},u=`
`,c=function(C,M,S){M=M||1024;let O=C.pos,V=-1,I=0,G="",$=String.fromCharCode.apply(null,new Uint16Array(C.subarray(O,O+128)));for(;0>(V=$.indexOf(u))&&I<M&&O<C.byteLength;)G+=$,I+=$.length,O+=128,$+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(O,O+128)));return-1<V?(S!==!1&&(C.pos+=I+V+1),G+$.slice(0,V)):!1},f=function(C){const M=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,V=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,I={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let G,$;for((C.pos>=C.byteLength||!(G=c(C)))&&a(1,"no header found"),($=G.match(M))||a(3,"bad initial token"),I.valid|=1,I.programtype=$[1],I.string+=G+`
`;G=c(C),G!==!1;){if(I.string+=G+`
`,G.charAt(0)==="#"){I.comments+=G+`
`;continue}if(($=G.match(S))&&(I.gamma=parseFloat($[1])),($=G.match(P))&&(I.exposure=parseFloat($[1])),($=G.match(O))&&(I.valid|=2,I.format=$[1]),($=G.match(V))&&(I.valid|=4,I.height=parseInt($[1],10),I.width=parseInt($[2],10)),I.valid&2&&I.valid&4)break}return I.valid&2||a(3,"missing format specifier"),I.valid&4||a(3,"missing image size specifier"),I},d=function(C,M,S){const P=M;if(P<8||P>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);P!==(C[2]<<8|C[3])&&a(3,"wrong scanline width");const O=new Uint8Array(4*M*S);O.length||a(4,"unable to allocate buffer space");let V=0,I=0;const G=4*P,$=new Uint8Array(4),B=new Uint8Array(G);let z=S;for(;z>0&&I<C.byteLength;){I+4>C.byteLength&&a(1),$[0]=C[I++],$[1]=C[I++],$[2]=C[I++],$[3]=C[I++],($[0]!=2||$[1]!=2||($[2]<<8|$[3])!=P)&&a(3,"bad rgbe scanline format");let Y=0,W;for(;Y<G&&I<C.byteLength;){W=C[I++];const F=W>128;if(F&&(W-=128),(W===0||Y+W>G)&&a(3,"bad scanline data"),F){const U=C[I++];for(let D=0;D<W;D++)B[Y++]=U}else B.set(C.subarray(I,I+W),Y),Y+=W,I+=W}const b=P;for(let F=0;F<b;F++){let U=0;O[V]=B[F+U],U+=P,O[V+1]=B[F+U],U+=P,O[V+2]=B[F+U],U+=P,O[V+3]=B[F+U],V+=4}z--}return O},v=function(C,M,S,P){const O=C[M+3],V=Math.pow(2,O-128)/255;S[P+0]=C[M+0]*V,S[P+1]=C[M+1]*V,S[P+2]=C[M+2]*V,S[P+3]=1},g=function(C,M,S,P){const O=C[M+3],V=Math.pow(2,O-128)/255;S[P+0]=Mr.toHalfFloat(Math.min(C[M+0]*V,65504)),S[P+1]=Mr.toHalfFloat(Math.min(C[M+1]*V,65504)),S[P+2]=Mr.toHalfFloat(Math.min(C[M+2]*V,65504)),S[P+3]=Mr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=f(m),_=p.width,y=p.height,x=d(m.subarray(m.pos),_,y);let E,A,R;switch(this.type){case an:R=x.length/4;const C=new Float32Array(R*4);for(let S=0;S<R;S++)v(x,S*4,C,S*4);E=C,A=an;break;case In:R=x.length/4;const M=new Uint16Array(R*4);for(let S=0;S<R;S++)g(x,S*4,M,S*4);E=M,A=In;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:_,height:y,data:E,header:p.string,gamma:p.gamma,exposure:p.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case an:case In:a.colorSpace=_n,a.minFilter=Vt,a.magFilter=Vt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}}function Or(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var sc={exports:{}};(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function a(h,u){if(!i[h]){if(!n[h]){var c=typeof Or=="function"&&Or;if(!u&&c)return c(h,!0);if(o)return o(h,!0);throw new Error("Cannot find module '"+h+"'")}var f=i[h]={exports:{}};n[h][0].call(f.exports,function(d){var v=n[h][1][d];return a(v||d)},f,f.exports,t,n,i,r)}return i[h].exports}for(var o=typeof Or=="function"&&Or,l=0;l<r.length;l++)a(r[l]);return a}({1:[function(t,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,n,i){n.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,n,i){var r=t("../math/Vec3");t("../utils/Utils"),n.exports=a;function a(h){h=h||{},this.lowerBound=new r,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new r,h.upperBound&&this.upperBound.copy(h.upperBound)}var o=new r;a.prototype.setFromPoints=function(h,u,c,f){var d=this.lowerBound,v=this.upperBound,g=c;d.copy(h[0]),g&&g.vmult(d,d),v.copy(d);for(var m=1;m<h.length;m++){var p=h[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<d.x&&(d.x=p.x),p.y>v.y&&(v.y=p.y),p.y<d.y&&(d.y=p.y),p.z>v.z&&(v.z=p.z),p.z<d.z&&(d.z=p.z)}return u&&(u.vadd(d,d),u.vadd(v,v)),f&&(d.x-=f,d.y-=f,d.z-=f,v.x+=f,v.y+=f,v.z+=f),this},a.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(h){var u=h.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var c=h.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var u=h.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var c=h.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var u=h.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var c=h.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},a.prototype.overlaps=function(h){var u=this.lowerBound,c=this.upperBound,f=h.lowerBound,d=h.upperBound;return(f.x<=c.x&&c.x<=d.x||u.x<=d.x&&d.x<=c.x)&&(f.y<=c.y&&c.y<=d.y||u.y<=d.y&&d.y<=c.y)&&(f.z<=c.z&&c.z<=d.z||u.z<=d.z&&d.z<=c.z)},a.prototype.contains=function(h){var u=this.lowerBound,c=this.upperBound,f=h.lowerBound,d=h.upperBound;return u.x<=f.x&&c.x>=d.x&&u.y<=f.y&&c.y>=d.y&&u.z<=f.z&&c.z>=d.z},a.prototype.getCorners=function(h,u,c,f,d,v,g,m){var p=this.lowerBound,_=this.upperBound;h.copy(p),u.set(_.x,p.y,p.z),c.set(_.x,_.y,p.z),f.set(p.x,_.y,_.z),d.set(_.x,p.y,p.z),v.set(p.x,_.y,p.z),g.set(p.x,p.y,_.z),m.copy(_)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(h,u){var c=l,f=c[0],d=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(f,d,v,g,m,p,_,y);for(var x=0;x!==8;x++){var E=c[x];h.pointToLocal(E,E)}return u.setFromPoints(c)},a.prototype.toWorldFrame=function(h,u){var c=l,f=c[0],d=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(f,d,v,g,m,p,_,y);for(var x=0;x!==8;x++){var E=c[x];h.pointToWorld(E,E)}return u.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,n,i){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var l=o;o=a,a=l}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,l){if(a=a.index,o=o.index,o>a){var h=o;o=a,a=h}this.matrix[(a*(a+1)>>1)+o-1]=l?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(t,n,i){var r=t("../objects/Body"),a=t("../math/Vec3"),o=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&h||g.sleepState===r.SLEEPING)&&(m.type&h||m.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(g,m,p,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,_):this.doBoundingSphereBroadphase(g,m,p,_)};var u=new a;new a,new o,new a,l.prototype.doBoundingSphereBroadphase=function(g,m,p,_){var y=u;m.position.vsub(g.position,y);var x=Math.pow(g.boundingRadius+m.boundingRadius,2),E=y.norm2();E<x&&(p.push(g),_.push(m))},l.prototype.doBoundingBoxBroadphase=function(g,m,p,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),_.push(m))};var c={keys:[]},f=[],d=[];l.prototype.makePairsUnique=function(g,m){for(var p=c,_=f,y=d,x=g.length,E=0;E!==x;E++)_[E]=g[E],y[E]=m[E];g.length=0,m.length=0;for(var E=0;E!==x;E++){var A=_[E].id,R=y[E].id,C=A<R?A+","+R:R+","+A;p[C]=E,p.keys.push(C)}for(var E=0;E!==p.keys.length;E++){var C=p.keys.pop(),M=p[C];g.push(_[M]),m.push(y[M]),delete p[C]}},l.prototype.setWorld=function(g){};var v=new a;l.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,n,i){n.exports=l;var r=t("./Broadphase"),a=t("../math/Vec3"),o=t("../shapes/Shape");function l(u,c,f,d,v){r.apply(this),this.nx=f||10,this.ny=d||10,this.nz=v||10,this.aabbMin=u||new a(100,100,100),this.aabbMax=c||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new r,l.prototype.constructor=l;var h=new a;new a,l.prototype.collisionPairs=function(u,c,f){var d=u.numObjects(),v=u.bodies,se=this.aabbMax,K=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,_=m*p,y=p,x=1,E=se.x,A=se.y,R=se.z,C=K.x,M=K.y,S=K.z,P=g/(E-C),O=m/(A-M),V=p/(R-S),I=(E-C)/g,G=(A-M)/m,$=(R-S)/p,B=Math.sqrt(I*I+G*G+$*$)*.5,z=o.types,Y=z.SPHERE,W=z.PLANE;z.BOX,z.COMPOUND,z.CONVEXPOLYHEDRON;for(var b=this.bins,F=this.binLengths,U=this.bins.length,D=0;D!==U;D++)F[D]=0;var L=Math.ceil,K=Math.min,se=Math.max;function te(we,Fe,X,Me,pe,$e,Ye){var Ke=(we-C)*P|0,Ge=(Fe-M)*O|0,H=(X-S)*V|0,Ee=L((Me-C)*P),Se=L((pe-M)*O),Ae=L(($e-S)*V);Ke<0?Ke=0:Ke>=g&&(Ke=g-1),Ge<0?Ge=0:Ge>=m&&(Ge=m-1),H<0?H=0:H>=p&&(H=p-1),Ee<0?Ee=0:Ee>=g&&(Ee=g-1),Se<0?Se=0:Se>=m&&(Se=m-1),Ae<0?Ae=0:Ae>=p&&(Ae=p-1),Ke*=_,Ge*=y,H*=x,Ee*=_,Se*=y,Ae*=x;for(var Ce=Ke;Ce<=Ee;Ce+=_)for(var ve=Ge;ve<=Se;ve+=y)for(var Xe=H;Xe<=Ae;Xe+=x){var Je=Ce+ve+Xe;b[Je][F[Je]++]=Ye}}for(var D=0;D!==d;D++){var Q=v[D],he=Q.shape;switch(he.type){case Y:var ce=Q.position.x,q=Q.position.y,Re=Q.position.z,de=he.radius;te(ce-de,q-de,Re-de,ce+de,q+de,Re+de,Q);break;case W:he.worldNormalNeedsUpdate&&he.computeWorldNormal(Q.quaternion);var ae=he.worldNormal,oe=C+I*.5-Q.position.x,Ze=M+G*.5-Q.position.y,Le=S+$*.5-Q.position.z,He=h;He.set(oe,Ze,Le);for(var xe=0,Qe=0;xe!==g;xe++,Qe+=_,He.y=Ze,He.x+=I)for(var it=0,N=0;it!==m;it++,N+=y,He.z=Le,He.y+=G)for(var T=0,ee=0;T!==p;T++,ee+=x,He.z+=$)if(He.dot(ae)<B){var me=Qe+N+ee;b[me][F[me]++]=Q}break;default:Q.aabbNeedsUpdate&&Q.computeAABB(),te(Q.aabb.lowerBound.x,Q.aabb.lowerBound.y,Q.aabb.lowerBound.z,Q.aabb.upperBound.x,Q.aabb.upperBound.y,Q.aabb.upperBound.z,Q);break}}for(var D=0;D!==U;D++){var fe=F[D];if(fe>1)for(var ge=b[D],xe=0;xe!==fe;xe++)for(var Q=ge[xe],it=0;it!==xe;it++){var ke=ge[it];this.needBroadphaseCollision(Q,ke)&&this.intersectionTest(Q,ke,c,f)}}this.makePairsUnique(c,f)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,n,i){n.exports=o;var r=t("./Broadphase"),a=t("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(l,h,u){var c=l.bodies,f=c.length,d,v,g,m;for(d=0;d!==f;d++)for(v=0;v!==d;v++)g=c[d],m=c[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,h,u)},new a,o.prototype.aabbQuery=function(l,h,u){u=u||[];for(var c=0;c<l.bodies.length;c++){var f=l.bodies[c];f.aabbNeedsUpdate&&f.computeAABB(),f.aabb.overlaps(h)&&u.push(f)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(t,n,i){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var l=o;o=a,a=l}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,l){if(a=a.id,o=o.id,o>a){var h=o;o=a,a=h}l?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(t,n,i){n.exports=c;var r=t("../math/Vec3"),a=t("../math/Quaternion"),o=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var l=t("../collision/RaycastResult"),h=t("../shapes/Shape"),u=t("../collision/AABB");function c(U,D){this.from=U?U.clone():new r,this.to=D?D.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(L){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var f=new u,d=[];c.prototype.intersectWorld=function(U,D){return this.mode=D.mode||c.ANY,this.result=D.result||new l,this.skipBackfaces=!!D.skipBackfaces,this.collisionFilterMask=typeof D.collisionFilterMask<"u"?D.collisionFilterMask:-1,this.collisionFilterGroup=typeof D.collisionFilterGroup<"u"?D.collisionFilterGroup:-1,D.from&&this.from.copy(D.from),D.to&&this.to.copy(D.to),this.callback=D.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(f),d.length=0,U.broadphase.aabbQuery(U,f,d),this.intersectBodies(d),this.hasHit};var v=new r,g=new r;c.pointInTriangle=m;function m(U,D,L,K){K.vsub(D,W),L.vsub(D,v),U.vsub(D,g);var se=W.dot(W),te=W.dot(v),Q=W.dot(g),he=v.dot(v),ce=v.dot(g),q,Re;return(q=he*Q-te*ce)>=0&&(Re=se*ce-te*Q)>=0&&q+Re<se*he-te*te}var p=new r,_=new a;c.prototype.intersectBody=function(U,D){D&&(this.result=D,this._updateDirection());var L=this.checkCollisionResponse;if(!(L&&!U.collisionResponse)&&!(!(this.collisionFilterGroup&U.collisionFilterMask)||!(U.collisionFilterGroup&this.collisionFilterMask)))for(var K=p,se=_,te=0,Q=U.shapes.length;te<Q;te++){var he=U.shapes[te];if(!(L&&!he.collisionResponse)&&(U.quaternion.mult(U.shapeOrientations[te],se),U.quaternion.vmult(U.shapeOffsets[te],K),K.vadd(U.position,K),this.intersectShape(he,se,K,U),this.result._shouldStop))break}},c.prototype.intersectBodies=function(U,D){D&&(this.result=D,this._updateDirection());for(var L=0,K=U.length;!this.result._shouldStop&&L<K;L++)this.intersectBody(U[L])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(U,D,L,K){var se=this.from,te=F(se,this._direction,L);if(!(te>U.boundingSphereRadius)){var Q=this[U.type];Q&&Q.call(this,U,D,L,K)}},new r,new r;var y=new r,x=new r,E=new r,A=new r;new r,new l,c.prototype.intersectBox=function(U,D,L,K){return this.intersectConvex(U.convexPolyhedronRepresentation,D,L,K)},c.prototype[h.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(U,D,L,K){var se=this.from,te=this.to,Q=this._direction,he=new r(0,0,1);D.vmult(he,he);var ce=new r;se.vsub(L,ce);var q=ce.dot(he);te.vsub(L,ce);var Re=ce.dot(he);if(!(q*Re>0)&&!(se.distanceTo(te)<q)){var de=he.dot(Q);if(!(Math.abs(de)<this.precision)){var ae=new r,oe=new r,Ze=new r;se.vsub(L,ae);var Le=-he.dot(ae)/de;Q.scale(Le,oe),se.vadd(oe,Ze),this.reportIntersection(he,Ze,U,K,-1)}}},c.prototype[h.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(U){var D=this.to,L=this.from;U.lowerBound.x=Math.min(D.x,L.x),U.lowerBound.y=Math.min(D.y,L.y),U.lowerBound.z=Math.min(D.z,L.z),U.upperBound.x=Math.max(D.x,L.x),U.upperBound.y=Math.max(D.y,L.y),U.upperBound.z=Math.max(D.z,L.z)};var R={faceList:[0]};c.prototype.intersectHeightfield=function(U,D,L,K){U.data,U.elementSize;var se=new r,te=new c(this.from,this.to);o.pointToLocalFrame(L,D,te.from,te.from),o.pointToLocalFrame(L,D,te.to,te.to);var Q=[],he=null,ce=null,q=null,Re=null,de=U.getIndexOfPosition(te.from.x,te.from.y,Q,!1);if(de&&(he=Q[0],ce=Q[1],q=Q[0],Re=Q[1]),de=U.getIndexOfPosition(te.to.x,te.to.y,Q,!1),de&&((he===null||Q[0]<he)&&(he=Q[0]),(q===null||Q[0]>q)&&(q=Q[0]),(ce===null||Q[1]<ce)&&(ce=Q[1]),(Re===null||Q[1]>Re)&&(Re=Q[1])),he!==null){var ae=[];U.getRectMinMax(he,ce,q,Re,ae),ae[0],ae[1];for(var oe=he;oe<=q;oe++)for(var Ze=ce;Ze<=Re;Ze++){if(this.result._shouldStop||(U.getConvexTrianglePillar(oe,Ze,!1),o.pointToWorldFrame(L,D,U.pillarOffset,se),this.intersectConvex(U.pillarConvex,D,se,K,R),this.result._shouldStop))return;U.getConvexTrianglePillar(oe,Ze,!0),o.pointToWorldFrame(L,D,U.pillarOffset,se),this.intersectConvex(U.pillarConvex,D,se,K,R)}}},c.prototype[h.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var C=new r,M=new r;c.prototype.intersectSphere=function(U,D,L,K){var se=this.from,te=this.to,Q=U.radius,he=Math.pow(te.x-se.x,2)+Math.pow(te.y-se.y,2)+Math.pow(te.z-se.z,2),ce=2*((te.x-se.x)*(se.x-L.x)+(te.y-se.y)*(se.y-L.y)+(te.z-se.z)*(se.z-L.z)),q=Math.pow(se.x-L.x,2)+Math.pow(se.y-L.y,2)+Math.pow(se.z-L.z,2)-Math.pow(Q,2),Re=Math.pow(ce,2)-4*he*q,de=C,ae=M;if(!(Re<0))if(Re===0)se.lerp(te,Re,de),de.vsub(L,ae),ae.normalize(),this.reportIntersection(ae,de,U,K,-1);else{var oe=(-ce-Math.sqrt(Re))/(2*he),Ze=(-ce+Math.sqrt(Re))/(2*he);if(oe>=0&&oe<=1&&(se.lerp(te,oe,de),de.vsub(L,ae),ae.normalize(),this.reportIntersection(ae,de,U,K,-1)),this.result._shouldStop)return;Ze>=0&&Ze<=1&&(se.lerp(te,Ze,de),de.vsub(L,ae),ae.normalize(),this.reportIntersection(ae,de,U,K,-1))}},c.prototype[h.types.SPHERE]=c.prototype.intersectSphere;var S=new r;new r,new r;var P=new r;c.prototype.intersectConvex=function(D,L,K,se,te){for(var Q=S,he=P,ce=te&&te.faceList||null,q=D.faces,Re=D.vertices,de=D.faceNormals,ae=this._direction,oe=this.from,Ze=this.to,Le=oe.distanceTo(Ze),He=ce?ce.length:q.length,xe=this.result,Qe=0;!xe._shouldStop&&Qe<He;Qe++){var it=ce?ce[Qe]:Qe,N=q[it],T=de[it],ee=L,me=K;he.copy(Re[N[0]]),ee.vmult(he,he),he.vadd(me,he),he.vsub(oe,he),ee.vmult(T,Q);var fe=ae.dot(Q);if(!(Math.abs(fe)<this.precision)){var ge=Q.dot(he)/fe;if(!(ge<0)){ae.mult(ge,y),y.vadd(oe,y),x.copy(Re[N[0]]),ee.vmult(x,x),me.vadd(x,x);for(var ke=1;!xe._shouldStop&&ke<N.length-1;ke++){E.copy(Re[N[ke]]),A.copy(Re[N[ke+1]]),ee.vmult(E,E),ee.vmult(A,A),me.vadd(E,E),me.vadd(A,A);var we=y.distanceTo(oe);!(m(y,x,E,A)||m(y,E,x,A))||we>Le||this.reportIntersection(Q,y,D,se,it)}}}}},c.prototype[h.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var O=new r,V=new r,I=new r,G=new r,$=new r,B=new r;new u;var z=[],Y=new o;c.prototype.intersectTrimesh=function(D,L,K,se,te){var Q=O,he=z,ce=Y,q=P,Re=V,de=I,ae=G,oe=B,Ze=$;te&&te.faceList;var Le=D.indices;D.vertices,D.faceNormals;var He=this.from,xe=this.to,Qe=this._direction;ce.position.copy(K),ce.quaternion.copy(L),o.vectorToLocalFrame(K,L,Qe,Re),o.pointToLocalFrame(K,L,He,de),o.pointToLocalFrame(K,L,xe,ae);var it=de.distanceSquared(ae);D.tree.rayQuery(this,ce,he);for(var N=0,T=he.length;!this.result._shouldStop&&N!==T;N++){var ee=he[N];D.getNormal(ee,Q),D.getVertex(Le[ee*3],x),x.vsub(de,q);var me=Re.dot(Q),fe=Q.dot(q)/me;if(!(fe<0)){Re.scale(fe,y),y.vadd(de,y),D.getVertex(Le[ee*3+1],E),D.getVertex(Le[ee*3+2],A);var ge=y.distanceSquared(de);!(m(y,E,x,A)||m(y,x,E,A))||ge>it||(o.vectorToWorldFrame(L,Q,Ze),o.pointToWorldFrame(K,L,y,oe),this.reportIntersection(Ze,oe,D,se,ee))}}he.length=0},c.prototype[h.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(U,D,L,K,se){var te=this.from,Q=this.to,he=te.distanceTo(D),ce=this.result;if(!(this.skipBackfaces&&U.dot(this._direction)>0))switch(ce.hitFaceIndex=typeof se<"u"?se:-1,this.mode){case c.ALL:this.hasHit=!0,ce.set(te,Q,U,D,L,K,he),ce.hasHit=!0,this.callback(ce);break;case c.CLOSEST:(he<ce.distance||!ce.hasHit)&&(this.hasHit=!0,ce.hasHit=!0,ce.set(te,Q,U,D,L,K,he));break;case c.ANY:this.hasHit=!0,ce.hasHit=!0,ce.set(te,Q,U,D,L,K,he),ce._shouldStop=!0;break}};var W=new r,b=new r;function F(U,D,L){L.vsub(U,W);var K=W.dot(D);D.mult(K,b),b.vadd(U,b);var se=L.distanceTo(b);return se}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,n,i){var r=t("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,l,h,u,c,f,d){this.rayFromWorld.copy(o),this.rayToWorld.copy(l),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(u),this.shape=c,this.body=f,this.distance=d}},{"../math/Vec3":30}],11:[function(t,n,i){t("../shapes/Shape");var r=t("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(h){l.push(h.body)},this._removeBodyHandler=function(h){var u=l.indexOf(h.body);u!==-1&&l.splice(u,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var l=0;l<o.bodies.length;l++)this.axisList.push(o.bodies[l]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.x<=u.aabb.lowerBound.x);c--)o[c+1]=o[c];o[c+1]=u}return o},a.insertionSortY=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.y<=u.aabb.lowerBound.y);c--)o[c+1]=o[c];o[c+1]=u}return o},a.insertionSortZ=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.z<=u.aabb.lowerBound.z);c--)o[c+1]=o[c];o[c+1]=u}return o},a.prototype.collisionPairs=function(o,l,h){var u=this.axisList,c=u.length,f=this.axisIndex,d,v;for(this.dirty&&(this.sortList(),this.dirty=!1),d=0;d!==c;d++){var g=u[d];for(v=d+1;v<c;v++){var m=u[v];if(this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,f))break;this.intersectionTest(g,m,l,h)}}}},a.prototype.sortList=function(){for(var o=this.axisList,l=this.axisIndex,h=o.length,u=0;u!==h;u++){var c=o[u];c.aabbNeedsUpdate&&c.computeAABB()}l===0?a.insertionSortX(o):l===1?a.insertionSortY(o):l===2&&a.insertionSortZ(o)},a.checkBounds=function(o,l,h){var u,c;h===0?(u=o.position.x,c=l.position.x):h===1?(u=o.position.y,c=l.position.y):h===2&&(u=o.position.z,c=l.position.z);var f=o.boundingRadius,d=l.boundingRadius,v=u+f,g=c-d;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,l=0,h=0,u=0,c=0,f=0,d=this.axisList,v=d.length,g=1/v,m=0;m!==v;m++){var p=d[m],_=p.position.x;o+=_,l+=_*_;var y=p.position.y;h+=y,u+=y*y;var x=p.position.z;c+=x,f+=x*x}var E=l-o*o*g,A=u-h*h*g,R=f-c*c*g;E>A?E>R?this.axisIndex=0:this.axisIndex=2:A>R?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,l,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,c="x";u===1&&(c="y"),u===2&&(c="z");var f=this.axisList;l.lowerBound[c],l.upperBound[c];for(var d=0;d<f.length;d++){var v=f[d];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&h.push(v)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,n,i){n.exports=h,t("./Constraint");var r=t("./PointToPointConstraint"),a=t("../equations/ConeEquation"),o=t("../equations/RotationalEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(u,c,f){f=f||{};var d=typeof f.maxForce<"u"?f.maxForce:1e6,v=f.pivotA?f.pivotA.clone():new l,g=f.pivotB?f.pivotB.clone():new l;this.axisA=f.axisA?f.axisA.clone():new l,this.axisB=f.axisB?f.axisB.clone():new l,r.call(this,u,v,c,g,d),this.collideConnected=!!f.collideConnected,this.angle=typeof f.angle<"u"?f.angle:0;var m=this.coneEquation=new a(u,c,f),p=this.twistEquation=new o(u,c,f);this.twistAngle=typeof f.twistAngle<"u"?f.twistAngle:0,m.maxForce=0,m.minForce=-d,p.maxForce=0,p.minForce=-d,this.equations.push(m,p)}h.prototype=new r,h.constructor=h,new l,new l,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,f=this.coneEquation,d=this.twistEquation;r.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,f.axisA),c.vectorToWorldFrame(this.axisB,f.axisB),this.axisA.tangents(d.axisA,d.axisA),u.vectorToWorldFrame(d.axisA,d.axisA),this.axisB.tangents(d.axisB,d.axisB),c.vectorToWorldFrame(d.axisB,d.axisB),f.angle=this.angle,d.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,n,i){n.exports=a;var r=t("../utils/Utils");function a(o,l,h){h=r.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=l,this.id=a.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(o&&o.wakeUp(),l&&l.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(t,n,i){n.exports=o;var r=t("./Constraint"),a=t("../equations/ContactEquation");function o(l,h,u,c){r.call(this,l,h),typeof u>"u"&&(u=l.position.distanceTo(h.position)),typeof c>"u"&&(c=1e6),this.distance=u;var f=this.distanceEquation=new a(l,h);this.equations.push(f),f.minForce=-c,f.maxForce=c}o.prototype=new r,o.prototype.update=function(){var l=this.bodyA,h=this.bodyB,u=this.distanceEquation,c=this.distance*.5,f=u.ni;h.position.vsub(l.position,f),f.normalize(),f.mult(c,u.ri),f.mult(-c,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,n,i){n.exports=h,t("./Constraint");var r=t("./PointToPointConstraint"),a=t("../equations/RotationalEquation"),o=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(f,d,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new l,p=v.pivotB?v.pivotB.clone():new l;r.call(this,f,m,d,p,g);var _=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);_.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);y.normalize();var x=this.rotationalEquation1=new a(f,d,v),E=this.rotationalEquation2=new a(f,d,v),A=this.motorEquation=new o(f,d,g);A.enabled=!1,this.equations.push(x,E,A)}h.prototype=new r,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(f){this.motorEquation.targetVelocity=f},h.prototype.setMotorMaxForce=function(f){this.motorEquation.maxForce=f,this.motorEquation.minForce=-f};var u=new l,c=new l;h.prototype.update=function(){var f=this.bodyA,d=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=u,_=c,y=this.axisA,x=this.axisB;r.prototype.update.call(this),f.quaternion.vmult(y,p),d.quaternion.vmult(x,_),p.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(f.quaternion.vmult(this.axisA,v.axisA),d.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,n,i){n.exports=l,t("./Constraint");var r=t("./PointToPointConstraint"),a=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var o=t("../math/Vec3");function l(h,u,c){c=c||{};var f=typeof c.maxForce<"u"?c.maxForce:1e6,d=new o,v=new o,g=new o;h.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,v),h.pointToLocalFrame(g,d),r.call(this,h,d,u,v,f);var m=this.rotationalEquation1=new a(h,u,c),p=this.rotationalEquation2=new a(h,u,c),_=this.rotationalEquation3=new a(h,u,c);this.equations.push(m,p,_)}l.prototype=new r,l.constructor=l,new o,new o,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,f=this.rotationalEquation2,d=this.rotationalEquation3;r.prototype.update.call(this),h.vectorToWorldFrame(o.UNIT_X,c.axisA),u.vectorToWorldFrame(o.UNIT_Y,c.axisB),h.vectorToWorldFrame(o.UNIT_Y,f.axisA),u.vectorToWorldFrame(o.UNIT_Z,f.axisB),h.vectorToWorldFrame(o.UNIT_Z,d.axisA),u.vectorToWorldFrame(o.UNIT_X,d.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,n,i){n.exports=l;var r=t("./Constraint"),a=t("../equations/ContactEquation"),o=t("../math/Vec3");function l(h,u,c,f,d){r.call(this,h,c),d=typeof d<"u"?d:1e6,this.pivotA=u?u.clone():new o,this.pivotB=f?f.clone():new o;var v=this.equationX=new a(h,c),g=this.equationY=new a(h,c),m=this.equationZ=new a(h,c);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-d,v.maxForce=g.maxForce=m.maxForce=d,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.equationX,f=this.equationY,d=this.equationZ;h.quaternion.vmult(this.pivotA,c.ri),u.quaternion.vmult(this.pivotB,c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,n,i){n.exports=o;var r=t("../math/Vec3");t("../math/Mat3");var a=t("./Equation");function o(u,c,f){f=f||{};var d=typeof f.maxForce<"u"?f.maxForce:1e6;a.call(this,u,c,-d,d),this.axisA=f.axisA?f.axisA.clone():new r(1,0,0),this.axisB=f.axisB?f.axisB.clone():new r(0,1,0),this.angle=typeof f.angle<"u"?f.angle:0}o.prototype=new a,o.prototype.constructor=o;var l=new r,h=new r;o.prototype.computeB=function(u){var c=this.a,f=this.b,d=this.axisA,v=this.axisB,g=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;d.cross(v,g),v.cross(d,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.angle)-d.dot(v),x=this.computeGW(),E=this.computeGiMf(),A=-y*c-x*f-u*E;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,n,i){n.exports=o;var r=t("./Equation"),a=t("../math/Vec3");t("../math/Mat3");function o(m,p,_){_=typeof _<"u"?_:1e6,r.call(this,m,p,0,_),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var l=new a,h=new a,u=new a;o.prototype.computeB=function(m){var p=this.a,_=this.b,y=this.bi,x=this.bj,E=this.ri,A=this.rj,R=l,C=h,M=y.velocity,S=y.angularVelocity;y.force,y.torque;var P=x.velocity,O=x.angularVelocity;x.force,x.torque;var V=u,I=this.jacobianElementA,G=this.jacobianElementB,$=this.ni;E.cross($,R),A.cross($,C),$.negate(I.spatial),R.negate(I.rotational),G.spatial.copy($),G.rotational.copy(C),V.copy(x.position),V.vadd(A,V),V.vsub(y.position,V),V.vsub(E,V);var B=$.dot(V),z=this.restitution+1,Y=z*P.dot($)-z*M.dot($)+O.dot(C)-S.dot(R),W=this.computeGiMf(),b=-B*p-Y*_-m*W;return b};var c=new a,f=new a,d=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=c,p=f,_=d,y=v,x=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(y,p),m.vsub(p,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,n,i){n.exports=o;var r=t("../math/JacobianElement"),a=t("../math/Vec3");function o(g,m,p,_){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var _=m,y=g,x=p;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},o.prototype.computeB=function(g,m,p){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*g-_*m-x*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.position,x=_.position;return g.spatial.dot(y)+m.spatial.dot(x)};var l=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.velocity,x=_.velocity,E=p.angularVelocity||l,A=_.angularVelocity||l;return g.multiplyVectors(y,E)+m.multiplyVectors(x,A)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.vlambda,x=_.vlambda,E=p.wlambda||l,A=_.wlambda||l;return g.multiplyVectors(y,E)+m.multiplyVectors(x,A)};var h=new a,u=new a,c=new a,f=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.force,x=p.torque,E=_.force,A=_.torque,R=p.invMassSolve,C=_.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(x,c):c.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(A,f):f.set(0,0,0),y.mult(R,h),E.mult(C,u),g.multiplyVectors(h,c)+m.multiplyVectors(u,f)};var d=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.invMassSolve,x=_.invMassSolve,E=p.invInertiaWorldSolve,A=_.invInertiaWorldSolve,R=y+x;return E&&(E.vmult(g.rotational,d),R+=d.dot(g.rotational)),A&&(A.vmult(m.rotational,d),R+=d.dot(m.rotational)),R};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,_=this.bi,y=this.bj,x=v;m.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),p.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,n,i){n.exports=o;var r=t("./Equation"),a=t("../math/Vec3");t("../math/Mat3");function o(u,c,f){r.call(this,u,c,-f,f),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var l=new a,h=new a;o.prototype.computeB=function(u){this.a;var c=this.b;this.bi,this.bj;var f=this.ri,d=this.rj,v=l,g=h,m=this.t;f.cross(m,v),d.cross(m,g);var p=this.jacobianElementA,_=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),_.spatial.copy(m),_.rotational.copy(g);var y=this.computeGW(),x=this.computeGiMf(),E=-y*c-u*x;return E}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,n,i){n.exports=o;var r=t("../math/Vec3");t("../math/Mat3");var a=t("./Equation");function o(u,c,f){f=f||{};var d=typeof f.maxForce<"u"?f.maxForce:1e6;a.call(this,u,c,-d,d),this.axisA=f.axisA?f.axisA.clone():new r(1,0,0),this.axisB=f.axisB?f.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var l=new r,h=new r;o.prototype.computeB=function(u){var c=this.a,f=this.b,d=this.axisA,v=this.axisB,g=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;d.cross(v,g),v.cross(d,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.maxAngle)-d.dot(v),x=this.computeGW(),E=this.computeGiMf(),A=-y*c-x*f-u*E;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,n,i){n.exports=o;var r=t("../math/Vec3");t("../math/Mat3");var a=t("./Equation");function o(l,h,u){u=typeof u<"u"?u:1e6,a.call(this,l,h,-u,u),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(l){this.a;var h=this.b;this.bi,this.bj;var u=this.axisA,c=this.axisB,f=this.jacobianElementA,d=this.jacobianElementB;f.rotational.copy(u),c.negate(d.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*h-l*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,n,i){var r=t("../utils/Utils");n.exports=a;function a(o,l,h){h=r.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,l],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(t,n,i){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(t,n,i){n.exports=a;var r=t("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,l){return o.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,n,i){n.exports=a;var r=t("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var l=this.elements;l[0]=o.x,l[4]=o.y,l[8]=o.z},a.prototype.getTrace=function(l){var l=l||new r,h=this.elements;l.x=h[0],l.y=h[4],l.z=h[8]},a.prototype.vmult=function(o,l){l=l||new r;var h=this.elements,u=o.x,c=o.y,f=o.z;return l.x=h[0]*u+h[1]*c+h[2]*f,l.y=h[3]*u+h[4]*c+h[5]*f,l.z=h[6]*u+h[7]*c+h[8]*f,l},a.prototype.smult=function(o){for(var l=0;l<this.elements.length;l++)this.elements[l]*=o},a.prototype.mmult=function(o,l){for(var h=l||new a,u=0;u<3;u++)for(var c=0;c<3;c++){for(var f=0,d=0;d<3;d++)f+=o.elements[u+d*3]*this.elements[d+c*3];h.elements[u+c*3]=f}return h},a.prototype.scale=function(o,l){l=l||new a;for(var h=this.elements,u=l.elements,c=0;c!==3;c++)u[3*c+0]=o.x*h[3*c+0],u[3*c+1]=o.y*h[3*c+1],u[3*c+2]=o.z*h[3*c+2];return l},a.prototype.solve=function(o,l){l=l||new r;for(var h=3,u=4,c=[],f=0;f<h*u;f++)c.push(0);var f,d;for(f=0;f<3;f++)for(d=0;d<3;d++)c[f+u*d]=this.elements[f+3*d];c[3+4*0]=o.x,c[3+4*1]=o.y,c[3+4*2]=o.z;var v=3,g=v,m,p=4,_;do{if(f=g-v,c[f+u*f]===0){for(d=f+1;d<g;d++)if(c[f+u*d]!==0){m=p;do _=p-m,c[_+u*f]+=c[_+u*d];while(--m);break}}if(c[f+u*f]!==0)for(d=f+1;d<g;d++){var y=c[f+u*d]/c[f+u*f];m=p;do _=p-m,c[_+u*d]=_<=f?0:c[_+u*d]-c[_+u*f]*y;while(--m)}}while(--v);if(l.z=c[2*u+3]/c[2*u+2],l.y=(c[1*u+3]-c[1*u+2]*l.z)/c[1*u+1],l.x=(c[0*u+3]-c[0*u+2]*l.z-c[0*u+1]*l.y)/c[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return l},a.prototype.e=function(o,l,h){if(h===void 0)return this.elements[l+3*o];this.elements[l+3*o]=h},a.prototype.copy=function(o){for(var l=0;l<o.elements.length;l++)this.elements[l]=o.elements[l];return this},a.prototype.toString=function(){for(var o="",l=",",h=0;h<9;h++)o+=this.elements[h]+l;return o},a.prototype.reverse=function(o){o=o||new a;for(var l=3,h=6,u=[],c=0;c<l*h;c++)u.push(0);var c,f;for(c=0;c<3;c++)for(f=0;f<3;f++)u[c+h*f]=this.elements[c+3*f];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var d=3,v=d,g,m=h,p;do{if(c=v-d,u[c+h*c]===0){for(f=c+1;f<v;f++)if(u[c+h*f]!==0){g=m;do p=m-g,u[p+h*c]+=u[p+h*f];while(--g);break}}if(u[c+h*c]!==0)for(f=c+1;f<v;f++){var _=u[c+h*f]/u[c+h*c];g=m;do p=m-g,u[p+h*f]=p<=c?0:u[p+h*f]-u[p+h*c]*_;while(--g)}}while(--d);c=2;do{f=c-1;do{var _=u[c+h*f]/u[c+h*c];g=h;do p=h-g,u[p+h*f]=u[p+h*f]-u[p+h*c]*_;while(--g)}while(f--)}while(--c);c=2;do{var _=1/u[c+h*c];g=h;do p=h-g,u[p+h*c]=u[p+h*c]*_;while(--g)}while(c--);c=2;do{f=2;do{if(p=u[l+f+h*c],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(c,f,p)}while(f--)}while(c--);return o},a.prototype.setRotationFromQuaternion=function(o){var l=o.x,h=o.y,u=o.z,c=o.w,f=l+l,d=h+h,v=u+u,g=l*f,m=l*d,p=l*v,_=h*d,y=h*v,x=u*v,E=c*f,A=c*d,R=c*v,C=this.elements;return C[3*0+0]=1-(_+x),C[3*0+1]=m-R,C[3*0+2]=p+A,C[3*1+0]=m+R,C[3*1+1]=1-(g+x),C[3*1+2]=y-E,C[3*2+0]=p-A,C[3*2+1]=y+E,C[3*2+2]=1-(g+_),this},a.prototype.transpose=function(o){o=o||new a;for(var l=o.elements,h=this.elements,u=0;u!==3;u++)for(var c=0;c!==3;c++)l[3*u+c]=h[3*c+u];return o}},{"./Vec3":30}],28:[function(t,n,i){n.exports=a;var r=t("./Vec3");function a(f,d,v,g){this.x=f!==void 0?f:0,this.y=d!==void 0?d:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(f,d,v,g){this.x=f,this.y=d,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(f,d){var v=Math.sin(d*.5);this.x=f.x*v,this.y=f.y*v,this.z=f.z*v,this.w=Math.cos(d*.5)},a.prototype.toAxisAngle=function(f){f=f||new r,this.normalize();var d=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(f.x=this.x,f.y=this.y,f.z=this.z):(f.x=this.x/v,f.y=this.y/v,f.z=this.z/v),[f,d]};var o=new r,l=new r;a.prototype.setFromVectors=function(f,d){if(f.isAntiparallelTo(d)){var v=o,g=l;f.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=f.cross(d);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(f.norm(),2)*Math.pow(d.norm(),2))+f.dot(d),this.normalize()}};var h=new r,u=new r,c=new r;a.prototype.mult=function(f,d){d=d||new a;var v=this.w,g=h,m=u,p=c;return g.set(this.x,this.y,this.z),m.set(f.x,f.y,f.z),d.w=v*f.w-g.dot(m),g.cross(m,p),d.x=v*m.x+f.w*g.x+p.x,d.y=v*m.y+f.w*g.y+p.y,d.z=v*m.z+f.w*g.z+p.z,d},a.prototype.inverse=function(f){var d=this.x,v=this.y,g=this.z,m=this.w;f=f||new a,this.conjugate(f);var p=1/(d*d+v*v+g*g+m*m);return f.x*=p,f.y*=p,f.z*=p,f.w*=p,f},a.prototype.conjugate=function(f){return f=f||new a,f.x=-this.x,f.y=-this.y,f.z=-this.z,f.w=this.w,f},a.prototype.normalize=function(){var f=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(f=1/f,this.x*=f,this.y*=f,this.z*=f,this.w*=f)},a.prototype.normalizeFast=function(){var f=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=f,this.y*=f,this.z*=f,this.w*=f)},a.prototype.vmult=function(f,d){d=d||new r;var v=f.x,g=f.y,m=f.z,p=this.x,_=this.y,y=this.z,x=this.w,E=x*v+_*m-y*g,A=x*g+y*v-p*m,R=x*m+p*g-_*v,C=-p*v-_*g-y*m;return d.x=E*x+C*-p+A*-y-R*-_,d.y=A*x+C*-_+R*-p-E*-y,d.z=R*x+C*-y+E*-_-A*-p,d},a.prototype.copy=function(f){return this.x=f.x,this.y=f.y,this.z=f.z,this.w=f.w,this},a.prototype.toEuler=function(f,d){d=d||"YZX";var v,g,m,p=this.x,_=this.y,y=this.z,x=this.w;switch(d){case"YZX":var E=p*_+y*x;if(E>.499&&(v=2*Math.atan2(p,x),g=Math.PI/2,m=0),E<-.499&&(v=-2*Math.atan2(p,x),g=-Math.PI/2,m=0),isNaN(v)){var A=p*p,R=_*_,C=y*y;v=Math.atan2(2*_*x-2*p*y,1-2*R-2*C),g=Math.asin(2*E),m=Math.atan2(2*p*x-2*_*y,1-2*A-2*C)}break;default:throw new Error("Euler order "+d+" not supported yet.")}f.y=v,f.z=g,f.x=m},a.prototype.setFromEuler=function(f,d,v,g){g=g||"XYZ";var m=Math.cos(f/2),p=Math.cos(d/2),_=Math.cos(v/2),y=Math.sin(f/2),x=Math.sin(d/2),E=Math.sin(v/2);return g==="XYZ"?(this.x=y*p*_+m*x*E,this.y=m*x*_-y*p*E,this.z=m*p*E+y*x*_,this.w=m*p*_-y*x*E):g==="YXZ"?(this.x=y*p*_+m*x*E,this.y=m*x*_-y*p*E,this.z=m*p*E-y*x*_,this.w=m*p*_+y*x*E):g==="ZXY"?(this.x=y*p*_-m*x*E,this.y=m*x*_+y*p*E,this.z=m*p*E+y*x*_,this.w=m*p*_-y*x*E):g==="ZYX"?(this.x=y*p*_-m*x*E,this.y=m*x*_+y*p*E,this.z=m*p*E-y*x*_,this.w=m*p*_+y*x*E):g==="YZX"?(this.x=y*p*_+m*x*E,this.y=m*x*_+y*p*E,this.z=m*p*E-y*x*_,this.w=m*p*_-y*x*E):g==="XZY"&&(this.x=y*p*_-m*x*E,this.y=m*x*_-y*p*E,this.z=m*p*E+y*x*_,this.w=m*p*_+y*x*E),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,n,i){var r=t("./Vec3"),a=t("./Quaternion");n.exports=o;function o(h){h=h||{},this.position=new r,h.position&&this.position.copy(h.position),this.quaternion=new a,h.quaternion&&this.quaternion.copy(h.quaternion)}var l=new a;o.pointToLocalFrame=function(h,u,c,d){var d=d||new r;return c.vsub(h,d),u.conjugate(l),l.vmult(d,d),d},o.prototype.pointToLocal=function(h,u){return o.pointToLocalFrame(this.position,this.quaternion,h,u)},o.pointToWorldFrame=function(h,u,c,d){var d=d||new r;return u.vmult(c,d),d.vadd(h,d),d},o.prototype.pointToWorld=function(h,u){return o.pointToWorldFrame(this.position,this.quaternion,h,u)},o.prototype.vectorToWorldFrame=function(h,c){var c=c||new r;return this.quaternion.vmult(h,c),c},o.vectorToWorldFrame=function(h,u,c){return h.vmult(u,c),c},o.vectorToLocalFrame=function(h,u,c,d){var d=d||new r;return u.w*=-1,u.vmult(c,d),u.w*=-1,d}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,n,i){n.exports=a;var r=t("./Mat3");function a(u,c,f){this.x=u||0,this.y=c||0,this.z=f||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(u,c){var f=u.x,d=u.y,v=u.z,g=this.x,m=this.y,p=this.z;return c=c||new a,c.x=m*v-p*d,c.y=p*f-g*v,c.z=g*d-m*f,c},a.prototype.set=function(u,c,f){return this.x=u,this.y=c,this.z=f,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(u,c){if(c)c.x=u.x+this.x,c.y=u.y+this.y,c.z=u.z+this.z;else return new a(this.x+u.x,this.y+u.y,this.z+u.z)},a.prototype.vsub=function(u,c){if(c)c.x=this.x-u.x,c.y=this.y-u.y,c.z=this.z-u.z;else return new a(this.x-u.x,this.y-u.y,this.z-u.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var u=this.x,c=this.y,f=this.z,d=Math.sqrt(u*u+c*c+f*f);if(d>0){var v=1/d;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return d},a.prototype.unit=function(u){u=u||new a;var c=this.x,f=this.y,d=this.z,v=Math.sqrt(c*c+f*f+d*d);return v>0?(v=1/v,u.x=c*v,u.y=f*v,u.z=d*v):(u.x=1,u.y=0,u.z=0),u},a.prototype.norm=function(){var u=this.x,c=this.y,f=this.z;return Math.sqrt(u*u+c*c+f*f)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(u){var c=this.x,f=this.y,d=this.z,v=u.x,g=u.y,m=u.z;return Math.sqrt((v-c)*(v-c)+(g-f)*(g-f)+(m-d)*(m-d))},a.prototype.distanceSquared=function(u){var c=this.x,f=this.y,d=this.z,v=u.x,g=u.y,m=u.z;return(v-c)*(v-c)+(g-f)*(g-f)+(m-d)*(m-d)},a.prototype.mult=function(u,c){c=c||new a;var f=this.x,d=this.y,v=this.z;return c.x=u*f,c.y=u*d,c.z=u*v,c},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(u){return u=u||new a,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var o=new a,l=new a;a.prototype.tangents=function(u,c){var f=this.norm();if(f>0){var d=o,v=1/f;d.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(d.x)<.9?(g.set(1,0,0),d.cross(g,u)):(g.set(0,1,0),d.cross(g,u)),d.cross(u,c)}else u.set(1,0,0),c.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},a.prototype.lerp=function(u,c,f){var d=this.x,v=this.y,g=this.z;f.x=d+(u.x-d)*c,f.y=v+(u.y-v)*c,f.z=g+(u.z-g)*c},a.prototype.almostEquals=function(u,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-u.x)>c||Math.abs(this.y-u.y)>c||Math.abs(this.z-u.z)>c)},a.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var h=new a;a.prototype.isAntiparallelTo=function(u,c){return this.negate(h),h.almostEquals(u,c)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,n,i){n.exports=c;var r=t("../utils/EventTarget");t("../shapes/Shape");var a=t("../math/Vec3"),o=t("../math/Mat3"),l=t("../math/Quaternion");t("../material/Material");var h=t("../collision/AABB"),u=t("../shapes/Box");function c(P){P=P||{},r.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof P.collisionFilterGroup=="number"?P.collisionFilterGroup:1,this.collisionFilterMask=typeof P.collisionFilterMask=="number"?P.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,P.position&&this.position.copy(P.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,P.velocity&&this.velocity.copy(P.velocity),this.initVelocity=new a,this.force=new a;var O=typeof P.mass=="number"?P.mass:0;this.mass=O,this.invMass=O>0?1/O:0,this.material=P.material||null,this.linearDamping=typeof P.linearDamping=="number"?P.linearDamping:.01,this.type=O<=0?c.STATIC:c.DYNAMIC,typeof P.type==typeof c.STATIC&&(this.type=P.type),this.allowSleep=typeof P.allowSleep<"u"?P.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof P.sleepSpeedLimit<"u"?P.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof P.sleepTimeLimit<"u"?P.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new l,P.quaternion&&this.quaternion.copy(P.quaternion),this.initQuaternion=new l,this.angularVelocity=new a,P.angularVelocity&&this.angularVelocity.copy(P.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof P.fixedRotation<"u"?P.fixedRotation:!1,this.angularDamping=typeof P.angularDamping<"u"?P.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new a,P.shape&&this.addShape(P.shape),this.updateMassProperties()}c.prototype=new r,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var P=this.sleepState;this.sleepState=0,P===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(P){if(this.allowSleep){var O=this.sleepState,V=this.velocity.norm2()+this.angularVelocity.norm2(),I=Math.pow(this.sleepSpeedLimit,2);O===c.AWAKE&&V<I?(this.sleepState=c.SLEEPY,this.timeLastSleepy=P,this.dispatchEvent(c.sleepyEvent)):O===c.SLEEPY&&V>I?this.wakeUp():O===c.SLEEPY&&P-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(P,V){var V=V||new a;return P.vsub(this.position,V),this.quaternion.conjugate().vmult(V,V),V},c.prototype.vectorToLocalFrame=function(P,V){var V=V||new a;return this.quaternion.conjugate().vmult(P,V),V},c.prototype.pointToWorldFrame=function(P,V){var V=V||new a;return this.quaternion.vmult(P,V),V.vadd(this.position,V),V},c.prototype.vectorToWorldFrame=function(P,V){var V=V||new a;return this.quaternion.vmult(P,V),V};var f=new a,d=new l;c.prototype.addShape=function(P,O,V){var I=new a,G=new l;return O&&I.copy(O),V&&G.copy(V),this.shapes.push(P),this.shapeOffsets.push(I),this.shapeOrientations.push(G),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var P=this.shapes,O=this.shapeOffsets,V=P.length,I=0,G=0;G!==V;G++){var $=P[G];$.updateBoundingSphereRadius();var B=O[G].norm(),z=$.boundingSphereRadius;B+z>I&&(I=B+z)}this.boundingRadius=I};var v=new h;c.prototype.computeAABB=function(){for(var P=this.shapes,O=this.shapeOffsets,V=this.shapeOrientations,I=P.length,G=f,$=d,B=this.quaternion,z=this.aabb,Y=v,W=0;W!==I;W++){var b=P[W];V[W].mult(B,$),$.vmult(O[W],G),G.vadd(this.position,G),b.calculateWorldAABB(G,$,Y.lowerBound,Y.upperBound),W===0?z.copy(Y):z.extend(Y)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,c.prototype.updateInertiaWorld=function(P){var O=this.invInertia;if(!(O.x===O.y&&O.y===O.z&&!P)){var V=g,I=m;V.setRotationFromQuaternion(this.quaternion),V.transpose(I),V.scale(O,V),V.mmult(I,this.invInertiaWorld)}};var p=new a,_=new a;c.prototype.applyForce=function(P,O){if(this.type===c.DYNAMIC){var V=p;O.vsub(this.position,V);var I=_;V.cross(P,I),this.force.vadd(P,this.force),this.torque.vadd(I,this.torque)}};var y=new a,x=new a;c.prototype.applyLocalForce=function(P,O){if(this.type===c.DYNAMIC){var V=y,I=x;this.vectorToWorldFrame(P,V),this.pointToWorldFrame(O,I),this.applyForce(V,I)}};var E=new a,A=new a,R=new a;c.prototype.applyImpulse=function(P,O){if(this.type===c.DYNAMIC){var V=E;O.vsub(this.position,V);var I=A;I.copy(P),I.mult(this.invMass,I),this.velocity.vadd(I,this.velocity);var G=R;V.cross(P,G),this.invInertiaWorld.vmult(G,G),this.angularVelocity.vadd(G,this.angularVelocity)}};var C=new a,M=new a;c.prototype.applyLocalImpulse=function(P,O){if(this.type===c.DYNAMIC){var V=C,I=M;this.vectorToWorldFrame(P,V),this.pointToWorldFrame(O,I),this.applyImpulse(V,I)}};var S=new a;c.prototype.updateMassProperties=function(){var P=S;this.invMass=this.mass>0?1/this.mass:0;var O=this.inertia,V=this.fixedRotation;this.computeAABB(),P.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(P,this.mass,O),this.invInertia.set(O.x>0&&!V?1/O.x:0,O.y>0&&!V?1/O.y:0,O.z>0&&!V?1/O.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(P,O){var V=new a;return P.vsub(this.position,V),this.angularVelocity.cross(V,O),this.velocity.vadd(O,O),O}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,n,i){t("./Body");var r=t("../math/Vec3"),a=t("../math/Quaternion");t("../collision/RaycastResult");var o=t("../collision/Ray"),l=t("../objects/WheelInfo");n.exports=h;function h(B){this.chassisBody=B.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof B.indexRightAxis<"u"?B.indexRightAxis:1,this.indexForwardAxis=typeof B.indexForwardAxis<"u"?B.indexForwardAxis:0,this.indexUpAxis=typeof B.indexUpAxis<"u"?B.indexUpAxis:2}new r,new r,new r;var u=new r,c=new r,f=new r;new o,h.prototype.addWheel=function(B){B=B||{};var z=new l(B),Y=this.wheelInfos.length;return this.wheelInfos.push(z),Y},h.prototype.setSteeringValue=function(B,z){var Y=this.wheelInfos[z];Y.steering=B},new r,h.prototype.applyEngineForce=function(B,z){this.wheelInfos[z].engineForce=B},h.prototype.setBrake=function(B,z){this.wheelInfos[z].brake=B},h.prototype.addToWorld=function(B){this.constraints,B.add(this.chassisBody);var z=this;this.preStepCallback=function(){z.updateVehicle(B.dt)},B.addEventListener("preStep",this.preStepCallback),this.world=B},h.prototype.getVehicleAxisWorld=function(B,z){z.set(B===0?1:0,B===1?1:0,B===2?1:0),this.chassisBody.vectorToWorldFrame(z,z)},h.prototype.updateVehicle=function(B){for(var z=this.wheelInfos,Y=z.length,W=this.chassisBody,b=0;b<Y;b++)this.updateWheelTransform(b);this.currentVehicleSpeedKmHour=3.6*W.velocity.norm();var F=new r;this.getVehicleAxisWorld(this.indexForwardAxis,F),F.dot(W.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var b=0;b<Y;b++)this.castRay(z[b]);this.updateSuspension(B);for(var U=new r,D=new r,b=0;b<Y;b++){var L=z[b],K=L.suspensionForce;K>L.maxSuspensionForce&&(K=L.maxSuspensionForce),L.raycastResult.hitNormalWorld.scale(K*B,U),L.raycastResult.hitPointWorld.vsub(W.position,D),W.applyImpulse(U,L.raycastResult.hitPointWorld)}this.updateFriction(B);var se=new r,te=new r,Q=new r;for(b=0;b<Y;b++){var L=z[b];W.getVelocityAtWorldPoint(L.chassisConnectionPointWorld,Q);var he=1;switch(this.indexUpAxis){case 1:he=-1;break}if(L.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,te);var ce=te.dot(L.raycastResult.hitNormalWorld);L.raycastResult.hitNormalWorld.scale(ce,se),te.vsub(se,te);var q=te.dot(Q);L.deltaRotation=he*q*B/L.radius}(L.sliding||!L.isInContact)&&L.engineForce!==0&&L.useCustomSlidingRotationalSpeed&&(L.deltaRotation=(L.engineForce>0?1:-1)*L.customSlidingRotationalSpeed*B),Math.abs(L.brake)>Math.abs(L.engineForce)&&(L.deltaRotation=0),L.rotation+=L.deltaRotation,L.deltaRotation*=.99}},h.prototype.updateSuspension=function(B){for(var z=this.chassisBody,Y=z.mass,W=this.wheelInfos,b=W.length,F=0;F<b;F++){var U=W[F];if(U.isInContact){var D,L=U.suspensionRestLength,K=U.suspensionLength,se=L-K;D=U.suspensionStiffness*se*U.clippedInvContactDotSuspension;var te=U.suspensionRelativeVelocity,Q;te<0?Q=U.dampingCompression:Q=U.dampingRelaxation,D-=Q*te,U.suspensionForce=D*Y,U.suspensionForce<0&&(U.suspensionForce=0)}else U.suspensionForce=0}},h.prototype.removeFromWorld=function(B){this.constraints,B.remove(this.chassisBody),B.removeEventListener("preStep",this.preStepCallback),this.world=null};var d=new r,v=new r;h.prototype.castRay=function(B){var z=d,Y=v;this.updateWheelTransformWorld(B);var W=this.chassisBody,b=-1,F=B.suspensionRestLength+B.radius;B.directionWorld.scale(F,z);var U=B.chassisConnectionPointWorld;U.vadd(z,Y);var D=B.raycastResult;D.reset();var L=W.collisionResponse;W.collisionResponse=!1,this.world.rayTest(U,Y,D),W.collisionResponse=L;var K=D.body;if(B.raycastResult.groundObject=0,K){b=D.distance,B.raycastResult.hitNormalWorld=D.hitNormalWorld,B.isInContact=!0;var se=D.distance;B.suspensionLength=se-B.radius;var te=B.suspensionRestLength-B.maxSuspensionTravel,Q=B.suspensionRestLength+B.maxSuspensionTravel;B.suspensionLength<te&&(B.suspensionLength=te),B.suspensionLength>Q&&(B.suspensionLength=Q,B.raycastResult.reset());var he=B.raycastResult.hitNormalWorld.dot(B.directionWorld),ce=new r;W.getVelocityAtWorldPoint(B.raycastResult.hitPointWorld,ce);var q=B.raycastResult.hitNormalWorld.dot(ce);if(he>=-.1)B.suspensionRelativeVelocity=0,B.clippedInvContactDotSuspension=1/.1;else{var Re=-1/he;B.suspensionRelativeVelocity=q*Re,B.clippedInvContactDotSuspension=Re}}else B.suspensionLength=B.suspensionRestLength+0*B.maxSuspensionTravel,B.suspensionRelativeVelocity=0,B.directionWorld.scale(-1,B.raycastResult.hitNormalWorld),B.clippedInvContactDotSuspension=1;return b},h.prototype.updateWheelTransformWorld=function(B){B.isInContact=!1;var z=this.chassisBody;z.pointToWorldFrame(B.chassisConnectionPointLocal,B.chassisConnectionPointWorld),z.vectorToWorldFrame(B.directionLocal,B.directionWorld),z.vectorToWorldFrame(B.axleLocal,B.axleWorld)},h.prototype.updateWheelTransform=function(B){var z=u,Y=c,W=f,b=this.wheelInfos[B];this.updateWheelTransformWorld(b),b.directionLocal.scale(-1,z),Y.copy(b.axleLocal),z.cross(Y,W),W.normalize(),Y.normalize();var F=b.steering,U=new a;U.setFromAxisAngle(z,F);var D=new a;D.setFromAxisAngle(Y,b.rotation);var L=b.worldTransform.quaternion;this.chassisBody.quaternion.mult(U,L),L.mult(D,L),L.normalize();var K=b.worldTransform.position;K.copy(b.directionWorld),K.scale(b.suspensionLength,K),K.vadd(b.chassisConnectionPointWorld,K)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];h.prototype.getWheelTransformWorld=function(B){return this.wheelInfos[B].worldTransform};var m=new r,p=[],_=[],y=1;h.prototype.updateFriction=function(B){for(var z=m,Y=this.wheelInfos,W=Y.length,b=this.chassisBody,F=_,U=p,D=0;D<W;D++){var L=Y[D],K=L.raycastResult.body;L.sideImpulse=0,L.forwardImpulse=0,F[D]||(F[D]=new r),U[D]||(U[D]=new r)}for(var D=0;D<W;D++){var L=Y[D],K=L.raycastResult.body;if(K){var se=U[D],te=this.getWheelTransformWorld(D);te.vectorToWorldFrame(g[this.indexRightAxis],se);var Q=L.raycastResult.hitNormalWorld,he=se.dot(Q);Q.scale(he,z),se.vsub(z,se),se.normalize(),Q.cross(se,F[D]),F[D].normalize(),L.sideImpulse=$(b,L.raycastResult.hitPointWorld,K,L.raycastResult.hitPointWorld,se),L.sideImpulse*=y}}var ce=1,q=.5;this.sliding=!1;for(var D=0;D<W;D++){var L=Y[D],K=L.raycastResult.body,Re=0;if(L.slipInfo=1,K){var de=0,ae=L.brake?L.brake:de;Re=R(b,K,L.raycastResult.hitPointWorld,F[D],ae),Re+=L.engineForce*B;var oe=ae/Re;L.slipInfo*=oe}if(L.forwardImpulse=0,L.skidInfo=1,K){L.skidInfo=1;var Ze=L.suspensionForce*B*L.frictionSlip,Le=Ze,He=Ze*Le;L.forwardImpulse=Re;var xe=L.forwardImpulse*q,Qe=L.sideImpulse*ce,it=xe*xe+Qe*Qe;if(L.sliding=!1,it>He){this.sliding=!0,L.sliding=!0;var oe=Ze/Math.sqrt(it);L.skidInfo*=oe}}}if(this.sliding)for(var D=0;D<W;D++){var L=Y[D];L.sideImpulse!==0&&L.skidInfo<1&&(L.forwardImpulse*=L.skidInfo,L.sideImpulse*=L.skidInfo)}for(var D=0;D<W;D++){var L=Y[D],N=new r;if(N.copy(L.raycastResult.hitPointWorld),L.forwardImpulse!==0){var T=new r;F[D].scale(L.forwardImpulse,T),b.applyImpulse(T,N)}if(L.sideImpulse!==0){var K=L.raycastResult.body,ee=new r;ee.copy(L.raycastResult.hitPointWorld);var me=new r;U[D].scale(L.sideImpulse,me),b.pointToLocalFrame(N,N),N["xyz"[this.indexUpAxis]]*=L.rollInfluence,b.pointToWorldFrame(N,N),b.applyImpulse(me,N),me.scale(-1,me),K.applyImpulse(me,ee)}}};var x=new r,E=new r,A=new r;function R(B,z,Y,W,b){var F=0,U=Y,D=x,L=E,K=A;B.getVelocityAtWorldPoint(U,D),z.getVelocityAtWorldPoint(U,L),D.vsub(L,K);var se=W.dot(K),te=O(B,Y,W),Q=O(z,Y,W),he=1,ce=he/(te+Q);return F=-se*ce,b<F&&(F=b),F<-b&&(F=-b),F}var C=new r,M=new r,S=new r,P=new r;function O(B,z,Y){var W=C,b=M,F=S,U=P;return z.vsub(B.position,W),W.cross(Y,b),B.invInertiaWorld.vmult(b,U),U.cross(W,F),B.invMass+Y.dot(F)}var V=new r,I=new r,G=new r;function $(B,z,Y,W,b,he){var U=b.norm2();if(U>1.1)return 0;var D=V,L=I,K=G;B.getVelocityAtWorldPoint(z,D),Y.getVelocityAtWorldPoint(W,L),D.vsub(L,K);var se=b.dot(K),te=.2,Q=1/(B.invMass+Y.invMass),he=-te*se*Q;return he}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,n,i){var r=t("./Body"),a=t("../shapes/Sphere"),o=t("../shapes/Box"),l=t("../math/Vec3"),h=t("../constraints/HingeConstraint");n.exports=u;function u(d){if(this.wheelBodies=[],this.coordinateSystem=typeof d.coordinateSystem>"u"?new l(1,2,3):d.coordinateSystem.clone(),this.chassisBody=d.chassisBody,!this.chassisBody){var v=new o(new l(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(d){d=d||{};var v=d.body;v||(v=new r(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof d.position<"u"?d.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof d.axis<"u"?d.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var _=new h(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(d,v){var g=this.wheelAxes[v],m=Math.cos(d),p=Math.sin(d),_=g.x,y=g.y;this.constraints[v].axisA.set(m*_-p*y,p*_+m*y,0)},u.prototype.setMotorSpeed=function(d,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=d},u.prototype.disableMotor=function(d){var v=this.constraints[d];v.disableMotor()};var c=new l;u.prototype.setWheelForce=function(d,v){this.wheelForces[v]=d},u.prototype.applyWheelForce=function(d,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(d,c),m.vectorToWorldFrame(c,c),p.vadd(c,p)},u.prototype.addToWorld=function(d){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)d.add(g[m]);for(var m=0;m<v.length;m++)d.addConstraint(v[m]);d.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var d=this.wheelForces,v=0;v<d.length;v++)this.applyWheelForce(d[v],v)},u.prototype.removeFromWorld=function(d){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)d.remove(g[m]);for(var m=0;m<v.length;m++)d.removeConstraint(v[m])};var f=new l;u.prototype.getWheelSpeed=function(d){var v=this.wheelAxes[d],g=this.wheelBodies[d],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,f),m.dot(f)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,n,i){n.exports=a,t("../shapes/Shape");var r=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,_=this.smoothingRadius*this.smoothingRadius,y=o,x=0;x!==m;x++){var E=this.particles[x];E.position.vsub(v.position,y),p!==E.id&&y.norm2()<_&&g.push(E)}};var l=new r,h=new r,u=new r,c=new r,f=new r,d=new r;a.prototype.update=function(){for(var v=this.particles.length,g=l,m=this.speedOfSound,p=this.eps,_=0;_!==v;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var E=x.length,A=0,R=0;R!==E;R++){y.position.vsub(x[R].position,g);var C=g.norm(),M=this.w(C);A+=x[R].mass*M}this.densities[_]=A,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var S=h,P=u,O=c,V=f,I=d,_=0;_!==v;_++){var G=this.particles[_];S.set(0,0,0),P.set(0,0,0);for(var $,B,x=this.neighbors[_],E=x.length,R=0;R!==E;R++){var z=x[R];G.position.vsub(z.position,V);var Y=V.norm();$=-z.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+p)+this.pressures[R]/(this.densities[R]*this.densities[R]+p)),this.gradw(V,O),O.mult($,O),S.vadd(O,S),z.velocity.vsub(G.velocity,I),I.mult(1/(1e-4+this.densities[_]*this.densities[R])*this.viscosity*z.mass,I),B=this.nablaw(Y),I.mult(B,I),P.vadd(I,P)}P.mult(G.mass,P),S.mult(G.mass,S),G.force.vadd(P,G.force),G.force.vadd(S,G.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,n,i){var r=t("../math/Vec3");n.exports=a;function a(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}a.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},a.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},a.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},a.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new r,l=new r,h=new r,u=new r,c=new r,f=new r,d=new r,v=new r,g=new r,m=new r,p=new r;a.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,E=this.bodyA,A=this.bodyB,R=o,C=l,M=h,S=u,P=p,O=c,V=f,I=d,G=v,$=g,B=m;this.getWorldAnchorA(O),this.getWorldAnchorB(V),O.vsub(E.position,I),V.vsub(A.position,G),V.vsub(O,R);var z=R.norm();C.copy(R),C.normalize(),A.velocity.vsub(E.velocity,M),A.angularVelocity.cross(G,P),M.vadd(P,M),E.angularVelocity.cross(I,P),M.vsub(P,M),C.mult(-_*(z-x)-y*M.dot(C),S),E.force.vsub(S,E.force),A.force.vadd(S,A.force),I.cross(S,$),G.cross(S,B),E.torque.vsub($,E.torque),A.torque.vadd(B,A.torque)}},{"../math/Vec3":30}],36:[function(t,n,i){var r=t("../math/Vec3"),a=t("../math/Transform"),o=t("../collision/RaycastResult"),l=t("../utils/Utils");n.exports=h;function h(f){f=l.defaults(f,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=f.maxSuspensionTravel,this.customSlidingRotationalSpeed=f.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=f.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=f.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=f.chassisConnectionPointWorld.clone(),this.directionLocal=f.directionLocal.clone(),this.directionWorld=f.directionWorld.clone(),this.axleLocal=f.axleLocal.clone(),this.axleWorld=f.axleWorld.clone(),this.suspensionRestLength=f.suspensionRestLength,this.suspensionMaxLength=f.suspensionMaxLength,this.radius=f.radius,this.suspensionStiffness=f.suspensionStiffness,this.dampingCompression=f.dampingCompression,this.dampingRelaxation=f.dampingRelaxation,this.frictionSlip=f.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=f.rollInfluence,this.maxSuspensionForce=f.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=f.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var c=new r,u=new r,c=new r;h.prototype.updateWheel=function(f){var d=this.raycastResult;if(this.isInContact){var v=d.hitNormalWorld.dot(d.directionWorld);d.hitPointWorld.vsub(f.position,u),f.getVelocityAtWorldPoint(u,c);var g=d.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else d.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,d.directionWorld.scale(-1,d.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,n,i){n.exports=l;var r=t("./Shape"),a=t("../math/Vec3"),o=t("./ConvexPolyhedron");function l(c){r.call(this),this.type=r.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,f=this.halfExtents.y,d=this.halfExtents.z,v=a,g=[new v(-c,-f,-d),new v(c,-f,-d),new v(c,f,-d),new v(-c,f,-d),new v(-c,-f,d),new v(c,-f,d),new v(c,f,d),new v(-c,f,d)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(c,f){return f=f||new a,l.calculateInertia(this.halfExtents,c,f),f},l.calculateInertia=function(c,f,d){var v=c;d.x=1/12*f*(2*v.y*2*v.y+2*v.z*2*v.z),d.y=1/12*f*(2*v.x*2*v.x+2*v.z*2*v.z),d.z=1/12*f*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,f){var d=c,v=this.halfExtents;if(d[0].set(v.x,0,0),d[1].set(0,v.y,0),d[2].set(0,0,v.z),d[3].set(-v.x,0,0),d[4].set(0,-v.y,0),d[5].set(0,0,-v.z),f!==void 0)for(var g=0;g!==d.length;g++)f.vmult(d[g],d[g]);return d},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new a;new a,l.prototype.forEachWorldCorner=function(c,f,d){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)h.set(g[m][0],g[m][1],g[m][2]),f.vmult(h,h),c.vadd(h,h),d(h.x,h.y,h.z)};var u=[new a,new a,new a,new a,new a,new a,new a,new a];l.prototype.calculateWorldAABB=function(c,f,d,v){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var m=u[0];f.vmult(m,m),c.vadd(m,m),v.copy(m),d.copy(m);for(var p=1;p<8;p++){var m=u[p];f.vmult(m,m),c.vadd(m,m);var _=m.x,y=m.y,x=m.z;_>v.x&&(v.x=_),y>v.y&&(v.y=y),x>v.z&&(v.z=x),_<d.x&&(d.x=_),y<d.y&&(d.y=y),x<d.z&&(d.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,n,i){n.exports=l;var r=t("./Shape"),a=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform");function l(b,F,U){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=b||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=F||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=U?U.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var h=new a;l.prototype.computeEdges=function(){var b=this.faces,F=this.vertices;F.length;var U=this.uniqueEdges;U.length=0;for(var D=h,L=0;L!==b.length;L++)for(var K=b[L],se=K.length,te=0;te!==se;te++){var Q=(te+1)%se;F[K[te]].vsub(F[K[Q]],D),D.normalize();for(var he=!1,ce=0;ce!==U.length;ce++)if(U[ce].almostEquals(D)||U[ce].almostEquals(D)){he=!0;break}he||U.push(D.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var b=0;b<this.faces.length;b++){for(var F=0;F<this.faces[b].length;F++)if(!this.vertices[this.faces[b][F]])throw new Error("Vertex "+this.faces[b][F]+" not found!");var U=this.faceNormals[b]||new a;this.getFaceNormal(b,U),U.negate(U),this.faceNormals[b]=U;var D=this.vertices[this.faces[b][0]];if(U.dot(D)<0){console.error(".faceNormals["+b+"] = Vec3("+U.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var F=0;F<this.faces[b].length;F++)console.warn(".vertices["+this.faces[b][F]+"] = Vec3("+this.vertices[this.faces[b][F]].toString()+")")}}};var u=new a,c=new a;l.computeNormal=function(b,F,U,D){F.vsub(b,c),U.vsub(F,u),u.cross(c,D),D.isZero()||D.normalize()},l.prototype.getFaceNormal=function(b,F){var U=this.faces[b],D=this.vertices[U[0]],L=this.vertices[U[1]],K=this.vertices[U[2]];return l.computeNormal(D,L,K,F)};var f=new a;l.prototype.clipAgainstHull=function(b,F,U,D,L,K,se,te,Q){for(var he=f,ce=-1,q=-Number.MAX_VALUE,Re=0;Re<U.faces.length;Re++){he.copy(U.faceNormals[Re]),L.vmult(he,he);var de=he.dot(K);de>q&&(q=de,ce=Re)}for(var ae=[],oe=U.faces[ce],Ze=oe.length,Le=0;Le<Ze;Le++){var He=U.vertices[oe[Le]],xe=new a;xe.copy(He),L.vmult(xe,xe),D.vadd(xe,xe),ae.push(xe)}ce>=0&&this.clipFaceAgainstHull(K,b,F,ae,se,te,Q)};var d=new a,v=new a,g=new a,m=new a,p=new a,_=new a;l.prototype.findSeparatingAxis=function(b,F,U,D,L,K,se,te){var Q=d,he=v,ce=g,q=m,Re=p,de=_,ae=Number.MAX_VALUE,oe=this;if(oe.uniqueAxes)for(var Le=0;Le!==oe.uniqueAxes.length;Le++){U.vmult(oe.uniqueAxes[Le],Q);var xe=oe.testSepAxis(Q,b,F,U,D,L);if(xe===!1)return!1;xe<ae&&(ae=xe,K.copy(Q))}else for(var Ze=se?se.length:oe.faces.length,Le=0;Le<Ze;Le++){var He=se?se[Le]:Le;Q.copy(oe.faceNormals[He]),U.vmult(Q,Q);var xe=oe.testSepAxis(Q,b,F,U,D,L);if(xe===!1)return!1;xe<ae&&(ae=xe,K.copy(Q))}if(b.uniqueAxes)for(var Le=0;Le!==b.uniqueAxes.length;Le++){L.vmult(b.uniqueAxes[Le],he);var xe=oe.testSepAxis(he,b,F,U,D,L);if(xe===!1)return!1;xe<ae&&(ae=xe,K.copy(he))}else for(var Qe=te?te.length:b.faces.length,Le=0;Le<Qe;Le++){var He=te?te[Le]:Le;he.copy(b.faceNormals[He]),L.vmult(he,he);var xe=oe.testSepAxis(he,b,F,U,D,L);if(xe===!1)return!1;xe<ae&&(ae=xe,K.copy(he))}for(var it=0;it!==oe.uniqueEdges.length;it++){U.vmult(oe.uniqueEdges[it],q);for(var N=0;N!==b.uniqueEdges.length;N++)if(L.vmult(b.uniqueEdges[N],Re),q.cross(Re,de),!de.almostZero()){de.normalize();var T=oe.testSepAxis(de,b,F,U,D,L);if(T===!1)return!1;T<ae&&(ae=T,K.copy(de))}}return D.vsub(F,ce),ce.dot(K)>0&&K.negate(K),!0};var y=[],x=[];l.prototype.testSepAxis=function(b,F,U,D,L,K){var se=this;l.project(se,b,U,D,y),l.project(F,b,L,K,x);var te=y[0],Q=y[1],he=x[0],ce=x[1],q=te-ce,Re=he-Q,de=q<Re?q:Re;return de};var E=new a,A=new a;l.prototype.calculateLocalInertia=function(b,F){this.computeLocalAABB(E,A);var U=A.x-E.x,D=A.y-E.y,L=A.z-E.z;F.x=1/12*b*(2*D*2*D+2*L*2*L),F.y=1/12*b*(2*U*2*U+2*L*2*L),F.z=1/12*b*(2*D*2*D+2*U*2*U)},l.prototype.getPlaneConstantOfFace=function(b){var F=this.faces[b],U=this.faceNormals[b],D=this.vertices[F[0]],L=-U.dot(D);return L};var R=new a,C=new a,M=new a,S=new a,P=new a,O=new a,V=new a,I=new a;l.prototype.clipFaceAgainstHull=function(b,F,U,D,L,K,se){for(var te=R,Q=C,he=M,ce=S,q=P,Re=O,de=V,ae=I,oe=this,Ze=[],Le=D,He=Ze,xe=-1,Qe=Number.MAX_VALUE,it=0;it<oe.faces.length;it++){te.copy(oe.faceNormals[it]),U.vmult(te,te);var N=te.dot(b);N<Qe&&(Qe=N,xe=it)}if(!(xe<0)){var T=oe.faces[xe];T.connectedFaces=[];for(var ee=0;ee<oe.faces.length;ee++)for(var me=0;me<oe.faces[ee].length;me++)T.indexOf(oe.faces[ee][me])!==-1&&ee!==xe&&T.connectedFaces.indexOf(ee)===-1&&T.connectedFaces.push(ee);Le.length;for(var fe=T.length,ge=0;ge<fe;ge++){var ke=oe.vertices[T[ge]],we=oe.vertices[T[(ge+1)%fe]];ke.vsub(we,Q),he.copy(Q),U.vmult(he,he),F.vadd(he,he),ce.copy(this.faceNormals[xe]),U.vmult(ce,ce),F.vadd(ce,ce),he.cross(ce,q),q.negate(q),Re.copy(ke),U.vmult(Re,Re),F.vadd(Re,Re),-Re.dot(q);var Me;{var Fe=T.connectedFaces[ge];de.copy(this.faceNormals[Fe]);var X=this.getPlaneConstantOfFace(Fe);ae.copy(de),U.vmult(ae,ae);var Me=X-ae.dot(F)}for(this.clipFaceAgainstPlane(Le,He,ae,Me);Le.length;)Le.shift();for(;He.length;)Le.push(He.shift())}de.copy(this.faceNormals[xe]);var X=this.getPlaneConstantOfFace(xe);ae.copy(de),U.vmult(ae,ae);for(var Me=X-ae.dot(F),ee=0;ee<Le.length;ee++){var pe=ae.dot(Le[ee])+Me;if(pe<=L&&(console.log("clamped: depth="+pe+" to minDist="+(L+"")),pe=L),pe<=K){var $e=Le[ee];if(pe<=0){var Ye={point:$e,normal:ae,depth:pe};se.push(Ye)}}}}},l.prototype.clipFaceAgainstPlane=function(b,F,U,D){var L,K,se=b.length;if(se<2)return F;var te=b[b.length-1],Q=b[0];L=U.dot(te)+D;for(var he=0;he<se;he++){if(Q=b[he],K=U.dot(Q)+D,L<0)if(K<0){var ce=new a;ce.copy(Q),F.push(ce)}else{var ce=new a;te.lerp(Q,L/(L-K),ce),F.push(ce)}else if(K<0){var ce=new a;te.lerp(Q,L/(L-K),ce),F.push(ce),F.push(Q)}te=Q,L=K}return F},l.prototype.computeWorldVertices=function(b,F){for(var U=this.vertices.length;this.worldVertices.length<U;)this.worldVertices.push(new a);for(var D=this.vertices,L=this.worldVertices,K=0;K!==U;K++)F.vmult(D[K],L[K]),b.vadd(L[K],L[K]);this.worldVerticesNeedsUpdate=!1},new a,l.prototype.computeLocalAABB=function(b,F){var U=this.vertices.length,D=this.vertices;b.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),F.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var L=0;L<U;L++){var K=D[L];K.x<b.x?b.x=K.x:K.x>F.x&&(F.x=K.x),K.y<b.y?b.y=K.y:K.y>F.y&&(F.y=K.y),K.z<b.z?b.z=K.z:K.z>F.z&&(F.z=K.z)}},l.prototype.computeWorldFaceNormals=function(b){for(var F=this.faceNormals.length;this.worldFaceNormals.length<F;)this.worldFaceNormals.push(new a);for(var U=this.faceNormals,D=this.worldFaceNormals,L=0;L!==F;L++)b.vmult(U[L],D[L]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var b=0,F=this.vertices,U=0,D=F.length;U!==D;U++){var L=F[U].norm2();L>b&&(b=L)}this.boundingSphereRadius=Math.sqrt(b)};var G=new a;l.prototype.calculateWorldAABB=function(b,F,U,D){for(var L=this.vertices.length,K=this.vertices,se,te,Q,he,ce,q,Re=0;Re<L;Re++){G.copy(K[Re]),F.vmult(G,G),b.vadd(G,G);var de=G;de.x<se||se===void 0?se=de.x:(de.x>he||he===void 0)&&(he=de.x),de.y<te||te===void 0?te=de.y:(de.y>ce||ce===void 0)&&(ce=de.y),de.z<Q||Q===void 0?Q=de.z:(de.z>q||q===void 0)&&(q=de.z)}U.set(se,te,Q),D.set(he,ce,q)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(b){b=b||new a;for(var F=this.vertices.length,U=this.vertices,D=0;D<F;D++)b.vadd(U[D],b);return b.mult(1/F,b),b},l.prototype.transformAllPoints=function(b,F){var U=this.vertices.length,D=this.vertices;if(F){for(var L=0;L<U;L++){var K=D[L];F.vmult(K,K)}for(var L=0;L<this.faceNormals.length;L++){var K=this.faceNormals[L];F.vmult(K,K)}}if(b)for(var L=0;L<U;L++){var K=D[L];K.vadd(b,K)}};var $=new a,B=new a,z=new a;l.prototype.pointIsInside=function(b){var F=this.vertices.length,U=this.vertices,D=this.faces,L=this.faceNormals,K=null,se=this.faces.length,te=$;this.getAveragePointLocal(te);for(var Q=0;Q<se;Q++){this.faces[Q].length;var F=L[Q],he=U[D[Q][0]],ce=B;b.vsub(he,ce);var q=F.dot(ce),Re=z;te.vsub(he,Re);var de=F.dot(Re);if(q<0&&de>0||q>0&&de<0)return!1}return K?1:-1},new a;var Y=new a,W=new a;l.project=function(b,F,U,D,L){var K=b.vertices.length,se=Y,te=0,Q=0,he=W,ce=b.vertices;he.setZero(),o.vectorToLocalFrame(U,D,F,se),o.pointToLocalFrame(U,D,he,he);var q=he.dot(se);Q=te=ce[0].dot(se);for(var Re=1;Re<K;Re++){var de=ce[Re].dot(se);de>te&&(te=de),de<Q&&(Q=de)}if(Q-=q,te-=q,Q>te){var ae=Q;Q=te,te=ae}L[0]=te,L[1]=Q}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,n,i){n.exports=l;var r=t("./Shape"),a=t("../math/Vec3");t("../math/Quaternion");var o=t("./ConvexPolyhedron");function l(h,u,c,f){var d=f,v=[],g=[],m=[],p=[],_=[],y=Math.cos,x=Math.sin;v.push(new a(u*y(0),u*x(0),-c*.5)),p.push(0),v.push(new a(h*y(0),h*x(0),c*.5)),_.push(1);for(var E=0;E<d;E++){var A=2*Math.PI/d*(E+1),R=2*Math.PI/d*(E+.5);E<d-1?(v.push(new a(u*y(A),u*x(A),-c*.5)),p.push(2*E+2),v.push(new a(h*y(A),h*x(A),c*.5)),_.push(2*E+3),m.push([2*E+2,2*E+3,2*E+1,2*E])):m.push([0,1,2*E+1,2*E]),(d%2===1||E<d/2)&&g.push(new a(y(R),x(R),0))}m.push(_),g.push(new a(0,0,1));for(var C=[],E=0;E<p.length;E++)C.push(p[p.length-E-1]);m.push(C),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}l.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,n,i){var r=t("./Shape"),a=t("./ConvexPolyhedron"),o=t("../math/Vec3"),l=t("../utils/Utils");n.exports=h;function h(u,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new r,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var u=this.data,c=u[0][0],f=0;f!==u.length;f++)for(var d=0;d!==u[f].length;d++){var v=u[f][d];v<c&&(c=v)}this.minValue=c},h.prototype.updateMaxValue=function(){for(var u=this.data,c=u[0][0],f=0;f!==u.length;f++)for(var d=0;d!==u[f].length;d++){var v=u[f][d];v>c&&(c=v)}this.maxValue=c},h.prototype.setHeightValueAtIndex=function(u,c,f){var d=this.data;d[u][c]=f,this.clearCachedConvexTrianglePillar(u,c,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,c,!0),this.clearCachedConvexTrianglePillar(u-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(u,c-1,!0),this.clearCachedConvexTrianglePillar(u,c-1,!1)),c>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,c-1,!0)},h.prototype.getRectMinMax=function(u,c,f,d,v){v=v||[];for(var g=this.data,m=this.minValue,p=u;p<=f;p++)for(var _=c;_<=d;_++){var y=g[p][_];y>m&&(m=y)}v[0]=this.minValue,v[1]=m},h.prototype.getIndexOfPosition=function(u,c,f,d){var v=this.elementSize,g=this.data,m=Math.floor(u/v),p=Math.floor(c/v);return f[0]=m,f[1]=p,d&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},h.prototype.getHeightAt=function(u,c,f){var d=[];this.getIndexOfPosition(u,c,d,f);var v=[];return this.getRectMinMax(d[0],d[1]+1,d[0],d[1]+1,v),(v[0]+v[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(u,c,f){return u+"_"+c+"_"+(f?1:0)},h.prototype.getCachedConvexTrianglePillar=function(u,c,f){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,f)]},h.prototype.setCachedConvexTrianglePillar=function(u,c,f,d,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,f)]={convex:d,offset:v}},h.prototype.clearCachedConvexTrianglePillar=function(u,c,f){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,f)]},h.prototype.getConvexTrianglePillar=function(u,c,f){var d=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,c,f);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}d=new a,v=new o,this.pillarConvex=d,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=d.faces;d.vertices.length=6;for(var _=0;_<6;_++)d.vertices[_]||(d.vertices[_]=new o);p.length=5;for(var _=0;_<5;_++)p[_]||(p[_]=[]);var y=d.vertices,x=(Math.min(g[u][c],g[u+1][c],g[u][c+1],g[u+1][c+1])-this.minValue)/2+this.minValue;f?(v.set((u+.75)*m,(c+.75)*m,x),y[0].set(.25*m,.25*m,g[u+1][c+1]-x),y[1].set(-.75*m,.25*m,g[u][c+1]-x),y[2].set(.25*m,-.75*m,g[u+1][c]-x),y[3].set(.25*m,.25*m,-x-1),y[4].set(-.75*m,.25*m,-x-1),y[5].set(.25*m,-.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((u+.25)*m,(c+.25)*m,x),y[0].set(-.25*m,-.25*m,g[u][c]-x),y[1].set(.75*m,-.25*m,g[u+1][c]-x),y[2].set(-.25*m,.75*m,g[u][c+1]-x),y[3].set(-.25*m,-.25*m,-x-1),y[4].set(.75*m,-.25*m,-x-1),y[5].set(-.25*m,.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),d.computeNormals(),d.computeEdges(),d.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,c,f,d,v)},h.prototype.calculateLocalInertia=function(u,c){return c=c||new o,c.set(0,0,0),c},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(u,c,f,d){f.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),d.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var u=this.data,c=this.elementSize;this.boundingSphereRadius=new o(u.length*c,u[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,n,i){n.exports=o;var r=t("./Shape"),a=t("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){return h=h||new a,h.set(0,0,0),h},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(l,h,u,c){u.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,n,i){n.exports=o;var r=t("./Shape"),a=t("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(h){var u=this.worldNormal;u.set(0,0,1),h.vmult(u,u),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(h,u){return u=u||new a,u},o.prototype.volume=function(){return Number.MAX_VALUE};var l=new a;o.prototype.calculateWorldAABB=function(h,u,c,f){l.set(0,0,1),u.vmult(l,l);var d=Number.MAX_VALUE;c.set(-d,-d,-d),f.set(d,d,d),l.x===1&&(f.x=h.x),l.y===1&&(f.y=h.y),l.z===1&&(f.z=h.z),l.x===-1&&(c.x=h.x),l.y===-1&&(c.y=h.y),l.z===-1&&(c.z=h.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,n,i){n.exports=r;var r=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,n,i){n.exports=o;var r=t("./Shape"),a=t("../math/Vec3");function o(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){h=h||new a;var u=2*l*this.radius*this.radius/5;return h.x=u,h.y=u,h.z=u,h},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(l,h,u,c){for(var f=this.radius,d=["x","y","z"],v=0;v<d.length;v++){var g=d[v];u[g]=l[g]-f,c[g]=l[g]+f}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,n,i){n.exports=u;var r=t("./Shape"),a=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform"),l=t("../collision/AABB"),h=t("../utils/Octree");function u(C,M){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(C),this.indices=new Int16Array(M),this.normals=new Float32Array(M.length),this.aabb=new l,this.edges=null,this.scale=new a(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new r,u.prototype.constructor=u;var c=new a;u.prototype.updateTree=function(){var C=this.tree;C.reset(),C.aabb.copy(this.aabb);var M=this.scale;C.aabb.lowerBound.x*=1/M.x,C.aabb.lowerBound.y*=1/M.y,C.aabb.lowerBound.z*=1/M.z,C.aabb.upperBound.x*=1/M.x,C.aabb.upperBound.y*=1/M.y,C.aabb.upperBound.z*=1/M.z;for(var S=new l,P=new a,O=new a,V=new a,I=[P,O,V],G=0;G<this.indices.length/3;G++){var $=G*3;this._getUnscaledVertex(this.indices[$],P),this._getUnscaledVertex(this.indices[$+1],O),this._getUnscaledVertex(this.indices[$+2],V),S.setFromPoints(I),C.insert(S,G)}C.removeEmptyNodes()};var f=new l;u.prototype.getTrianglesInAABB=function(C,M){f.copy(C);var S=this.scale,P=S.x,O=S.y,V=S.z,I=f.lowerBound,G=f.upperBound;return I.x/=P,I.y/=O,I.z/=V,G.x/=P,G.y/=O,G.z/=V,this.tree.aabbQuery(f,M)},u.prototype.setScale=function(C){var M=this.scale.x===this.scale.y===this.scale.z,S=C.x===C.y===C.z;M&&S||this.updateNormals(),this.scale.copy(C),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var C=c,M=this.normals,S=0;S<this.indices.length/3;S++){var P=S*3,O=this.indices[P],V=this.indices[P+1],I=this.indices[P+2];this.getVertex(O,p),this.getVertex(V,_),this.getVertex(I,y),u.computeNormal(_,p,y,C),M[P]=C.x,M[P+1]=C.y,M[P+2]=C.z}},u.prototype.updateEdges=function(){for(var C={},M=function($,B){var z=O<V?O+"_"+V:V+"_"+O;C[z]=!0},S=0;S<this.indices.length/3;S++){var P=S*3,O=this.indices[P],V=this.indices[P+1];this.indices[P+2],M(),M(),M()}var I=Object.keys(C);this.edges=new Int16Array(I.length*2);for(var S=0;S<I.length;S++){var G=I[S].split("_");this.edges[2*S]=parseInt(G[0],10),this.edges[2*S+1]=parseInt(G[1],10)}},u.prototype.getEdgeVertex=function(C,M,S){var P=this.edges[C*2+(M?1:0)];this.getVertex(P,S)};var d=new a,v=new a;u.prototype.getEdgeVector=function(C,M){var S=d,P=v;this.getEdgeVertex(C,0,S),this.getEdgeVertex(C,1,P),P.vsub(S,M)};var g=new a,m=new a;u.computeNormal=function(C,M,S,P){M.vsub(C,m),S.vsub(M,g),g.cross(m,P),P.isZero()||P.normalize()};var p=new a,_=new a,y=new a;u.prototype.getVertex=function(C,M){var S=this.scale;return this._getUnscaledVertex(C,M),M.x*=S.x,M.y*=S.y,M.z*=S.z,M},u.prototype._getUnscaledVertex=function(C,M){var S=C*3,P=this.vertices;return M.set(P[S],P[S+1],P[S+2])},u.prototype.getWorldVertex=function(C,M,S,P){return this.getVertex(C,P),o.pointToWorldFrame(M,S,P,P),P},u.prototype.getTriangleVertices=function(C,M,S,P){var O=C*3;this.getVertex(this.indices[O],M),this.getVertex(this.indices[O+1],S),this.getVertex(this.indices[O+2],P)},u.prototype.getNormal=function(C,M){var S=C*3;return M.set(this.normals[S],this.normals[S+1],this.normals[S+2])};var x=new l;u.prototype.calculateLocalInertia=function(C,M){this.computeLocalAABB(x);var S=x.upperBound.x-x.lowerBound.x,P=x.upperBound.y-x.lowerBound.y,O=x.upperBound.z-x.lowerBound.z;return M.set(1/12*C*(2*P*2*P+2*O*2*O),1/12*C*(2*S*2*S+2*O*2*O),1/12*C*(2*P*2*P+2*S*2*S))};var E=new a;u.prototype.computeLocalAABB=function(C){var M=C.lowerBound,S=C.upperBound,P=this.vertices.length;this.vertices;var O=E;this.getVertex(0,O),M.copy(O),S.copy(O);for(var V=0;V!==P;V++)this.getVertex(V,O),O.x<M.x?M.x=O.x:O.x>S.x&&(S.x=O.x),O.y<M.y?M.y=O.y:O.y>S.y&&(S.y=O.y),O.z<M.z?M.z=O.z:O.z>S.z&&(S.z=O.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var C=0,M=this.vertices,S=new a,P=0,O=M.length/3;P!==O;P++){this.getVertex(P,S);var V=S.norm2();V>C&&(C=V)}this.boundingSphereRadius=Math.sqrt(C)},new a;var A=new o,R=new l;u.prototype.calculateWorldAABB=function(C,M,S,P){var O=A,V=R;O.position=C,O.quaternion=M,this.aabb.toWorldFrame(O,V),S.copy(V.lowerBound),P.copy(V.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(C,M,S,P,O){C=C||1,M=M||.5,S=S||8,P=P||6,O=O||Math.PI*2;for(var V=[],I=[],G=0;G<=S;G++)for(var $=0;$<=P;$++){var B=$/P*O,z=G/S*Math.PI*2,Y=(C+M*Math.cos(z))*Math.cos(B),W=(C+M*Math.cos(z))*Math.sin(B),b=M*Math.sin(z);V.push(Y,W,b)}for(var G=1;G<=S;G++)for(var $=1;$<=P;$++){var F=(P+1)*G+$-1,U=(P+1)*(G-1)+$-1,D=(P+1)*(G-1)+$,L=(P+1)*G+$;I.push(F,U,L),I.push(U,D,L)}return new u(V,I)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,n,i){n.exports=a,t("../math/Vec3"),t("../math/Quaternion");var r=t("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],l=[],h=[];a.prototype.solve=function(u,c){var f=0,d=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=c.bodies,_=p.length,y=u,x,E,A,R,C,M;if(m!==0)for(var S=0;S!==_;S++)p[S].updateSolveMassProperties();var P=l,O=h,V=o;P.length=m,O.length=m,V.length=m;for(var S=0;S!==m;S++){var I=g[S];V[S]=0,O[S]=I.computeB(y),P[S]=1/I.computeC()}if(m!==0){for(var S=0;S!==_;S++){var G=p[S],$=G.vlambda,B=G.wlambda;$.set(0,0,0),B&&B.set(0,0,0)}for(f=0;f!==d;f++){R=0;for(var z=0;z!==m;z++){var I=g[z];x=O[z],E=P[z],M=V[z],C=I.computeGWlambda(),A=E*(x-C-I.eps*M),M+A<I.minForce?A=I.minForce-M:M+A>I.maxForce&&(A=I.maxForce-M),V[z]+=A,R+=A>0?A:-A,I.addToWlambda(A)}if(R*R<v)break}for(var S=0;S!==_;S++){var G=p[S],Y=G.velocity,W=G.angularVelocity;Y.vadd(G.vlambda,Y),W&&W.vadd(G.wlambda,W)}}return f}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,n,i){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,l=o.indexOf(a);l!==-1&&o.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,n,i){n.exports=o,t("../math/Vec3"),t("../math/Quaternion");var r=t("./Solver"),a=t("../objects/Body");function o(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var l=[],h=[],u={bodies:[]},c=a.STATIC;function f(p){for(var _=p.length,y=0;y!==_;y++){var x=p[y];if(!x.visited&&!(x.body.type&c))return x}return!1}var d=[];function v(p,_,y,x){for(d.push(p),p.visited=!0,_(p,y,x);d.length;)for(var E=d.pop(),A;A=f(E.children);)A.visited=!0,_(A,y,x),d.push(A)}function g(p,_,y){_.push(p.body);for(var x=p.eqs.length,E=0;E!==x;E++){var A=p.eqs[E];y.indexOf(A)===-1&&y.push(A)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,_){for(var y=l,x=this.nodePool,E=_.bodies,A=this.equations,R=A.length,C=E.length,M=this.subsolver;x.length<C;)x.push(this.createNode());y.length=C;for(var S=0;S<C;S++)y[S]=x[S];for(var S=0;S!==C;S++){var P=y[S];P.body=E[S],P.children.length=0,P.eqs.length=0,P.visited=!1}for(var O=0;O!==R;O++){var V=A[O],S=E.indexOf(V.bi),I=E.indexOf(V.bj),G=y[S],$=y[I];G.children.push($),G.eqs.push(V),$.children.push(G),$.eqs.push(V)}var B,z=0,Y=h;M.tolerance=this.tolerance,M.iterations=this.iterations;for(var W=u;B=f(y);){Y.length=0,W.bodies.length=0,v(B,g,W.bodies,Y);var b=Y.length;Y=Y.sort(m);for(var S=0;S!==b;S++)M.addEquation(Y[S]);M.solve(p,W),M.removeAllEquations(),z++}return z};function m(p,_){return _.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,n,i){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[a]===void 0&&(l[a]=[]),l[a].indexOf(o)===-1&&l[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var l=this._listeners;return l[a]!==void 0&&l[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var l=this._listeners;if(l[a]===void 0)return this;var h=l[a].indexOf(o);return h!==-1&&l[a].splice(h,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,l=o[a.type];if(l!==void 0){a.target=this;for(var h=0,u=l.length;h<u;h++)l[h].call(this,a)}return this}}},{}],50:[function(t,n,i){var r=t("../collision/AABB"),a=t("../math/Vec3");n.exports=l;function o(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new r,this.data=[],this.children=[]}function l(c,f){f=f||{},f.root=null,f.aabb=c,o.call(this,f),this.maxDepth=typeof f.maxDepth<"u"?f.maxDepth:8}l.prototype=new o,o.prototype.reset=function(c,f){this.children.length=this.data.length=0},o.prototype.insert=function(c,f,d){var v=this.data;if(d=d||0,!this.aabb.contains(c))return!1;var g=this.children;if(d<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(c,f,d+1))return!0;m&&(g.length=0)}return v.push(f),!0};var h=new a;o.prototype.subdivide=function(){var c=this.aabb,f=c.lowerBound,d=c.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),d.vsub(f,h),h.scale(.5,h);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var _=p.aabb.lowerBound;_.x*=h.x,_.y*=h.y,_.z*=h.z,_.vadd(f,_),_.vadd(h,p.aabb.upperBound)}},o.prototype.aabbQuery=function(c,f){this.data,this.children;for(var d=[this];d.length;){var v=d.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(f,v.data),Array.prototype.push.apply(d,v.children)}return f};var u=new r;o.prototype.rayQuery=function(c,f,d){return c.getAABB(u),u.toLocalFrame(f,u),this.aabbQuery(u,d),d},o.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var f=c.pop(),d=f.children.length-1;d>=0;d--)f.children[d].data.length||f.children.splice(d,1);Array.prototype.push.apply(c,f.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,n,i){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,n,i){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var l=o;o=a,a=l}return this.data[a+"-"+o]},r.prototype.set=function(a,o,l){if(a>o){var h=o;o=a,a=h}var u=a+"-"+o;this.get(a,o)||this.data.keys.push(u),this.data[u]=l},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var l=o.pop();delete a[l]}}},{}],53:[function(t,n,i){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var l in o)l in a||(a[l]=o[l]);return a}},{}],54:[function(t,n,i){n.exports=o;var r=t("../math/Vec3"),a=t("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,n,i){n.exports=v;var r=t("../collision/AABB"),a=t("../shapes/Shape"),o=t("../collision/Ray"),l=t("../math/Vec3"),h=t("../math/Transform");t("../shapes/ConvexPolyhedron");var u=t("../math/Quaternion");t("../solver/Solver");var c=t("../utils/Vec3Pool"),f=t("../equations/ContactEquation"),d=t("../equations/FrictionEquation");function v(le){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=le,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(le,ue,ye,_e,tt,Be){var Pe;this.contactPointPool.length?(Pe=this.contactPointPool.pop(),Pe.bi=le,Pe.bj=ue):Pe=new f(le,ue),Pe.enabled=le.collisionResponse&&ue.collisionResponse&&ye.collisionResponse&&_e.collisionResponse;var Ue=this.currentContactMaterial;Pe.restitution=Ue.restitution,Pe.setSpookParams(Ue.contactEquationStiffness,Ue.contactEquationRelaxation,this.world.dt);var re=ye.material||le.material,Ie=_e.material||ue.material;return re&&Ie&&re.restitution>=0&&Ie.restitution>=0&&(Pe.restitution=re.restitution*Ie.restitution),Pe.si=tt||ye,Pe.sj=Be||_e,Pe},v.prototype.createFrictionEquationsFromContact=function(le,ue){var ye=le.bi,_e=le.bj,tt=le.si,Be=le.sj,Pe=this.world,Ue=this.currentContactMaterial,re=Ue.friction,Ie=tt.material||ye.material,Oe=Be.material||_e.material;if(Ie&&Oe&&Ie.friction>=0&&Oe.friction>=0&&(re=Ie.friction*Oe.friction),re>0){var We=re*Pe.gravity.length(),w=ye.invMass+_e.invMass;w>0&&(w=1/w);var k=this.frictionEquationPool,j=k.length?k.pop():new d(ye,_e,We*w),Z=k.length?k.pop():new d(ye,_e,We*w);return j.bi=Z.bi=ye,j.bj=Z.bj=_e,j.minForce=Z.minForce=-We*w,j.maxForce=Z.maxForce=We*w,j.ri.copy(le.ri),j.rj.copy(le.rj),Z.ri.copy(le.ri),Z.rj.copy(le.rj),le.ni.tangents(j.t,Z.t),j.setSpookParams(Ue.frictionEquationStiffness,Ue.frictionEquationRelaxation,Pe.dt),Z.setSpookParams(Ue.frictionEquationStiffness,Ue.frictionEquationRelaxation,Pe.dt),j.enabled=Z.enabled=le.enabled,ue.push(j,Z),!0}return!1};var g=new l,m=new l,p=new l;v.prototype.createFrictionFromAverage=function(le){var ue=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ue,this.frictionResult)||le===1)){var ye=this.frictionResult[this.frictionResult.length-2],_e=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var tt=ue.bi;ue.bj;for(var Be=0;Be!==le;Be++)ue=this.result[this.result.length-1-Be],ue.bodyA!==tt?(g.vadd(ue.ni,g),m.vadd(ue.ri,m),p.vadd(ue.rj,p)):(g.vsub(ue.ni,g),m.vadd(ue.rj,m),p.vadd(ue.ri,p));var Pe=1/le;m.scale(Pe,ye.ri),p.scale(Pe,ye.rj),_e.ri.copy(ye.ri),_e.rj.copy(ye.rj),g.normalize(),g.tangents(ye.t,_e.t)}};var _=new l,y=new l,x=new u,E=new u;v.prototype.getContacts=function(le,ue,ye,_e,tt,Be,Pe){this.contactPointPool=tt,this.frictionEquationPool=Pe,this.result=_e,this.frictionResult=Be;for(var Ue=x,re=E,Ie=_,Oe=y,We=0,w=le.length;We!==w;We++){var k=le[We],j=ue[We],Z=null;k.material&&j.material&&(Z=ye.getContactMaterial(k.material,j.material)||null);for(var ne=0;ne<k.shapes.length;ne++){k.quaternion.mult(k.shapeOrientations[ne],Ue),k.quaternion.vmult(k.shapeOffsets[ne],Ie),Ie.vadd(k.position,Ie);for(var ie=k.shapes[ne],Te=0;Te<j.shapes.length;Te++){j.quaternion.mult(j.shapeOrientations[Te],re),j.quaternion.vmult(j.shapeOffsets[Te],Oe),Oe.vadd(j.position,Oe);var De=j.shapes[Te];if(!(Ie.distanceTo(Oe)>ie.boundingSphereRadius+De.boundingSphereRadius)){var qe=null;ie.material&&De.material&&(qe=ye.getContactMaterial(ie.material,De.material)||null),this.currentContactMaterial=qe||Z||ye.defaultContactMaterial;var Ve=this[ie.type|De.type];Ve&&(ie.type<De.type?Ve.call(this,ie,De,Ie,Oe,Ue,re,k,j,ie,De):Ve.call(this,De,ie,Oe,Ie,re,Ue,j,k,ie,De))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(le,ue,ye,_e,tt,Be,Pe,Ue){le.convexPolyhedronRepresentation.material=le.material,ue.convexPolyhedronRepresentation.material=ue.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,ue.convexPolyhedronRepresentation.collisionResponse=ue.collisionResponse,this.convexConvex(le.convexPolyhedronRepresentation,ue.convexPolyhedronRepresentation,ye,_e,tt,Be,Pe,Ue,le,ue)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(le,ue,ye,_e,tt,Be,Pe,Ue){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexConvex(le.convexPolyhedronRepresentation,ue,ye,_e,tt,Be,Pe,Ue,le,ue)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(le,ue,ye,_e,tt,Be,Pe,Ue){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexParticle(le.convexPolyhedronRepresentation,ue,ye,_e,tt,Be,Pe,Ue,le,ue)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=this.createContactEquation(Pe,Ue,le,ue);_e.vsub(ye,re.ni),re.ni.normalize(),re.ri.copy(re.ni),re.rj.copy(re.ni),re.ri.mult(le.radius,re.ri),re.rj.mult(-ue.radius,re.rj),re.ri.vadd(ye,re.ri),re.ri.vsub(Pe.position,re.ri),re.rj.vadd(_e,re.rj),re.rj.vsub(Ue.position,re.rj),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult)};var A=new l,R=new l,C=new l;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=new l,Ie=A;Ie.set(0,0,1),tt.vmult(Ie,Ie);for(var Oe=0;Oe<ue.vertices.length/3;Oe++){ue.getVertex(Oe,re);var We=new l;We.copy(re),h.pointToWorldFrame(_e,Be,We,re);var w=R;re.vsub(ye,w);var k=Ie.dot(w);if(k<=0){var j=this.createContactEquation(Pe,Ue,le,ue);j.ni.copy(Ie);var Z=C;Ie.scale(w.dot(Ie),Z),re.vsub(Z,Z),j.ri.copy(Z),j.ri.vsub(Pe.position,j.ri),j.rj.copy(re),j.rj.vsub(Ue.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}};var M=new l,S=new l;new l;var P=new l,O=new l,V=new l,I=new l,G=new l,$=new l,B=new l,z=new l,Y=new l,W=new l,b=new l,F=new r,U=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=V,Ie=I,Oe=G,We=$,w=B,k=z,j=F,Z=O,ne=S,ie=U;h.pointToLocalFrame(_e,Be,ye,w);var Te=le.radius;j.lowerBound.set(w.x-Te,w.y-Te,w.z-Te),j.upperBound.set(w.x+Te,w.y+Te,w.z+Te),ue.getTrianglesInAABB(j,ie);for(var De=P,qe=le.radius*le.radius,Ve=0;Ve<ie.length;Ve++)for(var Ne=0;Ne<3;Ne++)if(ue.getVertex(ue.indices[ie[Ve]*3+Ne],De),De.vsub(w,ne),ne.norm2()<=qe){Z.copy(De),h.pointToWorldFrame(_e,Be,Z,De),De.vsub(ye,ne);var be=this.createContactEquation(Pe,Ue,le,ue);be.ni.copy(ne),be.ni.normalize(),be.ri.copy(be.ni),be.ri.scale(le.radius,be.ri),be.ri.vadd(ye,be.ri),be.ri.vsub(Pe.position,be.ri),be.rj.copy(De),be.rj.vsub(Ue.position,be.rj),this.result.push(be),this.createFrictionEquationsFromContact(be,this.frictionResult)}for(var Ve=0;Ve<ie.length;Ve++)for(var Ne=0;Ne<3;Ne++){ue.getVertex(ue.indices[ie[Ve]*3+Ne],re),ue.getVertex(ue.indices[ie[Ve]*3+(Ne+1)%3],Ie),Ie.vsub(re,Oe),w.vsub(Ie,k);var ut=k.dot(Oe);w.vsub(re,k);var dt=k.dot(Oe);if(dt>0&&ut<0){w.vsub(re,k),We.copy(Oe),We.normalize(),dt=k.dot(We),We.scale(dt,k),k.vadd(re,k);var _t=k.distanceTo(w);if(_t<le.radius){var be=this.createContactEquation(Pe,Ue,le,ue);k.vsub(w,be.ni),be.ni.normalize(),be.ni.scale(le.radius,be.ri),h.pointToWorldFrame(_e,Be,k,k),k.vsub(Ue.position,be.rj),h.vectorToWorldFrame(Be,be.ni,be.ni),h.vectorToWorldFrame(Be,be.ri,be.ri),this.result.push(be),this.createFrictionEquationsFromContact(be,this.frictionResult)}}}for(var Lt=Y,ft=W,je=b,$t=M,Ve=0,rt=ie.length;Ve!==rt;Ve++){ue.getTriangleVertices(ie[Ve],Lt,ft,je),ue.getNormal(ie[Ve],$t),w.vsub(Lt,k);var _t=k.dot($t);if($t.scale(_t,k),w.vsub(k,k),_t=k.distanceTo(w),o.pointInTriangle(k,Lt,ft,je)&&_t<le.radius){var be=this.createContactEquation(Pe,Ue,le,ue);k.vsub(w,be.ni),be.ni.normalize(),be.ni.scale(le.radius,be.ri),h.pointToWorldFrame(_e,Be,k,k),k.vsub(Ue.position,be.rj),h.vectorToWorldFrame(Be,be.ni,be.ni),h.vectorToWorldFrame(Be,be.ri,be.ri),this.result.push(be),this.createFrictionEquationsFromContact(be,this.frictionResult)}}ie.length=0};var D=new l,L=new l;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=this.createContactEquation(Pe,Ue,le,ue);if(re.ni.set(0,0,1),Be.vmult(re.ni,re.ni),re.ni.negate(re.ni),re.ni.normalize(),re.ni.mult(le.radius,re.ri),ye.vsub(_e,D),re.ni.mult(re.ni.dot(D),L),D.vsub(L,re.rj),-D.dot(re.ni)<=le.radius){var Ie=re.ri,Oe=re.rj;Ie.vadd(ye,Ie),Ie.vsub(Pe.position,Ie),Oe.vadd(_e,Oe),Oe.vsub(Ue.position,Oe),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult)}};var K=new l,se=new l,te=new l;function Q(le,ue,ye){for(var _e=null,tt=le.length,Be=0;Be!==tt;Be++){var Pe=le[Be],Ue=K;le[(Be+1)%tt].vsub(Pe,Ue);var re=se;Ue.cross(ue,re);var Ie=te;ye.vsub(Pe,Ie);var Oe=re.dot(Ie);if(_e===null||Oe>0&&_e===!0||Oe<=0&&_e===!1){_e===null&&(_e=Oe>0);continue}else return!1}return!0}var he=new l,ce=new l,q=new l,Re=new l,de=[new l,new l,new l,new l,new l,new l],ae=new l,oe=new l,Ze=new l,Le=new l;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=this.v3pool,Ie=de;ye.vsub(_e,he),ue.getSideNormals(Ie,Be);for(var Oe=le.radius,We=!1,w=oe,k=Ze,j=Le,Z=null,ne=0,ie=0,Te=0,De=null,qe=0,Ve=Ie.length;qe!==Ve&&We===!1;qe++){var Ne=ce;Ne.copy(Ie[qe]);var be=Ne.norm();Ne.normalize();var ut=he.dot(Ne);if(ut<be+Oe&&ut>0){var dt=q,_t=Re;dt.copy(Ie[(qe+1)%3]),_t.copy(Ie[(qe+2)%3]);var Lt=dt.norm(),ft=_t.norm();dt.normalize(),_t.normalize();var je=he.dot(dt),$t=he.dot(_t);if(je<Lt&&je>-Lt&&$t<ft&&$t>-ft){var bt=Math.abs(ut-be-Oe);(De===null||bt<De)&&(De=bt,ie=je,Te=$t,Z=be,w.copy(Ne),k.copy(dt),j.copy(_t),ne++)}}}if(ne){We=!0;var nt=this.createContactEquation(Pe,Ue,le,ue);w.mult(-Oe,nt.ri),nt.ni.copy(w),nt.ni.negate(nt.ni),w.mult(Z,w),k.mult(ie,k),w.vadd(k,w),j.mult(Te,j),w.vadd(j,nt.rj),nt.ri.vadd(ye,nt.ri),nt.ri.vsub(Pe.position,nt.ri),nt.rj.vadd(_e,nt.rj),nt.rj.vsub(Ue.position,nt.rj),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}for(var rt=re.get(),Ft=ae,Bt=0;Bt!==2&&!We;Bt++)for(var Tt=0;Tt!==2&&!We;Tt++)for(var At=0;At!==2&&!We;At++)if(rt.set(0,0,0),Bt?rt.vadd(Ie[0],rt):rt.vsub(Ie[0],rt),Tt?rt.vadd(Ie[1],rt):rt.vsub(Ie[1],rt),At?rt.vadd(Ie[2],rt):rt.vsub(Ie[2],rt),_e.vadd(rt,Ft),Ft.vsub(ye,Ft),Ft.norm2()<Oe*Oe){We=!0;var nt=this.createContactEquation(Pe,Ue,le,ue);nt.ri.copy(Ft),nt.ri.normalize(),nt.ni.copy(nt.ri),nt.ri.mult(Oe,nt.ri),nt.rj.copy(rt),nt.ri.vadd(ye,nt.ri),nt.ri.vsub(Pe.position,nt.ri),nt.rj.vadd(_e,nt.rj),nt.rj.vsub(Ue.position,nt.rj),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}re.release(rt),rt=null;for(var vt=re.get(),Ot=re.get(),nt=re.get(),xt=re.get(),bt=re.get(),Mn=Ie.length,Bt=0;Bt!==Mn&&!We;Bt++)for(var Tt=0;Tt!==Mn&&!We;Tt++)if(Bt%3!==Tt%3){Ie[Tt].cross(Ie[Bt],vt),vt.normalize(),Ie[Bt].vadd(Ie[Tt],Ot),nt.copy(ye),nt.vsub(Ot,nt),nt.vsub(_e,nt);var vn=nt.dot(vt);vt.mult(vn,xt);for(var At=0;At===Bt%3||At===Tt%3;)At++;bt.copy(ye),bt.vsub(xt,bt),bt.vsub(Ot,bt),bt.vsub(_e,bt);var hc=Math.abs(vn),uc=bt.norm();if(hc<Ie[At].norm()&&uc<Oe){We=!0;var Et=this.createContactEquation(Pe,Ue,le,ue);Ot.vadd(xt,Et.rj),Et.rj.copy(Et.rj),bt.negate(Et.ni),Et.ni.normalize(),Et.ri.copy(Et.rj),Et.ri.vadd(_e,Et.ri),Et.ri.vsub(ye,Et.ri),Et.ri.normalize(),Et.ri.mult(Oe,Et.ri),Et.ri.vadd(ye,Et.ri),Et.ri.vsub(Pe.position,Et.ri),Et.rj.vadd(_e,Et.rj),Et.rj.vsub(Ue.position,Et.rj),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}}re.release(vt,Ot,nt,xt,bt)};var He=new l,xe=new l,Qe=new l,it=new l,N=new l,T=new l,ee=new l,me=new l,fe=new l,ge=new l;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=this.v3pool;ye.vsub(_e,He);for(var Ie=ue.faceNormals,Oe=ue.faces,We=ue.vertices,w=le.radius,k=0;k!==We.length;k++){var j=We[k],Z=N;Be.vmult(j,Z),_e.vadd(Z,Z);var ne=it;if(Z.vsub(ye,ne),ne.norm2()<w*w){Te=!0;var ie=this.createContactEquation(Pe,Ue,le,ue);ie.ri.copy(ne),ie.ri.normalize(),ie.ni.copy(ie.ri),ie.ri.mult(w,ie.ri),Z.vsub(_e,ie.rj),ie.ri.vadd(ye,ie.ri),ie.ri.vsub(Pe.position,ie.ri),ie.rj.vadd(_e,ie.rj),ie.rj.vsub(Ue.position,ie.rj),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult);return}}for(var Te=!1,k=0,De=Oe.length;k!==De&&Te===!1;k++){var qe=Ie[k],Ve=Oe[k],Ne=T;Be.vmult(qe,Ne);var be=ee;Be.vmult(We[Ve[0]],be),be.vadd(_e,be);var ut=me;Ne.mult(-w,ut),ye.vadd(ut,ut);var dt=fe;ut.vsub(be,dt);var _t=dt.dot(Ne),Lt=ge;if(ye.vsub(be,Lt),_t<0&&Lt.dot(Ne)>0){for(var ft=[],je=0,$t=Ve.length;je!==$t;je++){var rt=re.get();Be.vmult(We[Ve[je]],rt),_e.vadd(rt,rt),ft.push(rt)}if(Q(ft,Ne,ye)){Te=!0;var ie=this.createContactEquation(Pe,Ue,le,ue);Ne.mult(-w,ie.ri),Ne.negate(ie.ni);var Ft=re.get();Ne.mult(-_t,Ft);var Bt=re.get();Ne.mult(-w,Bt),ye.vsub(_e,ie.rj),ie.rj.vadd(Bt,ie.rj),ie.rj.vadd(Ft,ie.rj),ie.rj.vadd(_e,ie.rj),ie.rj.vsub(Ue.position,ie.rj),ie.ri.vadd(ye,ie.ri),ie.ri.vsub(Pe.position,ie.ri),re.release(Ft),re.release(Bt),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult);for(var je=0,Tt=ft.length;je!==Tt;je++)re.release(ft[je]);return}else for(var je=0;je!==Ve.length;je++){var At=re.get(),vt=re.get();Be.vmult(We[Ve[(je+1)%Ve.length]],At),Be.vmult(We[Ve[(je+2)%Ve.length]],vt),_e.vadd(At,At),_e.vadd(vt,vt);var Ot=xe;vt.vsub(At,Ot);var nt=Qe;Ot.unit(nt);var xt=re.get(),bt=re.get();ye.vsub(At,bt);var Mn=bt.dot(nt);nt.mult(Mn,xt),xt.vadd(At,xt);var vn=re.get();if(xt.vsub(ye,vn),Mn>0&&Mn*Mn<Ot.norm2()&&vn.norm2()<w*w){var ie=this.createContactEquation(Pe,Ue,le,ue);xt.vsub(_e,ie.rj),xt.vsub(ye,ie.ni),ie.ni.normalize(),ie.ni.mult(w,ie.ri),ie.rj.vadd(_e,ie.rj),ie.rj.vsub(Ue.position,ie.rj),ie.ri.vadd(ye,ie.ri),ie.ri.vsub(Pe.position,ie.ri),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult);for(var je=0,Tt=ft.length;je!==Tt;je++)re.release(ft[je]);re.release(At),re.release(vt),re.release(xt),re.release(vn),re.release(bt);return}re.release(At),re.release(vt),re.release(xt),re.release(vn),re.release(bt)}for(var je=0,Tt=ft.length;je!==Tt;je++)re.release(ft[je])}}},new l,new l,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(le,ue,ye,_e,tt,Be,Pe,Ue){ue.convexPolyhedronRepresentation.material=ue.material,ue.convexPolyhedronRepresentation.collisionResponse=ue.collisionResponse,this.planeConvex(le,ue.convexPolyhedronRepresentation,ye,_e,tt,Be,Pe,Ue)};var ke=new l,we=new l,Fe=new l,X=new l;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=ke,Ie=we;Ie.set(0,0,1),tt.vmult(Ie,Ie);for(var Oe=0,We=Fe,w=0;w!==ue.vertices.length;w++){re.copy(ue.vertices[w]),Be.vmult(re,re),_e.vadd(re,re),re.vsub(ye,We);var k=Ie.dot(We);if(k<=0){var j=this.createContactEquation(Pe,Ue,le,ue),Z=X;Ie.mult(Ie.dot(We),Z),re.vsub(Z,Z),Z.vsub(ye,j.ri),j.ni.copy(Ie),re.vsub(_e,j.rj),j.ri.vadd(ye,j.ri),j.ri.vsub(Pe.position,j.ri),j.rj.vadd(_e,j.rj),j.rj.vsub(Ue.position,j.rj),this.result.push(j),Oe++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(j,this.frictionResult)}}this.enableFrictionReduction&&Oe&&this.createFrictionFromAverage(Oe)};var Me=new l,pe=new l;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(le,ue,ye,_e,tt,Be,Pe,Ue,re,Ie,Oe,We){var w=Me;if(!(ye.distanceTo(_e)>le.boundingSphereRadius+ue.boundingSphereRadius)&&le.findSeparatingAxis(ue,ye,tt,_e,Be,w,Oe,We)){var k=[],j=pe;le.clipAgainstHull(ye,tt,ue,_e,Be,w,-100,100,k);for(var Z=0,ne=0;ne!==k.length;ne++){var ie=this.createContactEquation(Pe,Ue,le,ue,re,Ie),Te=ie.ri,De=ie.rj;w.negate(ie.ni),k[ne].normal.negate(j),j.mult(k[ne].depth,j),k[ne].point.vadd(j,Te),De.copy(k[ne].point),Te.vsub(ye,Te),De.vsub(_e,De),Te.vadd(ye,Te),Te.vsub(Pe.position,Te),De.vadd(_e,De),De.vsub(Ue.position,De),this.result.push(ie),Z++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(ie,this.frictionResult)}this.enableFrictionReduction&&Z&&this.createFrictionFromAverage(Z)}};var $e=new l,Ye=new l,Ke=new l;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=$e;re.set(0,0,1),Pe.quaternion.vmult(re,re);var Ie=Ye;_e.vsub(Pe.position,Ie);var Oe=re.dot(Ie);if(Oe<=0){var We=this.createContactEquation(Ue,Pe,ue,le);We.ni.copy(re),We.ni.negate(We.ni),We.ri.set(0,0,0);var w=Ke;re.mult(re.dot(_e),w),_e.vsub(w,w),We.rj.copy(w),this.result.push(We),this.createFrictionEquationsFromContact(We,this.frictionResult)}};var Ge=new l;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=Ge;re.set(0,0,1),_e.vsub(ye,re);var Ie=re.norm2();if(Ie<=le.radius*le.radius){var Oe=this.createContactEquation(Ue,Pe,ue,le);re.normalize(),Oe.rj.copy(re),Oe.rj.mult(le.radius,Oe.rj),Oe.ni.copy(re),Oe.ni.negate(Oe.ni),Oe.ri.set(0,0,0),this.result.push(Oe),this.createFrictionEquationsFromContact(Oe,this.frictionResult)}};var H=new u,Ee=new l;new l;var Se=new l,Ae=new l,Ce=new l;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=-1,Ie=Se,Oe=Ce,We=null,w=Ee;if(w.copy(_e),w.vsub(ye,w),tt.conjugate(H),H.vmult(w,w),le.pointIsInside(w)){le.worldVerticesNeedsUpdate&&le.computeWorldVertices(ye,tt),le.worldFaceNormalsNeedsUpdate&&le.computeWorldFaceNormals(tt);for(var k=0,j=le.faces.length;k!==j;k++){var Z=[le.worldVertices[le.faces[k][0]]],ne=le.worldFaceNormals[k];_e.vsub(Z[0],Ae);var ie=-ne.dot(Ae);(We===null||Math.abs(ie)<Math.abs(We))&&(We=ie,re=k,Ie.copy(ne))}if(re!==-1){var Te=this.createContactEquation(Ue,Pe,ue,le);Ie.mult(We,Oe),Oe.vadd(_e,Oe),Oe.vsub(ye,Oe),Te.rj.copy(Oe),Ie.negate(Te.ni),Te.ri.set(0,0,0);var De=Te.ri,qe=Te.rj;De.vadd(_e,De),De.vsub(Ue.position,De),qe.vadd(ye,qe),qe.vsub(Pe.position,qe),this.result.push(Te),this.createFrictionEquationsFromContact(Te,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(le,ue,ye,_e,tt,Be,Pe,Ue){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexHeightfield(le.convexPolyhedronRepresentation,ue,ye,_e,tt,Be,Pe,Ue)};var ve=new l,Xe=new l,Je=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=ue.data,Ie=ue.elementSize,Oe=le.boundingSphereRadius,We=Xe,w=Je,k=ve;h.pointToLocalFrame(_e,Be,ye,k);var j=Math.floor((k.x-Oe)/Ie)-1,Z=Math.ceil((k.x+Oe)/Ie)+1,ne=Math.floor((k.y-Oe)/Ie)-1,ie=Math.ceil((k.y+Oe)/Ie)+1;if(!(Z<0||ie<0||j>re.length||ne>re[0].length)){j<0&&(j=0),Z<0&&(Z=0),ne<0&&(ne=0),ie<0&&(ie=0),j>=re.length&&(j=re.length-1),Z>=re.length&&(Z=re.length-1),ie>=re[0].length&&(ie=re[0].length-1),ne>=re[0].length&&(ne=re[0].length-1);var Te=[];ue.getRectMinMax(j,ne,Z,ie,Te);var De=Te[0],qe=Te[1];if(!(k.z-Oe>qe||k.z+Oe<De))for(var Ve=j;Ve<Z;Ve++)for(var Ne=ne;Ne<ie;Ne++)ue.getConvexTrianglePillar(Ve,Ne,!1),h.pointToWorldFrame(_e,Be,ue.pillarOffset,We),ye.distanceTo(We)<ue.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.convexConvex(le,ue.pillarConvex,ye,We,tt,Be,Pe,Ue,null,null,w,null),ue.getConvexTrianglePillar(Ve,Ne,!0),h.pointToWorldFrame(_e,Be,ue.pillarOffset,We),ye.distanceTo(We)<ue.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.convexConvex(le,ue.pillarConvex,ye,We,tt,Be,Pe,Ue,null,null,w,null)}};var yt=new l,at=new l;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(le,ue,ye,_e,tt,Be,Pe,Ue){var re=ue.data,Ie=le.radius,Oe=ue.elementSize,We=at,w=yt;h.pointToLocalFrame(_e,Be,ye,w);var k=Math.floor((w.x-Ie)/Oe)-1,j=Math.ceil((w.x+Ie)/Oe)+1,Z=Math.floor((w.y-Ie)/Oe)-1,ne=Math.ceil((w.y+Ie)/Oe)+1;if(!(j<0||ne<0||k>re.length||ne>re[0].length)){k<0&&(k=0),j<0&&(j=0),Z<0&&(Z=0),ne<0&&(ne=0),k>=re.length&&(k=re.length-1),j>=re.length&&(j=re.length-1),ne>=re[0].length&&(ne=re[0].length-1),Z>=re[0].length&&(Z=re[0].length-1);var ie=[];ue.getRectMinMax(k,Z,j,ne,ie);var Te=ie[0],De=ie[1];if(!(w.z-Ie>De||w.z+Ie<Te))for(var qe=this.result,Ve=k;Ve<j;Ve++)for(var Ne=Z;Ne<ne;Ne++){var be=qe.length;ue.getConvexTrianglePillar(Ve,Ne,!1),h.pointToWorldFrame(_e,Be,ue.pillarOffset,We),ye.distanceTo(We)<ue.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.sphereConvex(le,ue.pillarConvex,ye,We,tt,Be,Pe,Ue),ue.getConvexTrianglePillar(Ve,Ne,!0),h.pointToWorldFrame(_e,Be,ue.pillarOffset,We),ye.distanceTo(We)<ue.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.sphereConvex(le,ue.pillarConvex,ye,We,tt,Be,Pe,Ue);var ut=qe.length-be;if(ut>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,n,i){n.exports=x;var r=t("../shapes/Shape"),a=t("../math/Vec3"),o=t("../math/Quaternion"),l=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var h=t("./Narrowphase"),u=t("../utils/EventTarget"),c=t("../collision/ArrayCollisionMatrix"),f=t("../material/Material"),d=t("../material/ContactMaterial"),v=t("../objects/Body"),g=t("../utils/TupleDictionary"),m=t("../collision/RaycastResult"),p=t("../collision/AABB"),_=t("../collision/Ray"),y=t("../collision/NaiveBroadphase");function x(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new f("default"),this.defaultContactMaterial=new d(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new u,new p;var E=new _;if(x.prototype.getContactMaterial=function(z,Y){return this.contactMaterialTable.get(z.id,Y.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var z=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=z,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(z){this.bodies.indexOf(z)===-1&&(z.index=this.bodies.length,this.bodies.push(z),z.world=this,z.initPosition.copy(z.position),z.initVelocity.copy(z.velocity),z.timeLastSleepy=this.time,z instanceof v&&(z.initAngularVelocity.copy(z.angularVelocity),z.initQuaternion.copy(z.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=z,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(z){this.constraints.push(z)},x.prototype.removeConstraint=function(z){var Y=this.constraints.indexOf(z);Y!==-1&&this.constraints.splice(Y,1)},x.prototype.rayTest=function(z,Y,W){W instanceof m?this.raycastClosest(z,Y,{skipBackfaces:!0},W):this.raycastAll(z,Y,{skipBackfaces:!0},W)},x.prototype.raycastAll=function(z,Y,W,b){return W.mode=_.ALL,W.from=z,W.to=Y,W.callback=b,E.intersectWorld(this,W)},x.prototype.raycastAny=function(z,Y,W,b){return W.mode=_.ANY,W.from=z,W.to=Y,W.result=b,E.intersectWorld(this,W)},x.prototype.raycastClosest=function(z,Y,W,b){return W.mode=_.CLOSEST,W.from=z,W.to=Y,W.result=b,E.intersectWorld(this,W)},x.prototype.remove=function(z){z.world=null;var Y=this.bodies.length-1,W=this.bodies,b=W.indexOf(z);if(b!==-1){W.splice(b,1);for(var F=0;F!==W.length;F++)W[F].index=F;this.collisionMatrix.setNumObjects(Y),this.removeBodyEvent.body=z,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(z){this.materials.push(z)},x.prototype.addContactMaterial=function(z){this.contactmaterials.push(z),this.contactMaterialTable.set(z.materials[0].id,z.materials[1].id,z)},typeof performance>"u"&&(performance={}),!performance.now){var A=Date.now();performance.timing&&performance.timing.navigationStart&&(A=performance.timing.navigationStart),performance.now=function(){return Date.now()-A}}var R=new a;x.prototype.step=function(z,Y,W){if(W=W||10,Y=Y||0,Y===0)this.internalStep(z),this.time+=z;else{var b=Math.floor((this.time+Y)/z)-Math.floor(this.time/z);b=Math.min(b,W);for(var F=performance.now(),U=0;U!==b&&(this.internalStep(z),!(performance.now()-F>z*1e3));U++);this.time+=Y;for(var D=this.time%z,L=D/z,K=R,se=this.bodies,te=0;te!==se.length;te++){var Q=se[te];Q.type!==v.STATIC&&Q.sleepState!==v.SLEEPING?(Q.position.vsub(Q.previousPosition,K),K.scale(L,K),Q.position.vadd(K,Q.interpolatedPosition)):(Q.interpolatedPosition.copy(Q.position),Q.interpolatedQuaternion.copy(Q.quaternion))}}};var C={type:"postStep"},M={type:"preStep"},S={type:"collide",body:null,contact:null},P=[],O=[],V=[],I=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var G=new o,$=new o,B=new a;x.prototype.internalStep=function(z){this.dt=z;var Y=this.contacts,W=V,b=I,F=this.numObjects(),U=this.bodies,D=this.solver,L=this.gravity,K=this.doProfiling,se=this.profile,te=v.DYNAMIC,Q,he=this.constraints,ce=O;L.norm();var q=L.x,Re=L.y,de=L.z,ae=0;for(K&&(Q=performance.now()),ae=0;ae!==F;ae++){var oe=U[ae];if(oe.type&te){var Ze=oe.force,Le=oe.mass;Ze.x+=Le*q,Ze.y+=Le*Re,Ze.z+=Le*de}}for(var ae=0,He=this.subsystems.length;ae!==He;ae++)this.subsystems[ae].update();K&&(Q=performance.now()),W.length=0,b.length=0,this.broadphase.collisionPairs(this,W,b),K&&(se.broadphase=performance.now()-Q);var Me=he.length;for(ae=0;ae!==Me;ae++){var xe=he[ae];if(!xe.collideConnected)for(var Qe=W.length-1;Qe>=0;Qe-=1)(xe.bodyA===W[Qe]&&xe.bodyB===b[Qe]||xe.bodyB===W[Qe]&&xe.bodyA===b[Qe])&&(W.splice(Qe,1),b.splice(Qe,1))}this.collisionMatrixTick(),K&&(Q=performance.now());var it=P,N=Y.length;for(ae=0;ae!==N;ae++)it.push(Y[ae]);Y.length=0;var T=this.frictionEquations.length;for(ae=0;ae!==T;ae++)ce.push(this.frictionEquations[ae]);this.frictionEquations.length=0,this.narrowphase.getContacts(W,b,this,Y,it,this.frictionEquations,ce),K&&(se.narrowphase=performance.now()-Q),K&&(Q=performance.now());for(var ae=0;ae<this.frictionEquations.length;ae++)D.addEquation(this.frictionEquations[ae]);for(var ee=Y.length,me=0;me!==ee;me++){var xe=Y[me],oe=xe.bi,fe=xe.bj;xe.si,xe.sj;var ge;if(oe.material&&fe.material?ge=this.getContactMaterial(oe.material,fe.material)||this.defaultContactMaterial:ge=this.defaultContactMaterial,ge.friction,oe.material&&fe.material&&(oe.material.friction>=0&&fe.material.friction>=0&&oe.material.friction*fe.material.friction,oe.material.restitution>=0&&fe.material.restitution>=0&&(xe.restitution=oe.material.restitution*fe.material.restitution)),D.addEquation(xe),oe.allowSleep&&oe.type===v.DYNAMIC&&oe.sleepState===v.SLEEPING&&fe.sleepState===v.AWAKE&&fe.type!==v.STATIC){var ke=fe.velocity.norm2()+fe.angularVelocity.norm2(),we=Math.pow(fe.sleepSpeedLimit,2);ke>=we*2&&(oe._wakeUpAfterNarrowphase=!0)}if(fe.allowSleep&&fe.type===v.DYNAMIC&&fe.sleepState===v.SLEEPING&&oe.sleepState===v.AWAKE&&oe.type!==v.STATIC){var Fe=oe.velocity.norm2()+oe.angularVelocity.norm2(),X=Math.pow(oe.sleepSpeedLimit,2);Fe>=X*2&&(fe._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(oe,fe,!0),this.collisionMatrixPrevious.get(oe,fe)||(S.body=fe,S.contact=xe,oe.dispatchEvent(S),S.body=oe,fe.dispatchEvent(S))}for(K&&(se.makeContactConstraints=performance.now()-Q,Q=performance.now()),ae=0;ae!==F;ae++){var oe=U[ae];oe._wakeUpAfterNarrowphase&&(oe.wakeUp(),oe._wakeUpAfterNarrowphase=!1)}var Me=he.length;for(ae=0;ae!==Me;ae++){var xe=he[ae];xe.update();for(var Qe=0,pe=xe.equations.length;Qe!==pe;Qe++){var $e=xe.equations[Qe];D.addEquation($e)}}D.solve(z,this),K&&(se.solve=performance.now()-Q),D.removeAllEquations();var Ye=Math.pow;for(ae=0;ae!==F;ae++){var oe=U[ae];if(oe.type&te){var Ke=Ye(1-oe.linearDamping,z),Ge=oe.velocity;Ge.mult(Ke,Ge);var H=oe.angularVelocity;if(H){var Ee=Ye(1-oe.angularDamping,z);H.mult(Ee,H)}}}for(this.dispatchEvent(M),ae=0;ae!==F;ae++){var oe=U[ae];oe.preStep&&oe.preStep.call(oe)}K&&(Q=performance.now());var Se=G,Ae=$,Ce=this.stepnumber,ve=v.DYNAMIC|v.KINEMATIC,Xe=Ce%(this.quatNormalizeSkip+1)===0,Je=this.quatNormalizeFast,yt=z*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,ae=0;ae!==F;ae++){var at=U[ae],le=at.force,ue=at.torque;if(at.type&ve&&at.sleepState!==v.SLEEPING){var ye=at.velocity,_e=at.angularVelocity,tt=at.position,Be=at.quaternion,Pe=at.invMass,Ue=at.invInertiaWorld;ye.x+=le.x*Pe*z,ye.y+=le.y*Pe*z,ye.z+=le.z*Pe*z,at.angularVelocity&&(Ue.vmult(ue,B),B.mult(z,B),B.vadd(_e,_e)),tt.x+=ye.x*z,tt.y+=ye.y*z,tt.z+=ye.z*z,at.angularVelocity&&(Se.set(_e.x,_e.y,_e.z,0),Se.mult(Be,Ae),Be.x+=yt*Ae.x,Be.y+=yt*Ae.y,Be.z+=yt*Ae.z,Be.w+=yt*Ae.w,Xe&&(Je?Be.normalizeFast():Be.normalize())),at.aabb&&(at.aabbNeedsUpdate=!0),at.updateInertiaWorld&&at.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,K&&(se.integrate=performance.now()-Q),this.time+=z,this.stepnumber+=1,this.dispatchEvent(C),ae=0;ae!==F;ae++){var oe=U[ae],re=oe.postStep;re&&re.call(oe)}if(this.allowSleep)for(ae=0;ae!==F;ae++)U[ae].sleepTick(this.time)},x.prototype.clearForces=function(){for(var z=this.bodies,Y=z.length,W=0;W!==Y;W++){var b=z[W];b.force,b.torque,b.force.set(0,0,0),b.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(sc);var en=sc.exports;class jv{constructor(e,t){this.world=t,this.scene=e,this.init()}init(){console.log("Creating character");const e=new Wi(1,1,1),t=new Vl;this.mesh=new mn(e,t),this.mesh.castShadow=!0,this.mesh.position.y=2,this.scene.add(this.mesh),this.maxSpeed=5,this.force=new en.Vec3(0,0,0),this.body=new en.Body({mass:1,position:new en.Vec3(0,2,0),shape:new en.Box(new en.Vec3(.5,.5,.5)),material:new en.Material}),this.body.fixedRotation=!0,this.body.updateMassProperties(),this.body.material.friction=0,this.world.addBody(this.body),this.keySet=new Set,document.addEventListener("keydown",this.handleInputDown.bind(this)),document.addEventListener("keyup",this.handleInputUp.bind(this))}update(){this.setForce(),this.body.velocity=new en.Vec3(this.force.x,this.body.velocity.y,this.force.z),this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion)}handleInputDown(e){this.keySet.add(e.key.toLowerCase())}handleInputUp(e){this.keySet.delete(e.key.toLowerCase())}setForce(){this.force.z=0,this.force.x=0,this.keySet.has("w")&&(this.force.z=1),this.keySet.has("s")&&(this.force.z=-1),this.keySet.has("a")&&(this.force.x=1),this.keySet.has("d")&&(this.force.x=-1),this.keySet.has("d")&&this.keySet.has("a")&&(this.force.x=0,this.force.z=0),this.keySet.has("w")&&this.keySet.has("s")&&(this.force.x=0,this.force.z=0);const e=Math.sqrt(this.force.z*this.force.z+this.force.x*this.force.x);e!==0&&(this.force.x/=e,this.force.z/=e,this.force.x*=this.maxSpeed,this.force.z*=this.maxSpeed)}}const Zn=new Pm,hr=new Yt(75,window.innerWidth/window.innerHeight,.1,1e3),Ki=new Bl;let na,ac=!1;const is=new Gl,Kv=new Dv(is),Zv=new Xl(is),$v=new Yv(is);Ki.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Ki.domElement);const Jv=new hv(5);Zn.add(Jv);Ki.shadowMap.enabled=!0;const Qv=new Yl("white",.5);Zn.add(Qv);const oc=new ql("white",1);oc.position.set(0,4,0);Zn.add(oc);const ga=new Qs("white",100,100);ga.castShadow=!0;ga.position.set(3,10,3);Zn.add(ga);hr.position.z=10;hr.position.y=10;hr.rotateX(ng(-45));const rs=new en.World;rs.gravity.set(0,-9.82,0);const ur=new en.Body({mass:0,material:new en.Material}),eg=new en.Plane;ur.addShape(eg);ur.material.friction=0;console.log(ur.material);const lc=new en.Quaternion;lc.setFromAxisAngle(new en.Vec3(1,0,0),-Math.PI/2);ur.quaternion=lc;rs.addBody(ur);const tg=new jv(Zn,rs);$v.load("other/sky.hdr",s=>{const e=new Zs(Ki),t=e.fromEquirectangular(s).texture;Zn.background=t,s.dispose(),e.dispose()});Kv.load("models/environment.fbx",async s=>{await Zv.load("textures/checker.jpg",e=>{e.wrapS=ai,e.wrapT=ai;const t=new Vl({color:"white",map:e});s.children[0].material=t,s.children[0].receiveShadow=!0,s.children[0].castShadow=!0,Zn.add(s)})},s=>{},s=>{console.log(s)});function cc(s){requestAnimationFrame(cc),ac&&(rs.step(1/60),tg.update(),na.update(),Ki.render(Zn,hr))}cc();function ng(s){return s*(Math.PI/180)}function ig(){na=new qv(hr,Ki.domElement),na.enableDamping=!0,ac=!0,document.querySelector(".bg").style.display="none"}is.onProgress=function(s,e,t){const n=e/t*100,i=document.querySelector(".loading-percentage");i.style.width=`${n}%`,console.log("Loading progress: "+n),n===100&&(console.log("Ready: "+n),ig())};
