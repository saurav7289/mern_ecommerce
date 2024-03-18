import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInUser } from '../../auth/authSlice'

const UserProfile = () => {
    const user = useSelector(selectLoggedInUser);
  return (
    <>
         <div className="mx-auto bg-white my-3 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl mb-4 font-bold tracking-tight text-gray-900">
            Name : {user.name ? user.name:'Guest User'}
          </h1>
          <h3 className="text-xl mb-4 font-bold tracking-tight text-red-900">
            E-Mail : {user.email}
          </h3>
          
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm text-gray-500">
            Saved Addresses :
          </p>
            {user.addresses.map((address)=>(
                <div
                       
                        className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                      >
                        <div className="flex min-w-0 gap-x-4">
                         
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              {address.fullName}
                            </p>
                            <p className="text-xs leading-5 text-gray-900">
                              {address.pincode}
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-5 text-gray-900">
                            Phone: {address.mobile}
                          </p>
                          <p className="text-sm leading-5 text-gray-500">
                            {address.state}
                          </p>
                        </div>
                      </div>
            ))}
                      
                  
        </div>
      </div>
    </>
  )
}

export default UserProfile