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
            $this->resetService->getCustomerCount(),
            $this->resetService->getOrderCount(),
            $this->resetService->getProductCount(),
            $this->resetService->getNumberrangeCount(),
            $this->resetService->getStatisticCount(),
            $this->resetService->getCategoryCount(),
            $this->resetService->getEmotionWorldCount()
        ];

        $this->View()->assign([
            'success' => true,
            'data' => $data
        ]);
    }

    public function resetDataAction() {
        //do the reset

        $this->View()->assign([
            'success' => true
        ]);
    }
}