isc.JGFormLayout.addMethods({

	getReadOnlyJGFloatBox: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.ReadOnly;
	},

	getEnabledJGFloatBox: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.Enabled;
	},

	setIsMustJGFloatBox: function (itemCode, isMust) {
		this.setItemIsMust(itemCode, isMust);
	},

	getLabelTextJGFloatBox: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.SimpleChineseTitle;
	},

	setLabelTextJGFloatBox: function (itemCode, title) {
		this.setLabelText(title, itemCode);
	},

	getVisibleJGFloatBox: function (itemCode) {
		var item = this.getItemByCode(itemCode);
		return item.Visible;
	},

	getValueJGFloatBox: function (itemCode) {
		if (this.getMultiDataSourceInfo && this.getMultiDataSourceInfo()) { //多数据源走同一赋值接口
			return this.getMultiDsValue(widgetCode, itemCode);
		}
		var item = this.getItemByCode(itemCode);
		var datasource = isc.JGDataSourceManager.get(this, item.TableName);
		return isc.DatasourceUtil.getSingleValue(datasource, item.name);
	},

	setReadOnlyJGFloatBox: function (itemCode, isReadonly) {
		this.setItemReadOnly(itemCode, isReadonly);
	},

	setEnabledJGFloatBox: function (itemCode, isEnable) {
		this.setItemEnabled(itemCode, isEnable);
	},
	//TODO
	cleanSelectedControlValueJGFloatBox: function (itemCode, onlyCleanSelectedRecord) {
		isc.WidgetDatasource.clearValue(itemCode, onlyCleanSelectedRecord);
	},

	setVisibleJGFloatBox: function (itemCode, isShow) {
		this.setItemVisible(itemCode, isShow);
	},

	setValueJGFloatBox: function (itemCode, value) {
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
	},

	getDefaultValueJGFloatBox: function (itemCode) {
		return this.getDefaultValue(itemCode);
	}
});