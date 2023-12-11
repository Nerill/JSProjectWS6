

import {input, list} from './constants.js';

export class WeatherApp {

    constructor(){
        this.isLoading = false;
        
    }

    fetchData = async () => {
        try {
            const inputVal = input.value;
            const url = 
                `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=6b7d9423ff2f46bf7c0d8e2b38e7ff78&units=metric`;
        
            this.isLoading = true;

            const response = await fetch(url);
            const data = await response.json();

            this.updateDOM(data);
        }
        catch(error){
            throw new Error(error);
        }
        finally{
            this.isLoading = false;
        }


    /*fetchData = () => {
        const inputVal = input.value;
        const url = 
            `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=6b7d9423ff2f46bf7c0d8e2b38e7ff78&units=metric`;
    
        this.isLoading = true;
        fetch(url)
            .then((response) => response.json()) 
            .then((data) => {
                console.log(data);
                this.updateDOM(data)
            })
            .catch((error) => {
                throw new Error(error);
            })
            .finally(()=>{
                this.isLoading = false;
            })*/
    }

    updateDOM = (data) => {
        const {main, name, sys, weather} = data;

        const li = document.createElement('li'); 
        li.classList.add('city');

        li.innerHTML = `<h2 class="city-name">${name}</h2>
                        <div class="city-temp">${main.temp}</div>
                        
                        `;
        list.appendChild(li);
    }
}