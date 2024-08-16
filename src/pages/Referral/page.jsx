import React , {useState , useEffect} from 'react'

// styles
import style from './page.module.scss'

// components & layouts
import ReferralPage_Section_1 from './section-1/section'
import ReferralPage_Section_2 from './section-2/section'
import ReferralPage_Section_3 from './section-3/section'
import ReferralPage_Section_4 from './section-4/section'

const ReferralPage = () => {

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
        <img className={style.bg} src="/src/assets/images/bg 2.png" border='0' alt="" />


          <div id='page sections' className={style.page_sections}>
            <ReferralPage_Section_1/>
            <ReferralPage_Section_2/>
          </div>

          {/* не находится внутри page sections потомучто этот section должен быть прижатым к бокам экрана */}
          <ReferralPage_Section_3/>

          <div id='page sections' className={style.page_sections}>
            <ReferralPage_Section_4/>
          </div>

      </section>
    </div>
  )
}

export default ReferralPage