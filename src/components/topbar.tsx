
import { Phone } from 'lucide-react';
import React from 'react';
import { BsEnvelope, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import SociaIcons from './sociaIcons';

export default function Topbar() {
  return (
    <nav className="hidden xl:flex px-5 py-3 bg-[#252b42]">
      <div className="flex flex-row px-6 items-center justify-between w-full text-white">

        {/* Contact Info */}
        <div className="flex gap-10 font-bold">
        <div className="flex items-center gap-1">
        <Phone className='w-4 h-4' />
        <a href="tel:+923194051374" className="">(92) 319 4051-374</a>
        </div>
        <div className="flex items-center gap-1">
        <BsEnvelope className="" />
        <a href="mailto:humairaosama6@gmail.com" className="">humairaosama6@gmail.com</a>
        </div>
        </div>
        <div className="font-semibold">
            <p className="">Follow Us  and get a chance to win 80% off</p>
        </div>

        {/* Socail icons */}
        <div className="flex items-center gap-3">
            <h2 className='font-semibold'>Follow Us :</h2>
           <SociaIcons/>
      
        </div>
      </div>
    </nav>


  )
}

