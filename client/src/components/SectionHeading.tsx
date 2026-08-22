/**
 * Crimson Signal design reminder: headings are editorial control labels—monospace metadata beside assertive display type.
 */
import { motion } from "framer-motion";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "default" | "right";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "default",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`section-heading ${align === "right" ? "section-heading-right" : ""}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="section-spine" aria-hidden="true">
        <i />
        <span>{index}</span>
      </div>
      <div className="eyebrow-row">
        <span className="section-index">/{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </motion.div>
  );
}
