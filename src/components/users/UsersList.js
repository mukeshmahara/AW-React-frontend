import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import { fetchWrapper } from '../../_helper/fetchWrapper'
import { ErrorMessageHandler } from '../../_helper/_methods';

function UsersList() {
  useEffect(() => {
    const getAllUser =async()=>{
      try {
        let res = await fetchWrapper.get("users");
      } catch (error) {
        ErrorMessageHandler(error)
      }
    }
    getAllUser();
  }, []);
  return (
    
    <div>
      <ToastContainer position='bottom-right'/>
    </div>
  )
}

export default UsersList