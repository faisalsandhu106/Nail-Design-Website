import { Helmet, HelmetProvider } from "react-helmet-async";
import BreadCrumb from "../components/BreadCrumb";
import FAQSection from "../components/FAQSection";
import Cta from "../sections/Cta";

export default function FAQPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>FAQs | Nail Design — Ljiljana Medović</title>
        <meta name="description" content="Find answers about appointments, manicure preparation, permanent makeup and Nail Design training courses." />
        <link rel="canonical" href="https://naildesign-online.vercel.app/faqs" />
        <meta property="og:title" content="Frequently Asked Questions | Nail Design" />
        <meta property="og:description" content="Helpful answers about appointments, beauty services and training." />
        <meta property="og:url" content="https://naildesign-online.vercel.app/faqs" />
      </Helmet>
      <main>
        <BreadCrumb page="Frequently Asked Questions" />
        <FAQSection />
      </main>
      <Cta />
    </HelmetProvider>
  );
}
