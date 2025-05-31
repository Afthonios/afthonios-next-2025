'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Virtual, Autoplay } from 'swiper/modules';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const slides = [
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206794/Formation_Stimuler_vos_points_d_acupuncture_anti-stress_f7napn.png",
    text: "Stimuler vos points d’acupuncture anti-stress"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206725/Formation_Prevenir_l_escalade_d_un_conflit_kiidtr.png",
    text: "Prévenir l’escalade d’un conflit"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206719/Formation_Preparez-vous_a_affronter_et_resoudre_un_conflit_en_5_questions_cles_cqaqlc.png",
    text: "Préparez-vous à affronter et résoudre un conflit en 5 questions clés"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206686/Formation_Ouvrir_ses_perceptions_et_ses_croyances_pour_faciliter_le_changement_kzxiok.png",
    text: "Ouvrir ses perceptions et ses croyances pour faciliter le changement"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206621/Formation_Les_voleurs_de_temps_-_les_identifier_et_les_chasser_oqoonp.png",
    text: "Les voleurs de temps : les identifier et les chasser"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206598/Formation_Les_questions_indispensables_pour_gerer_un_conflit_efficacement_pyahi3.png",
    text: "Les questions indispensables pour gérer un conflit efficacement"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206542/Formation_Les_5_obstacles_a_l_inclusion_-_comment_les_surmonter_dw6uuj.png",
    text: "Les 5 obstacles à l’inclusion : comment les surmonter"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206521/Formation_Les_3_sources_d_influence_des_emotions_retrouver_une_energie_positive_aks9oa.png",
    text: "Les 3 sources d’influence des émotions : retrouver une énergie positive"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206510/Formation_Le_Personal_Branding_valorisez_votre_image_professionnelle_k2pgo8.png",
    text: "Le Personal Branding : valorisez votre image professionnelle"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206489/Formation_Lacher_prise_pour_mieux_avancer_cooperer_et_se_detendre_wbi1cg.png",
    text: "Lâcher prise pour mieux avancer, coopérer et se détendre"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206474/Formation_La_power_posture_-_une_arme_secrete_pour_retrouver_une_energie_positive_vybokt.png",
    text: "La power posture : une arme secrète pour retrouver une énergie positive"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206385/Formation_Eviter_le_Covering_au_travail_pour_plus_d_inclusion_xkbnbf.png",
    text: "Éviter le covering au travail pour plus d’inclusion"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206304/Formation_Deployez_vos_objectifs_avec_le_GROW_model_o1udxj.png",
    text: "Déployez vos objectifs avec le modèle GROW"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206301/Formation_Depasser_doutes_et_conflits_internes_a5ca1z.png",
    text: "Dépasser doutes et conflits internes"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206255/Formation_Conduire_le_changement_efficacement_ftpb0s.png",
    text: "Conduire le changement efficacement"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206186/Formation_Ameliorer_sa_qualite_de_vie_au_travail_cesser_d_etre_deborde_gr8w9t.png",
    text: "Améliorer sa qualité de vie au travail : cesser d’être débordé"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206181/Formation_Alliez_equilibre_et_performance_par_une_priorisation_en_toute_sagesse_gg8yi5.png",
    text: "Alliez équilibre et performance par une priorisation en toute sagesse"
  },
  {
    src: "https://res.cloudinary.com/djiqjc1ui/image/upload/v1736206176/Formation_Accompagner_vos_collaborateurs_vers_le_succes_du_changement_lnock8.png",
    text: "Accompagner vos collaborateurs vers le succès du changement"
  },
];

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          {/* Left: Hero Image */}
          <div className="relative w-full h-[50vh] md:h-auto">
            <img
              src="https://res.cloudinary.com/djiqjc1ui/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1748513079/Hero_Nouvelle_Offre_mnauqa.png"
              alt="Femme souriante"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center items-center text-center md:text-left px-6 py-12 md:px-12">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
              Boostez vos équipes avec des modules Soft&nbsp;Skills prêts à l’emploi
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Offrez à vos équipes des ressources Soft Skills prêtes à l’emploi — plus humaines, plus vivantes, plus impactantes.<br />
              250&nbsp;modules SCORM & 350&nbsp;vidéos en cession définitive.<br />
              Aucun abonnement. Zéro contrainte.
            </p>
            <a
              href="#contact"
              className="mt-4 bg-[#C2410C] hover:bg-[#a63109] text-white font-semibold py-3 px-6 rounded shadow transition"
            >
              Demandez une démo
            </a>
          </div>
        </div>
      </section>

