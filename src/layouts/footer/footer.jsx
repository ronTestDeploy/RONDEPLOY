import React, { useContext , useEffect } from "react";
import { Link , useLocation , useNavigate} from 'react-router-dom';

// styles
import style from "./footer.module.scss";

import { ExContext } from "../../context";
const Footer = () => {

  const data_context = useContext(ExContext);
  const navigate = useNavigate();
  const location = useLocation();

     useEffect(() => {
          if (location.pathname === '/') {
            data_context.setPage(3);
          } else if (location.pathname === '/referrals') {
            data_context.setPage(1);
          } else if (location.pathname === '/tasks') {
            data_context.setPage(2);
          } else if (location.pathname === '/partner') {
            data_context.setPage(5);
          }
          
      }, [location]);

  return (
    <footer className={style.footer}>
      <div>

          <img src="/src/assets/images/navitem 1.png" style={{
            transition:'.3s',
            width:data_context.page == 1 ? 70 : 60,
            height:data_context.page == 1 ? 70 : 60,
            textDecoration: 'none'
          }} onClick={() => navigate('referrals')}/>

          
          <img src="/src/assets/images/navitem 2.png" style={{
            transition:'.3s',
            width:data_context.page == 2 ? 70 : 60,
            height:data_context.page == 2 ? 70 : 60,
            textDecoration: 'none'
          }} onClick={() => navigate('tasks')}/>


           

          <img src="/src/assets/images/navitem 3.png" style={{
            transition:'.3s',
            width:data_context.page == 3 ? 70 : 60,
            height:data_context.page == 3 ? 70 : 60,
            textDecoration: 'none'
          }} onClick={() => navigate('/')}/>

          <img src="/src/assets/images/navitem 4.png" className={data_context.page == 4 ? style.choice : style.default}/>

          <img src="/src/assets/images/navitem 5.png" style={{
            transition:'.3s',
            width:data_context.page == 5 ? 70 : 60,
            height:data_context.page == 5 ? 70 : 60
          }} onClick={() => navigate('partner')}/>
      </div>
    </footer>
  );
};

export default Footer;
