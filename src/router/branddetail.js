import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarIcon from '@mui/icons-material/Star';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './branddetails.scss'
import { useDispatch } from "react-redux";
import { carList } from "../redux/slice";


const Branddetail=()=>{

    
    const details=[
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=75",company:"Maruti suzuki"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=75",company:"Tata"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=75",company:"Hyundai"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=75",company:"Mahindra"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=75",company:"Toyota"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=75",company:"Kia"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=75",company:"MG"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=75",company:"BMW"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=75",company:"Mercedes-Benz"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/15/brands/logos/skoda1681982956420.jpg?v=1681982956529&q=75",company:"Skoda"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/20/brands/logos/volkswagen.jpg?v=1630056096439&q=75",company:"Volkswagen"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/7/brands/logos/honda.jpg?v=1630056209549&q=75",company:"Honda"},
        ]


    const data=useSelector(({allDetail})=>allDetail)
    console.log(data);

    const params=useParams();
     const [state,setState]=useState([]);

    const navigate=useNavigate() ;  
    const dispatch=useDispatch();  

     const showDetail = (e) =>{
        navigate('/details/'+e)
    }

    
    const [brands, setBrands] = useState([]);
    console.log(brands);

    const BrandSet = (e) => {
        setBrands([e]);
    }

    const fullDetail = (company) => {
        var filteredBrands=[...data.allCarDetails].filter(value=>value.company=== company)
        setState(filteredBrands)
 
    }


    useEffect(()=>{
        var filteredBrands=[...data.allCarDetails].filter(value=>value.company===params.company)
        console.log("filter",filteredBrands);
        setState(filteredBrands)
    },[params])

    return(

        
        <div className="display-container">

            <div className="display-rows">
                <div className="display-col1">
            {state.map((value,index)=>{
                return(
                    <div className="d-row" key={index} onClick={()=>showDetail(value.model)}>
                        {/* <div className="display-card" > */}
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
            }
            )};
   </div>
                
                <div className="display-col2" >
                    <div className="d-row2">
                    {/* <div  className="d-col22"> */}
                     {details.map((value,index)=>{
                    return(
                        <div className="d-col22" key={index} >
              
              <div onClick={() => fullDetail(value.company)}>
                        <img src={value.image} alt="no img found"></img>  
                        <p>{value.company}</p> 
                        </div>
        </div>
        
      
  )
            })
            }
            </div>
        </div>
        </div>
        </div>
        // </div>
    )
}

export default Branddetail;