<?php

namespace FroshMaintenance\Components\Reset;

interface ResetServiceInterface
{
    /**
     * Returns the count of all customers
     * 
     * @return array label and count of the customers module
     */
    public function getCustomerCount();

    /**
     * Returns the count of all orders
     * 
     * @return array label and count of the orders module
     */
    public function getOrderCount();

    /**
     * Returns the count of all products
     * 
     * @return array label and count of the products module
     */
    public function getProductCount();

    /**
     * Returns the count of all number ranges
     * 
     * @return array label and count of the number ranges module
     */
    public function getNumberrangeCount();

    /**
     * Returns the count of all visitor statistics
     * 
     * @return array label and count of the visitor statistics
     */
    public function getStatisticCount();

    /**
     * Returns the count of all categories
     * 
     * @return array label and count of the category module
     */
    public function getCategoryCount();

    /**
     * Returns the count of all emotion worlds
     * 
     * @return array label and count of the emotion worlds module
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
