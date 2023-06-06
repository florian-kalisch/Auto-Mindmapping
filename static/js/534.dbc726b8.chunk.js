"use strict";(self.webpackChunkauto_mindmapping=self.webpackChunkauto_mindmapping||[]).push([[534],{4534:function(e,t,a){a.r(t),a.d(t,{diagram:function(){return L}});var o=a(9472),r=a(8978),n=a(8433),s=a(8735),i=a(2954),c=a(3154),d=a(4299),l=a(5178),p=(a(8703),a(7892),a(8584),a(7351),a(504),"rect"),g="rectWithTitle",h="statediagram",u="".concat(h,"-").concat("state"),b="transition",y="".concat(b," ").concat("note-edge"),v="".concat(h,"-").concat("note"),f="".concat(h,"-").concat("cluster"),m="".concat(h,"-").concat("cluster-alt"),w="parent",x="note",T="----",S="".concat(T).concat(x),k="".concat(T).concat(w),D="fill:none",A="fill: #333",B="text",E="normal",C={},R=0;function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:T,r=null!==a&&a.length>0?"".concat(o).concat(a):"";return"".concat("state","-").concat(e).concat(r,"-").concat(t)}var N=function(e,t,a,o,n,s){var c,d=a.id,l=void 0===(c=o[d])||null===c?"":c.classes?c.classes.join(" "):"";if("root"!==d){var h=p;!0===a.start&&(h="start"),!1===a.start&&(h="end"),a.type!==r.a&&(h=a.type),C[d]||(C[d]={id:d,shape:h,description:i.d.sanitizeText(d,(0,i.g)()),classes:"".concat(l," ").concat(u)});var b=C[d];a.description&&(Array.isArray(b.description)?(b.shape=g,b.description.push(a.description)):b.description.length>0?(b.shape=g,b.description===d?b.description=[a.description]:b.description=[b.description,a.description]):(b.shape=p,b.description=a.description),b.description=i.d.sanitizeTextOrArray(b.description,(0,i.g)())),1===b.description.length&&b.shape===g&&(b.shape=p),!b.type&&a.doc&&(i.l.info("Setting cluster for ",d,z(a)),b.type="group",b.dir=z(a),b.shape=a.type===r.b?"divider":"roundedWithTitle",b.classes=b.classes+" "+f+" "+(s?m:""));var T={labelStyle:"",shape:b.shape,labelText:b.description,classes:b.classes,style:"",id:d,dir:b.dir,domId:V(d,R),type:b.type,padding:15};if(a.note){var N={labelStyle:"",shape:"note",labelText:a.note.text,classes:v,style:"",id:d+S+"-"+R,domId:V(d,R,x),type:b.type,padding:15},I={labelStyle:"",shape:"noteGroup",labelText:a.note.text,classes:b.classes,style:"",id:d+k,domId:V(d,R,w),type:"group",padding:0};R++;var L=d+k;e.setNode(L,I),e.setNode(N.id,N),e.setNode(d,T),e.setParent(d,L),e.setParent(N.id,L);var P=d,W=N.id;"left of"===a.note.position&&(P=N.id,W=d),e.setEdge(P,W,{arrowhead:"none",arrowType:"",style:D,labelStyle:"",classes:y,arrowheadStyle:A,labelpos:"c",labelType:B,thickness:E})}else e.setNode(d,T)}t&&"root"!==t.id&&(i.l.trace("Setting node ",d," to be child of its parent ",t.id),e.setParent(d,t.id)),a.doc&&(i.l.trace("Adding nodes children "),M(e,a,a.doc,o,n,!s))},M=function(e,t,a,o,n,s){i.l.trace("items",a),a.forEach((function(a){switch(a.stmt){case r.c:case r.a:N(e,t,a,o,n,s);break;case r.S:N(e,t,a.state1,o,n,s),N(e,t,a.state2,o,n,s);var c={id:"edge"+R,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:D,labelStyle:"",label:i.d.sanitizeText(a.description,(0,i.g)()),arrowheadStyle:A,labelpos:"c",labelType:B,thickness:E,classes:b};e.setEdge(a.state1.id,a.state2.id,c,R),R++}}))},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.e;if(e.doc)for(var a=0;a<e.doc.length;a++){var o=e.doc[a];"dir"===o.stmt&&(t=o.value)}return t},I={setConf:function(e){for(var t=0,a=Object.keys(e);t<a.length;t++){e[a[t]]}},getClasses:function(e,t){i.l.trace("Extracting classes"),t.db.clear();try{return t.parser.parse(e),t.db.extract(t.db.getRootDocV2()),t.db.getClasses()}catch(a){return a}},draw:function(e,t,a,g){i.l.info("Drawing state diagram (v2)",t),C={};var u=g.db.getDirection();void 0===u&&(u=r.D);var b=(0,i.g)(),y=b.securityLevel,v=b.state,f=v.nodeSpacing||50,m=v.rankSpacing||50;i.l.info(g.db.getRootDocV2()),g.db.extract(g.db.getRootDocV2()),i.l.info(g.db.getRootDocV2());var w,x=g.db.getStates(),T=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:z(g.db.getRootDocV2()),nodesep:f,ranksep:m,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));N(T,void 0,g.db.getRootDocV2(),x,g.db,!0),"sandbox"===y&&(w=(0,s.Ys)("#i"+t));var S="sandbox"===y?(0,s.Ys)(w.nodes()[0].contentDocument.body):(0,s.Ys)("body"),k=S.select('[id="'.concat(t,'"]')),D=S.select("#"+t+" g");(0,c.r)(D,T,["barb"],h,t);l.u.insertTitle(k,"statediagramTitleText",v.titleTopMargin,g.db.getDiagramTitle());var A=k.node().getBBox(),B=A.width+16,E=A.height+16;k.attr("class",h);var R=k.node().getBBox();(0,d.c)(k,E,B,v.useMaxWidth);var V="".concat(R.x-8," ").concat(R.y-8," ").concat(B," ").concat(E);i.l.debug("viewBox ".concat(V)),k.attr("viewBox",V);var M,I=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label'),L=(0,o.Z)(I);try{for(L.s();!(M=L.n()).done;){var P=M.value,W=P.getBBox(),Y=document.createElementNS("http://www.w3.org/2000/svg",p);Y.setAttribute("rx",0),Y.setAttribute("ry",0),Y.setAttribute("width",W.width),Y.setAttribute("height",W.height),P.insertBefore(Y,P.firstChild)}}catch(_){L.e(_)}finally{L.f()}}},L={parser:r.p,db:r.d,renderer:I,styles:r.s,init:function(e){e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,r.d.clear()}}}}]);
//# sourceMappingURL=534.dbc726b8.chunk.js.map