const deleteModel =  require("../../models/productModel")

const deleteProduct = async(req,res)=>{
    try{
        if(!req.userId){
            throw new Error("User not logged in")
        }
        const ProductId = req.body._id

        const deleteProduct = await deleteModel.deleteOne({ _id : ProductId})

        res.json({
            message : "Product Deleted Successfully",
            error : false,
            success : true,
            data : deleteProduct
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteProduct