import React from 'react'
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import Search from './Search';
import "./Home.css";
const Home = () => {
  return (
    
    <div className="Home">
    <div className="home__header">
     <div className="home__headerRight">
        <p>Gmail</p>
        <p>Images</p>
        <AppsIcon />
        <AccountCircleIcon />
      </div></div>
      <div className="home_body">
        <img src={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} alt="yyphoto"
          style={{ width: "270", height: "92" }} />

        <div className="home__inputContainer">
          <Search  />
        </div>
        <div className="add">
          <div className="add-button">
            <div className="addicon"><AddIcon /></div>
          </div><div className="add-button2">Add shortcut
          </div>
        </div></div>
    </div>
  )
}

export default Home
