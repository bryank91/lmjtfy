(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{"/UD3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){var t="string"==typeof e?e+".":"";return function(e){var n=function(n){function a(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.triggerAnalytics=e.triggerAnalytics.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,n),o(a,[{key:"triggerAnalytics",value:function(e,n){if("string"==typeof e&&e){var o=this.context.store.getState().session.analytics.get("searchSessionId"),a=o?r({searchReferrerId:(0,s.dangerouslyCreateSafeString)(o)},n):n;this.context.store.dispatch((0,c.analyticsTrigger)(t+e,a))}}},{key:"render",value:function(){return i.default.createElement(e,r({triggerAnalytics:this.triggerAnalytics},this.props))}}]),a}(a.Component);return n.WrappedComponent=e,n.contextTypes={store:u.storeShape.isRequired},n}};var a=n("ERkP"),i=function(e){return e&&e.__esModule?e:{default:e}}(a),u=n("jCA7"),s=n("WH6C"),c=n("KDu/")},"0TBH":function(e,t,n){"use strict";n.r(t);var r=n("Rhu4"),o=n.n(r),a=n("aq5/"),i=n.n(a),u=n("4Mt5"),s=n.n(u),c=n("7xyS"),l=n.n(c),d=n("k2Qk"),f=n.n(d),p=n("Fxww"),h=n.n(p),y=n("ERkP"),g=n.n(y),m=n("aWzz"),v=n.n(m),b=n("KsTJ"),C=n("eeTS"),w=n("/GOs"),_=n.n(w),E=n("0vwV"),k=n.n(E),R=function(e){return g.a.createElement("div",e)},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R,n=function(n){function r(){return i()(this,r),l()(this,(r.__proto__||o()(r)).apply(this,arguments))}return f()(r,n),s()(r,[{key:"getChildContext",value:function(){var t=this;return _()(e).reduce(function(e,n){return"children"!==n&&(e[n]=t.props[n]),e},{})}},{key:"render",value:function(){var e=this.props,n=e.children,r=k()(e,["children"]);if(null!==t)return g.a.createElement(t,null,this.props.children);if(1===g.a.Children.count(n)){var o=n;return g.a.Children.only(g.a.cloneElement(o,r))}throw Error("Only one child should exist when base component is null")}}]),r}(y.Component);return n.displayName="withContextFromProps",n.childContextTypes=e,n},T={blockChildGatewayRender:v.a.bool},j=O(T,null),P=function(){function e(){i()(this,e),this.containers={},this.children={},this.currentId=0}return s()(e,[{key:"renderContainer",value:function(e,t){var n=this;if(this.containers[e]&&this.children[e]){var r=_()(this.children[e]).sort(),o=r.length,a=r.indexOf(t);this.containers[e].setState({children:r.map(function(r,i){var u=o-(i+1),s=Object(y.cloneElement)(n.children[e][r].child,{stackIndex:u,stackTotal:o}),c=null!=t&&i<a;return g.a.createElement(j,{blockChildGatewayRender:c,key:r},s)})})}}},{key:"addContainer",value:function(e,t){this.containers[e]=t,this.renderContainer(e)}},{key:"removeContainer",value:function(e){this.containers[e]=null}},{key:"addChild",value:function(e,t,n){this.children[e][t]={child:n},this.renderContainer(e,t)}},{key:"clearChild",value:function(e,t){delete this.children[e][t]}},{key:"register",value:function(e,t){this.children[e]=this.children[e]||{};var n=e+"_"+this.currentId;return this.children[e][n]={child:t},this.currentId+=1,n}},{key:"unregister",value:function(e,t){this.clearChild(e,t),this.renderContainer(e)}}]),e}(),x=function(e){function t(e,n){i()(this,t);var r=l()(this,(t.__proto__||o()(t)).call(this,e,n));return r.id="",r.gatewayRegistry=n.gatewayRegistry,r}return f()(t,e),s()(t,[{key:"componentWillMount",value:function(){this.id=this.gatewayRegistry.register(this.props.into,this.props.children),this.renderIntoGatewayNode(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.shouldBlockRender||(this.gatewayRegistry.clearChild(this.props.into,this.id),this.renderIntoGatewayNode(e))}},{key:"componentWillUnmount",value:function(){this.gatewayRegistry.unregister(this.props.into,this.id)}},{key:"renderIntoGatewayNode",value:function(e){this.gatewayRegistry.addChild(this.props.into,this.id,e.children)}},{key:"render",value:function(){return null}}]),t}(y.Component);x.contextTypes={gatewayRegistry:v.a.instanceOf(P).isRequired};var S=x,A=function(e){function t(e,n){i()(this,t);var r=l()(this,(t.__proto__||o()(t)).call(this,e,n));return r.state={children:null},r.gatewayRegistry=n.gatewayRegistry,r}return f()(t,e),s()(t,[{key:"componentWillMount",value:function(){this.gatewayRegistry.addContainer(this.props.name,this)}},{key:"componentWillUnmount",value:function(){this.gatewayRegistry.removeContainer(this.props.name)}},{key:"render",value:function(){var e=this.props,t=e.component,n=k()(e,["component"]);return delete n.name,Object(y.createElement)(t,n,this.state.children)}}]),t}(y.Component);A.contextTypes={gatewayRegistry:v.a.instanceOf(P).isRequired},A.defaultProps={component:"div"};var G=A,N=function(e){function t(e,n){i()(this,t);var r=l()(this,(t.__proto__||o()(t)).call(this,e,n));return r.gatewayRegistry=new P,r}return f()(t,e),s()(t,[{key:"getChildContext",value:function(){return{gatewayRegistry:this.gatewayRegistry}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.component;return g.a.createElement(n,null,t)}}]),t}(y.Component);N.childContextTypes={gatewayRegistry:v.a.instanceOf(P).isRequired},N.defaultProps={component:"div"};var I=N,D=h()(["\n  position: relative;\n  z-index: 0;\n"],["\n  position: relative;\n  z-index: 0;\n"]),F=b.default.div(D),M=function(e){function t(){var e,n,r,a;i()(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=l()(this,(e=t.__proto__||o()(t)).call.apply(e,[this].concat(s))),r.state={ariaHiddenNode:void 0},r.getAppRef=function(e){r.state.ariaHiddenNode||r.setState({ariaHiddenNode:e})},a=n,l()(r,a)}return f()(t,e),s()(t,[{key:"getChildContext",value:function(){return{ariaHiddenNode:this.state.ariaHiddenNode}}},{key:"render",value:function(){var e=this.props.children;return g.a.createElement(I,null,g.a.createElement(F,{innerRef:this.getAppRef},y.Children.only(e)),g.a.createElement(G,{name:"modal",component:C.TransitionGroup}),g.a.createElement(G,{name:"spotlight",component:C.TransitionGroup}),g.a.createElement(G,{name:"flag"}),g.a.createElement(G,{name:"tooltip",component:C.TransitionGroup}))}}]),t}(y.Component);M.childContextTypes={ariaHiddenNode:v.a.object};var W=M,H=n("CCu2"),q=n.n(H),z=n("7nmT"),U=function(e){var t=e.children;return y.Children.toArray(t)[0]||null},L=function(e){function t(){var e,n,r,a;i()(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=l()(this,(e=t.__proto__||o()(t)).call.apply(e,[this].concat(s))),r.portalElement=null,r.mountTimeout=null,r.renderChildren=function(e){var t=r.props,n=t.theme,o=t.withTransitionGroup;return g.a.createElement(b.ThemeProvider,{theme:n},o?g.a.createElement(C.TransitionGroup,{component:U},e):e)},a=n,l()(r,a)}return f()(t,e),s()(t,[{key:"componentDidMount",value:function(){var e=this,t=document.createElement("span");document.body&&(document.body.appendChild(t),this.portalElement=t,this.mountTimeout=setTimeout(function(){return e.componentDidUpdate()},1))}},{key:"componentDidUpdate",value:function(){var e=this.props.children;if(this.portalElement){var t=this.portalElement;Object(z.render)(this.renderChildren(e),t)}}},{key:"componentWillUnmount",value:function(){if(this.mountTimeout&&clearTimeout(this.mountTimeout),this.portalElement){var e=this.portalElement;Object(z.render)(this.renderChildren(),e,function(){setTimeout(function(){var t=document.body;t&&(Object(z.unmountComponentAtNode)(e),t.removeChild(e))},5e3)})}}},{key:"render",value:function(){return null}}]),t}(y.Component),B=Object(b.withTheme)(L);function J(e){return g.a.createElement(b.ThemeProvider,{theme:{}},g.a.createElement(B,e))}function K(e,t){var n,r,a=e.target,u=e.withTransitionGroup,c={onAnalyticsEvent:v.a.func,getParentAnalyticsData:v.a.func,getAtlaskitAnalyticsContext:v.a.func,getAtlaskitAnalyticsEventHandlers:v.a.func},d={store:v.a.object,intl:v.a.object,triggerAnalytics:v.a.func,internalFormContext:v.a.object,validateColumn:v.a.func,createColumnMenu:v.a.func,getScrollTop:v.a.func,configuration:v.a.object,getDraggableOriginCenterPos:v.a.func,getDraggableTranslatedCenterPos:v.a.func,akProfileClient:v.a.object,cloudId:v.a.string,subscribeEngagementState:v.a.func,perfMetricsStart:v.a.func,spotlightRegistry:v.a.object,slideRight:v.a.func,consumerStore:v.a.object,onBarSelected:v.a.func},p=q()({},c,d),h=O(p,null);return r=n=function(e){function n(){var e,t,r,a;i()(this,n);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return t=r=l()(this,(e=n.__proto__||o()(n)).call.apply(e,[this].concat(s))),r.getWrappedComponentRef=function(e){r.gatewayOrPortalChildRef=e},a=t,l()(r,a)}return f()(n,e),s()(n,[{key:"render",value:function(){var e=this.context,n=e.gatewayRegistry,r=k()(e,["gatewayRegistry"]),o=n?S:J;return g.a.createElement(o,{id:"",into:a,withTransitionGroup:u,shouldBlockRender:this.context.blockChildGatewayRender},g.a.createElement(h,r,g.a.createElement(t,q()({ref:this.getWrappedComponentRef},this.props))))}}]),n}(y.Component),n.contextTypes=q()({gatewayRegistry:v.a.instanceOf(P),blockChildGatewayRender:v.a.bool},c,d),r}var Q=n("J/bR"),Y=n.n(Q),V=function(e){function t(){var e,n,r,a;i()(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=l()(this,(e=t.__proto__||o()(t)).call.apply(e,[this].concat(s))),r.initFromProps=!1,r.teardownFromProps=!1,r.initialise=function(){var e=r.props.autoFocus;if(r.ariaHiddenNode=r.props.ariaHiddenNode||r.context.ariaHiddenNode,r.ariaHiddenNode&&r.ariaHiddenNode.setAttribute("aria-hidden",""),"function"==typeof e){var t=e();t&&t.focus&&t.focus()}},r.teardown=function(){r.ariaHiddenNode&&r.ariaHiddenNode.removeAttribute("aria-hidden")},a=n,l()(r,a)}return f()(t,e),s()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.enabled;"function"==typeof e.autoFocus&&console.warn('@atlaskit/layer-manager: Passing a function as autoFocus in FocusLock is deprecated. Please see "Auto focusing an element" in https://atlaskit.atlassian.com/packages/core/layer-manager'),t&&this.initialise()}},{key:"componentWillUnmount",value:function(){this.initFromProps||this.teardownFromProps||this.teardown()}},{key:"componentDidUpdate",value:function(e){this.props.enabled&&this.props.enabled!==e.enabled&&(this.initFromProps=!0,this.initialise()),this.props.enabled||this.props.enabled===e.enabled||(this.teardownFromProps=!0,this.teardown())}},{key:"render",value:function(){var e=this.props,t=e.enabled,n=e.autoFocus,r=e.returnFocus;return g.a.createElement(Y.a,{disabled:!t,autoFocus:!!n,returnFocus:r},this.props.children)}}]),t}(y.Component);V.contextTypes={ariaHiddenNode:v.a.object},V.defaultProps={autoFocus:!0,enabled:!0,returnFocus:!0};var X=V,Z=n("hnTD"),$=n.n(Z);n.d(t,"default",function(){return W}),n.d(t,"withContextFromProps",function(){return O}),n.d(t,"withRenderTarget",function(){return K}),n.d(t,"FocusLock",function(){return X}),n.d(t,"Portal",function(){return J}),n.d(t,"Gateway",function(){return S}),n.d(t,"GatewayDest",function(){return G}),n.d(t,"GatewayProvider",function(){return I}),n.d(t,"GatewayRegistry",function(){return P}),n.d(t,"ScrollLock",function(){return $.a})},GAhE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("ERkP"),s=m(u),c=m(n("aWzz")),l=n("L21V"),d=n("Jygk"),f=m(n("2srY")),p=m(n("OOEx")),h=m(n("MXLj")),y=n("WH6C"),g=m(n("/UD3"));function m(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=(0,m(n("IG/b")).default)(h.default),C=(o=r=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={caughtError:null},v(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),i(t,[{key:"componentDidCatch",value:function(e,t){var n=this;setTimeout(function(){throw e},0),this.setState({caughtError:{error:e,info:t}},function(){n.props.triggerAnalytics("unhandled.error",a({errorMessage:(0,y.dangerouslyCreateSafeString)(n._getErrorString()),traceId:(0,y.dangerouslyCreateSafeString)(n._getTraceId()),browserInfo:(0,y.dangerouslyCreateSafeString)(d.navigator.userAgent)},n.props.analyticData))})}},{key:"_getTraceId",value:function(){var e=this.state.caughtError.error;return(0,f.default)(e,"graphQLErrors[0].traceId")}},{key:"_getErrorString",value:function(){var e=this.state.caughtError,t=e.error,n=e.info;return"Error: "+(t.message||String(t))+".\nError info: "+n.componentStack+".\nTrace ID: "+(0,f.default)(t,"graphQLErrors[0].traceId")}},{key:"_renderErrorDetail",value:function(){return s.default.createElement(l.FormattedMessage,{id:"editor.adf.parsing.error.message.prod",tagName:"p"})}},{key:"render",value:function(){var e=this.state.caughtError,t=this.props,n=t.modal,r=t.intl;if(!e)return this.props.children;if(n){var o=r.formatMessage({id:"error.server-error.title"}),a=[{text:n.closeText||r.formatMessage({id:"close.name"}),onClick:n.onClose||null}];return s.default.createElement(b,{isOpen:!0,appearance:"danger",heading:o,actions:a},this._renderErrorDetail({}))}return s.default.createElement("div",{style:{padding:20}},s.default.createElement("h3",null,s.default.createElement("span",{style:{color:"#DE350B",marginRight:10}},s.default.createElement(p.default,{size:"medium",label:""})),r.formatMessage({id:"error.server-error.title"})),this._renderErrorDetail())}}]),t}(),r.propTypes={children:c.default.node.isRequired,triggerAnalytics:c.default.func,analyticData:c.default.object,intl:l.intlShape,modal:c.default.oneOfType([c.default.shape({closeText:c.default.string,onClose:c.default.func})])},r.defaultProps={analyticData:{},modal:null},o);t.default=(0,g.default)("confluence.spa")((0,l.injectIntl)(C))},"IG/b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.contextTypesNeeded=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n("ERkP")),i=s(n("aWzz")),u=n("0TBH");function s(e){return e&&e.__esModule?e:{default:e}}var c=t.contextTypesNeeded={insertCss:i.default.func,intl:i.default.object,store:i.default.object,router:i.default.object,client:i.default.object.isRequired,operations:i.default.object},l=(0,u.withContextFromProps)(c);t.default=function(e){var t,n;return n=t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.default.Component),o(n,[{key:"getComponentWithContext",value:function(e){var t=this;return function(n){return t.getElementsWithContext(a.default.createElement(e,n))}}},{key:"getElementsWithContext",value:function(e){return a.default.createElement(l,this.context,e)}},{key:"render",value:function(){var t=this.props,n=t.header,o=t.footer,i=t.children,u=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["header","footer","children"]);return a.default.createElement(e,r({},u,{header:n?this.getComponentWithContext(n):void 0,footer:o?this.getComponentWithContext(o):void 0}),this.getElementsWithContext(i))}}]),n}(),t.contextTypes=c,t.displayName="ModalWithContext("+e.name+")",t.propTypes={header:i.default.func,footer:i.default.func,children:i.default.oneOfType([i.default.element,i.default.array])},t.defaultProps={header:void 0,footer:void 0,children:null},n}},"KDu/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.ANALYTICS_TRIGGER="ANALYTICS_TRIGGER";t.analyticsTrigger=function(e,t){return{type:r,meta:{analytics:{name:e,data:t}}}}},jCA7:function(e,t,n){"use strict";t.__esModule=!0,t.storeShape=t.subscriptionShape=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n("aWzz"));t.subscriptionShape=r.default.shape({trySubscribe:r.default.func.isRequired,tryUnsubscribe:r.default.func.isRequired,notifyNestedSubs:r.default.func.isRequired,isSubscribed:r.default.func.isRequired}),t.storeShape=r.default.shape({subscribe:r.default.func.isRequired,dispatch:r.default.func.isRequired,getState:r.default.func.isRequired})}}]);
//# sourceMappingURL=184.62290cb77092c503feaf-v33.js.map