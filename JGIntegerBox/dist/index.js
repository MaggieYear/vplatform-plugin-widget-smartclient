!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";isc.ClassFactory.defineClass("JGIntegerBox","JGBaseFormWidget"),isc.ClassFactory.mixInInterface("JGIntegerBox","JGFormatHelper"),isc.ClassFactory.mixInInterface("JGIntegerBox","IWindowAop"),isc.JGIntegerBox.addProperties({DisplayFormat:null,Height:20,Visible:!0,ColumnName:null,ValueFontStyle:null,ValueBackColor:null,ReadOnly:!1,LabelFontStyle:null,ValueTextAlign:"center",Name:null,LabelTextAlign:"center",Left:0,TabIndex:-1,LabelForeColor:null,LabelBackColor:null,Top:0,SimpleChineseTitle:null,IsMust:!1,Enabled:!1,ValueForeColor:null,MaxLength:11,listener:["change","focus","blur","keydown","click","titleClick"],WidgetStyle:"JGTextBox"}),isc.JGIntegerBox.addMethods({_initProperties:function(t){this.TitleWidth=t.LabelWidth,this.TitleVisible=t.LabelVisible,"JGIntegerBox"==this.WidgetStyle&&(this.WidgetStyle="JGForm");var e=[isc.addProperties(t,{type:"V3IntegerBoxItems",isAbsoluteForm:!0,formatEditorValue:this.DisplayFormat&&this.DisplayFormat.displayFormat?this.formatDisplayValue:null,formatOnFocusChange:!0})];this.items=e,this._initEventAndDataBinding()},_initEventAndDataBinding:function(){var t=this;isc.WidgetDatasource.addBindDatasourceCurrentRecordUpdateEventHandler(this,null,null,(function(e){isc.DataBindingUtil.setWidgetValue(t,e)})),isc.WidgetDatasource.addBindDatasourceCurrentRecordClearEventHandler(this,null,null,(function(){isc.DataBindingUtil.clearWidgetValue(t)})),isc.DatasourceUtil.addDatasourceLoadEventHandler(this,this.OnValueLoaded),isc.DatasourceUtil.addDatasourceFieldUpdateEventHandler(this,null,this.OnValueChanged)},getBindFields:function(){return[this.ColumnName]},formatDisplayValue:function(t,e,i,a){if(null!=t&&null!=t&&this.form.DisplayFormat&&this.form.DisplayFormat.displayFormat){var l=this.form.DisplayFormat.numType,s=this.form.DisplayFormat.displayFormat,n="_realValue"+a.name;return isc.isA.Date(t)?a[n]=t.toJapanShortDate():a[n]=t,this.form.valueFormat(t,s,l)}return t},blurCheck:function(){var t=this.items.last().getValue(),e=2147483647,i=-2147483648;/^[-\+]?\d+$/.test(t)?t>e?this.items.last().setValue(e):t<i?this.items.last().setValue(i):(t=1*(t+"").substring(0,this.MaxLength),this.items.last().setValue(t)):this.items.last().setValue(null)},windowInited:function(){if(this.DisplayFormat&&this.DisplayFormat.displayFormat){var t=this.DisplayFormat.numType,e=this.DisplayFormat.displayFormat;if("8"==t){this.DisplayFormat.displayFormat=this._v3ExpHandler(e);for(var i=0;i<this.items.length;i++)this.items[i]&&this.items[i].displayFormat&&(this.items[i].displayFormat=this.DisplayFormat.displayFormat)}}}})}));
