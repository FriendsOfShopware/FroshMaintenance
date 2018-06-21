Ext.define('Shopware.apps.FroshReset.view.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.frosh-reset-form',
    title: 'Daten zurücksetzen',
    autoScroll: true,
    bodyPadding: 10,
    url: '{url controller=FroshReset action=resetData}',
    waitMsg: 'Daten werden gelöscht',
    waitMsgTarget: true,
    submitEmptyText: false,

    layout: 'column',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: me.getItems()
        });

        me.callParent(arguments);
    },

    submit: function(options) {
        var me = this
            options = options || {};
        Ext.applyIf(options, {
            url: me.url,
            waitMsg: me.waitMsg
        });
        this.form.submit(options);
    },

    getItems: function() {
        var me = this;
        return [
            {
                xtype: 'container',
                columnWidth: '0.5',
                defaults: {
                    labelWidth: 155,
                    anchor: '100%',
                    xtype: 'checkbox',
                    margin: '10 0',
                    hideLabel: true
                },
                padding: '0 20 0 0',
                layout: 'anchor',
                items: [
                    {
                        name: 'reset[article]',
                        boxLabel: 'Artikel',
                        supportText: 'Alle Artikel und zugehörigen Tabellen leeren'
                    },
                    {
                        name: 'reset[category]',
                        boxLabel: 'Kategorien',
                        supportText: 'Alle Kategorien und zugehörigen Tabellen leeren'
                    },
                ]
            }
        ];
    }
});