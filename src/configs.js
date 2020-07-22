export const CONFIGS = {
    // backend API configs
    BACKEND_API_URL: process.env.BACKEND_API_URL || "https://watchly-api.herokuapp.com/api/v1",
    ALL_SERIES_PATH: "/all_series",
    ALL_MOVIES_PATH: "",
    GET_SERIES_PATH: "",
    GET_MOVIE_PATH: "",
    GET_VIDEO_LINKS_PATH: "",
    // localstorage keys configs
    LOCAL_MOVIES_KEY: "movies",
    LOCAL_MOVIES_TIMESTAMP_KEY: "movies_ts",
    LOCAL_SERIES_KEY: "series",
    LOCAL_SERIES_TIMESTAMP_KEY: "series_ts",
    LOCAL_CACHE_INTERVAL: 300,      // 300 Seconds = 5 Minutes
    // application user configs
    LOCAL_UUID_KEY: "uuid",
    LOCAL_USER_NAME_KEY: "uname",
    LOCAL_USER_PIC_KEY: "upic",
    // signin PWA-Auth key
    MICROSOFT_KEY: "...",
    GOOGLE_KEY: "896772888299-6ngsuchb4gg5pulom75hpaf9hhucepqq.apps.googleusercontent.com",
    FACEBOOK_KEY: "...",
    APPLE_KEY: "..."
}
