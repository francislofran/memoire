"use client"
import React from 'react'
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon={faStarOfLife} />

const Mynav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-gray-950v bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg fixedn w-full z-20 top-0">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Image src="/fati.png" width={64} height={64} alt="logo" />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'text-[#5dc0ed]' : 'text-white '}`}>
                                <FontAwesomeIcon icon={faHome} className="mr-2" /> Accueil
                            </Link>
                            <Link href="/price" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/travaux' ? 'text-[#5dc0ed]' : 'text-white '}`}>
                                <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Nos pLans
                            </Link>
                            <Link href="/apropo" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/apropo' ? 'text-[#5dc0ed]' : 'text-white '}`}>
                                <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" /> À propos

                            </Link>
                        </div>
                    </div>
                    <Link href="/connexion" className='px-4 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-opacity-90 transition duration-300'>
                     Se connecter</Link>


                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className={`px-2 pt-2 pb-3 space-y-1 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <a
                        href="/"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Accueil
                    </a>
                    <a
                        href="/expertise"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Expertise
                    </a>
                    <a
                        href="/travaux"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Travaux
                    </a>
                    <a href="/apropo" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">À propos</a>

                    <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                </div>
            </div>

        </nav>
    )
}

export default Mynav
