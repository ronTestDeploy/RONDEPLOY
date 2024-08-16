import React from 'react'

// styles
import style from './section.module.scss'

const ReferralPage_Section_1 = () => {
  return (
    <section className={style.section_1}>

        <div className={style.wrapper}>
          <img className={`${style.bg}`} src="/src/assets/images/referral page/frame filled.png" alt="" />
          <div id="left_side" className={style.left_side}>
              <img src="/src/assets/images/navitem 1.png" alt="" />
              <p>10 000</p>
          </div>
          <div id="right_side" className={style.right_side}>
              <p>10 000</p>
              <img src="/src/assets/images/navitem 6.png" alt="" />
          </div>
        </div>
    </section>
  )
}

export default ReferralPage_Section_1