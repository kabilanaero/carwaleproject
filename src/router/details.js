import { Card, CardContent, CardMedia, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./details.scss"

const Detail=()=>{
    

    const state=useSelector(({allDetail})=> allDetail)
    // console.log(state.allCarDetails);
    const params=useParams();

    const [detail,setDetail]=useState(state.allCarDetails.filter(e => e.model === params.index));
    console.log('detail',detail);

    console.log(params);

    useEffect (()=>{
        setDetail(state.allCarDetails.filter(e => e.model === params.index))
        console.log(state.allCarDetails.filter(e => e.model === params.index));
    },[params])
    
    useEffect(()=>{
       window.scrollTo(0,0)
    },[])

    return(
        <>
        {detail.map((detail,i) => (
            <div key={i} className="details-container">
            <div className="details">
                 <div className="details-head">
                     <h1>{detail.model}</h1>           
                 </div>
                 <div className="details-content">
                     <div className="details-img">
                         <img src={detail.image} />
 
                     </div>
                     <div className="details-text">
                         <div className="details-ver-col" >
                             <div className="details-ver" >
                                 <p>version <span>:{detail.engine_type}</span></p>
                             </div>
                             <div className="details-city" >
                                 <p>city:chennai</p>
                             </div>
                         </div>
                         <div >
                             <h2>{detail.prize}</h2>
                             <p>Avg. Ex-Showroom price</p>
                         </div>
 
                         <button>
                            Get An offer
                         </button>
 
                     </div>
 
                 </div>
            
            </div>
            <h2>CAR SPECIFICATION</h2>
            <TableContainer >
                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
                     
                     <TableBody>

                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Engine</TableCell>
                             <TableCell align="left">{detail.engine}</TableCell>
                             
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Engine Type</TableCell>
                             <TableCell align="left">{detail.engine_type}</TableCell>
                             
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Fuel Type</TableCell>
                             <TableCell align="left">{detail.fuel_type}</TableCell>
                            
                          
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Max Power</TableCell>
                             <TableCell align="left">{detail.max_power}</TableCell>
                             
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Max Torque</TableCell>
                             <TableCell align="left">{detail.max_torque}</TableCell>
                           
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Mileage</TableCell>
                             <TableCell align="left">{detail.mileage}</TableCell>
                            
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Driving Range</TableCell>
                             <TableCell align="left">{detail.driving_range}</TableCell>
                           
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Drivertian</TableCell>
                             <TableCell align="left">{detail.drivetrain}</TableCell>
                          
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Transmission</TableCell>
                             <TableCell align="left">{detail.transmission}</TableCell>
                            
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Emission Standard</TableCell>
                             <TableCell align="left">{detail.emission_standard}</TableCell>
                           
                            
                             
                         </TableRow>
                     
                         <TableRow>
                             <TableCell>length (mm)</TableCell>
                             <TableCell align="left">{detail.length}</TableCell>
                             
                            
                             
                         </TableRow>
                  
                     
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">width ()mm</TableCell>
                             <TableCell align="left">{detail.width}</TableCell>
                          
                            
                             
                         </TableRow>
                     
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Height(mm)</TableCell>
                             <TableCell align="left">{detail.height}</TableCell>
                            
                            
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Wheelbase(mm)</TableCell>
                             <TableCell align="left">{detail.wheelbase}</TableCell>
                             
                            
                             
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Grand Clearnace(mm)</TableCell>
                             <TableCell align="left">{detail.ground_clearance}</TableCell>
                            
                            
                           
                         </TableRow>
                    
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Doors</TableCell>
                             <TableCell align="left">{detail.doors}</TableCell>
                             
                            
                             
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Seating Capacity</TableCell>
                             <TableCell align="left">{detail.seating_capacity}</TableCell>
                             
                            
                             
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">No of Seating Rows</TableCell>
                             <TableCell align="left">{detail.number_of_seating}</TableCell>
                          
                            
                            
                         </TableRow>
                         
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Bootspace</TableCell>
                             <TableCell align="left">{detail.Bootspace}</TableCell>
                           
                            
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Fuel Tank Capacity</TableCell>
                             <TableCell align="left">{detail.Bootspace}</TableCell>
                            
                            
                            
                         </TableRow>
 
                     
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Front Suspension</TableCell>
                             <TableCell align="left">{detail.front_suspension}</TableCell>
                           
                             
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Rear Suspension</TableCell>
                             <TableCell align="left">{detail.rear_suspension}</TableCell>
                            
                            
                             
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Front Break Type</TableCell>
                             <TableCell align="left">{detail.front_break_type}</TableCell>
                            
                            
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Rear Break Type</TableCell>
                             <TableCell align="left">{detail.rear_break_type}</TableCell>
                             
                            
                             
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Minimum Turning Radius</TableCell>
                             <TableCell align="left">{detail.minimum_turning_Radius}</TableCell>
                             
                            
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Steering Type</TableCell>
                             <TableCell align="left">{detail.stearing_type}</TableCell>
                             
                            
                             
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Wheels</TableCell>
                             <TableCell align="left">{detail.wheels}</TableCell>
                        
                            
                             
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Spare Wheel</TableCell>
                             <TableCell align="left">{detail.sparewheel}</TableCell>
                             
                            
                            
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Front Tyres</TableCell>
                             <TableCell align="left">{detail.front_tyres}</TableCell>
                             
                            
                             
                         </TableRow>
                         <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                             <TableCell component="th" scope="row">Rear Tyres</TableCell>
                             <TableCell align="left">{detail.rear_tyres}</TableCell>
                             
                         </TableRow>
                     </TableBody>
                 </Table>
             </TableContainer>
 
         </div>
        ))}
        </>
       
    )
}

export default Detail;