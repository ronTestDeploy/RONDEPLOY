import React, { useContext , useEffect, useState } from 'react'
import axios from 'axios';

// styles
import style from './section.module.scss'

import { ExContext } from '../../../context';

const HomePage_Section_1 = () => {

  const data_context = useContext(ExContext);


  return (
    <section className={style.section_2}>

      <div id='timer' className={style.timer}>
        <img src="/src/assets/images/timer.png" alt="" />
        <p style={{
          marginTop:3
        }}
        onClick={()=>{
          if(data_context.timer === 0){
            axios.post('http://localhost:8080/api/timer', {
              token: 'testAdmin'
            })
        
            .then(response => {
              const data = response.data;

              data_context.setBalans(data.balans)
              data_context.setData_timer(new Date())
            })
          }
        }}
        >{data_context.timer === 0 ? 'Claim' : `${(data_context.timer).hours}:${(data_context.timer).minutes}`}</p>
      </div>
      


    </section>
  )
}

export default HomePage_Section_1