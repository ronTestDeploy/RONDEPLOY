import React, { useContext, useState } from 'react'

// styles
import style from './section.module.scss'

import { ExContext } from '../../../context'

import Connect from './connect'
const TasksPage_Section_2 = () => {

  const data_context = useContext(ExContext);

  return (
    <>
    <section className={style.section_1}>
      <div className={style.frame}>
        <img src="/src/assets/images/tasks page/angle frame.png" alt="" />
        <p>IF WE FIND THAT YOU HAVE CHEATED DURING THE AIRDROP TOKEN CHECK, THE POINTS YOU RECEIVED WILL BE DEDUCTED DOUBLE!</p>
      </div>

      {/* connect */}
      {data_context.twitter_name!='' ? 
     <div className={style.connect_twitter}>
     <img className={style.connect_btn} src="/src/assets/images/tasks page/connect twitter.png" alt="" 
   />
   <div>{data_context.twitter_name}</div>
   </div> : 
      data_context.moduleConnectTwitter ? <Connect/> :
      <div className={style.connect_twitter} onClick={()=>{
        data_context.setModuleConnectTwitter(true)
     }}>
      <img className={style.connect_btn} src="/src/assets/images/tasks page/connect twitter.png" alt="" 
    />
    <div>Connect</div>
    </div>
      }
    </section>
    </>
  )
}

export default TasksPage_Section_2