isc.JGFormLayout.addMethods({
	
	getReadOnlyJGPeriod : function(itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.ReadOnly;
	},
	
	setIsMustJGPeriod : function(itemCode,isMust){
		this.setItemIsMust(itemCode, isMust);
	} ,
	
	getEnabledJGPeriod : function(itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.Enabled;
	},
	
	getLabelTextJGPeriod : function(itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.SimpleChineseTitle;
	},
	//TODO
	cleanSelectedControlValueJGPeriod : function(itemCode, onlyCleanSelectedRecord) {
		isc.WidgetDatasource.clearValue(itemCode, onlyCleanSelectedRecord);
	},
	
	setLabelTextJGPeriod : function(itemCode, title){
		this.setLabelText(title,itemCode);
	},
	
	
	getVisibleJGPeriod : function(itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.Visible;
	},

	getValueJGPeriod : function(itemCode) {
		if(this.getMultiDataSourceInfo && this.getMultiDataSourceInfo()){//多数据源走同一赋值接口
			return this.getMultiDsValue(widgetCode, itemCode);
		}
		var item = this.getItemByCode(itemCode);
		var datasource = isc.JGDataSourceManager.get(this,item.TableName);
		return isc.DatasourceUtil.getSingleValue(datasource, item.name);
	},
	
	getDefaultValueJGPeriod : function(itemCode) {
		return this.getDefaultValue( itemCode);
	},

	setReadOnlyJGPeriod : function(itemCode, isReadonly) {
		this.setItemReadOnly( itemCode, isReadonly);
	},

	setEnabledJGPeriod : function(itemCode, isEnable) {
		this.setItemEnabled( itemCode, isEnable);
	},

	setVisibleJGPeriod : function(itemCode, isShow) {
		this.setItemVisible( itemCode, isShow);
	},
	
	setValueJGPeriod : function(itemCode, value) {
		if(this.getMultiDataSourceInfo && this.getMultiDataSourceInfo()){//多数据源走同一赋值接口
			this.setMultiDsValue(widgetCode,itemCode, value);
			return;
		}
		var item = this.getItemByCode(itemCode);
		var datasource = isc.JGDataSourceManager.get(this,item.TableName);
		var record = datasource.getCurrentRecord();
		var data = {
			id : record.id
		}
		data[item.name] = value;
		datasource.updateRecords([data]);
	}
});