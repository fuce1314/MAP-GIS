/**/﻿_jsload&&_jsload('scommon', 'var gz=1,eB=2,aP=3,c4=new iL(21,33),cm=new iL(10,33),hc=new iL(22,36),di=new iL(11,36),dc=new iL(25,40),cP=new iL(12,20),dR=new iL(9,0),iE=new iL(300,300);fv.addSearchPoi=function(i,j0,jY,jZ){var j1=a7(j0);if(!j1){return}if(jY<0||jY>9){return}var jW=null;var jX=new s(j1);var e=B.staticHost+"/wolfman/static/common/images/";e+="markers_new2x_2960fb4.png";if(f3()>1){function jV(){return new jd(e,c4,{imageSize:iE,anchor:cm,imageOffset:new iL(21*jY,0),infoWindowOffset:dR})}jW=jV();var T=jV();T.setImageOffset(new iL(21*jY,66));jX.icoDefault=jW;jX.icoActive=T}else{jW=new jd(e,c4,{imageSize:iE,anchor:cm,imageOffset:new iL(21*jY,0),infoWindowOffset:dR})}jX.setIcon(jW);i.addOverlay(jX);if(jZ){jX.setTitle(jZ)}return jX};fv.addCenterPoi=function(jW,e,jX){var jV=a7(e);if(!jV){return}var i=new s(jV);var jY=null;if(bU()){function T(){return new jd(B.imgPath+"markers_hd.png",new iL(21,31),{anchor:cm,imageOffset:new iL(-29,-320),imageSize:new iL(85,477),infoWindowAnchor:dR})}jY=T();i.icoDefault=jY}else{jY=new jd(B.imgPath+"markers.png",c4,{anchor:cm,imageOffset:new iL(0,-250),infoWindowAnchor:dR})}i.setIcon(jY);jW.addOverlay(i);if(jX){i.setTitle(jX)}return i};fv.addSearchInBoundsPoi=function(i,jZ,jY){var j0=a7(jZ);if(!j0){return}var jX=new s(j0);var jW=null;var e=B.staticHost+"/wolfman/static/common/images/";e+="markers_new2x_2960fb4.png";if(f3()>1){function jV(){return new jd(e,hc,{imageSize:iE,anchor:di,imageOffset:new iL(200,188),infoWindowOffset:dR})}jW=jV();var T=jV();T.setImageOffset(new iL(200,224));jX.icoDefault=jW;jX.icoActive=T}else{jW=new jd(e,hc,{imageSize:iE,anchor:di,imageOffset:new iL(200,188),infoWindowOffset:dR})}jX.setIcon(jW);i.addOverlay(jX);if(jY){jX.setTitle(jY)}return jX};function a7(e){var T=[];var i=null;if(!e){return i}if(e instanceof cu||e instanceof co){i=e}else{if(typeof e=="string"){T=eP.trim(e).split(",");if(T.length<2){return}T[0]=parseFloat(eP.trim(T[0]));T[1]=parseFloat(eP.trim(T[1]))}else{T=e.slice(0);if(T.length<2){return}}i=new cu(T[0],T[1])}return i}fv.createSearchInfoWnd=function(T,e){var j4=T.title;var j2=T.addr;var jX=T.tel;var j0=T.uid||"";var i=T.url;var j3=T.detailUrl;var j1=T.poiType||BMAP_POI_TYPE_NORMAL;e=e||{};if(!j4){return null}var jZ=j4;if(j1==BMAP_POI_TYPE_BUSSTOP){jZ=jZ+"-公交车站"}else{if(j1==BMAP_POI_TYPE_SUBSTOP){jZ=jZ+"-地铁站"}}var jY=13;if(j3){jY=10}if(jZ.replace(/[\\u0100-\\uffff]/g,"##").length>jY*2+1){jZ=jZ.substring(0,jY)+"&#8230"}var jW=\'<p style="margin-left:5px;display:inline;height:30px;line-height:30px;width:210px;font:bold 14px/16px \'+B.fontFamily+\';white-space:nowrap;overflow:hidden" title="\'+j4+\'">\'+jZ;if(j3){jW+=\'<a target="_blank" href="\'+j3+\'" style="margin-left:5px;font-size:12px;color:#3d6dcc;font-weight:normal;text-decoration:none;">详情»</a>\'}jW+="</p>";var j6=[];j6.push(\'<div style="font: 12px \'+B.fontFamily+\'; margin: 5px">\');if(j2){var j5="地址：";if(j1==BMAP_POI_TYPE_BUSSTOP||j1==BMAP_POI_TYPE_SUBSTOP){j5="车次："}j6.push(\'<table cellspacing="0" style="overflow: hidden; table-layout: fixed; width: 100 %; font: 12px \'+B.fontFamily+\'" >\');j6.push(\'<tr><td style="vertical-align: top; width: 38px; white-space: nowrap; word-break: keep-all">\'+j5+"&nbsp;</td><td>");j6.push(j2+"&nbsp;</td></tr>");if(jX){j6.push(\'<tr><td style="vertical-align: top; ">电话：</td><td>\'+jX+"</td></tr>")}j6.push("</table>")}else{if(jX){j6.push(\'<table cellspacing="0" style="table-layout: fixed; width: 100 %; font: 12px \'+B.fontFamily+\'">\');j6.push(\'<tr><td style="vertical-align: top; width: 36px; white-space: nowrap; word-break: keep-all">电话：</td><td>\'+jX+"</td></tr></table>")}}j6.push("</div>");var jV=new dV(j6.join(""),{title:jW,height:0,width:250,margin:[10,10,20,10]});return jV};fv.addDestPoi=function(jY,e,jZ,T){var jV=B.staticHost+"/wolfman/static/common/images/";jV+="markers_new2x_2960fb4.png";var jX=a7(e);if(!jX){return}var jW=new jd(jV,dc,{imageSize:iE,anchor:cP,imageOffset:new iL(200+T*25,139),infoWindowOffset:dR});var i=new s(jX,{icon:jW,baseZIndex:3500000,draggingCursor:"pointer"});jY.addOverlay(i);if(jZ){i.setTitle(jZ)}return i};fv.addLine=function(i,e){return fv.addRoute(i,e,hr)};fv.ROUTE_TRAFFIC_STYLE_CONFIG=[{stroke:6,color:"#0030ff",opacity:0.45,style:"solid"},{stroke:5,color:"#00bd00",opacity:0.95,style:"solid"},{stroke:5,color:"#ffac00",opacity:0.95,style:"solid"},{stroke:5,color:"#f41c0d",opacity:0.95,style:"solid"}];fv.ROUTE_STYLE_CONFIG=[{stroke:6,color:"#5298fe",opacity:1,style:"solid"},{stroke:6,color:"#5298fe",opacity:1,style:"solid"},{stroke:6,color:"#4ddc26",opacity:1,style:"solid"},{stroke:6,color:"#00bd01",opacity:1,style:"solid"},{stroke:6,color:"#ff0103",opacity:0.65,style:"dashed"},{stroke:6,color:"#ff0103",opacity:0.65,style:"solid"},{stroke:6,color:"#5298ff",opacity:1,style:"solid"},{stroke:6,color:"#5298ff",opacity:1,style:"solid"},{stroke:6,color:"#ff0103",opacity:0.65,style:"dashed"}];fv.addRouteWithTraffic=function(jX,jV,jY){var T=fv.ROUTE_TRAFFIC_STYLE_CONFIG;if(typeof jY=="undefined"){jY=0}if(!T[jY]){return}var e=jV;var i=T[jY];var jW=new bk(e,{strokeWeight:i.stroke,strokeColor:i.color,strokeOpacity:i.opacity,strokeStyle:i.style,clickable:false});jX.addOverlay(jW);jW._trafficStatus=jY;return jW};fv.addRoute=function(jZ,jW,jV){var T=fv.ROUTE_STYLE_CONFIG;if(typeof jV=="undefined"){jV=0}if(!T[jV]){return}var e=jW;var i=T[jV];var jY=new bk(e,{strokeWeight:i.stroke,strokeColor:i.color,strokeOpacity:i.opacity,strokeStyle:i.style,clickable:false});jZ.addOverlay(jY);jY._routeType=jV;if(jV==hr){var jX=new bk(e,{strokeWeight:i.stroke-2,strokeColor:"#fff",strokeOpacity:0.3,clickable:false});jY._p=jX;jZ.addOverlay(jX)}return jY};fv.createTransInfoWnd=function(i){var jX=i.content;var e=i.curIndex;var jY=i.total;var jV=i.nextTransCbk;var jW=i.obj;var jZ=i.hideStep;var j0=[\'<div style="font: 12px \'+B.fontFamily+\'">\'];if(jX){j0.push(\'<div style="margin: 10px 1em 24px 0">\'+jX+"</div>")}if(!jZ){j0.push(fv.genStepNavHtml(jY,e))}j0.push("</div>");var T=new dV(j0.join(""),{title:"",height:0,width:220,margin:[10,10,20,10]});if(jZ){return T}T.addEventListener("open",function(){var j1=bU()?"touchend":"click";if(eP.G("trans_prev")){eP.on(eP.G("trans_prev"),j1,function(){if(jV&&typeof jV=="function"){jV(e-1,jW)}})}if(eP.G("trans_next")){eP.on(eP.G("trans_next"),j1,function(){if(jV&&typeof jV=="function"){jV(e+1,jW)}})}});return T};fv.genStepNavHtml=function(T,e){var i=[];i.push(\'<table id="trans_nav" width="99% " cols="2" style="background: #eaf2ff; font: 12px \'+B.fontFamily+\'"><tbody><tr>\');i.push(\'<td nowrap="nowrap" width="50% " align="left">\');if(e==0){i.push(\'<span unselectable="on" style="color: #9c9d99; -moz-user-select: none: >上一步</span>\')}else{i.push(\'<a id="trans_prev" style="color: #7777cc; -moz-user-select: none" href="javascript: void (0)">上一步</a>\')}i.push("</td>");i.push(\'<td nowrap="nowrap" width="50% " align="right">\');if(e==T+1){i.push(\'<span unselectable="on" style="color: #9c9d99; -moz-user-select: none" >下一步</span>\')}else{i.push(\'<a style="color: #7777cc" id="trans_next" href="javascript: void (0)">下一步</a>\')}i.push("</td></tr></tbody></table>");return i.join("")};fv.addTransPoi=function(i,jZ,jX,jY){var j0=a7(jZ);if(!j0){return}jX=jX||BMAP_LINE_TYPE_BUS;var e=B.staticHost+"/wolfman/static/common/images/new/";e+="transit-exchange-2x_46d5be3.png";var T=54;switch(jX){case BMAP_LINE_TYPE_SUBWAY:T=75;break;case BMAP_LINE_TYPE_TRAIN:T=117;break;case BMAP_LINE_TYPE_AIRPLANE:T=138;break;case BMAP_LINE_TYPE_COACH:case BMAP_LINE_TYPE_BUS:default:T=54;break}var jW=new jd(e,new iL(22,22),{imageSize:new iL(22,181),infoWindowAnchor:new iL(10,0),imageOffset:new iL(0,T)});var jV=new s(j0,{icon:jW});i.addOverlay(jV);if(jY){jV.setTitle(jY)}return jV};fv.getInfoWindowDom=function(e){if(e&&e.infoWindowDoms&&e.infoWindowDoms.contentDiv){return e.infoWindowDoms.contentDiv.childNodes[0]}return null};fv.addStationPoi=function(T,e,jV){var i=new s(e,{icon:new jd(eq._stopUrl,new iL(11,11))});if(jV){i.setTitle(jV)}T.addOverlay(i);return i};fv.createTipLbl=function(i){var e=new bc(i,{offset:new iL(30,-10)});e.setStyle({border:"solid 1px gray",padding:"2px",whiteSpace:"nowrap",background:"#fff"});return e};fv.getDistanceByPixel=function(i,e){if(!i||!e){return}return Math.round(Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)))};fv.addSearchPoi_R=function(j1,jZ,j2,e,i){var j4=a7(j1),e=e||{};e.type=e.type||"normal";if(!j4||typeof(jZ)=="undefined"||jZ<0||(jZ>9&&e.type!=="child")||(jZ>39&&e.type==="child")){return}var j3;var j0=B.staticHost+"/wolfman/static/common/images/";j0+="markers_new2x_2960fb4.png";var jV=0;if(e.type=="RouteAddrMarker"){jV=273}var T=new iL(18*jZ,jV);var jY=new jd(j0,new iL(18,27),{offset:new iL(9,27),imageOffset:T,infoWindowOffset:dR,imageSize:iE,});j3=jZ+1;var jW=100;var jX=new s(j4,{icon:jY,zIndexFixed:true,baseZIndex:2500000-jW*jZ});jX.customProperty={type:e.type};i.addOverlay(jX);jX._stCode=j3;if(j2){jX.setTitle(j2)}return jX};aG.CBK_SEARCH_COMPLETE=1;aG.CBK_MARKERS_SET=2;aG.CBK_INFO_HTML_SET=3;aG.CBK_POLYLINES_SET=4;aG.CBK_RESULTS_HTML_SET=5;aG.CBK_BUSLIST_COMPLETE=6;aG.CBK_BUSLINE_COMPLETE=7;aG.CBK_BUSLISTHTML_SET=8;aG.CBK_BUSLINEHTML_SET=9;aG._getPoiUrl=function(e,i){if(e){return B.mapHost+"?s="+encodeURIComponent("inf&uid="+e+"&c="+i)+"&i=0&sr=1"}return""};aG._getLocType=function(e){if(!e){return ga}if(typeof e=="string"){return iR}if(e instanceof cu||e instanceof co){return bv}if(e instanceof hx){return a8}if(typeof e=="number"){return dF}return ga};eP.extend(aG.prototype,{_getIdByLoc:function(jW,e){var i=aG._getLocType(jW.src);if(i==ga){return}var T=this;if(i==dF){e&&e(jW.src);return}if(i==iR){if(jW.curLocType==i&&jW.curSrc==jW.src&&jW.curId){e&&e(jW.curId);return}jW.curLocType=i;jW.curSrc=jW.src;jE.request(function(jY){if(jY&&jY.result&&jY.result["type"]==fg){T._loc.curId=jY.content["code"];e&&e(T._loc.curId)}},{qt:c8,wd:jW.src})}else{var jV;var jX=18;if(i==a8){if(jW.src.isLoaded()){jV=jW.src.getCenter();jX=jW.src.getZoom()}else{jW.src.addEventListener("load",function(){T._getIdByLoc(jW,e)})}}else{jV=jW.src}if(i==jW.curLocType&&jW.curSrc.equals(jV)&&jW.curId){e&&e(jW.curId);return}if(i==a8){jV=iU.convertLL2MC(jV)}if(i==bv){jV=iU.convertLL2MC(jV)}jW.curLocType=i;jW.curSrc=new cu(jV.lng,jV.lat);jE.request(function(jY){if(jY&&jY.result&&jY.result["type"]==bd){T._loc.curId=jY.content?jY.content["uid"]:1;e&&e(T._loc.curId)}},{qt:Y,b:jV.lng+","+jV.lat+";"+jV.lng+","+jV.lat,l:jX})}},_setStatus:function(e){if(typeof e=="number"){this._status=e}else{delete this._status}},_triggerCbk:function(i,e,jV){var T;if(typeof e==="undefined"){T=4}else{if(e._plans&&e._plans.length){T=1}else{if(Object.prototype.toString.call(e._start)==="[object Object]"&&Object.prototype.toString.call(e._end)==="[object Object]"){T=3}else{T=2}}}var jW;switch(i){case aG.CBK_SEARCH_COMPLETE:jW=this._opts.onSearchComplete;jW&&jW(e,T);break;case aG.CBK_MARKERS_SET:jW=this._opts.onMarkersSet;jW&&jW(e,jV);break;case aG.CBK_POLYLINES_SET:jW=this._opts.onPolylinesSet;jW&&jW(e,jV);break;case aG.CBK_INFO_HTML_SET:jW=this._opts.onInfoHtmlSet;jW&&jW(e,jV);break;case aG.CBK_RESULTS_HTML_SET:jW=this._opts.onResultsHtmlSet;jW&&jW(e,jV);break;case aG.CBK_BUSLIST_COMPLETE:jW=this._opts.onGetBusListComplete;jW&&jW(e,jV);break;case aG.CBK_BUSLINE_COMPLETE:jW=this._opts.onGetBusLineComplete;jW&&jW(e,jV);break;case aG.CBK_BUSLISTHTML_SET:jW=this._opts.onBusListHtmlSet;jW&&jW(e,jV);break;case aG.CBK_BUSLINEHTML_SET:jW=this._opts.onBusLineHtmlSet;jW&&jW(e,jV);break;default:break}}});var dx=0;var c7=1;var S=2;bF.unique=function(T){var jX=false;var jW=[];var jY={};for(var jV=0,e=T.length;jV<e;jV++){if(!jY[T[jV]]){jY[T[jV]]=true;jW.push(T[jV])}}return jW};bF.getBestLevel=function(T,i){if(i){var e=Math.min(i.width/1100,i.height/660);T=Math.round(T+(Math.log(e)/Math.log(2)))}if(T<1){T=1}if(T>21){T=21}return T};bF.parseGeo=function(jY,j1){if(typeof jY!="string"||!jY){return}var j3=jY.split("|");var e;var jW;var T;if(j3.length==1){e=bZ(jY)}else{e=bZ(j3[2]);jW=bZ(j3[0]);T=bZ(j3[1]);if(!j1){return e}}var jZ={type:e.geoType};if(j1){switch(jZ.type){case S:var j0=new cu(e.geo[0][0],e.geo[0][1]);var j2=iU.convertMC2LL(j0);jZ.point=j2;jZ.points=[j2];break;case c7:jZ.points=[];var j4=e.geo[0];for(var jX=0,jV=j4.length-1;jX<jV;jX+=2){var j5=new cu(j4[jX],j4[jX+1]);j5=iU.convertMC2LL(j5);jZ.points.push(j5)}jW=new cu(jW.geo[0][0],jW.geo[0][1]);T=new cu(T.geo[0][0],T.geo[0][1]);jW=iU.convertMC2LL(jW);T=iU.convertMC2LL(T);jZ.bounds=new hL(jW,T);break;default:break}}return jZ};bF.parseGeoExt=function(ke,j5){if(!j5){j5=0}else{if(j5<0.25){j5=0}else{if(j5>0.25&&j5<1){j5=1}else{if(j5>32){j5=32}}}}var j0=ke.split("|");if(j0.length==1){var jV=bZ(j0[0]);return{type:jV.type,bound:"",points:jV.geo.join(",")}}else{if(j0.length>1){var j6=ke.split(";.=");var j2=[];var jW=[];var j7=0;var kb=j6.length;for(var j8=0;j8<kb;j8++){var kd=j6[j8];if(kb>1){if(j8==0){kd=kd+";"}if(j8>0&&j8<kb-1){kd=".="+kd+";"}if(j8==kb-1){kd=".="+kd}}var jX=kd.split("|");var ka=bZ(jX[0]);var j9=bZ(jX[1]);j2.push(ka.geo.join(","));j2.push(j9.geo.join(","));var jV=bZ(jX[2]);j7=jV.type;var kc=jV.geo.join(",");kc=bF.parseGeoExtReg1(kc);if(j5>0){kc=bF.parseGeoExtReg2(kc,j5)}jW.push(kc)}if(kb<=1){jW=jW.join(";")}if(kb==2){var T=jW[0]+";"+jW[1];var jY=T.split(";");var e=[];for(var j8=0;j8<jY.length;j8++){var j1=jY[j8].split(",")[0];var jZ=jY[j8].split(",")[1];var j3=new cu(j1,jZ);var j4=iU.convertMC2LL(j3);e.push(j4)}jW=e}return{type:j7,bound:j2.join(";"),points:jW}}}};bF.getPoiPoint=function(e){var T=[];var i=null;if(e.toString()=="Point"){i=e}else{if(typeof e=="string"){T=eP.trim(e).split(",");if(T.length<2){return}T[0]=parseFloat(eP.trim(T[0]));T[1]=parseFloat(eP.trim(T[1]))}else{T=e.slice(0);if(T.length<2){return}}i=new BMap.Point(T[0],T[1])}return i};bF.parseGeoStr=function(T){var i=T.split(",");var e=new cu(i[0],i[1]);return iU.convertMC2LL(e)};bF.level={country:4,province:11,city:12,area:13};var gZ=["=",".","-","*"];var c3=1<<23;function bZ(j1){var j0=hH(j1.charAt(0));var T=j1.substr(1);var j3=0;var e=T.length;var j4=[];var jY=[];var jZ=[];while(j3<e){if(T.charAt(j3)==gZ[0]){if((e-j3)<13){return 0}jZ=d2(T.substr(j3,13),j4);if(jZ<0){return 0}j3+=13}else{if(T.charAt(j3)==";"){jY.push(j4.slice(0));j4.length=0;++j3}else{if((e-j3)<8){return 0}jZ=cb(T.substr(j3,8),j4);if(jZ<0){return 0}j3+=8}}}for(var jX=0,jV=jY.length;jX<jV;jX++){for(var jW=0,j2=jY[jX].length;jW<j2;jW++){jY[jX][jW]/=100}}return{geoType:j0,geo:jY}}function hH(i){var e=-1;if(i==gZ[1]){e=S}else{if(i==gZ[2]){e=c7}else{if(i==gZ[3]){e=dx}}}return e}function d2(jW,T){var e=0;var jY=0;var jX=0;for(var jV=0;jV<6;jV++){jX=dp(jW.substr(1+jV,1));if(jX<0){return -1-jV}e+=jX<<(6*jV);jX=dp(jW.substr(7+jV,1));if(jX<0){return -7-jV}jY+=jX<<(6*jV)}T.push(e);T.push(jY);return 0}function cb(jX,jV){var T=jV.length;if(T<2){return -1}var e=0;var jZ=0;var jY=0;for(var jW=0;jW<4;jW++){jY=dp(jX.substr(jW,1));if(jY<0){return -1-jW}e+=jY<<(6*jW);jY=dp(jX.substr(4+jW,1));if(jY<0){return -5-jW}jZ+=jY<<(6*jW)}if(e>c3){e=c3-e}if(jZ>c3){jZ=c3-jZ}jV.push(jV[T-2]+e);jV.push(jV[T-1]+jZ);return 0}function dp(i){var e=i.charCodeAt(0);if(i>="A"&&i<="Z"){return e-"A".charCodeAt(0)}else{if(i>="a"&&i<="z"){return(26+e-"a".charCodeAt(0))}else{if(i>="0"&&i<="9"){return(52+e-"0".charCodeAt(0))}else{if(i=="+"){return 62}else{if(i=="/"){return 63}}}}}return -1}bF.pathToPoints=function(jX){var jV=[];if(typeof jX!=="string"){return jV}else{var jW=jX.split(";");for(var T=0;T<jW.length;T++){var e=jW[T].split(",");jV.push(new cu(e[0],e[1]))}}return jV};');