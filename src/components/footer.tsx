import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

interface FooterLink {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

interface SocialIcon {
  icon: JSX.Element;
  href: string;
}

const footerLinks: FooterLink[] = [
  {
    title: 'Company Info',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Carrier', href: '/carrier' },
      { label: 'We are hiring', href: '/we-are-hiring' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Carrier', href: '/carrier' },
      { label: 'We are hiring', href: '/we-are-hiring' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Features',
    links: [
      { label: 'Business Marketing', href: '/business-marketing' },
      { label: 'User Analytics', href: '/user-analytics' },
      { label: 'Live Chat', href: '/live-chat' },
      { label: 'Unlimited Support', href: '/unlimited-support' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'iOS & Android', href: '/ios-android' },
      { label: 'Watch a Demo', href: '/watch-a-demo' },
      { label: 'Customers', href: '/customers' },
      { label: 'API', href: '/api' },
    ],
  },
];

const socialIcons: SocialIcon[] = [
  {
    icon: <FaFacebook />,
    href: "https://facebook.com",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com",
  },
  {
    icon: <FaTwitter />,
    href: "https://twitter.com",
  },
];

export default function Footer() {
    return (
      <footer className="bg-white py-10">
        <div className="max-w-[1440px] mx-auto">

          {/* Top Section */}
          <div className="flex justify-between items-center bg-gray-100 py-10 px-32">

            {/* Logo and Name */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Bandage</h3>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center">
              {socialIcons.map((icon, index) => (
                <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-gray-600 mx-4">
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex justify-between flex-wrap px-32 py-14">
            {footerLinks.map((link, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold text-gray-800 mb-10">{link.title}</h4>
                <ul className="list-none p-0 text-gray-600 leading-6 font-bold space-y-3">
                  {link.links.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-gray-600 hover:text-blue-600">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row">
                <input type="email" placeholder="Your Email" className="p-2 w-full border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring focus:ring-blue-300" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-b-md sm:rounded-l-none sm:rounded-r-md hover:bg-blue-600">
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500 text-center sm:text-left">
                Lore imp sum dolor Amit.
              </p>
            </form>
          </div>
          </div>
          
          {/* Bottom Section */}
          <div className="text-left bg-gray-100 text-gray-600 text-sm font-bold px-32 py-8">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </footer>
    );
  }