import React, { useContext, useEffect, useState } from "react";

import style from "./header.module.scss";

import { ExContext } from "../../context";

const Header = () => {

  const data_context = useContext(ExContext);
  
  const [animation , setAnimation] = useState(-100);

  useEffect(()=>{

    setAnimation(-100);

    setTimeout(() => {
      setAnimation(0)
    }, 50);
  },[data_context.page])

  return (

    <div id='frame' className={style.frame} style={{
      transition:animation==-100?'':'.5s',
      left:`${animation}%`
    }}>

      <header className={style.header}>
        {/* left side */}
        <div id="user id" className={style.left_side}>
          <img src="/src/assets/images/id frame.png" alt="" />
          <p
            style={{
              display: "flex",
              gap: 2,
              zIndex:999
            }}

            onClick={() => {
              const tempInput = document.createElement("input");
              tempInput.value = data_context.id;
              document.body.appendChild(tempInput);

              tempInput.select();
              document.execCommand("copy");
              document.body.removeChild(tempInput);
    }}
          >
            <div className={style.name}>𝕊ℙℝ𝔸𝕍𝔼𝔻𝕃𝕀𝕍</div>
            <div 
              className={`${style.id}`} 
    >
      #{data_context.id}
    </div>
          </p>
        </div>

        {/* right side */}
        <div id="user account" className={style.right_side}>
          <img src="/src/assets/images/account frame.png" alt="" />
          <p>{data_context.balans}</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
