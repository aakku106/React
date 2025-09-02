/** @format */

// import { useEffect, useRef, useState } from "react";
import { NavBar } from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Post } from "./Pages/Blog/Posts";
import { BlogLayout } from "./Pages/Blog/BlogLayout";
import { PostDetail } from "./Pages/Blog/PostDetail";
import DashBoardLayout from "./Pages/Dashboard/DashBoardLayout";
import Analytics from "./Pages/Dashboard/Analytics";
import SettingLayout from "./Pages/Dashboard/Settings/SettingLayout";
import User from "./Pages/Dashboard/Settings/User";
import Admin from "./Pages/Dashboard/Settings/Admin";
import Contact from "./Pages/Contact/Contact";
import ContactLayout from "./Pages/Contact/Contactlayout";
import Contactdetails from "./Pages/Contact/Contactdetails";
import Parent from "./propsDrilling/Parent";
import UserCard from "./Components/Reusable_Component/UserCard";
import SmartComponent from "./Components/SmartComponent/SmartComponent";
import Ecommerce from "./Components/EcommerceHW/Ecommerce";
import CounterComponent from "./Components/CounterComponent";
import UserList from "./Components/UserList";
import LoginFOrmHook from "./Components/ReactFormHook/LoginFOrmHook";
import FetchUsers from "./fetchApi/FetchUsers";
import AxiosPost from "./fetchApi/AxiosPost";
import ToDos from "./fetchApi/ToDos";
import ReactMemoExample from "./Optimization/ReactMemoExample";
import { UseMemoExample } from "./Optimization/UseMemoExample";
import UseCallbackExample from "./Optimization/UseCallbackExample";
import LazyLoadingExample from "./Optimization/LazyLoadingExample";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<Post />} />
          <Route path=":postId" element={<PostDetail />} />
        </Route>
        {/* ---------------------------------------------------- */}

        <Route path="/contact" element={<ContactLayout />}>
          <Route index element={<Contact />} />
          <Route path=":contactId" element={<Contactdetails />} />
        </Route>

        {/* --------------------------------------------------------------- */}
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<SettingLayout />} />
          <Route path="user" element={<User />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
      {/* props drilling  */}
      {/* <Parent /> */}
      {/* react flow/ nested react component */}
      {/* props drilling  */}
      {/* Next: Component reUsability */}
      {/* <UserCard name={"Aakku Samma"} age={5} email={"aakku@aakku.aakku"} />
      <UserCard name={"Aakku Samma"} age={5} email={"aakku@aakku.aakku"} />
      <UserCard name={"Aakku Samma"} age={5} email={"aakku@aakku.aakku"} />
      <UserCard name={"Aakku Samma"} age={5} email={"aakku@aakku.aakku"} />
      <UserCard name={"Aakku Samma"} age={5} email={"aakku@aakku.aakku"} />
      <UserCard name={"Aakku Samma"} age={5} email={"aakku@aakku.aakku"} />
      <UserCard name={"Aakku Samma"} age={5} email={"aakku@aakku.aakku"} /> */}
      {/* Smart / deumb comp  */}
      {/* <SmartComponent /> */}
      {/* <Ecommerce /> */}

      <LazyLoadingExample />
      {/* <UseCallbackExample /> */}
      {/* <UseMemoExample /> */}

      {/* <ReactMemoExample /> */}

      {/* <Comment /> */}

      {/* <ToDos /> */}
      {/* <FetchUsers /> */}
      {/* <AxiosPost /> */}
      {/* <LoginFOrmHook /> */}
      {/* <CounterComponent /> */}
      {/* <UserList /> */}
    </>
  );
}

export default App;
