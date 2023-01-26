/*! For license information please see components-Navbar-Navbar-stories.14b3e299.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkvoid_ui=self.webpackChunkvoid_ui||[]).push([[535],{"./src/components/Navbar/Navbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Logo:()=>Logo,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Navbar_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.string.link.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Navbar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/Navbar.module.scss"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Navbar_module.Z,options);const Navbar_Navbar_module=Navbar_module.Z.locals||{};var NavbarItem_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/NavbarItem.module.scss"),NavbarItem_module_options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(NavbarItem_module.Z,NavbarItem_module_options);const Navbar_NavbarItem_module=NavbarItem_module.Z.locals||{};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Navbar=function Navbar(props){var children=props.children,logoProps=props.logoProps,_props$variant=props.variant,variant=void 0===_props$variant?"primary":_props$variant,navbarContainer=classnames_default()(Navbar_Navbar_module.navbarContainer,"primary"===variant?Navbar_Navbar_module.primary:Navbar_Navbar_module.secondary),NavbarLogo=classnames_default()(Navbar_Navbar_module.NavbarLogo,"primary"===variant?Navbar_Navbar_module.primary:Navbar_Navbar_module.secondary);return(0,jsx_runtime.jsxs)("nav",{className:navbarContainer,role:"navigation",children:[logoProps&&(0,jsx_runtime.jsx)("a",{className:Navbar_Navbar_module.NavbarLogoContainer,href:null!=logoProps&&logoProps.link?logoProps.link:"#",children:(0,jsx_runtime.jsx)("img",{className:NavbarLogo,src:null==logoProps?void 0:logoProps.url,alt:"logo"})}),(0,jsx_runtime.jsx)("ul",{className:Navbar_Navbar_module.listContainer,children:react.Children.map(children,(function(child){var navbarItem=child;return(0,jsx_runtime.jsx)("li",{className:classnames_default()("primary"===variant?Navbar_NavbarItem_module.primary:Navbar_NavbarItem_module.secondary,Navbar_Navbar_module.NavbarItemContainer),children:navbarItem})}))})]})};Navbar.displayName="Navbar";try{Navbar.displayName="Navbar",Navbar.__docgenInfo={description:"",displayName:"Navbar",props:{children:{defaultValue:null,description:"The content for the Navbar",name:"children",required:!1,type:{name:"ReactNode"}},logoProps:{defaultValue:null,description:"The props for the Navbar's logo",name:"logoProps",required:!1,type:{name:"NavbarLogoProps"}},variant:{defaultValue:{value:'"primary"'},description:"The variant of the Navbar",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navbar/Navbar.tsx#Navbar"]={docgenInfo:Navbar.__docgenInfo,name:"Navbar",path:"src/components/Navbar/Navbar.tsx#Navbar"})}catch(__react_docgen_typescript_loader_error){}var NavbarItem=function NavbarItem(props){var children=props.children,link=props.link;return(0,jsx_runtime.jsx)("a",{className:Navbar_NavbarItem_module.navbarItemLinkContainer,href:link,children})};NavbarItem.displayName="NavbarItem";try{NavbarItem.displayName="NavbarItem",NavbarItem.__docgenInfo={description:"",displayName:"NavbarItem",props:{children:{defaultValue:null,description:"The content for the NavbarItem",name:"children",required:!0,type:{name:"ReactNode"}},link:{defaultValue:null,description:"The url link for the NavbarItem",name:"link",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navbar/NavbarItem.tsx#NavbarItem"]={docgenInfo:NavbarItem.__docgenInfo,name:"NavbarItem",path:"src/components/Navbar/NavbarItem.tsx#NavbarItem"})}catch(__react_docgen_typescript_loader_error){}const Navbar_stories={component:Navbar,title:"Components/Navbar"};var Default=function Default(){return(0,jsx_runtime.jsxs)(Navbar,{children:[(0,jsx_runtime.jsx)(NavbarItem,{link:"https://github.com/JordanUrbaezLu/void-ui",children:"Github"}),(0,jsx_runtime.jsx)(NavbarItem,{link:"https://github.com/JordanUrbaezLu/void-ui",children:"Github"}),(0,jsx_runtime.jsx)(NavbarItem,{link:"https://github.com/JordanUrbaezLu/void-ui",children:"Github"})]})};Default.displayName="Default",Default.parameters={layout:"fullscreen"};var Logo=function Logo(){return(0,jsx_runtime.jsxs)(Navbar,{logoProps:{link:"https://github.com/JordanUrbaezLu/void-ui",url:"https://www.pngkey.com/png/full/141-1415366_arctic-cat-logo-github-png.png"},children:[(0,jsx_runtime.jsx)(NavbarItem,{link:"https://github.com/JordanUrbaezLu/void-ui",children:"Github"}),(0,jsx_runtime.jsx)(NavbarItem,{link:"https://github.com/JordanUrbaezLu/void-ui",children:"Github"}),(0,jsx_runtime.jsx)(NavbarItem,{link:"https://github.com/JordanUrbaezLu/void-ui",children:"Github"})]})};Logo.displayName="Logo",Logo.parameters={layout:"fullscreen"};var Secondary=function Secondary(){return(0,jsx_runtime.jsxs)(Navbar,{logoProps:{link:"https://github.com/JordanUrbaezLu/void-ui",url:"https://www.pngkey.com/png/full/141-1415366_arctic-cat-logo-github-png.png"},variant:"secondary",children:[(0,jsx_runtime.jsx)(NavbarItem,{link:"https://github.com/JordanUrbaezLu/void-ui",children:"Github"}),(0,jsx_runtime.jsx)(NavbarItem,{link:"https://github.com/JordanUrbaezLu/void-ui",children:"Github"}),(0,jsx_runtime.jsx)(NavbarItem,{link:"https://github.com/JordanUrbaezLu/void-ui",children:"Github"})]})};Secondary.displayName="Secondary",Secondary.parameters={layout:"fullscreen"},Default.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <Navbar>\n      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">\n        Github\n      </NavbarItem>\n      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">\n        Github\n      </NavbarItem>\n      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">\n        Github\n      </NavbarItem>\n    </Navbar>\n  );\n}'}},Default.parameters),Logo.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <Navbar\n      logoProps={{\n        link: "https://github.com/JordanUrbaezLu/void-ui",\n        url: "https://www.pngkey.com/png/full/141-1415366_arctic-cat-logo-github-png.png",\n      }}\n    >\n      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">\n        Github\n      </NavbarItem>\n      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">\n        Github\n      </NavbarItem>\n      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">\n        Github\n      </NavbarItem>\n    </Navbar>\n  );\n}'}},Logo.parameters),Secondary.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <Navbar\n      logoProps={{\n        link: "https://github.com/JordanUrbaezLu/void-ui",\n        url: "https://www.pngkey.com/png/full/141-1415366_arctic-cat-logo-github-png.png",\n      }}\n      variant="secondary"\n    >\n      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">\n        Github\n      </NavbarItem>\n      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">\n        Github\n      </NavbarItem>\n      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">\n        Github\n      </NavbarItem>\n    </Navbar>\n  );\n}'}},Secondary.parameters);var __namedExportsOrder=["Default","Logo","Secondary"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/core-js/modules/es.string.link.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("link")},{link:function link(url){return createHTML(this,"a","href",url)}})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/Navbar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".navbarContainer--TVsAV{display:flex;flex-direction:row;position:relative;justify-content:flex-end;font-size:16px;min-width:100vw;font-family:Verdana,Geneva,Tahoma,sans-serif}.navbarContainer--TVsAV.primary--eF6uC{background-color:#ffcb57}.navbarContainer--TVsAV.secondary--FoVWm{background-color:#a04cf0}.listContainer--ZG9K5{display:flex;flex-direction:row;margin:0;padding:0}.navbarLogoContainer--QpLPg{background-color:#ffcb57;position:absolute;left:0;max-height:58.5px}.navbarItemContainer--AEcGW{display:flex}.navbarLogo--ZAfJd{background-color:#ffcb57;max-height:58.5px;width:100%}.navbarLogo--ZAfJd.primary--eF6uC{background-color:#ffcb57}.navbarLogo--ZAfJd.secondary--FoVWm{background-color:#a04cf0}","",{version:3,sources:["webpack://./src/components/Navbar/Navbar.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,wBACE,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,wBAAA,CACA,cAAA,CACA,eAAA,CACA,4CAAA,CAEA,uCACE,wBCVyB,CDa3B,yCACI,wBCZyB,CDgB/B,sBACE,YAAA,CACA,kBAAA,CACA,QAAA,CACA,SAAA,CAGF,4BACE,wBC1B2B,CD2B3B,iBAAA,CACA,MAAA,CACA,iBAAA,CAGF,4BACE,YAAA,CAGF,mBACE,wBCrC2B,CDsC3B,iBAAA,CACA,UAAA,CAEA,kCACE,wBC1CyB,CD6C3B,oCACI,wBC5CyB",sourcesContent:['@use "../../utility/globals";\n\n.navbarContainer {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  justify-content: flex-end;\n  font-size: 16px;\n  min-width: 100vw;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n\n  &.primary {\n    background-color: globals.$primary-color-pseudo-class;\n  }\n  \n  &.secondary {\n      background-color: globals.$secondary-color-pseudo-class;\n  }\n}\n\n.listContainer {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  padding: 0;\n}\n\n.navbarLogoContainer {\n  background-color: globals.$primary-color-pseudo-class;\n  position: absolute;\n  left: 0;\n  max-height: 58.5px;\n}\n\n.navbarItemContainer {\n  display: flex;\n}\n\n.navbarLogo {\n  background-color: globals.$primary-color-pseudo-class;\n  max-height: 58.5px;\n  width: 100%;\n\n  &.primary {\n    background-color: globals.$primary-color-pseudo-class;\n  }\n  \n  &.secondary {\n      background-color: globals.$secondary-color-pseudo-class;\n  }\n}\n\n',"// TODO: Adjust color for improved consistency and design\n$primary-color: rgb(255, 183, 77);\n$primary-color-pseudo-class: rgb(255, 203, 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160, 76, 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={navbarContainer:"navbarContainer--TVsAV",primary:"primary--eF6uC",secondary:"secondary--FoVWm",listContainer:"listContainer--ZG9K5",navbarLogoContainer:"navbarLogoContainer--QpLPg",navbarItemContainer:"navbarItemContainer--AEcGW",navbarLogo:"navbarLogo--ZAfJd"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/NavbarItem.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".navbarItemLinkContainer--Nb598{color:#000;text-decoration:none;padding:20px}.primary--lcri0:hover{background-color:#ffb74d}.secondary--mNrWP:hover{background-color:#9333ea}","",{version:3,sources:["webpack://./src/components/Navbar/NavbarItem.module.scss","webpack://./src/utility/_globals.scss"],names:[],mappings:"AAEA,gCACE,UAAA,CACA,oBAAA,CACA,YAAA,CAIE,sBACI,wBCTQ,CDcd,wBACE,wBCbc",sourcesContent:['@use "../../utility/globals";\n\n.navbarItemLinkContainer {\n  color: black;\n  text-decoration: none;\n  padding: 20px;\n}\n\n.primary {\n    &:hover {\n        background-color: globals.$primary-color;\n      }\n}\n\n.secondary {\n  &:hover {\n    background-color: globals.$secondary-color;\n  }\n}\n',"// TODO: Adjust color for improved consistency and design\n$primary-color: rgb(255, 183, 77);\n$primary-color-pseudo-class: rgb(255, 203, 87);\n$secondary-color: rgb(147 51 234);\n$secondary-color-pseudo-class: rgb(160, 76, 240);\n$tertiary-color: darkgray;\n$tertiary-color-pseudo-class: lightgray;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={navbarItemLinkContainer:"navbarItemLinkContainer--Nb598",primary:"primary--lcri0",secondary:"secondary--mNrWP"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */"),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}}}]);