Ext.define('Shopware.apps.FroshReset.view.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.frosh-reset-form',
    title: '{s namespace="backend/frosh_maintenance/form" name="Title"}Reset data{/s}',
    autoScroll: true,
    bodyPadding: 10,
    url: '{url controller=FroshReset action=resetData}',
    waitMsg: '{s namespace="backend/frosh_maintenance/form" name="WaitMessageText"}Resetting data{/s}',
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
        
        me.form.submit(options);
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
                        name: 'reset[customers]',
                        boxLabel: '{s namespace="backend/frosh_maintenance/form" name="CustomersBoxLabel"}Customers{/s}',
                        supportText: '{s namespace="backend/frosh_maintenance/form" name="CustomersSupportText"}Clear all customers with related tables{/s}'
                    },
                    {
                        name: 'reset[orders]',
                        boxLabel: '{s namespace="backend/frosh_maintenance/form" name="OrdersBoxLabel"}Orders{/s}',
                        supportText: '{s namespace="backend/frosh_maintenance/form" name="OrdersSupportText"}Clear all orders with related tables{/s}'
                    },
                    {
                        name: 'reset[products]',
                        boxLabel: '{s namespace="backend/frosh_maintenance/form" name="ProductsBoxLabel"}Products{/s}',
                        supportText: '{s namespace="backend/frosh_maintenance/form" name="ProductsSupportText"}Clear all products with related tables{/s}'
                    },
                    {
                        name: 'reset[numberranges]',
                        boxLabel: '{s namespace="backend/frosh_maintenance/form" name="NumberrangesBoxLabel"}Number ranges{/s}',
                        supportText: '{s namespace="backend/frosh_maintenance/form" name="NumberrangesSupportText"}Clear all number ranges with related tables{/s}'
                    }
                ]
            },
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
                        name: 'reset[statistics]',
                        boxLabel: '{s namespace="backend/frosh_maintenance/form" name="StatisticsBoxLabel"}Statistics{/s}',
                        supportText: '{s namespace="backend/frosh_maintenance/form" name="StatisticsSupportText"}Clear all statistics with related tables{/s}'
                    },
                    {
                        name: 'reset[categories]',
                        boxLabel: '{s namespace="backend/frosh_maintenance/form" name="CategoriesBoxLabel"}Categories{/s}',
                        supportText: '{s namespace="backend/frosh_maintenance/form" name="CategoriesSupportText"}Clear all categories with related tables{/s}'
                    },
                    {
                        name: 'reset[emotionworlds]',
                        boxLabel: '{s namespace="backend/frosh_maintenance/form" name="EmotionWorldsBoxLabel"}Emotion worlds{/s}',
                        supportText: '{s namespace="backend/frosh_maintenance/form" name="EmotionWorldsSupportText"}Clear all emotion worlds with related tables{/s}'
                    }
                ]
            }
        ];
    }
});