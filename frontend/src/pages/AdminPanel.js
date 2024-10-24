import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate} from 'react-router-dom';
import ROLE from '../common/role';
const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)

    const navigate = useNavigate()


    useEffect(()=>{
        if(user?.role !== ROLE.ADMIN){
            navigate("/")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])
    


    return (
        <div className='min-h-[calc(100vh-120px)] flex flex-row-reverse bg-red-200 m-0 p-0'>
    <aside className='bg-white min-h-full w-full max-w-[240px] customshadow flex-shrink-0'>
        <div className='h-32 flex justify-center items-center flex-col pt-2 overflow-hidden'>
            <div className='text-5xl cursor-pointer relative flex justify-center'>
                {user?.profilePic ? (
                    <img src={user?.profilePic} className='w-16 h-16 rounded-full' alt={user?.name} />
                ) : (
                    <FaRegCircleUser />
                )}
            </div>
            <p className='mt-2 capitalize text-2xl font-semibold'>{user?.name}</p>
            <p className='text-sm py-1'>{user?.role}</p>
        </div>

        {/* Navigation */}
        <nav className='grid p-4'>
            <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100'>Users</Link>
            <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100'>Products</Link>
            <Link to={"c-orders"} className='px-2 py-1 hover:bg-slate-100'>Completed Orders</Link>
            <Link to={"p-orders"} className='px-2 py-1 hover:bg-slate-100'>Pending Orders</Link>
            <Link to={"r-orders"} className='px-2 py-1 hover:bg-slate-100'>Returened Orders</Link>
            <Link to={"t-sales"} className='px-2 py-1 hover:bg-slate-100'>Total Sales</Link>
            <Link to={"r-payments"} className='px-2 py-1 hover:bg-slate-100'>Recieved Payments</Link>
            <Link to={"p-payments"} className='px-2 py-1 hover:bg-slate-100'>Pending Payments</Link>
            <Link to={"t-revenue"} className='px-2 py-1 hover:bg-slate-100'>Total Reveneu</Link>
            <Link to={"customer-details"} className='px-2 py-1 hover:bg-slate-100'>CustomerDetails</Link>
            <Link to={"vendors"} className='px-2 py-1 hover:bg-slate-100'>Vendors</Link>
            <Link to={"product-stock"} className='px-2 py-1 hover:bg-slate-100'>Product Stock</Link>
            <Link to={"complains"} className='px-2 py-1 hover:bg-slate-100'>Complains</Link>
            <Link to={"all-viewers"} className='px-2 py-1 hover:bg-slate-100'>All Viewers</Link>
        </nav>
    </aside>

    <main className='flex-grow h-full p-2 overflow-auto'>
        <Outlet />
    </main>
</div>

    )
}

export default AdminPanel;
