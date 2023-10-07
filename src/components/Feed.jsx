import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useState , useEffect } from 'react'
import {SideBar , Videos} from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos , setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => 
        setVideos(data.items))
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection: {sx:'column' , md:'row'}}}>
      
      <Box sx={{height:{sx:'auto' , md:'95vh'} , borderRight : '1px solid #3d3d3d' , px:{sx:0 , md:2}}} >
        <SideBar 
            selectedCategory={selectedCategory} 
            setselectedCategory={setselectedCategory}
        />
        
        <Typography className='copyrigh' sx={{mt:1.5,color:'#fff'}} variant='body2'>
          Copyright 2022 JSM Media
        </Typography>

      </Box>

      <div className=''>
        <div className='flex font-bold text-2xl text-white p-5'>
        <h4 className='mr-2 mb-2'>{selectedCategory}</h4> <span style={{color:'#F31503'}} className='font-bold text-2xl'>Videos</span>

        </div>
        <Videos videos={videos}/>
      </div>

    </Stack>
  )
}

export default Feed


// sx={{flexDirection:{sx:"column" , md:"row"}}}

// className='flex flex-col md:flex-row'>

// className='h-auto md:h-[92vh] border-r-2 border-gray-600 px-0 md:px-2 text-cyan-50'