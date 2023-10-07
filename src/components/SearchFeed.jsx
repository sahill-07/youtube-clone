import { Box,  Typography } from '@mui/material'
import React from 'react'
import { useState , useEffect } from 'react'
import { Videos} from './'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

  const [videos , setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => 
        setVideos(data.items))
  },[searchTerm])

  return (

      <Box className=''>
        <div className='flex font-bold text-2xl text-white p-5'>
        <h4 className='mr-2 mb-2'>Search Results for{}</h4> <span style={{color:'#F31503'}} className='font-bold text-2xl'>{searchTerm}</span>

        </div>
        <Videos videos={videos}/>
      </Box>

  )
}

export default SearchFeed;
