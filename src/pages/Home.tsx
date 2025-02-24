import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import heroImg from '../public/heroImg.jpg'
import Header from '../components/Header';
import { academicPrograms, companies, latestArticles, statisticsHomePageData } from '../constants';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import AcademicProgramsCard from '../components/AcademicProgramsCard';

function Home() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with YouTube Video */}
      <section className="relative h-screen hero">
        <img src={heroImg} className='h-screen w-full object-cover brightness-50' />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Shape Your Future with Us</h1>
            <p className="text-xl md:text-2xl mb-8">Discover a world of opportunities at our prestigious institution</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Button
              </button>
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {statisticsHomePageData.map((stat, index) => (
              <div key={index}>
                <stat.icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest News & Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <NewsCard {...article} key={article.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicPrograms.map((program, index) => (
              <AcademicProgramsCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* We Work With */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">We Work With</h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="py-8"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-24">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;