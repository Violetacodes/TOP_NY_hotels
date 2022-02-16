import { useState } from 'react';
import './App.css';
import { data } from './data';


function App() {

const[listofhotels, sethotels] = useState(data);
const[showMore, setShowMore] = useState(false);

const removeHotel = (id) => {
let newHotels = listofhotels.filter( hotel => hotel.id !== id);
sethotels(newHotels);
}

  return (
    <div>
      <div className='container'>
        <h1>nyc top {listofhotels.length} hotels </h1>
      </div>
      {listofhotels.map((hotels => {
        const{id, hotelName, description, image, source} = hotels;

        return(
          <div key={id}>
            <div className='container'>
              <h2>{id} - {hotelName}</h2>
            </div>
            <div className='container'>
               <p>{ showMore ? description : description.substring(0,220) + "...." }
               <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button></p>
            </div>
            <div className='container'>
              <img width="500px" alt='hotelsim' src={image} />
            </div>
            <div className='container'>
              <p> Source: {source}</p>
            </div>
            <div className='container'>
             <button className='btn' onClick={() => removeHotel(id)}>Remove</button>
            </div>
            
          </div>
          
        )
      }))}

    </div>
    
  );
  
}

export default App;
