import React , {useState} from 'react'
import { useNavigate  } from 'react-router-dom'
import {Search} from '@mui/icons-material'
import { Paper , IconButton } from '@mui/material'
const SearchBar = () => {

  const [searchTerm, setsearchTerm] = useState('')

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`) 
      setsearchTerm('')
    }
  }

  return (
    <Paper className='flex flex-row ' sx={{mr:{sm:5} ,border:'1px solid #e3e3e3' , borderRadius:20 ,pl:2, boxShadow:'none'}}
        component='form' 
        onSubmit={handleOnSubmit}  
      >

        <input 
        className= 'search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)} />
        
        <IconButton type='submit' className='p-10' sx={{color:"red" , p:"10px"}}>
            <Search/>
        </IconButton>

    </Paper>
  )
}

export default SearchBar