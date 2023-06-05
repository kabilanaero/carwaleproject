import React from "react";
import "./home.scss";
import SearchIcon from '@mui/icons-material/Search';
import Featured from "./featured";
import Compare from "./compare";
import Brand from "./brand";
import Prize from './prize'

const Home = () => {
  return (
    <div>
    <div className="home">
        <div className="home-content">
          <h1>FIND THE RIGHT CAR</h1>
            <div className="home-all">
                <div className="new">
                  <p>NEW</p>
                </div>
                <div className="search-icon">
                <SearchIcon></SearchIcon>
                </div>
                <div className="home-search">
                  <input type="text" className="home-input" placeholder="Type To select Car Name"></input>
                </div>
                <div className="button-move">
                  <button className="home-button">Search</button>
                </div>
            </div>
        </div>
    </div>
    <Featured/>
    <Brand/>
    <Prize/>
   <Compare/>
   
  
    </div>
  );
};

export default Home;