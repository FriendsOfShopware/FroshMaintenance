//{block name="backend/frosh_maintenance/reset/view/main"}
Ext.define('Shopware.apps.FroshReset.view.Main', {
    
    extend: 'Ext.form.Panel',
    
    alias: 'widget.frosh-reset-main',
    
    layout: 'vbox',

    defaults: {
        width: '100%'
    },

    initComponent: function() {
        var me = this;

        me.items = [
            {
                xtype: 'frosh-reset-info',
                store: me.infoStore,
                flex: 1
            },
            {
                xtype: 'frosh-reset-form',
                flex: 1
            }
        ];

        me.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'shopware-ui',
            cls: 'shopware-toolbar',
            items: me.getButtons()
        }];

        me.callParent(arguments);
    },

    getButtons: function() {
        var me = this;

        return ['->', {
            text: '{s namespace="backend/frosh_maintenance/main" name="SelectAllButton"}Select all{/s}',
            action: 'select-all',
            cls: 'secondary'
        },{
            text: '{s namespace="backend/frosh_maintenance/main" name="ResetDataButton"}Reset{/s}',
            action: 'reset-data',
            cls: 'primary'
        }];
    }
});
//{/block}