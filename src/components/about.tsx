import React from "react";

const About = () => {
    return (
        <section id="about" className='flex flex-col items-center justify-center min-h-screen mb-12'>
            <div className='flex flex-col gap-6 max-w-prose px-4'>
                <h2 className='text-center font-bold text-3xl md:text-4xl mt-10 mb-4'>
                    About Me
                    <hr className="w-6 h-1 bg-[#FBC603] border-0 rounded mx-auto my-4"/>
                </h2>
                <p className='text-xl text-gray-500'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                </p>
                <p className='text-xl text-gray-500'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                </p>
                <p className='text-xl text-gray-500'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
        </section>
    )
}

export default About;
