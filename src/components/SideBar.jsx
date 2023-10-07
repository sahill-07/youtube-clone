import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = ( {selectedCategory , setselectedCategory} ) => {
  return (
    <Stack direction="row" sx={{overflowY:"auto" , height:{sx:'auto' , md:'95%'}, flexDirection:{md:'column'}}}>
        {categories.map((category) =>  (
            <button className="category-btn"
                    onClick={() => {
                        setselectedCategory(category.name);
                    }}
                    style={{background:category.name === selectedCategory && '#FC1503' ,
                            color:'white'
                            }}
                    key={category.name}
            >
            <span className='pr-5 ' style={{color:category.name === selectedCategory ? 'white' : '#FC1503'}}>
                    {category.icon}
                </span>
                <span className='pr-5' style={{opacity:category.name === selectedCategory ? '1' : '0.8'}} >
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar

