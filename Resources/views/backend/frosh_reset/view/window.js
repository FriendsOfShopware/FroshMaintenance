//{block name="backend/frosh_maintenance/reset/view/window"}
Ext.define('Shopware.apps.FroshReset.view.Window', {
    
    extend: 'Enlight.app.Window',
    
    title: '{s namespace="backend/frosh_maintenance/window" name="Title"}Reset{/s}',
    
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
                infoStore: me.infoStore
            }
        ];

        me.callParent(arguments);
    }
});
//{/block}