import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const TachesBrief = () => {
    const param = useParams();
    const [tasks, setTasks] = useState({task:[]});

    useEffect(() => {
        const getTasks = async () => {
          const apiTasks = await axios.get('http://127.0.0.1:8000/api/Brief/' + param.id);
          console.log(apiTasks);
          setTasks(apiTasks.data);
        }
        getTasks();
      }, [])

  return (
      <div>
        {tasks.task.map((task) => {
            return (
                <div key={task.id}>
                    <h1>task: {task.name_task}</h1>
                </div>
            );
        })}
      </div>
  )
}

export default TachesBrief