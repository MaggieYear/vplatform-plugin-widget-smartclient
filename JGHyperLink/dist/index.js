!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";isc.ClassFactory.defineClass("JGHyperLink","JGBaseFormWidget"),isc.ClassFactory.mixInInterface("JGHyperLink","IRecordObserver"),isc.JGHyperLink.addProperties({IsMust:!1,TextLength:50,Visible:!0,ReadOnly:!1,Enabled:!0,TitleWidth:76,listener:["change","focus","blur","keydown","click","titleClick","mouseover","LinkAction"],ColumnName:"ColumnName",widgetId:"JGHyperLink1",ToolTip:"",ValueTextAlign:"left",Left:0,ValueForeColor:"",HorizontalAlign:"Left",type:"JGHyperLink",ColSpan:"1",WidgetStyle:"JGHyperLink",AutoTest:!0,_$windowVersion:"1",VerticalAlign:"Top",ValueFontStyleFamily:"",Code:"JGHyperLink1",PlaceholderPosition:"Right",TableName:"",_$WidgetType:"JGHyperLink",Top:0,ValueFontStyleItalic:"",PercentWidth:"12.6%",LabelFontStyleFamily:"",LabelTextAlign:"left",Placeholder:"",LabelForeColor:"",LabelFontStyleDecoration:"",code:"JGHyperLink1",LabelFontStyleBold:"",ValueFontStyleDecoration:"",LabelFontStyleItalic:"",TabIndex:24,ValueFontStyleSize:"",DefaultValue:"",OnValueChanged:"",PercentHeight:"1.6%",OnValueLoaded:"",LabelFontStyleSize:"",LabelWidth:94,Height:26,OnLabelClick:"",Width:235,SourceTableName:"",EndRow:"False",LabelBackColor:"",DisplayFormat:{numType:"0",displayFormat:"",Index:"0"},ValueFontStyleBold:"",SimpleChineseTitle:"链接",MultiHeight:"26px",OnClick:"",StartRow:"False",Dock:"None",LabelVisible:!0,ValueBackColor:"",MultiWidth:"235px"}),isc.JGHyperLink.addMethods({_initProperties:function(e){this.TitleWidth=this.LabelWidth,this.TitleVisible=this.LabelVisible,this.items=[isc.addProperties(e,{type:"V3HyperLinkItem",isAbsoluteForm:!0})]},parentReadOnly:function(e){this.setReadOnly(e)},setLabelText:function(e){this.setSimpleChineseTitle(e)},getLabelText:function(){return this.getSimpleChineseTitle()},getValue:function(){return this.getWidgetData()}})}));
