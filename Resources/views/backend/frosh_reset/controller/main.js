Ext.define('Shopware.apps.FroshReset.controller.Main', {
    extend: 'Ext.app.Controller',
    mainWindow: null,
    init: function() {
        var me = this;
        
        me.mainWindow = me.getView('Window').create({
            infoStore: me.getStore('Info')
        });

        me.mainWindow.show();

        me.callParent(arguments);

        me.control({
            'frosh-reset-main button[action=select-all]': {
                click: me.onSelectAll
            },
            'frosh-reset-main button[action=reset-data]': {
                click: me.onResetData
            },
            'frosh-reset-info button[action=refresh]': {
                click: me.onRefreshInfo
            }
        });
    },

    onSelectAll: function (btn) {
        var me = this;

        console.log('select all');
    },

    onResetData: function (btn) {
        var me = this;

        console.log('reset data');
    },

    onRefreshInfo: function (btn) {
        var me = this;

        console.log('refresh info');
    }
});