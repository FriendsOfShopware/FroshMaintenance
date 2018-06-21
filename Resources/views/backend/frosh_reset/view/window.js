Ext.define('Shopware.apps.FroshReset.view.Window', {
    extend: 'Enlight.app.Window',
    title: 'Reset',
    alias: 'widget.frosh-reset-window',
    id: 'frosh-reset',
    border: false,
    autoShow: false,
    layout: 'fit',
    width: 830,
    stateful: true,

    initComponent: function() {
        var me = this;

        me.items = [
            { 
                xtype: 'frosh-reset-main',
                flex: 1,
                infoStore: me.infoStore
            }
        ];

        me.callParent(arguments);
    }
});