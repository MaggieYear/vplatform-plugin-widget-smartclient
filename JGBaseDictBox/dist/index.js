!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";isc.ClassFactory.defineClass("JGBaseDictBox","JGBaseFormWidget"),isc.JGBaseDictBox.addProperties({IDColumnName:null,Top:0,Name:null,TabIndex:"",SimpleChineseTitle:"",ReadOnly:!1,Left:0,Height:50,IsMust:!1,ColumnName:null,DisplayFormat:null,Visible:!0,Enabled:!1,_form:null,listener:["keydown","change","focus","blur","titleClick","layerClck","iconClick"],WidgetStyle:"JGBaseDictBox"}),isc.JGBaseDictBox.addMethods({_initProperties:function(t){this.TitleWidth=t.LabelWidth,this.TitleVisible=t.LabelVisible,this.className+=" JGBaseDictBox",this.items=[isc.addProperties(t,{type:"V3BaseDictBoxItems",isAbsoluteForm:!0})]},showError:function(){},hideError:function(){},resized:function(t,e){if(this.Super("resized",arguments),"None"!=this.Dock){var i=this.getWidth(),n=this.TitleWidth,s=n&&n>0?i-n:i,l=this.getItems()[0];l&&(l.setWidth&&l.setWidth(s),l.items&&l.items[0]&&l.items.setWidth&&l.setWidth(s-2))}},getItem:function(t){var e=this.Super("getItem",arguments);return!e&&"id"==t&&this.IsEdit&&(e={isSetToDefaultValue:function(){}}),e},getBindFields:function(){return[this.IDColumnName,this.ColumnName]},setColumnName:function(t){var e={};e[this.ColumnName]=t,this.setWidgetData(widgetId,e)},setIDColumnName:function(t){var e={};e[this.IDColumnName]=t,this.setWidgetData(widgetId,e)},getIDColumnName:function(){return this.IDColumnName},getColumnName:function(){return this.ColumnName},getVal:function(t){var e=this.getWidgetData();if(e){var i=e[t];return null==i||null==i?"":i}return""},getText:function(){return this.getVal(this.ColumnName)},getV3IdValue:function(){return this.getVal(this.IDColumnName)},setV3Value:function(t){var e=this.getWidgetData()||{};e[this.IDColumnName]=t,this.setWidgetData(e)},setReadOnly:function(t){this._$readOnly=t,this.Super("setReadOnly",arguments)},getReadOnly:function(){return this.isReadOnly()},setEnabled:function(t){this.setItemEnabled(t)},getVisible:function(){return this.isVisible()},cleanSelectedControlValue:function(t){this.clearWidgetBindDatas(t)},setLabelText:function(t){this.setSimpleChineseTitle(t)},getLabelText:function(){return this.getSimpleChineseTitle()},setV3Focus:function(){this.setControlFocus()},getV3MethodMap:function(){return{setFocus:"setV3Focus",setValue:"setV3Value",getValue:"getV3IdValue"}}})}));
