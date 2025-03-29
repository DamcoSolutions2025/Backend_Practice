const productSchema = require("../schema/productSchema")

exports.AddProduct = async(req,res)=>{
    try {
        const newProduct = new productSchema({
            Name: req.body.Name,
            Manufacturer: req.body.Manufacturer,
            Price: req.body.Price,
            Quantity: req.body.Quantity
        });
        const savedProduct = await newProduct.save();
        res.status(201).json({ message: "✅ Product inserted successfully", product: savedProduct });
    } catch (error) {
        console.error("❌ Error saving product:", error);
        res.status(500).json({ message: "❌ Failed to insert data", error: error.message });
    }
}