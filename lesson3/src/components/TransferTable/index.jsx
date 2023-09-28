import React, { useEffect, useState } from 'react'
import '../../App.css'
import TaskItem from '../TaskItem'
import { TaskBlock } from '../TaskBlock'

const listTasks = [
    {
      id: 1,
      title: `Task 1`
    },
    {
      id: 2,
      title: `Task 2`
    },
    {
      id: 3,
      title: `Task 3`
    },
    {
      id: 4,
      title: `Task 4`
    }
  ]


 const TransferTable = () => {
    const [tasks, setTasks] =useState(listTasks.map(item=> ({...item,proccess:'to do'})))

    


  return (
    <div className='wrapper' >
        
            <TaskBlock titleBlock={'Tasks todo'}  listTasks={tasks} currentStatus={'to do'} Nextstatus={'progress'} setTasks={setTasks}/>
            <TaskBlock titleBlock={'Tasks in progress'} listTasks={tasks} currentStatus={'progress'} Nextstatus={'done'} setTasks={setTasks}/>
            <TaskBlock titleBlock={'Tasks done'} textBtn="Delete task" listTasks={tasks} currentStatus={'done'}  setTasks={setTasks}/>

    </div>

  )
}



export default TransferTable;
