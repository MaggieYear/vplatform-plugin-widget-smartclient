!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";isc.ClassFactory.defineClass("JGLongTextBox","JGBaseFormWidget"),isc.JGLongTextBox.addProperties({required:!1,maxLength:50,isShow:!0,readOnly:!1,disabled:!1,listener:["change","focus","blur","click","titleClick","keydown"],LongTextBoxOptions:null,ColumnName:"",WidgetStyle:"JGLongTextBox"}),isc.JGLongTextBox.addMethods({_initProperties:function(t){this.TitleWidth=t.LabelWidth,this.TitleVisible=t.LabelVisible,this.className+=" JGLongTextBox","JGLongTextBox"==this.WidgetStyle&&(this.WidgetStyle="JGForm"),this.items=[isc.addProperties(t,{type:"V3LongTextItem",isAbsoluteForm:!0})],this._initEventAndDataBinding()},_initEventAndDataBinding:function(){var t=this;isc.WidgetDatasource.addBindDatasourceCurrentRecordUpdateEventHandler(this,null,null,(function(e){isc.DataBindingUtil.setWidgetValue(t,e)})),isc.WidgetDatasource.addBindDatasourceCurrentRecordClearEventHandler(this,null,null,(function(){isc.DataBindingUtil.clearWidgetValue(t)})),isc.DatasourceUtil.addDatasourceLoadEventHandler(this,this.OnValueLoaded),isc.DatasourceUtil.addDatasourceFieldUpdateEventHandler(this,null,this.OnValueChanged)},getLongTextBoxOptions:function(){return this.LongTextBoxOptions},getBindFields:function(){return[this.ColumnName]}})}));
