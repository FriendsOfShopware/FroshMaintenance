Ext.define('Shopware.apps.FroshReset.view.Info', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.frosh-reset-info',
    title: '{s name=info/title}Aktueller Datenbestand{/s}',
    layout: 'fit',
    autoScroll: true,

    initComponent: function() {
        var me = this;

        me.buttons = [
            Ext.create('Ext.Button', {
                text: 'Refresh',
                cls: 'secondary',
                scope: me,
                handler: function() {
                    me.refreshResetInfo();
                }
            })
        ];

        Ext.applyIf(me, {
            columns: me.getColumns()
        });

        me.callParent(arguments);
    },

    refreshResetInfo: function() {
        var me = this;

        me.store.load();
    },

    getColumns: function() {
        var me = this;

        return [{
            header: 'Module',
            dataIndex: 'module',
            flex: 1,
        }, {
            header: 'Count',
            dataIndex: 'count',
            flex: 1,
        }];
    }
});