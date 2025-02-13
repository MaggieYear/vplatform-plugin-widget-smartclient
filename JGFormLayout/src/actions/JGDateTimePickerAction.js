isc.JGFormLayout.addMethods({

	getReadOnlyJGDateTimePicker: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.ReadOnly;
	},

	getEnabledJGDateTimePicker: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.Enabled;
	},

	setIsMustJGDateTimePicker: function (itemCode, isMust) {
		this.setItemIsMust(itemCode, isMust);
	},
	//TODO
	cleanSelectedControlValueJGDateTimePicker: function (itemCode, onlyCleanSelectedRecord) {
		isc.WidgetDatasource.clearValue(itemCode, onlyCleanSelectedRecord);
	},

	getLabelTextJGDateTimePicker: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.SimpleChineseTitle;
	},

	setLabelTextJGDateTimePicker: function (itemCode, title) {
		this.setLabelText(title, itemCode);
	},

	getVisibleJGDateTimePicker: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.Visible;
	},

	getValueJGDateTimePicker: function (itemCode) {
		if (this.getMultiDataSourceInfo && this.getMultiDataSourceInfo()) { //多数据源走同一赋值接口
			return this.getMultiDsValue(widgetCode, itemCode);
		}
		var item = this.getItemByCode(itemCode);
		var datasource = isc.JGDataSourceManager.get(this, item.TableName);
		return isc.DatasourceUtil.getSingleValue(datasource, item.name);
	},

	getDefaultValueJGDateTimePicker: function (itemCode) {
		return this.getDefaultValue(itemCode);
	},

	setReadOnlyJGDateTimePicker: function (itemCode, isReadonly) {
		this.setItemReadOnly(itemCode, isReadonly);
	},

	setEnabledJGDateTimePicker: function (itemCode, isEnable) {
		this.setItemEnabled(itemCode, isEnable);
	},

	setVisibleJGDateTimePicker: function (itemCode, isShow) {
		this.setItemVisible(itemCode, isShow);
	},
	
	setValueJGDateTimePicker: function (itemCode, value) {
		if (this.getMultiDataSourceInfo && this.getMultiDataSourceInfo()) { //多数据源走同一赋值接口
			this.setMultiDsValue(widgetCode, itemCode, value);
			return;
		}
		var item = this.getItemByCode(itemCode);
		var datasource = isc.JGDataSourceManager.get(this, item.TableName);
		var record = datasource.getCurrentRecord();
		var data = {
			id: record.id
		};
		data[item.name] = value;
		datasource.updateRecords([data]);
	}
});