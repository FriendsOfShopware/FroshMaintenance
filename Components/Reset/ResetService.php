<?php

namespace FroshMaintenance\Components\Reset;

use Doctrine\DBAL\Connection;
use FroshMaintenance\Components\Reset\ResetServiceInterface;

class ResetService implements ResetServiceInterface {
    private $connection;
    private $snippetManager;
    
    public function __construct(
        Connection $connection, 
        \Shopware_Components_Snippet_Manager $snippetManager
    ) {
        $this->connection = $connection;
        $this->snippetManager = $snippetManager;
    }

    public function getCustomerCount() {
        $count = $this->getTableCount('s_user');
        $moduleLabel = $this->snippetManager
                ->getNamespace('backend/frosh_maintenance/reset')
                ->get('customer', 'Customer');

        return [
            'module' => $moduleLabel,
            'count' => $count
        ];
    }

    public function getOrderCount() {
        $count = $this->getTableCount('s_order');
        $moduleLabel = $this->snippetManager
                ->getNamespace('backend/frosh_maintenance/reset')
                ->get('orders', 'Orders');

        return [
            'module' => $moduleLabel,
            'count' => $count
        ];
    }

    public function getProductCount() {
        $count = $this->getTableCount('s_articles');
        $moduleLabel = $this->snippetManager
                ->getNamespace('backend/frosh_maintenance/reset')
                ->get('products', 'Products');

        return [
            'module' => $moduleLabel,
            'count' => $count
        ];
    }

    public function getNumberrangeCount() {
        $count = $this->getTableCount('s_order_number');
        $moduleLabel = $this->snippetManager
                ->getNamespace('backend/frosh_maintenance/reset')
                ->get('orderNumber', 'Order number');

        return [
            'module' => $moduleLabel,
            'count' => $count
        ];
    }

    public function getStatisticCount() {
        $count = $this->getTableCount('s_statistics_visitors');
        $moduleLabel = $this->snippetManager
                ->getNamespace('backend/frosh_maintenance/reset')
                ->get('statistics', 'Statistics');

        return [
            'module' => $moduleLabel,
            'count' => $count
        ];
    }

    public function getCategoryCount() {
        $count = $this->getTableCount('s_categories');
        $moduleLabel = $this->snippetManager
                ->getNamespace('backend/frosh_maintenance/reset')
                ->get('categories', 'Categories');

        return [
            'module' => $moduleLabel,
            'count' => $count
        ];
    }

    public function getEmotionWorldCount() {
        $count = $this->getTableCount('s_emotion');
        $moduleLabel = $this->snippetManager
                ->getNamespace('backend/frosh_maintenance/reset')
                ->get('emotionWorlds', 'Emotion worlds');

        return [
            'module' => $moduleLabel,
            'count' => $count
        ];
    }

    private function getTableCount($table, $countLabel = 'id') {
        $query = $this->connection->createQueryBuilder()
            ->select(["COUNT({$table}.{$countLabel})"])
            ->from($table);

        return $query->execute()->fetchAll(\PDO::FETCH_COLUMN);
    }

    public function resetCustomers() {
        $this->connection->executeQuery('SET foreign_key_checks = 0;
            TRUNCATE `s_user`;
            TRUNCATE `s_user_addresses`;
            TRUNCATE `s_user_addresses_attributes`;
            TRUNCATE `s_user_attributes`;
            TRUNCATE `s_user_billingaddress`;
            TRUNCATE `s_user_billingaddress_attributes`;
            TRUNCATE `s_user_shippingaddress`;
            TRUNCATE `s_user_shippingaddress_attributes`;
            SET foreign_key_checks = 1;'
        );
    }

    public function resetOrders() {
        $this->connection->executeQuery('SET foreign_key_checks = 0;
            TRUNCATE `s_order`;
            TRUNCATE `s_order_attributes`;
            TRUNCATE `s_order_basket`;
            TRUNCATE `s_order_basket_attributes`;
            TRUNCATE `s_order_billingaddress`;
            TRUNCATE `s_order_billingaddress_attributes`;
            TRUNCATE `s_order_comparisons`;
            TRUNCATE `s_order_details`;
            TRUNCATE `s_order_details_attributes`;
            TRUNCATE `s_order_documents`;
            TRUNCATE `s_order_documents_attributes`;
            TRUNCATE `s_order_esd`;
            TRUNCATE `s_order_history`;
            TRUNCATE `s_order_notes`;
            TRUNCATE `s_order_shippingaddress`;
            TRUNCATE `s_order_shippingaddress_attributes`;
            SET foreign_key_checks = 1;'
        );
    }

