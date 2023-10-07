import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { Navbar , Feed , SearchFeed , VideoDetail , ChannelDetails} from './components'
const App = () => { 
  return (
    <BrowserRouter>
      <div className='bg-black'>
        <Navbar/>

        <Routes>
          <Route path='/' exact element={<Feed/>} />
          <Route path='/video/:id' exact element={<VideoDetail/>} />
          <Route path='/channel/:id' exact element={<ChannelDetails/>} />
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App