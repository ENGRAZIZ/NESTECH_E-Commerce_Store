const addToCartModel =  require("../../models/cartProduct")

const addToCartViewProduct = async(req,res)=>{
    try{
        const currentUser = req.userId

        const allProduct = await addToCartModel.find({
            userId : currentUser
        }).populate("productId")

        res.json({
            data : allProduct,
            success : true,
            error : false
        })

    }catch(err){// Importing the addToCartModel for managing cart products
        const addToCartModel = require("../../models/cartProduct");
        
        // Controller function to handle viewing products in the cart
        const addToCartViewProduct = async (req, res) => {
            try {
                // Getting the current user ID from the request
                const currentUser = req.userId;
        
                // Fetching all products in the cart for the current user, populating product details
                const allProduct = await addToCartModel.find({
                    userId: currentUser
                }).populate("productId"); // Populating productId to get product details
        
                // Sending a success response with all products in the cart
                res.json({
                    data: allProduct,          // The list of products in the cart
                    success: true,
                    error: false
                });
        
            } catch (err) {
                // Sending an error response if fetching products fails
                res.json({
                    message: err.message || err, // Handling and displaying error message
                    error: true,
                    success: false
                });
            }
        };
        
        // Exporting the addToCartViewProduct for use in other parts of the application
        module.exports = addToCartViewProduct;
        
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports =  addToCartViewProduct