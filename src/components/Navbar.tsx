"use client"
import Link from 'next/link';
import Image from 'next/image';
import logoWhite from '@/assets/logoWhite.svg';

interface NavItem {
    label: string;
    page: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "About",
        page: "#about",
    },
    {
        label: "Projects",
        page: "#projects",
    },
    {
        label: "Skills",
        page: "#skills",
    },
];

const NavBar = () => {
    return (
        <header id='navbar'
            className='md:px-12 flex flex-col md:flex-row justify-between h-[80px] md:h-[50px] items-center sticky top-0 left-0 right-0 bg-opacity-60 py-3'>
            <div className='flex justify-center items-center'>
                <Link href='/'>
                    <Image
                        src={logoWhite}
                        width={170}
                        height={180}
                        alt='logo'/>
                </Link>
            </div>
            <ul className='flex gap-6'>
                {NAV_ITEMS.map((item) => (
                    <li key={item.label} className='hover:cursor-pointer hover:underline text-sm md:text-base'>
                        <Link href={item.page}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default NavBar;
