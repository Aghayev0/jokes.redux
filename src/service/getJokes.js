import axios from "axios"
import { BASE_URL } from "consts"

export const getJokes = () => {
  return axios.get(`${BASE_URL}`)
} 