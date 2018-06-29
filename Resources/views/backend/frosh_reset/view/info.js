//{block name="backend/frosh_maintenance/reset/view/info"}
Ext.define('Shopware.apps.FroshReset.view.Info', {
    
    extend: 'Ext.grid.Panel',
    
    alias: 'widget.frosh-reset-info',
    
    title: '{s namespace="backend/frosh_maintenance/info" name="Title"}Latest database{/s}',
    
    layout: 'fit',
    
    autoScroll: true,

    initComponent: function() {
        var me = this;

        me.buttons = [
            Ext.create('Ext.Button', {
                text: '{s namespace="backend/frosh_maintenance/info" name="RefreshButton"}Refresh{/s}',
                cls: 'secondary',
                action: 'refresh'
            })
        ];

        Ext.applyIf(me, {
            columns: me.getColumns()
        });

        me.callParent(arguments);
    },

    getColumns: function() {
        var me = this;

        return [{
            header: '{s namespace="backend/frosh_maintenance/info/table" name="ColumnHeaderModule"}Module{/s}',
            dataIndex: 'module',
            flex: 1,
        }, {
            header: '{s namespace="backend/frosh_maintenance/info/table" name="ColumnHeaderCount"}Count{/s}',
            dataIndex: 'count',
            flex: 1,
        }];
    }
});
//{/block}