import PopularCategories from "@/components/PopularCategories";
import Hero from "@/components/Hero"
import Recommendation from "@/components/Recommendation"
import Navbar from "@/components/Navbar";

import Products from "@/components/Products";

import NavVertical from '../components/NavVertical'
import Blog3 from '@/components/Blog3';
import SearchBar from '@/components/SearchBar';
import TestQinhan from "./Test Pages/TestQInhan";
import Post from "./Post";
import { useState } from "react";

import PersonalHome from '../components/PersonalHome';




// import { useOutlet } from "react-router-dom";
//const Recommendation = () => <div className="p-6 bg-gray-200">Recommendation</div>
const PersonalPg = () => {
  const [openPost, setOpenPost] = useState(false)
  return (
    <div className="bg-gray-100 flex flex-col w-full h-full border border-red-300 ">


      {/*Xiaoshu*/}
      <Navbar />
      <div className='flex grow min-h-0 w-full'>
        <NavVertical arr={[
          {
            label: 'Sales Order',
            dest: 'sales_order',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          },
          {
            label: 'Price',
            dest: 'price_management',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          },
          {
            label: 'Customer',
            dest : 'customer',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>

          },
        ]}></NavVertical>
        {/* <NavLink to="/print" target="_blank">Print Invoice</NavLink> */}


        <div className="grow h-full overflow-auto flex flex-col pb-5 relative bg-slate-100">
          {/* <div className='w-full'> */}
          {/* <Outlet /> */}
          <PersonalHome />


          <div className="grid grid-cols-6">

            <TestQinhan setOpenPost={setOpenPost}/>
            <TestQinhan setOpenPost={setOpenPost}/>
            <TestQinhan setOpenPost={setOpenPost}/>
            <TestQinhan setOpenPost={setOpenPost}/>
            <TestQinhan setOpenPost={setOpenPost}/>
            <TestQinhan setOpenPost={setOpenPost}/>
            <TestQinhan setOpenPost={setOpenPost}/>
            <TestQinhan setOpenPost={setOpenPost}/>
            {/* <TestQinhan/>
                    <TestQinhan/>
                    <TestQinhan/>
                    <TestQinhan/>
                    <TestQinhan/>
                    <TestQinhan/>
                    <TestQinhan/>
                    <TestQinhan/>
                    <TestQinhan/>
                    <TestQinhan/>
                    <TestQinhan/> */}

          </div>
        </div>
        {openPost &&
          <Post setOpenPost={setOpenPost}></Post>
        }
      </div>



      {/* <Hero />


      <PopularCategories />

      <Recommendation />

      <Blog3 />
      <Footer /> */}
    </div>
  );

};

export default PersonalPg;
