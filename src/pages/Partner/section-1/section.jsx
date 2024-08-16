import React from 'react'

// styles
import style from './section.module.scss'

const PartnerPage_Section_1 = () => {
  return (
    <section className={style.section_1}>
      <div className={style.frame}>
        <img src="/src/assets/images/tasks page/angle frame.png" alt="" />
        <p>YOU CAN ONLY FIND GIFT CODE AT OUR PARTNERS OR ON OUR ACTUAL PAGES! <br /> <span>APPLY FOR A PARTNERSHIP</span></p>
      </div>

      {/* connect button */}
      <img className={style.connect_btn} src="/src/assets/images/partner page/APPLY btn.png" alt="" />

    </section>
  )
}

export default PartnerPage_Section_1