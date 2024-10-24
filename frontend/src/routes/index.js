import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassword'
import SignUp from '../pages/SignUp'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'
import CompletedOrders from '../pages/CompletedOrders'
import PendingOrders from '../pages/PendingOrders'
import ReturenedOrders from '../pages/ReturenedOrders'
import TotalSales from '../pages/TotalSales'
import RecievedPayments from '../pages/RecievedPayments'
import PendingPayments from '../pages/PendingPayments'
import TotalRevenue from '../pages/TotalRevenue'
import CustomerDetails from '../pages/CustomerDetails'
import Vendors from '../pages/Vendors'
import ProductStock from '../pages/ProductStock'
import Complains from '../pages/Complains'
import AllViewers from '../pages/AllViewers'




const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    },{
                        path : "c-orders",
                        element : <CompletedOrders/>
                    },
                    {
                        path : "p-orders",
                        element : <PendingOrders/>
                    },{
                        path : "r-orders",
                        element : <ReturenedOrders/>
                    },
                    {
                        path : "t-sales",
                        element : <TotalSales/>
                    }, {
                        path : "r-payments",
                        element : <RecievedPayments/>
                    },
                    {
                        path : "p-payments",
                        element : <PendingPayments/>
                    },{
                        path : "t-revenue",
                        element : <TotalRevenue/>
                    },
                    {
                        path : "customer-details",
                        element : <CustomerDetails/>
                    },{
                        path : "vendors",
                        element : <Vendors/>
                    },
                    {
                        path : "product-stock",
                        element : <ProductStock/>
                    },{
                        path : "complains",
                        element : <Complains/>
                    },
                    {
                        path : "all-viewers",
                        element : <AllViewers/>
                    }

                ]
            },
        ]
    }
])


export default router