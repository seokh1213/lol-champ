(this["webpackJsonplol-champ"]=this["webpackJsonplol-champ"]||[]).push([[0],{22:function(e,n,t){e.exports=t(30)},30:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(12),i=t.n(o),c=t(8),l=t.n(c),u=t(13),s=t(14),d=t(15),m=t(20),f=t(21),p=t(1),h=function(e,n){return"http://ddragon.leagueoflegends.com/cdn/".concat(e,"/img/champion/").concat(n,".png")},g=function(e,n){return"http://ddragon.leagueoflegends.com/cdn/".concat(e,"/img/spell/").concat(n,".png")};function b(e,n){return fetch(e).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return console.log(e)}))}function v(e,n){return b((t=e,r=n,"https://ddragon.leagueoflegends.com/cdn/".concat(t,"/data/").concat(r,"/champion.json")),(function(e){return e.data})).then((function(e){return Object.values(e).sort((function(e,n){return e.name<n.name?-1:e.name>n.name?1:0}))}));var t,r}var x=t(2);function y(){var e=Object(p.a)(["\n  border: 0;\n  background-color: #f8f9fa;\n  &:active,\n  &:focus {\n    outline: 0;\n  }\n"]);return y=function(){return e},e}function E(){var e=Object(p.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ",";\n"]);return E=function(){return e},e}function w(){var e=Object(p.a)(["\n  padding: 10px;\n  width: 600px;\n  display: flex;\n  align-items: baseline;\n  margin: 0 auto;\n"]);return w=function(){return e},e}var k=x.b.div(w()),j=x.b.div(E(),(function(e){return e.backgroundColor?e.backgroundColor:"black"})),O=x.b.select(y());function C(e){var n=e.version,t=void 0===n?"10.8.1":n,r=e.lang,o=e.selectHandler;return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,null,a.a.createElement("div",null,"Cooldown"),a.a.createElement("div",{style:{flex:"1"}}),a.a.createElement("div",{style:{fontSize:"0.6em"}},"v",t),a.a.createElement(O,{defaultValue:r,onChange:function(e){return o(e.target.value)}},a.a.createElement("option",{value:"ko_KR"},"\ud55c\uad6d\uc5b4"),a.a.createElement("option",{value:"en_US"},"Eng"))),a.a.createElement(j,null))}var S=t(3),z=t(7);function _(){var e=Object(p.a)(["\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: black;\n  border: 0;\n  &:hover {\n    box-shadow: 1px 1px 10px #3c110d;\n  }\n  margin-bottom: 3px;\n  box-sizing: border-box;\n  ","\n"]);return _=function(){return e},e}function L(){var e=Object(p.a)(["\n  display: flex;\n  height: fit-content;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n"]);return L=function(){return e},e}var I=x.b.div(L()),W=x.b.img(_(),(function(e){return e.selected?"border:4px solid #2ecc71":""}));function B(e){var n=e.addChampion,t=e.data,r=e.name,o=e.thumbnailSrc,i=e.selected;return a.a.createElement(I,null,a.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return n(t,i)}},a.a.createElement(W,{selected:i,src:o,alt:r})),a.a.createElement("div",{style:{fontSize:"0.8em",whiteSpace:"nowrap"}},r))}function N(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  overflow: auto;\n  box-sizing: border-box;\n  width: 100%;\n  height: 420px;\n  background-color: rgba(255, 255, 255, 0.96);\n  border-radius: 5px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-top: 1px solid #c8cacb;\n"]);return N=function(){return e},e}function R(){var e=Object(p.a)(["\n  box-sizing: border-box;\n  border-radius: 5px;\n  display: block;\n  width: 100%;\n  padding: 10px;\n  height: 40px;\n  border: 0;\n  caret-color: gray;\n  font-size: 1em;\n  ","\n\n  &:focus {\n    outline: none;\n  }\n"]);return R=function(){return e},e}function F(){var e=Object(p.a)(["\n  margin-top: 30px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);\n  margin-bottom: 15px;\n  position: relative;\n"]);return F=function(){return e},e}var H=x.b.div(F()),q=x.b.input(R(),(function(e){return e.clicked?"border-bottom-left-radius: 0;border-bottom-right-radius: 0;":""})),J=x.b.div(N());function K(e){var n=e.championList,t=e.selectedChampions,o=e.setChampions,i=Object(r.useState)(""),c=Object(S.a)(i,2),l=c[0],u=c[1],s=Object(r.useState)(!0),d=Object(S.a)(s,2),m=d[0],f=d[1];document.body.onclick=function(e){e.path.filter((function(e){return"string"===typeof e.className&&e.className.includes(H.styledComponentId)}))[0]||(f(!1),document.body.onclick=null)};var p=function(e,n){o(n?t.filter((function(n){return n!==e})):[].concat(Object(z.a)(t),[e]))},g=function(e,n){return a.a.createElement(B,{addChampion:p,data:e,key:n,name:e.name,selected:t.includes(e),thumbnailSrc:h(e.version,e.id)})};return a.a.createElement(H,{onClick:function(){m||(document.body.onclick=function(e){e.path.filter((function(e){return"string"===typeof e.className&&e.className.includes(H.styledComponentId)}))[0]||(f(!1),document.body.onclick=null)}),f(!0)}},a.a.createElement(q,{type:"text",placeholder:"Champion Name",autoComplete:"off",value:l,onChange:function(e){return u(e.target.value)},clicked:m}),m?n?a.a.createElement(J,null,""!==l?function(e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))}(l).map(g):[].concat(Object(z.a)(t),Object(z.a)(n.filter((function(e){return!t.includes(e)})))).map(g)):"Sorry not yet loading.":"")}var Q=t(19),U=function(e){var n=e.style,t=e.handler;return a.a.createElement("div",{onClick:t,style:n},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11.253",height:"21.776",viewBox:"0 0 11.253 21.776"},a.a.createElement("g",{id:"\uadf8\ub8f9_73",dataname:"\uadf8\ub8f9 73",transform:"translate(1439.877 325.913) rotate(180)"},a.a.createElement("line",{id:"\uc120_46",dataname:"\uc120 46",y1:"10.585",x2:"10.103",transform:"translate(1439.234 325.567) rotate(180)",fill:"none",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"}),a.a.createElement("line",{id:"\uc120_47",dataname:"\uc120 47",x2:"14.915",transform:"translate(1439.523 315.036) rotate(-135)",fill:"none",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"}))))},V=function(e){var n=e.style,t=e.handler;return a.a.createElement("svg",{onClick:t,style:n,xmlns:"http://www.w3.org/2000/svg",width:"11.253",height:"21.776",viewBox:"0 0 11.253 21.776"},a.a.createElement("g",{id:"\uadf8\ub8f9_72",dataname:"\uadf8\ub8f9 72",transform:"translate(-1428.624 -304.136)"},a.a.createElement("line",{id:"\uc120_46",dataname:"\uc120 46",y1:"10.585",x2:"10.103",transform:"translate(1439.234 325.567) rotate(180)",fill:"none",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"}),a.a.createElement("line",{id:"\uc120_47",dataname:"\uc120 47",x2:"14.915",transform:"translate(1439.523 315.036) rotate(-135)",fill:"none",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1"})))};function A(){var e=Object(p.a)(["\n  font-size: 0.6em;\n  color: #676869;\n  text-align: right;\n  padding: 2px;\n  text-transform: capitalize;\n"]);return A=function(){return e},e}function D(){var e=Object(p.a)(["\n  width: 100%;\n  height: 166px;\n  border-radius: 5px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n"]);return D=function(){return e},e}var G=x.b.img(D()),M=x.b.div(A());function P(e){var n=e.src,t=e.name,r=e.changeHandler;return a.a.createElement("div",{style:{position:"relative",marginBottom:"5px"}},a.a.createElement(G,{src:n,alt:t}),a.a.createElement(M,null,t),a.a.createElement(U,{handler:function(){return r(-1)},style:{position:"absolute",top:"70px",left:"10px",cursor:"pointer"}}),a.a.createElement(V,{handler:function(){return r(1)},style:{position:"absolute",top:"70px",right:"10px",cursor:"pointer"}}))}function T(){var e=Object(p.a)(["\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  background-color: black;\n  border: 0;\n  margin-bottom: 5px;\n  box-sizing: border-box;\n"]);return T=function(){return e},e}function X(){var e=Object(p.a)(["\n  display: flex;\n  height: fit-content;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n"]);return X=function(){return e},e}var Y=x.b.div(X()),Z=x.b.img(T());function $(e){var n=e.name,t=e.squareSrc;return a.a.createElement(Y,null,a.a.createElement(Z,{src:t,alt:n}),a.a.createElement("div",{style:{fontSize:"0.8em",whiteSpace:"nowrap",color:"#676869"}},n))}function ee(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  flex: 1;\n  place-items: center;\n  color: #676869;\n  row-gap: 4px;\n  font-size: 0.9em;\n"]);return ee=function(){return e},e}var ne=x.b.div(ee()),te=function(e){var n=e.src,t=e.rule;return a.a.createElement("div",{style:{position:"relative",width:t?"30px":"20px",height:t?"30px":"20px"}},a.a.createElement("img",{style:{width:"100%",height:"100%",borderRadius:"3px"},src:n,alt:t||"passive"}),t?a.a.createElement("div",{style:{borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",bottom:"0",right:"0",width:t?"15px":"10px",height:t?"15px":"10px",backgroundColor:"rgba(0,0,0,.7)",color:"white",fontSize:"0.6em"}},t):"")},re=function(e){var n=e.lv,t=e.cooldown;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{fontSize:"0.7em",fontWeight:"400"}},n,"lv"),t.map((function(e,n){return a.a.createElement("div",{style:{color:"#373839"},key:n},""!==e?"".concat(e,"s"):"")})))};function ae(e){for(var n,t,r=e.championInfo,o=e.version,i=r.spells.reduce((function(e,n){return e>n.maxrank?e:n.maxrank}),0),c=[],l=function(e){var n=r.spells.map((function(n){return void 0!==n.cooldown[e]?n.cooldown[e]:""}));c.push(a.a.createElement(re,{key:e,lv:e+1,cooldown:n}))},u=0;u<i;u++)l(u);return a.a.createElement(ne,null,a.a.createElement(te,{src:(n=o,t=r.passive.image.full,"http://ddragon.leagueoflegends.com/cdn/".concat(n,"/img/passive/").concat(t))}),r.spells.map((function(e,n){return a.a.createElement(te,{key:n,src:g(o,e.id),rule:["Q","W","E","R"][n]})})),c)}function oe(){var e=Object(p.a)(["\n  margin: 10px;\n  width: calc(100% - 20px);\n  background-color: white;\n  border: 1px solid #bbb;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n"]);return oe=function(){return e},e}var ie=x.b.div(oe()),ce=function(){return a.a.createElement(Q.a,{viewBox:"0 0 400 350",speed:3},a.a.createElement("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"180"}),a.a.createElement("rect",{x:"300",y:"190",rx:"2",ry:"2",width:"100",height:"15"}),a.a.createElement("rect",{x:"20",y:"220",rx:"10",ry:"10",width:"120",height:"120"}),a.a.createElement("rect",{x:"20",y:"220",rx:"5",ry:"5",width:"120",height:"120"}),a.a.createElement("rect",{x:"180",y:"220",rx:"5",ry:"5",width:"40",height:"40"}),a.a.createElement("rect",{x:"230",y:"220",rx:"5",ry:"5",width:"40",height:"40"}),a.a.createElement("rect",{x:"280",y:"220",rx:"5",ry:"5",width:"40",height:"40"}),a.a.createElement("rect",{x:"330",y:"220",rx:"5",ry:"5",width:"40",height:"40"}),a.a.createElement("rect",{x:"180",y:"280",rx:"5",ry:"5",width:"190",height:"60"}))};function le(e){var n=e.lang,t=e.champion,o=Object(r.useState)(null),i=Object(S.a)(o,2),c=i[0],l=i[1],u=Object(r.useState)(1),s=Object(S.a)(u,2),d=s[0],m=s[1];Object(r.useEffect)((function(){(function(e,n,t){return b((r=n,a=t,"https://ddragon.leagueoflegends.com/cdn/".concat(e,"/data/").concat(r,"/champion/").concat(a,".json")),(function(e){return e.data[t]}));var r,a})(t.version,n,t.id).then((function(e){return l(e)}))}),[t.version,n,t.id]);var f;return console.log(c),a.a.createElement(ie,null,c?a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{src:(f="".concat(c.id,"_").concat(c.skins[d].num),"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(f,".jpg")),name:"default"===c.skins[d].name?c.name:c.skins[d].name,changeHandler:function(e){var n=d+e;n=-1===(n=n===c.skins.length?0:n)?c.skins.length-1:n,console.log("Splash Image : ",n),m(n)}}),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement($,{name:c.name,squareSrc:h(t.version,t.id)}),a.a.createElement(ae,{championInfo:c,version:t.version}))):a.a.createElement(ce,null))}function ue(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n"]);return ue=function(){return e},e}function se(){var e=Object(p.a)(["\n  width: 600px;\n  display: flex;\n  margin: 0 auto;\n  flex-direction: column;\n"]);return se=function(){return e},e}var de=x.b.div(se()),me=x.b.div(ue());function fe(e){var n=e.championList,t=e.lang,o=Object(r.useState)([]),i=Object(S.a)(o,2),c=i[0],l=i[1];return a.a.createElement(de,null,a.a.createElement(K,{selectedChampions:c,setChampions:l,championList:n}),a.a.createElement(me,null,c.map((function(e,n){return a.a.createElement(le,{lang:t,key:n,champion:e})}))))}function pe(){var e=Object(p.a)(["\n\n  #root{\n    \n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items:center;\n  }\n"]);return pe=function(){return e},e}var he=Object(x.a)(pe()),ge=function(e){Object(f.a)(t,e);var n=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).state={lang:"ko_KR",version:"10.8.1",championList:null,selectedChampions:[]},e.init(),e}return Object(d.a)(t,[{key:"init",value:function(){var e=Object(u.a)(l.a.mark((function e(){var n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("https://ddragon.leagueoflegends.com/api/versions.json",(function(e){return e[0]})).then((function(e){return n.setState({version:e})}));case 2:v(this.state.version,this.state.lang).then((function(e){return n.setState({championList:e})}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(he,null),a.a.createElement(C,{version:this.state.version,lang:this.state.lang,selectHandler:function(n){e.setState({lang:n}),e.init()}}),a.a.createElement(fe,{lang:this.state.lang,championList:this.state.championList}))}}]),t}(r.Component);i.a.render(a.a.createElement(ge,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e5e34787.chunk.js.map