{/* Notre nouvelle offre Afthonios Section */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-screen-xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Notre nouvelle offre Afthonios</h2>
    <h3 className="text-lg font-semibold text-center text-gray-700 mb-2">
      Offre à vos équipes de ressources
    </h3>
    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
      Afthonios vous propose une solution complète, concrète et flexible pour développer efficacement les compétences de vos équipes.
    </p>
    <div className="mx-6 md:mx-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="bg-gray-100 px-6 py-8 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Offre clé-en-main</h3>
          <p className="text-gray-700">Modules SCORM & vidéos intégrables directement sur votre plateforme.</p>
        </div>
        <div className="bg-gray-100 px-6 py-8 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Licence définitive</h3>
          <p className="text-gray-700">Payez une seule fois. Aucun abonnement, aucun frais caché.</p>
        </div>
        <div className="bg-gray-100 px-6 py-8 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Déploiement rapide</h3>
          <p className="text-gray-700">Intégration en moins d’une semaine dans votre écosystème de formation.</p>
        </div>
        <div className="bg-gray-100 px-6 py-8 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Pour tous les profils</h3>
          <p className="text-gray-700">Entreprise, école, collectivité, organisme de formation : notre solution s’adapte à vous.</p>
        </div>
      </div>
    </div>

      {/* Puzzle Format interactif et engageant Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto text-center mb-12">
          <h2
            id="puzzle-title"
            className="text-4xl font-bold text-gray-900 text-center mb-6"
          >
            Un format interactif et engageant
          </h2>
          <h3 className="text-base text-gray-700 mb-6">
            Format court (20 min), idéal pour le micro-learning
          </h3>
        </div>
        {/* Puzzle clustering animation */}
        {(() => {
          const [cluster, setCluster] = useState(false);

          useEffect(() => {
            const handleScroll = () => {
              const scrollTriggerY = 900;
              if (window.scrollY > scrollTriggerY) {
                setCluster(true);
              } else {
                setCluster(false);
              }
            };
            window.addEventListener('scroll', handleScroll);
            // Run once on mount in case already scrolled
            handleScroll();
            return () => window.removeEventListener('scroll', handleScroll);
          }, []);

          return (
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center"
              animate={{}}
              style={{ display: 'flex', gap: `${cluster ? 4 : 32}px` }}
              transition={{ type: 'spring', stiffness: 50, damping: 14 }}
            >
              {[
                {
                  file: "puzzle-video-expert.svg",
                  label: "VIDÉO EXPERT DE COACH (3-10 MIN)",
                  textColor: "text-[#C2410C]",    // deep orange
                  rotation: "rotate-0"
                },
                {
                  file: "puzzle-storytelling.svg",
                  label: "VIDÉO/AUDIO EN MODE STORYTELLING (2-3 MIN)",
                  textColor: "text-[#A63D00]",    // burnt orange
                  rotation: "-rotate-90"
                },
                {
                  file: "puzzle-quiz-fiches.svg",
                  label: "QUIZ, FICHES PRATIQUES, AUTO-DIAGNOSTICS",
                  textColor: "text-[#D35400]",    // bright orange
                  rotation: "rotate-180"
                },
                {
                  file: "puzzle-articles.svg",
                  label: "ARTICLES, BONNES PRATIQUES, MÉMOS-COACHING",
                  textColor: "text-[#DB642C]",    // tomato orange
                  rotation: "rotate-90"
                },
                {
                  file: "puzzle-bonus-ted.svg",
                  label: "BONUS (TED TALKS, CITATIONS…)",
                  textColor: "text-[#E74C3C]",    // vivid red-orange
                  rotation: "rotate-0"
                },
              ].map((item, index) => (
                <PuzzleItem key={index} item={item} index={index} cluster={cluster} />
              ))}
            </motion.div>
          );
        })()}
      </section>
      {/* Pourquoi choisir Afthonios Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left items-center md:items-start">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pourquoi choisir Afthonios&nbsp;?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Nos formations Soft Skills ont été conçues pour transformer les pratiques managériales avec plus
              d’humanité, d’efficacité et d’intelligence relationnelle.
            </p>
            <p className="text-lg text-gray-700">
              Nous proposons un catalogue riche de 250 modules SCORM, 350 vidéos, et des contenus prêts à l'emploi
              que vos équipes peuvent intégrer immédiatement dans leur quotidien professionnel.
            </p>
          </div>
          <PourquoiCarouselA />
        </div>
      </section>
  </div>
</section>

      {/* 8 Thématiques Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">8 thématiques clés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(() => {
              const links = [
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=3",  // Assertivité et Courage
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=4",  // Efficacité Personnelle et Professionnelle
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=6",  // Collaboration et Travail en Équipe
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=8",  // Agilité et Changement
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=10", // Communication et Relations
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=12", // Management et Leadership
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=14", // Énergie Positive et Bien-être
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=17", // Diversité et Inclusion (corrected)
              ];
              return [
                "Assertivité et Courage",
                "Efficacité Personnelle et Professionnelle",
                "Collaboration et Travail en Équipe",
                "Agilité et Changement",
                "Communication et Relations",
                "Management et Leadership",
                "Énergie Positive et Bien-être",
                "Diversité et Inclusion",
              ].map((theme, index) => (
                <a
                  key={theme}
                  href={links[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="bg-white p-6 h-28 shadow rounded flex items-center justify-center text-center font-semibold text-gray-700 border border-[#C2410C] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-gray-700 text-center">
                      {theme.split(' et ').map((part, idx, array) => (
                        <span key={idx}>
                          {part}
                          {idx < array.length - 1 && <><br />et </>}
                        </span>
                      ))}
                    </h3>
                  </div>
                </a>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Catalogue Slider Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <a
            href="https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-10 bg-[#C2410C] hover:bg-[#a63109] text-white font-semibold py-3 px-8 rounded shadow transition"
          >
            Voir le catalogue
          </a>
          <div className="w-full max-w-screen-xl mx-auto flex justify-center items-center px-4">
            <Swiper
              modules={[Virtual, Autoplay]}
              virtual
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              breakpoints={{
                0:    { slidesPerView: 1, spaceBetween: 12, centeredSlides: true },
                480:  { slidesPerView: 1.15, spaceBetween: 16, centeredSlides: true },
                640:  { slidesPerView: 2, spaceBetween: 12, centeredSlides: true },
                768:  { slidesPerView: 2.5, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 28 },
                1280: { slidesPerView: 5, spaceBetween: 32 },
              }}
              className="w-full"
            >
              {slides.map((item, idx) => (
                <SwiperSlide key={idx} virtualIndex={idx}>
                  <div className="flex flex-col bg-white rounded-lg shadow-md px-2 pt-2 pb-1 items-center text-center w-[240px] sm:w-[220px] mx-auto h-[260px]">
                    <img
                      src={item.src.replace('/upload/', '/upload/f_auto,q_auto,w_300,dpr_auto/')}
                      alt={item.text}
                      loading={idx < 5 ? 'eager' : 'lazy'}
                      className="w-full h-32 object-contain mt-1"
                    />
                    <p className="text-gray-800 font-semibold text-[0.95rem] leading-snug px-4 pt-1 mt-4 line-clamp-4">
                      {item.text.replace(/\s:/g, '\u00a0:')}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Ce que vous obtiendrez Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ce que vous obtiendrez <br className="md:hidden" /> concrètement
          </h2>

          <div className="flex items-center justify-center mb-6 text-gray-800 font-semibold text-lg">
            <span className="mr-2 text-2xl">📦</span> Ce que vous recevez
          </div>

          <div className="bg-gray-50 shadow-lg rounded-xl p-8 text-left text-gray-900">
            <ul className="list-disc pl-5 space-y-3 text-gray-800 text-[1.1rem] leading-relaxed">
              <li>250 modules SCORM clés en main (quiz, ressources&nbsp;…)</li>
              <li>350 micro-vidéos en français et anglais</li>
              <li>Accès illimité, sans date de fin</li>
              <li>Guide d’intégration et support léger si besoin</li>
              <li>Droit de diffusion interne sur votre LMS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-12 px-6 bg-gray-50 mb-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ils nous ont fait confiance</h2>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            className="w-full"
          >
            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-left max-w-4xl mx-auto">
                <img
                  src="https://res.cloudinary.com/djiqjc1ui/image/upload/f_auto,q_auto,w_160,dpr_auto/v1748607227/djamila-chekhar_y63kic.jpg"
                  alt="Djamila Chekhar"
                  className="w-28 h-28 rounded-full object-cover"
                />
                <div className="border-l-2 pl-6 border-gray-200">
                  <p className="italic text-lg text-gray-800 mb-4">
                    Les vidéos Afthonios sont très bien pensées. <strong>Synthétiques</strong>, elles abordent avec simplicité des sujets-clé des soft-skills et du management. 
                    Nous les avons utilisées dans le cadre de <strong>parcours de formation</strong> pour des <strong>managers opérationnels</strong> en français et en anglais ainsi que pour des <strong>séminaires de CODIR</strong> ; elles ont été très appréciées.
                  </p>
                  <p className="font-semibold text-gray-900">
                    — <span className="italic">Djamila Chekhar, Change Management, Alternatives Conseil</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-left max-w-4xl mx-auto">
                <img
                  src="https://res.cloudinary.com/djiqjc1ui/image/upload/f_auto,q_auto,w_160,dpr_auto/v1748607231/valerie-lantran_xsdokm.jpg"
                  alt="Valérie Lantran"
                  className="w-28 h-28 rounded-full object-cover"
                />
                <div className="border-l-2 pl-6 border-gray-200">
                  <p className="italic text-lg text-gray-800 mb-4">
                    Depuis 5 ans, nous faisons appel à Afthonios pour son expertise et la qualité de ses contenus.
                    Leur <strong>écoute proactive</strong> et leurs <strong>conseils avisés</strong> dans le choix des contenus nous sont précieux.
                    Des <strong>contenus qualitatifs et explicites</strong> tant sur le fond que sur la forme.
                    Un coup de cœur pour le tout nouveau format de vidéos, à mi-chemin entre le <strong>podcast et la vidéo</strong>.
                    Avec Afthonios, je suis 100 % en confiance.
                  </p>
                  <p className="font-semibold text-gray-900">
                    — <span className="italic">Valérie Lantran, Responsable Formation, Air Liquide</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Logos Swiper Section */}
      <section className="pt-8 pb-12 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto flex justify-center">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0:     { slidesPerView: 1,   spaceBetween: 12 },
              480:   { slidesPerView: 1.5, spaceBetween: 16 },
              768:   { slidesPerView: 2,   spaceBetween: 20 },
              1024:  { slidesPerView: 3,   spaceBetween: 24 },
              1280:  { slidesPerView: 4,   spaceBetween: 32 },
            }}
            className="w-full max-w-4xl"
          >
            {[
              "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748608737/credit-agricole-logo_kgqvj1.svg",
              "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748608736/air-liquide-3_w3knmb.svg",
              "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748608736/air-france-logo-1_ivn08c.svg",
              "https://res.cloudinary.com/djiqjc1ui/image/upload/v1748608735/Logo_M%C3%A9tropole_Lyon_-_2022_riho8n.svg",
            ].map((logo, idx) => (
              <SwiperSlide key={idx} className="flex justify-center items-center w-full">
                <div className="w-full sm:w-48 h-24 sm:h-28 flex items-center justify-center bg-gray-50">
                  <img
                    src={logo.replace('/upload/', '/upload/f_auto,q_auto,w_300,dpr_auto/')}
                    alt={`Logo ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Tarification Section */}
      <section className="py-20 px-6 bg-rose-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Tarification simple et transparente</h2>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Des contenus premium à un tarif accessible, sans abonnement, sans renouvellement.
          </p>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            Nos tarifs sont pensés pour refléter la valeur pédagogique et humaine de ces contenus tout en respectant les réalités économiques de chaque structure.
          </p>
          <div className="max-w-screen-lg mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Entreprises & Collectivités",
                  price: "Entre 8.000 € et 35.000 €",
                  description: "selon la taille de l’organisation et le mode d’intégration",
                  icon: "🏢",
                },
                {
                  title: "Universités & Écoles",
                  price: "Entre 5.000 € et 15.000 €",
                  description: "selon la taille de l’établissement et les usages pédagogiques",
                  icon: "🎓",
                },
                {
                  title: "Organismes de Formation",
                  price: "Entre 5.000 € et 50.000 €",
                  description: "selon l’ampleur de l’exploitation et le volume de diffusion",
                  icon: "📚",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm text-gray-500 mb-1">Tarif indicatif</p>
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-900 font-medium mb-2">{card.price}</p>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-8 flex items-center justify-center gap-1">
            <span>💬</span> Chaque projet est unique. Nous prenons le temps d’ajuster nos propositions à vos besoins réels et à votre réalité de terrain.
          </p>
        </div>
      </section>
      {/* Testez notre pédagogie Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
            Testez gratuitement notre pédagogie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            {/* Left image: keep sizing as requested */}
            <div className="h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] w-full">
              <img
                src="https://res.cloudinary.com/djiqjc1ui/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1736206471/Formation_La_pensee_positive_-_changer_de_regard_mptaft.png"
                alt="Trois personnes avec des lunettes colorées"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Right: orange block, left-aligned and new spacing */}
            <div className="bg-[#C2410C] h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 gap-4 text-white">
              <div className="flex flex-col justify-center gap-6">
                <img
                  src="https://res.cloudinary.com/djiqjc1ui/image/upload/v1748611820/Orange_RISE_Afthonios_Logo_with_text_glbww1.svg"
                  alt="Afthonios Logo"
                  className="w-32 mb-4"
                />
                <h3 className="text-3xl font-bold leading-tight pt-0 mb-4">
                  La pensée positive&nbsp;: <br />
                  changer de regard
                </h3>
                <a
                  href="https://afthonios.com/wp-content/uploads/uncanny-snc/137/index.html?endpoint=https://afthonios.com/ucTinCan/&auth=LearnDashId2548&course_id=0&actor=%7B%22name%22%3A%20%5B%22Nicolai%20Kalb%22%5D%2C%20%22mbox%22%3A%20%5B%22mailto%3Anicolai.kalb%40afthonios.com%22%5D%7D&activity_id=https://afthonios.com/wp-content/uploads/uncanny-snc/137/index.html&client=AR2017&base_url=https://afthonios.com&nonce=140e322038"
                  className="bg-white text-[#C2410C] font-semibold px-4 py-1 rounded-full inline-block mt-6 w-fit hover:bg-gray-100 transition text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COMMENCER LE MODULE
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-800 text-lg mt-4">
            Améliorez dès aujourd’hui votre regard sur les situations <br />
            avec le module <span className="text-[#C2410C] font-semibold">« La pensée positive »</span>.
          </p>
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <a
              href="https://afthonios.com/wp-content/uploads/uncanny-snc/137/index.html?endpoint=https://afthonios.com/ucTinCan/&auth=LearnDashId2548&course_id=0&actor=%7B%22name%22%3A%20%5B%22Nicolai%20Kalb%22%5D%2C%20%22mbox%22%3A%20%5B%22mailto%3Anicolai.kalb%40afthonios.com%22%5D%7D&activity_id=https://afthonios.com/wp-content/uploads/uncanny-snc/137/index.html&client=AR2017&base_url=https://afthonios.com&nonce=140e322038"
              className="bg-[#C2410C] hover:bg-[#a63109] text-white font-semibold py-3 px-6 rounded shadow transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accès Français
            </a>
            <a
              href="https://afthonios.com/wp-content/uploads/uncanny-snc/669/index.html?endpoint=https://afthonios.com/ucTinCan/&auth=LearnDashId4888&course_id=0&actor=%7B%22name%22%3A%20%5B%22Nicolai%20Kalb%22%5D%2C%20%22mbox%22%3A%20%5B%22mailto%3Anicolai.kalb%40afthonios.com%22%5D%7D&activity_id=https://afthonios.com/wp-content/uploads/uncanny-snc/669/index.html&client=AR2017&base_url=https://afthonios.com&nonce=140e322038"
              className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded shadow transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access English
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Prêt à démarrer&nbsp;?</h2>
          <p className="text-lg text-gray-700 mb-10">
            Contactez-nous pour une démonstration personnalisée ou pour échanger sur vos besoins spécifiques.
          </p>
          <a
            href="#contact"
            className="bg-[#C2410C] hover:bg-[#a63109] text-white font-semibold py-3 px-8 rounded-full inline-block transition shadow-md"
          >
            Contactez-nous maintenant
          </a>
        </div>
      </section>
    </main>
  );
}

function PourquoiCarouselA() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesA = [
    {
      title: "Des contenus conçus par des coaches de terrain",
      desc: "concrets, vivants, proches du réel.",
    },
    {
      title: "Une approche transformative",
      desc: "pensée pour activer des prises de conscience durables.",
    },
    {
      title: "Un ton incarné, humain",
      desc: "loin des avatars, des discours formatés ou impersonnels.",
    },
    {
      title: "Des vidéos courtes, inspirantes et multiformats",
      desc: "parfaites pour les parcours LMS, les séminaires ou l’auto-apprentissage.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-lg">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          className="h-[220px]"
        >
          {slidesA.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white border-l-4 border-[#C2410C] text-gray-900 p-6 rounded flex flex-col justify-center items-start text-left h-full">
                <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                <p className="italic">{slide.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slidesA.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              // Swiper instance is not saved, so cannot programmatically move. This disables manual nav for now.
            }}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? 'bg-[#C2410C]' : 'bg-gray-300'
            }`}
            aria-label={`Aller à la diapositive ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

function PourquoiCarouselB() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created: (slider) => {
        setInterval(() => {
          slider.next();
        }, 4000);
      },
    },
    []
  );

  const slides = [
    {
      title: "Des contenus conçus par des coaches de terrain",
      desc: "concrets, vivants, proches du réel.",
    },
    {
      title: "Une approche transformative",
      desc: "pensée pour activer des prises de conscience durables.",
    },
    {
      title: "Un ton incarné, humain",
      desc: "loin des avatars, des discours formatés ou impersonnels.",
    },
    {
      title: "Des vidéos courtes, inspirantes et multiformats",
      desc: "parfaites pour les parcours LMS, les séminaires ou l’auto-apprentissage.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-lg">
        <div ref={sliderRef} className="keen-slider h-[220px]">
          <div className="keen-slider__slide border-l-4 border-gray-400 bg-white text-gray-800 p-8 rounded-xl flex flex-col justify-center items-start text-left h-full">
            {slides.map((slide, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                <p className="text-base">{slide.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? 'bg-[#C2410C]' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

// PuzzleItem component for puzzle section
function PuzzleItem({
  item,
  index,
  cluster
}: {
  item: { file: string; label: string; textColor: string; rotation: string },
  index: number,
  cluster: boolean
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center w-56 text-center mt-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        x: cluster ? -index * 40 + 80 : 0
      }}
      transition={{ type: 'spring', stiffness: 50, damping: 14 }}
    >
      <div className="w-56 h-60 flex items-center justify-center">
        <img
          src={`/assets/${item.file}`}
          alt={item.label}
          className={`w-full h-auto object-contain transform ${item.rotation}`}
          draggable={false}
        />
      </div>
      {/* Invisible spacer for items 1 and 3 */}
      {[1, 3].includes(index) && <div className="h-4 invisible" />}
      <div className={`px-4 text-[0.85rem] md:text-sm font-semibold leading-snug mt-2 ${item.textColor} min-h-[3.6rem]`}>
        {item.label}
      </div>
    </motion.div>
  );
}