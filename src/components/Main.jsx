import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img src="batman.jpg" className='h-screen w-full object-cover scale-x-[-1]' />
            <div className='h-screen w-full absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I am Dhito</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I am a 
                        <TypeAnimation sequence={[
                            'Final year Informatics Student', 1000,
                            'Data Enthusiast', 1000,
                        ]}
                        wrapper="div"
                        cursor={true}
                        style={{ fontSize: '1em', paddingLeft: '5px'}}
                        repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href='https://www.instagram.com/dhitochan/' target='blank'><FaInstagram className='cursor-pointer' size={20}/></a>
                        <a href='https://www.linkedin.com/in/dhitochan' target='blank'><FaLinkedin className='cursor-pointer' size={20}/></a>
                        <a href='https://github.com/dhidot' target='blank'><FaGithub className='cursor-pointer' size={20}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
