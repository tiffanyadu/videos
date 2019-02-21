import axios from "axios";

const KEY = "AIzaSyArp_gqpXoMFZCJlZ37ONjxGrgk19OHA6s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
