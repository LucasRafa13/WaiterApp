import { Request, Response } from 'express'

import { Product } from '../../models/Product'

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params
    const products = await Product.find().where('category').equals(categoryId)
    res.json(products)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error fetching products!' })
  }
}
