import React, { useContext } from 'react'

import axios from 'axios';

// styles
import style from './section.module.scss'

import { ExContext } from '../../../context'

const go = '/src/assets/images/tasks page/GO btn.png';
const success = '/src/assets/images/tasks page/DONE btn.png';

const TasksPage_Section_2 = () => {

  const data_context = useContext(ExContext)
  
  const tasks = data_context.tasks;

  return (

    tasks == 0 ? <div>Загрузка</div>:
    <section className={style.section_1}>

      <div className={style.wrapper}>
        
        {/* Basic Tasks */}
        <div className={style.category_wrapper}>
          <h3 className={style.category_name}>Basic Tasks</h3>

          {/* list of items */}
          <div className={style.list_wrapper}>
            {/* items */}
            {tasks.basic.map((task, index)=> (

              <div key={index} className={style.list_item}>
                {/* task frame */}
                <img className={style.task_frame} src="/src/assets/images/tasks page/task frame_.png" alt="" 
                onClick={()=>{
                  if(!task.success){
                    axios.post('http://localhost:8080/api/tasks_go',{
                      token:'testAdmin',
                      tasks:task.data.token
                    })
                    .then(response=>{
                      const amount = response.data.amount;

                      if(amount>0){
                        data_context.setBalans(prev=>prev+amount);
                        alert('Успешно')
                        window.location.href=task.data.link
                      }
                    })
                    .catch(e=>{
                      alert('Установите twitter name')
                    })
                  }
                }}
                />

                {/* task left side = social icon + about task */}
                <div className={style.left_side}>
                  {/* social media icon */}
                  <img className={style.social_icon} src={task.social_icon} alt="" />

                  {/* about task */}
                  <div className={style.about_task}>
                    <h4>{task.about.h4}</h4>
                    <p>R + {task.data.amount}</p>
                  </div>
                </div>

                {/* button */}
                <img className={style.task_button} src={task.success?success:go} alt="" />
              </div>

            ))}
          </div>
        </div>

        {/* X Raids */}
        <div className={style.category_wrapper}>
          <h3 className={style.category_name}>X Raids</h3>
          {/* list of items */}
          <div className={style.list_wrapper}>
            {/* items */}
            {tasks.raids.map((task, index)=> (
              <div key={index} className={style.list_item}>
                {/* task frame */}
                <img className={style.task_frame} src="/src/assets/images/tasks page/task frame_.png" alt="" 
                onClick={()=>{
                  if(!task.success){
                    axios.post('http://localhost:8080/api/tasks_go',{
                      token:'testAdmin',
                      tasks:task.data.token
                    })
                    .then(response=>{
                      const amount = response.data.amount;

                      if(amount>0){
                        data_context.setBalans(prev=>prev+amount);
                        alert('Успешно')
                        window.location.href=task.data.link
                      }
                    })
                    .catch(e=>{
                      alert('Установите twitter name')
                    })
                  }
                }}
                />

                {/* task left side = social icon + about task */}
                <div className={style.left_side}>
                  {/* social media icon */}
                  <img className={style.social_icon} src={task.social_icon} alt="" />

                  {/* about task */}
                  <div className={style.about_task}>
                    <h4>{task.about.h4}</h4>
                    <p>R + {task.data.amount}</p>
                  </div>
                </div>

                {/* button */}
                <img className={style.task_button} src={task.success?success:go} alt="" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Other */}
        <div className={style.category_wrapper}>
          <h3 className={style.category_name}>Other</h3>

          {/* list of items */}
          <div className={style.list_wrapper}>
            {/* items */}
            {tasks.other.map((task, index)=> (
              <div key={index} className={style.list_item}>
                {/* task frame */}
                <img className={style.task_frame} src="/src/assets/images/tasks page/task frame_.png" alt="" 
                onClick={()=>{
                  if(!task.success){
                    axios.post('http://localhost:8080/api/tasks_go',{
                      token:'testAdmin',
                      tasks:task.data.token
                    })
                    .then(response=>{
                      const amount = response.data.amount;

                      if(amount>0){
                        data_context.setBalans(prev=>prev+amount);
                        alert('Успешно')
                        window.location.href=task.data.link
                      }
                    })
                    .catch(e=>{
                      alert('Установите twitter name')
                    })
                  }
                }}
                />

                {/* task left side = social icon + about task */}
                <div className={style.left_side}>
                  {/* social media icon */}
                  <img className={style.social_icon} src={task.social_icon} alt="" />

                  {/* about task */}
                  <div className={style.about_task}>
                    <h4>{task.about.h4}</h4>
                    <p>R + {task.data.amount}</p>
                  </div>
                </div>

                {/* button */}
                <img className={style.task_button} src={task.success?success:go} alt="" />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}

export default TasksPage_Section_2