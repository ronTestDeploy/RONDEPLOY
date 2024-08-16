import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';


function calculateTimeWithOffset(dateString, offsetHours) {
  const date = new Date(dateString);
  const currentTimestamp = Date.now();
  const currentTime = new Date(currentTimestamp);

  date.setHours(date.getHours() + offsetHours);

  const dateTimestamp = date.getTime();

  if (dateTimestamp > currentTimestamp) {
    const remainingTime = dateTimestamp - currentTimestamp;
    return remainingTime;
  } else {
    return 0;
  }
}

function convertDate(isoDateString) {
  const date = new Date(isoDateString);
  return date.toISOString();
}





export const ExContext = createContext();

export const Context = ({ children }) => {

    const [page , setPage] = useState(1);
    const [balans , setBalans] = useState(0);
    const [id , setId] = useState(0);
    const [timer , setTimer] = useState(0);
    const [loading , setLoading] = useState(true);
    const [data_timer , setData_timer] = useState(0);
    const [tasks , setTasks] = useState(0);
    const [moduleConnectTwitter , setModuleConnectTwitter] = useState(false);
    const [twitter_name , setTwitter_name] = useState('');

    useEffect(()=>{
      axios.post('http://localhost:8080/api/user', {
        token: 'testAdmin'
      })
  
      .then(response => {
        const data = response.data;
        
        // user
        setBalans(data['user'].balans);
        setId(data['user'].id);
        setData_timer(data['user'].timer);
        setTwitter_name(data['user'].twitter_name)

        // tasks
        setTasks({
          basic:data['tasks'].basic,
          raids:data['tasks'].raids,
          other:data['tasks'].other
        });

        setLoading(false)
      });
  
    },[])


    useEffect(()=>{
      const timeObject = {
        hours: Math.floor(calculateTimeWithOffset(convertDate(data_timer), 8) / (1000 * 60 * 60)),
        minutes: Math.floor(calculateTimeWithOffset(convertDate(data_timer), 8) % (1000 * 60 * 60) / (1000 * 60)) >=10 ? Math.floor(calculateTimeWithOffset(convertDate(data_timer), 8) % (1000 * 60 * 60) / (1000 * 60)): '0'+Math.floor(calculateTimeWithOffset(convertDate(data_timer), 8) % (1000 * 60 * 60) / (1000 * 60))
      }
      
      if(timeObject.hours<=0 && timeObject.minutes<=0){
        setTimer(0)
      }else{
        setTimer(timeObject);
      }

      setInterval(()=>{

        const timeObject = {
          hours: Math.floor(calculateTimeWithOffset(convertDate(data_timer), 8) / (1000 * 60 * 60)),
          minutes:Math.floor(calculateTimeWithOffset(convertDate(data_timer), 8) % (1000 * 60 * 60) / (1000 * 60)) >10 ? Math.floor(calculateTimeWithOffset(convertDate(data_timer), 8) % (1000 * 60 * 60) / (1000 * 60)): '0'+Math.floor(calculateTimeWithOffset(convertDate(data_timer), 8) % (1000 * 60 * 60) / (1000 * 60))
        }
        
        if(timeObject.hours<=0 && timeObject.minutes<=0){
          setTimer(0)
        }else{
          setTimer(timeObject);
        }
      },60000)

    },[data_timer])
    const value = {
      page , setPage,
      balans , setBalans,
      id , setId,
      timer , setTimer,
      loading , setLoading,
      setData_timer,
      tasks , setTasks,
      moduleConnectTwitter , setModuleConnectTwitter,
      twitter_name , setTwitter_name
    };
    
  
    return <ExContext.Provider value={value}>{children}</ExContext.Provider>;
  }
export default Context;