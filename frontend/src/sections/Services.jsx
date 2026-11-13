import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { services } from '../data';

export default function Services() {

  return (
    <section className="my-[50px] lg:my-[100px]">
      <div className="wrapper">
        <div className="max-w-xl mx-auto mb-[50px] sm:text-center">
          <h2 className="mb-6 sm:mb-8">
            Our Services
          </h2>
          <p>
            Discover considered treatments and expert guidance tailored to your individual style. From beautifully finished nails to permanent makeup and professional training, every service begins with a personal approach and careful attention to detail.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4 xl:gap-8">
          {services.map((service, index) => (
            <motion.div key={service.pageUrl} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.06 }}>
              <div className="aspect-square mb-6">
                <img src={service.servicesImg} alt={`${service.servicesTitle} service`} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <h3>{service.servicesTitle}</h3>
              <p className="mt-3 mb-4 line-clamp-3">{service.servicesDesc}</p>
              <div className="inline-block">
                <Link to={`/services/${service.pageUrl}`} className="btn-tertiary">
                  <span>Explore service</span>
                  <GoArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
