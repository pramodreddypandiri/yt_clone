import React from 'react'
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos, ChannelCard} from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const ChannelDetails = () =>{
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  useEffect(() => {
      //fetch channel details
      fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))
      // fetch videos of the channel
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
  },[id])
  return (
      <Box minHeight='95vh'>
        <Box>
          <div style={{background: ' linear-gradient(90deg, rgba(0,217,255,1) 36%, rgba(9,116,121,1) 85%)', zIndex: 10, height:'300px'}} />
          <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
        </Box>
        <Box display='flex' p='2'>
           <Box sx={{mr:{sm:'100px'}}}/>
           <Videos videos={videos} />
        </Box>
        
      </Box>
      
    
    
  )
 }

export default ChannelDetails