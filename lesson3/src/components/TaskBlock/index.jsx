import React from 'react'
import TaskItem from '../TaskItem'

export const TaskBlock = ({titleBlock,listTasks,currentStatus, Nextstatus='',setTasks,textBtn='Transfer to right'}) => {

    const handelTransfer=(currentStatus,status) =>{
        let el;

        if(currentStatus !== 'to do'){
           el = listTasks.findLast(item=> item.proccess === currentStatus)
        }else{
           el = listTasks.find(item=> item.proccess === currentStatus)
        }
        if(currentStatus !== 'done'){
            setTasks(prev=> prev.map((item)=>item.id === el.id ? {...item,proccess:status} : item))

        }else{
            setTasks(prev=> prev.filter((item)=>item.id !== el.id))

        }
    }

    const filterTasts= ()=>{
        
        if(currentStatus === 'progress'){
          return   listTasks.filter(item=> item.proccess === currentStatus).reverse()
        }else{
          return listTasks.filter(item=> item.proccess === currentStatus)

        }
    }

  return (
    <div>
        <p>{titleBlock} </p>
        <div className="lists">
            {
                filterTasts().map((item,index)=>(
                    <TaskItem item={item} key={index} />
                ))
            }
        </div>
        <div className='btnBlock'>
        {filterTasts().length >0 ? (
            <>
            
                {
                    currentStatus === 'progress' ? <button onClick={()=>handelTransfer(currentStatus,'to do')}>Transfer to left</button> : null
                }
                <button onClick={()=>handelTransfer(currentStatus,Nextstatus)} >{textBtn}</button>
            </>
        )
         : null}
        </div>
       
    </div>
  )
}
