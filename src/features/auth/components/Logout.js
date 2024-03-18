import React, { useEffect } from 'react'
import { logoutUserAsync, selectLoggedInUser } from '../authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Logout = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser)
    useEffect(()=>{
        dispatch(logoutUserAsync())
    },[dispatch])

  return (
    <>
        {!user && <Navigate to='/login' replace={true}></Navigate>}
    </>
  )
}

export default Logout