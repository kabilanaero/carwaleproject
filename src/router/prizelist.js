import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './prizedetail.scss'


const Prizelist=()=>{

    const data=useSelector(({allDetail})=>allDetail)
    console.log(data);
    const navigate=useNavigate()

    const showDetail = (e) =>{
       navigate('/details/'+e)
   }

    const params=useParams();   
     const [state,setState]=useState([]);

   console.log(params);

    useEffect(()=>{
        var filteredPrize=[...data.allCarDetails].filter(value=> Number(value.prize.split(' ')[1]) <= Number(params.prize))
        console.log("filter",filteredPrize);
        setState(filteredPrize)
    },[params])


    return(
        <div className="display-container">
            {state.map((value,index)=>{
                return(
                    <div className="display-card" key={index} onClick={()=>showDetail(value.model)}>
                       <div className="display-image">
                          <img src={value.image}></img>
                        </div>
                        <div className="display-content">
                            <h3 className="d-head"> {value.model}</h3>      
                             <p className="dis-p">PRICE:{value.prize}</p>
                           <p className="dis-p">VARIANT:{value.fuel_type}</p>
                           <p className="dis-p">MILEAGE:{value.mileage}</p>
                           <p className="dis-pa">Get Best Offer</p>
                            </div>           
                    </div>
                )
            })
            }
        </div>
    )
}
export default Prizelist;