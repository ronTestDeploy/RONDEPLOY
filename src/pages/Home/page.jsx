import React, { useEffect, useState } from 'react'

// styles
import style from './page.module.scss'

// components & layouts
import HomePage_Section_1 from './section-1/section'

const HomePage = () => {

  const [animation , setAnimation] = useState(1.3);

  useEffect(()=>{
    setTimeout(()=>{
      setAnimation(1)
    },50)
  },[])
  return (
    <div id='frame' className={style.frame} style={{
      transition:'.5s',
      transform:`scale(${animation}`
    }}>
      <section className={style.page}>

        {/* page background image */}
        <img className={style.bg} src="/src/assets/images/bg.png" border='0' alt="" />

        <div id='page sections' className={style.page_sections}>
          <HomePage_Section_1/>
        </div>
      </section>

    </div>
  )
}

export default HomePage