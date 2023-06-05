import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './featured.scss'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


const Featured=()=>{

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true,
        responsive: [

        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  
      };
    
    const details=useSelector((detail)=>detail.allDetail.allCarDetails);
    console.log('details',details);
    const navigate=useNavigate()

    const showDetail = (index) =>{
        navigate('/details/'+index)
    }
    return(
        <div className="feat-sec">
    <div className="feat-container">
          <h1 className="feat-head">Featured Cars</h1>
        <div className="feat-head1">
          <p className="one1">POPULAR</p>
          <p className="one">JUST LAUNCHED</p>
          <p className="one">UPCOMING</p>
        </div>
        <div className="feat">
        <Slider {...settings}>
            {details.map((value,index)=>{
                    return(
                        <div className="feat1" key={index}>
             <Card sx={{ maxWidth: 345 }} onClick={()=>showDetail(value.model)} className="feat-card">
                <CardMedia
                    component="img" 
                    image={value.image}
                />
                <CardContent className="content">
                    <Typography gutterBottom variant="h5" className="card-title"  component="div">
                    {value.model}
                    </Typography>
                    <Typography variant="body2" className="card-price" >
                    {value.prize}
                    </Typography>
                    <Typography variant="body2" className="card-avg" >
                    Avg. Ex-Showroom price
                    </Typography>
                    <Button variant="contained">Show prize in my city    </Button>
                </CardContent>
             </Card>
            </div>
                    )
                })
            }
    </Slider>
      </div>
      </div>
      </div>
    )
}
export default Featured
