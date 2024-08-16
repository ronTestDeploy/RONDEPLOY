import React from 'react'

// styles
import style from './section.module.scss'

const PartnerPage_Section_2 = () => {
  return (
    <section className={style.section_1}>
        <div className={style.form_wrapper}>
            <h3>GIFT CODE: </h3>
            <div>
                <div className={style.input_frame}>
                    <img src="/src/assets/images/partner page/input frame.png" alt="" />
                    <input type="text" placeholder='SUCH AS: JJK120F' />
                </div>

                <button type='submit'>
                    <img src="/src/assets/images/partner page/CONFIRM btn.png" alt="" />
                </button>
            </div>
        </div>
    </section>
  )
}

export default PartnerPage_Section_2