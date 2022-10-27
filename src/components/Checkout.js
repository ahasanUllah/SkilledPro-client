import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
   const courses = useLoaderData();

   return (
      <div className="mt-12">
         <section>
            <h1 className="text-center text-4xl mb-10 dark:text-gray-300">Checkout</h1>

            <div className="relative mx-auto max-w-screen-2xl">
               <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-gray-50 py-12 md:py-24 dark:bg-gray-800 ">
                     <div className="mx-auto max-w-lg px-4 lg:px-8 ">
                        <div className="mt-8">
                           <p className="text-2xl font-medium tracking-tight dark:text-gray-200">${courses.price}</p>
                           <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">For the purchase of</p>
                        </div>

                        <div className="mt-12">
                           <div className="flow-root">
                              <ul className="-my-4 divide-y divide-gray-200">
                                 <li className="flex items-center justify-between py-4">
                                    <div className="flex items-start">
                                       <img
                                          alt="Trainer"
                                          src={courses.image}
                                          className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                                       />

                                       <div className="ml-4">
                                          <p className="text-sm dark:text-gray-300">{courses.title}</p>

                                          <dl className="mt-1 space-y-1 text-xs text-gray-500 dark:text-gray-300">
                                             <div>
                                                <dt className="inline">instructor: </dt>
                                                <dd className="inline">{courses.instructor}</dd>
                                             </div>

                                             <div>
                                                <dt className="inline">Level: </dt>
                                                <dd className="inline">{courses.lavel}</dd>
                                             </div>
                                          </dl>
                                       </div>
                                    </div>

                                    <div>
                                       <p className="text-md dark:text-gray-300">
                                          ${courses.price}
                                          <small className="text-gray-500 dark:text-gray-300">x1</small>
                                       </p>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-white py-12 md:py-24">
                     <div className="mx-auto max-w-lg px-4 lg:px-8">
                        <form className="grid grid-cols-6 gap-4">
                           <div className="col-span-3">
                              <label className="mb-1 block text-sm text-gray-600" htmlFor="first_name">
                                 First Name
                              </label>

                              <input
                                 className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                 type="text"
                                 id="first_name"
                              />
                           </div>

                           <div className="col-span-3">
                              <label className="mb-1 block text-sm text-gray-600" htmlFor="last_name">
                                 Last Name
                              </label>

                              <input
                                 className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                 type="text"
                                 id="last_name"
                              />
                           </div>

                           <div className="col-span-6">
                              <label className="mb-1 block text-sm text-gray-600" htmlFor="email">
                                 Email
                              </label>

                              <input
                                 className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                 type="email"
                                 id="email"
                              />
                           </div>

                           <div className="col-span-6">
                              <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                                 Phone
                              </label>

                              <input
                                 className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                 type="tel"
                                 id="phone"
                              />
                           </div>

                           <fieldset className="col-span-6">
                              <legend className="mb-1 block text-sm text-gray-600">Card Details</legend>

                              <div className="-space-y-px rounded-lg bg-white shadow-sm">
                                 <div>
                                    <label className="sr-only" htmlFor="card-number">
                                       Card Number
                                    </label>

                                    <input
                                       className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                       type="text"
                                       name="card-number"
                                       id="card-number"
                                       placeholder="Card number"
                                    />
                                 </div>

                                 <div className="flex -space-x-px">
                                    <div className="flex-1">
                                       <label className="sr-only" htmlFor="card-expiration-date">
                                          Expiration Date
                                       </label>

                                       <input
                                          className="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                          type="text"
                                          name="card-expiration-date"
                                          id="card-expiration-date"
                                          placeholder="MM / YY"
                                       />
                                    </div>

                                    <div className="flex-1">
                                       <label className="sr-only" htmlFor="card-cvc">
                                          CVC
                                       </label>

                                       <input
                                          className="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                          type="text"
                                          name="card-cvc"
                                          id="card-cvc"
                                          placeholder="CVC"
                                       />
                                    </div>
                                 </div>
                              </div>
                           </fieldset>

                           <fieldset className="col-span-6">
                              <legend className="mb-1 block text-sm text-gray-600">Billing Address</legend>

                              <div className="-space-y-px rounded-lg bg-white shadow-sm">
                                 <div>
                                    <label className="sr-only" htmlFor="country">
                                       Country
                                    </label>

                                    <select
                                       className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                                       id="country"
                                       name="country"
                                       autoComplete="country-name"
                                    >
                                       <option>England</option>
                                       <option>Wales</option>
                                       <option>Scotland</option>
                                       <option>France</option>
                                       <option>Belgium</option>
                                       <option>Japan</option>
                                    </select>
                                 </div>

                                 <div>
                                    <label className="sr-only" htmlFor="postal-code">
                                       ZIP/Post Code
                                    </label>

                                    <input
                                       className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                       type="text"
                                       name="postal-code"
                                       id="postal-code"
                                       autoComplete="postal-code"
                                       placeholder="ZIP/Post Code"
                                    />
                                 </div>
                              </div>
                           </fieldset>

                           <div className="col-span-6">
                              <button
                                 className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                                 type="submit"
                              >
                                 Pay Now
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Checkout;
