!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";isc.ClassFactory.defineClass("JGComboBox","JGBaseFormWidget"),isc.ClassFactory.mixInInterface("JGComboBox","IWindowAop"),isc.addGlobal("JGComboBox",isc.JGComboBox),isc.JGComboBox.addProperties({listener:["click","focus","blur","expand","keydown","loaddata","labelclick"],ColSpan:"1",valueField:"iDColumnName",textField:"columnName",DropDownSource:null,WidgetStyle:"JGComboBox",disableValidation:!0,dropdownSourceHandler:function(){}}),isc.JGComboBox.addMethods({_initProperties:function(t){this.TitleWidth=t.TitleWidth=t.LabelWidth,this.textField="",this.valueField="",t.ColumnName?this.textField=t.ColumnName:(this.textField="ColumnName",this.ColumnName="ColumnName"),t.IDColumnName?this.valueField=t.IDColumnName:(this.IDColumnName="IDColumnName",this.valueField="IDColumnName"),this.NumCols=1,"JGComboBox"==this.WidgetStyle&&(this.WidgetStyle="JGFormIcon"),this.className+=" JGComboBox";var e=this;this.items=[isc.addProperties(t,{type:"V3ComboBoxItems",isAbsoluteForm:!0,getData:function(){return e.getDropDownSource()}})],this._initEventAndDataBinding(),this._observerDropdownSource()},_initEventAndDataBinding:function(){var t=this;isc.WidgetDatasource.addBindDatasourceCurrentRecordUpdateEventHandler(this,null,null,(function(e){isc.DataBindingUtil.setWidgetValue(t,e)})),isc.WidgetDatasource.addBindDatasourceCurrentRecordClearEventHandler(this,null,null,(function(){isc.DataBindingUtil.clearWidgetValue(t)})),isc.DatasourceUtil.addDatasourceLoadEventHandler(this,this.OnValueLoaded),isc.DatasourceUtil.addDatasourceFieldUpdateEventHandler(this,[this.IDColumnName],this.OnValueChanged)},_observerDropdownSource:function(){var t=this.getDropDownSource();if("object"!=typeof t)try{t=isc.JSON.decode(t)}catch(t){}if(t&&t.DataSourceSetting&&"Entity"==t.DataSourceSetting.DataSourceType){var e=t.DataSourceSetting.DataConfig.SourceName;if(e){var a=isc.JGDataSourceManager.get(this,e);if(a){var i=this;a.on(a.Events.LOAD,null,(function(){i.dropdownSourceHandler()})),a.on(a.Events.INSERT,null,(function(){i.dropdownSourceHandler()})),a.on(a.Events.DELETE,null,(function(){i.dropdownSourceHandler()}))}}}},editRecord:function(t){if(this.valueMap){var e={};if(isc.addProperties(e,t),t&&!t.hasOwnProperty(this.textField)&&t.hasOwnProperty(this.valueField))e[this.textField]=this.valueMap[e[this.valueField]];else if(t&&!t.hasOwnProperty(this.valueField)&&t.hasOwnProperty(this.textField)){var a=e[this.textField];for(var i in this.valueMap)if(a==this.valueMap[i]){e[this.valueField]=i;break}}return this.editRecord(e)}return this.editRecord(t)},loadData:function(t){if(t&&0===t.length)this.setValueMap(t);else if(t&&t.length>0){var e=this.dataToValueMapNew(t);this.setValueMap(e.valueMap,e.keys)}},setValueMap:function(t,e){this.valueMap=t,e&&(this._$OrderKeys=e);var a=this.getBaseComboboxItem();if(a){isc.isAn.emptyObject(t)||(a.setValueMap(t),0===t.length&&(a.pickList?null!=a.pickList.data&&(a.pickList.data.clearAll(),a.orderItemArray=[]):a.$192=[]));var i=this.DropDownSource&&this.DropDownSource.DataSourceSetting.DataConfig.IsPickListFields+"",o=a.getElementValue();if("true"===i&&(a._saveEleValue=o),"true"!==i||a._isAutomaticPrompt+""!="true"){var n=this.dataSource.getCacheData();if(n.length>0){for(var r,s=0;s<n.length;s++){var u=n[s];if(u.id==this.getData().id){r=u;break}}if(null!=r&&null!=r){var l=r[this.getIDColumnName()];if(null!=l&&null!=l){var d=l.split(","),c=[];for(s=0;s<d.length;s++)c.push(d[s]);a.setValue(c)}}}}}},dataToValueMapNew:function(t){var e={},a=[],o={keys:a,valueMap:e};this.defaultValue=[];var n=this.getBaseComboboxItem();n.orderItemArray=[];var r=n._displayName===n.name,s=this.DropDownSource.DataSourceSetting.DataConfig.IsPickListFields+""=="true";for(i=0;i<t.length;i++){var u=this._reGenObj(t[i]);if(u){var l=u[this.ColumnName],d=r&&!s&&u.text?u.text:u[this.IDColumnName];a.push(d),r&&!s?e[u.text]=u.text:e[d]=l,u.default&&this.defaultValue.add(d);var c={};s?(c=u)[this.valueField]=d:this.AutomaticPrompt&&"true"===(this.AutomaticPrompt+"").toLowerCase()?(c[this.textField]=l,c[this.valueField]=d):c[this.valueField]=d,n.orderItemArray.add(c)}}return o},_reGenObj:function(t){if(!t)return null;var e={};for(var a in t)t.hasOwnProperty(a)&&(e[a]=this._reverseHtmlChar(t[a]));return e},_reverseHtmlChar:function(t){return(t+"").replace(/&gt;/g,">").replace(/&lt;/g,"<")},getBaseComboboxItem:function(){return this.items[0]},getDropDownSource:function(){return this.DropDownSource},setDropDownSource:function(t){this.DropDownSource=t},getColumnName:function(){return this.textField},getIDColumnName:function(){return this.valueField},getBindFields:function(){return[this.IDColumnName,this.ColumnName]},filterChanged:function(t){return t&&t.hasOwnProperty(this.IDColumnName)},beforeDataLoad:function(){this.BeforeDataLoadAction&&this.BeforeDataLoadAction()},getV3Value:function(){var t=this.AutomaticPrompt+"";if(t&&"true"===t.toLowerCase()){var e=this.getBaseComboboxItem().getValueFieldItem();return e&&e.getElementValue()}var a=this.IDColumnName,i=isc.WidgetDatasource.getSingleValue(this,a);return null==i||null==i?"":i},setV3Value:function(t){var e={};if(e[this.IDColumnName]=t,"true"!==(this.AutomaticPrompt+"").toLowerCase()){var a=this.ColumnName,i=this.items&&this.items[1]&&this.items[1].mapValueToDisplay(t);i+""!="null"&&i+""!="undefined"&&(e[a]=i)}isc.WidgetDatasource.setSingleRecordMultiValue(this,e)},getText:function(){var t=this.ColumnName,e=isc.WidgetDatasource.getSingleValue(this,t);return null==e||null==e?"":e},_getDefaultValue:function(){var t={},e=null,a=null;if(n=this.DropDownSource){if("object"!=typeof n)try{n=isc.JSON.decode(n)}catch(t){}var i=n.uiData;if(i)for(var o=0;o<i.length;o++){var n;if(1==(n=i[o]).default){e=n.id,a=n.text;break}}t[this.IDColumnName]=e,t[this.ColumnName]=a}return t},getDefaultValue:function(){return this._getDefaultValue()},getConstData:function(t){var e,a=t.DataConfig;if(a)switch(t.DataSourceType){case"Entity":a.EntityConstData&&(e=a.EntityConstData.ConstData);break;case"TableQuery":a.SqlQueryConstData&&(e=a.SqlQueryConstData.ConstData);break;case"CustomConst":a&&(e=a.ConstData)}return e},setDefaultRecord:function(){var t=this._getDefaultValue();t&&isc.WidgetDatasource.setSingleRecordMultiValue(this,t)},getV3MethodMap:function(){var t=this.Super("getV3MethodMap",arguments)||{};return t.setEnabled="setItemEnabled",t}})}));
