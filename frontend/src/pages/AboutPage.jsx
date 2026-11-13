import BreadCrumb from "../components/BreadCrumb"
import { aboutSection } from "../data"
import Cta from "../sections/Cta"
import { Helmet, HelmetProvider } from "react-helmet-async"
import ScrollReveal from "../components/ScrollReveal"

export default function AboutPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nail Design | About Us</title>
        <meta
          name="description"
          content="Meet the people, passion and professional standards behind Nail Design. Discover our story, our approach to individual care and our commitment to continually developing our craft."
        />
        <meta
          property="og:title"
          content="Nail Design Ljiljana Medović | About Us"
        />
        <meta
          property="og:description"
          content="Meet the people, passion and professional standards behind Nail Design. Discover our story, our approach to individual care and our commitment to continually developing our craft."
        />
        <meta
          property="og:url"
          content="https://naildesign-online.vercel.app/about-us"
        />
      </Helmet>
      <main>
        <BreadCrumb page="About Us" />
        <section>
          <div className="wrapper my-[50px] lg:my-[100px]">
            <div>
              {aboutSection.map((section, index) => (
                <ScrollReveal
                  key={index}
                  className="flex flex-col sm:flex-row sm:even:flex-row-reverse items-center gap-8 lg:gap-20 mb-[50px] lg:mb-[100px]"
                >
                  <div className="w-full sm:w-1/2 h-[500px]">
                    <img src={section.aboutImg} alt={section.altImg} />
                  </div>
                  <div className="sm:w-1/2">
                    <h2 className="mb-6">{section.aboutTItle}</h2>
                    <p>{section.aboutDesc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Cta />
    </HelmetProvider>
  );
}
