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
        
        $resetData = $this->Request()->getPost('reset', []);

        if ($resetData['customers'] === 'on') {
            $this->resetService->resetCustomers();
        }

        if ($resetData['orders'] === 'on') {
            $this->resetService->resetOrders();
        }

        if ($resetData['products'] === 'on') {
            $this->resetService->resetProducts();
        }

        if ($resetData['numberranges'] === 'on') {
            $this->resetService->resetNumberRanges();
        }

        if ($resetData['statistics'] === 'on') {
            $this->resetService->resetStatistics();
        }

        if ($resetData['categories'] === 'on') {
            $this->resetService->resetCategories();
        }

        if ($resetData['emotionworlds'] === 'on') {
            $this->resetService->resetEmotionWorlds();
        }
       
        $this->View()->assign([
            'success' => true
        ]);
    }
}