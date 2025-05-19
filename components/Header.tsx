"use client"
import Link from "next/link";
import { Menu, X, LogIn, House } from 'lucide-react';
import { useState } from "react";

export default function Header() {
    const [menuOpened, setMenuOpened] = useState(false)
    
    return (
        <header className="relative ">
            <div className="flex justify-between">
                <h1 className="text-2xl md:text-3xl font-bold text-green-700 flex gap-1 items-center justify-center"> < House size={36}/> WohnFinden </h1>

                {/**Desktop */}
                <nav className='hidden md:flex items-center justify-center'>
                    <ul>
                        <li className="flex gap-4 text-lg ">
                            <Link  href="/">Anmelden</Link>
                            <Link href="/">Registrieren</Link>
                            <Link href="/">Kontakt</Link>
                            <Link href="/">Über Uns</Link>
                        </li>
                    </ul>
                </nav>
                
                {/**Mobile */}
                {menuOpened ?
                    <MobileNav closeFn={() => setMenuOpened(!menuOpened)} />
                    :  <Menu className="md:hidden block cursor-pointer" onClick={() => setMenuOpened(!menuOpened)} />}
            </div>
        </header>
    )
}



function MobileNav(props: {closeFn: () => void}) {
  return (
    <>
    <nav className=' z-10 absolute end-0 '>
        <div className=" flex justify-end">
            <X className=" cursor-pointer" onClick={props.closeFn}/>
        </div>
        <ul>
            <li className="flex flex-col space-y-3 mt-2 p-4">
                <Link href="/">Anmelden</Link>
                <Link href="/">Registrieren</Link>
                <Link href="/">Kontakt</Link>
                <Link href="/">Über Uns</Link>
            </li>
        </ul>
    </nav>

    </>
  )
}
