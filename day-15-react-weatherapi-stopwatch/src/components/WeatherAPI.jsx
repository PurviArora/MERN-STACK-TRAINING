import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  

const WeatherAPI = () => {

    const navigate = useNavigate();

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const API_KEY = "20736cc720eda51f1a9c77ed9793e863";

    const getWeather = async () => {

        try {
            
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            setWeather(response.data);

        } catch (error) {

            alert("City Not Found");

        }

    };

    return (
        <>
            <div className="container mt-5">

                <div className="alert alert-primary text-center">

                    <h1>Weather API</h1>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter City Name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <button
                        className="btn btn-success"
                        onClick={getWeather}
                    >
                        Search
                    </button>

                    {weather && (
                        <div className="mt-4">

                            <h2>{weather.name}</h2>

                            <h3>{weather.main.temp} °C</h3>

                            <h4>{weather.weather[0].main}</h4>

                            <p>Humidity : {weather.main.humidity}%</p>

                            <p>Wind Speed : {weather.wind.speed} m/s</p>

                            <p>Country : {weather.sys.country}</p>

                        </div>
                    )}
                </div>
                <div className='mb-5 text-center'>
                    <p><span onClick={()=> navigate("/")} className='fs-1 fst-italic fw-bolder text-decoration-underline'>Stopwatch</span> </p>
                </div>
            </div>
        </>
    );
};

export default WeatherAPI;