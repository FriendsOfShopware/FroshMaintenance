Ext.define('Shopware.apps.FroshBash.controller.Main', {

    extend: 'Ext.app.Controller',

    mainWindow: null,

    opts: {
        'prompt': new Ext.XTemplate(
            '{{config name="froshBashPrompt"}|regex_replace:"/[\r\t\n]/" : ""}'
        ),
        'username': "",
        'hostname': "",
        'currentDir': "",
        'previousDir': "",
        'defaultDir': "{$froshBashShopwareRoot}",
        'commandHistory': [],
        'currentCommand': 0,
        'inputTextElement': undefined,
        'inputElement': undefined,
        'outputElement': undefined,
        'usernameElement': undefined,
        'uploadFormElement': undefined,
        'fileBrowserElement': undefined
    },

    init: function() {
        var me = this,
            openWindow = Ext.getCmp('frosh-bash');

        if (!openWindow) {
            me.mainWindow = me.getView('Window').create({
                listeners: {
                    afterrender: function() {
                        me.opts.inputTextElement = document.getElementById('frosh-bash-inputtext');
                        me.opts.inputElement = document.getElementById('frosh-bash-input');
                        me.opts.outputElement = document.getElementById('frosh-bash-output');
                        me.opts.usernameElement = document.getElementById('frosh-bash-username');
                        me.opts.uploadFormElement = document.getElementById('frosh-bash-upload');
                        me.opts.fileBrowserElement = document.getElementById('frosh-bash-filebrowser');

                        me.getShellInfo();

                        Ext.get('frosh-bash-inputtext').on('keydown', function(e) {
                            me.checkForArrowKeys(e);
                        });

                        Ext.get('frosh-bash-form').on('submit', function(e) {
                            me.sendCommand(e);
                        });

                        Ext.get('frosh-bash-filebrowser').on('change', function(e) {
                            me.uploadFile(e);
                        });

                        me.opts.inputTextElement.focus();
                    },
                    resize: function() {
                        me.updateInputWidth();
                    }
                }
            });

            me.callParent(arguments);
        } else {
            openWindow.show().toFront();
        }
    },

    getShellInfo: function() {
        var me = this,
            request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
                var parsedResponse = request.responseText.split("<br>");
                me.opts.username = parsedResponse[0];
                me.opts.hostname = parsedResponse[1];
                me.opts.currentDir = parsedResponse[2].replace(new RegExp("&sol;", "g"), "/");
                me.opts.defaultDir = me.opts.currentDir;
                me.opts.usernameElement.innerHTML = me.opts.prompt.apply({
                    username: me.opts.username,
                    hostname: me.opts.hostname,
                    dir: me.opts.currentDir
                });
                me.updateInputWidth();
            }
        };
        request.open("POST", "{url action=getShellInfo}", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send("cmd=whoami; hostname; pwd");
    },

    sendCommand: function(e) {
        e.preventDefault();

        var me = this,
            request = new XMLHttpRequest(),
            command = me.opts.inputTextElement.value,
            originalCommand = command,
            originalDir = me.opts.currentDir,
            cd = false;

        me.opts.commandHistory.push(originalCommand);

        me.switchCommand(me.opts.commandHistory.length);

        me.opts.inputTextElement.value = "";

        var parsedCommand = command.split(" ");

        if (parsedCommand[0] === "cd") {
            cd = true;
            if (parsedCommand.length === 1) {
                command = "cd "+me.opts.defaultDir+"; pwd";
            } else if (parsedCommand[1] === "-") {
                command = "cd "+me.opts.previousDir+"; pwd";
            } else {
                command = "cd "+me.opts.currentDir+"; "+command+"; pwd";
            }

        } else if (parsedCommand[0] === "clear") {
            me.opts.outputElement.innerHTML = "";
            return false;
        } else if (parsedCommand[0] === "upload") {
            me.opts.fileBrowserElement.click();
            return false;
        } else {
            command = "cd "+me.opts.currentDir+"; " + command;
        }

        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (cd) {
                    var parsedResponse = request.responseText.split("<br>");
                    me.opts.previousDir = me.opts.currentDir;
                    me.opts.currentDir = parsedResponse[0].replace(new RegExp("&sol;", "g"), "/");
                    me.opts.outputElement.innerHTML += me.opts.prompt.apply({
                        username: me.opts.username,
                        hostname: me.opts.hostname,
                        dir: originalDir,
                        command: originalCommand
                    }) + "<br>";
                    me.opts.usernameElement.innerHTML = me.opts.prompt.apply({
                        username: me.opts.username,
                        hostname: me.opts.hostname,
                        dir: me.opts.currentDir
                    });
                } else {
                    me.opts.outputElement.innerHTML += me.opts.prompt.apply({
                        username: me.opts.username,
                        hostname: me.opts.hostname,
                        dir: me.opts.currentDir,
                        command: originalCommand
                    }) + "<br>" + request.responseText.replace(new RegExp("<br><br>$"), "<br>");
                }
                me.opts.outputElement.scrollTop = me.opts.outputElement.scrollHeight;
                me.updateInputWidth();
            }
        };

        request.open("POST", "{url action=getShellInfo}", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send("cmd="+encodeURIComponent(command));
        return false;
    },

    uploadFile: function() {
        var me = this,
            formData = new FormData();

        formData.append('file', me.opts.fileBrowserElement.files[0], me.opts.fileBrowserElement.files[0].name);
        formData.append('path', me.opts.currentDir);

        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE) {
                me.opts.outputElement.innerHTML += request.responseText+"<br>";
                me.opts.outputElement.scrollTop = me.opts.outputElement.scrollHeight;
                me.opts.fileBrowserElement.value = "";
            }
        };

        request.open("POST", "{url action=getShellInfo}", true);
        request.send(formData);

        me.opts.outputElement.innerHTML += me.opts.prompt.apply({
            username: me.opts.username,
            hostname: me.opts.hostname,
            dir: me.opts.currentDir,
            command: "Uploading "+me.opts.fileBrowserElement.files[0].name+"..."
        }) + "<br>";
    },

    updateInputWidth: function() {
        var me = this;

        me.opts.inputTextElement.style.width = me.opts.inputElement.clientWidth - me.opts.usernameElement.clientWidth - 15 + 'px';
    },

    checkForArrowKeys: function(e) {
        var me = this;

        if (e.keyCode === 38) {
            me.previousCommand();
        } else if (e.keyCode === 40) {
            me.nextCommand();
        }
    },

    previousCommand: function() {
        var me = this;

        if (me.opts.currentCommand !== 0) {
            me.switchCommand(me.opts.currentCommand - 1);
        }
    },

    nextCommand: function() {
        var me = this;

        if (me.opts.currentCommand !== me.opts.commandHistory.length) {
            me.switchCommand(me.opts.currentCommand + 1);
        }
    },

    switchCommand: function(newCommand) {
        var me = this;

        me.opts.currentCommand = newCommand;

        if (me.opts.currentCommand === me.opts.commandHistory.length) {
            me.opts.inputTextElement.value = "";
        } else {
            me.opts.inputTextElement.value = me.opts.commandHistory[me.opts.currentCommand];
            setTimeout(
                function() {
                    me.opts.inputTextElement.selectionStart = me.opts.inputTextElement.selectionEnd = 10000;
                },
                0
            );
        }
    }
   
});
 
