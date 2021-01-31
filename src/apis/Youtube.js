import axios from "axios";

const KEY = "AIzaSyAheUS6tGcDpXDYccou8bDHe_ftLpon3EI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "videos",
    maxResults: 5,
    key: KEY,
  },
});
