import axios from "axios";

export const API_BASED_URL = "http://localhost:9292";

const jwt = localStorage.getItem("jwt");





export   const api = axios.create({
  baseURL:API_BASED_URL,
  headers:{
    "Authorization":`Bearer ${jwt}`,
    "Content-Type":"application/json"
  }
})