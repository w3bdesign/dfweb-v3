import Image from "../UI/Image.component";

import { urlFor } from "../../lib/sanity";

import Button from "../UI/Button.component";

import type { IProject } from "./ProsjekterListings.component";


import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

/**
 * Display individual portfolio projects if they match the filter passed down through props
 *
 * @param {Object} projects The portfolio project data to display, contains name, image etc
 */

const ProsjektIndividualProjects = ({ projects }: IProject): JSX.Element => {

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const boxes = gsap.utils.toArray("#projectdiv");

    // Set things up
    gsap.set(boxes, { autoAlpha: 0, y: 50 });

    boxes.forEach((box: any, i) => {
      // Set up your animation
      const anim = gsap.to(box, { duration: 1, autoAlpha: 1, y: 0, paused: true });

      // Use callbacks to control the state of the animation
      ScrollTrigger.create({
        trigger: box,
        end: "bottom bottom",
        once: true,
        onEnter: (self) => {
          // If it's scrolled past, set the state
          // If it's scrolled to, play it
          if (self.progress === 1) {
            anim.progress(1);
          } else {
            anim.play();
          }
        }
      });
    });
  }, []);
  return (
    <>
      {projects.map(
        ({ id, name, description, subdescription, urlwww, urlgithub, projectimage }) => (
          <div
            id="projectdiv"
            key={id}
            className="p-6 text-lg text-black transition duration-500 ease-in-out bg-white rounded shadow  hover:bg-sky-50 transform-gpu">
            <h2 className="text-xl font-black text-center">{name}</h2>
            <div className="mt-6 text-lg text-left lg:text-left md:text-left">
              <p>{description}</p>
              <p className="mt-6 text-left md:text-left lg:text-left">
                Teknologier: {subdescription}
              </p>
              <div className="flex justify-center mt-6">
                {projectimage && (
                  <Image
                    height="255"
                    width="500"
                    src={urlFor(projectimage).url() as string}
                    alt={name}
                    role="presentation"
                  />
                )}
              </div>
              <div className="flex justify-center mt-4">
                {/* Display only Github button if not empty  */}
                {urlgithub && (
                  <a rel="noopener noreferrer" target="_blank" aria-label={name} href={urlgithub}>
                    <Button text="Github" />
                  </a>
                )}
                {urlwww && (
                  <a rel="noopener noreferrer" target="_blank" aria-label={name} href={urlwww}>
                    <Button text="Besøk" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ProsjektIndividualProjects;
