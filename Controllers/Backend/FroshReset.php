<?php

use FroshMaintenance\Components\ResetService;

class Shopware_Controllers_Backend_FroshReset extends Shopware_Controllers_Backend_ExtJs 
{
    private $resetService;

    public function preDispatch() {
        parent::preDispatch();

        $this->resetService = $this->get('frosh_maintenance.reset');
    }

    public function getInfoAction() {
        $data = [
            $this->resetService->getCategoriesCount(),
            $this->resetService->getProductCount(),         
        ];

        $this->View()->assign([
            'success' => true,
            'data' => $data
        ]);
    }
}