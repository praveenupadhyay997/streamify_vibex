export const categoryList = [
    "All", "Gaming", "Songs", "Live", "Soccer",
    "Cricket", "Cooking", "Valentines", "Love Songs",
    "M S Dhoni"
];

const GOOGLE_API_KEY = "AIzaSyAhGL4HXNkI58biNZ7zAcIul9An8UPpsRU"
export const YOUTUBE_VIDEO_API = 
`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;