# Maintenance Plugin

[![Join the chat at https://gitter.im/FriendsOfShopware/Lobby](https://badges.gitter.im/FriendsOfShopware/Lobby.svg)](https://gitter.im/FriendsOfShopware/Lobby)

This plugin adds several tools to simplifiy the maintenance of your shopware shop. Obviously it is **highly recommended** to **not** permanently deploy this 
plugin to a production environment. The tools are combined in the backend under the configuration / maintenance entry.

## Installation

* Clone this repository into a folder **FroshMaintenance** within the **custom/plugins** directory of the Shopware installation.
* Install the plugin through the Plugin-Manager within the Shopware backend.

## Install with composer

* Change to your root installation of shopware
* Run command `composer require frosh/frosh-maintenance` and install and activate plugin with Plugin Manager 

## Requirements

* Shopware 5.3.4 or higher
* PHP 7.0

## Tool: Command Line in Shopware

This tool adds command line window (semi-interactive web shell) to the Shopware backend.

![Bash](https://davidneustadt.de/web/upload/bash.gif)

It's based on [phpbash](https://github.com/Arrexel/phpbash) by [Arrexel](https://github.com/Arrexel)

Changes to *phpbash*:

* Integration and refactoring of the JavaScript/CSS into ExtJS Components
* Rewritten parts of the PHP code for use in Shopware Controllers and CS reformatting.

### Why?

Because we can.

This is ment to be a temporary maintenance tool in cases where, for whatever reason, there is no access to the actual bash.

### Custom Commands
- `cd` Return to default shell directory
- `cd <path>` Change directory
- `cd -` Return to previous directory
- `clear` Clears all output
- `upload` Opens the file browser and uploads selected file

## Tool: Database Reset

This tool simplifies the reset process of the database for specified modules and deletes all data of the module including the related ones.

![Reset Overview](https://alexander.8mylez.com/frosh_maintenance_reset_overview.png)

### Modules

* Customers
* Orders
* Products
* Number ranges
* Statistics
* Categories
* Emotion worlds

### Why?

Sometimes you need to delete all data, because an import is not working correctly. Please consider that all data is deleted and gone forever.

The tool is based on the SQL Queries of [Shopware SQL Reset Queries](https://en-community.shopware.com/_detail_1666.html)