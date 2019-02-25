import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f959ca3414c6398b8db535a296a4ac82227405aa50f1edea01decb1264834d1b"
  }
});
