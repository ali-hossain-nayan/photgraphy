

import proj1 from '../../assets/project1.jpg'
import proj2 from '../../assets/project2.jpg'
import proj3 from '../../assets/project3.jpg'
import proj4 from '../../assets/project4.jpg'
import proj5 from '../../assets/project5.jpg'
import proj6 from '../../assets/project6.jpg'
import proj7 from '../../assets/project7.jpg'
import proj8 from '../../assets/project8.jpg'
const Gallery = () => {
    return (
        <div className='mt-32'>
            <div className=''>
                <h1 className='text-5xl md:text-4xl lg:2xl font-bold '>The <span className='text-[#137548]'>Gallery</span> </h1>
                <p className='mt-4'>These are our most recent works. We use tools of documentary reportage,
                    portraiture, fashion photography and filmmaking</p>
            </div>
            <div className='flex mt-8 justify-center items-center flex-wrap '>
                <img className='ml-4 rounded-lg ' src={proj1} alt="" width={180} />
                <img className='ml-4 rounded-lg' src={proj2} alt="" width={180} />
                <img className='ml-4 rounded-lg' src={proj3} alt="" width={180} />
                <img className='ml-4 rounded-lg' src={proj4} alt="" width={180} />
                <img className='ml-4 rounded-lg' src={proj5} alt="" width={180} />
                <img className='ml-4 rounded-lg' src={proj6} alt="" width={180} />
                <img className='ml-4 rounded-lg' src={proj7} alt="" width={180} />
                <img className='ml-4 rounded-lg mt-2' src={proj8} alt="" width={180} />
            </div>
        </div>
    )
}

export default Gallery