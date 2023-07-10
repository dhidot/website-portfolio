import WorkItem from './WorkItem';
import data from '../data/work';

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='mb-10 text-4xl font-bold text-center text-[#001b5e]'>Work Experience</h1>
            {data.map((item, index) => (
                <WorkItem 
                key={index} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                detail={item.detail} />    
            ))}
        </div>
    )
}

export default Work;