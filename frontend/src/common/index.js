 
const backendDomin = "https://nestech-e-commerce-store-backend.vercel.app" ||"http://localhost:8000";

const SummaryApi = {
    signUP : {
        url : `${backendDomin}/api/signup`,
        method : "post",
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    signIn : {
        url : `${backendDomin}/api/signin`,
        method : "post",
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    current_user : {
        url : `${backendDomin}/user-details`,
        method : "get",
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : 'get',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    allUser : {
        url : `${backendDomin}/api/all-user`,
        method : 'get',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    updateUser : {
        url : `${backendDomin}/api/update-user`,
        method : "post",
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    uploadProduct : {
        url : `${backendDomin}/api/upload-product`,
        method : 'post',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    allProduct : {
        url : `${backendDomin}/api/get-product`,
        method : 'get',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    updateProduct : {
        url : `${backendDomin}/api/update-product`,
        method  : 'post',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    categoryProduct : {
        url : `${backendDomin}/api/get-categoryProduct`,
        method : 'get',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    categoryWiseProduct : {
        url : `${backendDomin}/api/category-product`,
        method : 'post',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    productDetails : {
        url : `${backendDomin}/api/product-details`,
        method : 'post',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    addToCartProduct : {
        url : `${backendDomin}/api/addtocart`,
        method : 'post',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    addToCartProductCount : {
        url : `${backendDomin}/api/countAddToCartProduct`,
        method : 'get',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    addToCartProductView : {
        url : `${backendDomin}/api/view-card-product`,
        method : 'get',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    updateCartProduct : {
        url : `${backendDomin}/api/update-cart-product`,
        method : 'post',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    deleteCartProduct : {
        url : `${backendDomin}/api/delete-cart-product`,
        method : 'post',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    searchProduct : {
        url : `${backendDomin}/api/search`,
        method : 'get',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    filterProduct : {
        url : `${backendDomin}/api/filter-product`,
        method : 'post',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    },
    deleteProduct : {
        url : `${backendDomin}/api/delete-product`,
        method : 'post',
      "headers":{
        "Access-Control-Allow-Origin":"*"
    }
}


export default SummaryApi
