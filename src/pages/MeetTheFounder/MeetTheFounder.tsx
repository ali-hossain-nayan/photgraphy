import pic1 from '../../assets/Founder.jpg';

const MeetTheFounder = () => {
  return (
    <section className="px-4 py-10 md:py-16">
      {/* About Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          About <span className="text-[#137548]">Founder</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-gray-700">
          Ali is a Bangladeshi photographer, based in Dhaka. Ali creates
          "large-scale Bangladeshi projects" featuring Dhanmondi, Dhaka. BBC art
          critic Hilarie M. Sheets wrote that he has made a "photographic career
          out of finding chemistry with strangers and photographs loners and dreamers."
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        <div className="flex justify-center">
          <img
            // className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 justify-center"
            src={pic1}
            alt="Founder 1"
            width={1000}
          />
        </div>
       
      </div>
    </section>
  );
};

export default MeetTheFounder;
