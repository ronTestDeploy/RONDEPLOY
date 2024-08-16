import React from 'react'

// styles
import style from './section.module.scss'

const ReferralPage_Section_2 = () => {
  return (
    <section className={style.section_1}>
        <div className={style.frame}>
          <img className={style.frame_bg} src="/src/assets/images/referral page/frame png.png" alt="" />

          <p>YOUR INVITE LINK</p>

          {/* buttons */}
          <div className={style.btns_wrapper}>
            <img src="/src/assets/images/referral page/copy btn.png" alt="" />
            <img src="/src/assets/images/referral page/invite btn.png" alt="" />
          </div>
        </div>
    </section>
  )
}

export default ReferralPage_Section_2