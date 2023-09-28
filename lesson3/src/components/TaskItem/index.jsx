import React from 'react'

export const TaskItem = ({item}) => {
    const {title} = item
  return (
    <div >
        {title}
    </div>
  )
}

export default TaskItem