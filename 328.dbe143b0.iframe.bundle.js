/*! For license information please see 328.dbe143b0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkvoid_ui_library=self.webpackChunkvoid_ui_library||[]).push([[328],{"./node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/core-js/modules/es.array.some.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$some=__webpack_require__("./node_modules/core-js/internals/array-iteration.js").some;$({target:"Array",proto:!0,forced:!__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js")("some")},{some:function some(callbackfn){return $some(this,callbackfn,arguments.length>1?arguments[1]:void 0)}})},"./node_modules/core-js/modules/es.date.to-string.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),DatePrototype=Date.prototype,nativeDateToString=uncurryThis(DatePrototype.toString),thisTimeValue=uncurryThis(DatePrototype.getTime);"Invalid Date"!=String(new Date(NaN))&&defineBuiltIn(DatePrototype,"toString",(function toString(){var value=thisTimeValue(this);return value==value?nativeDateToString(this):"Invalid Date"}))},"./node_modules/core-js/modules/es.string.small.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("small")},{small:function small(){return createHTML(this,"small","","")}})},"./node_modules/focus-trap-react/dist/focus-trap-react.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var React=__webpack_require__("./node_modules/react/index.js"),PropTypes=__webpack_require__("./node_modules/prop-types/index.js"),createFocusTrap=__webpack_require__("./node_modules/focus-trap/dist/focus-trap.esm.js").createFocusTrap,isFocusable=__webpack_require__("./node_modules/tabbable/dist/index.esm.js").isFocusable,FocusTrap=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(FocusTrap,_React$Component);var _super=_createSuper(FocusTrap);function FocusTrap(props){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,FocusTrap),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this,props)),"getNodeForOption",(function(optionName){var _this$internalOptions,optionValue=null!==(_this$internalOptions=this.internalOptions[optionName])&&void 0!==_this$internalOptions?_this$internalOptions:this.originalOptions[optionName];if("function"==typeof optionValue){for(var _len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];optionValue=optionValue.apply(void 0,params)}if(!0===optionValue&&(optionValue=void 0),!optionValue){if(void 0===optionValue||!1===optionValue)return optionValue;throw new Error("`".concat(optionName,"` was specified but was not a node, or did not return a node"))}var _this$getDocument,node=optionValue;if("string"==typeof optionValue&&!(node=null===(_this$getDocument=this.getDocument())||void 0===_this$getDocument?void 0:_this$getDocument.querySelector(optionValue)))throw new Error("`".concat(optionName,"` as selector refers to no known node"));return node})),_this.handleDeactivate=_this.handleDeactivate.bind(_assertThisInitialized(_this)),_this.handlePostDeactivate=_this.handlePostDeactivate.bind(_assertThisInitialized(_this)),_this.handleClickOutsideDeactivates=_this.handleClickOutsideDeactivates.bind(_assertThisInitialized(_this)),_this.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:_this.handleDeactivate,onPostDeactivate:_this.handlePostDeactivate,clickOutsideDeactivates:_this.handleClickOutsideDeactivates},_this.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var focusTrapOptions=props.focusTrapOptions;for(var optionName in focusTrapOptions)Object.prototype.hasOwnProperty.call(focusTrapOptions,optionName)&&("returnFocusOnDeactivate"!==optionName&&"onDeactivate"!==optionName&&"onPostDeactivate"!==optionName&&"checkCanReturnFocus"!==optionName&&"clickOutsideDeactivates"!==optionName?_this.internalOptions[optionName]=focusTrapOptions[optionName]:_this.originalOptions[optionName]=focusTrapOptions[optionName]);return _this.outsideClick=null,_this.focusTrapElements=props.containerElements||[],_this.updatePreviousElement(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(FocusTrap,[{key:"getDocument",value:function getDocument(){return this.props.focusTrapOptions.document||("undefined"!=typeof document?document:void 0)}},{key:"getReturnFocusNode",value:function getReturnFocusNode(){var node=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return node||!1!==node&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function updatePreviousElement(){var currentDocument=this.getDocument();currentDocument&&(this.previouslyFocusedElement=currentDocument.activeElement)}},{key:"deactivateTrap",value:function deactivateTrap(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function handleClickOutsideDeactivates(event){var allowDeactivation="function"==typeof this.originalOptions.clickOutsideDeactivates?this.originalOptions.clickOutsideDeactivates.call(null,event):this.originalOptions.clickOutsideDeactivates;return allowDeactivation&&(this.outsideClick={target:event.target,allowDeactivation}),allowDeactivation}},{key:"handleDeactivate",value:function handleDeactivate(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function handlePostDeactivate(){var _this2=this,finishDeactivation=function finishDeactivation(){var returnFocusNode=_this2.getReturnFocusNode(),canReturnFocus=!(!_this2.originalOptions.returnFocusOnDeactivate||null==returnFocusNode||!returnFocusNode.focus||_this2.outsideClick&&(!_this2.outsideClick.allowDeactivation||isFocusable(_this2.outsideClick.target,_this2.internalOptions.tabbableOptions))),_this2$internalOption=_this2.internalOptions.preventScroll,preventScroll=void 0!==_this2$internalOption&&_this2$internalOption;canReturnFocus&&returnFocusNode.focus({preventScroll}),_this2.originalOptions.onPostDeactivate&&_this2.originalOptions.onPostDeactivate.call(null),_this2.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(finishDeactivation,finishDeactivation):finishDeactivation()}},{key:"setupFocusTrap",value:function setupFocusTrap(){this.focusTrap?this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()):this.focusTrapElements.some(Boolean)&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}},{key:"componentDidMount",value:function componentDidMount(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(this.focusTrap){prevProps.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var hasActivated=!prevProps.active&&this.props.active,hasDeactivated=prevProps.active&&!this.props.active,hasPaused=!prevProps.paused&&this.props.paused,hasUnpaused=prevProps.paused&&!this.props.paused;if(hasActivated&&(this.updatePreviousElement(),this.focusTrap.activate()),hasDeactivated)return void this.deactivateTrap();hasPaused&&this.focusTrap.pause(),hasUnpaused&&this.focusTrap.unpause()}else prevProps.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.deactivateTrap()}},{key:"render",value:function render(){var _this3=this,child=this.props.children?React.Children.only(this.props.children):void 0;if(child){if(child.type&&child.type===React.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");return React.cloneElement(child,{ref:function callbackRef(element){var containerElements=_this3.props.containerElements;child&&("function"==typeof child.ref?child.ref(element):child.ref&&(child.ref.current=element)),_this3.focusTrapElements=containerElements||[element]}})}return null}}]),FocusTrap}(React.Component),ElementType="undefined"==typeof Element?Function:Element;FocusTrap.propTypes={active:PropTypes.bool,paused:PropTypes.bool,focusTrapOptions:PropTypes.shape({document:PropTypes.object,onActivate:PropTypes.func,onPostActivate:PropTypes.func,checkCanFocusTrap:PropTypes.func,onDeactivate:PropTypes.func,onPostDeactivate:PropTypes.func,checkCanReturnFocus:PropTypes.func,initialFocus:PropTypes.oneOfType([PropTypes.instanceOf(ElementType),PropTypes.string,PropTypes.bool,PropTypes.func]),fallbackFocus:PropTypes.oneOfType([PropTypes.instanceOf(ElementType),PropTypes.string,PropTypes.func]),escapeDeactivates:PropTypes.oneOfType([PropTypes.bool,PropTypes.func]),clickOutsideDeactivates:PropTypes.oneOfType([PropTypes.bool,PropTypes.func]),returnFocusOnDeactivate:PropTypes.bool,setReturnFocus:PropTypes.oneOfType([PropTypes.instanceOf(ElementType),PropTypes.string,PropTypes.bool,PropTypes.func]),allowOutsideClick:PropTypes.oneOfType([PropTypes.bool,PropTypes.func]),preventScroll:PropTypes.bool,tabbableOptions:PropTypes.shape({displayCheck:PropTypes.oneOf(["full","legacy-full","non-zero-area","none"]),getShadowRoot:PropTypes.oneOfType([PropTypes.bool,PropTypes.func])}),trapStack:PropTypes.array,isKeyForward:PropTypes.func,isKeyBackward:PropTypes.func}),containerElements:PropTypes.arrayOf(PropTypes.instanceOf(ElementType)),children:PropTypes.oneOfType([PropTypes.element,PropTypes.instanceOf(ElementType)])},FocusTrap.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:createFocusTrap},module.exports=FocusTrap},"./node_modules/focus-trap/dist/focus-trap.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{createFocusTrap:()=>createFocusTrap});var tabbable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tabbable/dist/index.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var activeFocusTraps_activateTrap=function activateTrap(trapStack,trap){if(trapStack.length>0){var activeTrap=trapStack[trapStack.length-1];activeTrap!==trap&&activeTrap.pause()}var trapIndex=trapStack.indexOf(trap);-1===trapIndex||trapStack.splice(trapIndex,1),trapStack.push(trap)},activeFocusTraps_deactivateTrap=function deactivateTrap(trapStack,trap){var trapIndex=trapStack.indexOf(trap);-1!==trapIndex&&trapStack.splice(trapIndex,1),trapStack.length>0&&trapStack[trapStack.length-1].unpause()},isTabEvent=function isTabEvent(e){return"Tab"===e.key||9===e.keyCode},isKeyForward=function isKeyForward(e){return isTabEvent(e)&&!e.shiftKey},isKeyBackward=function isKeyBackward(e){return isTabEvent(e)&&e.shiftKey},delay=function delay(fn){return setTimeout(fn,0)},findIndex=function findIndex(arr,fn){var idx=-1;return arr.every((function(value,i){return!fn(value)||(idx=i,!1)})),idx},valueOrHandler=function valueOrHandler(value){for(var _len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];return"function"==typeof value?value.apply(void 0,params):value},getActualTarget=function getActualTarget(event){return event.target.shadowRoot&&"function"==typeof event.composedPath?event.composedPath()[0]:event.target},internalTrapStack=[],createFocusTrap=function createFocusTrap(elements,userOptions){var trap,doc=(null==userOptions?void 0:userOptions.document)||document,trapStack=(null==userOptions?void 0:userOptions.trapStack)||internalTrapStack,config=_objectSpread2({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward,isKeyBackward},userOptions),state={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},getOption=function getOption(configOverrideOptions,optionName,configOptionName){return configOverrideOptions&&void 0!==configOverrideOptions[optionName]?configOverrideOptions[optionName]:config[configOptionName||optionName]},findContainerIndex=function findContainerIndex(element){return state.containerGroups.findIndex((function(_ref){var container=_ref.container,tabbableNodes=_ref.tabbableNodes;return container.contains(element)||tabbableNodes.find((function(node){return node===element}))}))},getNodeForOption=function getNodeForOption(optionName){var optionValue=config[optionName];if("function"==typeof optionValue){for(var _len2=arguments.length,params=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)params[_key2-1]=arguments[_key2];optionValue=optionValue.apply(void 0,params)}if(!0===optionValue&&(optionValue=void 0),!optionValue){if(void 0===optionValue||!1===optionValue)return optionValue;throw new Error("`".concat(optionName,"` was specified but was not a node, or did not return a node"))}var node=optionValue;if("string"==typeof optionValue&&!(node=doc.querySelector(optionValue)))throw new Error("`".concat(optionName,"` as selector refers to no known node"));return node},getInitialFocusNode=function getInitialFocusNode(){var node=getNodeForOption("initialFocus");if(!1===node)return!1;if(void 0===node)if(findContainerIndex(doc.activeElement)>=0)node=doc.activeElement;else{var firstTabbableGroup=state.tabbableGroups[0];node=firstTabbableGroup&&firstTabbableGroup.firstTabbableNode||getNodeForOption("fallbackFocus")}if(!node)throw new Error("Your focus-trap needs to have at least one focusable element");return node},updateTabbableNodes=function updateTabbableNodes(){if(state.containerGroups=state.containers.map((function(container){var tabbableNodes=(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.tabbable)(container,config.tabbableOptions),focusableNodes=(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.focusable)(container,config.tabbableOptions);return{container,tabbableNodes,focusableNodes,firstTabbableNode:tabbableNodes.length>0?tabbableNodes[0]:null,lastTabbableNode:tabbableNodes.length>0?tabbableNodes[tabbableNodes.length-1]:null,nextTabbableNode:function nextTabbableNode(node){var forward=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],nodeIdx=focusableNodes.findIndex((function(n){return n===node}));if(!(nodeIdx<0))return forward?focusableNodes.slice(nodeIdx+1).find((function(n){return(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(n,config.tabbableOptions)})):focusableNodes.slice(0,nodeIdx).reverse().find((function(n){return(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(n,config.tabbableOptions)}))}}})),state.tabbableGroups=state.containerGroups.filter((function(group){return group.tabbableNodes.length>0})),state.tabbableGroups.length<=0&&!getNodeForOption("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},tryFocus=function tryFocus(node){!1!==node&&node!==doc.activeElement&&(node&&node.focus?(node.focus({preventScroll:!!config.preventScroll}),state.mostRecentlyFocusedNode=node,function isSelectableInput(node){return node.tagName&&"input"===node.tagName.toLowerCase()&&"function"==typeof node.select}(node)&&node.select()):tryFocus(getInitialFocusNode()))},getReturnFocusNode=function getReturnFocusNode(previousActiveElement){var node=getNodeForOption("setReturnFocus",previousActiveElement);return node||!1!==node&&previousActiveElement},checkPointerDown=function checkPointerDown(e){var target=getActualTarget(e);findContainerIndex(target)>=0||(valueOrHandler(config.clickOutsideDeactivates,e)?trap.deactivate({returnFocus:config.returnFocusOnDeactivate&&!(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target,config.tabbableOptions)}):valueOrHandler(config.allowOutsideClick,e)||e.preventDefault())},checkFocusIn=function checkFocusIn(e){var target=getActualTarget(e),targetContained=findContainerIndex(target)>=0;targetContained||target instanceof Document?targetContained&&(state.mostRecentlyFocusedNode=target):(e.stopImmediatePropagation(),tryFocus(state.mostRecentlyFocusedNode||getInitialFocusNode()))},checkKey=function checkKey(event){if(function isEscapeEvent(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(event)&&!1!==valueOrHandler(config.escapeDeactivates,event))return event.preventDefault(),void trap.deactivate();(config.isKeyForward(event)||config.isKeyBackward(event))&&function checkKeyNav(event){var isBackward=arguments.length>1&&void 0!==arguments[1]&&arguments[1],target=getActualTarget(event);updateTabbableNodes();var destinationNode=null;if(state.tabbableGroups.length>0){var containerIndex=findContainerIndex(target),containerGroup=containerIndex>=0?state.containerGroups[containerIndex]:void 0;if(containerIndex<0)destinationNode=isBackward?state.tabbableGroups[state.tabbableGroups.length-1].lastTabbableNode:state.tabbableGroups[0].firstTabbableNode;else if(isBackward){var startOfGroupIndex=findIndex(state.tabbableGroups,(function(_ref2){var firstTabbableNode=_ref2.firstTabbableNode;return target===firstTabbableNode}));if(startOfGroupIndex<0&&(containerGroup.container===target||(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target,config.tabbableOptions)&&!(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target,config.tabbableOptions)&&!containerGroup.nextTabbableNode(target,!1))&&(startOfGroupIndex=containerIndex),startOfGroupIndex>=0){var destinationGroupIndex=0===startOfGroupIndex?state.tabbableGroups.length-1:startOfGroupIndex-1;destinationNode=state.tabbableGroups[destinationGroupIndex].lastTabbableNode}else isTabEvent(event)||(destinationNode=containerGroup.nextTabbableNode(target,!1))}else{var lastOfGroupIndex=findIndex(state.tabbableGroups,(function(_ref3){var lastTabbableNode=_ref3.lastTabbableNode;return target===lastTabbableNode}));if(lastOfGroupIndex<0&&(containerGroup.container===target||(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target,config.tabbableOptions)&&!(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target,config.tabbableOptions)&&!containerGroup.nextTabbableNode(target))&&(lastOfGroupIndex=containerIndex),lastOfGroupIndex>=0){var _destinationGroupIndex=lastOfGroupIndex===state.tabbableGroups.length-1?0:lastOfGroupIndex+1;destinationNode=state.tabbableGroups[_destinationGroupIndex].firstTabbableNode}else isTabEvent(event)||(destinationNode=containerGroup.nextTabbableNode(target))}}else destinationNode=getNodeForOption("fallbackFocus");destinationNode&&(isTabEvent(event)&&event.preventDefault(),tryFocus(destinationNode))}(event,config.isKeyBackward(event))},checkClick=function checkClick(e){var target=getActualTarget(e);findContainerIndex(target)>=0||valueOrHandler(config.clickOutsideDeactivates,e)||valueOrHandler(config.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},addListeners=function addListeners(){if(state.active)return activeFocusTraps_activateTrap(trapStack,trap),state.delayInitialFocusTimer=config.delayInitialFocus?delay((function(){tryFocus(getInitialFocusNode())})):tryFocus(getInitialFocusNode()),doc.addEventListener("focusin",checkFocusIn,!0),doc.addEventListener("mousedown",checkPointerDown,{capture:!0,passive:!1}),doc.addEventListener("touchstart",checkPointerDown,{capture:!0,passive:!1}),doc.addEventListener("click",checkClick,{capture:!0,passive:!1}),doc.addEventListener("keydown",checkKey,{capture:!0,passive:!1}),trap},removeListeners=function removeListeners(){if(state.active)return doc.removeEventListener("focusin",checkFocusIn,!0),doc.removeEventListener("mousedown",checkPointerDown,!0),doc.removeEventListener("touchstart",checkPointerDown,!0),doc.removeEventListener("click",checkClick,!0),doc.removeEventListener("keydown",checkKey,!0),trap};return(trap={get active(){return state.active},get paused(){return state.paused},activate:function activate(activateOptions){if(state.active)return this;var onActivate=getOption(activateOptions,"onActivate"),onPostActivate=getOption(activateOptions,"onPostActivate"),checkCanFocusTrap=getOption(activateOptions,"checkCanFocusTrap");checkCanFocusTrap||updateTabbableNodes(),state.active=!0,state.paused=!1,state.nodeFocusedBeforeActivation=doc.activeElement,onActivate&&onActivate();var finishActivation=function finishActivation(){checkCanFocusTrap&&updateTabbableNodes(),addListeners(),onPostActivate&&onPostActivate()};return checkCanFocusTrap?(checkCanFocusTrap(state.containers.concat()).then(finishActivation,finishActivation),this):(finishActivation(),this)},deactivate:function deactivate(deactivateOptions){if(!state.active)return this;var options=_objectSpread2({onDeactivate:config.onDeactivate,onPostDeactivate:config.onPostDeactivate,checkCanReturnFocus:config.checkCanReturnFocus},deactivateOptions);clearTimeout(state.delayInitialFocusTimer),state.delayInitialFocusTimer=void 0,removeListeners(),state.active=!1,state.paused=!1,activeFocusTraps_deactivateTrap(trapStack,trap);var onDeactivate=getOption(options,"onDeactivate"),onPostDeactivate=getOption(options,"onPostDeactivate"),checkCanReturnFocus=getOption(options,"checkCanReturnFocus"),returnFocus=getOption(options,"returnFocus","returnFocusOnDeactivate");onDeactivate&&onDeactivate();var finishDeactivation=function finishDeactivation(){delay((function(){returnFocus&&tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)),onPostDeactivate&&onPostDeactivate()}))};return returnFocus&&checkCanReturnFocus?(checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation,finishDeactivation),this):(finishDeactivation(),this)},pause:function pause(){return state.paused||!state.active||(state.paused=!0,removeListeners()),this},unpause:function unpause(){return state.paused&&state.active?(state.paused=!1,updateTabbableNodes(),addListeners(),this):this},updateContainerElements:function updateContainerElements(containerElements){var elementsAsArray=[].concat(containerElements).filter(Boolean);return state.containers=elementsAsArray.map((function(element){return"string"==typeof element?doc.querySelector(element):element})),state.active&&updateTabbableNodes(),this}}).updateContainerElements(elements),trap}},"./node_modules/tabbable/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{focusable:()=>focusable,isFocusable:()=>isFocusable,isTabbable:()=>isTabbable,tabbable:()=>tabbable});var candidateSelectors=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],candidateSelector=candidateSelectors.join(","),NoElement="undefined"==typeof Element,matches=NoElement?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,getRootNode=!NoElement&&Element.prototype.getRootNode?function(element){return element.getRootNode()}:function(element){return element.ownerDocument},getCandidates=function getCandidates(el,includeContainer,filter){var candidates=Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));return includeContainer&&matches.call(el,candidateSelector)&&candidates.unshift(el),candidates=candidates.filter(filter)},getCandidatesIteratively=function getCandidatesIteratively(elements,includeContainer,options){for(var candidates=[],elementsToCheck=Array.from(elements);elementsToCheck.length;){var element=elementsToCheck.shift();if("SLOT"===element.tagName){var assigned=element.assignedElements(),nestedCandidates=getCandidatesIteratively(assigned.length?assigned:element.children,!0,options);options.flatten?candidates.push.apply(candidates,nestedCandidates):candidates.push({scopeParent:element,candidates:nestedCandidates})}else{matches.call(element,candidateSelector)&&options.filter(element)&&(includeContainer||!elements.includes(element))&&candidates.push(element);var shadowRoot=element.shadowRoot||"function"==typeof options.getShadowRoot&&options.getShadowRoot(element),validShadowRoot=!options.shadowRootFilter||options.shadowRootFilter(element);if(shadowRoot&&validShadowRoot){var _nestedCandidates=getCandidatesIteratively(!0===shadowRoot?element.children:shadowRoot.children,!0,options);options.flatten?candidates.push.apply(candidates,_nestedCandidates):candidates.push({scopeParent:element,candidates:_nestedCandidates})}else elementsToCheck.unshift.apply(elementsToCheck,element.children)}}return candidates},getTabindex=function getTabindex(node,isScope){return node.tabIndex<0&&(isScope||/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName)||node.isContentEditable)&&isNaN(parseInt(node.getAttribute("tabindex"),10))?0:node.tabIndex},sortOrderedTabbables=function sortOrderedTabbables(a,b){return a.tabIndex===b.tabIndex?a.documentOrder-b.documentOrder:a.tabIndex-b.tabIndex},isInput=function isInput(node){return"INPUT"===node.tagName},isNonTabbableRadio=function isNonTabbableRadio(node){return function isRadio(node){return isInput(node)&&"radio"===node.type}(node)&&!function isTabbableRadio(node){if(!node.name)return!0;var radioSet,radioScope=node.form||getRootNode(node),queryRadios=function queryRadios(name){return radioScope.querySelectorAll('input[type="radio"][name="'+name+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)radioSet=queryRadios(window.CSS.escape(node.name));else try{radioSet=queryRadios(node.name)}catch(err){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",err.message),!1}var checked=function getCheckedRadio(nodes,form){for(var i=0;i<nodes.length;i++)if(nodes[i].checked&&nodes[i].form===form)return nodes[i]}(radioSet,node.form);return!checked||checked===node}(node)},isZeroArea=function isZeroArea(node){var _node$getBoundingClie=node.getBoundingClientRect(),width=_node$getBoundingClie.width,height=_node$getBoundingClie.height;return 0===width&&0===height},isHidden=function isHidden(node,_ref){var displayCheck=_ref.displayCheck,getShadowRoot=_ref.getShadowRoot;if("hidden"===getComputedStyle(node).visibility)return!0;var nodeUnderDetails=matches.call(node,"details>summary:first-of-type")?node.parentElement:node;if(matches.call(nodeUnderDetails,"details:not([open]) *"))return!0;if(displayCheck&&"full"!==displayCheck&&"legacy-full"!==displayCheck){if("non-zero-area"===displayCheck)return isZeroArea(node)}else{if("function"==typeof getShadowRoot){for(var originalNode=node;node;){var parentElement=node.parentElement,rootNode=getRootNode(node);if(parentElement&&!parentElement.shadowRoot&&!0===getShadowRoot(parentElement))return isZeroArea(node);node=node.assignedSlot?node.assignedSlot:parentElement||rootNode===node.ownerDocument?parentElement:rootNode.host}node=originalNode}if(function isNodeAttached(node){for(var _nodeRootHost,nodeRootHost=getRootNode(node).host,attached=!!(null!==(_nodeRootHost=nodeRootHost)&&void 0!==_nodeRootHost&&_nodeRootHost.ownerDocument.contains(nodeRootHost)||node.ownerDocument.contains(node));!attached&&nodeRootHost;){var _nodeRootHost2;attached=!(null===(_nodeRootHost2=nodeRootHost=getRootNode(nodeRootHost).host)||void 0===_nodeRootHost2||!_nodeRootHost2.ownerDocument.contains(nodeRootHost))}return attached}(node))return!node.getClientRects().length;if("legacy-full"!==displayCheck)return!0}return!1},isNodeMatchingSelectorFocusable=function isNodeMatchingSelectorFocusable(options,node){return!(node.disabled||function isHiddenInput(node){return isInput(node)&&"hidden"===node.type}(node)||isHidden(node,options)||function isDetailsWithSummary(node){return"DETAILS"===node.tagName&&Array.prototype.slice.apply(node.children).some((function(child){return"SUMMARY"===child.tagName}))}(node)||function isDisabledFromFieldset(node){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName))for(var parentNode=node.parentElement;parentNode;){if("FIELDSET"===parentNode.tagName&&parentNode.disabled){for(var i=0;i<parentNode.children.length;i++){var child=parentNode.children.item(i);if("LEGEND"===child.tagName)return!!matches.call(parentNode,"fieldset[disabled] *")||!child.contains(node)}return!0}parentNode=parentNode.parentElement}return!1}(node))},isNodeMatchingSelectorTabbable=function isNodeMatchingSelectorTabbable(options,node){return!(isNonTabbableRadio(node)||getTabindex(node)<0||!isNodeMatchingSelectorFocusable(options,node))},isValidShadowRootTabbable=function isValidShadowRootTabbable(shadowHostNode){var tabIndex=parseInt(shadowHostNode.getAttribute("tabindex"),10);return!!(isNaN(tabIndex)||tabIndex>=0)},sortByOrder=function sortByOrder(candidates){var regularTabbables=[],orderedTabbables=[];return candidates.forEach((function(item,i){var isScope=!!item.scopeParent,element=isScope?item.scopeParent:item,candidateTabindex=getTabindex(element,isScope),elements=isScope?sortByOrder(item.candidates):element;0===candidateTabindex?isScope?regularTabbables.push.apply(regularTabbables,elements):regularTabbables.push(element):orderedTabbables.push({documentOrder:i,tabIndex:candidateTabindex,item,isScope,content:elements})})),orderedTabbables.sort(sortOrderedTabbables).reduce((function(acc,sortable){return sortable.isScope?acc.push.apply(acc,sortable.content):acc.push(sortable.content),acc}),[]).concat(regularTabbables)},tabbable=function tabbable(el,options){var candidates;return candidates=(options=options||{}).getShadowRoot?getCandidatesIteratively([el],options.includeContainer,{filter:isNodeMatchingSelectorTabbable.bind(null,options),flatten:!1,getShadowRoot:options.getShadowRoot,shadowRootFilter:isValidShadowRootTabbable}):getCandidates(el,options.includeContainer,isNodeMatchingSelectorTabbable.bind(null,options)),sortByOrder(candidates)},focusable=function focusable(el,options){return(options=options||{}).getShadowRoot?getCandidatesIteratively([el],options.includeContainer,{filter:isNodeMatchingSelectorFocusable.bind(null,options),flatten:!0,getShadowRoot:options.getShadowRoot}):getCandidates(el,options.includeContainer,isNodeMatchingSelectorFocusable.bind(null,options))},isTabbable=function isTabbable(node,options){if(options=options||{},!node)throw new Error("No node provided");return!1!==matches.call(node,candidateSelector)&&isNodeMatchingSelectorTabbable(options,node)},focusableCandidateSelector=candidateSelectors.concat("iframe").join(","),isFocusable=function isFocusable(node,options){if(options=options||{},!node)throw new Error("No node provided");return!1!==matches.call(node,focusableCandidateSelector)&&isNodeMatchingSelectorFocusable(options,node)}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);