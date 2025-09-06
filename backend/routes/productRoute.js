import express from 'express'
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import productModel from '../models/productModel.js';
// import products from "../products.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productRouter = express.Router();

productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
productRouter.post('/remove',adminAuth,removeProduct);
productRouter.post('/single',singleProduct);
productRouter.get('/list',listProducts)

// productRouter.post("/seed", async (req, res) => {
//   try {
//     const filePath = path.resolve(__dirname, "../products.json");
//     console.log("Loading products from:", filePath);

//     await productModel.deleteMany({});
//     console.log("Deleted old products");

//     const data = fs.readFileSync(filePath, "utf-8");
//     const products = JSON.parse(data);

//     const inserted = await productModel.insertMany(products);
//     console.log("Inserted products:", inserted.length);

//     return res.json({
//       message: "Seeding successful",
//       count: inserted.length,
//     });
//   } catch (err) {
//     console.error("Seeding failed:", err);
//     return res.status(500).json({
//       message: "Seeding failed",
//       error: err.message,
//     });
//   }
// });

export default productRouter