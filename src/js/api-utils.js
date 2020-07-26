import { CONFIGS } from '../configs'


export const fetchSeries = (callback) => {
    console.log('start fetch')
    let url = 'https://cors-anywhere.herokuapp.com/' + CONFIGS.BACKEND_API_URL + CONFIGS.ALL_SERIES_PATH;


    let localSeries = JSON.parse(localStorage.getItem(CONFIGS.LOCAL_SERIES_KEY))
    let localSeriesTS = parseInt(localStorage.getItem(CONFIGS.LOCAL_SERIES_TIMESTAMP_KEY))
    
    let cond1 = (((Math.floor(Date.now() / 1000)) - localSeriesTS) > CONFIGS.LOCAL_CACHE_INTERVAL)
    let cond2 = (localSeries === null || localSeriesTS === null)

    if(cond1 || cond2){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("fetch end")
            //localStorage.setItem(CONFIGS.LOCAL_SERIES_KEY, JSON.stringify(data))
            //localStorage.setItem(CONFIGS.LOCAL_SERIES_TIMESTAMP_KEY, (Math.floor(Date.now() / 1000)).toString())
            callback(data)
        }).catch(err => console.log(err))
    }else{
        callback(localSeries)
    }  
}


export const fetchMovies = (callback) => {
    console.log('start fetch')
    let url = 'https://cors-anywhere.herokuapp.com/' + CONFIGS.BACKEND_API_URL + CONFIGS.ALL_SERIES_PATH;


    let localMovies = JSON.parse(localStorage.getItem(CONFIGS.LOCAL_MOVIES_KEY))
    let localMoviesTS = parseInt(localStorage.getItem(CONFIGS.LOCAL_MOVIES_TIMESTAMP_KEY))
    
    let cond1 = (((Math.floor(Date.now() / 1000)) - localMoviesTS) > CONFIGS.LOCAL_CACHE_INTERVAL)
    let cond2 = Boolean(localMovies === null || isNaN(localMoviesTS))

    if(cond1 || cond2){
        /*fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("fetch end")
            localStorage.setItem(CONFIGS.LOCAL_MOVIES_KEY, JSON.stringify(data))
            localStorage.setItem(CONFIGS.LOCAL_MOVIES_TIMESTAMP_KEY, (Math.floor(Date.now() / 1000)).toString())
            callback(data)
        }).catch(err => console.log(err))*/
        callback([])
    }else{
        callback(localMovies)
    }  
}