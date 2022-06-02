import { Article } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
function Articles() {
    const navigate = useNavigate();
const [artival, setArtiVal] = useState([]);
    const newsApi = ()=>{
        let apival = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-02&sortBy=publishedAt&apiKey=357589c0d2c246bda644eea87f55eca3"
        axios.get(apival).then(success =>{
console.log(success);
setArtiVal(success.data.articles)

        }).catch(err=>{
            console.log(err)
        })
    };

    const link = (rec) => {
        navigate('/headline', {
          state: rec,
        })
        console.log(rec)
    
      }

useEffect(()=>{
    newsApi();
},[])

    
        return (
            <Box className='text-start'  >
            {artival.map((e, i) => (
              <Box className='shadow-lg p-3 mb-5 bg-light rounded' onClick={()=>link(e)} >
                <Box className="d-flex justify-content-start py-3 " elevation={4}>
                  <img src={e.urlToImage} width="200px" />
                  <Typography key={i} variant='h5'>{e.title}</Typography>
      
                </Box>
                <Typography>{e.description}</Typography>
                <Typography variant='caption' mt={3}>Published At: {e.publishedAt}</Typography>
              </Box>
            )
      
            )}
          </Box>
      
            )
            }
export default Articles