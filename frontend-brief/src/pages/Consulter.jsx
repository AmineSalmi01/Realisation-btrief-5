import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Consulter = () => {
    const [briefs, setBriefs] = useState([]);

    useEffect(() => {
      const getBrief = async () => {
        const apiBrief = await axios.get('http://127.0.0.1:8000/api/Brief');
        setBriefs(apiBrief.data);
      }
      getBrief();
    }, [])
  return (
    (briefs.map((brief)=>{
        return (
            <div>
              
            </div>
        )
    }))
  )
}

export default Consulter