import React from 'react';
import {SlArrowRightCircle} from "react-icons/sl";

const ProjectSection = () => {
    return (
        <section id="projects" className='flex md:h-screen justify-center items-center'>
            <div className='w-full md:w-[50%] grid grid-cols-3 gap-3'>
                <div
                    className='bg-[#5643C1] project-card md:col-span-1'>
                    <p className='text-base md:text-xs'>Flutter, Dart</p>
                    <a
                        className='hover:underline'
                        href=''
                        target='_blank'
                        rel="noopener noreferrer">
                        <p className='text-3xl md:text-2xl'>
                            Readit
                        </p>
                    </a>

                </div>
                <div
                    className='bg-[#F2994A] project-card md:col-span-2 '>
                    <p className='text-base md:text-xs'>Flutter, Dart</p>
                    <a
                        className='hover:underline'
                        href=''
                        target='_blank'
                        rel="noopener noreferrer">
                        <p className='text-3xl md:text-2xl'>
                            See all projects.
                        </p>
                    </a>

                </div>
                <div
                    className='bg-[#80ed98] project-card md:col-span-1'>
                    <p className='text-base md:text-xs'>Flutter, Dart</p>
                    <a
                        className='hover:underline'
                        href=''
                        target='_blank'
                        rel="noopener noreferrer">
                        <p className='text-3xl md:text-2xl'>
                            See all projects.
                        </p>
                    </a>

                </div>
                <div
                    className='bg-[#e63946]  project-card md:col-span-1'>
                    <p className='text-base md:text-xs'>Flutter, Dart</p>
                    <a
                        className='hover:underline'
                        href=''
                        target='_blank'
                        rel="noopener noreferrer">
                        <p className='text-3xl md:text-2xl'>
                            See all projects.
                        </p>
                    </a>

                </div>
                <div
                    className='bg-[#8FCEF8] project-card md:col-span-1'>
                    <p className='text-base md:text-xs'>Flutter, Dart</p>
                    <a
                        className='hover:underline'
                        href=''
                        target='_blank'
                        rel="noopener noreferrer">
                        <p className='text-3xl md:text-2xl'>
                            See all projects.
                        </p>
                    </a>

                </div>
                <div
                    className='bg-[#FBC603] project-card md:col-span-1'>

                    <a
                        className='hover:underline'
                        href=''
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <p className='text-3xl md:text-2xl'>
                            See all projects.
                        </p>

                        <span className='w-full'>
                        <div className='w-12 h-12 md:w-8 md:h-8 mt-4 float-right'>
                           <SlArrowRightCircle
                               className='rounded-full border'
                               size={32}
                           />
                        </div>
                    </span>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default ProjectSection;