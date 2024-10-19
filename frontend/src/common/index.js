 
const backendDomin = "https://nestech-e-commerce-store-backend.vercel.app" ||"http://localhost:8000";

const SummaryApi = {
    signUP : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/signup`,
        method : "post"
    },
    signIn : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/signin`,
        method : "post"
    },
    current_user : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/all-user`,
        method : 'get'
    },
    updateUser : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/update-user`,
        method : "post"
    },
    uploadProduct : {
        url : `https://nestech-e-commerce-store-backend.vercel.app}/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/update-product`,
        method  : 'post'
    },
    categoryProduct : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/view-card-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/filter-product`,
        method : 'post'
    },
    deleteProduct : {
        url : `https://nestech-e-commerce-store-backend.vercel.app/api/delete-product`,
        method : 'post'
    }
}


export default SummaryApi
