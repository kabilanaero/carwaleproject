import React from "react";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { stores } from "../redux/store";
import Header from "./header";
import Details from "./details";
import Footer from "./footer";
import Home from "./home";
import Brand from "./brand";
import Compare from './compare'
import Branddetail from './branddetail'
import Prize from './prize'
import Prizelist from './prizelist'
import Comparedetails from "./comparedetails";

const Routing=()=>{

    return(
        <div>
            <BrowserRouter>
          <Header/>
              <Routes>  
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/details/:index"} element={<Details/>}></Route>
                <Route path={"/brand/:company"} element={<Brand/>}></Route>
                <Route path={"/Branddetail/:company"} element={<Branddetail/>}></Route>
                <Route path={"/prizelist/:prize"} element={<Prizelist/>}></Route>
                <Route path={"/prize/:prize"} element={<Prize/>}></Route>
                <Route path={"/compare"} element={<Compare/>}></Route>
                <Route path={"/comparedetails"} element={<Comparedetails/>}></Route>
                <Route path="*" element={<Home/>}></Route>
              </Routes>
              <Footer/>
            </BrowserRouter>
          
        </div>
    )
}

const Main = () =>{
  return(
    <Provider store={stores}>
      <Routing/>
    </Provider>
  )
}
export default Main;