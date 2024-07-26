import { useEffect, useState } from 'react';
import {getForecast } from './api';
import './styles.scss';

export const Weather = () => {
   const [data, setData] = useState(null)

    useEffect(() => {
        if(!window.navigator.geolocation) {
            alert("geolocation is not enabled")
            return
        }
        navigator.geolocation.getCurrentPosition((position) => {
            getForecast(position)
            .then(response => {
                setData(response)
            })
            .catch(error => console.log(error))
            .finally(() => {
                console.log(data)
            })
        },
         (error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className='weather'>
            <p>Hello weather</p>
        </div>
    )
}