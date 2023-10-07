import React, {useState , useEffect} from 'react'
import { Link , useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography,Box , Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {Videos} from './'
import { fetchFromApi } from '../utils/fetchFromApi'
const VideoDetail = () => {

  const [videoDetail, setvideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const {id} = useParams();

  useEffect(() => {
      fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setvideoDetail(data.items[0]));

      fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => setVideos(data.items))
  } , [id])

  if(!videoDetail?.snippet) return 'Loading...'

  const {snippet : {title , channelId , channelTitle} , statistics:{viewCount , likeCount}} = videoDetail ;
  return (
    <Box minHeight="95vh">
        <Stack direction={{xs:'column', md:'row'}}>
          <Box flex={1}>
            <Box sx={{width:'100%' , position:'sticky' , top:'86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
              
              <Typography className='text-white font-bold p-2 text-2xl'>
                {title}
              </Typography>

              <Stack direction='row' className='flex justify-between text-xl text-white py-1 px-2'>
                 
                  <Link to={`/channel/${channelId}`}>
                      <Typography variant={{sm:'subtitle' , md:'h6'}} color='#fff' >
                        {channelTitle}
                        <CheckCircle sx={{fontSize:'12px' , color:'gray' , ml:'5px'}}/>
                      </Typography>
                  </Link>
                  
                  <Stack direction='row' alignItems='center' gap='20px'>
                    
                    <Typography variant='body1' sx={{opacity:0.7}}>
                      {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    
                    <Typography variant='body1' sx={{opacity:0.7}}>
                      {parseInt(likeCount).toLocaleString()} Likes
                    </Typography>
                  
                  </Stack>
              </Stack>

            </Box>

          </Box>

          <Box className='px-2 justify-center items-center' py={{md:1 , xs:5}}>
          <Videos videos={videos} direction='column'/>
        </Box>

        </Stack>

    </Box>
  )
}

export default VideoDetail