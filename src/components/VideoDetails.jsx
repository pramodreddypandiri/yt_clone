import React from 'react'
import {Videos} from '../components'
import { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import {Box, Typography, Stack} from '@mui/material'
import ReactPlayer from 'react-player'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { CheckCircle } from '@mui/icons-material'

const VideoDetail = () => {
  const {id} = useParams()
  const [VideoDetail, setVideoDetail] = useState(null)
  const [relatedVideo, setRelatedVideo] = useState(null)
  useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))
      fetchFromAPI(`search?part=snippet&relatedTovideoId=${id}&type=video`).then((data)=> setRelatedVideo(data.items))
  },[id])
  if(!VideoDetail?.snippet) return 'Loading.....'
  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = VideoDetail
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top:'90px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color='#fff' variant='h5' fontWeight='bold'p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent="space-between" alignItems='center' sx={{color:'#fff'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm: 'subtitle1', md: 'h6'}} color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{fontSize: '12px', color: 'grya', ml: '5px'}}/>
                </Typography>
              </Link>
              <Stack direction="row" gap='20px' alignItems='center'>
                <Typography varian="body1" sx={{opacity: 0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography varian="body1" sx={{opacity: 0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>

              </Stack>
            </Stack>
          </Box>

        </Box>
          <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems='center'>
          <Videos videos={relatedVideo} direction='column'/>
          </Box>
      </Stack>
      
    </Box>
  )
}

export default VideoDetail