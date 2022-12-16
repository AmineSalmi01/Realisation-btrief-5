import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const TachesBrief = () => {
    // const {id} = useParams();
    // const [tasks, setTasks] = useState({task:[]});
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
          const apiTasks = await axios.get(`http://127.0.0.1:8000/api/Brief/${id}/Tasks`);
          console.log(apiTasks);
          setTasks(apiTasks.data);
        }
        getTasks();
      }, [])

  return (
      <div>
        {/* {tasks.task.map((t) => {
            return (
                <div key={t.id}>
                    <h1>task: {t.name_task}</h1>
                </div>
            );
        })} */}
      </div>
  )
}

export default TachesBrief