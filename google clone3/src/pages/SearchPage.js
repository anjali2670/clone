import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./SearchPage.css"
const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage_Header'>
        <Link to="/" >
          <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt="Search"/>
        </Link>

        <div className='SearchPage_headerBody'>
          <Search />
         
          <div className='SearchPage_option_left'>

         <div className='SearchPge_option'>
          <SearchIcon />
          <Link to="all">All</Link>
          </div>

          <div className='SearchPge_option'>
          <NewspaperIcon />
          <Link to="/all">News</Link>
          </div>

          <div className='SearchPge_option'>
            <ImageIcon />
            <Link to="/all">Images</Link>
            </div>

            <div className='SearchPge_option'>
            <LocalOfferIcon />
            <Link to="/all">Shopping</Link>
            </div>

            <div className='SearchPge_option'>
            <EditLocationIcon />
            <Link to="/all">Maps</Link>
            </div>

            <div className='SearchPge_option'>
                < MoreVertIcon/>
                <Link to="/all">More</Link>
            </div>
         
         <div className='SearchPage_optionRight'>
            <div className='SearchPge_option'>
                <Link to="/settings">Settings</Link>
                </div>
            <div className='SearchPge_option'>
                <Link to="/tools">Tools</Link>
               
            </div>
         </div>
         </div>
         
         </div>


        </div>
      
      <div className='searchPage_results'>
        <p className='searchPage_resultCount'>
        About 2,51,00,000 results (0.34 seconds) 
        </p>
        <div className='searchPage_result'>
            <a href='' className='searchPage_resultLink'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPMStLUSkTrXyK1aSuKFjUH6VqCEmOZaNNYanYGiCmQ&s' alt="github" 
              className='searchPage_resultimage'/>
              github.com
              </a>
             <a href='' className='searchPage_resultTitle' >
                <h2>Camel coder </h2>
            </a>
            <p className='searchPage_resultDescription'>It will quickly introduce you to the primary features of React Router: from configuring routes, to loading and mutating data, to pending and optimistic UI.</p>
            </div>
        </div>       
</div>
  )
}

export default SearchPage
