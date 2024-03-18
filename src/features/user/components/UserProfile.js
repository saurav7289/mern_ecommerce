import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo, updateUserAsync } from '../userSlice';
import { useForm } from 'react-hook-form';

const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserInfo);
    const [selectEditIndex, setSelectedEditIndex] = useState(-1);
    const [showAddAddressForm, setShowAddAddressForm] = useState(false);
    const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors },
    } = useForm();

    const handleEdit = (addressUpdate,index)=>{
      const newUser = {...user, addresses:[...user.addresses]};
      newUser.addresses.splice(index,1,addressUpdate);
      dispatch(updateUserAsync(newUser));
      setSelectedEditIndex(-1);
    }

    const handleRemove = (e,index)=>{
      const newUser = {...user, addresses:[...user.addresses]};
      newUser.addresses.splice(index,1);
      dispatch(updateUserAsync(newUser));
    }

    const handleEditForm = (index)=>{
      setSelectedEditIndex(index);
      const address = user.addresses[index];
      setValue('fullName',address.fullName)
      setValue('Email',address.Email)
      setValue('mobile',address.mobile)
      setValue('street',address.street)
      setValue('city',address.city)
      setValue('state',address.state)
      setValue('pincode',address.pincode)
    }

    const handleAddAddress = (address)=>{
      const newUser = {...user, addresses:[...user.addresses, address]}
      dispatch(updateUserAsync(newUser));
      setShowAddAddressForm(false);
    }

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
        <button
            onClick={e=>{setShowAddAddressForm(true);setSelectedEditIndex(-1)}}
            type="submit"
            className="rounded-md bg-green-600 px-3 py-2 text-sm my-2 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
            Add Address
        </button>
        { showAddAddressForm ?(<form className="bg-white px-5 py-4 my-3" noValidate onSubmit={handleSubmit((data)=>{handleAddAddress(data);reset()})}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="full-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Full name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("fullName",{required:"Name is required"})}
                          id="first-name"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.fullName && <p className='text-red-500'>{errors.fullName.message}</p>}
                      </div>
                    </div>

                    

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          {...register("Email",{required:"Email is required"})}
                          type="email"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.Email && <p className='text-red-500'>{errors.Email.message}</p>}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="mobile-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Mobile
                      </label>
                      <div className="mt-2">
                        <input
                          type="tel"
                          {...register("mobile",{required:"Number is required"})}
                          id="last-name"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("street",{required:"street is required"})}
                          id="street-address"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.street && <p className='text-red-500'>{errors.street.message}</p>}
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("city",{required:"city is required"})}
                          id="city"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.city && <p className='text-red-500'>{errors.city.message}</p>}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("state",{required:"state is required"})}
                          id="region"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.state && <p className='text-red-500'>{errors.state.message}</p>}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("pincode",{required:"pincode is required"})}
                          id="postal-code"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.pincode && <p className='text-red-500'>{errors.pincode.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Address
                  </button>
                </div>
              </div>
            </form>):null}
        <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
            {user.addresses.map((address,index)=>(
              <div>
             { selectEditIndex === index ?(<form className="bg-white px-5 py-4 my-3" noValidate onSubmit={handleSubmit((data)=>{handleEdit(data,index)})}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="full-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Full name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("fullName",{required:"Name is required"})}
                          id="first-name"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.fullName && <p className='text-red-500'>{errors.fullName.message}</p>}
                      </div>
                    </div>

                    

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          {...register("Email",{required:"Email is required"})}
                          type="email"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.Email && <p className='text-red-500'>{errors.Email.message}</p>}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="mobile-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Mobile
                      </label>
                      <div className="mt-2">
                        <input
                          type="tel"
                          {...register("mobile",{required:"Number is required"})}
                          id="last-name"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("street",{required:"street is required"})}
                          id="street-address"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.street && <p className='text-red-500'>{errors.street.message}</p>}
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("city",{required:"city is required"})}
                          id="city"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.city && <p className='text-red-500'>{errors.city.message}</p>}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("state",{required:"state is required"})}
                          id="region"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.state && <p className='text-red-500'>{errors.state.message}</p>}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("pincode",{required:"pincode is required"})}
                          id="postal-code"
                          
                          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.pincode && <p className='text-red-500'>{errors.pincode.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-end gap-x-6">
                  <button
                    onClick={e=>setSelectedEditIndex(-1)}
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Edit Address
                  </button>
                </div>
              </div>
            </form>):null}
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
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <button
                        onClick={(e)=>handleEditForm(index)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Edit
                        </button>
                        <button
                        onClick={(e)=>handleRemove(e,index)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                        </div>
                      </div>
                      </div>
            ))}
                      
                  
        </div>
      </div>
    </>
  )
}

export default UserProfile