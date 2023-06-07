import { Router } from "express";
import {getProducts, createProduct, getProductById, deleteProductById, countTotalProducts, updateProductById} from '../controllers/products.controller';

const router = Router()

router.get('/products',getProducts);

router.get('/products/:id', getProductById);

router.get('/products/count/all',countTotalProducts);

router.post('/products',createProduct);

router.delete('/products/:id',deleteProductById);

router.put('/products/:id', updateProductById);

export default router;