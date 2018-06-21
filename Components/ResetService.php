<?php

namespace FroshMaintenance\Components;

use Doctrine\DBAL\Connection;

class ResetService {
    private $connectin;
    
    public function __construct(Connection $connection) {
        $this->connection = $connection;
    }

    public function getCategoriesCount() {
        return [
            'module' => 'Kategorien',
            'count' => 2
        ];
    }

    public function getProductCount() {
        return [
            'module' => 'Artikel',
            'count' => 55
        ];
    }
}