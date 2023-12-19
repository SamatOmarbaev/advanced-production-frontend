"use strict";(self.webpackChunkproduction_react_practice=self.webpackChunkproduction_react_practice||[]).push([[384],{"./src/pages/MainPage/ui/MainPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MainPage_stories});var react=__webpack_require__("./node_modules/react/index.js"),ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let ui_BugButton=function(){var t=(0,es.$G)().t,_useState=_sliced_to_array((0,react.useState)(!1),2),error=_useState[0],setError=_useState[1];return(0,react.useEffect)(function(){if(error)throw Error()},[error]),react.createElement(Button.z,{onClick:function(){return setError(!0)}},t("throw error"))};var ui_PageError=__webpack_require__("./src/widgets/PageError/ui/PageError.tsx");try{PageError.displayName="PageError",PageError.__docgenInfo={description:"",displayName:"PageError",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/PageError/index.tsx#PageError"]={docgenInfo:PageError.__docgenInfo,name:"PageError",path:"src/widgets/PageError/index.tsx#PageError"})}catch(__react_docgen_typescript_loader_error){}function _assert_this_initialized(self1){if(void 0===self1)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self1}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _get_prototype_of(o){return(_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _possible_constructor_return(self1,call){return call&&("object"===_type_of(call)||"function"==typeof call)?call:_assert_this_initialized(self1)}function _set_prototype_of(o,p){return(_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _create_super(Derived){var hasNativeReflectConstruct=_is_native_reflect_construct();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);if(hasNativeReflectConstruct){var NewTarget=_get_prototype_of(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possible_constructor_return(this,result)}}var ErrorBoundary_ErrorBoundary=function(_React_Component){_inherits(ErrorBoundary1,_React_Component);var _super=_create_super(ErrorBoundary1);function ErrorBoundary1(props){var _this;return _class_call_check(this,ErrorBoundary1),(_this=_super.call(this,props)).state={hasError:!1},_this}return _create_class(ErrorBoundary1,[{key:"componentDidCatch",value:function componentDidCatch(error,info){console.log(error,info)}},{key:"render",value:function render(){var hasError=this.state.hasError,children=this.props.children;return hasError?react.createElement(react.Suspense,{fallback:""},react.createElement(ui_PageError.Z,null)):children}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(error){return{hasError:!0}}}]),ErrorBoundary1}(react.Component);try{ErrorBoundary_ErrorBoundary.displayName="ErrorBoundary",ErrorBoundary_ErrorBoundary.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx#ErrorBoundary"]={docgenInfo:ErrorBoundary_ErrorBoundary.__docgenInfo,name:"ErrorBoundary",path:"src/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx#ErrorBoundary"})}catch(__react_docgen_typescript_loader_error){}try{ErrorBoundary.displayName="ErrorBoundary",ErrorBoundary.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ErrorBoundary/index.tsx#ErrorBoundary"]={docgenInfo:ErrorBoundary.__docgenInfo,name:"ErrorBoundary",path:"src/app/providers/ErrorBoundary/index.tsx#ErrorBoundary"})}catch(__react_docgen_typescript_loader_error){}let MainPage_stories={title:"pages/MainPage",component:function MainPage(){var t=(0,es.$G)("main").t;return react.createElement("div",null,react.createElement(ui_BugButton,null),t("Главная страница"))},tags:["autodocs"]};var Light={},Dark={decorators:[function(Story){return react.createElement(ThemeDecorator.F,{theme:ThemeProvider.Q2.DARK},react.createElement(Story,null))}]};Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => <ThemeDecorator theme={Theme.DARK}>\r\n        <Story />\r\n      </ThemeDecorator>]\n}",...Dark.parameters?.docs?.source}}};let __namedExportsOrder=["Light","Dark"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button--a4nOa{color:var(--primary-color);cursor:pointer}.src-shared-ui-Button-Button-module__clear--FAEtI{display:flex;padding:0;background:none;border:none;outline:none}.src-shared-ui-Button-Button-module__outline--pxBl_{padding:10px 15px;color:var(--primary-color);background:none;border:1px solid var(--primary-color)}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,mDACE,0BAAA,CACA,cAAA,CAGF,kDACE,YAAA,CACA,SAAA,CACA,eAAA,CACA,WAAA,CACA,YAAA,CAGF,oDACE,iBAAA,CACA,0BAAA,CACA,eAAA,CACA,qCAAA",sourcesContent:[".Button {\r\n  color: var(--primary-color);\r\n  cursor: pointer;\r\n}\r\n\r\n.clear {\r\n  display: flex;\r\n  padding: 0;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.outline {\r\n  padding: 10px 15px;\r\n  color: var(--primary-color);\r\n  background: none;\r\n  border: 1px solid var(--primary-color);\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-shared-ui-Button-Button-module__Button--a4nOa",clear:"src-shared-ui-Button-Button-module__clear--FAEtI",outline:"src-shared-ui-Button-Button-module__outline--pxBl_"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-PageError-ui-PageError-module__PageError--HSFBb{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100vh}","",{version:3,sources:["webpack://./src/widgets/PageError/ui/PageError.module.scss"],names:[],mappings:"AAAA,6DACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CACA,YAAA",sourcesContent:[".PageError {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={PageError:"src-widgets-PageError-ui-PageError-module__PageError--HSFBb"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},additional=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return[cls].concat(_to_consumable_array(additional.filter(Boolean)),_to_consumable_array(Object.entries(mods).filter(function(param){var _param=_sliced_to_array(param,2);return _param[0],!!_param[1]}).map(function(param){return _sliced_to_array(param,1)[0]}))).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>classNames})},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button,b:()=>ButtonTheme});var ButtonTheme,react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Button_module.Z,options);let Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}!function(ButtonTheme){ButtonTheme.CLEAR="clear",ButtonTheme.OUTLINE="outline"}(ButtonTheme||(ButtonTheme={}));var Button=function(props){var className=props.className,theme=props.theme,children=props.children,restProps=(props.type,_object_without_properties(props,["className","theme","children","type"]));return react.createElement("button",_object_spread({className:(0,classNames.A)(Button_Button_module.Button,{},[className,Button_Button_module[theme]]),type:"button"},restProps),children)};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"outline"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/PageError/ui/PageError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ui_PageError});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PageError_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(PageError_module.Z,options);let ui_PageError_module=PageError_module.Z&&PageError_module.Z.locals?PageError_module.Z.locals:void 0;var PageError1=function(param){var className=param.className,t=(0,es.$G)().t;return react.createElement("div",{className:(0,classNames.A)(ui_PageError_module.PageError,{},[className])},react.createElement("p",null,t("Произошла непредвиденная ошибка")),react.createElement("button",{onClick:function(){window.location.reload()},type:"button"},t("Перезагрузить страницу")))};let ui_PageError=PageError1;try{PageError1.displayName="PageError",PageError1.__docgenInfo={description:"",displayName:"PageError",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/PageError/ui/PageError.tsx#PageError"]={docgenInfo:PageError1.__docgenInfo,name:"PageError",path:"src/widgets/PageError/ui/PageError.tsx#PageError"})}catch(__react_docgen_typescript_loader_error){}}}]);