Ext.define('Shopware.apps.FroshBash', {
    extend:'Enlight.app.SubApplication',
    name:'Shopware.apps.FroshBash',
    bulkLoad: true,
    loadPath: '{url action=load}',
    controllers: ['Main'],
    models: [],
    views: ['Window', 'Bash'],
    stores: [],

    /** Main Function
     * @private
     * @return [object] mainWindow - the main application window based on Enlight.app.Window
     */
    launch: function() {
        var me = this;
        var mainController = me.getController('Main');

        return mainController.mainWindow;
    }
});