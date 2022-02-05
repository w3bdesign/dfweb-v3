import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Image from "../UI/Image.component";
import Button from "../UI/Button.component";

import { urlFor } from "../../lib/sanity";

import type { IProject } from "./ProsjekterListings.component";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

interface IOnEnter {
  progress: number;
}

interface ILinkButton {
  url: string;
  text: string;
  name: string;
}

/**
 * Display individual portfolio projects if they match the filter passed down through props
 *
 * @param {Object} projects The portfolio project data to display, contains name, image etc
 */

const ProsjektIndividualProjects = ({ projects }: IProject): JSX.Element => {
  // https://edidiongasikpo.com/using-gsap-scrolltrigger-plugin-in-react
  // https://greensock.com/forums/topic/24427-scrolltrigger-fade-in-elements-on-scroll-by-toggleclass-only-once/

  const ShowLinkButton = ({ url, text, name }: ILinkButton): JSX.Element => (
    <a rel="noopener noreferrer" target="_blank" aria-label={name} href={url}>
      <Button>{text}</Button>
    </a>
  );

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const boxes = gsap.utils.toArray("#projectdiv");

    boxes.forEach((box: any, _i: number) => {
      const anim = gsap.from(box, { duration: 0.5, autoAlpha: 0, y: 50, paused: true });

      ScrollTrigger.create({
        trigger: box,
        end: "bottom bottom",
        once: true,
        onEnter: (self: IOnEnter) => {
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
            className="p-6 text-lg text-black  bg-white rounded shadow invisible">
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
                {urlgithub && <ShowLinkButton url={urlgithub} text="Github" name={name} />}
                {urlwww && <ShowLinkButton url={urlwww} text="Besøk" name={name} />}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ProsjektIndividualProjects;
