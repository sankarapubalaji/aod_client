;/*FB_PKG_DELIM*/

__d("CometProfileVerificationBadgePopoverQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6477118522380066"}),null);
__d("CometProfileVerificationBadgePopoverQuery$Parameters",["CometProfileVerificationBadgePopoverQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometProfileVerificationBadgePopoverQuery_facebookRelayOperation"),metadata:{},name:"CometProfileVerificationBadgePopoverQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometDeferredPopoverTrigger.react",["BasePopoverTrigger.react","CometPopoverLoadingState.react","deferredLoadComponent","react","tracePolicyFromResource","useCometPopoverInteractionTracing"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.doNotCloseOnOutsideClick,d=a.fallback,e=a.popoverProps,f=a.popoverResource,g=a.preloadTrigger,h=a.tracePolicy;a=babelHelpers.objectWithoutPropertiesLoose(a,["doNotCloseOnOutsideClick","fallback","popoverProps","popoverResource","preloadTrigger","tracePolicy"]);var j=c("deferredLoadComponent")(f);h=c("useCometPopoverInteractionTracing")((h=h)!=null?h:c("tracePolicyFromResource")("comet.popover",f),"deferred",g);return i.jsx(c("BasePopoverTrigger.react"),babelHelpers["extends"]({doNotCloseOnOutsideClick:b,fallback:(b=d)!=null?b:i.jsx(c("CometPopoverLoadingState.react"),{withArrow:!0}),interactionTracker:h,popover:j,popoverPreloadResource:f,popoverProps:babelHelpers["extends"]({},e,{loadImmediately:!0}),preloadTrigger:g},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSDialogStartAlignedTextHeader.react",["fbt","BaseDialogLabelIDProvider","CometCircleButton.react","CrossFilled24.svg.react","FDSDialogHeaderContainer.react","TetraText.react","emptyFunction","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=a.closeTestID;b=b===void 0?"close-button":b;b=a.disabled;b=b===void 0?!1:b;a.onBack;var e=a.onClose;e=e===void 0?c("emptyFunction"):e;var f=a.text,g=a.withCloseButton;g=g===void 0?!0:g;a=a.withoutDivider;a=a===void 0?!0:a;var i=d("BaseDialogLabelIDProvider").useDialogHeaderID();return j.jsxs(c("FDSDialogHeaderContainer.react"),{withDivider:!a,children:[f!=null&&j.jsx("div",{className:"x1d52u69 xw7yly9 x1yztbdb",children:j.jsx(c("TetraText.react"),{align:"start",id:i,isSemanticHeading:!0,type:"headlineEmphasized2",children:f})}),j.jsx("div",{className:"xqcrz7y x1d52u69 xktsk01 x14vqqas xod5an3",children:g?j.jsx(c("CometCircleButton.react"),{disabled:b,icon:c("CrossFilled24.svg.react"),label:h._("Close"),onPress:e,size:36,testid:void 0}):j.jsx("div",{className:"xc9qbxq xw7yly9 x1yztbdb x14qfxbe"})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometChromeDome",["JSScheduler","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=c("requireDeferred")("Chromedome").__setRef("CometChromeDome");function a(){i.onReady(function(a){(h||(h=d("JSScheduler"))).scheduleLoggingPriCallback(function(){a.start({})})})}g.init=a}),98);
__d("BadgeCheckmarkFilled12.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 12 13",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("g",{fillRule:"evenodd",transform:"translate(-98 -917)",children:i.jsx("path",{d:"m106.853 922.354-3.5 3.5a.499.499 0 0 1-.706 0l-1.5-1.5a.5.5 0 1 1 .706-.708l1.147 1.147 3.147-3.147a.5.5 0 1 1 .706.708m3.078 2.295-.589-1.149.588-1.15a.633.633 0 0 0-.219-.82l-1.085-.7-.065-1.287a.627.627 0 0 0-.6-.603l-1.29-.066-.703-1.087a.636.636 0 0 0-.82-.217l-1.148.588-1.15-.588a.631.631 0 0 0-.82.22l-.701 1.085-1.289.065a.626.626 0 0 0-.6.6l-.066 1.29-1.088.702a.634.634 0 0 0-.216.82l.588 1.149-.588 1.15a.632.632 0 0 0 .219.819l1.085.701.065 1.286c.014.33.274.59.6.604l1.29.065.703 1.088c.177.27.53.362.82.216l1.148-.588 1.15.589a.629.629 0 0 0 .82-.22l.701-1.085 1.286-.064a.627.627 0 0 0 .604-.601l.065-1.29 1.088-.703a.633.633 0 0 0 .216-.819"})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("CometPageVerificationIcon.react",["fbt","BadgeCheckmarkFilled12.svg.react","TetraIcon.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l={verifiedIconContainer:{display:"x3nfvp2",verticalAlign:"x11njtxf",$$css:!0}};function a(a){var b=a.isInverted,d=a.size,e=a.verificationBadge;a=a.xstyle;var f=null,g=c("BadgeCheckmarkFilled12.svg.react"),j=h._("Verified account"),m=12;d==="large"?m=16:d==="xsmall"&&(m=10);if(b===!0)f=k.jsx(c("TetraIcon.react"),{alt:j,color:"white",icon:g,size:m});else switch(e){case"BLUE_VERIFIED":f=k.jsx(c("TetraIcon.react"),{alt:j,color:"highlight",icon:g,size:m});break;case"GRAY_VERIFIED":f=k.jsx(c("TetraIcon.react"),{alt:j,color:"secondary",icon:g,size:m});break}return f!=null?k.jsx("span",{className:(i||(i=c("stylex")))(a,l.verifiedIconContainer),children:f}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometProfileVerificationBadgePopover.entrypoint",["CometProfileVerificationBadgePopoverQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.profileID;return{queries:{queryReference:{parameters:b("CometProfileVerificationBadgePopoverQuery$Parameters"),variables:{profileID:a}}}}},root:c("JSResourceForInteraction")("CometProfileVerificationBadgePopover.react").__setRef("CometProfileVerificationBadgePopover.entrypoint")};g["default"]=a}),98);
__d("CometOnFBProfileVerificationBadge.react",["fbt","CometHovercardTrigger.react","CometPageVerificationIcon.react","CometPressable.react","CometProfileVerificationBadgePopover.entrypoint","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react")),k=i.useId;function a(a){var b=a.isInverted,d=a.profileID,e=a.size,f=k();return j.jsx(c("CometHovercardTrigger.react"),{align:"start",display:"inline",popoverEntryPoint:c("CometProfileVerificationBadgePopover.entrypoint"),popoverOtherProps:{accessibilityId:f},popoverProps:{profileID:d},position:"above",children:function(a){return j.jsx(c("CometPressable.react"),{"aria-describedby":f,"aria-label":h._("Verified"),cursorDisabled:!0,overlayRadius:"50%",ref:a,children:j.jsx(c("CometPageVerificationIcon.react"),{isInverted:b,size:e,verificationBadge:"BLUE_VERIFIED"})})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometProfileVerificationBadge.react",["cr:1899533","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var c=a.isInverted,d=a.profileID;a=a.size;a=a===void 0?"large":a;return i.jsx(b("cr:1899533"),{isInverted:c,profileID:d,size:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometLoggedOutPopupCTA",["JSResourceForInteraction","XLoginControllerRouteBuilder","react","useCometLazyDialog","useCometRouterDispatcher","useCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h;h||(h=d("react"));var i=h.useCallback,j=c("JSResourceForInteraction")("CometLoggedOutPopupCTA.react").__setRef("useCometLoggedOutPopupCTA");function a(a){var b=a.onClose,d=babelHelpers.objectWithoutPropertiesLoose(a,["onClose"]),e=c("useCurrentRoute")();a=(e==null?void 0:(a=e.rootView)==null?void 0:(a=a.props)==null?void 0:a.shouldRedirectInsteadOfLoginPopupExperiment)===!0;var f=c("useCometRouterDispatcher")(),g=i(function(){var a;a=c("XLoginControllerRouteBuilder").buildUri({next:e==null?void 0:(a=e.url)==null?void 0:a.toString()}).toString();var b={replace:!0};f==null?void 0:f.go(a,b)},[e,f]),h=c("useCometLazyDialog")(j),k=h[0];h=i(function(){k(d,b)},[k,d,b]);return a?g:h}g["default"]=a}),98);
__d("getViewportDimensions",["UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h=function(){var a=null;return function(){var b=document.body;if(b==null)return null;(a==null||!b.contains(a))&&(a=document.createElement("div"),a.style.left=Number.MAX_SAFE_INTEGER+"px",a.style.width="100%",a.style.height="100%",a.style.position="fixed",b.appendChild(a));return a}}();function i(){var a;document.documentElement&&(a=document.documentElement.clientWidth);a==null&&document.body&&(a=document.body.clientWidth);return a||0}function j(){var a;document.documentElement&&(a=document.documentElement.clientHeight);a==null&&document.body&&(a=document.body.clientHeight);return a||0}function k(){return{width:window.innerWidth||i(),height:window.innerHeight||j()}}k.withoutScrollbars=function(){return c("UserAgent").isPlatform("Android")?k():{width:i(),height:j()}};k.layout=function(){var a,b=h();return{width:(a=b==null?void 0:b.clientWidth)!=null?a:i(),height:(a=b==null?void 0:b.clientHeight)!=null?a:j()}};g["default"]=k}),98);
__d("FbtLogging",["QE2Logger","cr:1094907","cr:1290","cr:8828"],(function(a,b,c,d,e,f,g){"use strict";d("QE2Logger").logExposureForUser("fbt_js_performance_testing");a=b("cr:1290")==null?void 0:b("cr:1290").JHashToSampleRate;c=b("cr:1094907")==null?void 0:b("cr:1094907").logImpression;e=b("cr:8828")==null?void 0:b("cr:8828").logImpressionV2;g.m=a;g.logImpression=c;g.logImpressionV2=e}),98);
__d("IntlQtEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1848815");b=d("FalcoLoggerInternal").create("intl_qt_event",a);e=b;g["default"]=e}),98);
__d("XCometFBReelControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/reel/{?video_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("CurrentMessengerUser",["CurrentEnvironment","CurrentUser"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("CurrentUser").getID()}function b(){return c("CurrentEnvironment").instagramdotcom?c("CurrentUser").getEIMU():c("CurrentUser").getID()}function d(){return c("CurrentUser").getPageMessagingMailboxId()}function e(){return c("CurrentUser").isWorkUser()}function f(){return c("CurrentUser").isTestUser()}function h(){return c("CurrentUser").isEmployee()}function i(){return c("CurrentUser").getAppID()}function j(){return c("CurrentUser").getAccountID()}function k(){return c("CurrentUser").isLoggedInNow()}g.getID=a;g.getIDorEIMU=b;g.getPageMessagingMailboxId=d;g.isWorkUser=e;g.isTestUser=f;g.isEmployee=h;g.getAppID=i;g.getAccountID=j;g.isLoggedInNow=k}),98);