(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1Y/n":function(t,e,n){var s=n("HAuM"),r=n("ewvW"),i=n("RK3t"),o=n("UMSQ"),a=function(t){return function(e,n,a,l){s(n);var c=r(e),u=i(c),f=o(c.length),p=t?f-1:0,h=t?-1:1;if(a<2)for(;;){if(p in u){l=u[p],p+=h;break}if(p+=h,t?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:f>p;p+=h)p in u&&(l=n(l,u[p],p,c));return l}};t.exports={left:a(!1),right:a(!0)}},"90QQ":function(t,e,n){"use strict";n("HKG8")},E9XD:function(t,e,n){"use strict";var s=n("I+eb"),r=n("1Y/n").left,i=n("pkCn"),o=n("rkAj"),a=n("LQDL"),l=n("YF1G"),c=i("reduce"),u=o("reduce",{1:0});s({target:"Array",proto:!0,forced:!c||!u||!l&&a>79&&a<83},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},HKG8:function(t,e,n){},Rfxz:function(t,e,n){"use strict";var s=n("I+eb"),r=n("tycR").some,i=n("pkCn"),o=n("rkAj"),a=i("some"),l=o("some");s({target:"Array",proto:!0,forced:!a||!l},{some:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},brCV:function(t,e,n){},"g/Tq":function(t,e,n){"use strict";n.r(e);n("piMb"),n("2B1R"),n("E9XD"),n("Rfxz"),n("rePB");class s extends Map{constructor(t,e=a){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),null!=t)for(const[e,n]of t)this.set(e,n)}get(t){return super.get(r(this,t))}has(t){return super.has(r(this,t))}set(t,e){return super.set(i(this,t),e)}delete(t){return super.delete(o(this,t))}}Set;function r({_intern:t,_key:e},n){const s=e(n);return t.has(s)?t.get(s):n}function i({_intern:t,_key:e},n){const s=e(n);return t.has(s)?t.get(s):(t.set(s,n),n)}function o({_intern:t,_key:e},n){const s=e(n);return t.has(s)&&(n=t.get(n),t.delete(s)),n}function a(t){return null!==t&&"object"==typeof t?t.valueOf():t}var l=function(t){return t};function c(t,e,n,r){return function t(i,o){if(o>=r.length)return n(i);const a=new s,l=r[o++];let c=-1;for(const t of i){const e=l(t,++c,i),n=a.get(e);n?n.push(t):a.set(e,[t])}for(const[e,n]of a)a.set(e,t(n,o));return e(a)}(t,0)}n("brCV");var u={name:"PresentationInfoBlock",props:{presentationInfo:Object},data:function(){return{showAbstract:!1,abstractHeight:0,abstractWidth:0,noShare:[]}},methods:{handleResize:function(t){(t.width!==this.abstractWidth||this.abstractHeight!==t.height&&window.innerWidth>=768)&&(this.abstractHeight=t.height)}},computed:{abstractToggleLanguage:function(){return this.showAbstract?"\n          <span class='text-red-700'>Abstract </span>\n            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 16' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather stroke-current text-red-700'>\n            <polyline points='18 15 12 9 6 15'></polyline>\n          </svg>":'\n          <span class=\'text-red-700\'>Abstract</span>\n          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather stroke-current text-red-700"><polyline points="6 9 12 15 18 9"></polyline></svg>'}},mounted:function(){this.abstractHeight=this.$el.getElementsByClassName("abstract")[0].scrollHeight,this.abstractWidth=this.$el.getElementsByClassName("abstract")[0].scrollWidth}},f=(n("90QQ"),n("KHd+")),p={components:{PresentationInfoBlock:Object(f.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return""===t.presentationInfo.title?n("div"):n("div",{staticClass:"relative z-0"},[n("resize-observer",{on:{notify:t.handleResize}}),"Break"!==t.presentationInfo.type?n("h4",{staticClass:"text-md mt-6 font-light text-gray-800"},[t._v("\n    "+t._s(t.presentationInfo.startTime)+"\n  ")]):t._e(),"Break"!==t.presentationInfo.type?n("h4",{staticClass:"text-lg mt-1"},[t._v("\n    "+t._s(t.presentationInfo.title)+"\n  ")]):t._e(),this.noShare.includes(t.presentationInfo.title)?n("p",{staticClass:"text-md mt-1 font-light italic text-gray-700"},[t._v("\n    Presenter was unable to allow recording or sharing of presentation materials\n  ")]):t._e(),n("div",{staticClass:"my-2 flex flex-row flex-wrap"},[""!==t.presentationInfo.YouTubeLink?n("a",{staticClass:"link mr-4 mb-2",attrs:{href:t.presentationInfo.YouTubeLink}},[t._v("View recording on YouTube")]):t._e(),["Break"].includes(t.presentationInfo.type)||""===t.presentationInfo.materialsLink?t._e():n("a",{staticClass:"link mb-2",attrs:{href:t.presentationInfo.materialsLink}},[t._v("Access presentation materials")])]),t._l(t.presentationInfo.presenters.split(", "),(function(e){return n("p",{key:e,staticClass:"text-md mt-1 font-light text-gray-700"},[t._v("\n    "+t._s(e)+"\n  ")])})),t.presentationInfo.abstract?n("button",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"abstract-toggle mt-2 flex flex-row",domProps:{innerHTML:t._s(t.abstractToggleLanguage)},on:{click:function(e){t.showAbstract=!t.showAbstract}}}):t._e(),n("p",{staticClass:"abstract mt-1 text-md whitespace-pre-wrap overflow-hidden max-h-0",class:{"slide-in":t.showAbstract},style:{"--abstract-height":t.abstractHeight+"px"}},[t._v(t._s(t.presentationInfo.abstract))])],2)}),[],!1,null,"0b3e6978",null).exports},metaInfo:{title:"Program"},data:function(){return{program:{},showAbstract:!0}},methods:{formatProgramData:function(){var t=function(t,...e){return c(t,Array.from,l,e)}(this.$page.allProgram.edges.map((function(t){return t.node})),(function(t){return t.day}),(function(t){return t.session}),(function(t){return t.type}));this.program=t.map((function(t){return{day:t[0],sessions:t[1].map((function(t,e){var n=t[1][0];return{id:e,sessionType:n[0],sessionStartTime:n[1][0].startTimeEDT,sessionEndTime:n[1][n[1].length-1].endTimeEDT,presentations:n[1].map((function(t,e){return{id:e,title:t.title,presenters:t.presenters,abstract:t.abstract,startTime:t.startTimeEDT,presentationLength:+t.lengthMin,type:t.type,YouTubeLink:t.YouTubeLink,materialsLink:t.materialsLink}}))}}))}}))},noPresentations:function(t){return!t.presentations.map((function(t){return t.title})).every((function(t){return""==t}))}},mounted:function(){this.formatProgramData()}},h=(n("jDHz"),null),d=Object(f.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("h1",{staticClass:"text-3xl"},[t._v("Program")]),n("p",{staticClass:"mt-4"},[t._v("\n    Sessions will be held online through Zoom and Discord. Information and instructions to join sessions will be sent to registered attendees via email in the week before the symposium, along with links to join workshops for workshop registrants.\n  ")]),n("p",[t._v("\n    Links to presentation materials for short talks, poster presentations, and workshops can be found in the program listing below. You can access a full listing of materials in the "),n("a",{staticClass:"link",attrs:{href:"https://osf.io/pyscb/"}},[t._v("SEDLS 2021 OSF repository")]),t._v(".\n  ")]),n("p",[t._v("\n    Recordings of short talks, with captions, are available in the program listing below. You can access the full list of recordings on the "),n("a",{attrs:{href:"https://youtube.com/playlist?list=PLTC6jPg1N9B5bLUpVeLkQy14GGDMMRTNj"}},[t._v("SEDLS 2021 YouTube playlist")]),t._v(". Workshops and poster presentations were not recorded.\n  ")]),n("p",{staticClass:"mt-4"},[t._v("\n    Attendees are expected to follow the symposium "),n("g-link",{staticClass:"link",attrs:{to:"/code-of-conduct","active-class":"null"}},[t._v("Code of Conduct")]),t._v(" and to be aware of the planning committee's "),n("g-link",{staticClass:"link",attrs:{to:"/accessibility","active-class":"null"}},[t._v("Commitment to Accessibility")]),t._v(".\n  ")],1),n("p",{staticClass:"mt-4 font-bold"},[t._v("All listed times are in Eastern Time (EDT).")]),t._l(t.program,(function(e){return n("div",{key:e.day,staticClass:"mt-4 mb-8"},[n("h2",{staticClass:"mt-4 pl-3 p-2 bg-gray-800 text-2xl text-green-400"},[t._v(t._s(e.day))]),t._l(e.sessions,(function(e){return n("div",{key:e.id,staticClass:"mt-0 py-2 alternate-background border-b-2 border-solid border-gray-800 md:flex md:flex-row"},[n("div",{staticClass:"px-3 md:w-1/5",class:{"md-border-r":"Break"!==e.sessionType}},[n("h3",{staticClass:"text-xl text-gray-800"},[t._v("\n          "+t._s(e.sessionType)+"\n        ")]),n("h3",{staticClass:"mb-1 text-md font-light text-gray-600 md:border-transparent",class:{"sm-border-b":"Break"!==e.sessionType}},[t._v("\n          "+t._s(e.sessionStartTime)+" - "+t._s(e.sessionEndTime)+"\n        ")])]),t.noPresentations(e)?n("div",{staticClass:"md:-mt-5 px-3 md:w-4/5"},t._l(e.presentations,(function(t){return n("PresentationInfoBlock",{key:t.id,attrs:{presentationInfo:t}})})),1):"Break"!=e.sessionType?n("div",{staticClass:"px-3 md:w-4/5 flex items-center"},[n("h3",{staticClass:"py-4 text-xl text-gray-800"},[t._v("Coming soon!")])]):t._e()])}))],2)}))],2)}),[],!1,null,null,null);"function"==typeof h&&h(d);e.default=d.exports},"j00+":function(t,e,n){},jDHz:function(t,e,n){"use strict";n("j00+")},piMb:function(t,e,n){"use strict";var s=n("I+eb"),r=n("tycR").every,i=n("pkCn"),o=n("rkAj"),a=i("every"),l=o("every");s({target:"Array",proto:!0,forced:!a||!l},{every:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);