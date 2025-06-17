import React from 'react';
import Hero from '../components/common/Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const events = [
  {
    title: '💼 Salons 100% Femmes',
    description:
      'Nous avons participé à plusieurs salons dédiés aux femmes, où nous avons tenu des stands de vente de boxs cadeaux et de sachets de bonbons pour la fête de l’aïd. Ces moments de partage ont permis de récolter des fonds pour financer nos actions.',
    image: `${import.meta.env.BASE_URL}images/salon3.PNG`,
  },
  {
    title: '🌍 Notre Salon 100% Femmes – 28 octobre 2023',
    description:
      'En octobre 2023, nous avons organisé notre propre salon 100% femmes : un événement fort, dédié à la solidarité féminine, à la sororité et à la générosité. L’intégralité des fonds récoltés lors de ce salon a été destinée à soutenir un orphelinat en Palestine, en apportant une aide concrète aux enfants et à leur éducation.',
    image: `${import.meta.env.BASE_URL}images/salon.PNG`,
  },
  {
    title: '🍽 Vente de Brunchs Solidaires',
    description:
      'Parce que la solidarité passe aussi par les plaisirs simples, nous avons lancé une vente de brunchs, alliant gourmandise et engagement. Les bénéfices ont été reversés à nos projets éducatifs et humanitaires.',
    image: `${import.meta.env.BASE_URL}images/brunch1.png`,
  },
];

const extraBlock = {
  title: '📣 Pourquoi participer à nos événements ?',
  description:
    'En prenant part à nos événements ou en achetant nos produits solidaires, vous devenez acteur du changement. Ensemble, nous soutenons des causes essentielles, comme l’accès à l’éducation, la dignité en hiver, ou encore le développement de projets dans des zones touchées par des crises humanitaires.',
};

const NosEvenements: React.FC = () => {
  return (
    <>
      <Hero
        title="Nos Événements"
        subtitle="Découvrez nos actions solidaires"
        backgroundColor="#2e8b57"
      />

      <div className="container mx-auto px-4 pt-16 pb-16 max-w-4xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          className="pb-12"
        >
          {events.map(({ title, description, image }, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 object-contain rounded-md mb-4"
                />
                <h2 className="text-2xl font-semibold text-yellow-600 mb-4">{title}</h2>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bloc séparé : Pourquoi participer */}
        <div className="mt-20 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">{extraBlock.title}</h2>
          <p className="text-gray-700 leading-relaxed">{extraBlock.description}</p>
        </div>

        <p className="mt-12 text-gray-700 font-medium text-center">
          📅 Rendez-vous dans notre rubrique “Actualités” pour connaître les prochaines dates d’événements !
        </p>
      </div>

      {/* Custom bullet styles */}
      <style>{`
        .custom-bullet {
          width: 16px;
          height: 16px;
          background-color: #a7d7a7;
          opacity: 1 !important;
          border-radius: 50%;
          margin: 0 6px !important;
          cursor: pointer;
          display: inline-block;
          transition: background-color 0.3s ease;
          border: 2px solid #a7d7a7;
        }
        .custom-bullet-active {
          background-color: #2e8b57 !important;
          border-color:rgb(12, 79, 41) !important;
        }
      `}</style>
    </>
  );
};

export default NosEvenements;