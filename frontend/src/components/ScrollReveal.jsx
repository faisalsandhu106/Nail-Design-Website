import { motion, useReducedMotion } from "framer-motion";

/** Reveal content as it enters the viewport; respects reduced-motion preferences. */
export default function ScrollReveal({ children, className = "", delay = 0, once = true, amount = 0.12, as = "div" }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
