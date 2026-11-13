import Accordion from '../components/Accordion';
import { useParams } from 'react-router-dom'
import Gallery from '../components/Gallery';
import BreadCrumb from "../components/BreadCrumb";
import { services } from '../data';
import Cta from "../sections/Cta";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ScrollReveal';

export default function ServicesPageDetails() {

  const { title } = useParams();
  const service = services.find((service) => service.pageUrl === title);

  if (!service) {
    return <div className="text-center py-16">Service not found</div>;
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${service.servicesTitle} | Nail Design`}</title>
        <meta
          name="description"
          content={service.servicesDesc}
        />
        <meta
          property="og:title"
          content={`${service.servicesTitle} | Nail Design Ljiljana Medović`}
        />
        <meta
          property="og:description"
          content={service.servicesDesc}
        />
        <meta
          property="og:url"
          content={`https://naildesign-online.vercel.app/services/${service.pageUrl}`}
        />
      </Helmet>
      <main>
        <BreadCrumb page={service.servicesTitle} />
        <ScrollReveal as="section" className='my-[50px] lg:my-[100px]'>
          <div className="wrapper">
            <div className='flex flex-col items-center gap-8 sm:flex-row lg:gap-16'>
              <div className='h-[400px] lg:h-[500px] w-full sm:w-1/2'>
                <img src={service.servicesImg} alt={`${service.servicesTitle} at Nail Design`} loading="eager" />
              </div>
              <div className='sm:w-1/2'>
                <h2 className="mb-8">{service.servicesTitle}</h2>
                <p>{service.servicesDesc}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal><Accordion servicesList={service.servicesList} />
        </ScrollReveal>
        <ScrollReveal><Gallery servicesGallery={service.servicesGallery} /></ScrollReveal>
      </main>
      <Cta />
    </HelmetProvider>
  )
}