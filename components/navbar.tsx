'use client'

import { Dialog } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

const listMenuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Product", href: "#" },
    { name: "Service", href: "#" },
    { name: "Contact", href: "#" },
]

const productList = [
    { iconColor: 'text-teal-500', icon: ArrowPathIcon, title: "Software Development", description: "Get a better understanding of your traffic" },
    { iconColor: 'text-green-500', icon: ChartPieIcon, title: "Web Development", description: "Speak directly to your customers" },
    { iconColor: 'text-blue-500', icon: CursorArrowRaysIcon, title: "Mobile Development", description: "Your customers' data will be safe and secure" },
    { iconColor: 'text-yellow-500', icon: FingerPrintIcon, title: "Deployment Containers", description: "Connect with third-party tools" },
    { iconColor: 'text-purple-500', icon: SquaresPlusIcon, title: "Machine Learning", description: "Build strategic funnels that will convert" },
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

                        <Popover>
                            <ul className='flex space-x-4'>
                                {
                                    listMenuItems.map((menu) => (
                                        <div className=''>
                                            {
                                                menu.name === "Product" ?

                                                    <Popover.Button>
                                                        <li className='hover:text-teal-600 hover:font-semibold'><a href={menu.href}>{menu.name}</a></li>
                                                    </Popover.Button> : <li className='hover:text-teal-600  hover:font-semibold'><a href={menu.href}>{menu.name}</a></li>}
                                        </div>
                                    ))
                                }
                            </ul>
                            <Transition>
                                <Popover.Panel className="absolute">
                                    <div className='bg-white shadow-lg py-4 rounded-lg'>
                                        {
                                            productList.map((product) => (
                                                <div className='flex py-2 space-x-3 p-4  hover:bg-gray-50'>
                                                    <div>
                                                        <product.icon className={`h-5 ${product.iconColor}`} />
                                                    </div>
                                                    <div>
                                                        <h3 className='font-semibold'>{product.title}</h3>
                                                        <p>{product.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
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
                            {/* list of menus  */}
                            <div className='py-10 px-10'>
                                <ul className='space-y-4'>
                                    {
                                        listMenuItems.map((menu) => (
                                            <li className='hover:text-teal-600'><a href={menu.href}>{menu.name}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}

export default Navbar