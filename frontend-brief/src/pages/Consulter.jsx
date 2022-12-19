import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Consulter = () => {
    let parame = useParams();
    const [consulter, setConsulter] = useState({ apprenant: [] });

    useEffect(() => {
        const getApprenantBrief = async () => {
            const apiConsulter = await axios.get("http://127.0.0.1:8000/api/Brief/" +  parame.id);
            console.log(apiConsulter.data);
            setConsulter(apiConsulter.data);
        }
        getApprenantBrief();
    }, [])

  return (
    <div>
        {consulter.apprenant.map((item) => 
            <div key={item.id}>
                <div className='flex'>
                    <span> Apprenants : </span><h1>{item.prenom} {item.nom}</h1>
                </div>
                <span>{ (item.tasks.filter((task) => task.pivot.etat_Task == 1).length / item.tasks.length) * 100 }%</span>
            </div>
        )}
    </div>
  )
}

export default Consulter;