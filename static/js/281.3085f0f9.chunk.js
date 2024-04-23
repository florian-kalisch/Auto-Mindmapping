"use strict";(self.webpackChunkauto_mindmapping=self.webpackChunkauto_mindmapping||[]).push([[281],{4281:function(t,r,a){a.d(r,{a:function(){return c},b:function(){return B},c:function(){return h},d:function(){return N},e:function(){return M},f:function(){return P},g:function(){return I},h:function(){return R},i:function(){return b},p:function(){return E},s:function(){return T},u:function(){return g}});var e=a(9472),i=a(2954),n=a(8735),s=a(6009),d=a(2997),l=a(5178),o={extension:function(t,r,a){i.l.trace("Making markers for ",a),t.append("defs").append("marker").attr("id",r+"-extensionStart").attr("class","marker extension "+r).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",r+"-extensionEnd").attr("class","marker extension "+r).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:function(t,r){t.append("defs").append("marker").attr("id",r+"-compositionStart").attr("class","marker composition "+r).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"-compositionEnd").attr("class","marker composition "+r).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:function(t,r){t.append("defs").append("marker").attr("id",r+"-aggregationStart").attr("class","marker aggregation "+r).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"-aggregationEnd").attr("class","marker aggregation "+r).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:function(t,r){t.append("defs").append("marker").attr("id",r+"-dependencyStart").attr("class","marker dependency "+r).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"-dependencyEnd").attr("class","marker dependency "+r).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:function(t,r){t.append("defs").append("marker").attr("id",r+"-lollipopStart").attr("class","marker lollipop "+r).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","white").attr("cx",6).attr("cy",7).attr("r",6)},point:function(t,r){t.append("marker").attr("id",r+"-pointEnd").attr("class","marker "+r).attr("viewBox","0 0 12 20").attr("refX",10).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"-pointStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",0).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:function(t,r){t.append("marker").attr("id",r+"-circleEnd").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"-circleStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:function(t,r){t.append("marker").attr("id",r+"-crossEnd").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"-crossStart").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:function(t,r){t.append("defs").append("marker").attr("id",r+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},c=function(t,r,a,e){r.forEach((function(r){o[r](t,a,e)}))};var h=function(t,r,a,d){var l=t||"";if("object"===typeof l&&(l=l[0]),(0,i.j)((0,i.g)().flowchart.htmlLabels)){l=l.replace(/\\n|\n/g,"<br />"),i.l.info("vertexText"+l);var o=function(t){var r,a,e=(0,n.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),i=e.append("xhtml:div"),s=t.label,d=t.isNode?"nodeLabel":"edgeLabel";return i.html('<span class="'+d+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+s+"</span>"),r=i,(a=t.labelStyle)&&r.attr("style",a),i.style("display","inline-block"),i.style("white-space","nowrap"),i.attr("xmlns","http://www.w3.org/1999/xhtml"),e.node()}({isNode:d,label:(0,s.d)(l).replace(/fa[blrs]?:fa-[\w-]+/g,(function(t){return"<i class='".concat(t.replace(":"," "),"'></i>")})),labelStyle:r.replace("fill:","color:")});return o}var c=document.createElementNS("http://www.w3.org/2000/svg","text");c.setAttribute("style",r.replace("color:","fill:"));var h=[];h="string"===typeof l?l.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(l)?l:[];var p,g=(0,e.Z)(h);try{for(g.s();!(p=g.n()).done;){var u=p.value,f=document.createElementNS("http://www.w3.org/2000/svg","tspan");f.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),f.setAttribute("dy","1em"),f.setAttribute("x","0"),a?f.setAttribute("class","title-row"):f.setAttribute("class","row"),f.textContent=u.trim(),c.appendChild(f)}}catch(y){g.e(y)}finally{g.f()}return c},p=function(t,r,a,e){var d;d=a||"node default";var l,o=t.insert("g").attr("class",d).attr("id",r.domId||r.id),c=o.insert("g").attr("class","label").attr("style",r.labelStyle);l=void 0===r.labelText?"":"string"===typeof r.labelText?r.labelText:r.labelText[0];var p=c.node().appendChild(h((0,i.b)((0,s.d)(l),(0,i.g)()),r.labelStyle,!1,e)),g=p.getBBox();if((0,i.j)((0,i.g)().flowchart.htmlLabels)){var u=p.children[0],f=(0,n.Ys)(p);g=u.getBoundingClientRect(),f.attr("width",g.width),f.attr("height",g.height)}var y=r.padding/2;return c.attr("transform","translate("+-g.width/2+", "+-g.height/2+")"),{shapeSvg:o,bbox:g,halfPadding:y,label:c}},g=function(t,r){var a=r.node().getBBox();t.width=a.width,t.height=a.height};function u(t,r,a,e){return t.insert("polygon",":first-child").attr("points",e.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","label-container").attr("transform","translate("+-r/2+","+a/2+")")}function f(t,r,a,e){var i=t.x,n=t.y,s=i-e.x,d=n-e.y,l=Math.sqrt(r*r*d*d+a*a*s*s),o=Math.abs(r*a*s/l);e.x<i&&(o=-o);var c=Math.abs(r*a*d/l);return e.y<n&&(c=-c),{x:i+o,y:n+c}}function y(t,r,a,e){var i,n,s,d,l,o,c,h,p,g,u,f,y;if(i=r.y-t.y,s=t.x-r.x,l=r.x*t.y-t.x*r.y,p=i*a.x+s*a.y+l,g=i*e.x+s*e.y+l,(0===p||0===g||!x(p,g))&&(n=e.y-a.y,d=a.x-e.x,o=e.x*a.y-a.x*e.y,c=n*t.x+d*t.y+o,h=n*r.x+d*r.y+o,(0===c||0===h||!x(c,h))&&0!==(u=i*d-n*s)))return f=Math.abs(u/2),{x:(y=s*o-d*l)<0?(y-f)/u:(y+f)/u,y:(y=n*l-i*o)<0?(y-f)/u:(y+f)/u}}function x(t,r){return t*r>0}var b=function(t,r){var a,e,i=t.x,n=t.y,s=r.x-i,d=r.y-n,l=t.width/2,o=t.height/2;return Math.abs(d)*l>Math.abs(s)*o?(d<0&&(o=-o),a=0===d?0:o*s/d,e=o):(s<0&&(l=-l),a=l,e=0===s?0:l*d/s),{x:i+a,y:n+e}},w={node:function(t,r){return t.intersect(r)},circle:function(t,r,a){return f(t,r,r,a)},ellipse:f,polygon:function(t,r,a){var e=t.x,i=t.y,n=[],s=Number.POSITIVE_INFINITY,d=Number.POSITIVE_INFINITY;"function"===typeof r.forEach?r.forEach((function(t){s=Math.min(s,t.x),d=Math.min(d,t.y)})):(s=Math.min(s,r.x),d=Math.min(d,r.y));for(var l=e-t.width/2-s,o=i-t.height/2-d,c=0;c<r.length;c++){var h=r[c],p=r[c<r.length-1?c+1:0],g=y(t,a,{x:l+h.x,y:o+h.y},{x:l+p.x,y:o+p.y});g&&n.push(g)}return n.length?(n.length>1&&n.sort((function(t,r){var e=t.x-a.x,i=t.y-a.y,n=Math.sqrt(e*e+i*i),s=r.x-a.x,d=r.y-a.y,l=Math.sqrt(s*s+d*d);return n<l?-1:n===l?0:1})),n[0]):t},rect:b},v=function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,n=a.bbox,s=n.width+r.padding+(n.height+r.padding),d=[{x:s/2,y:0},{x:s,y:-s/2},{x:s/2,y:-s},{x:0,y:-s/2}];i.l.info("Question main (Circle)");var l=u(e,s,s,d);return l.attr("style",r.style),g(r,l),r.intersect=function(t){return i.l.warn("Intersect called"),w.polygon(r,d,t)},e};function m(t,r,a,e){var n=[],s=function(t){n.push(t,0)},d=function(t){n.push(0,t)};r.includes("t")?(i.l.debug("add top border"),s(a)):d(a),r.includes("r")?(i.l.debug("add right border"),s(e)):d(e),r.includes("b")?(i.l.debug("add bottom border"),s(a)):d(a),r.includes("l")?(i.l.debug("add left border"),s(e)):d(e),t.attr("stroke-dasharray",n.join(" "))}var k=function(t,r,a){var e=t.insert("g").attr("class","node default").attr("id",r.domId||r.id),i=70,n=10;"LR"===a&&(i=10,n=70);var s=e.append("rect").attr("x",-1*i/2).attr("y",-1*n/2).attr("width",i).attr("height",n).attr("class","fork-join");return g(r,s),r.height=r.height+r.padding/2,r.width=r.width+r.padding/2,r.intersect=function(t){return w.rect(r,t)},e},S={rhombus:v,question:v,rect:function(t,r){var a=p(t,r,"node "+r.classes,!0),e=a.shapeSvg,n=a.bbox,s=a.halfPadding;i.l.trace("Classes = ",r.classes);var d=e.insert("rect",":first-child"),l=n.width+r.padding,o=n.height+r.padding;if(d.attr("class","basic label-container").attr("style",r.style).attr("rx",r.rx).attr("ry",r.ry).attr("x",-n.width/2-s).attr("y",-n.height/2-s).attr("width",l).attr("height",o),r.props){var c=new Set(Object.keys(r.props));r.props.borders&&(m(d,r.props.borders,l,o),c.delete("borders")),c.forEach((function(t){i.l.warn("Unknown node property ".concat(t))}))}return g(r,d),r.intersect=function(t){return w.rect(r,t)},e},labelRect:function(t,r){var a=p(t,r,"label",!0).shapeSvg;i.l.trace("Classes = ",r.classes);var e=a.insert("rect",":first-child");if(e.attr("width",0).attr("height",0),a.attr("class","label edgeLabel"),r.props){var n=new Set(Object.keys(r.props));r.props.borders&&(m(e,r.props.borders,0,0),n.delete("borders")),n.forEach((function(t){i.l.warn("Unknown node property ".concat(t))}))}return g(r,e),r.intersect=function(t){return w.rect(r,t)},a},rectWithTitle:function(t,r){var a;a=r.classes?"node "+r.classes:"node default";var e=t.insert("g").attr("class",a).attr("id",r.domId||r.id),s=e.insert("rect",":first-child"),d=e.insert("line"),l=e.insert("g").attr("class","label"),o=r.labelText.flat?r.labelText.flat():r.labelText,c="";c="object"===typeof o?o[0]:o,i.l.info("Label text abc79",c,o,"object"===typeof o);var p=l.node().appendChild(h(c,r.labelStyle,!0,!0)),u={width:0,height:0};if((0,i.j)((0,i.g)().flowchart.htmlLabels)){var f=p.children[0],y=(0,n.Ys)(p);u=f.getBoundingClientRect(),y.attr("width",u.width),y.attr("height",u.height)}i.l.info("Text 2",o);var x=o.slice(1,o.length),b=p.getBBox(),v=l.node().appendChild(h(x.join?x.join("<br/>"):x,r.labelStyle,!0,!0));if((0,i.j)((0,i.g)().flowchart.htmlLabels)){var m=v.children[0],k=(0,n.Ys)(v);u=m.getBoundingClientRect(),k.attr("width",u.width),k.attr("height",u.height)}var S=r.padding/2;return(0,n.Ys)(v).attr("transform","translate( "+(u.width>b.width?0:(b.width-u.width)/2)+", "+(b.height+S+5)+")"),(0,n.Ys)(p).attr("transform","translate( "+(u.width<b.width?0:-(b.width-u.width)/2)+", 0)"),u=l.node().getBBox(),l.attr("transform","translate("+-u.width/2+", "+(-u.height/2-S+3)+")"),s.attr("class","outer title-state").attr("x",-u.width/2-S).attr("y",-u.height/2-S).attr("width",u.width+r.padding).attr("height",u.height+r.padding),d.attr("class","divider").attr("x1",-u.width/2-S).attr("x2",u.width/2+S).attr("y1",-u.height/2-S+b.height+S).attr("y2",-u.height/2-S+b.height+S),g(r,s),r.intersect=function(t){return w.rect(r,t)},e},choice:function(t,r){var a=t.insert("g").attr("class","node default").attr("id",r.domId||r.id),e=[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}];return a.insert("polygon",":first-child").attr("points",e.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),r.width=28,r.height=28,r.intersect=function(t){return w.circle(r,14,t)},a},circle:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,n=a.bbox,s=a.halfPadding,d=e.insert("circle",":first-child");return d.attr("style",r.style).attr("rx",r.rx).attr("ry",r.ry).attr("r",n.width/2+s).attr("width",n.width+r.padding).attr("height",n.height+r.padding),i.l.info("Circle main"),g(r,d),r.intersect=function(t){return i.l.info("Circle intersect",r,n.width/2+s,t),w.circle(r,n.width/2+s,t)},e},doublecircle:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,n=a.bbox,s=a.halfPadding,d=e.insert("g",":first-child"),l=d.insert("circle"),o=d.insert("circle");return l.attr("style",r.style).attr("rx",r.rx).attr("ry",r.ry).attr("r",n.width/2+s+5).attr("width",n.width+r.padding+10).attr("height",n.height+r.padding+10),o.attr("style",r.style).attr("rx",r.rx).attr("ry",r.ry).attr("r",n.width/2+s).attr("width",n.width+r.padding).attr("height",n.height+r.padding),i.l.info("DoubleCircle main"),g(r,l),r.intersect=function(t){return i.l.info("DoubleCircle intersect",r,n.width/2+s+5,t),w.circle(r,n.width/2+s+5,t)},e},stadium:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,i=a.bbox,n=i.height+r.padding,s=i.width+n/4+r.padding,d=e.insert("rect",":first-child").attr("style",r.style).attr("rx",n/2).attr("ry",n/2).attr("x",-s/2).attr("y",-n/2).attr("width",s).attr("height",n);return g(r,d),r.intersect=function(t){return w.rect(r,t)},e},hexagon:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,i=a.bbox,n=i.height+r.padding,s=n/4,d=i.width+2*s+r.padding,l=[{x:s,y:0},{x:d-s,y:0},{x:d,y:-n/2},{x:d-s,y:-n},{x:s,y:-n},{x:0,y:-n/2}],o=u(e,d,n,l);return o.attr("style",r.style),g(r,o),r.intersect=function(t){return w.polygon(r,l,t)},e},rect_left_inv_arrow:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,i=a.bbox,n=i.width+r.padding,s=i.height+r.padding,d=[{x:-s/2,y:0},{x:n,y:0},{x:n,y:-s},{x:-s/2,y:-s},{x:0,y:-s/2}];return u(e,n,s,d).attr("style",r.style),r.width=n+s,r.height=s,r.intersect=function(t){return w.polygon(r,d,t)},e},lean_right:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,i=a.bbox,n=i.width+r.padding,s=i.height+r.padding,d=[{x:-2*s/6,y:0},{x:n-s/6,y:0},{x:n+2*s/6,y:-s},{x:s/6,y:-s}],l=u(e,n,s,d);return l.attr("style",r.style),g(r,l),r.intersect=function(t){return w.polygon(r,d,t)},e},lean_left:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,i=a.bbox,n=i.width+r.padding,s=i.height+r.padding,d=[{x:2*s/6,y:0},{x:n+s/6,y:0},{x:n-2*s/6,y:-s},{x:-s/6,y:-s}],l=u(e,n,s,d);return l.attr("style",r.style),g(r,l),r.intersect=function(t){return w.polygon(r,d,t)},e},trapezoid:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,i=a.bbox,n=i.width+r.padding,s=i.height+r.padding,d=[{x:-2*s/6,y:0},{x:n+2*s/6,y:0},{x:n-s/6,y:-s},{x:s/6,y:-s}],l=u(e,n,s,d);return l.attr("style",r.style),g(r,l),r.intersect=function(t){return w.polygon(r,d,t)},e},inv_trapezoid:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,i=a.bbox,n=i.width+r.padding,s=i.height+r.padding,d=[{x:s/6,y:0},{x:n-s/6,y:0},{x:n+2*s/6,y:-s},{x:-2*s/6,y:-s}],l=u(e,n,s,d);return l.attr("style",r.style),g(r,l),r.intersect=function(t){return w.polygon(r,d,t)},e},rect_right_inv_arrow:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,i=a.bbox,n=i.width+r.padding,s=i.height+r.padding,d=[{x:0,y:0},{x:n+s/2,y:0},{x:n,y:-s/2},{x:n+s/2,y:-s},{x:0,y:-s}],l=u(e,n,s,d);return l.attr("style",r.style),g(r,l),r.intersect=function(t){return w.polygon(r,d,t)},e},cylinder:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,i=a.bbox,n=i.width+r.padding,s=n/2,d=s/(2.5+n/50),l=i.height+d+r.padding,o="M 0,"+d+" a "+s+","+d+" 0,0,0 "+n+" 0 a "+s+","+d+" 0,0,0 "+-n+" 0 l 0,"+l+" a "+s+","+d+" 0,0,0 "+n+" 0 l 0,"+-l,c=e.attr("label-offset-y",d).insert("path",":first-child").attr("style",r.style).attr("d",o).attr("transform","translate("+-n/2+","+-(l/2+d)+")");return g(r,c),r.intersect=function(t){var a=w.rect(r,t),e=a.x-r.x;if(0!=s&&(Math.abs(e)<r.width/2||Math.abs(e)==r.width/2&&Math.abs(a.y-r.y)>r.height/2-d)){var i=d*d*(1-e*e/(s*s));0!=i&&(i=Math.sqrt(i)),i=d-i,t.y-r.y>0&&(i=-i),a.y+=i}return a},e},start:function(t,r){var a=t.insert("g").attr("class","node default").attr("id",r.domId||r.id),e=a.insert("circle",":first-child");return e.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),g(r,e),r.intersect=function(t){return w.circle(r,7,t)},a},end:function(t,r){var a=t.insert("g").attr("class","node default").attr("id",r.domId||r.id),e=a.insert("circle",":first-child"),i=a.insert("circle",":first-child");return i.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),e.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),g(r,i),r.intersect=function(t){return w.circle(r,7,t)},a},note:function(t,r){var a=p(t,r,"node "+r.classes,!0),e=a.shapeSvg,n=a.bbox,s=a.halfPadding;i.l.info("Classes = ",r.classes);var d=e.insert("rect",":first-child");return d.attr("rx",r.rx).attr("ry",r.ry).attr("x",-n.width/2-s).attr("y",-n.height/2-s).attr("width",n.width+r.padding).attr("height",n.height+r.padding),g(r,d),r.intersect=function(t){return w.rect(r,t)},e},subroutine:function(t,r){var a=p(t,r,void 0,!0),e=a.shapeSvg,i=a.bbox,n=i.width+r.padding,s=i.height+r.padding,d=[{x:0,y:0},{x:n,y:0},{x:n,y:-s},{x:0,y:-s},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-s},{x:-8,y:-s},{x:-8,y:0}],l=u(e,n,s,d);return l.attr("style",r.style),g(r,l),r.intersect=function(t){return w.polygon(r,d,t)},e},fork:k,join:k,class_box:function(t,r){var a,e=r.padding/2;a=r.classes?"node "+r.classes:"node default";var s=t.insert("g").attr("class",a).attr("id",r.domId||r.id),l=s.insert("rect",":first-child"),o=s.insert("line"),c=s.insert("line"),p=0,u=4,f=s.insert("g").attr("class","label"),y=0,x=r.classData.annotations&&r.classData.annotations[0],b=r.classData.annotations[0]?"\xab"+r.classData.annotations[0]+"\xbb":"",v=f.node().appendChild(h(b,r.labelStyle,!0,!0)),m=v.getBBox();if((0,i.j)((0,i.g)().flowchart.htmlLabels)){var k=v.children[0],S=(0,n.Ys)(v);m=k.getBoundingClientRect(),S.attr("width",m.width),S.attr("height",m.height)}r.classData.annotations[0]&&(u+=m.height+4,p+=m.width);var L=r.classData.label;void 0!==r.classData.type&&""!==r.classData.type&&((0,i.g)().flowchart.htmlLabels?L+="&lt;"+r.classData.type+"&gt;":L+="<"+r.classData.type+">");var M=f.node().appendChild(h(L,r.labelStyle,!0,!0));(0,n.Ys)(M).attr("class","classTitle");var T=M.getBBox();if((0,i.j)((0,i.g)().flowchart.htmlLabels)){var B=M.children[0],E=(0,n.Ys)(M);T=B.getBoundingClientRect(),E.attr("width",T.width),E.attr("height",T.height)}u+=T.height+4,T.width>p&&(p=T.width);var C=[];r.classData.members.forEach((function(t){var a=(0,d.p)(t),e=a.displayText;(0,i.g)().flowchart.htmlLabels&&(e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"));var s=f.node().appendChild(h(e,a.cssStyle?a.cssStyle:r.labelStyle,!0,!0)),l=s.getBBox();if((0,i.j)((0,i.g)().flowchart.htmlLabels)){var o=s.children[0],c=(0,n.Ys)(s);l=o.getBoundingClientRect(),c.attr("width",l.width),c.attr("height",l.height)}l.width>p&&(p=l.width),u+=l.height+4,C.push(s)})),u+=8;var Y=[];if(r.classData.methods.forEach((function(t){var a=(0,d.p)(t),e=a.displayText;(0,i.g)().flowchart.htmlLabels&&(e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"));var s=f.node().appendChild(h(e,a.cssStyle?a.cssStyle:r.labelStyle,!0,!0)),l=s.getBBox();if((0,i.j)((0,i.g)().flowchart.htmlLabels)){var o=s.children[0],c=(0,n.Ys)(s);l=o.getBoundingClientRect(),c.attr("width",l.width),c.attr("height",l.height)}l.width>p&&(p=l.width),u+=l.height+4,Y.push(s)})),u+=8,x){var N=(p-m.width)/2;(0,n.Ys)(v).attr("transform","translate( "+(-1*p/2+N)+", "+-1*u/2+")"),y=m.height+4}var P=(p-T.width)/2;return(0,n.Ys)(M).attr("transform","translate( "+(-1*p/2+P)+", "+(-1*u/2+y)+")"),y+=T.height+4,o.attr("class","divider").attr("x1",-p/2-e).attr("x2",p/2+e).attr("y1",-u/2-e+8+y).attr("y2",-u/2-e+8+y),y+=8,C.forEach((function(t){(0,n.Ys)(t).attr("transform","translate( "+-p/2+", "+(-1*u/2+y+4)+")"),y+=T.height+4})),y+=8,c.attr("class","divider").attr("x1",-p/2-e).attr("x2",p/2+e).attr("y1",-u/2-e+8+y).attr("y2",-u/2-e+8+y),y+=8,Y.forEach((function(t){(0,n.Ys)(t).attr("transform","translate( "+-p/2+", "+(-1*u/2+y)+")"),y+=T.height+4})),l.attr("class","outer title-state").attr("x",-p/2-e).attr("y",-u/2-e).attr("width",p+r.padding).attr("height",u+r.padding),g(r,l),r.intersect=function(t){return w.rect(r,t)},s}},L={},M=function(t,r,a){var e,n,s;r.link?("sandbox"===(0,i.g)().securityLevel?s="_top":r.linkTarget&&(s=r.linkTarget||"_blank"),e=t.insert("svg:a").attr("xlink:href",r.link).attr("target",s),n=S[r.shape](e,r,a)):e=n=S[r.shape](t,r,a);return r.tooltip&&n.attr("title",r.tooltip),r.class&&n.attr("class","node default "+r.class),L[r.id]=e,r.haveCallback&&L[r.id].attr("class",L[r.id].attr("class")+" clickable"),e},T=function(t,r){L[r.id]=t},B=function(){L={}},E=function(t){var r=L[t.id];i.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");var a=t.diff||0;return t.clusterNode?r.attr("transform","translate("+(t.x+a-t.width/2)+", "+(t.y-t.height/2-8)+")"):r.attr("transform","translate("+t.x+", "+t.y+")"),a},C={},Y={},N=function(){C={},Y={}},P=function(t,r){var a=h(r.label,r.labelStyle),e=t.insert("g").attr("class","edgeLabel"),s=e.insert("g").attr("class","label");s.node().appendChild(a);var d,l=a.getBBox();if((0,i.j)((0,i.g)().flowchart.htmlLabels)){var o=a.children[0],c=(0,n.Ys)(a);l=o.getBoundingClientRect(),c.attr("width",l.width),c.attr("height",l.height)}if(s.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),C[r.id]=e,r.width=l.width,r.height=l.height,r.startLabelLeft){var p=h(r.startLabelLeft,r.labelStyle),g=t.insert("g").attr("class","edgeTerminals"),u=g.insert("g").attr("class","inner");d=u.node().appendChild(p);var f=p.getBBox();u.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),Y[r.id]||(Y[r.id]={}),Y[r.id].startLeft=g,_(d,r.startLabelLeft)}if(r.startLabelRight){var y=h(r.startLabelRight,r.labelStyle),x=t.insert("g").attr("class","edgeTerminals"),b=x.insert("g").attr("class","inner");d=x.node().appendChild(y),b.node().appendChild(y);var w=y.getBBox();b.attr("transform","translate("+-w.width/2+", "+-w.height/2+")"),Y[r.id]||(Y[r.id]={}),Y[r.id].startRight=x,_(d,r.startLabelRight)}if(r.endLabelLeft){var v=h(r.endLabelLeft,r.labelStyle),m=t.insert("g").attr("class","edgeTerminals"),k=m.insert("g").attr("class","inner");d=k.node().appendChild(v);var S=v.getBBox();k.attr("transform","translate("+-S.width/2+", "+-S.height/2+")"),m.node().appendChild(v),Y[r.id]||(Y[r.id]={}),Y[r.id].endLeft=m,_(d,r.endLabelLeft)}if(r.endLabelRight){var L=h(r.endLabelRight,r.labelStyle),M=t.insert("g").attr("class","edgeTerminals"),T=M.insert("g").attr("class","inner");d=T.node().appendChild(L);var B=L.getBBox();T.attr("transform","translate("+-B.width/2+", "+-B.height/2+")"),M.node().appendChild(L),Y[r.id]||(Y[r.id]={}),Y[r.id].endRight=M,_(d,r.endLabelRight)}return a};function _(t,r){(0,i.g)().flowchart.htmlLabels&&t&&(t.style.width=9*r.length+"px",t.style.height="12px")}var R=function(t,r){i.l.info("Moving label abc78 ",t.id,t.label,C[t.id]);var a=r.updatedPath?r.updatedPath:r.originalPath;if(t.label){var e=C[t.id],n=t.x,s=t.y;if(a){var d=l.u.calcLabelPosition(a);i.l.info("Moving label "+t.label+" from (",n,",",s,") to (",d.x,",",d.y,") abc78"),r.updatedPath&&(n=d.x,s=d.y)}e.attr("transform","translate("+n+", "+s+")")}if(t.startLabelLeft){var o=Y[t.id].startLeft,c=t.x,h=t.y;if(a){var p=l.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",a);c=p.x,h=p.y}o.attr("transform","translate("+c+", "+h+")")}if(t.startLabelRight){var g=Y[t.id].startRight,u=t.x,f=t.y;if(a){var y=l.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",a);u=y.x,f=y.y}g.attr("transform","translate("+u+", "+f+")")}if(t.endLabelLeft){var x=Y[t.id].endLeft,b=t.x,w=t.y;if(a){var v=l.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",a);b=v.x,w=v.y}x.attr("transform","translate("+b+", "+w+")")}if(t.endLabelRight){var m=Y[t.id].endRight,k=t.x,S=t.y;if(a){var L=l.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",a);k=L.x,S=L.y}m.attr("transform","translate("+k+", "+S+")")}},H=function(t,r){i.l.warn("abc88 cutPathAtIntersect",t,r);var a=[],e=t[0],n=!1;return t.forEach((function(t){if(i.l.info("abc88 checking point",t,r),function(t,r){var a=t.x,e=t.y,i=Math.abs(r.x-a),n=Math.abs(r.y-e),s=t.width/2,d=t.height/2;return i>=s||n>=d}(r,t)||n)i.l.warn("abc88 outside",t,e),e=t,n||a.push(t);else{var s=function(t,r,a){i.l.warn("intersection calc abc89:\n  outsidePoint: ".concat(JSON.stringify(r),"\n  insidePoint : ").concat(JSON.stringify(a),"\n  node        : x:").concat(t.x," y:").concat(t.y," w:").concat(t.width," h:").concat(t.height));var e=t.x,n=t.y,s=Math.abs(e-a.x),d=t.width/2,l=a.x<r.x?d-s:d+s,o=t.height/2,c=Math.abs(r.y-a.y),h=Math.abs(r.x-a.x);if(Math.abs(n-r.y)*d>Math.abs(e-r.x)*o){var p=a.y<r.y?r.y-o-n:n-o-r.y;l=h*p/c;var g={x:a.x<r.x?a.x+l:a.x-h+l,y:a.y<r.y?a.y+c-p:a.y-c+p};return 0===l&&(g.x=r.x,g.y=r.y),0===h&&(g.x=r.x),0===c&&(g.y=r.y),i.l.warn("abc89 topp/bott calc, Q ".concat(c,", q ").concat(p,", R ").concat(h,", r ").concat(l),g),g}var u=c*(l=a.x<r.x?r.x-d-e:e-d-r.x)/h,f=a.x<r.x?a.x+h-l:a.x-h+l,y=a.y<r.y?a.y+u:a.y-u;return i.l.warn("sides calc abc89, Q ".concat(c,", q ").concat(u,", R ").concat(h,", r ").concat(l),{_x:f,_y:y}),0===l&&(f=r.x,y=r.y),0===h&&(f=r.x),0===c&&(y=r.y),{x:f,y:y}}(r,e,t);i.l.warn("abc88 inside",t,e,s),i.l.warn("abc88 intersection",s);var d=!1;a.forEach((function(t){d=d||t.x===s.x&&t.y===s.y})),a.some((function(t){return t.x===s.x&&t.y===s.y}))?i.l.warn("abc88 no intersect",s,a):a.push(s),n=!0}})),i.l.warn("abc88 returning points",a),a},I=function(t,r,a,e,s,d){var l=a.points,o=!1,c=d.node(r.v),h=d.node(r.w);i.l.info("abc88 InsertEdge: ",a),h.intersect&&c.intersect&&((l=l.slice(1,a.points.length-1)).unshift(c.intersect(l[0])),i.l.info("Last point",l[l.length-1],h,h.intersect(l[l.length-1])),l.push(h.intersect(l[l.length-1]))),a.toCluster&&(i.l.info("to cluster abc88",e[a.toCluster]),l=H(a.points,e[a.toCluster].node),o=!0),a.fromCluster&&(i.l.info("from cluster abc88",e[a.fromCluster]),l=H(l.reverse(),e[a.fromCluster].node).reverse(),o=!0);var p,g=l.filter((function(t){return!Number.isNaN(t.y)}));p=("graph"===s||"flowchart"===s)&&a.curve||n.$0Z;var u,f=(0,n.jvg)().x((function(t){return t.x})).y((function(t){return t.y})).curve(p);switch(a.thickness){case"normal":u="edge-thickness-normal";break;case"thick":case"invisible":u="edge-thickness-thick";break;default:u=""}switch(a.pattern){case"solid":u+=" edge-pattern-solid";break;case"dotted":u+=" edge-pattern-dotted";break;case"dashed":u+=" edge-pattern-dashed"}var y=t.append("path").attr("d",f(g)).attr("id",a.id).attr("class"," "+u+(a.classes?" "+a.classes:"")).attr("style",a.style),x="";switch(((0,i.g)().flowchart.arrowMarkerAbsolute||(0,i.g)().state.arrowMarkerAbsolute)&&(x=(x=(x=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),i.l.info("arrowTypeStart",a.arrowTypeStart),i.l.info("arrowTypeEnd",a.arrowTypeEnd),a.arrowTypeStart){case"arrow_cross":y.attr("marker-start","url("+x+"#"+s+"-crossStart)");break;case"arrow_point":y.attr("marker-start","url("+x+"#"+s+"-pointStart)");break;case"arrow_barb":y.attr("marker-start","url("+x+"#"+s+"-barbStart)");break;case"arrow_circle":y.attr("marker-start","url("+x+"#"+s+"-circleStart)");break;case"aggregation":y.attr("marker-start","url("+x+"#"+s+"-aggregationStart)");break;case"extension":y.attr("marker-start","url("+x+"#"+s+"-extensionStart)");break;case"composition":y.attr("marker-start","url("+x+"#"+s+"-compositionStart)");break;case"dependency":y.attr("marker-start","url("+x+"#"+s+"-dependencyStart)");break;case"lollipop":y.attr("marker-start","url("+x+"#"+s+"-lollipopStart)")}switch(a.arrowTypeEnd){case"arrow_cross":y.attr("marker-end","url("+x+"#"+s+"-crossEnd)");break;case"arrow_point":y.attr("marker-end","url("+x+"#"+s+"-pointEnd)");break;case"arrow_barb":y.attr("marker-end","url("+x+"#"+s+"-barbEnd)");break;case"arrow_circle":y.attr("marker-end","url("+x+"#"+s+"-circleEnd)");break;case"aggregation":y.attr("marker-end","url("+x+"#"+s+"-aggregationEnd)");break;case"extension":y.attr("marker-end","url("+x+"#"+s+"-extensionEnd)");break;case"composition":y.attr("marker-end","url("+x+"#"+s+"-compositionEnd)");break;case"dependency":y.attr("marker-end","url("+x+"#"+s+"-dependencyEnd)");break;case"lollipop":y.attr("marker-end","url("+x+"#"+s+"-lollipopEnd)")}var b={};return o&&(b.updatedPath=l),b.originalPath=a.points,b}},2997:function(t,r,a){a.d(r,{p:function(){return d},s:function(){return g}});var e=a(8735),i=a(5178),n=a(2954),s=0,d=function(t){var r=t.match(/^([#+~-])?(\w+)(~\w+~|\[])?\s+(\w+) *([$*])?$/),a=t.match(/^([#+|~-])?(\w+) *\( *(.*)\) *([$*])? *(\w*[[\]|~]*\s*\w*~?)$/);return r&&!a?l(r):a?o(a):c(t)},l=function(t){var r="",a="";try{var e=t[1]?t[1].trim():"",i=t[2]?t[2].trim():"",s=t[3]?(0,n.p)(t[3].trim()):"",d=t[4]?t[4].trim():"",l=t[5]?t[5].trim():"";a=e+i+s+" "+d,r=p(l)}catch(o){a=t}return{displayText:a,cssStyle:r}},o=function(t){var r="",a="";try{var e=t[1]?t[1].trim():"",i=t[2]?t[2].trim():"",s=t[3]?(0,n.p)(t[3].trim()):"",d=t[4]?t[4].trim():"";a=e+i+"("+s+")"+(t[5]?" : "+(0,n.p)(t[5]).trim():""),r=p(d)}catch(l){a=t}return{displayText:a,cssStyle:r}},c=function(t){var r="",a="",e="",i=t.indexOf("("),s=t.indexOf(")");if(i>1&&s>i&&s<=t.length){var d="",l="",o=t.substring(0,1);o.match(/\w/)?l=t.substring(0,i).trim():(o.match(/[#+~-]/)&&(d=o),l=t.substring(1,i).trim());var c=t.substring(i+1,s);t.substring(s+1,1),a=p(t.substring(s+1,s+2)),r=d+l+"("+(0,n.p)(c.trim())+")",s<t.length&&""!==(e=t.substring(s+2).trim())&&(r+=e=" : "+(0,n.p)(e))}else r=(0,n.p)(t);return{displayText:r,cssStyle:a}},h=function(t,r,a,e){var i=d(r),n=t.append("tspan").attr("x",e.padding).text(i.displayText);""!==i.cssStyle&&n.attr("style",i.cssStyle),a||n.attr("dy",e.textHeight)},p=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},g={drawClass:function(t,r,a,e){n.l.debug("Rendering class ",r,a);var i,s=r.id,d={id:s,label:r.id,width:0,height:0},l=t.append("g").attr("id",e.db.lookUpDomId(s)).attr("class","classGroup");i=r.link?l.append("svg:a").attr("xlink:href",r.link).attr("target",r.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):l.append("text").attr("y",a.textHeight+a.padding).attr("x",0);var o=!0;r.annotations.forEach((function(t){var r=i.append("tspan").text("\xab"+t+"\xbb");o||r.attr("dy",a.textHeight),o=!1}));var c=r.id;void 0!==r.type&&""!==r.type&&(c+="<"+r.type+">");var p=i.append("tspan").text(c).attr("class","title");o||p.attr("dy",a.textHeight);var g=i.node().getBBox().height,u=l.append("line").attr("x1",0).attr("y1",a.padding+g+a.dividerMargin/2).attr("y2",a.padding+g+a.dividerMargin/2),f=l.append("text").attr("x",a.padding).attr("y",g+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");o=!0,r.members.forEach((function(t){h(f,t,o,a),o=!1}));var y=f.node().getBBox(),x=l.append("line").attr("x1",0).attr("y1",a.padding+g+a.dividerMargin+y.height).attr("y2",a.padding+g+a.dividerMargin+y.height),b=l.append("text").attr("x",a.padding).attr("y",g+2*a.dividerMargin+y.height+a.textHeight).attr("fill","white").attr("class","classText");o=!0,r.methods.forEach((function(t){h(b,t,o,a),o=!1}));var w=l.node().getBBox(),v=" ";r.cssClasses.length>0&&(v+=r.cssClasses.join(" "));var m=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",w.width+2*a.padding).attr("height",w.height+a.padding+.5*a.dividerMargin).attr("class",v).node().getBBox().width;return i.node().childNodes.forEach((function(t){t.setAttribute("x",(m-t.getBBox().width)/2)})),r.tooltip&&i.insert("title").text(r.tooltip),u.attr("x2",m),x.attr("x2",m),d.width=m,d.height=w.height+a.padding+.5*a.dividerMargin,d},drawEdge:function(t,r,a,d,l){var o=function(t){switch(t){case l.db.relationType.AGGREGATION:return"aggregation";case l.db.relationType.EXTENSION:return"extension";case l.db.relationType.COMPOSITION:return"composition";case l.db.relationType.DEPENDENCY:return"dependency";case l.db.relationType.LOLLIPOP:return"lollipop"}};r.points=r.points.filter((function(t){return!Number.isNaN(t.y)}));var c,h,p=r.points,g=(0,e.jvg)().x((function(t){return t.x})).y((function(t){return t.y})).curve(e.$0Z),u=t.append("path").attr("d",g(p)).attr("id","edge"+s).attr("class","relation"),f="";d.arrowMarkerAbsolute&&(f=(f=(f=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==a.relation.lineType&&u.attr("class","relation dashed-line"),10==a.relation.lineType&&u.attr("class","relation dotted-line"),"none"!==a.relation.type1&&u.attr("marker-start","url("+f+"#"+o(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&u.attr("marker-end","url("+f+"#"+o(a.relation.type2)+"End)");var y,x,b,w,v=r.points.length,m=i.u.calcLabelPosition(r.points);if(c=m.x,h=m.y,v%2!==0&&v>1){var k=i.u.calcCardinalityPosition("none"!==a.relation.type1,r.points,r.points[0]),S=i.u.calcCardinalityPosition("none"!==a.relation.type2,r.points,r.points[v-1]);n.l.debug("cardinality_1_point "+JSON.stringify(k)),n.l.debug("cardinality_2_point "+JSON.stringify(S)),y=k.x,x=k.y,b=S.x,w=S.y}if(void 0!==a.title){var L=t.append("g").attr("class","classLabel"),M=L.append("text").attr("class","label").attr("x",c).attr("y",h).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=M;var T=M.node().getBBox();L.insert("rect",":first-child").attr("class","box").attr("x",T.x-d.padding/2).attr("y",T.y-d.padding/2).attr("width",T.width+d.padding).attr("height",T.height+d.padding)}(n.l.info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1)&&t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",y).attr("y",x).attr("fill","black").attr("font-size","6").text(a.relationTitle1);void 0!==a.relationTitle2&&"none"!==a.relationTitle2&&t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",b).attr("y",w).attr("fill","black").attr("font-size","6").text(a.relationTitle2);s++},drawNote:function(t,r,a,e){n.l.debug("Rendering note ",r,a);var i=r.id,s={id:i,text:r.text,width:0,height:0},d=t.append("g").attr("id",i).attr("class","classGroup"),l=d.append("text").attr("y",a.textHeight+a.padding).attr("x",0),o=JSON.parse('"'.concat(r.text,'"')).split("\n");o.forEach((function(t){n.l.debug("Adding line: ".concat(t)),l.append("tspan").text(t).attr("class","title").attr("dy",a.textHeight)}));var c=d.node().getBBox(),h=d.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",c.width+2*a.padding).attr("height",c.height+o.length*a.textHeight+a.padding+.5*a.dividerMargin).node().getBBox().width;return l.node().childNodes.forEach((function(t){t.setAttribute("x",(h-t.getBBox().width)/2)})),s.width=h,s.height=c.height+o.length*a.textHeight+a.padding+.5*a.dividerMargin,s},parseMember:d}}}]);
//# sourceMappingURL=281.3085f0f9.chunk.js.map