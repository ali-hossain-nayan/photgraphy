import heroImg from '../../assets/heroImg.jpg'
const Home = () => {
  return (
    <div className='flex mt-32 justify-center '>
      <div>
        <img src={heroImg} alt="" width={600}
          className='rounded-lg'
        />
      </div>
      <div>
        <h1 className='ml-12 font-bold mt-20 lg:text-4xl md:text-2xl sm:text-lg '>The <br /> <span className='text-[#137548]'>Photography</span></h1>
        <p className='lg:text-2xl md:text-xl sm:text-lg mt-4 ml-8 '>"
          Photography is the story
          I fail to put into words</p>
      </div>
    </div>
  )
}

export default Home