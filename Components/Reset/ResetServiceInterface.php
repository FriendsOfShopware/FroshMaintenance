<?php

namespace FroshMaintenance\Components\Reset;

interface ResetServiceInterface {
    
    public function getCustomerCount();
    public function getOrderCount();
    public function getProductCount();
    public function getNumberrangeCount();
    public function getStatisticCount();
    public function getCategoryCount();
    public function getEmotionWorldCount();
    public function resetCustomers();
    public function resetOrders();
    public function resetProducts();
    public function resetNumberRanges();
    public function resetStatistics();
    public function resetCategories();
    public function resetEmotionWorlds();
}