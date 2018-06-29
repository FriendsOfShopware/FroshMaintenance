<?php

use FroshMaintenance\Components\Reset\ResetServiceInterface;

class Shopware_Controllers_Backend_FroshReset extends Shopware_Controllers_Backend_ExtJs
{
    /**
     * @var ResetServiceInterface
     */
    private $resetService;

    /**
     * Load the Reset service
     */
    public function preDispatch()
    {
        parent::preDispatch();
        $this->resetService = $this->get('frosh_maintenance.reset');
    }

    /**
     * Returns all information for the module that can be resetted
     */
    public function getInfoAction()
    {
        $data = [
            $this->resetService->getCustomerCount(),
            $this->resetService->getOrderCount(),
            $this->resetService->getProductCount(),
            $this->resetService->getNumberrangeCount(),
            $this->resetService->getStatisticCount(),
            $this->resetService->getCategoryCount(),
            $this->resetService->getEmotionWorldCount(),
        ];

        $this->View()->assign([
            'success' => true,
            'data' => $data,
        ]);
    }

    /**
     * Deletes the selected data 
     *
     * @return void
     */
    public function resetDataAction()
    {
        $resetData = $this->Request()->getPost('reset', []);

        if ('on' === $resetData['customers']) {
            $this->resetService->resetCustomers();
        }

        if ('on' === $resetData['orders']) {
            $this->resetService->resetOrders();
        }

        if ('on' === $resetData['products']) {
            $this->resetService->resetProducts();
        }

        if ('on' === $resetData['numberranges']) {
            $this->resetService->resetNumberRanges();
        }

        if ('on' === $resetData['statistics']) {
            $this->resetService->resetStatistics();
        }

        if ('on' === $resetData['categories']) {
            $this->resetService->resetCategories();
        }

        if ('on' === $resetData['emotionworlds']) {
            $this->resetService->resetEmotionWorlds();
        }

        $this->View()->assign([
            'success' => true,
        ]);
    }
}
