import React, { useState } from 'react'

const variousTheme =[
  'light', 'dark'
]

export const ThemeSwitch = ({ theme, themeSwitch}) => {


  return (
    <>
        <select value={theme} onChange={(e)=>themeSwitch(e)} >
            {
              variousTheme.map((item, index)=>(
                <option  key={index}  value={item} >{item}</option>
              ))
            }
        </select>


    </>
  )
}
