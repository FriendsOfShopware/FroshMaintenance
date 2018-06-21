Ext.define('Shopware.apps.FroshReset', {
    extend: 'Enlight.app.SubApplication',
    name: 'Shopware.apps.FroshReset',
    bulkLoad: true,
    loadPath: '{url action=load}',
    controllers: [ 'Main' ],
    models: [ 'Info' ],
    views: [ 'Window', 'Main', 'Info', 'Form' ],
    stores: [ 'Info' ],

    launch: function() {
        var me = this;

        var mainController = me.getController('Main');

        return mainController.mainWindow;
    }
});