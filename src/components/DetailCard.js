import moment from 'moment';

function DetailCard({weather_icon, data}) {
    const {clouds, main, weather} = data.list[0]

    return (
        <div className="relative container p-2 flex items-center justify-center shadow-lg rounded-lg bg-white h-1/3 mb-auto">
            <video src={`Imgs/${weather[0].main}.mp4`} autoPlay loop muted className="absolute z-0 w-full h-full rounded-lg object-cover brightness-50" />
            <div className="my-auto z-10">
            <p className="font-bold text-4xl text-pink-800 mb-2">{Math.round(main.temp)}&deg;C</p>
            <p className="text-3xl text-white tracking-widest">{weather[0].main}
                <img src={weather_icon} className="w-1/4 inline" />
            </p>
            <p className="text-white text-xs uppercase tracking-widest">{weather[0].description}</p>
            <p className="tracking-wider text-white">{moment().utcOffset({}).format("dddd MMM YYYY")}</p>
            </div>
            <div className="my-1 border-l-2 border-gray-100 p-1 z-10">
            <p className="text-white text-lg">RealFeel: {Math.round(main.feels_like)}&deg;C</p>
            <p className="text-white text-lg">Humidity: {main.humidity}%</p>
            <p className="text-white text-lg">Cloud Cover: {clouds.all}%</p>
            <p className="text-white text-lg">Min Temp: {Math.round(main.temp_min)}&deg;C</p>
            <p className="text-white text-lg">Max Temp: {Math.round(main.temp_max)}&deg;C</p>
            </div>
        </div>
    )
}



export default DetailCard