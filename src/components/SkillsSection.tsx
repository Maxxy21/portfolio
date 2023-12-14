import Image from 'next/image';
import wavy_underline from '@/assets/wavy_underline.svg';


interface Skill {
    area: string;
    items: string[];
}

const skills: Skill[] = [
    {area: 'Front-End Mobile', items: ['Flutter', 'React Native']},
    {
        area: 'Front-End Web',
        items: [
            'HTML & CSS',
            'Javascript',
            'React.js',
            'NextJS',
            'Astro',
            'Tailwind',
            'Bootstrap',
        ],
    },
    {area: 'CMS', items: ['Wordpress', 'Sanity.io']},
    {
        area: 'Back-End',
        items: ['NestJS', 'Firebase', 'Express.Js', 'TypeScript'],
    },
    {area: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite']},
    {area: 'Version Control', items: ['Git']},
];

const SkillsSection = () => {
    return (
        <section id="skills" className="p-6 h-screen flex flex-col justify-around mt-52 mb-48 md:my-0">
            <h2 className="text-center text-4xl w-full">
                <p className="text-[#FBC603] font-bold">Work Hard.</p>
                <p>Play Hard</p>
            </h2>

            <div className="flex flex-col justify-center my-12 md:px-24">
                <div className="flex flex-col justify-center items-center mb-6">
                    <p className="text-lg">Skills</p>
                    <Image
                        src={wavy_underline}
                        alt="wavy underline"
                    />
                </div>

                <div className="mt-6 md:mt-0">
                    {skills.map((skill, index) => (
                        <div key={index}
                             className='flex flex-col md:flex-row w-full my-3 md:justify-between items-center'>
                            <h2 className="font-bold text-md">{skill.area}</h2>
                            <span className='flex flex-col md:flex-row items-center md:gap-2'>
            {skill.items.map((item, itemIndex) => (
                <p key={itemIndex}
                   className="transition text-gray-400 font-bold hover:text-sky-600 ease-linear duration-300">
                    {item}
                </p>
            ))}
    </span>
                        </div>
                    ))}
                </div>

                <button className="btn bg-blue-500 p-3 w-[85%] md:w-48 self-center mt-6 transition hover:bg-blue-400 ease-in duration-300">
                    View Resume
                </button>
                {/*<a*/}
                {/*    className="bg-violet-500 rounded-lg text-white font-bold text-center p-3 w-[85%] md:w-48 self-center mt-6 transition hover:bg-violet-400 ease-in duration-300"*/}
                {/*    href=""*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    View Resume*/}
                {/*</a>*/}
            </div>
        </section>
    );
};

export default SkillsSection;
