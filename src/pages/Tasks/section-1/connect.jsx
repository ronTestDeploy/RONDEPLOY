import React, { useState , useContext} from "react";

import axios from "axios";

import { ExContext } from "../../../context";

import style from '../../Partner/section-2/section.module.scss'

const Connect = ()=>{

    const data_context = useContext(ExContext);

    const [name , setName] = useState('');

    return(
          <div className={style.form_wrapper} style={{
            width:'calc(100% - 40px)'
          }}>
            <h3 style={{
                marginLeft:0
            }}>TWITTER NAME: </h3>
            <div style={{
                display:'flex',
                flexDirection: 'row',
                width:'100%'
            }}>
                <div className={style.input_frame}>
                    <img src="/src/assets/images/partner page/input frame.png" alt="" />
                    <input type="text" placeholder='@Misha' style={{
                        fontFamily:'none',
                        fontSize:20
                    }}
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                </div>

                <button style={{
                    width:'200px',
                    height:'50px'
                }}
                onClick={()=>{
                    axios.post('http://localhost:8080/api/connect_twitter', {
                        token: 'testAdmin',
                        name:name
                      })
                    
                    .then(response=>{
                    if(response.data.success == true){
                       data_context.setModuleConnectTwitter(false);
                       data_context.setTwitter_name(response.data.twitter_name)
                       alert('Twitter name успешно установлен')
                    }
                    })
                }}
                >
                    <img src="/src/assets/images/partner page/CONFIRM btn.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Connect