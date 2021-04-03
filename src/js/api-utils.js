import { CONFIGS } from '../configs'


export const fetchSeries = (callback) => {
    let url = CONFIGS.BACKEND_API_URL + CONFIGS.ALL_SERIES_PATH;

    let localSeries = JSON.parse(localStorage.getItem(CONFIGS.LOCAL_SERIES_KEY))
    let localSeriesTS = parseInt(localStorage.getItem(CONFIGS.LOCAL_SERIES_TIMESTAMP_KEY))
    
    let cond1 = (((Math.floor(Date.now() / 1000)) - localSeriesTS) > CONFIGS.LOCAL_CACHE_INTERVAL)
    let cond2 = (localSeries === null || localSeriesTS === null)

    if(cond1 || cond2){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let series = data.filter((val) => {
                if(val.sources_links !== undefined){
                    return Object.keys(val.sources_links).length !== 0
                }else{
                    return false
                }
            });
            localStorage.setItem(CONFIGS.LOCAL_SERIES_KEY, JSON.stringify(series))
            localStorage.setItem(CONFIGS.LOCAL_SERIES_TIMESTAMP_KEY, (Math.floor(Date.now() / 1000)).toString())
            callback(series)
        }).catch(err => console.log(err))
    }else{
        callback(localSeries)
    }  
}


export const fetchMovies = (callback) => {
    let url = CONFIGS.BACKEND_API_URL + CONFIGS.ALL_MOVIES_PATH;

    let localMovies = JSON.parse(localStorage.getItem(CONFIGS.LOCAL_MOVIES_KEY))
    let localMoviesTS = parseInt(localStorage.getItem(CONFIGS.LOCAL_MOVIES_TIMESTAMP_KEY))
    
    let cond1 = (((Math.floor(Date.now() / 1000)) - localMoviesTS) > CONFIGS.LOCAL_CACHE_INTERVAL)
    let cond2 = Boolean(localMovies === null || isNaN(localMoviesTS))

    if(cond1 || cond2){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let movies = data.filter((val) => {
                if(val.sources_links !== undefined){
                    return Object.keys(val.sources_links).length !== 0
                }else{
                    return false
                }
            });
            localStorage.setItem(CONFIGS.LOCAL_MOVIES_KEY, JSON.stringify(movies))
            localStorage.setItem(CONFIGS.LOCAL_MOVIES_TIMESTAMP_KEY, (Math.floor(Date.now() / 1000)).toString())
            callback(movies)
        }).catch(err => console.log(err))
    }else{
        callback(localMovies)
    }  
}


export const fetchSingleSeries = (link, callback) => {
    let baseUrl = `${CONFIGS.BACKEND_API_URL}${CONFIGS.GET_SERIES_PATH}?link=${link}`
    let url = baseUrl
    fetch(url)
    .then(res => res.json())
    .then(data => {
        callback(data)
    }).catch(err => console.log(err))
}


export const fetchVideoLinks = (link, callback) => {
    let baseUrl = `${CONFIGS.BACKEND_API_URL}${CONFIGS.GET_VIDEO_LINKS_PATH}?link=${link}`
    let url = baseUrl
    fetch(url)
    .then(res => res.json())
    .then(data => {
        callback(data)
    }).catch(err => console.log(err))
}