(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bc3307e"],{"2d3b":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-content",[s("v-container",{attrs:{"fill-height":"","grid-list-md":""}},[s("v-layout",{attrs:{"align-top":"","justify-center":"",row:"","justify-space-between":"","align-center":"","align-content-center":""}},[s("v-flex",{attrs:{md6:""}},[s("img",{staticClass:"mb-5 main-image",attrs:{src:n("746b"),alt:"Vuetify.js"}})]),s("v-flex",{attrs:{md6:""}},[s("h2",{staticClass:"display-2 search-title font-italic"},[e._v("Wyszukaj"),s("br"),e._v("wskazanie")]),s("div",{staticClass:"autocomplete-container"},[s("vue-autosuggest",{staticClass:"mt-4 mb-4",attrs:{suggestions:e.filteredOptions,"section-configs":e.sectionConfigs,"get-suggestion-value":e.getSuggestionClicked,inputProps:{id:"autosuggest__input",onInputChange:this.onInputChange,placeholder:"Wpisz 3 znaki..."}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.suggestion;return[s("span",{staticClass:"my-suggestion-item",class:{disabled:n.item.disabled}},[e._v("\n                "+e._s(n.item.name)+"\n              ")])]}}])}),s("v-icon",[e._v("search")])],1),e._l(e.suggestionsChips,function(t){return s("v-chip",{staticClass:"suggestions-chips",attrs:{label:"",disabled:t.disabled,color:t.color},on:{click:function(n){e.goToSelection(t.name)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])})],2)],1)],1),s("v-snackbar",{attrs:{timeout:5e3},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    Ta opcja jest niedostępna\n  ")])],1)},i=[],o={name:"default-section",props:{section:{type:Object,required:!0},currentIndex:{type:Number,required:!1,default:1/0},updateCurrentIndex:{type:Function,required:!0},searchInput:{type:[String,Number],required:!1,default:""},renderSuggestion:{type:Function,required:!1},normalizeItemFunction:{type:Function,required:!0}},computed:{list:function(){var e=this.section,t=e.limit,n=e.data;return n.length<t&&(t=n.length),n.slice(0,t)},className:function(){return"autosuggest__results_title autosuggest__results_title_"+this.section.name}},methods:{getItemIndex:function(e){return this.section.start_index+e},getItemByIndex:function(e){return this.section.data[e]},getLabelByIndex:function(e){return this.section.data[e]},onMouseEnter:function(e){this.updateCurrentIndex(e.currentTarget.getAttribute("data-suggestion-index"))},onMouseLeave:function(){this.updateCurrentIndex(null)}},render:function(e){var t=this,n=this.section.label?e("li",{class:this.className},this.section.label):"";return e("ul",{attrs:{role:"listbox","aria-labelledby":"autosuggest"}},[n,this.list.map(function(n,s){var i=t.normalizeItemFunction(t.section.name,t.section.type,t.getLabelByIndex(s),n);return e("li",{attrs:{role:"option","data-suggestion-index":t.getItemIndex(s),"data-section-name":t.section.name,id:"autosuggest__results_item-"+t.getItemIndex(s)},key:t.getItemIndex(s),class:{"autosuggest__results_item-highlighted":t.getItemIndex(s)==t.currentIndex,autosuggest__results_item:!0},on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave}},[t.renderSuggestion?t.renderSuggestion(i):t.$scopedSlots.default&&t.$scopedSlots.default({key:s,suggestion:i})])})])}};function u(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function r(e,t){u(e,t)||(e.className+=" "+t)}function a(e,t){e.classList&&e.classList.remove(t)}var c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:e.componentAttrIdAutosuggest}},[n("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],staticClass:"form-control",class:[e.isOpen?"autosuggest__input-open":"",e.inputProps.class],attrs:{type:"text",autocomplete:e.inputProps.autocomplete,role:"combobox","aria-autocomplete":"list","aria-owns":"autosuggest__results","aria-activedescendant":e.isOpen&&null!==e.currentIndex?"autosuggest__results_item-"+e.currentIndex:"","aria-haspopup":e.isOpen?"true":"false","aria-expanded":e.isOpen?"true":"false"},domProps:{value:e.searchInput},on:{keydown:e.handleKeyStroke,input:function(t){t.target.composing||(e.searchInput=t.target.value)}}},"input",e.inputProps,!1),e.listeners)),e._v(" "),n("div",{class:e.componentAttrClassAutosuggestResultsContainer},[e.getSize()>0&&!e.loading?n("div",{class:e.componentAttrClassAutosuggestResults,attrs:{"aria-labelledby":e.componentAttrIdAutosuggest}},[e._t("header"),e._v(" "),e._l(e.computedSections,function(t,s){return n(t.type,{key:e.getSectionRef(s),ref:e.getSectionRef(s),refInFor:!0,tag:"component",attrs:{"normalize-item-function":e.normalizeItem,"render-suggestion":e.renderSuggestion,section:t,"update-current-index":e.updateCurrentIndex,"search-input":e.searchInput},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.suggestion,s=t._key;return[e._t("default",[e._v(" "+e._s(n.item)+" ")],{suggestion:n,index:s})]}}])})}),e._v(" "),e._t("footer")],2):e._e()])])},staticRenderFns:[],name:"Autosuggest",components:{DefaultSection:o},props:{inputProps:{type:Object,required:!0,default:function(){return{id:{type:String,default:"autosuggest__input"},onInputChange:{type:Function,required:!0},initialValue:{type:String,required:!1},onClick:{type:Function,required:!1}}}},limit:{type:Number,required:!1,default:1/0},suggestions:{type:Array,required:!0,default:function(){return[]}},renderSuggestion:{type:Function,required:!1,default:null},getSuggestionValue:{type:Function,required:!1,default:function(e){var t=e.item;return"object"==typeof t&&t.hasOwnProperty("name")?t.name:t}},shouldRenderSuggestions:{type:Function,required:!1,default:function(){return!0}},sectionConfigs:{type:Object,required:!1,default:function(){return{default:{onSelected:null}}}},onSelected:{type:Function,required:!1,default:null},componentAttrIdAutosuggest:{type:String,required:!1,default:"autosuggest"},componentAttrClassAutosuggestResultsContainer:{type:String,required:!1,default:"autosuggest__results-container"},componentAttrClassAutosuggestResults:{type:String,required:!1,default:"autosuggest__results"}},data:function(){return{searchInput:"",searchInputOriginal:null,currentIndex:null,currentItem:null,loading:!1,didSelectFromOptions:!1,computedSections:[],computedSize:0,internal_inputProps:{},defaultInputProps:{name:"q",initialValue:"",autocomplete:"off"},defaultSectionConfig:{name:"default",type:"default-section"},clientXMouseDownInitial:null}},computed:{listeners:function(){var e=this;return Object.assign({},this.$listeners,{focus:function(t){e.$listeners.focus&&e.$listeners.focus(t),e.inputProps.onFocus&&e.onFocus(t)},blur:function(t){e.$listeners.blur&&e.$listeners.blur(t),e.inputProps.onBlur&&e.onBlur(t)},click:function(){e.loading=!1,e.$listeners.click&&e.$listeners.click(e.currentItem),e.inputProps.onClick&&e.onClick(e.currentItem),e.$nextTick(function(){e.ensureItemVisible(e.currentItem,e.currentIndex)})},selected:function(){e.currentItem&&e.sectionConfigs[e.currentItem.name]&&e.sectionConfigs[e.currentItem.name].onSelected?e.sectionConfigs[e.currentItem.name].onSelected(e.currentItem,e.searchInputOriginal):e.sectionConfigs.default.onSelected?e.sectionConfigs.default.onSelected(null,e.searchInputOriginal):e.$listeners.selected?e.$emit("selected",e.currentItem):e.onSelected&&e._onSelected(e.currentItem)}})},isOpen:function(){return this.getSize()>0&&this.shouldRenderSuggestions()&&!this.loading}},watch:{searchInput:function(e,t){this.value=e,this.didSelectFromOptions||(this.searchInputOriginal=this.value,this.currentIndex=null,this.internal_inputProps.onInputChange(e,t))},suggestions:{immediate:!0,handler:function(){var e=this;this.computedSections=[],this.computedSize=0,this.suggestions.forEach(function(t){if(t.data){var n=t.name?t.name:e.defaultSectionConfig.name,s=e.sectionConfigs[n],i=s.type,o=s.limit,u=s.label;o=o||e.limit,i=i||e.defaultSectionConfig.type,o=o||1/0,o=t.data.length<o?t.data.length:o;var r={name:n,label:u=u||t.label,type:i,limit:o,data:t.data,start_index:e.computedSize,end_index:e.computedSize+o-1};e.computedSections.push(r),e.computedSize+=o}},this)}}},created:function(){this.internal_inputProps=Object.assign({},this.defaultInputProps,this.inputProps),this.inputProps.autocomplete=this.internal_inputProps.autocomplete,this.inputProps.name=this.internal_inputProps.name,this.searchInput=this.internal_inputProps.initialValue},mounted:function(){document.addEventListener("mouseup",this.onDocumentMouseUp),document.addEventListener("mousedown",this.onDocumentMouseDown),this.loading=!0},beforeDestroy:function(){document.removeEventListener("mouseup",this.onDocumentMouseUp),document.removeEventListener("mousedown",this.onDocumentMouseDown)},methods:{getSectionRef:function(e){return"computed_section_"+e},getSize:function(){return this.computedSize},getItemByIndex:function(e){var t=!1;if(null===e)return t;for(var n=0;n<this.computedSections.length;n++)if(e>=this.computedSections[n].start_index&&e<=this.computedSections[n].end_index){var s=e-this.computedSections[n].start_index,i=this.$refs["computed_section_"+n][0];if(i){t=this.normalizeItem(this.computedSections[n].name,this.computedSections[n].type,i.getLabelByIndex(s),i.getItemByIndex(s));break}}return t},handleKeyStroke:function(e){var t=e.keyCode;if(!([16,9,18,91,93].indexOf(t)>-1))switch(this.loading=!1,this.didSelectFromOptions=!1,t){case 40:case 38:if(e.preventDefault(),this.isOpen){if(38===t&&null===this.currentIndex)break;var n=40===t?1:-1,s=parseInt(this.currentIndex)+n;this.setCurrentIndex(s,this.getSize(),n),this.didSelectFromOptions=!0,this.getSize()>0&&this.currentIndex>=0?(this.setChangeItem(this.getItemByIndex(this.currentIndex)),this.didSelectFromOptions=!0):-1==this.currentIndex&&(this.currentIndex=null,this.searchInput=this.searchInputOriginal,e.preventDefault())}break;case 13:if(e.preventDefault(),229===t)break;this.getSize()>0&&this.currentIndex>=0&&(this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.didSelectFromOptions=!0),this.loading=!0,this.listeners.selected(this.didSelectFromOptions);break;case 27:this.isOpen&&(this.loading=!0,this.currentIndex=null,this.searchInput=this.searchInputOriginal,e.preventDefault())}},setChangeItem:function(e,t){void 0===t&&(t=!1),null===this.currentIndex?this.currentItem=null:e&&(this.searchInput=this.getSuggestionValue(e),this.currentItem=e,t&&(this.searchInputOriginal=this.getSuggestionValue(e)),this.ensureItemVisible(e,this.currentIndex))},normalizeItem:function(e,t,n,s){return{name:e,type:t,label:n,item:s}},ensureItemVisible:function(e,t){var n=document.querySelector("."+this.componentAttrClassAutosuggestResults);if(e&&(t||0===t)&&n){var s=document.querySelector("#autosuggest__results_item-"+t);if(s){var i=n.clientHeight,o=n.scrollTop,u=s.clientHeight,r=s.offsetTop;u+r>=o+i?n.scrollTo(0,u+r-i):r<o&&o>0&&n.scrollTo(0,r)}}},updateCurrentIndex:function(e){this.currentIndex=e},clickedOnScrollbar:function(e){var t=document.querySelector("."+this.componentAttrClassAutosuggestResults);return t&&t.clientWidth<=e+16||!1},onDocumentMouseDown:function(e){var t=e.target.getBoundingClientRect?e.target.getBoundingClientRect():0;this.clientXMouseDownInitial=e.clientX-t.left},onDocumentMouseUp:function(e){var t=this;this.$el.contains(e.target)&&"INPUT"===e.target.tagName||this.clickedOnScrollbar(this.clientXMouseDownInitial)||(null!==this.currentIndex&&this.isOpen?(this.loading=!0,this.didSelectFromOptions=!0,this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.$nextTick(function(){t.listeners.selected(!0)})):this.loading=this.shouldRenderSuggestions())},setCurrentIndex:function(e,t,n){void 0===t&&(t=-1);var s=e;null===this.currentIndex&&(s=0),this.currentIndex<0&&1===n&&(s=0),e>=t&&(s=0),this.currentIndex=s;var i=document.getElementById("autosuggest__results_item-"+this.currentIndex),o="autosuggest__results_item-highlighted";document.querySelector("."+o)&&a(document.querySelector("."+o),o),i&&r(i,o)},_onSelected:function(e){console.warn('onSelected is deprecated. Please use click event listener \n\ne.g. <vue-autosuggest ... @selected="onSelectedMethod" /> \n\nhttps://vuejs.org/v2/guide/syntax.html#v-on-Shorthand'),this.onSelected&&this.onSelected(e)},onClick:function(e){console.warn('inputProps.onClick is deprecated. Please use native click event listener \n\ne.g. <vue-autosuggest ... @click="clickMethod" /> \n\nhttps://vuejs.org/v2/guide/syntax.html#v-on-Shorthand'),this.internal_inputProps.onClick&&this.internal_inputProps.onClick(e)},onBlur:function(e){console.warn('inputProps.onBlur is deprecated. Please use native blur event listener \n\ne.g. <vue-autosuggest ... @blur="blurMethod" /> \n\nhttps://vuejs.org/v2/guide/syntax.html#v-on-Shorthand'),this.internal_inputProps.onBlur&&this.internal_inputProps.onBlur(e)},onFocus:function(e){console.warn('inputProps.onFocus is deprecated. Please use native focus event listener \n\ne.g. <vue-autosuggest ... @focus="focusMethod" /> \n\nhttps://vuejs.org/v2/guide/syntax.html#v-on-Shorthand'),this.internal_inputProps.onFocus&&this.internal_inputProps.onFocus(e)}}},l={install:function(e){e.component("vue-autosuggest-default-section",o),e.component("vue-autosuggest",c)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(l);var d={name:"Search",components:{VueAutosuggest:c},data:function(){var e=this;return{snackbar:!1,filteredOptions:[],selected:null,suggestions:{data:[{name:"Rak płuca",disabled:!1},{name:"Rak oskrzelikowo-pęcherzykowy",disabled:!0},{name:"Rak gruczołowo-płaskonabłonkowy",disabled:!0},{name:"Rak płuca (wszystkie)2",disabled:!0},{name:"Rak oskrzelikowo-pęcherzykowy2",disabled:!0},{name:"Rak gruczołowo-płaskonabłonkowy2",disabled:!0},{name:"Rak płuca (wszystkie)3",disabled:!0},{name:"Rak oskrzelikowo-pęcherzykowy3",disabled:!0},{name:"Rak gruczołowo-płaskonabłonkowy3",disabled:!0},{name:"Bruceloza",disabled:!0},{name:"Angina",disabled:!0},{name:"Gorączka plamista",disabled:!0}]},suggestionsChips:[{name:"Rak płuca",color:"#D9EFFF",disabled:!1},{name:"Angina",color:"#D9F8FF",disabled:!0},{name:"Bruceloza",color:"#D9FFF6",disabled:!0},{name:"Choroba Whipple’a",color:"#D9FFE8",disabled:!0},{name:"Gorączka plamista",color:"#D9FFDB",disabled:!0},{name:"Sporotrychoza",color:"#E5FFD9",disabled:!0},{name:"Kryptosporydioza ",color:"#F5FFD9",disabled:!0}],sectionConfigs:{default:{limit:6,onSelected:function(t){console.log(t.item.name),!0!==t.item.disabled?e.goToSelection(t.item.name):e.snackbar=!0}}}}},methods:{getSuggestionClicked:function(e){this.filteredOptions=[]},getSuggestionValue:function(e){return!0===e.item.disabled?"".concat(e.item.name," - disabled"):e.item.name},onInputChange:function(e){if(null===e||e.length<3)this.filteredOptions=[];else{var t=this.suggestions.data.filter(function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1});this.filteredOptions=[{data:t}]}},goToSelection:function(e){console.log(e),!0!==e.disabled&&this.$router.replace({name:"select-values",params:{selected:e}})}}},g=d,p=(n("6e2d"),n("2877")),m=Object(p["a"])(g,s,i,!1,null,"e066b76c",null);m.options.__file="Search.vue";t["default"]=m.exports},"6e2d":function(e,t,n){"use strict";var s=n("b4cb"),i=n.n(s);i.a},"746b":function(e,t,n){e.exports=n.p+"img/doctors.0566a1fb.svg"},b4cb:function(e,t,n){}}]);
//# sourceMappingURL=chunk-1bc3307e.2deec076.js.map