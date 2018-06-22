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
    }
});