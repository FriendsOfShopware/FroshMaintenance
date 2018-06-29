//{block name="backend/frosh_maintenance/reset/app"}
Ext.define('Shopware.apps.FroshReset', {

    extend: 'Enlight.app.SubApplication',

    name: 'Shopware.apps.FroshReset',

    bulkLoad: true,

    loadPath: '{url action=load}',

    views: [ 
        'Window', 
        'Main', 
        'Info', 
        'Form'
    ],

    stores: ['Info'],

    models: ['Info'],
    
    controllers: ['Main'],
    
    launch: function() {
        var me = this;

        var mainController = me.getController('Main');

        return mainController.mainWindow;
    }
});
//{/block}