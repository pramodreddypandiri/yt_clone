import React from 'react'
import { Stack } from '@mui/system'
import {logo } from '../utils/constants'
import {Link} from 'react-router-dom'

import SearchBar from './SearchBar'
import { Padding } from '@mui/icons-material'
// navbar contains logo and search bar on right
const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx= {{position: 'sticky',background:'#000', top:0 , justifyContent:'space-between'}}> 
    <Link to='/' style={{display: 'flex',alignItems:'center'}}>
    
      <i class="fa fa-youtube-play" style={{fontSize:'60px',color:'#1B98F5'}}></i>
     
    
    </Link>
    <SearchBar/>
    </Stack>
    
  )


export default Navbar