WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-sidebar', location = 'node_modules/@atlassian/aui/src/js/aui/sidebar.js' */
("undefined"===typeof window?global:window).__35ff1875ff47a73afe1c7cfa63c3b7f7=function(){function h(a){return a&&a.__esModule?a:{"default":a}}function c(a){this.$el=(0,e.default)(a);if(this.$el.length){this.$body=(0,e.default)("body");this.$wrapper=this.$el.children(".aui-sidebar-wrapper");this.$body.addClass("aui-page-sidebar");this._previousOffsetTop=this._previousViewportWidth=this._previousViewportHeight=this._previousScrollTop=null;this.submenus=new g;var b=this;if((0,e.default)(".aui-sidebar").length){b.$el.on("mouseenter mouseleave click focus",
b.collapsedTriggersSelector,function(a){a=(0,e.default)(a.target);s(b,a)});if(z.default&&(0,A.default)("only screen and (max-device-width:1024px)"))(0,e.default)("body").addClass("aui-page-sidebar-touch");var d=null,c=function(){null===d&&(d=requestAnimationFrame(function(){b.reflow();d=null}))};(0,e.default)(window).on("scroll resize",c);b.reflow();if(b.isAnimated())b.$el.on("transitionend webkitTransitionEnd",function(){b.$el.trigger(e.default.Event(l+(b.isCollapsed()?"collapse-end":"expand-end")))});
b.$el.on("click",".aui-sidebar-toggle",function(a){a.preventDefault();b.toggle()});(0,e.default)(".aui-page-panel").click(function(){!b.isCollapsed()&&b.isViewportNarrow()&&b.collapse()});var t=function(a){a.which===o.default.LEFT_SQUARE_BRACKET&&(!a.shiftKey&&!a.ctrlKey&&!a.metaKey&&!(0,B.default)(a.target))&&b.toggle()};(0,e.default)(document).on("keypress",t);b._remove=function(){this._removeAllTooltips();(0,e.default)(this.inlineDialogSelector).remove();this.$el.off();this.$el.remove();(0,e.default)(document).off("keypress",
t);(0,e.default)(window).off("scroll resize",c)};b.$el.on("touchend",function(a){b.isCollapsed()&&(b.expand(),a.preventDefault())});b.$el.on("mouseenter focus",b.collapsedTriggersSelector,function(){if(b.isCollapsed()){var a=(0,e.default)(this);0!==m(a).length||u(a)}});b.$el.on("click blur mouseleave",b.collapsedTriggersSelector,function(){b.isCollapsed()&&v((0,e.default)(this))});b.$el.on("mouseenter focus",b.toggleSelector,function(){var a=(0,e.default)(this);b.isCollapsed()?a.data("tooltip","Expand sidebar ( [ )"):
a.data("tooltip","Collapse sidebar ( [ )");u(a)});b.$el.on("click blur mouseleave",b.toggleSelector,function(){v((0,e.default)(this))});b.$el.on("keydown",b.collapsedTriggersSelector,function(a){if(b.isCollapsed()){var d=a.target,c=w(d);if(c){var f=(0,e.default)(c);a.keyCode===o.default.TAB&&(!a.shiftKey&&!a.altKey)&&c.open&&(a.preventDefault(),f.attr("persistent",""),f.find(":aui-tabbable").first().focus(),setTimeout(function(){f.removeAttr("persistent")},100),f.on("keydown",
function(a){if(a.keyCode===o.default.TAB&&a.shiftKey&&a.target===f.find(":aui-tabbable")[0]||a.keyCode===o.default.TAB&&(!a.shiftKey&&!a.altKey)&&a.target===f.find(":aui-tabbable").last()[0])d.focus(),(0,e.default)(this).off("keydown"),q()}))}}})}var f=this;(0,e.default)(f.collapsedTriggersSelector).each(function(){var a=(0,e.default)(this);s(f,a)})}}function x(a){return e.default.map(a.split(" "),function(a){return l+a}).join(" ")}function g(){this.inlineDialog=null}function m(a){return a.is("a")?
a.next(".aui-nav"):a.children(".aui-nav, hr")}function w(a){a=a.getAttribute("aria-controls");return document.getElementById(a)}function q(){var a=document.querySelectorAll(c.prototype.inlineDialogSelector);Array.prototype.forEach.call(a,function(a){a.open=!1})}function s(a,b){if(!b.data("_aui-sidebar-submenu-constructed")&&(b.data("_aui-sidebar-submenu-constructed",!0),0!==m(b).length)){var d=document.createElement("aui-inline-dialog"),g=(0,C.default)("sidebar-submenu");b.attr("aria-controls",g);
b.attr("data-aui-trigger","");y.default.init(b);d.setAttribute("id",g);d.setAttribute("alignment","right top");d.setAttribute("aria-hidden","true");a.isCollapsed()&&d.setAttribute("responds-to","hover");(0,e.default)(d).addClass(c.prototype.inlineDialogClass);document.body.appendChild(d);y.default.init(d);d.addEventListener("aui-layer-show",function(c){if(a.isCollapsed()){b.addClass("active");d.innerHTML=D;var f=b.is("a")?b.text():b.children(".aui-nav-heading").text(),c=(0,e.default)(d).find(".aui-navgroup-inner");
c.children(".aui-nav-heading").attr("title",f).children("strong").text(f);f=m(b);f=(0,E.default)(f);f.hasClass("aui-expander-content")&&(f.find(".aui-expander-cutoff").remove(),f.removeClass("aui-expander-content"));f.appendTo(c)}else c.preventDefault()});d.addEventListener("aui-layer-hide",function(){b.removeClass("active")});return d}}function u(a){a.tipsy(F).tipsy("show");(a=a.data("tipsy")&&a.data("tipsy").$tip)&&a.css({opacity:""}).addClass("tooltip-shown")}function v(a){var b=a.data("tipsy")&&
a.data("tipsy").$tip;if(b){var d=b.css("transition-duration");d&&(d=0<=d.indexOf("ms")?parseInt(d.substring(0,d.length-2),10):1E3*parseInt(d.substring(0,d.length-1),10),setTimeout(function(){a.tipsy("hide")},d));b.removeClass("tooltip-shown")}}var p={};"use strict";Object.defineProperty(p,"__esModule",{value:!0});var e=h(__02fa0d2334b5d2f9701871403ba9d89a);__cc64a0d7c308ad5954e00f06c2bcc6ed;__5ca5c5ddaacf5652a879cfec07ca5db7;__ff21a71b857b101095156bf4ff8b27ac;var E=h(__8a777f37cbfa8f7456cf8bf6fd300c3f),
k;var i=__9ea35e3451360b72ebe8cb8006239936;if(i&&i.__esModule)k=i;else{var n={};if(null!=i)for(k in i)Object.prototype.hasOwnProperty.call(i,k)&&(n[k]=i[k]);n.default=i;k=n}var i=h(__fb27ffae84b96c14bf339e62cefcf116),z=h(__2d5f094064a34a526c3e143503c89b91),B=h(__bd483f5e8ad6ed1962e7a119675a0b66),o=h(__d92d89c196b4703777e79d25a9f94b7f),A=h(__233c61f178d7afeb305a2369d3ca4c77),y=h(__da172e72afc5a7088e3034df761062a6),C=h(__327dbe0b6617f3273ea9b3fc2d1dda83),n=h(__ecaadce486e7be7002d8453fc51f9873),G="undefined"!==
typeof document.documentElement.style.transition||"undefined"!==typeof document.documentElement.style.webkitTransition,l="_aui-internal-sidebar-";c.prototype.on=function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1),a=x(a);this.$el.on.apply(this.$el,[a].concat(b));return this};c.prototype.off=function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1),a=x(a);this.$el.off.apply(this.$el,[a].concat(b));return this};c.prototype.setHeight=function(a,b,d){a=Math.max(0,d-a);
this.$wrapper.height(b-a);return this};c.prototype.setPosition=function(a){a=a||window.pageYOffset;this.$wrapper.toggleClass("aui-is-docked",a>this.$el.offset().top);return this};c.prototype.setCollapsedState=function(a){var b={collapsed:{},expanded:{}};b.collapsed.narrow={narrow:e.default.noop,wide:function(b){b._expand(a,!0)}};b.collapsed.wide={narrow:e.default.noop,wide:e.default.noop};b.expanded.narrow={narrow:e.default.noop,wide:function(a){a.$body.removeClass("aui-sidebar-collapsed");a.$el.removeClass("aui-sidebar-fly-out")}};
b.expanded.wide={narrow:function(a){a._collapse(!0)},wide:e.default.noop};var d=this.isCollapsed()?"collapsed":"expanded",c=this.isViewportNarrow(this._previousViewportWidth)?"narrow":"wide",g=this.isViewportNarrow(a)?"narrow":"wide";b[d][c][g](this);return this};c.prototype._collapse=function(a){if(this.isCollapsed())return this;var b=e.default.Event(l+"collapse-start",{isResponsive:a});this.$el.trigger(b);if(b.isDefaultPrevented())return this;this.$body.addClass("aui-sidebar-collapsed");this.$el.attr("aria-expanded",
"false");this.$el.removeClass("aui-sidebar-fly-out");this.$el.find(this.submenuTriggersSelector).attr("tabindex",0);(0,e.default)(this.inlineDialogSelector).attr("responds-to","hover");this.isAnimated()||this.$el.trigger(e.default.Event(l+"collapse-end",{isResponsive:a}));return this};c.prototype.collapse=function(){return this._collapse(!1)};c.prototype._expand=function(a,b){var d=e.default.Event(l+"expand-start",{isResponsive:b});this.$el.trigger(d);if(d.isDefaultPrevented())return this;d=this.isViewportNarrow(a);
this.$el.attr("aria-expanded","true");this.$body.toggleClass("aui-sidebar-collapsed",d);this.$el.toggleClass("aui-sidebar-fly-out",d);this.$el.find(this.submenuTriggersSelector).removeAttr("tabindex");(0,e.default)(this.inlineDialogSelector).removeAttr("responds-to");this.isAnimated()||this.$el.trigger(e.default.Event(l+"expand-end",{isResponsive:b}));return this};c.prototype.expand=function(){this.isCollapsed()&&this._expand(this._previousViewportWidth,!1);return this};c.prototype.isAnimated=function(){return G&&
this.$el.hasClass("aui-is-animated")};c.prototype.isCollapsed=function(){return"false"===this.$el.attr("aria-expanded")};c.prototype.isViewportNarrow=function(a){a=void 0===a?this._previousViewportWidth:a;return 1240>a};c.prototype._removeAllTooltips=function(){(0,e.default)(this.tooltipSelector).remove()};c.prototype.responsiveReflow=function(a,b){if(a){if(!this.isCollapsed()&&this.isViewportNarrow(b)){var d=this.isAnimated();d&&this.$el.removeClass("aui-is-animated");this.collapse();d&&(this.$el[0].offsetHeight,
this.$el.addClass("aui-is-animated"))}}else b!==this._previousViewportWidth&&this.setCollapsedState(b)};c.prototype.reflow=function(a,b,d,c){var a=void 0===a?window.pageYOffset:a,b=void 0===b?document.documentElement.clientHeight:b,c=void 0===c?document.documentElement.scrollHeight:c,d=void 0===d?window.innerWidth:d,e=this.$el.offset().top,f=null===this._previousViewportWidth;if(!(a===this._previousScrollTop&&b===this._previousViewportHeight&&e===this._previousOffsetTop)){this.isCollapsed()&&(!f&&
a!==this._previousScrollTop)&&(q(),this._removeAllTooltips());var g=this.$body.hasClass("aui-page-sidebar-touch"),c=a!==this._previousScrollTop&&(0>a||a+b>c);if(!g&&(f||!c))this.setHeight(a,b,e),this.setPosition(a)}"false"!==this.$el.attr("data-aui-responsive")?this.responsiveReflow(f,d):(f=!this.isCollapsed()&&this.isViewportNarrow(d),this.$el.toggleClass("aui-sidebar-fly-out",f));this._previousScrollTop=a;this._previousViewportHeight=b;this._previousViewportWidth=d;this._previousOffsetTop=e;return this};
c.prototype.toggle=function(){this.isCollapsed()?(this.expand(),this._removeAllTooltips()):this.collapse();return this};c.prototype.submenuTriggersSelector=".aui-sidebar-group:not(.aui-sidebar-group-tier-one)";c.prototype.collapsedTriggersSelector=[c.prototype.submenuTriggersSelector,".aui-sidebar-group.aui-sidebar-group-tier-one > .aui-nav > li > a",".aui-sidebar-footer > .aui-sidebar-settings-button"].join(", ");c.prototype.toggleSelector=".aui-sidebar-footer > .aui-sidebar-toggle";c.prototype.tooltipSelector=
".aui-sidebar-section-tooltip";c.prototype.inlineDialogClass="aui-sidebar-submenu-dialog";c.prototype.inlineDialogSelector="."+c.prototype.inlineDialogClass;g.prototype.submenu=function(a){j();return m(a)};g.prototype.hasSubmenu=function(a){j();return 0!==m(a).length};g.prototype.submenuHeadingHeight=function(){j();return 34};g.prototype.isShowing=function(){j();return c.prototype.isSubmenuVisible()};g.prototype.show=function(a,b){j();w(b).open=!0};g.prototype.hide=function(){j();q()};g.prototype.inlineDialogShowHandler=
function(){j()};g.prototype.inlineDialogHideHandler=function(){j()};g.prototype.moveSubmenuToInlineDialog=function(){j()};g.prototype.restoreSubmenu=function(){j()};c.prototype.getVisibleSubmenus=function(){return Array.prototype.filter.call(document.querySelectorAll(c.prototype.inlineDialogSelector),function(a){return a.open})};c.prototype.isSubmenuVisible=function(){return 0<this.getVisibleSubmenus().length};var D='<div class="aui-inline-dialog-contents"><div class="aui-sidebar-submenu" ><div class="aui-navgroup aui-navgroup-vertical"><div class="aui-navgroup-inner"><div class="aui-nav-heading"><strong></strong></div></div></div></div></div>',
F={trigger:"manual",gravity:"w",className:"aui-sidebar-section-tooltip",title:function(){var a=(0,e.default)(this);return a.is("a")?a.attr("title")||a.find(".aui-nav-item-label").text()||a.data("tooltip"):a.children(".aui-nav").attr("title")||a.children(".aui-nav-heading").text()}},r=(0,n.default)("sidebar",c);(0,e.default)(function(){r(".aui-sidebar")});var j=k.getMessageLogger("Sidebar.submenus",{removeInVersion:"8.0",sinceVersion:"5.8"});(0,i.default)("sidebar",r);p.default=r;return p=p["default"]}.call(this);
}catch(e){WRMCB(e)};