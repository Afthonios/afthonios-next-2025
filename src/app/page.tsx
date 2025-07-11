'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Virtual, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';


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

export default function Page() {
  // Contact form state for CTA
  const [showContactForm, setShowContactForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  // const [lastSentAt, setLastSentAt] = useState<number>(0);
  // Add formSubmitted state for success message after submit
  const [formSubmitted, setFormSubmitted] = useState(false);
  // const handleContactSuccess = (message: string) => {
  //   setSuccessMessage(message);
  //   setShowContactForm(false);
  // };
  // Initialize AOS animation on mount (moved here)
  useEffect(() => {
    if (typeof window !== 'undefined' && AOS?.init) {
      AOS.init({
        offset: 300,
        duration: 600,
        easing: 'ease-out',
        once: true,
        mirror: false,
      });
    }
  }, []);
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Left: Hero Image with gradient overlay */}
          <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-auto">
            <img
              src="https://res.cloudinary.com/djiqjc1ui/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1748513079/Hero_Nouvelle_Offre_mnauqa.png"
              alt="Femme souriante"
              className="absolute inset-0 w-full h-[60vh] md:h-[70vh] object-cover object-[25%_top] sm:object-[25%_top] lg:object-center"
            />
            <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,_rgba(255,255,255,0)_50%,_rgba(255,255,255,1)_80%)]"></div>
          </div>

          {/* Right: Text */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 py-12 md:px-8 lg:px-10 md:ml-0 lg:-ml-64">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
              Boostez vos équipes avec des modules Soft&nbsp;Skills prêts à l’emploi
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Offrez à vos équipes des ressources Soft Skills prêtes à l’emploi<br />— plus humaines, plus vivantes, plus impactantes.<br />
              250&nbsp;modules SCORM & 350&nbsp;vidéos en cession définitive.<br />
              Aucun abonnement. Zéro contrainte.
            </p>
            <a
              href="#contact"
              className="btn btn-primary mt-4"
              onClick={(e) => {
                e.preventDefault();
                setShowContactForm(!showContactForm);
                setTimeout(() => {
                  const formElement = document.getElementById('contact-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              Demandez une démo
            </a>
          </div>
        </div>
      </section>

{/* Notre nouvelle offre Afthonios Section */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-screen-xl mx-auto px-4">
    <h2 className="h2 text-center">Notre nouvelle offre Afthonios</h2>
    <h3 className="text-lg font-semibold text-center text-gray-700 mb-2">
      Développez les compétences humaines
    </h3>
    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
      Afthonios vous propose une solution complète, concrète et flexible pour améliorer la performance et le bien-être de toutes vos équipes.
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
        {/* Desktop/tablet puzzle (hidden on mobile) */}
        <div className="hidden sm:block">
          <div className="max-w-screen-xl mx-auto text-center mb-12">
            <h2 id="puzzle-title" className="h2">
              Un format interactif et engageant
            </h2>
            <h3 className="text-base text-gray-700 mb-6">
              Format court (20 min), idéal pour le micro-learning
            </h3>
          </div>
          {/* Puzzle clustering animation */}
          <PuzzleClusterSection />
        </div>
        {/* Mobile puzzle (sm: block, hidden above sm) with pt-28 */}
        <div className="block sm:hidden pt-28">
          <div className="max-w-screen-xl mx-auto text-center mb-12">
            <h2 id="puzzle-title-mobile" className="h2">
              Un format interactif et engageant
            </h2>
            <h3 className="text-base text-gray-700 mb-6">
              Format court (20 min), idéal pour le micro-learning
            </h3>
          </div>
          {/* Puzzle clustering animation (mobile, no cluster) */}
          <div className="flex flex-col items-center justify-center">
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
              <PuzzleItem key={index} item={item} index={index} cluster={false} />
            ))}
          </div>
        </div>
      </section>
      {/* Pourquoi choisir Afthonios Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left items-center md:items-start">
            <h2 className="h2 text-center md:text-left">Pourquoi choisir Afthonios&nbsp;?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Nos formations Soft Skills ont été conçues pour <strong>transformer les pratiques collaboratives</strong> avec plus
              d’humanité, d’efficacité et d’intelligence relationnelle.
            </p>
            <p className="text-lg text-gray-700">
              Nous proposons un <a href="https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf" className="underline text-primary" target="_blank" rel="noopener noreferrer">catalogue</a> riche de 250 modules SCORM, 350 vidéos, et <strong>des contenus prêts à l&apos;emploi</strong> que
              vos équipes peuvent intégrer immédiatement dans leur quotidien professionnel.
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
          <h2 className="h2 text-center">8 thématiques clés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(() => {
              const links = [
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=3",  // Assertivité et Courage
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=5",  // Efficacité Personnelle et Professionnelle
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=7",  // Collaboration et Travail en Équipe
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=10",  // Agilité et Changement
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=13", // Communication et Relations
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=15", // Management et Leadership
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=18", // Énergie Positive et Bien-être
                "https://afthonios.com/wp-content/uploads/2025/05/Catalogue-des-Formations-Soft-Skills-2025-Afthonios.pdf#page=21", // Diversité et Inclusion (corrected)
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
            className="btn btn-primary inline-block mb-10"
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

      {/* Ce que vous recevez Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center pt-12 pb-20">
          <h2 className="h2 text-center mb-6">Ce que vous obtiendrez concrètement</h2>
          <div className="bg-gray-50 shadow-lg rounded-xl p-8 text-left text-gray-900">
            <ul className="list-[square] pl-6 space-y-4 text-gray-800 text-[1.15rem] leading-relaxed marker:text-[#c2410c] marker:text-2xl text-left items-start mt-4">
              <li>
                <span className="text-[#c2410c] font-semibold">250 modules Scorm clés en main</span> (format zip intégrable dans tous les LMS)
              </li>
              <li>
                <span className="text-[#c2410c] font-semibold">350 micro-vidéos Soft Skills</span> au format mp4 disponibles en français et anglais
              </li>
              <li>
                Accès illimité aux contenus sur votre plateforme, <span className="text-[#c2410c] font-semibold">sans date de fin</span>
              </li>
              <li>
                Matrice des données, <span className="text-[#c2410c] font-semibold">guide d’intégration</span> et support léger si besoin
              </li>
              <li>
                Droit de diffusion en interne pour tous vos collaborateurs, <span className="text-[#c2410c] font-semibold">sur votre LMS</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start ml-1 gap-2 mt-6 pt-4 border-t border-gray-200 !list-none text-left">
                <span className="hidden sm:inline-block w-7 h-7 text-[#c2410c] sm:mr-3 min-w-[1.75rem] min-h-[1.75rem] flex items-center justify-center sm:justify-start sm:self-start mb-2 sm:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4" />
                  </svg>
                </span>
                <span>
                  <span className="font-semibold text-[#c2410c]"><span className="whitespace-nowrap">Option supplémentaire :</span></span> remise de fichiers sources via Rise-Articulate
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Contact CTA Button (now inside Ce que vous obtiendrez concrètement section) */}
        <div className="w-full flex justify-center mt-2 mb-10">
          <a
            href="#contact"
            className="btn btn-primary text-center w-full sm:w-auto"
            onClick={(e) => {
              e.preventDefault();
              setShowContactForm(!showContactForm);
              setTimeout(() => {
                const formElement = document.getElementById('contact-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
          >
            Contactez-nous pour en savoir plus
          </a>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-12 px-6 bg-gray-50 mb-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="h2">Ils nous ont fait confiance</h2>
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
                    Leur écoute proactive et leurs conseils avisés dans le choix des contenus nous sont précieux.
                    Des <strong>contenus qualitatifs et explicites tant sur le fond que sur la forme</strong>.
                    Un coup de cœur pour le tout nouveau format de vidéos, à mi-chemin entre le podcast et la vidéo. <strong>Avec Afthonios, je suis 100 % en confiance.</strong>
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
            {/* Additional SVG logo slides */}
            {/* 1. Safran Sagem */}
            <SwiperSlide>
              <div className="w-full sm:w-48 h-24 sm:h-28 flex items-center justify-center bg-gray-50">
                <img
                  src="https://res.cloudinary.com/djiqjc1ui/image/upload/v1748664059/safran-sagem_mmbn3i.svg"
                  alt="Safran Sagem"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
            {/* 2. Essilor (taller) */}
            <SwiperSlide>
              <div className="w-full sm:w-48 h-24 sm:h-28 flex items-center justify-center bg-gray-50">
                <img
                  src="https://res.cloudinary.com/djiqjc1ui/image/upload/v1748665021/essilor-logo_gqkcfe.svg"
                  alt="Essilor"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
            {/* 3. SUEZ */}
            <SwiperSlide>
              <div className="w-full sm:w-48 h-24 sm:h-28 flex items-center justify-center bg-gray-50">
                <img
                  src="https://res.cloudinary.com/djiqjc1ui/image/upload/v1748664061/suez-logo_i3556d.svg"
                  alt="SUEZ"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
            {/* 4. MAIF (taller) */}
            <SwiperSlide>
              <div className="w-full sm:w-48 h-24 sm:h-28 flex items-center justify-center bg-gray-50">
                <img
                  src="https://res.cloudinary.com/djiqjc1ui/image/upload/v1748664057/maif_o6ezy7.svg"
                  alt="MAIF"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
            {/* 5. SNCF */}
            <SwiperSlide>
              <div className="w-full sm:w-48 h-24 sm:h-28 flex items-center justify-center bg-gray-50">
                <img
                  src="https://res.cloudinary.com/djiqjc1ui/image/upload/v1748664055/sncf_mbdu0j.svg"
                  alt="SNCF"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
            {/* 6. SFR (taller) */}
            <SwiperSlide>
              <div className="w-full sm:w-48 h-24 sm:h-28 flex items-center justify-center bg-gray-50">
                <img
                  src="https://res.cloudinary.com/djiqjc1ui/image/upload/v1748664058/sfr_k87nob.svg"
                  alt="SFR"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Tarification Section */}
      <section className="py-20 px-6 bg-section-soft-orange">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="h2">Tarification simple et transparente</h2>
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
                  title: "Entreprises<br />& Collectivités",
                  price: "Entre 8.000 € et 35.000 €",
                  description: "selon la taille de l’organisation et le mode d’intégration",
                  icon: "🏢",
                },
                {
                  title: "Universités<br />& Écoles",
                  price: "Entre 5.000 € et 15.000 €",
                  description: "selon la taille de l’établissement et les usages pédagogiques",
                  icon: "🎓",
                },
                {
                  title: "Organismes<br />de Formation",
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
                  <h3
                    className="text-xl font-bold text-gray-800 mb-2"
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
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
          <h2 className="h2 text-center">
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
            <div className="bg-[#C2410C] h-[320px] sm:h-[420px] flex flex-col justify-center px-4 sm:px-12 lg:px-16 py-6 sm:py-16 gap-4 text-white">
              <div className="flex flex-col justify-center gap-4">
                <img
                  src="https://res.cloudinary.com/djiqjc1ui/image/upload/v1748611820/Orange_RISE_Afthonios_Logo_with_text_glbww1.svg"
                  alt="Afthonios Logo"
                  className="w-32 mb-4"
                />
                <h3 className="text-3xl font-bold leading-tight pt-0 mb-3">
                  La pensée positive&nbsp;: <br />
                  changer de regard
                </h3>
                <div className="w-full flex justify-center sm:justify-start mt-2 sm:mt-6">
                  <a
                    href="https://afthonios.com/wp-content/uploads/uncanny-snc/137/index.html?endpoint=https://afthonios.com/ucTinCan/&auth=LearnDashId2548&course_id=0&actor=%7B%22name%22%3A%20%5B%22Nicolai%20Kalb%22%5D%2C%20%22mbox%22%3A%20%5B%22mailto%3Anicolai.kalb%40afthonios.com%22%5D%7D&activity_id=https://afthonios.com/wp-content/uploads/uncanny-snc/137/index.html&client=AR2017&base_url=https://afthonios.com&nonce=140e322038"
                    className="bg-white text-[#C2410C] font-semibold px-4 py-1 rounded-full w-fit hover:bg-gray-100 transition text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    COMMENCER LE MODULE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-800 text-lg mt-4">
            Améliorez dès aujourd’hui votre regard sur les situations <br />
            avec le module <span className="text-orange-700 font-semibold">« La pensée positive »</span>.
          </p>
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <a
              href="https://afthonios.com/wp-content/uploads/uncanny-snc/137/index.html?endpoint=https://afthonios.com/ucTinCan/&auth=LearnDashId2548&course_id=0&actor=%7B%22name%22%3A%20%5B%22Nicolai%20Kalb%22%5D%2C%20%22mbox%22%3A%20%5B%22mailto%3Anicolai.kalb%40afthonios.com%22%5D%7D&activity_id=https://afthonios.com/wp-content/uploads/uncanny-snc/137/index.html&client=AR2017&base_url=https://afthonios.com&nonce=140e322038"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accès Français
            </a>
            <a
              href="https://afthonios.com/wp-content/uploads/uncanny-snc/669/index.html?endpoint=https://afthonios.com/ucTinCan/&auth=LearnDashId4888&course_id=0&actor=%7B%22name%22%3A%20%5B%22Nicolai%20Kalb%22%5D%2C%20%22mbox%22%3A%20%5B%22mailto%3Anicolai.kalb%40afthonios.com%22%5D%7D&activity_id=https://afthonios.com/wp-content/uploads/uncanny-snc/669/index.html&client=AR2017&base_url=https://afthonios.com&nonce=140e322038"
              className="btn-secondary"
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
          <h2 className="h2">Prêt à démarrer&nbsp;?</h2>
          <p className="text-lg text-gray-700 mb-10">
            Contactez-nous pour une démonstration personnalisée ou pour échanger sur vos besoins spécifiques.
          </p>
          <a
            href="#contact"
            className="btn btn-primary transform transition duration-300 ease-in-out"
            style={{ display: "inline-block", marginTop: "1rem" }}
            onClick={(e) => {
              e.preventDefault();
              setShowContactForm(!showContactForm);
              setTimeout(() => {
                const formElement = document.getElementById('contact-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
          >
            Contactez-nous maintenant
          </a>
          {showContactForm && (
            <motion.div
              id="contact-form"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden bg-white rounded shadow-lg mt-6 p-6 border border-orange-300"
            >
              {formSubmitted ? (
                <div className="text-orange-600 text-center flex items-center justify-center h-[120px]">
                  Merci pour votre message&nbsp;! Nous vous répondrons dans les plus brefs délais.
                </div>
              ) : (
                <>
                  <form
                    className="space-y-4 text-left"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setError(null);
                      setSuccess(null);
                      const form = e.target as HTMLFormElement;
                      const res = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          prenom: form.prenom.value,
                          nom: form.nom.value,
                          email: form.email.value,
                          organisation: form.organisation.value,
                          message: form.message.value,
                        }),
                      });
                      if (res.ok) {
                        setFormSubmitted(true);
                      } else {
                        setError('Erreur lors de l’envoi du formulaire. Veuillez réessayer.');
                      }
                    }}
                  >
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <input
                        type="text"
                        id="first-name"
                        name="prenom"
                        className="w-full border border-gray-300 rounded px-4 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input
                        type="text"
                        id="name"
                        name="nom"
                        className="w-full border border-gray-300 rounded px-4 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adresse e-mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 rounded px-4 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organisation</label>
                      <input
                        type="text"
                        id="organization"
                        name="organisation"
                        className="w-full border border-gray-300 rounded px-4 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full border border-gray-300 rounded px-4 py-2"
                        rows={4}
                        required
                      />
                    </div>
                    {error && (
                      <div className="text-red-600 text-sm text-center">{error}</div>
                    )}
                    <div className="grid grid-cols-1 items-center justify-center text-center gap-2 mt-4">
                      {/* Centered Envoyer button */}
                      <div className="flex justify-center">
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                      </div>
                      {/* Contact info below */}
                      <div className="flex justify-center items-center text-sm text-gray-800 font-semibold mt-4">
                        <p className="text-center">
                          ou écrivez-nous directement sur<br />
                          <a href="mailto:connect@afthonios.com" className="underline text-[#C2410C] font-semibold">connect@afthonios.com</a>
                        </p>
                      </div>
                    </div>
                  </form>
                  {success && (
                    <p className="mt-4 text-center text-orange-700 font-semibold">
                      {success}
                    </p>
                  )}
                </>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

function PourquoiCarouselA() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesA = [
    {
      title: "Des contenus conçus par des coachs de terrain",
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


// PuzzleItem component for puzzle section
import React from 'react';

function PuzzleClusterSection() {
  const [cluster, setCluster] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTriggerY = 900;
      setCluster(window.scrollY > scrollTriggerY);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const puzzleData = [
    {
      file: "puzzle-video-expert.svg",
      label: "VIDÉO EXPERT DE COACH (3-10 MIN)",
      textColor: "text-[#C2410C]",
      rotation: "rotate-0"
    },
    {
      file: "puzzle-storytelling.svg",
      label: "VIDÉO/AUDIO EN MODE STORYTELLING (2-3 MIN)",
      textColor: "text-[#A63D00]",
      rotation: "-rotate-90"
    },
    {
      file: "puzzle-quiz-fiches.svg",
      label: "QUIZ, FICHES PRATIQUES, AUTO-DIAGNOSTICS",
      textColor: "text-[#D35400]",
      rotation: "rotate-180"
    },
    {
      file: "puzzle-articles.svg",
      label: "ARTICLES, BONNES PRATIQUES, MÉMOS-COACHING",
      textColor: "text-[#DB642C]",
      rotation: "rotate-90"
    },
    {
      file: "puzzle-bonus-ted.svg",
      label: "BONUS (TED TALKS, CITATIONS…)",
      textColor: "text-[#E74C3C]",
      rotation: "rotate-0"
    },
  ];
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center"
      animate={{}}
      style={{ display: 'flex', gap: `${cluster ? 4 : 32}px` }}
      transition={{ type: 'spring', stiffness: 50, damping: 14 }}
    >
      {puzzleData.map((item, index) => (
        <PuzzleItem key={index} item={item} index={index} cluster={cluster} />
      ))}
    </motion.div>
  );
}

function PuzzleItem({
  item,
  index,
  cluster
}: {
  item: { file: string; label: string; textColor: string; rotation: string },
  index: number,
  cluster: boolean
}) {
  // Responsive: check for mobile (portrait)
  const [isMobile, setIsMobile] = useState(false);
  const puzzleRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile scroll animation: use IntersectionObserver to add scroll-visible on .puzzle-scroll-animate
  React.useEffect(() => {
    if (!isMobile) return;
    if (index === 0) return;
    const el = puzzleRef.current;
    if (!el) return;
    el.classList.remove('scroll-visible');
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('scroll-visible');
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [isMobile, index]);

  // For mobile: center horizontally, overlay label on image, add scroll animation to all except first
  if (isMobile) {
    if (index === 0) {
      // First puzzle piece ("Vidéo Expert"): animate with framer-motion, updated animation, add mt-4 for spacing
      return (
        <div
          className="flex flex-col items-center w-full text-center mt-4"
          style={{
            maxWidth: '320px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: -30 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full text-center"
          >
            <div className="relative w-full max-w-xs h-48 flex items-center justify-center">
              <img
                src={`/assets/${item.file}`}
                alt={item.label}
                className={`w-full h-auto object-contain transform ${item.rotation}`}
                draggable={false}
                style={{ opacity: 0.7 }}
              />
              <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                <span className="text-black text-[0.95rem] font-semibold leading-snug">
                  {item.label}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }
    // All other puzzle pieces: add scroll animation class and use upward movement (translateY(-30px)), no opacity change
    return (
      <div
        className="flex flex-col items-center w-full text-center mt-4"
        style={{
          maxWidth: '320px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <motion.div
          ref={puzzleRef}
          initial={{ y: 30 }}
          whileInView={{ y: -30 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="puzzle-scroll-animate flex flex-col items-center w-full text-center"
          style={{ opacity: 1 }}
        >
          <div className="relative w-full max-w-xs h-48 flex items-center justify-center">
            <img
              src={`/assets/${item.file}`}
              alt={item.label}
              className={`w-full h-auto object-contain transform ${item.rotation}`}
              draggable={false}
              style={{ opacity: 0.7 }}
            />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <span className="text-black text-[0.95rem] font-semibold leading-snug">
                {item.label}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
  // Desktop/tablet layout
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-delay="200"
      data-aos-duration="600"
      data-aos-easing="ease-out"
      data-aos-once="true"
      className="flex flex-col items-center w-56 text-center mt-0"
      style={{
        transform: cluster ? `translateX(${-index * 40 + 80}px)` : undefined,
        transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
    >
      <div className="w-56 h-60 flex items-center justify-center">
        <img
          src={`/assets/${item.file}`}
          alt={item.label}
          className={`w-full h-auto object-contain transform ${item.rotation}`}
          draggable={false}
          style={{ opacity: 0.7 }}
        />
      </div>
      {/* Invisible spacer for items 1 and 3 */}
      {[1, 3].includes(index) && <div className="h-4 invisible" />}
      <div className={`px-4 text-[0.85rem] md:text-sm font-semibold leading-snug mt-2 ${item.textColor} min-h-[3.6rem]`}>
        {item.label}
      </div>
    </div>
  );
}