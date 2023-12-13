import Image from 'next/image';

import { HiArrowDown } from "react-icons/hi";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { BiLogoXing } from "react-icons/bi";
import rectangle from "@/assets/rectangle.svg";
import portrait from "@/assets/portrait.jpg";

const HeroSection = () => {
    return (
        <section id="home" className="text-center py-16 sm:py-32 lg:py-48">
            <div className="flex flex-col items-center justify-center animate-fadeIn animation-delay-2 my-10 lg:flex-row lg:justify-center lg:space-x-10">
                <div className="lg:mt-0 lg:w-2/5 flex justify-center lg:justify-end">
                    <Image
                        src={portrait}
                        alt="Maxwell Aboagye"
                        width={325}
                        height={325}
                        className="rounded-full shadow-2xl"
                    />
                </div>
                <div className="flex flex-col items-center lg:items-start lg:w-3/5">
                    <div className="flex flex-col items-center lg:flex-row lg:items-center gap-3">
                        <h1 className="text-5xl font-bold">Maxwell Aboagye</h1>
                        <Image src={rectangle} alt="underline" />
                    </div>
                    <p className="text-lg mt-4 mb-6 lg:text-2xl">
                        I&#39;m a <span className="font-semibold text-yellow-400">Software Developer</span> based in Hamburg, Germany.
                    </p>
                    <div className='flex justify-center lg:justify-start gap-4 w-full lg:w-auto'>
                        <a href="" rel="noreferrer" target="_blank">
                            <AiOutlineGithub
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                size={30}
                            />
                        </a>
                        <a href="" rel="noreferrer" target="_blank">
                            <AiOutlineLinkedin
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                size={30}
                            />
                        </a>
                        <a href="" rel="noreferrer" target="_blank">
                            <BiLogoXing
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                size={30}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Link href={"#about"}>
                    <HiArrowDown size={30} className="animate-bounce"/>
                </Link>
            </div>
        </section>
    )
}

export default HeroSection;
