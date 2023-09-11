import React from 'react'
import s from './style.module.css'
export const List = ({list ,del , status }) => {

  return (
    <>
    {
        list.map((item,key)=>{

            return (
                <tr key={key} className={item.completed ? s.completed: s.process}   >
                    <td >{item.title} </td>
                    <td> {item.completed === true ?  (<button  onClick={()=>del(item.title)}  >Del</button>) : 
                    (<button onClick={()=>status(item)} >completed</button>)}</td>
                </tr>
            )
        })
    }
    </>
    
  )
}
