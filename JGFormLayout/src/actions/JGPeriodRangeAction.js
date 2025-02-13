isc.JGFormLayout.addMethods({

	getReadOnlyJGPeriodRange: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.ReadOnly;
	},

	setIsMustJGPeriodRange: function (itemCode, isMust) {
		this.setItemIsMust(itemCode, isMust);
	},

	getEnabledJGPeriodRange: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.Enabled;
	},

	cleanSelectedControlValueJGPeriodRange: function (itemCode, onlyCleanSelectedRecord) {
		widgetDatasource.clearValue(itemCode, onlyCleanSelectedRecord);
	},

	getLabelTextJGPeriodRange: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.SimpleChineseTitle;
	},

	setLabelTextJGPeriodRange: function (itemCode, title) {
		this.setLabelText(title, itemCode);
	},

	getVisibleJGPeriodRange: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.Visible;
	},

	getValueJGPeriodRange: function (itemCode) {
		if (this.getMultiDataSourceInfo && this.getMultiDataSourceInfo()) { //多数据源走同一赋值接口
			return this.getMultiDsValue(widgetCode, itemCode);
		}
		var item = this.getItemByCode(itemCode);
		var datasource = isc.JGDataSourceManager.get(this,item.TableName);
		return datasourceUtil.getSingleValue(datasource, item.name);
	},

	getDefaultValueJGPeriodRange: function (itemCode) {
		return this.getDefaultValue(itemCode);
	},

	setReadOnlyJGPeriodRange: function (itemCode, isReadonly) {
		this.setItemReadOnly(itemCode, isReadonly);
	},

	setEnabledJGPeriodRange: function (itemCode, isEnable) {
		this.setItemEnabled(itemCode, isEnable);
	},

	setVisibleJGPeriodRange: function (itemCode, isShow) {
		this.setItemVisible(itemCode, isShow);
	},

	setValueJGPeriodRange: function (itemCode, value) {
		if (this.getMultiDataSourceInfo && this.getMultiDataSourceInfo()) { //多数据源走同一赋值接口
			this.setMultiDsValue(widgetCode, itemCode, value);
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