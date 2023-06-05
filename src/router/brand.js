import React from "react";
import "./brand.scss"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Brand=()=>{

    const data=useSelector(({allDetail})=>allDetail)
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
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/15/brands/logos/skoda1681982956420.jpg?v=1681982956529&q=75%27",company:"Skoda"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/20/brands/logos/volkswagen.jpg?v=1630056096439&q=75",company:"Volkswagen"},
                 {image:"https://imgd.aeplcdn.com/0X0/n/cw/ec/7/brands/logos/honda.jpg?v=1630056209549&q=75",company:"Honda"},
        ]

         const navigate=useNavigate()
            const valueGet=(company)=>{
                console.log(company)
                navigate("/Branddetail/"+company)
            }
    return(
        <div className='container-brands'>
        <h2> All Brends</h2>
        <div className='row-brands'>
                {details.map((value,index)=>{
                    return(
                        <div className="logo" key={index} onClick={()=>valueGet(value.company)}>
              <div>
              <div className='img-div'>
                        <img src={value.image} alt="no img found"></img>  
                        <p className="para-com">{value.company}</p> 
                        </div>
        </div>
      </div>
                    )
                })}
        </div>
        </div>
    )
}

export default Brand;
