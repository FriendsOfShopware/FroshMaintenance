<?php

namespace FroshMaintenance\Components\Reset;

interface ResetServiceInterface
{
    /**
     * Returns the count of all customers
     */
    public function getCustomerCount();

    /**
     * Returns the count of all orders
     */
    public function getOrderCount();

    /**
     * Returns the count of all products
     */
    public function getProductCount();

    /**
     * Returns the count of all number ranges
     */
    public function getNumberrangeCount();

    /**
     * Returns the count of all visitor statistics
     */
    public function getStatisticCount();

    /**
     * Returns the count of all categories
     */
    public function getCategoryCount();

    /**
     * Returns the count of all emotion worlds
     */
    public function getEmotionWorldCount();

    /**
     * Deletes the customers data with all related data
     */
    public function resetCustomers();

    /**
     * Deletes the orders data with all related data
     */
    public function resetOrders();

    /**
     * Deletes the products data with all related data
     */
    public function resetProducts();

    /**
     * Deletes the number ranges data with all related data
     */
    public function resetNumberRanges();

    /**
     * Deletes the statistics data with all related data
     */
    public function resetStatistics();

    /**
     * Deletes the categories data with all related data
     */
    public function resetCategories();

    /**
     * Deletes the emotion worlds data with all related data
     */
    public function resetEmotionWorlds();
}
