!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";isc.ClassFactory.defineClass("JGRadioGroup","JGGroupItem"),isc.ClassFactory.mixInInterface("JGRadioGroup","IWindowAop"),isc.addGlobal("JGRadioGroup",isc.JGRadioGroup),isc.JGRadioGroup.addProperties({TableName:"",WidgetStyle:"JGBoxGroup",dropdownSourceHandler:function(){}}),isc.JGRadioGroup.addMethods({_initProperties:function(e){this.TitleTextAlign=e.LabelTextAlign,this.TitleVisible=e.LabelVisible,this.TitleWidth=e.LabelWidth,this.type="VRadioGroup",this.textField="",this.valueField="",e.IDColumnName?this.textField=e.IDColumnName:(this.IDColumnName="IDColumnName",this.textField="IDColumnName"),e.ColumnName?this.valueField=e.ColumnName:(this.valueField="ColumnName",this.ColumnName="ColumnName"),this.multiple=!1,e.TabIndex>=2&&(this.TabIndex=e.TabIndex-2),e.ColumnName?this.textField=e.ColumnName:(this.textField="ColumnName",this.ColumnName="ColumnName"),e.IDColumnName?this.valueField=e.IDColumnName:(this.IDColumnName="IDColumnName",this.valueField="IDColumnName"),this.NumCols=1,this.className+=" JGRadioGroup",this.items=[isc.addProperties(e,{type:"V3RadioGroupItems",isAbsoluteForm:!0})],this._initEventAndDataBinding(),this._observerDropdownSource()},_initEventAndDataBinding:function(){var e=this;isc.WidgetDatasource.addBindDatasourceCurrentRecordUpdateEventHandler(this,null,null,(function(t){isc.DataBindingUtil.setWidgetValue(e,t),e.hasErrors()&&e.values&&e.values[e.IDColumnName]&&""!=e.values[e.IDColumnName]&&(e.clearErrors(),e.redraw())})),isc.WidgetDatasource.addBindDatasourceCurrentRecordClearEventHandler(this,null,null,(function(){isc.DataBindingUtil.clearWidgetValue(e);var t=e.getItems().last(),a=t&&t.items&&t.items[0];a&&a.setValue(null),e.hasErrors()&&e.values&&e.values[e.IDColumnName]&&""!=e.values[e.IDColumnName]&&(e.clearErrors(),e.redraw())})),isc.DatasourceUtil.addDatasourceLoadEventHandler(this,this.OnValueLoaded),isc.DatasourceUtil.addDatasourceFieldUpdateEventHandler(this,[this.IDColumnName],this.OnValueChanged)},_observerDropdownSource:function(){var e=this.getDropDownSource();if("object"!=typeof e)try{e=isc.JSON.decode(e)}catch(e){}if(e&&e.DataSourceSetting&&"Entity"==e.DataSourceSetting.DataSourceType){var t=e.DataSourceSetting.DataConfig.SourceName;if(t){var a=isc.JGDataSourceManager.get(this,t);if(a){var n=this;a.on(a.Events.LOAD,null,(function(){n.dropdownSourceHandler()})),a.on(a.Events.INSERT,null,(function(){n.dropdownSourceHandler()})),a.on(a.Events.DELETE,null,(function(){n.dropdownSourceHandler()}))}}}},filterChanged:function(e){return e&&e.hasOwnProperty(this.IDColumnName)},setChecked:function(e,t){var a=this._form.getItem().itemForValue(e),n=a.getDataElement();return a.setElementValue(e),a.updateValue(),a._handleElementChanged(),n.checked=t},getBindFields:function(){return[this.IDColumnName,this.ColumnName]},setDropDownSource:function(e){this.DropDownSource=e},getDropDownSource:function(){return this.DropDownSource},getIDColumnName:function(){return this.IDColumnName},getColumnName:function(){return this.ColumnName},setV3Value:function(e){var t={};t[this.IDColumnName]=e,isc.WidgetDatasource.setSingleRecordMultiValue(this,t)},getDefaultValue:function(){var e={},t=null,a=null;if("object"!=typeof(o=this.DropDownSource))try{o=isc.JSON.decode(o)}catch(e){}var n=o&&o.uiData;if(n&&n.length>0)for(var i=0;i<n.length;i++){var o;1==(o=n[i]).default&&(t=o.id,a=o.text)}return e[this.IDColumnName]=t,e[this.ColumnName]=a,e},getConstData:function(e){var t,a=e.DataConfig;if(a)switch(e.DataSourceType){case"Entity":a.EntityConstData&&(t=a.EntityConstData.ConstData);break;case"TableQuery":a.SqlQueryConstData&&(t=a.SqlQueryConstData.ConstData);break;case"CustomConst":a&&(t=a.ConstData)}return t},setDefaultRecord:function(){var e=this.getDefaultValue();e&&this.setWidgetData(e)},getV3Value:function(){var e=isc.WidgetDatasource.getDatasource(this).getCurrentRecord();return e?e[this.IDColumnName]:""},getText:function(){return isc.WidgetDatasource.getDatasource(this).getCurrentRecord()[this.ColumnName]},beforeDataLoad:function(){this.BeforeDataLoadAction&&this.BeforeDataLoadAction()},getV3MethodMap:function(){return{getValue:"getV3Value",setValue:"setV3Value"}}})}));
