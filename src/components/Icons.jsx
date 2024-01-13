import {
  BsCloudRainHeavyFill,
  BsFillCloudFog2Fill,
  BsCloudsFill,
  BsCloudDrizzle,
  BsSnow2,
  BsSunFill,
  BsFillMoonStarsFill
} from "react-icons/bs";
import {
  RiThunderstormsLine,
} from 'react-icons/ri'


const Icons = ({ weatherCondition }) => {

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return formattedTime;
  }

  const currentTime = getCurrentTime();
  console.log(currentTime);


  const isNight = currentTime >= 18 || currentTime < 6;

  console.log('isNight: ', isNight);

  if (weatherCondition === 'Rain') {
    return <span>Pioggia <BsCloudRainHeavyFill className="text-grey" /></span>;
  } else if (weatherCondition === 'Clear') {
    return (
      <span>
        {isNight ? 'Soleggiato' : 'Soleggiato'}{' '}
        {isNight ? <BsFillMoonStarsFill className="text-white" /> : <BsSunFill className="text-warning" />}
      </span>
    );
  } else if (weatherCondition === 'Fog') {
    return <span>Nebbia <BsFillCloudFog2Fill className="text-white" /></span>;
  } else if (weatherCondition === 'Clouds') {
    return <span>Nuvoloso <BsCloudsFill className="text-white" /></span>;
  } else if (weatherCondition === 'Drizzle') {
    return <span>Piovoso <BsCloudDrizzle className="text-grey" /></span>;
  } else if (weatherCondition === 'Snow') {
    return <span>Neve <BsSnow2 className="text-white" /></span>;
  } else if (weatherCondition === 'Sun') {
    return <span>Sole <BsSunFill className="text-warning" /></span>;
  } else if (weatherCondition === 'Thunderstorm') {
    return <span>Neve <RiThunderstormsLine className="text-secondary" /></span>;
  } else {
    return '';
  }

}

export default Icons;