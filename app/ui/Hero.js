'use client'

export default function Hero() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu(); // Close the menu after navigation
    }
  };
  return (
    <section
      className="hero2 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.5) 80%), url('/Leonardo_Kino_XL_group_of_doctors_smiling_3.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundPosition: "10% 90%",
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.8)',
      }}
    >
      <div className="max-w-screen-xl flex flex-col mx-auto container text-white pt-48 pl-10 p-8 pb-36">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6">
          <h1
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
            className="lg:w-3/4 text-4xl lg:text-5xl space-y-2 font-bold"
          >
            <span className="block lg:inline-block">
              Transforming Healthcare,
            </span>
            <span className="md:block lg:inline-block">Empowering Lives</span>
          </h1>

          <p
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            className="lg:w-1/2 text-lg"
          >
            Transforming lives with innovative and digital health solutions. Your health, our priority.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="flex justify-center lg:justify-start space-x-4"
          >
            <a href="#services" onClick={(e) => handleScroll(e, "services")} >
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
              Learn more
            </button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
