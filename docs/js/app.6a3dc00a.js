(function(t){function e(e){for(var a,i,r=e[0],n=e[1],c=e[2],d=0,v=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&v.push(l[i][0]),l[i]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);p&&p(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,r=1;r<s.length;r++){var n=s[r];0!==l[n]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},l={app:0},o=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/wma-soap-notes/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=n;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"03b4":function(t,e,s){t.exports=s.p+"img/bob.646bcbe4.png"},5697:function(t,e,s){t.exports=s.p+"img/wildmed-logo.a2b0e3cf.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app h-full w-full"}},[a("div",{staticClass:"grid col col--12 px24 py24"},[a("div",{staticClass:"col col--2"},[a("img",{attrs:{src:s("5697"),alt:"Wilderness Medical Associates International"}}),a("div",{staticClass:"flex-parent flex-parent--center-main pt12"},[a("button",{staticClass:"btn round flex-child",staticStyle:{"background-color":"#78a22e"},on:{click:t.exporter}},[t._v("Save PDF")])])]),a("div",{staticClass:"grid col col--10"},[a("div",{staticClass:"col col--6 px6 pb6 border border--gray-light"},[a("label",{staticClass:"txt-bold"},[t._v("Name:")]),a("input",{staticClass:"input",attrs:{placeholder:"John Smith"},domProps:{textContent:t._s(t.name)}})]),a("div",{staticClass:"col col--6 px6 pb6 border-t border-r border-b border--gray-light"},[a("label",{staticClass:"txt-bold"},[t._v("Sex:")]),a("input",{staticClass:"input",attrs:{placeholder:"Female"},domProps:{textContent:t._s(t.sex)}})]),a("div",{staticClass:"col col--4 px6 pb6 border-b border-l border-r border--gray-light"},[a("label",{staticClass:"txt-bold"},[t._v("Age:")]),a("input",{staticClass:"input",attrs:{placeholder:"63"},domProps:{textContent:t._s(t.age)}})]),a("div",{staticClass:"col col--4 px6 pb6 border-r border-b border--gray-light"},[a("label",{staticClass:"txt-bold"},[t._v("Birthdate:")]),a("input",{staticClass:"input",attrs:{placeholder:"DD/MM/YYYY"},domProps:{textContent:t._s(t.birthdate)}})]),a("div",{staticClass:"col col--4 grid px6 pb6 border-r border-b border--gray-light"},[a("div",{staticClass:"col col--9"},[a("label",{staticClass:"txt-bold"},[t._v("Weight:")]),a("input",{staticClass:"input",attrs:{placeholder:"120"},domProps:{textContent:t._s(t.weight)}})]),a("div",{staticClass:"col col--3 pl6 pt12"},[a("label",{staticClass:"txt-s radio-container ml6"},[a("input",{attrs:{name:"radio-basic",type:"radio"},domProps:{textContent:t._s(t.unit)}}),a("div",{staticClass:"radio radio--s-label mr6"}),t._v("kg ")]),a("label",{staticClass:"txt-s radio-container ml6"},[a("input",{attrs:{name:"radio-basic",type:"radio"},domProps:{textContent:t._s(t.unit)}}),a("div",{staticClass:"radio radio--s-label mr6"}),t._v("lbs ")])])]),a("div",{staticClass:"col col--6 px6 pb6 border-l border-r border--gray-light"},[a("label",{staticClass:"txt-bold"},[t._v("Emergency Contact:")]),a("input",{staticClass:"input",domProps:{textContent:t._s(t.emergencycontact)}})]),a("div",{staticClass:"col col--6 px6 pb6 border-r border--gray-light"},[a("label",{staticClass:"txt-bold"},[t._v("Phone:")]),a("input",{staticClass:"input",attrs:{placeholder:"###-###-####"},domProps:{textContent:t._s(t.phone)}})])]),a("div",{staticClass:"col col--12 grid px6 pb6 border border--gray-light"},[a("div",{staticClass:"col col--12 px6"},[a("label",{staticClass:"txt-bold"},[t._v("Scene:")]),a("textarea",{staticClass:"textarea",domProps:{textContent:t._s(t.scene)}})]),a("div",{staticClass:"col col--5 px6 pb6"},[t._m(0),a("textarea",{staticClass:"textarea",domProps:{textContent:t._s(t.symptoms)}})]),a("div",{staticClass:"col col--3 px6 pb6"},[t._m(1),a("textarea",{staticClass:"textarea",domProps:{textContent:t._s(t.allergies)}})]),a("div",{staticClass:"col col--4 px6 pb6"},[t._m(2),a("textarea",{staticClass:"textarea",domProps:{textContent:t._s(t.medications)}})]),a("div",{staticClass:"col col--5 px6 pb6"},[t._m(3),a("textarea",{staticClass:"textarea",domProps:{textContent:t._s(t.pertinenthistory)}})]),a("div",{staticClass:"col col--3 px6 pb6"},[t._m(4),a("textarea",{staticClass:"textarea",domProps:{textContent:t._s(t.lastinsouts)}})]),a("div",{staticClass:"col col--4 px6 pb6"},[t._m(5),a("textarea",{staticClass:"textarea",domProps:{textContent:t._s(t.events)}})])]),a("div",{staticClass:"col col--12 grid px6 pb6 border-l border-r border-b border--gray-light"},[a("div",{staticClass:"col col--12"},[a("label",{staticClass:"txt-bold"},[t._v("Physical Exam:")]),a("textarea",{staticClass:"textarea",domProps:{textContent:t._s(t.physicalexam)}})])]),a("div",{staticClass:"col col--12 grid px6 pb6 border-l border-r border-b border--gray-light",staticStyle:{"align-items":"flex-start"}},[a("div",{staticClass:"col col--8 grid"},[t._m(6),t._l(t.vitals,(function(e,s){return a("div",{key:s,staticClass:"col grid col--12 pt6"},[a("div",{staticClass:"col col--1 px3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"v.time"}],staticClass:"input",domProps:{value:e.time},on:{input:function(s){s.target.composing||t.$set(e,"time",s.target.value)}}})]),a("div",{staticClass:"col col--2 px3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.pulse,expression:"v.pulse"}],staticClass:"input",domProps:{value:e.pulse},on:{input:function(s){s.target.composing||t.$set(e,"pulse",s.target.value)}}})]),a("div",{staticClass:"col col--2 px3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.resp,expression:"v.resp"}],staticClass:"input",domProps:{value:e.resp},on:{input:function(s){s.target.composing||t.$set(e,"resp",s.target.value)}}})]),a("div",{staticClass:"col col--1 px3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.bp,expression:"v.bp"}],staticClass:"input",domProps:{value:e.bp},on:{input:function(s){s.target.composing||t.$set(e,"bp",s.target.value)}}})]),a("div",{staticClass:"col col--3 px3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.skin,expression:"v.skin"}],staticClass:"input",domProps:{value:e.skin},on:{input:function(s){s.target.composing||t.$set(e,"skin",s.target.value)}}})]),a("div",{staticClass:"col col--1 px3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.temp,expression:"v.temp"}],staticClass:"input",domProps:{value:e.temp},on:{input:function(s){s.target.composing||t.$set(e,"temp",s.target.value)}}})]),a("div",{staticClass:"col col--2 px3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.avpu,expression:"v.avpu"}],staticClass:"input",domProps:{value:e.avpu},on:{input:function(s){s.target.composing||t.$set(e,"avpu",s.target.value)}}})])])})),a("div",{staticClass:"col col--12 pt12"},[a("button",{staticClass:"btn btn--stroke color-gray color-green-on-hover round fr",on:{click:function(e){t.vitals.push(JSON.parse(t.vital))}}},[t._v("Add Vital")])])],2),t._m(7)]),a("div",{staticClass:"col col--12 grid pb6 border-l border-r border-b border--gray-light"},[a("div",{staticClass:"col col--12 bg-black color-white align-center"},[t._v("ASSESSMENT AND TREATMENT PLAN")]),a("div",{staticClass:"col col--4 bg-black color-white align-center"},[t._v("A = Assessment (Problem List)")]),a("div",{staticClass:"col col--4 bg-black color-white align-center"},[t._v("A' = Anticipated Problems")]),a("div",{staticClass:"col col--4 bg-black color-white align-center"},[t._v("P = Treatment Plan")]),t._l(t.assessments,(function(e,s){return a("div",{key:s,staticClass:"col col--12 grid py12 pt6"},[a("div",{staticClass:"col col--4 px6"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.assessment,expression:"a.assessment"}],staticClass:"textarea",domProps:{value:e.assessment},on:{input:function(s){s.target.composing||t.$set(e,"assessment",s.target.value)}}})]),a("div",{staticClass:"col col--4 px6"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.anticipated,expression:"a.anticipated"}],staticClass:"textarea",domProps:{value:e.anticipated},on:{input:function(s){s.target.composing||t.$set(e,"anticipated",s.target.value)}}})]),a("div",{staticClass:"col col--4 px6"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.plan,expression:"a.plan"}],staticClass:"textarea",domProps:{value:e.plan},on:{input:function(s){s.target.composing||t.$set(e,"plan",s.target.value)}}})])])})),a("div",{staticClass:"col col--12 pt12"},[a("button",{staticClass:"btn btn--stroke color-gray color-green-on-hover round fr",on:{click:function(e){t.assessments.push(JSON.parse(t.assessment))}}},[t._v("Add Assessment")])])],2),a("div",{staticClass:"col col--12 grid pb6 border-l border-r border-b border--gray-light"},[a("div",{staticClass:"col col--12 bg-black color-white align-center"},[t._v("ADDITIONAL NOTES")]),a("div",{staticClass:"col col--12 px6"},[a("textarea",{staticClass:"textarea",domProps:{textContent:t._s(t.additionalnotes)}})])]),t._m(8)])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",[s("span",{staticClass:"txt-bold"},[t._v("S")]),t._v("ymptoms:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",[s("span",{staticClass:"txt-bold"},[t._v("A")]),t._v("llergies:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",[s("span",{staticClass:"txt-bold"},[t._v("M")]),t._v("edications:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",[s("span",{staticClass:"txt-bold"},[t._v("P")]),t._v("ertinent History:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",[s("span",{staticClass:"txt-bold"},[t._v("L")]),t._v("ast Ins/Outs:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",[s("span",{staticClass:"txt-bold"},[t._v("E")]),t._v("vents:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col grid grid col--12 txt-bold"},[s("div",{staticClass:"col col--1 align-center"},[t._v("Time")]),s("div",{staticClass:"col col--2 align-center"},[t._v("Pulse")]),s("div",{staticClass:"col col--2 align-center"},[t._v("Resp.")]),s("div",{staticClass:"col col--1 align-center"},[t._v("BP")]),s("div",{staticClass:"col col--3 align-center"},[t._v("Skin")]),s("div",{staticClass:"col col--1 align-center"},[t._v("Temp")]),s("div",{staticClass:"col col--2 align-center"},[t._v("AVPU")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col col--4"},[a("img",{attrs:{src:s("03b4"),alt:"Physical Exam"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col col--12 grid pb6"},[s("div",{staticClass:"col col--4 align-center"},[t._v("Face any challenge, anywhere.")]),s("div",{staticClass:"col col--4 align-center"},[t._v("2021 Wilderness Medical Associates International")]),s("div",{staticClass:"col col--4 align-center"},[s("a",{attrs:{href:"https://www.wildmed.com"}},[t._v("www.wildmed.com")])])])}],i={name:"App",data:function(){return{name:"",sex:"",age:"",birthdate:"",weight:"lbs",units:"",emergencycontact:"",phone:"",scene:"",symptoms:"",allergies:"",medications:"",pertinenthistory:"",lastinsouts:"",events:"",vitals:[],physicalexam:"",additionalnotes:"",assessments:[],vital:JSON.stringify({time:"",pulse:"",resp:"",bp:"",skin:"",temp:"",avpu:""}),assessment:JSON.stringify({assessment:"",anticipated:"",plan:""})}},mounted:function(){this.vitals.push(JSON.parse(this.vital)),this.assessments.push(JSON.parse(this.assessment))},methods:{exporter:function(){console.error("EXPORT")}}},r=i,n=s("2877"),c=Object(n["a"])(r,l,o,!1,null,null,null),p=c.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(p)}}).$mount("#app")}});
//# sourceMappingURL=app.6a3dc00a.js.map