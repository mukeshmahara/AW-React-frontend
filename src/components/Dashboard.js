import React, { useEffect, useState } from 'react'
import Layout from '../layouts/Layout'
import { fetchWrapper } from '../_helper/fetchWrapper';
import { ErrorMessageHandler } from '../_helper/_methods';

function Dashboard() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async()=>{
      try {
        let res = await fetchWrapper.get('projects');
        setProjects(res.data);
      } catch (error) {
        ErrorMessageHandler(error)
      }
    }
    getProjects();
  }, [0]);
  return (
    <div>
      <Layout projects={projects}/>
    </div>
  )
}

export default Dashboard