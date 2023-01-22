import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack , Typography } from '@mui/material'
import {Sidebar, Videos} from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  },[selectedCategory])
  //console.log(selectedCategory);
  //console.log(videos);
  return (
    <Stack sx={{flexDirection: {sx:"column", md:'row'}}}  alignItems = 'center' justifyContent = 'center'>
      <Box sx={{height: {sx:'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d', px: {sx:0,md:2}}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color: '#fff'}}>
          Copyright@2023 
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh',flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          {selectedCategory}<span style={{color: '#1B98F5'}}> Videos</span>
        </Typography>
        {/* send videos(got from api) to Videos comp */}
        <Videos videos={videos}/>
      </Box>


    </Stack>
  )
}

export default Feed