import React, { useEffect, useState } from 'react'
import { ThemeSwitch } from '../ThemsSwitch/index';
import { Statistic } from '../Statistics/Statistic';
import s from './style.module.css'
import { List } from '../List/List';
 

const listsTodo = [
    {title:"buy book", completed:false},
    {title:"drink water", completed:true},
    {title:"drink waters", completed:true},
    {title:"drink water2", completed:true},
    {title:"drink waterd", completed:true},
    {title:"drink watera", completed:true},
]


export const Todo = () => {
    const [theme, setTheme] = useState('light');
    const [listTodo, setListToDo] = useState(listsTodo)
    const [newToDo, setNewToDo] = useState('')
 
    
    const handelDelete=(name)=>{
        return setListToDo(listTodo.filter(item=> item.title !== name) )
    }
    const handelChangeStatus=(current)=>{
        console.log(current)
        let updateItem = listTodo.map((item)=>{

            if(item === current ){
                return {...item, completed: !item.completed}
            }else{
                return item
            }
        
        })
        console.log(listTodo)
        setListToDo(updateItem)
       
    }

    const handelAddToDo=()=>{
        
        setListToDo([...listTodo,{
            title: newToDo, completed:false}
        ])
        setNewToDo('')
    }

  return (
    <>
    <ThemeSwitch theme={theme} themeSwitch={e=>setTheme(e.target.value)}/>
    <main className={theme}  >
        <h1  >Todo list  </h1>
        <label>
            add todo 
            <input placeholder='add todo' value={newToDo}   onChange={(e)=>setNewToDo(e.target.value)}   />
            <button onClick={()=>handelAddToDo()}>
                add 
            </button>
        </label>
       <Statistic listTodo={listTodo} />
        <table className={theme === 'light'? s.light : s.dark }>
            <thead>
                <tr>
                    <td>name todo </td>
                    <td> action</td>
                </tr>
            </thead>
            <tbody>
                <List list={listTodo} del={handelDelete} status={handelChangeStatus} />
            </tbody>
        </table>

    </main>
    

    </>
    
  )
}
