import { useEffect, useState } from "react";
import SearchCity from "./SearchCity";

const myKey = "a5867fdfc442d828f1eaed4d0eb848a9";

const Convert = (props) => {
  const city = props.city;
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [country, setCountry] = useState();
 

 
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${myKey}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella conversione");
        }
      })
      .then((data) => {
        setLat(data[0].lat);
        setLon(data[0].lon);
        setCountry(data[0].country);
       
      })
      .catch((error) => {
        console.log("Error", error);
      });
  });
  
  return (
    <>
      
      <SearchCity
        lat={lat}
        lon={lon}
        country={country}
        mykey={myKey}
    
      />
    
    </>
  );
};

export default Convert;