    public function resetProducts() {
        $this->connection->executeQuery('SET foreign_key_checks = 0;
            TRUNCATE `s_addon_premiums`;
            TRUNCATE `s_articles`;
            TRUNCATE `s_articles_also_bought_ro`;
            TRUNCATE `s_articles_attributes`;
            TRUNCATE `s_articles_avoid_customergroups`;
            TRUNCATE `s_articles_categories`;
            TRUNCATE `s_articles_categories_ro`;
            TRUNCATE `s_articles_categories_seo`;
            TRUNCATE `s_articles_details`;
            TRUNCATE `s_articles_downloads`;
            TRUNCATE `s_articles_downloads_attributes`;
            TRUNCATE `s_articles_esd`;
            TRUNCATE `s_articles_esd_attributes`;
            TRUNCATE `s_articles_esd_serials`;
            TRUNCATE `s_articles_img`;
            TRUNCATE `s_articles_img_attributes`;
            TRUNCATE `s_articles_information`;
            TRUNCATE `s_articles_information_attributes`;
            TRUNCATE `s_articles_notification`;
            TRUNCATE `s_articles_prices`;
            TRUNCATE `s_articles_prices_attributes`;
            TRUNCATE `s_articles_relationships`;
            TRUNCATE `s_articles_similar`;
            TRUNCATE `s_articles_similar_shown_ro`;
            TRUNCATE `s_articles_supplier`;
            TRUNCATE `s_articles_supplier_attributes`;
            TRUNCATE `s_articles_top_seller_ro`;
            TRUNCATE `s_articles_translations`;
            TRUNCATE `s_articles_vote`;
            TRUNCATE `s_article_configurator_dependencies`;
            TRUNCATE `s_article_configurator_groups`;
            TRUNCATE `s_article_configurator_options`;
            TRUNCATE `s_article_configurator_option_relations`;
            TRUNCATE `s_article_configurator_price_variations`;
            TRUNCATE `s_article_configurator_sets`;
            TRUNCATE `s_article_configurator_set_group_relations`;
            TRUNCATE `s_article_configurator_set_option_relations`;
            TRUNCATE `s_article_configurator_templates`;
            TRUNCATE `s_article_configurator_templates_attributes`;
            TRUNCATE `s_article_configurator_template_prices`;
            TRUNCATE `s_article_configurator_template_prices_attributes`;
            TRUNCATE `s_article_img_mappings`;
            TRUNCATE `s_article_img_mapping_rules`;
            TRUNCATE `s_filter_articles`;
            SET foreign_key_checks = 1;'
        );
    }

    public function resetNumberRanges() {
        $this->connection->executeQuery("SET foreign_key_checks = 0;
            DROP TABLE `s_order_number`;
    
            CREATE TABLE IF NOT EXISTS `s_order_number` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `number` int(20) NOT NULL,
            `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
            `desc` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
            PRIMARY KEY (`id`),
            UNIQUE KEY `name` (`name`)
            ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;
            
            INSERT INTO `s_order_number` (`id`, `number`, `name`, `desc`) VALUES
            (1, 20000, 'user', 'Kunden'),
            (2, 20000, 'invoice', 'Bestellungen'),
            (3, 20000, 'doc_1', 'Lieferscheine'),
            (4, 20000, 'doc_2', 'Gutschriften'),
            (5, 20000, 'doc_0', 'Rechnungen'),
            (6, 10000, 'articleordernumber', 'Artikelbestellnummer  '),
            (7, 10000, 'sSERVICE1', 'Service - 1'),
            (8, 10000, 'sSERVICE2', 'Service - 2'),
            (9, 110, 'blogordernumber', 'Blog - ID');
            SET foreign_key_checks = 1;"
        );
    }

    public function resetStatistics() {
        $this->connection->executeQuery('SET foreign_key_checks = 0;
            TRUNCATE `s_statistics_currentusers`;
            TRUNCATE `s_statistics_pool`;
            TRUNCATE `s_statistics_referer`;
            TRUNCATE `s_statistics_search`;
            TRUNCATE `s_statistics_visitors`;
            SET foreign_key_checks = 1;'
        );
    }

    public function resetCategories() {
        $this->connection->executeQuery("SET foreign_key_checks = 0;
            TRUNCATE `s_categories`;
            TRUNCATE `s_categories_attributes`;
            TRUNCATE `s_categories_avoid_customergroups`;
            INSERT INTO `s_categories` (`id`, `parent`, `path`, `description`, `position`, `left`, `right`, `level`, `added`, `changed`, `metakeywords`, `metadescription`, `cmsheadline`, `cmstext`, `template`, `active`, `blog`, `external`, `hidefilter`, `hidetop`, `mediaID`, `product_box_layout`, `meta_title`, `stream_id`) VALUES
                (1, NULL, NULL, 'Root', 0, 0, 0, 0, '2012-07-30 15:24:59', '2012-07-30 15:24:59', NULL, NULL, NULL, NULL, NULL, 1, 0, NULL, 0, 0, NULL, NULL, NULL, NULL),
                (3, 1, NULL, 'Deutsch', 0, 0, 0, 0, '2012-07-30 15:24:59', '2012-07-30 15:24:59', NULL, NULL, NULL, NULL, NULL, 1, 0, NULL, 0, 0, NULL, NULL, NULL, NULL);
            INSERT INTO `s_categories_attributes` (`id`, `categoryID`, `attribute1`, `attribute2`, `attribute3`, `attribute4`, `attribute5`, `attribute6`) VALUES
                (1, 3, NULL, NULL, NULL, NULL, NULL, NULL);
            SET foreign_key_checks = 1;"
        );
    }

    public function resetEmotionWorlds() {
        $this->connection->executeQuery('SET foreign_key_checks = 0;
            TRUNCATE `s_emotion`;
            TRUNCATE `s_emotion_attributes`;
            TRUNCATE `s_emotion_categories`;
            TRUNCATE `s_emotion_element`;
            TRUNCATE `s_emotion_element_value`;
            SET foreign_key_checks = 1;'
        );
    }
}