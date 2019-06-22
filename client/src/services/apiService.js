// Most code on this page is based on Kareem Grant's repo here:
// https://git.generalassemb.ly/sei-nyc-thunderbolt/express-auth-lesson
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// get token from localStorage (if it exists)
const JWT_TOKEN = localStorage.getItem('token');

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Authorization': `Bearer ${JWT_TOKEN}`
  }
})

export const login = async(data) => {
  try {
    const response = await api.post('/auth/login', data)
    const { data: { token, user } } = response

    // store token in localStorage
    // so it can be used on subsequent requests
    localStorage.setItem('token', token);
    return user
  } catch (e) {
    throw e
  }
}

export const getProfile = async() => {
  try {
    const response = await api.get('/app/profile')
    const {data: {user}} = response;

    return user
  } catch (e) {
    throw e
  }
}

export const signup = async(data) => {
  try {
    const response = await api.post('/auth/signup', data)
    const { data: { user, token } } = response

    // store token in localStorage
    // so it can be used on subsequent requests
    localStorage.setItem('token', token);
    return user
  } catch (e) {
    throw e
  }
}