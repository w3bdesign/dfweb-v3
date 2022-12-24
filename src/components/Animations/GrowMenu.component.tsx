import { Variants, AnimatePresence } from "framer-motion";

import Link from "next/link";

// CircleCI doesn't like import { motion } from "framer-motion" here, so we use require
const { motion } = require("framer-motion");

import { IAnimateNoChildrenProps } from "./types/Animations.types";

import LINKS from "../../utils/constants/LINKS";

/**
 * Grow content down. Needs to be used with GrowDownItem
 * @function GrowDown
 * @param {ReactNode} children - Children content to render
 * @param {string} cssClass - CSS classes to apply to component
 * @param {number} delay - Time to wait before starting animation
 * @param {number} staggerDelay - Time to wait before starting animation for children items

 * @returns {JSX.Element} - Rendered component
 */

//const GrowMenu = ({ cssClass }: IAnimateNoChildrenProps): JSX.Element => {
const GrowMenu = ({ isExpanded, cssClass }: any): JSX.Element => {
  const GrowDownVariants: Variants = {
    closed: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: 1
      }
    }
  };

  const itemVariants: Variants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };

  //const GrowMenuVariants: Variants = {};

  /*
  const GrowDownVariants: Variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: staggerDelay ? staggerDelay : 0.5,
        delay,
        duration: 0.4,
        ease: "easeInOut",
        staggerDirection: 1
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: staggerDelay ? staggerDelay : 0.5,
        staggerDirection: -1
      }
    }*/

  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.aside
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: 310,
            opacity: 1,
            transition: { delay: 0.15, duration: 1.6, ease: "easeInOut" }
          }}
          exit={{
            height: 0,
            transition: { delay: 0.15, duration: 1.6, ease: "easeInOut" }
          }}>
          <nav aria-label="Navigasjon">
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={GrowDownVariants}
              className={cssClass}
              data-testid="GrowDown">
              <ul>
                {LINKS.map(({ id, url, text, external }) => (
                  <motion.li
                    key={id}
                    className="block p-4 text-xl text-white hover:underline mx-auto text-center border-t border-b border-gray-600 border-solid shadow"
                    data-cy="mobile-menu-item"
                    variants={itemVariants}>
                    {external ? (
                      <a
                        aria-label={text}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        data-testid={`mobil-${text}`}>
                        {text}
                      </a>
                    ) : (
                      <Link data-testid={`mobil-${text}`} href={url}>
                        {text}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default GrowMenu;
