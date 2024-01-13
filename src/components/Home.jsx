import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MyDate from "./MyDate";


import { useState } from "react";
import { Row } from "react-bootstrap";
import Convert from "./Convert";

const Home = () => {
  const getCurrentTime=() =>{
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
    return formattedTime;
  }
  
  const currentTime = getCurrentTime();
  console.log(currentTime);
  const isNight = currentTime <=  '06:00' || currentTime >= '18:00';
  const [inputValue, setInputValue] = useState('');
  console.log(isNight)
  console.log(MyDate)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    
    <div 
    className="flex-grow-1 p-5 mx-0 text-center"
    style={{
      backgroundImage: isNight
        ? "url('https://img.freepik.com/free-photo/beautiful-night-sky-with-shiny-stars_53876-138570.jpg')" 
        : "url('https://img.freepik.com/free-photo/sun-clouds_1160-936.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701302400&semt=ais')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
    >
    <div 
    className="center mx-auto"
    style={{height: '99%', width: '80%'}}> 
    <Row className="mx-0 ">
      <InputGroup
        className="mb-3 mx-auto mt-2 "
        style={{ width: "85%", height: "50px" }}
      >
        <Form.Control
          className="fs-4 text-center"
          type="text"
          placeholder="Cerca una località..."
          aria-label="Enter name or contry code"
          value={inputValue}
          onChange={handleInputChange}
        />
      </InputGroup>
        { inputValue &&
         <Row className='mx-0 '>
             <Convert city={inputValue}/>
        </Row>
        }
    </Row>
    
    </div>
    </div>
  );
};

export default Home;