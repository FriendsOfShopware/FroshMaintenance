Ext.define('Shopware.apps.FroshBash.view.Bash', {
    extend:'Ext.container.Container',
    border:false,
    alias:'widget.frosh-bash-bash',
    region:'center',
    autoScroll:true,
    cls:'console-container',
    renderData: {
        'inlineStyles': `
            {config name="froshBashStylesheet"}
        `
    },

    initComponent:function () {
        var me = this;

        me.renderTpl = me.createBashTemplate();

        me.callParent(arguments);
    },

    createBashTemplate: function () {
        return new Ext.XTemplate(
            '{literal}<tpl for=".">',
            '<style>{inlineStyles}</style>',
            '<div class="console" id="frosh-bash">',
                '<div class="output" id="frosh-bash-output"></div>',
                '<div class="input" id="frosh-bash-input">',
                    '<form id="frosh-bash-form" method="GET">',
                        '<div class="username" id="frosh-bash-username"></div>',
                        '<input class="inputtext" id="frosh-bash-inputtext" name="cmd" autocomplete="off" autofocus>',
                    '</form>',
                '</div>',
            '</div>',
            '<form id="frosh-bash-upload" method="POST" style="display: none;">',
                '<input type="file" name="file" id="frosh-bash-filebrowser" />',
            '</form>',
            '</tpl>{/literal}'
        );
    }
});
