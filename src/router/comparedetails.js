import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allCarDetails,carList,carset1,carset2,selectCompany,selectPrice} from '../redux/slice';
import './compare.scss'
import { Button, Card } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Comparedetails = () => {

  const SelectCars1 = useSelector(({ allDetail }) => allDetail.carset1);
  console.log(SelectCars1);

  const SelectCars2 = useSelector(({ allDetail }) => allDetail.carset2);
  console.log(SelectCars2);

  const [value, setValue] = React.useState('one');

  const handleChangeB = (event, newValue) => {
    setValue(newValue);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <>
        <div className='container-two'>
          <h2 className='title-c'>Compare Two Cars</h2>
          <div className='row-two'>
          <div className='col'>
            {[SelectCars1]?.map((value, index) => {
              return (<div key={index}>
             
                <Card  className='card-com'>

                  <div className='image'>
                    <img src={value.image} alt='image' />
                  </div>
                  <div className='content'>
                    <h3>{value.model}</h3>
                    <p>{value.engine_type}</p>
                    <div>
                      <p>{value.prize}</p>
                      <p>Avg Ex ShowRoom Price</p>
                    </div>
                    <div>
                      <Button variant="outlined" className='btn-offer'>Get Offers</Button>
                    </div>
                  </div>

                </Card>
               
              </div>)
            })}
             </div>
             <div className='col'>
            {[SelectCars2]?.map((value, index) => {
              return (<div key={index}>
                <Card className='card-com'>
                  <div className='image'>
                    <img src={value.image} alt='image' />
                  </div>
                  <div className='content'>
                    <h3>{value.model}</h3>
                    <p>{value.engine_type}</p>
                    <div>
                      <p>{value.prize}</p>
                      <p>Avg Ex ShowRoom Price</p>
                    </div>
                    <div>
                      <Button variant="outlined" className='btn-offer'>Get Offers</Button>
                    </div>
                  </div>
                </Card>
              </div>)
            })}
</div>
          </div>
          <div className='static-nav'>
            <Box sx={{ width: '100%' }}>
              <Tabs
                value={value}
                onChange={handleChangeB}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                className='nav'
              >
                <Tab value="one" label="Specification" />
                <Tab value="two" label="Features" />
                <Tab value="three" label="Brochure" />
                <Tab value="four" label="Experts Opinion" />
                <Tab value="five" label="Colors"></Tab>
              </Tabs>
            </Box>
          </div>
          <div className='table'>
            <h2 className='head'>Specification and Finance</h2>
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Engine & Transmission
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className='row'>
                      <div className='col'>
                        <table>
                          <thead>
                            <tr>
                              <th>Engine</th>
                              <th>Engine Type</th>
                              <th>Fuel Type</th>
                              <th>Max Power(bhp@rpm) </th>
                              <th>Max Power (Nm@rpm)</th>
                              <th>Mileage (ARAI)</th>
                              <th>Driving Range (KM)</th>
                              <th>Drivetrain</th>
                              <th>Transmission</th>
                              <th>Emission Standard</th>
                            </tr>
                          </thead>
                          {[SelectCars1]?.map((value, index) => {
                            return (
                              <tbody>
                                <tr key={index}>
                                  <th>{value.engine}</th>
                                  <th>{value.engine_type}</th>
                                  <th>{value.fuel_type}</th>
                                  <th>{value.max_power}</th>
                                  <th>{value.max_torque}</th>
                                  <th>{value.mileage}</th>
                                  <th>{value.driving_range}</th>
                                  <th>{value.drivetrain}</th>
                                  <th>{value.transmission}</th>
                                  <th>{value.emission_standard}</th>
                                </tr>
                              </tbody>
                            )
                          })}
                          {[SelectCars2]?.map((value, index) => {
                            return (
                              <tbody>
                                <tr key={index}>
                                  <th>{value.engine}</th>
                                  <th>{value.engine_type}</th>
                                  <th>{value.fuel_type}</th>
                                  <th>{value.max_power}</th>
                                  <th>{value.max_torque}</th>
                                  <th>{value.mileage}</th>
                                  <th>{value.driving_range}</th>
                                  <th>{value.drivetrain}</th>
                                  <th>{value.transmission}</th>
                                  <th>{value.emission_standard}</th>
                                </tr>
                              </tbody>
                            )
                          })}
                        </table>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>   Dimensions & Weight</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className='row'>
                      <div className='col'>
                        <table>
                          <thead>
                            <tr>
                              <th>Length (mm)</th>
                              <th>Width (mm)</th>
                              <th>Height (mm)</th>
                              <th>Wheelbase (mm)</th>
                              <th>Ground Clearance (mm)</th>
                            </tr>
                          </thead>
                          {[SelectCars1]?.map((value, index) => {
                            return (<tbody>
                              <tr key={index}>
                                <th>{value.length}</th>
                                <th>{value.width}</th>
                                <th>{value.height}</th>
                                <th>{value.wheelbase}</th>
                                <th>{value.ground_clearance}</th>
                              </tr>
                            </tbody>
                            )
                          })}
                          {[SelectCars2]?.map((value, index) => {
                            return (<tbody key={index}>
                              <tr key={index}>
                                <th>{value.length}</th>
                                <th>{value.width}</th>
                                <th>{value.height}</th>
                                <th>{value.wheelbase}</th>
                                <th>{value.ground_clearance}</th>
                              </tr>
                            </tbody>
                            )
                          })}
                        </table>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Capacity
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className='row'>
                      <div className='col'>
                        <table>
                          <thead>
                            <tr>
                              <th>Doors (Doors)</th>
                              <th>Seating Capacity (Person)</th>
                              <th>No of Seating Rows</th>
                              <th>Bootspace (litres)</th>
                              <th>Fuel Tank Capacity (litres)</th>
                            </tr>
                          </thead>
                          {[SelectCars1]?.map((value, index) => {
                            return (
                              <tbody>
                                <tr key={index}>
                                  <th>{value.doors}</th>
                                  <th>{value.seating_capacity}</th>
                                  <th>{value.number_of_seating}</th>
                                  <th>{value.Bootspace}</th>
                                  <th>{value.feul_tank_capacity}</th>
                                </tr>
                              </tbody>
                            )
                          })}
                          {[SelectCars2]?.map((value, index) => {
                            return (
                              <tbody>
                                <tr key={index}>
                                  <th>{value.doors}</th>
                                  <th>{value.seating_capacity}</th>
                                  <th>{value.number_of_seating}</th>
                                  <th>{value.Bootspace}</th>
                                  <th>{value.feul_tank_capacity}</th>
                                </tr>
                              </tbody>
                            )
                          })}
                        </table>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Suspensions, Brakes, Steering & Tyres</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className='row'>
                      <div className='col'>
                        <table>
                          <thead>
                            <tr>
                              <th>Front Suspension</th>
                              <th>Rear Suspension</th>
                              <th>Front Brake Type</th>
                              <th>Rear Brake Type</th>
                              <th>Minimum Turning Radius (metres)</th>
                              <th>Steering Type</th>
                              <th>Wheels</th>
                              <th>Spare Wheel</th>
                              <th>Front Tyres</th>
                              <th>Rear Tyres</th>
                            </tr>
                          </thead>
                          {[SelectCars1]?.map((value, index) => {
                            return (
                              <tbody>
                                <tr key={index}>
                                  <th>{value.front_suspension}</th>
                                  <th>{value.rear_suspension}</th>
                                  <th>{value.front_break_type}</th>
                                  <th>{value.rear_break_type}</th>
                                  <th>{value.minimum_turning_Radius}</th>
                                  <th>{value.stearing_type}</th>
                                  <th>{value.wheels}</th>
                                  <th>{value.sparewheel}</th>
                                  <th>{value.front_tyres}</th>
                                  <th>{value.rear_tyres}</th>
                                </tr>
                              </tbody>
                            )
                          })}
                          {[SelectCars2]?.map((value, index) => {
                            return (
                              <tbody>
                                <tr key={index}>
                                  <th>{value.front_suspension}</th>
                                  <th>{value.rear_suspension}</th>
                                  <th>{value.front_break_type}</th>
                                  <th>{value.rear_break_type}</th>
                                  <th>{value.minimum_turning_Radius}</th>
                                  <th>{value.stearing_type}</th>
                                  <th>{value.wheels}</th>
                                  <th>{value.sparewheel}</th>
                                  <th>{value.front_tyres}</th>
                                  <th>{value.rear_tyres}</th>
                                </tr>
                              </tbody>
                            )
                          })}
                        </table>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Comparedetails