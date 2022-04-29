import axios from 'axios';
import { TextGearsResponse } from '../types/TestGears'

const spellingChecker = (text: string) => {
  const params = {
    // for Key, we can use .env file, but due to vite has issues with process.env variable, I couldn't use it here.
    key: '1Lw2AeNMswdm1van',
    lang: navigator.language,
    text,
  }
  return axios.get<TextGearsResponse>('https://api.textgears.com/spelling', { params })

}

export default spellingChecker;


