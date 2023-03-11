import axios from "axios";


export const getMemes = async()=>{
    try {
        const response = await axios.get('https://www.reddit.com/r/memes.json')
        return response.data
    } catch (error) {
        console.log(error.message);
        return error.response
    }
}