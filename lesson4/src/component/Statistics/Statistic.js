import React from 'react'

export const Statistic = ({listTodo}) => {
  return (
    <div>

        all : {listTodo.length} <br/>
        completed : { listTodo.filter(item => item.completed === true).length  } <br/>
        progress : { listTodo.filter(item => item.completed === false).length  } 
    </div>
  )
}
