!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";isc.ClassFactory.defineInterface("IV3BaseWidget"),isc.IV3BaseWidget.addInterfaceProperties({Top:0,Left:0,Width:null,MultiWidth:null,Height:null,MutiHeight:null,ContentAlignment:null,HorizontalAlign:null,VerticalAlign:null,_orginalRect:null}),isc.IV3BaseWidget.addInterfaceMethods({initV3Widget:function(){this.id=isc.WidgetUtils.genWidgetRefId(this.scopeId,this.widgetId);var t=[this.Width,this.Height];this._orginalRect=t,isc.JGWidgetManager.putWidget(this.id,this)},_processRect:function(t,i){if("string"==typeof t){if("content"==t)return 20;if(t.endsWith("%"))return t;if(t.endsWith("px"))return parseInt(t)}return t},_processContentVal:function(t){return parseInt(.5*t)},getProcessedHeight:function(){return this._processRect(this.MultiHeight,"height")},getProcessedWidth:function(){return this._processRect(this.MultiWidth,"width")},setPercentHeight:function(t){this.setHeight(t)},setPercentWidth:function(t){this.setWidth(t)},getOrginalRect:function(){return this._orginalRect},addV3Child:function(t){this.addChild(t)},buildRelation:function(){var t=this.layoutChildWidgets();if(t&&t.length>0)for(var i=0;s=t[i];i++)this.addV3Child(s);var e=isc.WidgetContext.getChildrenIds(this.scopeId,this.widgetId);if(e&&e.length>0){var n;for(i=0;n=e[i];i++){var s,r=isc.WidgetUtils.genWidgetRefId(this.scopeId,n);(s=isc.JGWidgetManager.getWidget(r))&&s.buildRelation()}}},getContentAlignment:function(){return this.ContentAlignment},getHorizontalAlign:function(){return this.HorizontalAlign},getVerticalAlign:function(){return this.VerticalAlign},parentReadOnly:function(t){"JGGroupPanel"==this.type&&(t&&this.childrenWidgets&&1==this.childrenWidgets.length?(this.realHeight=this.getVisibleHeight(),this.setHeight(0)):"number"==typeof this.realHeight&&this.setHeight(this.realHeight)),this.ReadOnly||(this._ReadOnly=t,this.setHandleReadOnly&&this.setHandleReadOnly(t),this.childrenWidgets&&this.childrenWidgets.map("parentReadOnly",t))},on:function(t,i){if("ConfigChanged"==t&&i(),this.listener||(this.listener=[]),this.listener.hasOwnProperty(t))this.listener[t].push(i);else if("ConfigChanged"!=t)throw Error("控件["+this.getClassName()+"]不支持["+t+"]事件！")},un:function(t){if(this.listener){if(!this.listener.hasOwnProperty(t))throw Error("控件["+this.getClassName()+"]不支持["+t+"]事件！");this.listener[t]=[]}},getLayoutVersion:function(){return this._$windowVersion},isOldWindowLayoutConfig:function(){var t=this.getLayoutVersion();if(null==t||""==t)return!0;var i="number"==typeof this.Width&&-1!=this.MultiWidth.indexOf("px")&&this.MultiWidth!=this.Width+"px",e="number"==typeof this.Height&&-1!=this.MultiHeight.indexOf("px")&&this.MultiHeight!=this.Height+"px";return!(!i||!e)},firePlatformEventBefore:function(t,i,e){},firePlatformEventAfter:function(t,i,e){}}),isc.ClassFactory.defineInterface("IV3RectAdapter"),isc.IV3RectAdapter.addInterfaceMethods({adaptRectByV3:function(){"content"==this.MultiHeight&&this.adaptHeightByV3(),"content"==this.MultiWidth&&this.adaptWidthByV3()},adaptHeightByV3:function(){this.canAdaptHeight=!0,this.adaptHeightBy=function(){return 0}},adaptWidthByV3:function(){this.canAdaptWidth=!0,this.adaptWidthBy=function(){return 0}}}),isc.ClassFactory.defineInterface("IWindowAop"),isc.IWindowAop.addInterfaceMethods({dataLoaded:function(){},windowInited:function(){},beforeDataLoad:function(){}}),isc.ClassFactory.defineInterface("IRecordObserver"),isc.IRecordObserver.addInterfaceMethods({fire:function(t){var i=t.eventName,e=t.datasource;switch(i){case e.Events.LOAD:return this._loadAction.apply(this,[t]);case e.Events.UPDATE:return this._updateAction.apply(this,[t]);case e.Events.DELETE:return this._deleteAction.apply(this,[t]);case e.Events.CURRENT:return this._currentAction.apply(this,[t])}},_loadAction:function(t){t.isAppend||this.clearWidgetData(),this._$fireEventHandler(this.__loadHandler)},_updateAction:function(t){for(var i=t.resultSet,e=t.datasource,n=0,s=i.length;n<s;n++){var r=i[n];if(e.isCurrentRecord(r)){this._handleValue(r),this._isChanged(r)&&this.filterChanged(r)&&this._$fireEventHandler(this.__updateHandler);break}}},filterChanged:function(t){return!0},_isChanged:function(t){var i=this.getBindFields();if(i&&i.length>0)for(var e=0,n=i.length;e<n;e++){var s=i[e];if(t.hasOwnProperty(s))return!0}return!1},_handleValue:function(t){var i=this.getBindFields();if(i&&i.length>0)if(i.length>1){for(var e={},n=0,s=i.length;n<s;n++){var r=i[n];t.hasOwnProperty(r)&&(e[r]=t[r])}this.setWidgetData(e,t)}else{r=i[0];t.hasOwnProperty(r)&&this.setWidgetData(t[r],t)}},_$fireEventHandler:function(t){if(t)for(var i=0,e=t.length;i<e;i++){t[i].apply(this,[])}},_deleteAction:function(){this.clearWidgetData()},_currentAction:function(t){var i=t.currentRecord;this._handleValue(i)},onLoadListener:function(t){"function"==typeof t&&(this.__loadHandler=this.__loadHandler||[],this.__loadHandler.push(t))},onChangedListener:function(t){"function"==typeof t&&(this.__updateHandler=this.__updateHandler||[],this.__updateHandler.push(t))},getBindFields:function(){return[]},setWidgetData:function(t,i){},clearWidgetData:function(){}}),isc.ClassFactory.defineClass("JGBaseWidget","Canvas"),isc.ClassFactory.mixInInterface("JGBaseWidget","JGEventManager"),isc.ClassFactory.mixInInterface("JGBaseWidget","JGLayoutManager"),isc.ClassFactory.mixInInterface("JGBaseWidget","IV3BaseWidget"),isc.JGBaseWidget.addClassProperties({_initedHandlers:[]}),isc.JGBaseWidget.addClassMethods({addInitedHandler:function(t){isc.JGBaseWidget._initedHandlers.push(t)}}),isc.JGBaseWidget.addProperties({defaultWidth:5,defaultHeight:5,autoDraw:!1,id:"",widgetId:"",scopeId:null,componentId:null,name:"",_fieldEvent:null,contents:"",TableName:null,SourceTableName:null,MultiHeight:null,MultiWidth:null,Dock:null,LayoutType:null,PercentWidth:null,PercentHeight:null,StaticLayoutSize:!1,hoverWidth:250,canFocus:!0,showFocusOutline:!1,_orginalRect:null,_defaultListener:["mouseOver","mouseLeave","showProtoInfo","moveProtoInfo"],listener:[]}),isc.JGBaseWidget.addMethods({init:function(){this.id=isc.WidgetUtils.genWidgetRefId(this.scopeId,this.widgetId);var t=[this.Width,this.Height];this._orginalRect=t,this._fieldEvent={},this._initCanvas(),this.Super("init",arguments),this._initWidget(arguments),this._initListener(),this._enhanceEvents(),this._afterInitWidget(),this._referPartFunc(),this.mouseOver=this._handleMouseOver,this.mouseLeave=this._referEvent(this,"mouseLeave"),isc.JGWidgetManager.putWidget(this.id,this);for(var i=isc.JGBaseWidget._initedHandlers,e=0,n=i.length;e<n;e++){var s=i[e];s.apply(this)}},_enhanceEvents:function(){var t=this.listener;if(t)for(var i in t)if(t.hasOwnProperty(i)){var e=this[i];"function"==typeof e&&this.listener[i].push(e)}},_handleMouseOver:function(){this.fireEvent("mouseOver");["JGTreeGrid","JGDataGrid","JGTabControl","JGQueryConditionPanel"].filter((function(t){return t===this.WidgetStyle})).length||this.fireEvent("showProtoInfo",null,this.getClipHandle(),[this.Code])},resizeTo:function(){this.Super("resizeTo",arguments),this.fireEvent("moveProtoInfo")},addV3Child:function(t){this.addChild(t)},getOrginalRect:function(){return this._orginalRect},_initCanvas:function(){if(this.left=this.Left,this.top=this.Top,this.isOldWindowLayoutConfig&&this.isOldWindowLayoutConfig())this.LayoutType&&"BorderLayout"!=this.LayoutType||this.Dock&&"Fill"!=this.Dock?(this.width=this.Width,this.height=this.Height):(this.width="100%",this.height="100%");else{var t=(this.Dock+"").toLowerCase();"space"==this.MultiWidth||"top"==t||"bottom"==t||"fill"==t?(this.width="100%",this.Width="100%"):"content"==this.MultiWidth?(this.width=null,this.Width=null):"string"==typeof this.MultiWidth?"0px"==this.MultiHeight?this.height=this.Height:(this.width=this.MultiWidth,this.MultiWidth.endsWith("px")?this.Width=parseInt(this.MultiWidth):this.Width="100%"):this.width="BorderLayout"==this.LayoutType?"100%":this.Width,"space"==this.MultiHeight||"left"==t||"right"==t||"fill"==t?(this.height="100%",this.Height="100%"):"content"==this.MultiHeight?("JGComponentContainer"==this.type&&(this._height=this.Height),this.height=null,this.Height=null):"string"==typeof this.MultiHeight?"0px"==this.MultiHeight?this.height=this.Height:(this.height=this.MultiHeight,this.MultiHeight.endsWith("px")?this.Height=parseInt(this.MultiHeight):this.Height="100%"):this.height="BorderLayout"==this.LayoutType?"100%":this.Height}this.printChildrenAbsolutelyPositioned=!0,isc.isA.Boolean(this.Visible)&&(this.visibility=this.Visible?isc.Canvas.INHERIT:isc.Canvas.HIDDEN)},_initListener:function(){var t={};this.listener=this.listener.concat(this._defaultListener);for(var i=0,e=this.listener.length;i<e;i++)t[this.listener[i]]=[];this.listener=t},_initWidget:function(){},_afterInitWidget:function(){},_referPartFunc:function(){},_addMethods:function(t,i){for(var e in i)t[e]=i[e]},_referFuncs:function(t,i){isc.isAn.Array(i)||(i=[i]);for(var e=0,n=i.length;e<n;e++){var s=i[e];this[s]=this._referFunc(t,s)}},_referFunc:function(t,i){var e=t.ID;return function(){var t=this.getWindow()[e];if(!t)throw Error("不存在["+e+"]对象，请检查！");var n=t[i];if("function"==typeof n){for(var s=[],r=0,h=arguments.length;r<h;r++)s.push(arguments[r]);return n.apply(t,s)}throw Error(t.getClass()+"不存在方法"+i)}},_referEvent:function(t,i){isc.isAn.Array(i)||(i=[i]);var e;t.ID;return e=t,function(){var t=e.ID,n=this.getWindow()[t];if(!n)throw Error("不存在["+t+"]对象，请检查！");if(i&&i.length>0)for(var s=0,r=i.length;s<r;s++){var h=i[s];if("function"==typeof h)h.apply(n,arguments);else if(n.listener){var a=n.listener[h];if(a&&a.length>0)for(var d=0,l=a.length;d<l;d++){var o=a[d];o.apply(n,arguments)}}}return!0}},_referEventTimeout:function(t,i){isc.isAn.Array(i)||(i=[i]);var e=t.ID;return function(){return i&&i.length>0&&setTimeout((function(){var t=window[e];if(!t)throw Error("不存在["+e+"]对象，请检查！");for(var n=0,s=i.length;n<s;n++){var r=i[n];if("function"==typeof r)r.apply(t,arguments);else if(t.listener){var h=t.listener[r];if(h&&h.length>0)for(var a=0,d=h.length;a<d;a++){var l=h[a];l.apply(t,arguments)}}}}),10),!0}},_referTimerEventHandler:function(t,i){isc.isAn.Array(i)||(i=[i]);var e=t.ID;return function(){var t=this.getWindow()[e];if(!t)throw Error("不存在["+e+"]对象，请检查！");if(i&&i.length>0)for(var n=0,s=i.length;n<s;n++){var r=i[n];if("function"==typeof r)r.apply(t,arguments);else{var h=t.listener[r];if(h&&h.length>0)for(var a=0,d=h.length;a<d;a++){var l=h[a];isc.TimerEventHandler.push((function(){var t=window[e];t&&t.pause&&t.pause()})),isc.TimerEventHandler.push((function(){var t=window[e];t&&(l.apply(t,arguments),t.resume&&!t.destroyed&&t.resume())})),isc.TimerEventHandler.run()}}}return!0}},_callEvent:function(t,i){if(isc.isAn.Array(i)||(i=[i]),i&&i.length>0){for(var e=[],n=2,s=arguments.length;n<s;n++)e.push(arguments[n]);for(n=0,s=i.length;n<s;n++){var r=i[n],h=t.listener[r];if(h&&h.length>0)for(var a=0,d=h.length;a<d;a++){var l=h[a];arguments.callee.caller!==l&&l.apply(t,e)}}}return!0},fireEvent:function(t){if(this.listener){var i=this.listener[t];if(i&&i.length>0){for(var e=[],n=2,s=arguments.length;n<s;n++)e.push(arguments[n]);for(var r=0,h=i.length;r<h;r++){var a=i[r];a.apply(this,e)}}}},getId:function(){return this.widgetId},destroy:function(){this.mouseOver=null,this.mouseLeave=null,this.showProtoInfo=null,this.moveProtoInfo=null,this.listener=null,this._Layout=null,isc.JGWidgetManager.destroy(this.id);var t=this.childrenWidgets;t&&(this.childrenWidgets=null),this.Super("destroy",arguments)},getProperty:function(t){var i=this["get"+t];if("function"==typeof i||"function"==typeof(i=this["is"+t])){for(var e=[],n=1,s=arguments.length;n<s;n++)e.push(arguments[n]);return i.apply(this,e)}},setProperty:function(t,i){var e=this["set"+t];if("function"==typeof e){for(var n=[],s=1,r=arguments.length;s<r;s++)n.push(arguments[s]);return e.apply(this,n)}throw Error(this.getClassName()+"不存在["+t+"]属性!")},setTips:function(t){if(this._form)if(this._form.getItems().length>0){if(this._form.getItems()[0].setPrompt(t),this._form.getItems()[0].isA("MultiFieldFormItem")){var i=this._form.children[0].getItem();if(i.setPrompt(t),i.hasOwnProperty("getItems"))for(var e=0;e<i.length;e++)i[e].setPrompt(t)}}else this._form.setPrompt(t);else this.setPrompt(t),this.children&&this.children.length>0&&this.children[0].setPrompt(t)},setVisible:function(t){this.Visible=t,t?this.show():this.hide()},getVisible:function(){return this.Visible},setTableName:function(t){this.TableName=t},getTableName:function(){return this.TableName},getSourceTableName:function(){return this.SourceTableName},getDock:function(){return this.Dock},setDock:function(t){this.Dock=t},getLayoutType:function(){return this.LayoutType},setLayoutType:function(t){this.LayoutType=t},getPercentWidth:function(){return this.PercentWidth},setPercentWidth:function(t){this.setWidth(t)},getPercentHeight:function(){return this.PercentHeight},setPercentHeight:function(t){this.setHeight(t)},getStaticLayoutSize:function(){return this.StaticLayoutSize},setStaticLayoutSize:function(t){this.StaticLayoutSize=t},addWidgets:function(t,i){t.childrenWidgets||(t.childrenWidgets=[]),t.childrenWidgets.add(i),i.parentWidget=t},parentReadOnly:function(t,i){i||(this._ReadOnly=t,this.canEditReadOnly=!1),this.setHandleReadOnly&&(i&&(this._ReadOnly=t),this.setHandleReadOnly(t,i)),this.childrenWidgets&&this.mapping(this.childrenWidgets,"parentReadOnly",t,i)},isReadOnly:function(){return this._ReadOnly||this.ReadOnly},_performOldReadonlyAction:function(t,i){if(1==t){if(this.isReadOnly())return void(this.ReadOnly=t);this.setHandleReadOnly&&this.setHandleReadOnly(t),this._ReadOnly=t,this.childrenWidgets&&this.mapping(this.childrenWidgets,"parentReadOnly",t,i),this.ReadOnly=t}else{if(!this.isReadOnly())return;if(this.parentWidget&&this.parentWidget.isReadOnly())return void(this.ReadOnly=t);this.setHandleReadOnly&&this.setHandleReadOnly(t),this._ReadOnly=t,this.childrenWidgets&&this.mapping(this.childrenWidgets,"parentReadOnly",t,i),this.ReadOnly=t}},_performNewReadonlyAction:function(t,i){if(i)this.setHandleReadOnly?this.setHandleReadOnly(t,i):this.childrenWidgets&&this.mapping(this.childrenWidgets,"parentReadOnly",t,i);else if(this.canEditReadOnly=!1,1==t){if(this.isReadOnly()&&!i)return void(this.ReadOnly=t);this.setHandleReadOnly&&!1!==this.canEditReadOnly&&this.setHandleReadOnly(t),this._ReadOnly=t,this.childrenWidgets&&this.mapping(this.childrenWidgets,"parentReadOnly",t,i),this.ReadOnly=t}else{if(!this.isReadOnly())return;if(this.parentWidget&&this.parentWidget.isReadOnly()&&!i)return void(this.ReadOnly=t);this.setHandleReadOnly&&!1!==this.canEditReadOnly&&this.setHandleReadOnly(t),this._ReadOnly=t,this.childrenWidgets&&this.mapping(this.childrenWidgets,"parentReadOnly",t,i),this.ReadOnly=t}},setReadOnly:function(t,i){isc.isA.Boolean(t)&&this.ReadOnly!=t&&(this.isOldWindowLayoutConfig()?this._performOldReadonlyAction(t,i):this._performNewReadonlyAction(t,i))},parentDisabled:function(t){this.disabled||(this._disabled=t,this.setHandleDisabled&&this.setHandleDisabled(t),this.childrenWidgets&&this.mapping(this.childrenWidgets,"parentDisabled",t))},isDisabled:function(){for(var t=this;t;){if(t._disabled||t.disabled)return!0;(t=t.parentElement)&&t.eventProxy&&(t=t.eventProxy)}return!1},setDisabled:function(t){if(isc.isA.Boolean(t)&&this.disabled!=t)if(1==t){if(this.isDisabled())return void(this.disabled=t);this.setHandleDisabled&&this.setHandleDisabled(t),this._disabled=t,this.disabled=t,this.childrenWidgets&&this.mapping(this.childrenWidgets,"parentDisabled",t)}else{if(!this.isDisabled())return;if(this.parentWidget&&this.parentWidget.isDisabled())return void(this.disabled=t);this.setHandleDisabled&&this.setHandleDisabled(t),this._disabled=t,this.disabled=t,this.childrenWidgets&&this.mapping(this.childrenWidgets,"parentDisabled",t)}},getPrintTagStartAttributes:function(t){return t?" style='position:absolute;left:"+this.getLeft()+"px;top:"+this.getTop()+"px;width:"+this.getWidth()+"px;height:"+this.getHeight()+"px;' ":this.printChildrenAbsolutelyPositioned?" style='position:relative;width:"+this.getScrollWidth()+"px;height:"+this.getScrollHeight()+"px;' ":null},controlPrintPreview:function(t){isc.Page&&(isc.Page.getScrollTop()>0||isc.Page.getScrollLeft()>0)&&isc.Page.scrollTo(0,0),isc.Canvas.showPrintPreview(t)},controlPrint:function(t){isc.Canvas.printComponents(t)},setControlFocus:function(){this.focus()},getFieldEvent:function(){return this._fieldEvent},setScopeId:function(t){this.scopeId=t},getScopeId:function(){return this.scopeId},setComponentId:function(t){this.componentId=t},getComponentId:function(){if(this.componentId)return this.componentId;if(this.scopeId){var t=this.scopeId.lastIndexOf("_"),i=this.scopeId.substring(t+1,this.scopeId.length);return this.componentId=i,i}return null},show:function(){!0===this._needToBuildRelation&&this.buildRelation(),this.Super("show",arguments)},buildRelation:function(){if(this.getVisible()){var t=this.layoutChildWidgets();if(t&&t.length>0)for(var i=0;h=t[i];i++)this.addV3Child(h);var e=this.getComponentId(),n=isc.JGComponent.getComponentIndex(e),s=isc.WidgetContext.getChildrenIds(this.scopeId,this.widgetId);if(s&&s.length>0){var r;for(i=0;r=s[i];i++){var h,a=isc.WidgetUtils.genWidgetRefId(this.scopeId,r);(h=isc.JGWidgetManager.getWidget(a))&&((this.ReadOnly||this.isReadOnly())&&h.parentReadOnly(!0),(0==this.Enabled||this.isDisabled())&&h.parentDisabled(!0),h.setIndexPreJoinComponentIndex&&h.setIndexPreJoinComponentIndex(n),this.addWidgets(this,h),h.buildRelation())}}}else this._needToBuildRelation=!0},getContentAlignment:function(){return this.ContentAlignment},getHorizontalAlign:function(){return this.HorizontalAlign},getVerticalAlign:function(){return this.VerticalAlign},revert:function(t){if(this.listener)for(var i in this.listener)this.listener[i]=[];if(!1!==t){var e=isc.WidgetContext.getChildrenIds(this.scopeId,this.widgetId);if(e&&e.length>0)for(var n,s=0;n=e[s];s++){var r=isc.WidgetUtils.genWidgetRefId(this.scopeId,n),h=isc.JGWidgetManager.getWidget(r);h&&(h.revert&&h.revert())}}},un:function(t,i){if(t&&i&&i.length>0)for(var e=0,n=i.length;e<n;e++){t[i[e]]=null}},getStaticImagePath:function(t){return t?window&&window._$basePath?window._$basePath+t:t:null},getActiveChildWidgets:function(){return this.getVisible&&this.getVisible()&&this.code?[this.code]:null},getActiveChildWindows:function(){return null},isInLayoutWidget:function(){return"JGGroupPanel"==this.getParentType(this)},getParentType:function(t){var i=t.parentElement;if(i){var e=i.type;e||(e=t.getParentType(t.parentElement))}return e},showHighlight:function(){var t=this.styleName;(t||-1==t.indexOf(" v3ComponentHighlight"))&&(t=t?t+" v3ComponentHighlight":"v3ComponentHighlight",this.setStyleName(t))},hideHighlight:function(){var t=this.styleName;t&&-1!=t.indexOf(" v3ComponentHighlight")&&(t=t.replace(" v3ComponentHighlight",""),this.setStyleName(t))},mapping:function(t,i,e,n){0!=t.length&&t.forEach((function(t){t[i]&&t[i](e,n)}))},validateWidget:function(){if(!1===this.Visible)return!0;var t=!0,i=this.scopeId,e=isc.WidgetContext.getChildrenIds(this.scopeId,this.widgetId);return this.validate&&"function"==typeof this.validate?t=this.validate():e&&$.each(e,(function(e,n){var s=isc.WidgetUtils.genWidgetRefId(i,n),r=isc.JGWidgetManager.getWidget(s);r.validateWidget&&!r.validateWidget()&&(t=!1)})),t}})}));
