import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { getMemes } from '../services/api'
import Meme from './Meme'

const Memes = () => {

    const [memes, setMemes] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            let res = await getMemes()
            res && setMemes(res.data.children)
        }
        getData()
        // eslint-disable-next-line
    },[])

  return (
    <Grid container margin={3} >
        {
            memes.map(meme =>(
                <Grid item xs={2} >
                    <Meme meme={meme} />
                </Grid>
            ))
        }
    </Grid>
  )
}

export default Memes