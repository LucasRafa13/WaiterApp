import { Router } from 'express'

import { listCategories } from './app/useCases/categories/listCategories'

export const router = Router()

// List Categories
router.get('/categories', listCategories)

// Create Category

router.post('/categories', (req, res) => {
  res.send('Category created')
})

// List Products

router.get('/products', (req, res) => {
  res.send('List of products')
})

// Create Product

router.post('/products', (req, res) => {
  res.send('Product created')
})

// Get Products By Category

router.get('/categories/:categoryId/products', (req, res) => {
  res.send(`OK`)
})

// List Orders

router.get('/orders', (req, res) => {
  res.send('List of orders')
})

// Create Order

router.post('/orders', (req, res) => {
  res.send('Order created')
})

// Change Order Status

router.patch('/orders/:orderId', (req, res) => {
  res.send('Order status changed')
})

// Delete Order

router.delete('/orders/:orderId', (req, res) => {
  res.send('Order deleted')
})
