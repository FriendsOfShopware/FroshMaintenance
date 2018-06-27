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

    public function resetData($modules) {

    }

    private function getTableCount($table, $countLabel = 'id') {
        $query = $this->connection->createQueryBuilder()
            ->select(["COUNT({$table}.{$countLabel})"])
            ->from($table);

        return $query->execute()->fetchAll(\PDO::FETCH_COLUMN);
    }
}