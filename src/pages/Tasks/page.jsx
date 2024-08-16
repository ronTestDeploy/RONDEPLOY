import React ,{useState , useEffect } from 'react'

// styles
import style from './page.module.scss'

// components & layouts
import TasksPage_Section_1 from './section-1/section'
import TasksPage_Section_2 from './section-2/section'

const TasksPage = () => {

  const [animation , setAnimation] = useState(1.3);

  useEffect(()=>{
    setTimeout(()=>{
      setAnimation(1)
    },50)
  },[])

  return (
    <div id='frame' className={style.frame} style={{
      transition:'.5s',
      transform:`scale(${animation}`
    }}>
      <section className={style.page}>

        {/* page background image */}
        <img className={style.bg} src="/src/assets/images/bg 2.png" border='0' alt="" />

        <div id='page sections' className={style.page_sections}>
          <TasksPage_Section_1/>
          <TasksPage_Section_2/>
        </div>
      </section>

    </div>
  )
}

export default TasksPage