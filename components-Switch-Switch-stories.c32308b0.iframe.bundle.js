/*! For license information please see components-Switch-Switch-stories.c32308b0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkvoid_ui=self.webpackChunkvoid_ui||[]).push([[311],{"./src/components/Switch/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Primary:()=>Primary,PrimaryAndLabel:()=>PrimaryAndLabel,Secondary:()=>Secondary,SecondaryAndLabel:()=>SecondaryAndLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_stories});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js")),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Switch_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Switch/Switch.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Switch_module.Z,options);const Switch_Switch_module=Switch_module.Z.locals||{};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["isOn","label","onClick","variant"],Switch=function Switch(props){var _props$isOn=props.isOn,isOn=void 0!==_props$isOn&&_props$isOn,label=props.label,onClick=props.onClick,_props$variant=props.variant,variant=void 0===_props$variant?"primary":_props$variant,rest=(0,objectWithoutProperties.Z)(props,_excluded),switchPill=classnames_default()(Switch_Switch_module.switchPill,"primary"===variant&&Switch_Switch_module.primary,"secondary"===variant&&Switch_Switch_module.secondary,isOn&&Switch_Switch_module.on),switchIndicator=classnames_default()(Switch_Switch_module.switchIndicator,"primary"===variant&&Switch_Switch_module.primary,"secondary"===variant&&Switch_Switch_module.secondary,isOn&&Switch_Switch_module.on),switchLabel=classnames_default()(Switch_Switch_module.switchLabel,"primary"===variant&&Switch_Switch_module.primary,"secondary"===variant&&Switch_Switch_module.secondary,isOn&&Switch_Switch_module.on);return(0,jsx_runtime.jsxs)("button",Object.assign({"aria-checked":isOn,className:switchPill,onClick,role:"switch",type:"button"},rest,{children:[(0,jsx_runtime.jsx)("span",{className:switchIndicator}),label&&(0,jsx_runtime.jsx)("span",{className:switchLabel,children:label})]}))};Switch.displayName="Switch";try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{isOn:{defaultValue:{value:"false"},description:"If the Switch is on",name:"isOn",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the Switch",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"The callback fired when the Switch is clicked",name:"onClick",required:!0,type:{name:"() => void"}},variant:{defaultValue:{value:'"primary"'},description:"The variant of the Switch",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}const Switch_stories={component:Switch,title:"Components/Switch"};var Template=function Template(args){var _React$useState=react.useState(!0),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),switchState=_React$useState2[0],toggleSwitchState=_React$useState2[1];return(0,jsx_runtime.jsx)(Switch,Object.assign({},args,{isOn:switchState,onClick:function onClick(){return toggleSwitchState(!switchState)}}))};Template.displayName="Template";var Default=Template.bind({}),Primary=Template.bind({});Primary.args={variant:"primary"};var Secondary=Template.bind({});Secondary.args={variant:"secondary"};var PrimaryAndLabel=Template.bind({});PrimaryAndLabel.args={label:" Switch Label",variant:"primary"};var SecondaryAndLabel=Template.bind({});SecondaryAndLabel.args={label:" Switch Label",variant:"secondary"},Default.parameters=Object.assign({storySource:{source:"(args) => {\n  const [switchState, toggleSwitchState] =\n    React.useState<boolean>(true);\n\n  return (\n    <Switch\n      {...args}\n      isOn={switchState}\n      onClick={() => toggleSwitchState(!switchState)}\n    />\n  );\n}"}},Default.parameters),Primary.parameters=Object.assign({storySource:{source:"(args) => {\n  const [switchState, toggleSwitchState] =\n    React.useState<boolean>(true);\n\n  return (\n    <Switch\n      {...args}\n      isOn={switchState}\n      onClick={() => toggleSwitchState(!switchState)}\n    />\n  );\n}"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => {\n  const [switchState, toggleSwitchState] =\n    React.useState<boolean>(true);\n\n  return (\n    <Switch\n      {...args}\n      isOn={switchState}\n      onClick={() => toggleSwitchState(!switchState)}\n    />\n  );\n}"}},Secondary.parameters),PrimaryAndLabel.parameters=Object.assign({storySource:{source:"(args) => {\n  const [switchState, toggleSwitchState] =\n    React.useState<boolean>(true);\n\n  return (\n    <Switch\n      {...args}\n      isOn={switchState}\n      onClick={() => toggleSwitchState(!switchState)}\n    />\n  );\n}"}},PrimaryAndLabel.parameters),SecondaryAndLabel.parameters=Object.assign({storySource:{source:"(args) => {\n  const [switchState, toggleSwitchState] =\n    React.useState<boolean>(true);\n\n  return (\n    <Switch\n      {...args}\n      isOn={switchState}\n      onClick={() => toggleSwitchState(!switchState)}\n    />\n  );\n}"}},SecondaryAndLabel.parameters);var __namedExportsOrder=["Default","Primary","Secondary","PrimaryAndLabel","SecondaryAndLabel"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Switch/Switch.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.switchPill--yBHbB{background:none;border:0;cursor:pointer;display:flex;font-family:Verdana,Geneva,Tahoma,sans-serif;margin:0;padding:0;align-items:center;font-size:16px}.switchIndicator--OmpUh{background:gray;border-radius:999px;position:relative;height:22px;width:42px;transition:all .15s ease-in}.switchIndicator--OmpUh.primary--DxDQf::before{background:#fff;border-radius:999px;content:"";display:inline-block;top:3px;right:23px;height:16px;width:16px;position:absolute;transition:all .15s ease-in}.switchIndicator--OmpUh.secondary--nLfP6::before{background:#fff;border-radius:999px;content:"";display:inline-block;top:3px;right:23px;height:16px;width:16px;position:absolute;transition:all .15s ease-in}.switchIndicator--OmpUh.on--Vp0yn.primary--DxDQf{background:#ffb74d}.switchIndicator--OmpUh.on--Vp0yn.secondary--nLfP6{background:#9333ea}.switchIndicator--OmpUh.on--Vp0yn::before{transform:translateX(20px)}.switchLabel--jy2vy{color:gray;margin-left:8px;transition:all .15s ease-in}.switchLabel--jy2vy.on--Vp0yn.primary--DxDQf{color:#ffb74d}.switchLabel--jy2vy.on--Vp0yn.secondary--nLfP6{color:#9333ea}',"",{version:3,sources:["webpack://./src/components/Switch/Switch.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,mBACE,eAAA,CACA,QAAA,CACA,cAAA,CACA,YAAA,CACA,4CAAA,CACA,QAAA,CACA,SAAA,CACA,kBAAA,CACA,cAAA,CAGF,wBACE,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CACA,2BAAA,CAGE,+CACE,eAAA,CACA,mBAAA,CACA,UAAA,CACA,oBAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,2BAAA,CAKF,iDACE,eAAA,CACA,mBAAA,CACA,UAAA,CACA,oBAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,2BAAA,CAKF,iDACE,kBCrDU,CDwDZ,mDACE,kBCvDY,CD0Dd,0CACE,0BAAA,CAKN,oBACE,UAAA,CACA,eAAA,CACA,2BAAA,CAGE,6CACE,aCzEU,CD4EZ,+CACE,aC3EY",sourcesContent:['@use "../../utility/globals";\n\n.switchPill {\n  background: none;\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  font-size: 16px;\n}\n\n.switchIndicator {\n  background: gray;\n  border-radius: 999px;\n  position: relative;\n  height: 22px;\n  width: 42px;\n  transition: all 0.15s ease-in;\n\n  &.primary {\n    &::before {\n      background: white;\n      border-radius: 999px;\n      content: "";\n      display: inline-block;\n      top: 3px;\n      right: 23px;\n      height: 16px;\n      width: 16px;\n      position: absolute;\n      transition: all 0.15s ease-in;\n    }\n  }\n\n  &.secondary {\n    &::before {\n      background: white;\n      border-radius: 999px;\n      content: "";\n      display: inline-block;\n      top: 3px;\n      right: 23px;\n      height: 16px;\n      width: 16px;\n      position: absolute;\n      transition: all 0.15s ease-in;\n    }\n  }\n\n  &.on {\n    &.primary {\n      background: globals.$primary-color;\n    }\n\n    &.secondary {\n      background: globals.$secondary-color;\n    }\n\n    &::before {\n      transform: translateX(20px);\n    }\n  }\n}\n\n.switchLabel {\n  color: gray;\n  margin-left: 8px;\n  transition: all 0.15s ease-in;\n\n  &.on {\n    &.primary {\n      color: globals.$primary-color;\n    }\n\n    &.secondary {\n      color: globals.$secondary-color;\n    }\n  }\n}\n',"// TODO: Adjust color for improved consistency and design\n$primary-color: rgb(255, 183, 77);\n$primary-color-pseudo-class: rgb(255, 203, 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160, 76, 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={switchPill:"switchPill--yBHbB",switchIndicator:"switchIndicator--OmpUh",primary:"primary--DxDQf",secondary:"secondary--nLfP6",on:"on--Vp0yn",switchLabel:"switchLabel--jy2vy"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */"),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}}}]);