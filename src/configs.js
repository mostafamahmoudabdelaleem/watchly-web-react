export const CONFIGS = {
    // backend API configs
    BACKEND_API_URL: process.env.REACT_APP_BACKEND_API_URL || 'https://api.watchly.msoft.ml/api',
    ALL_SERIES_PATH: "/series",
    ALL_MOVIES_PATH: "/movies",
    GET_SERIES_PATH: "/series",
    GET_MOVIE_PATH: "/movies",
    GET_VIDEO_LINKS_PATH: "/links",
    // localstorage keys configs
    LOCAL_MOVIES_KEY: "movies",
    LOCAL_MOVIES_TIMESTAMP_KEY: "movies_ts",
    LOCAL_SERIES_KEY: "series",
    LOCAL_SERIES_TIMESTAMP_KEY: "series_ts",
    LOCAL_CACHE_INTERVAL: 600,      // 600 Seconds = 10 Minutes
    // application user configs
    LOCAL_UUID_KEY: "uuid",
    LOCAL_USER_NAME_KEY: "uname",
    LOCAL_USER_PIC_KEY: "upic",
    LOCAL_USER_EMAIL_KEY: "uemail",
    LOCAL_USER_AUTH_PROVIDER_KEY: "uprovider",
    // signin PWA-Auth key
    MICROSOFT_KEY: process.env.REACT_APP_MICROSOFT_KEY || "",
    GOOGLE_KEY: process.env.REACT_APP_GOOGLE_KEY || "",
    FACEBOOK_KEY: process.env.REACT_APP_FACEBOOK_KEY || "",
    APPLE_KEY: process.env.REACT_APP_APPLE_KEY || "",
    // Pagination configs
    PAGINATION_PAGE_LIMIT: 24
}
