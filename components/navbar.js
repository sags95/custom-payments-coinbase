
import { ShoppingBagIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline'


import Link from 'next/link';

export default function Navbar() {

    return (
        <header aria-label="Site Header" className="border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
                <button type="button" className="p-2 lg:hidden">
                    <Bars3Icon className='h-4 w-4' />
                </button>

                <Link href="#" className="flex">
                    <span className="sr-only">Logo</span>
                    <h1>Coffee Shop</h1>
                </Link>
            </div>

            <div className="flex flex-1 items-center justify-end gap-8">
                <nav
                    aria-label="Site Nav"
                    className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
                >
                    <Link
                        href="/products"
                        className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                    >
                        Coffees
                    </Link>
                    <Link
                        href="/products"
                        className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                    >
                        Brewing Equipment
                    </Link>
                    <Link
                        href="/products"
                        className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                    >
                        Accessories
                    </Link>

                    <Link
                        href="/contact"
                        className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                    >
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center divide-x divide-gray-100">
                    <span className="border-r border-gray-100 border-l">
                        <Link href="/cart" className="block border-b-4 border-transparent p-6 hover:border-red-700">
                            <ShoppingBagIcon className="h-4 w-4" />
                            <span className="sr-only">Cart</span>
                        </Link>
                    </span>

                    <span className="border-r border-gray-100">
                        <Link href="/account" className="block border-b-4 border-transparent p-6 hover:border-red-700">
                            <UserIcon className='h-4 w-4' />
                            <span className="sr-only"> Account </span>
                        </Link>
                    </span>

                    <span className="hidden sm:block">
                        <div className='border-r border-gray-100'>
                        <Link href="/search" className="block border-b-4 border-transparent p-6 hover:border-red-700">
                            <MagnifyingGlassIcon className='h-4 w-4' />
                            <span className="sr-only"> Search </span>
                        </Link>
                        </div>
                    
                    </span>
                </div>
            </div>
        </div>
    </header>

    )
}