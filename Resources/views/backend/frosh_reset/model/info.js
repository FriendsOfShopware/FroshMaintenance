//{block name="backend/frosh_maintenance/reset/model/info"}
Ext.define('Shopware.apps.FroshReset.model.Info', {
    
    extend: 'Ext.data.Model',

    fields: [
        { name: 'module', type: 'string' },
        { name: 'count', type: 'int' }
    ],

    proxy: {
        type: 'ajax',

        api: {
            read: '{url controller="FroshReset" action="getInfo"}'
        },

        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
//{/block}