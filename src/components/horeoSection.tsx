import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative overflow-visible">

            {/* image */}
            <Image  alt="hero image" src="/girl.jpg" width={1540} height={716} className="w-full overflow-visible h-auto" />
            <div className="absolute  sm:inset-0 flex flex-col justify-center items-start p-4 lg:space-y-8 lg:p-40">
                <p className=" sm:text-white text-[8px] lg:text-lg">SUMMER 2020</p>
                <p className="leading-tight sm:text-white text-2xl lg:text-6xl  font-bold">NEW COLLECTION</p>
                <p className="leading-snug sm:text-white text-base lg:text-lg lg:w-[320px]">We know how large objects will act, but things on a small scale.</p>
                <button className="mt-4 lg:mt-6 lg:w-[228px] lg:h-[62px] bg-[#2dc070] text-white font-bold rounded-sm py-2 px-4 text-sm lg:text-base">SHOP NOW</button>
            </div>
        </div>
    );
}