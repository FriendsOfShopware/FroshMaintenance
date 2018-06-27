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
    public function resetData($modules);
}