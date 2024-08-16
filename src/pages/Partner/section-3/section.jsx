import React from 'react'

// styles
import style from './section.module.scss'

// data
const data = [
    {
        logo: "/src/assets/images/partner page/partner logo.png",
        title: "$CLOWN I TON"
    },
    {
        logo: "",
        title: ""
    },
    {
        logo: "",
        title: ""
    },
    {
        logo: "",
        title: ""
    },
    {
        logo: "",
        title: ""
    }
]


const PartnerPage_Section_3 = () => {
  return (
    <section className={style.section_1}>

      <ul className={style.list}>

        {data.map((partner, index)=>(
            <li key={index} className={style.list_item}>
                <div className={style.partner_logo}>
                    {partner.logo && <img  src={partner.logo} alt="" />}
                </div>

                <p>{partner.title}</p>
            </li>
        ))}

      </ul>

    </section>
  )
}

export default PartnerPage_Section_3