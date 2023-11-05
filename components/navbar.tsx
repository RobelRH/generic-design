'use client'

import { Dialog } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

const listMenuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Product", href: "#" },
    { name: "Service", href: "#" },
    { name: "Contact", href: "#" },
]

const Navbar = () => {

    const [openMobile, setOpenMobile] = useState(false)

    return (
        <div>
            <header>
                <nav className='flex justify-between items-center px-6 py-6'>
                    {/* company name and logo */}
                    <div className='flex space-x-3 lg:flex-1'>
                        <img className='h-6' src="/vercel.svg" alt="" />
                        <span>company name</span>
                    </div>
                    {/* mobile menu button  */}
                    <div className='flex lg:hidden'>
                        <button onClick={() => { setOpenMobile(true) }}>
                            <Bars3Icon className='h-6' />
                        </button>
                    </div>
                    {/* list of menus  */}
                    <div className='hidden lg:flex'>
                        <ul className='flex space-x-4'>
                            {
                                listMenuItems.map((menu) => (
                                    <li><a href={menu.href}>{menu.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* login or sign up  */}
                    <div className='hidden lg:flex lg:flex-1 justify-end'>
                        <button className='border border-teal-500 rounded-lg px-3 py-1'>
                            Login / Singup
                        </button>
                    </div>
                </nav>
                <Dialog className="flex lg:hidden" open={openMobile} onClose={setOpenMobile}>
                    <Dialog.Panel className="fixed inset-y-0 w-full bg-white">
                        <div>
                            {/* company name and logo */}
                            <div className='flex justify-between px-6 py-6'>
                                <div className="flex space-x-3 lg:flex-1">
                                    <img className='h-6' src="/vercel.svg" alt="" />
                                    <span>company name</span>
                                </div>
                                <button onClick={() => { setOpenMobile(false) }}>
                                    <XMarkIcon className='h-6' />
                                </button>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}

export default Navbar