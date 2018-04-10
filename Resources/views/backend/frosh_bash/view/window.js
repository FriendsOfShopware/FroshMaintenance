Ext.define('Shopware.apps.FroshBash.view.Window', {
    extend: 'Enlight.app.Window',
    title: 'Bash',
    alias: 'widget.frosh-bash-window',
    id: 'frosh-bash',
    border: false,
    autoShow: true,
    height: 650,
    width: 925,
    layout: 'fit',
 
    initComponent: function() {
        var me = this;
        me.items = [
            {
                xtype: 'frosh-bash-bash',
                flex: 1
            }
        ];
    
        me.callParent(arguments);
    }

});
 
