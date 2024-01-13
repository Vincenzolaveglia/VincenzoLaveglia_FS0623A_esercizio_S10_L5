import Icons from "./Icons";

const Forecast = (props) => {
  const array = props.array;
  const calc = props.calc;
  console.log(array);

  function stringDay(dateString) {
    const daysOfWeek = [
      "Domenica",
      "Lunedi",
      "Martedì",
      "Mercoledì",
      "Giovedì",
      "Venerdì",
      "Sabato",
    ];
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay(); 
    return daysOfWeek[dayOfWeekIndex];
  }

  return (
    <div className="mt-3 bg-gray sezionePrevisioni rounded-4">
      <p className="fs-3 pt-2 ">Previsioni per prosimi giorni</p>
      <div className="d-flex justify-content-between border-top border-bottom py-2 fs-3 px-3">
        <span className="pe-2 text-start" style={{width: '100px'}}>{stringDay(array[6].dt_txt)}</span>
        <span className="text-center" style={{width: '100px'}}>{calc(array[6].main.temp).toFixed(1)}°C</span>
        <span >
                <Icons
                  weatherCondition={array[6].weather[0].main}
                />
              </span>
      </div>
      <div className="d-flex justify-content-between border-bottom py-2 fs-3 px-3">
        <span className="pe-2 text-start" style={{width: '100px'}}>{stringDay(array[14].dt_txt)}</span>
        <span className="text-center" style={{width: '100px'}}>{calc(array[14].main.temp).toFixed(1)}°C</span>
        <span >
                <Icons
                  weatherCondition={array[14].weather[0].main}
                />
              </span>
      </div>
      <div className="d-flex justify-content-between border-bottom py-2 fs-3 px-3">
        <span className="pe-2 text-start" style={{width: '100px'}}>{stringDay(array[22].dt_txt)}</span>
        <span className="text-center" style={{width: '100px'}}>{calc(array[22].main.temp).toFixed(1)}°C</span>
        <span >
                <Icons
                  weatherCondition={array[22].weather[0].main}
                />
              </span>
      </div>
      <div className="d-flex justify-content-between border-bottom py-2 fs-3 px-3">
        <span className="pe-2 text-start" style={{width: '100px'}}>{stringDay(array[30].dt_txt)}</span>
        <span className="text-center" style={{width: '100px'}}>{calc(array[30].main.temp).toFixed(1)}°C</span>
        <span >
                <Icons
                  weatherCondition={array[30].weather[0].main}
                />
              </span>
      </div>
      <div className="d-flex justify-content-between py-2 fs-3 px-3">
        <span className="pe-2 text-start" style={{width: '100px'}}>{stringDay(array[38].dt_txt)}</span>
        <span className="text-center" style={{width: '100px'}}>{calc(array[38].main.temp).toFixed(1)}°C</span>
        <span >
                <Icons
                  weatherCondition={array[38].weather[0].main}
                />
              </span>
      </div>
    </div>
  );
};

export default Forecast;


