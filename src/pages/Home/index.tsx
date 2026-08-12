import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "../../data/projects";
import { services } from "../../data/services";
import { testimonials } from "../../data/testimonials";
import { journalArticles } from "../../data/journal";

import SectionHeading from "../../components/common/SectionHeading";
import StudioButton from "../../components/common/StudioButton";
import ImageReveal from "../../components/common/ImageReveal";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP ScrollTrigger Counter Animation
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray(".stat-counter");
      counters.forEach((counter: any) => {
        const target = parseInt(counter.getAttribute("data-target") || "0", 10);
        gsap.fromTo(
          counter,
          { textContent: "0" },
          {
            textContent: target,
            duration: 2,
            snap: { textContent: 1 },
            ease: "power3.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600",
      eyebrow: "Residential Architecture",
      title: "Spaces designed around the way you live.",
      desc: "We build bespoke residential sanctuaries celebrating light, natural oak, and tactile materials."
    },
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600",
      eyebrow: "Commercial Identity",
      title: "Workspaces that foster creative flow.",
      desc: "Transforming executive boardrooms and open desks through acoustic intelligence and raw concrete accents."
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600",
      eyebrow: "Boutique Hospitality",
      title: "Staging memorable customer experiences.",
      desc: "Integrating fluted travertine counters and warm accent highlights in hotels, bars, and lounges."
    }
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const homeServices = services.slice(0, 3);
  const recentArticles = journalArticles.slice(0, 2);

  return (
    <div className="home-page-root">
      
      {/* =========================================
         HERO SECTION (Swiper + GSAP text reveal)
      ========================================= */}
      <section className="hero-slider-section" id="home">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          speed={1000}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev"
          }}
          pagination={{
            el: ".hero-slider-pagination",
            clickable: true
          }}
          className="hero-slider"
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="hero-slide">
                <div className="hero-slide-bg">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="hero-slide-overlay" />
                <div className="container-studio h-full flex items-center">
                  <div className="hero-slide-content">
                    <span 
                      className="eyebrow mb-3 d-block" 
                      style={{ color: "var(--color-secondary-soft)", borderLeft: "0", paddingLeft: "0" }}
                    >
                      {slide.eyebrow}
                    </span>
                    <h1 className="hero-slide-title display-title">
                      {slide.title}
                    </h1>
                    <p className="hero-slide-description">
                      {slide.desc}
                    </p>
                    <div className="hero-slide-btn">
                      <StudioButton href="/projects" variant="light">
                        Explore Portfolio
                      </StudioButton>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Controls */}
          <div className="hero-slider-nav d-none d-md-flex">
            <button type="button" className="hero-prev hero-nav-btn" aria-label="Previous Slide">
              <i className="fa-solid fa-arrow-left" />
            </button>
            <button type="button" className="hero-next hero-nav-btn" aria-label="Next Slide">
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="hero-slider-pagination" />
        </Swiper>
      </section>

      {/* =========================================
         STUDIO INTRODUCTION SECTION
      ========================================= */}
      <section className="section" id="studio">
        <div className="container-studio">
          <div className="grid grid-2 gap-16 items-center">
            
            <div data-aos="fade-right">
              <span className="section-number">01 / INTRODUCTION</span>
              <h2 className="display-title mt-4 mb-8">
                Refining details,
                <br />
                defining spaces.
              </h2>
              <p className="mb-4">
                At Atelier, we believe that space is not simply structural volume. It is a canvas for physical rituals and sensory memory. Our designs combine architectural honesty with luxurious materials to create spaces that feel natural, quiet, and timeless.
              </p>
              <p className="mb-12">
                We work across residential, commercial, and boutique hospitality sectors from our design hub in Mumbai, delivering solutions that celebrate custom craftsmanship and spatial flow.
              </p>
              <StudioButton href="/about" variant="outline">
                Our Story
              </StudioButton>
            </div>

            <div>
              <ImageReveal
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
                alt="Minimal warm living room close-up"
                aspectRatio="portrait"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
         FEATURED PORTFOLIO SECTION
      ========================================= */}
      <section className="section section-dark" id="projects">
        <div className="container-studio">
          <div className="d-flex justify-between items-center mb-16 flex-wrap gap-4">
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected Architectural Works"
              description="A curated overview of our residential, workspace, and boutique retail designs."
              dark={true}
            />
            <span className="section-number align-self-start">02 / PORTFOLIO</span>
          </div>

          <div className="grid grid-3 gap-12">
            {featuredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
              >
                <Link to={`/projects/${project.id}`} className="project-card">
                  <div className="project-card-image">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="project-card-overlay">
                      <span className="project-card-btn">View Project</span>
                    </div>
                  </div>
                  <div className="project-card-meta">
                    <div>
                      <h3 className="project-card-title">{project.title}</h3>
                      <span className="project-card-category">{project.category}</span>
                    </div>
                    <span className="project-card-location">{project.location}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16" data-aos="fade-up">
            <StudioButton href="/projects" variant="light">
              View All Works
            </StudioButton>
          </div>
        </div>
      </section>

      {/* =========================================
         SERVICES BRIEF SECTION
      ========================================= */}
      <section className="section" id="services">
        <div className="container-studio">
          <div className="d-flex justify-between items-center mb-16 flex-wrap gap-4">
            <SectionHeading
              eyebrow="Services"
              title="Our Spatial Disciplines"
              description="From layout mapping to collectible furniture curation, we handle structural volume inside-out."
            />
            <span className="section-number align-self-start">03 / DISCIPLINES</span>
          </div>

          <div className="grid grid-3 gap-12">
            {homeServices.map((service, idx) => (
              <div 
                key={service.id} 
                className="hover-lift"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  padding: "var(--space-8)"
                }}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div 
                  className="mb-6 flex items-center justify-between" 
                  style={{
                    fontSize: "var(--fs-xl)",
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-accent-dark)",
                    fontWeight: 600
                  }}
                >
                  {service.number}
                </div>
                <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-xl)", fontWeight: 500 }}>
                  {service.title}
                </h3>
                <p className="mb-6" style={{ fontSize: "var(--fs-sm)" }}>
                  {service.description}
                </p>
                <Link to="/services" className="studio-link">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
         DESIGN PHILOSOPHY BLOCK
      ========================================= */}
      <section className="section section-dark text-center" style={{ backgroundColor: "#1d1b18" }}>
        <div className="container-studio max-width-800 py-12">
          <span className="eyebrow mb-6" style={{ color: "var(--color-secondary-soft)" }} data-aos="fade-up">
            Philosophy
          </span>
          <h2 
            className="display-title mb-8 text-serif italic text-white" 
            style={{ fontWeight: 400, letterSpacing: "0" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            "A house should not be a machine for living, but a sensory archive of your life."
          </h2>
          <p className="opacity-70 max-width-600 mx-auto" data-aos="fade-up" data-aos-delay="200">
            We focus on quiet surfaces, organic patinas that grow with age, and spatial structures that prioritize natural ventilation and daylight paths over modern excess.
          </p>
        </div>
      </section>

      {/* =========================================
         STATISTICS COUNTER SECTION
      ========================================= */}
      <section className="section" ref={statsRef}>
        <div className="container-studio">
          <div className="grid grid-3 gap-12">
            
            <div className="stat-item" data-aos="fade-up">
              <span className="stat-number">
                <span className="stat-counter" data-target="40">0</span>%
              </span>
              <span className="stat-label">Natural Light Optimization</span>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
              <span className="stat-number">
                <span className="stat-counter" data-target="15">0</span>+
              </span>
              <span className="stat-label">Luxury Projects Completed</span>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
              <span className="stat-number">
                <span className="stat-counter" data-target="180">0</span>+
              </span>
              <span className="stat-label">Bespoke Millwork Designs</span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
         TESTIMONIALS SLIDER SECTION
      ========================================= */}
      <section className="section section-dark" style={{ background: "var(--color-primary-soft)" }}>
        <div className="container-studio">
          <div className="text-center mb-16">
            <span className="eyebrow mb-3" style={{ color: "var(--color-secondary-soft)" }}>Testimonials</span>
            <h2>Client Perspectives</h2>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet" }}
            className="testimonial-swiper"
          >
            {testimonials.map((test) => (
              <SwiperSlide key={test.id}>
                <div className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(test.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star" />
                    ))}
                  </div>
                  <blockquote className="testimonial-quote">
                    "{test.text}"
                  </blockquote>
                  <div className="testimonial-avatar">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="testimonial-name text-white">{test.name}</h4>
                  <span className="testimonial-role">{test.project}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* =========================================
         JOURNAL PREVIEW SECTION
      ========================================= */}
      <section className="section" id="journal">
        <div className="container-studio">
          <div className="d-flex justify-between items-center mb-16 flex-wrap gap-4">
            <SectionHeading
              eyebrow="Journal"
              title="Design Notes & Trends"
              description="Exploring material trends, architecture concepts, and designer highlights."
            />
            <span className="section-number align-self-start">04 / JOURNAL</span>
          </div>

          <div className="grid grid-2 gap-16">
            {recentArticles.map((article, idx) => (
              <div 
                key={article.id} 
                data-aos="fade-up" 
                data-aos-delay={idx * 150}
              >
                <Link to={`/journal/${article.id}`} className="journal-card">
                  <div className="journal-card-image overflow-hidden">
                    <ImageReveal
                      src={article.image}
                      alt={article.title}
                      aspectRatio="landscape"
                    />
                  </div>
                  <div className="journal-card-meta mt-4">
                    <span className="journal-card-category">{article.category}</span>
                    <span>/</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="journal-card-title mt-2">
                    {article.title}
                  </h3>
                  <p className="mb-4" style={{ fontSize: "var(--fs-sm)" }}>
                    {article.summary}
                  </p>
                  <span className="studio-link">Read Article</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
         CTA SECTION (Asymmetric Block)
      ========================================= */}
      <section className="section-sm">
        <div className="container-studio" data-aos="fade-up">
          <div 
            className="section-dark p-12 p-md-16 relative" 
            style={{ 
              background: "var(--color-surface-dark)", 
              border: "1px solid var(--color-border-light)" 
            }}
          >
            <div className="grid grid-2 gap-8 items-center">
              <div>
                <span 
                  className="eyebrow mb-4" 
                  style={{ color: "var(--color-secondary-soft)", borderLeft: "0", paddingLeft: "0" }}
                >
                  Start your project
                </span>
                <h2 className="display-title text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, var(--fs-4xl))" }}>
                  Let's design a space with timeless character.
                </h2>
                <p className="opacity-70 mb-0" style={{ maxWidth: "480px" }}>
                  Contact our studio today to schedule an initial layout and spatial planning consultation.
                </p>
              </div>
              <div className="text-start text-md-center mt-8 mt-md-0">
                <StudioButton href="/contact" variant="light">
                  Book A Consultation
                </StudioButton>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
