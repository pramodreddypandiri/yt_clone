import React from 'react'
import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from '../components'
//this is part of feed
const Videos = ({videos}) => {
    
  return (
    <Stack direction="row" flexWrap='wrap' justifyContent='start' gap={2}>
        {videos.map((item, idx) => (
            //console.log(item, index);
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
            
        ))}

    </Stack>
  )
}

export default Videos