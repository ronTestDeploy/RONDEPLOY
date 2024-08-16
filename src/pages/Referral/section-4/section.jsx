import React from 'react'

// styles
import style from './section.module.scss'

const ReferralPage_Section_4 = () => {
  return (
    <section className={`${style.section_1}`}>
      <div id="wrapper" className={style.wrapper}>

        {/* box 1 */}
        <div id="box 1" className={style.box}>
          <img className={style.box_bg} src="/src/assets/images/referral page/frame filled.png" alt="" />

          <p>YOUR REWARDS: <span>10 000</span></p>

          <img className={style.btn} src="/src/assets/images/referral page/claim btn.png" alt="" />
        </div>

        {/* box 2 */}
        <div id="box 2" className={style.box}>
          <img className={style.box_bg} src="/src/assets/images/referral page/frame png.png" alt="" />

          <p>THE WHEEL OF FORTUNE</p>

          <img className={style.btn} src="/src/assets/images/referral page/spin btn.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default ReferralPage_Section_4