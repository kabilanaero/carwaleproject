import React, { useEffect, useState } from 'react';
import {Button, Card,CardContent, CardMedia, Typography } from '@mui/material';
import "./compare.scss"
import Dialog1 from "./dialog";
import Dialog2 from './dialog2';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { clearData } from '../redux/slice';


const Compare = () => {

  const SelectCars1 = useSelector(({ allDetail }) => allDetail.carset1);
  console.log(SelectCars1);

  const SelectCars2 = useSelector(({ allDetail }) => allDetail.carset2);
  console.log(SelectCars2);

  const [close, setClose] = React.useState(false)
  console.log(close);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Compares = () => {
      navigate('/Comparedetails')
    //   dispatch(clearData([]))
  }

  
  return (
      <>
          <div className='container-dialog'>
              <h2 className='c-title'>Compare Car</h2>
              <div className='row-dialog'>
                  <Card className='Car-One'>
                      <div>
                          <Dialog1/>
                        
                      </div>
                  </Card>
                  <Card className='Car-One'>
                      <div>
                          <Dialog2/>
                      </div>

                  </Card>
              </div>
              <div className='btn-compare' onClick={() => Compares()}>
                  <Button className='btn' variant='contained'>Compare</Button>
              </div>
          </div>
      </>
  )
}

export default Compare

