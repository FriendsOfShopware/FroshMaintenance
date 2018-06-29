//{block name="backend/frosh_maintenance/reset/controller/main"}
Ext.define('Shopware.apps.FroshReset.controller.Main', {
    
    extend: 'Ext.app.Controller',
    
    mainWindow: null,
    
    refs: [
        { ref: 'form', selector: 'frosh-reset-form' },
    ],

    init: function() {
        var me = this;
        me.infoStore = me.getStore('Info');

        me.mainWindow = me.getView('Window').create({
            infoStore: me.infoStore
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

        me.getForm().getForm().getFields().each(function(item) {
            item.setValue(true);
        });
    },

    onResetData: function (btn) {
        var me = this;

        me.getForm().submit({
            success: function(form, action) {
                me.infoStore.load({
                    callback: function(records, operation) {
                        Shopware.Notification.createGrowlMessage(
                            '{s namespace="backend/frosh_maintenance/main" name="GrowlMessageTitle"}Database Reset{/s}',
                            '{s namespace="backend/frosh_maintenance/main" name="GrowlMessageContent"}Database has beed resetted.{/s}'
                        );
                    }
                });
            }
        });
    },

    onRefreshInfo: function (btn) {
        var me = this;

        me.infoStore.load();
    }
});
//{/block}