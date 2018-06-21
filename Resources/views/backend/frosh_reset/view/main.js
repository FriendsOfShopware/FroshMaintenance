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
            text: 'Alle auswählen',
            action: 'select-all',
            cls: 'secondary'
        },{
            text: 'Reset',
            action: 'reset-data',
            cls: 'primary'
        }];
    }
});