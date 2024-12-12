
import { BiMenuAltRight } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Link from 'next/link';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import { FaRegUser } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";

interface NavigationLink {
  id: number;
  title: string;
  href: string;
}

const navigationLinks: NavigationLink[] = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Shop", href: "/about" },
  { id: 3, title: "About", href: "/about" },
  { id: 4, title: "Blog", href: "/" },
  { id: 5, title: "Contact", href: "/Pricing" },
  { id: 6, title: "Pages", href: "/contact" }
];

export default function Navbar() {
  return (
    <header>
      <div className='flex px-7 xl:px-11 py-7 items-center justify-between '>
        <div className='flex items-center gap-40 '>
          <h1 className="text-xl -mt-2 font-bold md:text-3xl text-[#252b42]
          ">Bandage</h1>
          <div className='hidden lg:flex'>
            <nav className="flex">

                  {/* Navigation Links */}
                  <ul className="flex flex-row gap-5">
                    {navigationLinks.map((link) => (
                      <li className="" key={(link.id)}>
                        <Link href={link.href} className="text-lg text-slate-500 hover:underline">
                          {link.title}
                          {link.title === "Shop" && <RiArrowDropDownLine className="-mt-[26px] ml-11 text-3xl" />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                </div>
        </div>
        <div className="flex gap-4 lg:gap-5 ">
        <div className="text-primary flex gap-4 lg:gap-8 ">
        <div className="hidden lg:flex items-center gap-2">
        <FaRegUser className="hover:text-gray-600"/>
        <a href="/login" className="hover:text-gray-600">Login</a>
        <span className="">/</span>
        <a href="/register" className="hover:text-gray-600">Register</a>
        </div>
          <IoIosSearch className="w-6 h-6 hover:text-gray-600"/>
          <IoCartOutline className="w-6 h-6 hover:text-gray-600"/>
          <GoHeart className="hidden lg:flex w-6 h-6 hover:text-gray-600" />
          </div>
          <div className='xl:hidden '>
            {/* Trigger Button */}
            <Sheet>
              <SheetTrigger asChild>
                <BiMenuAltRight className='w-6 h-6 lg:hover:text-gray-600 -mr-4'/>
              </SheetTrigger>
              {/* Sheet Content */}
              <SheetContent side="top">
                <nav className="flex mt-20 justify-center">
                  {/* Navigation Links */}
                  <ul className="p-8 space-y-8 flex flex-col">
                    {navigationLinks.map((link) => (
                      <li key={(link.id)} className="">
                        <Link href={link.href} className="text-lg text-slate-500 hover:underline">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
    </header>
  )
}

