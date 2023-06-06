"use strict";(self.webpackChunkauto_mindmapping=self.webpackChunkauto_mindmapping||[]).push([[678],{5678:function(t,e,r){r.r(e),r.d(e,{diagram:function(){return q}});var c=r(9472),i=r(8489),n=r(2954),a=r(5178),s=r(6009),o=r(8586),l=r(8735),h=(r(8703),r(7892),r(504),function(){var t=function(t,e,r,c){for(r=r||{},c=t.length;c--;r[t[c]]=e);return r},e=[1,4],r=[1,7],c=[1,5],i=[1,9],n=[1,6],a=[2,6],s=[1,16],o=[6,8,14,20,22,24,25,27,29,32,37,40,50,55],l=[8,14,20,22,24,25,27,29,32,37,40],h=[8,13,14,20,22,24,25,27,29,32,37,40],m=[1,26],u=[6,8,14,50,55],y=[8,14,55],p=[1,53],g=[1,52],d=[8,14,30,33,35,38,55],b=[1,67],f=[1,68],k=[1,69],_=[8,14,33,35,42,55],v={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,GG:6,document:7,EOF:8,":":9,DIR:10,options:11,body:12,OPT:13,NL:14,line:15,statement:16,commitStatement:17,mergeStatement:18,cherryPickStatement:19,acc_title:20,acc_title_value:21,acc_descr:22,acc_descr_value:23,acc_descr_multiline_value:24,section:25,branchStatement:26,CHECKOUT:27,ref:28,BRANCH:29,ORDER:30,NUM:31,CHERRY_PICK:32,COMMIT_ID:33,STR:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,openDirective:46,typeDirective:47,closeDirective:48,argDirective:49,open_directive:50,type_directive:51,arg_directive:52,close_directive:53,ID:54,";":55,$accept:0,$end:1},terminals_:{2:"error",6:"GG",8:"EOF",9:":",10:"DIR",13:"OPT",14:"NL",20:"acc_title",21:"acc_title_value",22:"acc_descr",23:"acc_descr_value",24:"acc_descr_multiline_value",25:"section",27:"CHECKOUT",29:"BRANCH",30:"ORDER",31:"NUM",32:"CHERRY_PICK",33:"COMMIT_ID",34:"STR",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",50:"open_directive",51:"type_directive",52:"arg_directive",53:"close_directive",54:"ID",55:";"},productions_:[0,[3,2],[3,2],[3,3],[3,4],[3,5],[7,0],[7,2],[11,2],[11,1],[12,0],[12,2],[15,2],[15,1],[16,1],[16,1],[16,1],[16,2],[16,2],[16,1],[16,1],[16,1],[16,2],[26,2],[26,4],[19,3],[19,5],[19,5],[19,5],[19,5],[18,2],[18,4],[18,4],[18,4],[18,6],[18,6],[18,6],[18,6],[18,6],[18,6],[18,8],[18,8],[18,8],[18,8],[18,8],[18,8],[17,2],[17,3],[17,3],[17,5],[17,5],[17,3],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,3],[17,5],[17,5],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[41,0],[41,1],[39,1],[39,1],[39,1],[5,3],[5,5],[46,1],[47,1],[49,1],[48,1],[28,1],[28,1],[4,1],[4,1],[4,1]],performAction:function(t,e,r,c,i,n,a){var s=n.length-1;switch(i){case 3:return n[s];case 4:return n[s-1];case 5:return c.setDirection(n[s-3]),n[s-1];case 7:c.setOptions(n[s-1]),this.$=n[s];break;case 8:n[s-1]+=n[s],this.$=n[s-1];break;case 10:this.$=[];break;case 11:n[s-1].push(n[s]),this.$=n[s-1];break;case 12:this.$=n[s-1];break;case 17:this.$=n[s].trim(),c.setAccTitle(this.$);break;case 18:case 19:this.$=n[s].trim(),c.setAccDescription(this.$);break;case 20:c.addSection(n[s].substr(8)),this.$=n[s].substr(8);break;case 22:c.checkout(n[s]);break;case 23:c.branch(n[s]);break;case 24:c.branch(n[s-2],n[s]);break;case 25:c.cherryPick(n[s],"",void 0);break;case 26:c.cherryPick(n[s-2],"",n[s]);break;case 27:case 29:c.cherryPick(n[s-2],"","");break;case 28:c.cherryPick(n[s],"",n[s-2]);break;case 30:c.merge(n[s],"","","");break;case 31:c.merge(n[s-2],n[s],"","");break;case 32:c.merge(n[s-2],"",n[s],"");break;case 33:c.merge(n[s-2],"","",n[s]);break;case 34:c.merge(n[s-4],n[s],"",n[s-2]);break;case 35:c.merge(n[s-4],"",n[s],n[s-2]);break;case 36:c.merge(n[s-4],"",n[s-2],n[s]);break;case 37:c.merge(n[s-4],n[s-2],n[s],"");break;case 38:c.merge(n[s-4],n[s-2],"",n[s]);break;case 39:c.merge(n[s-4],n[s],n[s-2],"");break;case 40:c.merge(n[s-6],n[s-4],n[s-2],n[s]);break;case 41:c.merge(n[s-6],n[s],n[s-4],n[s-2]);break;case 42:c.merge(n[s-6],n[s-4],n[s],n[s-2]);break;case 43:c.merge(n[s-6],n[s-2],n[s-4],n[s]);break;case 44:c.merge(n[s-6],n[s],n[s-2],n[s-4]);break;case 45:c.merge(n[s-6],n[s-2],n[s],n[s-4]);break;case 46:c.commit(n[s]);break;case 47:c.commit("","",c.commitType.NORMAL,n[s]);break;case 48:c.commit("","",n[s],"");break;case 49:c.commit("","",n[s],n[s-2]);break;case 50:c.commit("","",n[s-2],n[s]);break;case 51:c.commit("",n[s],c.commitType.NORMAL,"");break;case 52:c.commit("",n[s-2],c.commitType.NORMAL,n[s]);break;case 53:c.commit("",n[s],c.commitType.NORMAL,n[s-2]);break;case 54:c.commit("",n[s-2],n[s],"");break;case 55:c.commit("",n[s],n[s-2],"");break;case 56:c.commit("",n[s-4],n[s-2],n[s]);break;case 57:c.commit("",n[s-4],n[s],n[s-2]);break;case 58:c.commit("",n[s-2],n[s-4],n[s]);break;case 59:c.commit("",n[s],n[s-4],n[s-2]);break;case 60:c.commit("",n[s],n[s-2],n[s-4]);break;case 61:c.commit("",n[s-2],n[s],n[s-4]);break;case 62:c.commit(n[s],"",c.commitType.NORMAL,"");break;case 63:c.commit(n[s],"",c.commitType.NORMAL,n[s-2]);break;case 64:c.commit(n[s-2],"",c.commitType.NORMAL,n[s]);break;case 65:c.commit(n[s-2],"",n[s],"");break;case 66:c.commit(n[s],"",n[s-2],"");break;case 67:c.commit(n[s],n[s-2],c.commitType.NORMAL,"");break;case 68:c.commit(n[s-2],n[s],c.commitType.NORMAL,"");break;case 69:c.commit(n[s-4],"",n[s-2],n[s]);break;case 70:c.commit(n[s-4],"",n[s],n[s-2]);break;case 71:c.commit(n[s-2],"",n[s-4],n[s]);break;case 72:c.commit(n[s],"",n[s-4],n[s-2]);break;case 73:c.commit(n[s],"",n[s-2],n[s-4]);break;case 74:c.commit(n[s-2],"",n[s],n[s-4]);break;case 75:c.commit(n[s-4],n[s],n[s-2],"");break;case 76:c.commit(n[s-4],n[s-2],n[s],"");break;case 77:c.commit(n[s-2],n[s],n[s-4],"");break;case 78:c.commit(n[s],n[s-2],n[s-4],"");break;case 79:c.commit(n[s],n[s-4],n[s-2],"");break;case 80:c.commit(n[s-2],n[s-4],n[s],"");break;case 81:c.commit(n[s-4],n[s],c.commitType.NORMAL,n[s-2]);break;case 82:c.commit(n[s-4],n[s-2],c.commitType.NORMAL,n[s]);break;case 83:c.commit(n[s-2],n[s],c.commitType.NORMAL,n[s-4]);break;case 84:c.commit(n[s],n[s-2],c.commitType.NORMAL,n[s-4]);break;case 85:c.commit(n[s],n[s-4],c.commitType.NORMAL,n[s-2]);break;case 86:c.commit(n[s-2],n[s-4],c.commitType.NORMAL,n[s]);break;case 87:c.commit(n[s-6],n[s-4],n[s-2],n[s]);break;case 88:c.commit(n[s-6],n[s-4],n[s],n[s-2]);break;case 89:c.commit(n[s-6],n[s-2],n[s-4],n[s]);break;case 90:c.commit(n[s-6],n[s],n[s-4],n[s-2]);break;case 91:c.commit(n[s-6],n[s-2],n[s],n[s-4]);break;case 92:c.commit(n[s-6],n[s],n[s-2],n[s-4]);break;case 93:c.commit(n[s-4],n[s-6],n[s-2],n[s]);break;case 94:c.commit(n[s-4],n[s-6],n[s],n[s-2]);break;case 95:c.commit(n[s-2],n[s-6],n[s-4],n[s]);break;case 96:c.commit(n[s],n[s-6],n[s-4],n[s-2]);break;case 97:c.commit(n[s-2],n[s-6],n[s],n[s-4]);break;case 98:c.commit(n[s],n[s-6],n[s-2],n[s-4]);break;case 99:c.commit(n[s],n[s-4],n[s-2],n[s-6]);break;case 100:c.commit(n[s-2],n[s-4],n[s],n[s-6]);break;case 101:c.commit(n[s],n[s-2],n[s-4],n[s-6]);break;case 102:c.commit(n[s-2],n[s],n[s-4],n[s-6]);break;case 103:c.commit(n[s-4],n[s-2],n[s],n[s-6]);break;case 104:c.commit(n[s-4],n[s],n[s-2],n[s-6]);break;case 105:c.commit(n[s-2],n[s-4],n[s-6],n[s]);break;case 106:c.commit(n[s],n[s-4],n[s-6],n[s-2]);break;case 107:c.commit(n[s-2],n[s],n[s-6],n[s-4]);break;case 108:c.commit(n[s],n[s-2],n[s-6],n[s-4]);break;case 109:c.commit(n[s-4],n[s-2],n[s-6],n[s]);break;case 110:c.commit(n[s-4],n[s],n[s-6],n[s-2]);break;case 111:this.$="";break;case 112:this.$=n[s];break;case 113:this.$=c.commitType.NORMAL;break;case 114:this.$=c.commitType.REVERSE;break;case 115:this.$=c.commitType.HIGHLIGHT;break;case 118:c.parseDirective("%%{","open_directive");break;case 119:c.parseDirective(n[s],"type_directive");break;case 120:n[s]=n[s].trim().replace(/'/g,'"'),c.parseDirective(n[s],"arg_directive");break;case 121:c.parseDirective("}%%","close_directive","gitGraph")}},table:[{3:1,4:2,5:3,6:e,8:r,14:c,46:8,50:i,55:n},{1:[3]},{3:10,4:2,5:3,6:e,8:r,14:c,46:8,50:i,55:n},{3:11,4:2,5:3,6:e,8:r,14:c,46:8,50:i,55:n},{7:12,8:a,9:[1,13],10:[1,14],11:15,14:s},t(o,[2,124]),t(o,[2,125]),t(o,[2,126]),{47:17,51:[1,18]},{51:[2,118]},{1:[2,1]},{1:[2,2]},{8:[1,19]},{7:20,8:a,11:15,14:s},{9:[1,21]},t(l,[2,10],{12:22,13:[1,23]}),t(h,[2,9]),{9:[1,25],48:24,53:m},t([9,53],[2,119]),{1:[2,3]},{8:[1,27]},{7:28,8:a,11:15,14:s},{8:[2,7],14:[1,31],15:29,16:30,17:32,18:33,19:34,20:[1,35],22:[1,36],24:[1,37],25:[1,38],26:39,27:[1,40],29:[1,44],32:[1,43],37:[1,42],40:[1,41]},t(h,[2,8]),t(u,[2,116]),{49:45,52:[1,46]},t(u,[2,121]),{1:[2,4]},{8:[1,47]},t(l,[2,11]),{4:48,8:r,14:c,55:n},t(l,[2,13]),t(y,[2,14]),t(y,[2,15]),t(y,[2,16]),{21:[1,49]},{23:[1,50]},t(y,[2,19]),t(y,[2,20]),t(y,[2,21]),{28:51,34:p,54:g},t(y,[2,111],{41:54,33:[1,57],34:[1,59],35:[1,55],38:[1,56],42:[1,58]}),{28:60,34:p,54:g},{33:[1,61],35:[1,62]},{28:63,34:p,54:g},{48:64,53:m},{53:[2,120]},{1:[2,5]},t(l,[2,12]),t(y,[2,17]),t(y,[2,18]),t(y,[2,22]),t(d,[2,122]),t(d,[2,123]),t(y,[2,46]),{34:[1,65]},{39:66,43:b,44:f,45:k},{34:[1,70]},{34:[1,71]},t(y,[2,112]),t(y,[2,30],{33:[1,72],35:[1,74],38:[1,73]}),{34:[1,75]},{34:[1,76],36:[1,77]},t(y,[2,23],{30:[1,78]}),t(u,[2,117]),t(y,[2,47],{33:[1,80],38:[1,79],42:[1,81]}),t(y,[2,48],{33:[1,83],35:[1,82],42:[1,84]}),t(_,[2,113]),t(_,[2,114]),t(_,[2,115]),t(y,[2,51],{35:[1,85],38:[1,86],42:[1,87]}),t(y,[2,62],{33:[1,90],35:[1,88],38:[1,89]}),{34:[1,91]},{39:92,43:b,44:f,45:k},{34:[1,93]},t(y,[2,25],{35:[1,94]}),{33:[1,95]},{33:[1,96]},{31:[1,97]},{39:98,43:b,44:f,45:k},{34:[1,99]},{34:[1,100]},{34:[1,101]},{34:[1,102]},{34:[1,103]},{34:[1,104]},{39:105,43:b,44:f,45:k},{34:[1,106]},{34:[1,107]},{39:108,43:b,44:f,45:k},{34:[1,109]},t(y,[2,31],{35:[1,111],38:[1,110]}),t(y,[2,32],{33:[1,113],35:[1,112]}),t(y,[2,33],{33:[1,114],38:[1,115]}),{34:[1,116],36:[1,117]},{34:[1,118]},{34:[1,119]},t(y,[2,24]),t(y,[2,49],{33:[1,120],42:[1,121]}),t(y,[2,53],{38:[1,122],42:[1,123]}),t(y,[2,63],{33:[1,125],38:[1,124]}),t(y,[2,50],{33:[1,126],42:[1,127]}),t(y,[2,55],{35:[1,128],42:[1,129]}),t(y,[2,66],{33:[1,131],35:[1,130]}),t(y,[2,52],{38:[1,132],42:[1,133]}),t(y,[2,54],{35:[1,134],42:[1,135]}),t(y,[2,67],{35:[1,137],38:[1,136]}),t(y,[2,64],{33:[1,139],38:[1,138]}),t(y,[2,65],{33:[1,141],35:[1,140]}),t(y,[2,68],{35:[1,143],38:[1,142]}),{39:144,43:b,44:f,45:k},{34:[1,145]},{34:[1,146]},{34:[1,147]},{34:[1,148]},{39:149,43:b,44:f,45:k},t(y,[2,26]),t(y,[2,27]),t(y,[2,28]),t(y,[2,29]),{34:[1,150]},{34:[1,151]},{39:152,43:b,44:f,45:k},{34:[1,153]},{39:154,43:b,44:f,45:k},{34:[1,155]},{34:[1,156]},{34:[1,157]},{34:[1,158]},{34:[1,159]},{34:[1,160]},{34:[1,161]},{39:162,43:b,44:f,45:k},{34:[1,163]},{34:[1,164]},{34:[1,165]},{39:166,43:b,44:f,45:k},{34:[1,167]},{39:168,43:b,44:f,45:k},{34:[1,169]},{34:[1,170]},{34:[1,171]},{39:172,43:b,44:f,45:k},{34:[1,173]},t(y,[2,37],{35:[1,174]}),t(y,[2,38],{38:[1,175]}),t(y,[2,36],{33:[1,176]}),t(y,[2,39],{35:[1,177]}),t(y,[2,34],{38:[1,178]}),t(y,[2,35],{33:[1,179]}),t(y,[2,60],{42:[1,180]}),t(y,[2,73],{33:[1,181]}),t(y,[2,61],{42:[1,182]}),t(y,[2,84],{38:[1,183]}),t(y,[2,74],{33:[1,184]}),t(y,[2,83],{38:[1,185]}),t(y,[2,59],{42:[1,186]}),t(y,[2,72],{33:[1,187]}),t(y,[2,58],{42:[1,188]}),t(y,[2,78],{35:[1,189]}),t(y,[2,71],{33:[1,190]}),t(y,[2,77],{35:[1,191]}),t(y,[2,57],{42:[1,192]}),t(y,[2,85],{38:[1,193]}),t(y,[2,56],{42:[1,194]}),t(y,[2,79],{35:[1,195]}),t(y,[2,80],{35:[1,196]}),t(y,[2,86],{38:[1,197]}),t(y,[2,70],{33:[1,198]}),t(y,[2,81],{38:[1,199]}),t(y,[2,69],{33:[1,200]}),t(y,[2,75],{35:[1,201]}),t(y,[2,76],{35:[1,202]}),t(y,[2,82],{38:[1,203]}),{34:[1,204]},{39:205,43:b,44:f,45:k},{34:[1,206]},{34:[1,207]},{39:208,43:b,44:f,45:k},{34:[1,209]},{34:[1,210]},{34:[1,211]},{34:[1,212]},{39:213,43:b,44:f,45:k},{34:[1,214]},{39:215,43:b,44:f,45:k},{34:[1,216]},{34:[1,217]},{34:[1,218]},{34:[1,219]},{34:[1,220]},{34:[1,221]},{34:[1,222]},{39:223,43:b,44:f,45:k},{34:[1,224]},{34:[1,225]},{34:[1,226]},{39:227,43:b,44:f,45:k},{34:[1,228]},{39:229,43:b,44:f,45:k},{34:[1,230]},{34:[1,231]},{34:[1,232]},{39:233,43:b,44:f,45:k},t(y,[2,40]),t(y,[2,42]),t(y,[2,41]),t(y,[2,43]),t(y,[2,45]),t(y,[2,44]),t(y,[2,101]),t(y,[2,102]),t(y,[2,99]),t(y,[2,100]),t(y,[2,104]),t(y,[2,103]),t(y,[2,108]),t(y,[2,107]),t(y,[2,106]),t(y,[2,105]),t(y,[2,110]),t(y,[2,109]),t(y,[2,98]),t(y,[2,97]),t(y,[2,96]),t(y,[2,95]),t(y,[2,93]),t(y,[2,94]),t(y,[2,92]),t(y,[2,91]),t(y,[2,90]),t(y,[2,89]),t(y,[2,87]),t(y,[2,88])],defaultActions:{9:[2,118],10:[2,1],11:[2,2],19:[2,3],27:[2,4],46:[2,120],47:[2,5]},parseError:function(t,e){if(!e.recoverable){var r=new Error(t);throw r.hash=e,r}this.trace(t)},parse:function(t){var e=this,r=[0],c=[],i=[null],n=[],a=this.table,s="",o=0,l=0,h=n.slice.call(arguments,1),m=Object.create(this.lexer),u={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(u.yy[y]=this.yy[y]);m.setInput(t,u.yy),u.yy.lexer=m,u.yy.parser=this,"undefined"==typeof m.yylloc&&(m.yylloc={});var p=m.yylloc;n.push(p);var g=m.options&&m.options.ranges;function d(){var t;return"number"!==typeof(t=c.pop()||m.lex()||1)&&(t instanceof Array&&(t=(c=t).pop()),t=e.symbols_[t]||t),t}"function"===typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,f,k,_,v,x,w,E,T={};;){if(f=r[r.length-1],this.defaultActions[f]?k=this.defaultActions[f]:(null!==b&&"undefined"!=typeof b||(b=d()),k=a[f]&&a[f][b]),"undefined"===typeof k||!k.length||!k[0]){var L="";for(v in E=[],a[f])this.terminals_[v]&&v>2&&E.push("'"+this.terminals_[v]+"'");L=m.showPosition?"Parse error on line "+(o+1)+":\n"+m.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(L,{text:m.match,token:this.terminals_[b]||b,line:m.yylineno,loc:p,expected:E})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+b);switch(k[0]){case 1:r.push(b),i.push(m.yytext),n.push(m.yylloc),r.push(k[1]),b=null,l=m.yyleng,s=m.yytext,o=m.yylineno,p=m.yylloc;break;case 2:if(x=this.productions_[k[1]][1],T.$=i[i.length-x],T._$={first_line:n[n.length-(x||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(x||1)].first_column,last_column:n[n.length-1].last_column},g&&(T._$.range=[n[n.length-(x||1)].range[0],n[n.length-1].range[1]]),"undefined"!==typeof(_=this.performAction.apply(T,[s,l,o,u.yy,k[1],i,n].concat(h))))return _;x&&(r=r.slice(0,-1*x*2),i=i.slice(0,-1*x),n=n.slice(0,-1*x)),r.push(this.productions_[k[1]][0]),i.push(T.$),n.push(T._$),w=a[r[r.length-2]][r[r.length-1]],r.push(w);break;case 3:return!0}}return!0}},x={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var c=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===c.length?this.yylloc.first_column:0)+c[c.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var r,c,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),(c=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=c.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var n in i)this[n]=i[n];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,r,c;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),n=0;n<i.length;n++)if((r=this._input.match(this.rules[i[n]]))&&(!e||r[0].length>e[0].length)){if(e=r,c=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,i[n])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,i[c]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,r,c){switch(r){case 0:return this.begin("open_directive"),50;case 1:return this.begin("type_directive"),51;case 2:return this.popState(),this.begin("arg_directive"),9;case 3:return this.popState(),this.popState(),53;case 4:return 52;case 5:return this.begin("acc_title"),20;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),22;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:case 34:case 38:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:return 14;case 13:case 14:break;case 15:return 6;case 16:return 40;case 17:return 33;case 18:return 38;case 19:return 42;case 20:return 43;case 21:return 44;case 22:return 45;case 23:return 35;case 24:return 29;case 25:return 30;case 26:return 37;case 27:return 32;case 28:return 27;case 29:case 30:return 10;case 31:return 9;case 32:return"CARET";case 33:this.begin("options");break;case 35:return 13;case 36:return 36;case 37:this.begin("string");break;case 39:return 34;case 40:return 31;case 41:return 54;case 42:return 8}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:BT\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},options:{rules:[34,35],inclusive:!1},string:{rules:[38,39],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,37,40,41,42,43],inclusive:!0}}};function w(){this.yy={}}return v.lexer=x,w.prototype=v,v.Parser=w,new w}());h.parser=h;var m=h,u=(0,n.g)().gitGraph.mainBranchName,y=(0,n.g)().gitGraph.mainBranchOrder,p={},g=null,d={};d[u]={name:u,order:y};var b={};b[u]=g;var f=u,k="LR",_=0;function v(){return(0,a.o)({length:7})}var x={},w=function(t){if(t=n.d.sanitizeText(t,(0,n.g)()),void 0===b[t]){var e=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+t+'")');throw e.hash={text:"checkout "+t,token:"checkout "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+t+'"']},e}var r=b[f=t];g=p[r]};function E(t,e,r){var c=t.indexOf(e);-1===c?t.push(r):t.splice(c,1,r)}function T(t){var e=t.reduce((function(t,e){return t.seq>e.seq?t:e}),t[0]),r="";t.forEach((function(t){r+=t===e?"\t*":"\t|"}));var c=[r,e.id,e.seq];for(var i in b)b[i]===e.id&&c.push(i);if(n.l.debug(c.join(" ")),e.parents&&2==e.parents.length){var a=p[e.parents[0]];E(t,e,a),t.push(p[e.parents[1]])}else{if(0==e.parents.length)return;var s=p[e.parents];E(t,e,s)}T(t=function(t,e){var r=Object.create(null);return t.reduce((function(t,c){var i=e(c);return r[i]||(r[i]=!0,t.push(c)),t}),[])}(t,(function(t){return t.id})))}var L=function(){var t=Object.keys(p).map((function(t){return p[t]}));return t.forEach((function(t){n.l.debug(t.id)})),t.sort((function(t,e){return t.seq-e.seq})),t},M={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},I={parseDirective:function(t,e,r){s.m.parseDirective(this,t,e,r)},getConfig:function(){return(0,n.g)().gitGraph},setDirection:function(t){k=t},setOptions:function(t){n.l.debug("options str",t),t=(t=t&&t.trim())||"{}";try{x=JSON.parse(t)}catch(e){n.l.error("error while parsing gitGraph options",e.message)}},getOptions:function(){return x},commit:function(t,e,r,c){n.l.debug("Entering commit:",t,e,r,c),e=n.d.sanitizeText(e,(0,n.g)()),t=n.d.sanitizeText(t,(0,n.g)()),c=n.d.sanitizeText(c,(0,n.g)());var i={id:e||_+"-"+v(),message:t,seq:_++,type:r||M.NORMAL,tag:c||"",parents:null==g?[]:[g.id],branch:f};g=i,p[i.id]=i,b[f]=i.id,n.l.debug("in pushCommit "+i.id)},branch:function(t,e){if(t=n.d.sanitizeText(t,(0,n.g)()),void 0!==b[t]){var r=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+t+'")');throw r.hash={text:"branch "+t,token:"branch "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+t+'"']},r}b[t]=null!=g?g.id:null,d[t]={name:t,order:e?parseInt(e,10):null},w(t),n.l.debug("in createBranch")},merge:function(t,e,r,c){t=n.d.sanitizeText(t,(0,n.g)()),e=n.d.sanitizeText(e,(0,n.g)());var i=p[b[f]],a=p[b[t]];if(f===t){var s=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw s.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},s}if(void 0===i||!i){var o=new Error('Incorrect usage of "merge". Current branch ('+f+")has no commits");throw o.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},o}if(void 0===b[t]){var l=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") does not exist");throw l.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+t]},l}if(void 0===a||!a){var h=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") has no commits");throw h.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},h}if(i===a){var m=new Error('Incorrect usage of "merge". Both branches have same head');throw m.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},m}if(e&&void 0!==p[e]){var u=new Error('Incorrect usage of "merge". Commit with id:'+e+" already exists, use different custom Id");throw u.hash={text:"merge "+t+e+r+c,token:"merge "+t+e+r+c,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+t+" "+e+"_UNIQUE "+r+" "+c]},u}var y={id:e||_+"-"+v(),message:"merged branch "+t+" into "+f,seq:_++,parents:[null==g?null:g.id,b[t]],branch:f,type:M.MERGE,customType:r,customId:!!e,tag:c||""};g=y,p[y.id]=y,b[f]=y.id,n.l.debug(b),n.l.debug("in mergeBranch")},cherryPick:function(t,e,r){if(n.l.debug("Entering cherryPick:",t,e,r),t=n.d.sanitizeText(t,(0,n.g)()),e=n.d.sanitizeText(e,(0,n.g)()),r=n.d.sanitizeText(r,(0,n.g)()),!t||void 0===p[t]){var c=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw c.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},c}var i=p[t],a=i.branch;if(i.type===M.MERGE){var s=new Error('Incorrect usage of "cherryPick". Source commit should not be a merge commit');throw s.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},s}if(!e||void 0===p[e]){var o;if(a===f){var l=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw l.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},l}var h=p[b[f]];if(void 0===h||!h){var m=new Error('Incorrect usage of "cherry-pick". Current branch ('+f+")has no commits");throw m.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},m}var u={id:_+"-"+v(),message:"cherry-picked "+i+" into "+f,seq:_++,parents:[null==g?null:g.id,i.id],branch:f,type:M.CHERRY_PICK,tag:null!==(o=r)&&void 0!==o?o:"cherry-pick:"+i.id};g=u,p[u.id]=u,b[f]=u.id,n.l.debug(b),n.l.debug("in cherryPick")}},checkout:w,prettyPrint:function(){n.l.debug(p),T([L()[0]])},clear:function(){p={},g=null;var t=(0,n.g)().gitGraph.mainBranchName,e=(0,n.g)().gitGraph.mainBranchOrder;(b={})[t]=null,(d={})[t]={name:t,order:e},f=t,_=0,(0,o.f)()},getBranchesAsObjArray:function(){return Object.values(d).map((function(t,e){return null!==t.order?t:(0,i.Z)((0,i.Z)({},t),{},{order:parseFloat("0.".concat(e),10)})})).sort((function(t,e){return t.order-e.order})).map((function(t){return{name:t.name}}))},getBranches:function(){return b},getCommits:function(){return p},getCommitsArray:L,getCurrentBranch:function(){return f},getDirection:function(){return k},getHead:function(){return g},setAccTitle:o.s,getAccTitle:o.g,getAccDescription:o.a,setAccDescription:o.b,setDiagramTitle:o.d,getDiagramTitle:o.e,commitType:M},O={},A=0,R=1,C=2,S=3,P=4,N={},G={},D=[],$=0,B=function(t,e,r){var c=(0,a.q)().gitGraph,i=t.append("g").attr("class","commit-bullets"),n=t.append("g").attr("class","commit-labels"),s=0;Object.keys(e).sort((function(t,r){return e[t].seq-e[r].seq})).forEach((function(t){var a=e[t],o=N[a.branch].pos,l=s+10;if(r){var h,m=void 0!==a.customType&&""!==a.customType?a.customType:a.type;switch(m){case A:h="commit-normal";break;case R:h="commit-reverse";break;case C:h="commit-highlight";break;case S:h="commit-merge";break;case P:h="commit-cherry-pick";break;default:h="commit-normal"}if(m===C){var u=i.append("rect");u.attr("x",l-10),u.attr("y",o-10),u.attr("height",20),u.attr("width",20),u.attr("class","commit ".concat(a.id," commit-highlight").concat(N[a.branch].index%8," ").concat(h,"-outer")),i.append("rect").attr("x",l-6).attr("y",o-6).attr("height",12).attr("width",12).attr("class","commit ".concat(a.id," commit").concat(N[a.branch].index%8," ").concat(h,"-inner"))}else if(m===P)i.append("circle").attr("cx",l).attr("cy",o).attr("r",10).attr("class","commit ".concat(a.id," ").concat(h)),i.append("circle").attr("cx",l-3).attr("cy",o+2).attr("r",2.75).attr("fill","#fff").attr("class","commit ".concat(a.id," ").concat(h)),i.append("circle").attr("cx",l+3).attr("cy",o+2).attr("r",2.75).attr("fill","#fff").attr("class","commit ".concat(a.id," ").concat(h)),i.append("line").attr("x1",l+3).attr("y1",o+1).attr("x2",l).attr("y2",o-5).attr("stroke","#fff").attr("class","commit ".concat(a.id," ").concat(h)),i.append("line").attr("x1",l-3).attr("y1",o+1).attr("x2",l).attr("y2",o-5).attr("stroke","#fff").attr("class","commit ".concat(a.id," ").concat(h));else{var y=i.append("circle");if(y.attr("cx",l),y.attr("cy",o),y.attr("r",a.type===S?9:10),y.attr("class","commit ".concat(a.id," commit").concat(N[a.branch].index%8)),m===S){var p=i.append("circle");p.attr("cx",l),p.attr("cy",o),p.attr("r",6),p.attr("class","commit ".concat(h," ").concat(a.id," commit").concat(N[a.branch].index%8))}if(m===R)i.append("path").attr("d","M ".concat(l-5,",").concat(o-5,"L").concat(l+5,",").concat(o+5,"M").concat(l-5,",").concat(o+5,"L").concat(l+5,",").concat(o-5)).attr("class","commit ".concat(h," ").concat(a.id," commit").concat(N[a.branch].index%8))}}if(G[a.id]={x:s+10,y:o},r){if(a.type!==P&&(a.customId&&a.type===S||a.type!==S)&&c.showCommitLabel){var g=n.append("g"),d=g.insert("rect").attr("class","commit-label-bkg"),b=g.append("text").attr("x",s).attr("y",o+25).attr("class","commit-label").text(a.id),f=b.node().getBBox();if(d.attr("x",s+10-f.width/2-2).attr("y",o+13.5).attr("width",f.width+4).attr("height",f.height+4),b.attr("x",s+10-f.width/2),c.rotateCommitLabel){var k=-7.5-(f.width+10)/25*9.5,_=10+f.width/25*8.5;g.attr("transform","translate("+k+", "+_+") rotate("+"-45, "+s+", "+o+")")}}if(a.tag){var v=n.insert("polygon"),x=n.append("circle"),w=n.append("text").attr("y",o-16).attr("class","tag-label").text(a.tag),E=w.node().getBBox();w.attr("x",s+10-E.width/2);var T=E.height/2,L=o-19.2;v.attr("class","tag-label-bkg").attr("points","\n          ".concat(s-E.width/2-2,",").concat(L+2,"\n          ").concat(s-E.width/2-2,",").concat(L-2,"\n          ").concat(s+10-E.width/2-4,",").concat(L-T-2,"\n          ").concat(s+10+E.width/2+4,",").concat(L-T-2,"\n          ").concat(s+10+E.width/2+4,",").concat(L+T+2,"\n          ").concat(s+10-E.width/2-4,",").concat(L+T+2)),x.attr("cx",s-E.width/2+2).attr("cy",L).attr("r",1.5).attr("class","tag-hole")}}(s+=50)>$&&($=s)}))},H=function t(e,r){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=e+Math.abs(e-r)/2;return c>5?i:D.every((function(t){return Math.abs(t-i)>=10}))?(D.push(i),i):t(e,r-Math.abs(e-r)/5,c+1)},z=function(t,e,r,c){var i,n=G[e.id],a=G[r.id],s=function(t,e,r){return Object.keys(r).filter((function(c){return r[c].branch===e.branch&&r[c].seq>t.seq&&r[c].seq<e.seq})).length>0}(e,r,c),o="",l="",h=0,m=0,u=N[r.branch].index;if(s){o="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",h=10,m=10,u=N[r.branch].index;var y=n.y<a.y?H(n.y,a.y):H(a.y,n.y);i=n.y<a.y?"M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(y-h," ").concat(o," ").concat(n.x+m," ").concat(y," L ").concat(a.x-h," ").concat(y," ").concat(l," ").concat(a.x," ").concat(y+m," L ").concat(a.x," ").concat(a.y):"M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(y+h," ").concat(l," ").concat(n.x+m," ").concat(y," L ").concat(a.x-h," ").concat(y," ").concat(o," ").concat(a.x," ").concat(y-m," L ").concat(a.x," ").concat(a.y)}else n.y<a.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=N[r.branch].index,i="M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(a.y-h," ").concat(o," ").concat(n.x+m," ").concat(a.y," L ").concat(a.x," ").concat(a.y)),n.y>a.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=N[e.branch].index,i="M ".concat(n.x," ").concat(n.y," L ").concat(a.x-h," ").concat(n.y," ").concat(o," ").concat(a.x," ").concat(n.y-m," L ").concat(a.x," ").concat(a.y)),n.y===a.y&&(u=N[e.branch].index,i="M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(a.y-h," ").concat(o," ").concat(n.x+m," ").concat(a.y," L ").concat(a.x," ").concat(a.y));t.append("path").attr("d",i).attr("class","arrow arrow"+u%8)},j=function(t,e){var r=(0,a.q)().gitGraph,i=t.append("g");e.forEach((function(t,e){var n=e%8,a=N[t.name].pos,s=i.append("line");s.attr("x1",0),s.attr("y1",a),s.attr("x2",$),s.attr("y2",a),s.attr("class","branch branch"+n),D.push(a);var o=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","text"),r=[];r="string"===typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(t)?t:[];var i,n=(0,c.Z)(r);try{for(n.s();!(i=n.n()).done;){var a=i.value,s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),s.setAttribute("dy","1em"),s.setAttribute("x","0"),s.setAttribute("class","row"),s.textContent=a.trim(),e.appendChild(s)}}catch(o){n.e(o)}finally{n.f()}return e}(t.name),l=i.insert("rect"),h=i.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+n);h.node().appendChild(o);var m=o.getBBox();l.attr("class","branchLabelBkg label"+n).attr("rx",4).attr("ry",4).attr("x",-m.width-4-(!0===r.rotateCommitLabel?30:0)).attr("y",-m.height/2+8).attr("width",m.width+18).attr("height",m.height+4),h.attr("transform","translate("+(-m.width-14-(!0===r.rotateCommitLabel?30:0))+", "+(a-m.height/2-1)+")"),l.attr("transform","translate(-19, "+(a-m.height/2)+")")}))},q={parser:m,db:I,renderer:{draw:function(t,e,r,c){var i;N={},G={},O={},$=0,D=[];var s=(0,a.q)(),o=s.gitGraph;n.l.debug("in gitgraph renderer",t+"\n","id:",e,r),O=c.db.getCommits();var h=c.db.getBranchesAsObjArray(),m=0;h.forEach((function(t,e){N[t.name]={pos:m,index:e},m+=50+(o.rotateCommitLabel?40:0)}));var u=(0,l.Ys)('[id="'.concat(e,'"]'));B(u,O,!1),o.showBranches&&j(u,h),function(t,e){var r=t.append("g").attr("class","commit-arrows");Object.keys(e).forEach((function(t){var c=e[t];c.parents&&c.parents.length>0&&c.parents.forEach((function(t){z(r,e[t],c,e)}))}))}(u,O),B(u,O,!0),a.u.insertTitle(u,"gitTitleText",o.titleTopMargin,c.db.getDiagramTitle()),(0,a.s)(void 0,u,o.diagramPadding,null!==(i=o.useMaxWidth)&&void 0!==i?i:s.useMaxWidth)}},styles:function(t){return"\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ".concat([0,1,2,3,4,5,6,7].map((function(e){return"\n        .branch-label".concat(e," { fill: ").concat(t["gitBranchLabel"+e],"; }\n        .commit").concat(e," { stroke: ").concat(t["git"+e],"; fill: ").concat(t["git"+e],"; }\n        .commit-highlight").concat(e," { stroke: ").concat(t["gitInv"+e],"; fill: ").concat(t["gitInv"+e],"; }\n        .label").concat(e,"  { fill: ").concat(t["git"+e],"; }\n        .arrow").concat(e," { stroke: ").concat(t["git"+e],"; }\n        ")})).join("\n"),"\n\n  .branch {\n    stroke-width: 1;\n    stroke: ").concat(t.lineColor,";\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ").concat(t.commitLabelFontSize,"; fill: ").concat(t.commitLabelColor,";}\n  .commit-label-bkg { font-size: ").concat(t.commitLabelFontSize,"; fill: ").concat(t.commitLabelBackground,"; opacity: 0.5; }\n  .tag-label { font-size: ").concat(t.tagLabelFontSize,"; fill: ").concat(t.tagLabelColor,";}\n  .tag-label-bkg { fill: ").concat(t.tagLabelBackground,"; stroke: ").concat(t.tagLabelBorder,"; }\n  .tag-hole { fill: ").concat(t.textColor,"; }\n\n  .commit-merge {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n  }\n  .commit-reverse {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ").concat(t.textColor,";\n  }\n  }\n")}}}}]);
//# sourceMappingURL=678.560aa5d5.chunk.js.map