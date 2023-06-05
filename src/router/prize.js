import React from "react";
import "./prize.scss"
import { useNavigate } from "react-router-dom";

const Prize=()=>{  
    const details=[
        { "prize": "₹ 6 Lakh"},
        { "prize": "₹ 7 Lakh"},
        { "prize": "₹ 8 Lakh"},
        { "prize": "₹ 10 Lakh"},
        { "prize": "₹ 15 Lakh"},
        { "prize": "₹ 20 Lakh"},
        { "prize": "₹ 25 Lakh"},
        { "prize": "₹ 30 Lakh"},
        { "prize": "₹ 50 Lakh"},
        { "prize": "₹ 200 Lakh"},
    ]
    const Navigate = useNavigate();
    const valueGets=(prize)=>{
     let p = prize.split(' ')
     console.log(p[1]);
        Navigate("/Prizelist/"+p[1])
    }
return(
      <div className='prize'>
        <div className='Container-prize'>
          <h2 className="p-head">Find The Cars OF Your Choice</h2>
          <div className="prize-para">
            <p className="p-one">BUDGET</p>
            <p>BODY TYPE</p>
            <p>FEUL TYPE</p>
            <p>TRANSMISSION</p>
            <p>SEATING CAPACITY</p>
            
          </div>
        
          <div className='row-prize'>
            {details.map((value,index)=>{
                    return(
                        <div className='col-prize' key={index}>
            
                <button onClick={()=>valueGets(value.prize)}>Under {value.prize} lakh</button>

              </div>
              

                    )
          
                      }  )  }

          </div>
          </div>
          </div>

    
)
}
export default Prize;
