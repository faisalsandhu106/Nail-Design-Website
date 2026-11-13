import Services from "../sections/Services";
import BreadCrumb from "../components/BreadCrumb";
import Cta from "../sections/Cta";
import { Helmet, HelmetProvider } from "react-helmet-async";
import FAQSection from "../components/FAQSection";
import ScrollReveal from "../components/ScrollReveal";

export default function ServicesPage() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Nail Design | Services</title>
        <meta
          name="description"
          content="Explore tailored manicure services, permanent makeup and practical beauty education. Find the right service for your style and goals, then contact us to discuss your appointment."
        />
        <meta
          property="og:title"
          content="Nail Design Ljiljana Medović | Services"
        />
        <meta
          property="og:description"
          content="Explore tailored manicure services, permanent makeup and practical beauty education. Find the right service for your style and goals, then contact us to discuss your appointment."
        />
        <meta
          property="og:url"
          content="https://naildesign-online.vercel.app/services"
        />
      </Helmet>
      <main>
        <BreadCrumb page="Services" />
        <ScrollReveal><Services /></ScrollReveal>
        <FAQSection compact />
      </main>
      <Cta />
    </HelmetProvider>
  );
}
