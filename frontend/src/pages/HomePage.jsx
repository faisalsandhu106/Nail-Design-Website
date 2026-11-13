import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Services from "../sections/Services";
import Cta from "../sections/Cta";
import Counter from "../sections/Benefits";
import FAQSection from "../components/FAQSection";
import ScrollReveal from "../components/ScrollReveal";

export default function HomePage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nail Design | Home</title>
        <meta
          name="description"
          content="Discover thoughtful nail care, refined beauty treatments and professional training in a welcoming salon where every detail is considered."
        />
        <meta
          property="og:title"
          content="Nail Design Ljiljana Medović | Home"
        />
        <meta
          property="og:description"
          content="Discover thoughtful nail care, refined beauty treatments and professional training in a welcoming salon where every detail is considered."
        />
        <meta
          property="og:url"
          content="https://naildesign-online.vercel.app/"
        />
      </Helmet>
      <main>
        <ScrollReveal><Hero /></ScrollReveal>
        <ScrollReveal><Intro /></ScrollReveal>
        <ScrollReveal><Counter /></ScrollReveal>
        <Services />
        <FAQSection compact />
      </main>
      <Cta />
    </HelmetProvider>
  );
}
