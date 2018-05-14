import axios from 'axios';

export default class Api {
  static getNewsAPI() {
    return axios.get('http://18.188.113.223:8000/api/news')
  }
  static getTournamentsAPI() {
    return axios.get('http://18.188.113.223:8000/api/tournaments')
  }
}