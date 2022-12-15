import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail_Brief = () => {
    const param = useParams();
    const [briefs, setBriefs] = useState({task:[]});

    useEffect(() => {
      const getBrief = async () => {
        const apiBrief = await axios.get('http://127.0.0.1:8000/api/Brief/'+ param.id);
        setBriefs((old)=>{return {...old, ...apiBrief.data}});
      }
      getBrief();
    }, [])
  return (
    <div>
                <div>
                    <h1> {briefs.name_brief} Tash : {briefs.task.length} </h1>
                    <p>
                        {briefs.descrip}
                    </p>
                    <h3>
                        {briefs.start_brief}
                    </h3>
                    <h3>
                        {briefs.end_brief}
                    </h3>
                </div>
    
    </div>
  )
}

export default Detail_Brief