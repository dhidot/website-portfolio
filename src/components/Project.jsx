import ProjectItem from "./ProjectItem";
import redesmaImg from '../assets/redesma.png';

const Project = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className="mb-10 text-4xl font-bold text-center text-[#001b5e]">This Is My Projects</h1>
            <p className="text-center py-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero numquam nisi possimus vero? Quisquam accusantium at saepe autem dicta possimus quasi quibusdam delectus, eos quo cumque, illo eligendi modi odit!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={redesmaImg} title="Redesma Daily"/>
                <ProjectItem img={redesmaImg} title="Redesma Daily"/>
                <ProjectItem img={redesmaImg} title="Redesma Daily"/>
                <ProjectItem img={redesmaImg} title="Redesma Daily"/>
            </div>   
        </div>
    )   
}

export default Project;