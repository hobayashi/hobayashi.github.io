(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},3913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,t,n){var r=n(8),o=n(1506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},9489:function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},8:function(e){function t(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(617))&&a.__esModule?a:{default:a},u=n(3367),s=n(4287),p=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var p=h[u];if(o.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?a=!1:n.add(p);else{var f=o.props[p],d=r[p]||new Set;"name"===p&&i||!d.has(f)?(d.add(f),r[p]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function y(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,p.isInAmpMode)(n)},t)}y.rewind=function(){};var g=y;t.default=g},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),c=n(8585),u=n(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var p=n(7294),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=f},5750:function(e,t,n){"use strict";n.r(t);var r=n(5893);t.default=function(e){return(0,r.jsxs)("div",{class:"app-card",children:[(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:e.appName}),(0,r.jsx)("dd",{children:e.description1}),(0,r.jsx)("dd",{children:e.description2}),(0,r.jsx)("dd",{children:(0,r.jsx)("a",{target:"brank",href:e.link,children:e.linkTitle})})]}),(0,r.jsx)("img",{src:e.image})]})}},8496:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),o=(0,r.jsx)("style",{children:"\nbody {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',\n\t\t'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n\t\t'Droid Sans', 'Helvetica Neue', sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ndt {\n\tfont-size: 1em;\n}\n\ndd {\n\tfont-size: 0.8em;\n}\n\na {\n\tcolor: rgb(27, 149, 224);\n}\n\n.app-card {\n\tdisplay: flex;\n\tmargin-bottom: 20px;\n}\n\n/* \u30b9\u30de\u30db\u3000767px\u4ee5\u4e0b */\n@media only screen and (max-width: 767px) {\n\t.app-card {\n\t\tdisplay: block;\n\t}\n\n\timg {\n\t\twidth: 50%;\n\t\theight: auto;\n\t}\n}\n/* pc\u3000768px\u4ee5\u4e0a */\n@media only screen and (min-width: 768px), print {\n\timg {\n\t\twidth: auto;\n\t\theight: 200px;\n\t}\n\n\tdl {\n\t\twidth: 40%;\n\t}\n}\n\n.App {\n\tbackground-color: #282c34;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: calc(10px + 2vmin);\n\tcolor: white;\n\tpadding: 1em;\n}\n"}),a=n(5750),i=n(9008),c=function(){return(0,r.jsxs)("div",{className:"App",children:[(0,r.jsxs)(i.default,{children:[o,(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("header",{className:"App-header",children:(0,r.jsx)("h1",{children:"Hobayashi's Portfolios"})}),(0,r.jsx)(a.default,{appName:"Key Drummer",description1:"Simple Sound Player.",description2:"Using Electron, TypeScript, jQuery.",link:"https://github.com/hobayashi/SoundSamplerVerE",linkTitle:"GitHub",image:"../static/images/KeyDrummerCaptured.png"}),(0,r.jsx)(a.default,{appName:"Dark Kakuge-Checker",description1:"Adapt Dark Mode UI to Kakuge-Checker.",description2:"Using Google Extentions, TypeScript.",link:"https://chrome.google.com/webstore/detail/dark-kakuge-checker/keaigfdapmnmnndndekncagmndhlppnp?hl=ja",linkTitle:"Chrome Web Store",image:"../static/images/DarkKakugeCheckerCaptured.jpeg"}),(0,r.jsx)(a.default,{appName:"Fighting Board for Android",description1:"Score Board App for Fighing Games.",description2:"Using C#, Xamarin.Android, Rx.",link:"https://play.google.com/store/apps/details?id=com.companyname.fightingboard",linkTitle:"Play Store",image:"../static/images/FightingBoardCaptured.webp"}),(0,r.jsx)(a.default,{appName:"Fighting Board for iOS",description1:"Score Board App for Fighing Games.",description2:"Using React.js, Next.js.",link:"https://apps.apple.com/jp/app/fighting-board/id1566082511",linkTitle:"App Store",image:"../static/images/FightingBoardRN.png"})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8496)}])},9008:function(e,t,n){e.exports=n(7947)}},function(e){e.O(0,[774],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);