import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

interface SocialIcon {
  icon: JSX.Element;
  href: string;
}

const socialIcons: SocialIcon[] = [
  {
    icon: <FaInstagram />,
    href: 'https://instagram.com',
  },
  {
    icon: <FaYoutube />,
    href: 'https://youtube.com/',
  },
  {
    icon: <FaFacebook />,
    href: 'https://facebook.com',
  },
  {
    icon: <BsTwitter />,
    href: 'https://twitter.com',
  },
];

export default function SociaIcons() {
  return (
      <div className="flex gap-4 ">
      {socialIcons.map((icon, index) => (
        <a className='hover:text-primary'
          key={index}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon.icon}
        </a>
      ))}
    </div>
  )
}



