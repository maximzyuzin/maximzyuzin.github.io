"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[551],{"./src/components/ProductCart/ProductCart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Курс обучения React - OTUS / Components / ProductCart",component:__webpack_require__("./src/components/ProductCart/ProductCart.tsx").A,tags:["autodocs"]};var Default={args:{name:"Товар №1",price:77777,image:"https://img2.freepng.ru/20180806/siu/kisspng-laptop-asus-zenbook-3-intel-core-i5-cebrac-5b67cb65470759.909331961533528933291.jpg"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'Товар №1',\n    price: 77777,\n    image: 'https://img2.freepng.ru/20180806/siu/kisspng-laptop-asus-zenbook-3-intel-core-i5-cebrac-5b67cb65470759.909331961533528933291.jpg'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[16].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProductCart/ProductCart.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".short-product-card__LkQfK{display:block;position:relative;width:600px;height:80px;padding:26px 24px 20px 24px;font-size:13px;color:var(--primary-color-text);box-sizing:border-box;transition:.2s linear;background-color:var(--white-color-background)}","",{version:3,sources:["webpack://./src/components/ProductCart/ProductCart.module.scss"],names:[],mappings:"AAAA,2BACE,aAAA,CACA,iBAAA,CACA,WAAA,CACA,WAAA,CACA,2BAAA,CACA,cAAA,CACA,+BAAA,CACA,qBAAA,CACA,qBAAA,CACA,8CAAA",sourcesContent:[".short-product-card {\n  display: block;\n  position: relative;\n  width: 600px;\n  height: 80px;\n  padding: 26px 24px 20px 24px;\n  font-size: 13px;\n  color: var(--primary-color-text);\n  box-sizing: border-box;\n  transition: 0.2s linear;\n  background-color: var(--white-color-background);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={shortProductCard:"short-product-card__LkQfK"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/ProductCart/ProductCart.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ProductCart});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ProductCart_module=__webpack_require__("./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[16].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProductCart/ProductCart.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ProductCart_module.A,options);const ProductCart_ProductCart_module=ProductCart_module.A&&ProductCart_module.A.locals?ProductCart_module.A.locals:void 0;var DeleteOutlineSharp=__webpack_require__("./node_modules/@mui/icons-material/DeleteOutlineSharp.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProductCart=function ProductCart(_ref){var price=_ref.price,image=_ref.image,name=(_ref.description,_ref.name);return(0,jsx_runtime.jsx)("div",{className:ProductCart_ProductCart_module.shortProductCard,children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#F5F7FF"},children:[(0,jsx_runtime.jsx)("img",{height:"70px",src:image}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{children:name}),"  "]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("h3",{children:price+" P"})}),(0,jsx_runtime.jsx)(DeleteOutlineSharp.A,{style:{padding:"10px"}})]})})};ProductCart.displayName="ProductCart";try{ProductCart.displayName="ProductCart",ProductCart.__docgenInfo={description:"",displayName:"ProductCart",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductCart/ProductCart.tsx#ProductCart"]={docgenInfo:ProductCart.__docgenInfo,name:"ProductCart",path:"src/components/ProductCart/ProductCart.tsx#ProductCart"})}catch(__react_docgen_typescript_loader_error){}}}]);