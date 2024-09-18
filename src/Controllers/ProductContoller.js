import { Product } from "../Models/Product.js";

export default class ProductController {

    static async getAllProducts(req, res) {
        const products = await Product.find();
        return res.json({ products }); 
    }

    static async createdProduct(req, res) {
        const { name, description, quantity } = req.body;
        const data = new Product();
        data.name = name;
        data.description = description;
        data.quantity = quantity;
        const createdProduct = await Product.create(data);
        return res.json({ message: "Criado com sucesso!", data: createdProduct });
    }

    static async editProduct(req, res) {
        const { _id, name, quantity, description } = req.body;
        const product = await Product.findById(_id);
        if (!Product) {
            return res.status(404).json ({ messahe: "Produto não encontrado" });
        }
       const updateFields = {};
       if (name) updateFields.name = name;
       if (quantity) updateFields.quantity = quantity;
       if (description) updateFields.description = description;
       const updatedProduct = await Product.findByIdAndUpdate(_id, {$set: updateFields}, { new: true });
    }

    static async deleteProduct(req, res) {
        const { id }= req.params;
        await Product.findOndeAndDelete(id);
        return res.json({message: "Deletado com sucesso!" })

    }
}