import React from "react";

const AboutSection = () => {
    return (
        <section id="about" className='flex flex-col items-center justify-center min-h-screen mb-12'>
            <div className='flex flex-col gap-6 max-w-prose px-4'>
                <h2 className='text-center font-bold text-3xl md:text-5xl mt-10 mb-4'>
                    About Me
                    <hr className="w-6 h-1 bg-[#FBC603] border-0 rounded mx-auto my-4"/>
                </h2>
                <p className='text-xl text-gray-500'>
                    Dedicated Software Developer experienced in JavaScript and TypeScript,
                    passionate about creating innovative solutions through code.
                </p>
                <p className='text-xl text-gray-500'>
                    From designing user-friendly interfaces to optimizing performance, I
                    collaborate with cross-functional teams to deliver high-quality,
                    scalable software applications that exceed user expectations.
                </p>
                <p className='text-xl text-gray-500'>
                    An Organized person, always comfortable learning new things, always
                    practicing, a problem solver. Gamer. Football, NBA and F1 fan.
                </p>
            </div>
        </section>
    )
}

export default AboutSection;
