!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";isc.ClassFactory.defineClass("JGComboBox","JGBaseFormWidget"),isc.ClassFactory.mixInInterface("JGComboBox","IWindowAop"),isc.addGlobal("JGComboBox",isc.JGComboBox),isc.JGComboBox.addProperties({listener:["click","focus","blur","expand","keydown","loaddata","labelclick"],valueField:"iDColumnName",textField:"columnName",DropDownSource:null,WidgetStyle:"JGComboBox",disableValidation:!0,dropdownSourceHandler:function(){}}),isc.JGComboBox.addMethods({_initProperties:function(t){this.TitleWidth=t.TitleWidth=t.LabelWidth,this.textField="",this.valueField="",t.ColumnName?this.textField=t.ColumnName:(this.textField="ColumnName",this.ColumnName="ColumnName"),t.IDColumnName?this.valueField=t.IDColumnName:(this.IDColumnName="IDColumnName",this.valueField="IDColumnName"),this.NumCols=1,"JGComboBox"==this.WidgetStyle&&(this.WidgetStyle="JGFormIcon"),this.className+=" JGComboBox";var e=this;this.items=[isc.addProperties(t,{type:"V3ComboBoxItems",isAbsoluteForm:!0,getData:function(){return e.getDropDownSource()}})],this._observerDropdownSource()},_observerDropdownSource:function(){var t=this.getDropDownSource();if("object"!=typeof t)try{t=isc.JSON.decode(t)}catch(t){}if(t&&t.DataSourceSetting&&"Entity"==t.DataSourceSetting.DataSourceType){var e=t.DataSourceSetting.DataConfig.SourceName;if(e){var a=isc.JGDataSourceManager.get(this,e);if(a){var i=this;a.on(a.Events.LOAD,null,(function(){i.dropdownSourceHandler()})),a.on(a.Events.UPDATE,null,(function(){i.dropdownSourceHandler()})),a.on(a.Events.DELETE,null,(function(){i.dropdownSourceHandler()}))}}}},editRecord:function(t){if(this.valueMap){var e={};if(isc.addProperties(e,t),t&&!t.hasOwnProperty(this.textField)&&t.hasOwnProperty(this.valueField))e[this.textField]=this.valueMap[e[this.valueField]];else if(t&&!t.hasOwnProperty(this.valueField)&&t.hasOwnProperty(this.textField)){var a=e[this.textField];for(var i in this.valueMap)if(a==this.valueMap[i]){e[this.valueField]=i;break}}return this.editRecord(e)}return this.editRecord(t)},loadData:function(t){if(t&&0===t.length)this.setValueMap(t);else if(t&&t.length>0){var e=this.dataToValueMapNew(t);this.setValueMap(e.valueMap,e.keys)}},setValueMap:function(t,e){this.valueMap=t,e&&(this._$OrderKeys=e);var a=this.getBaseComboboxItem();if(a){isc.isAn.emptyObject(t)||(a.setValueMap(t),0===t.length&&(a.pickList?null!=a.pickList.data&&(a.pickList.data.clearAll(),a.orderItemArray=[]):a.$192=[]));var i=this.DropDownSource&&this.DropDownSource.DataSourceSetting.DataConfig.IsPickListFields+"",o=a.getElementValue();if("true"===i&&(a._saveEleValue=o),"true"!==i||a._isAutomaticPrompt+""!="true"){var r=this.dataSource.getCacheData();if(r.length>0){for(var n,s=0;s<r.length;s++){var u=r[s];if(u.id==this.getData().id){n=u;break}}if(null!=n&&null!=n){var l=n[this.getIDColumnName()];if(null!=l&&null!=l){var c=l.split(","),d=[];for(s=0;s<c.length;s++)d.push(c[s]);a.setValue(d)}}}}}},dataToValueMapNew:function(t){var e={},a=[],o={keys:a,valueMap:e};this.defaultValue=[];var r=this.getBaseComboboxItem();r.orderItemArray=[];var n=r._displayName===r.name,s=this.DropDownSource.DataSourceSetting.DataConfig.IsPickListFields+""=="true";for(i=0;i<t.length;i++){var u=this._reGenObj(t[i]);if(u){var l=u[this.ColumnName],c=n&&!s&&u.text?u.text:u[this.IDColumnName];a.push(c),n&&!s?e[u.text]=u.text:e[c]=l,u.default&&this.defaultValue.add(c);var d={};s?(d=u)[this.valueField]=c:this.AutomaticPrompt&&"true"===(this.AutomaticPrompt+"").toLowerCase()?(d[this.textField]=l,d[this.valueField]=c):d[this.valueField]=c,r.orderItemArray.add(d)}}return o},_reGenObj:function(t){if(!t)return null;var e={};for(var a in t)t.hasOwnProperty(a)&&(e[a]=this._reverseHtmlChar(t[a]));return e},_reverseHtmlChar:function(t){return(t+"").replace(/&gt;/g,">").replace(/&lt;/g,"<")},getBaseComboboxItem:function(){return this.items[0]},getDropDownSource:function(){return this.DropDownSource},setDropDownSource:function(t){this.DropDownSource=t},getColumnName:function(){return this.textField},getIDColumnName:function(){return this.valueField},getBindFields:function(){return[this.IDColumnName,this.ColumnName]},filterChanged:function(t){return t&&t.hasOwnProperty(this.IDColumnName)},beforeDataLoad:function(){this.BeforeDataLoadAction&&this.BeforeDataLoadAction()},getV3Value:function(){var t=this.AutomaticPrompt+"";if(t&&"true"===t.toLowerCase()){var e=this.getBaseComboboxItem().getValueFieldItem();return e&&e.getElementValue()}var a=this.getWidgetData();return a?a[this.IDColumnName]:""},setV3Value:function(t){var e={};if(e[this.getIDColumnName()]=t,"true"!==(this.AutomaticPrompt+"").toLowerCase()){var a=this.getColumnName(),i=this.items&&this.items[1]&&this.items[1].mapValueToDisplay(t);i+""!="null"&&i+""!="undefined"&&(e[a]=i)}var o=this.TableName;if(o){var r=[this.IDColumnName],n=o.getCurrentRecord(),s={};n||(n=o.createRecord(),o.insertRecords([n])),s.id=n.id;for(var u=0,l=r.length;u<l;u++){var c=r[u];s[c]=e[c]}o.updateRecords([s])}},getText:function(){var t=this.getWidgetData();return t?t[this.ColumnName]:""},_getDefaultValue:function(){var t={},e=null,a=null;if(r=this.DropDownSource){if("object"!=typeof r)try{r=isc.JSON.decode(r)}catch(t){}var i=r.uiData;if(i)for(var o=0;o<i.length;o++){var r;if(1==(r=i[o]).default){e=r.id,a=r.text;break}}t[this.IDColumnName]=e,t[this.ColumnName]=a}return t},getDefaultValue:function(t){return this._getDefaultValue()[t]},getConstData:function(t){var e,a=t.DataConfig;if(a)switch(t.DataSourceType){case"Entity":a.EntityConstData&&(e=a.EntityConstData.ConstData);break;case"TableQuery":a.SqlQueryConstData&&(e=a.SqlQueryConstData.ConstData);break;case"CustomConst":a&&(e=a.ConstData)}return e},setDefaultRecord:function(){var t=this._getDefaultValue();t&&this.setWidgetData(t)}})}));
