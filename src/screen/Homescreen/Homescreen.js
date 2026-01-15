import react from 'react';
import './Homescreen.css'
import Homebanner from './Homebanner/Homebanner';
import HomeDetails from './HomeDetails/HomeDetails';
const Homescreen = () =>{
    return(
        <div className="Homescreen">
            <Homebanner/>
            <HomeDetails/>
        </div>
    )
}

export default Homescreen