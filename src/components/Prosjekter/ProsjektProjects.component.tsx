

/*

Bruk .... import Image from "next/image";

Bruk ... import { urlFor } from "../../lib/sanity";

*/

/**
 * Display individual portfilio projects if they match the filter passed down through props
 *
 * @param {Object} filter The filter that we apply to the component so we only displays projects from the correct category
 * @param {Object} projects The portfolio project data to display, contains name, image etc
 */
function ProsjektProjects({ filter, projects }: any) {
  return (
    <>
      {projects.map(
        ({ id, name, description, subdescription, category, urlwww, urlgithub, image }: any) =>
          // Use ternary to apply filter so we only see projects from the relevant category
          filter === category && (
            <div
              id="projectdiv"
              key={id}
              className="p-6 text-lg text-black transition duration-500 ease-in-out bg-white rounded shadow hover:bg-gray-200 transform-gpu">
              <h2 className="text-xl font-black text-center">{name}</h2>
              <div className="mt-6 text-lg text-left lg:text-left md:text-left">
                <p>{description}</p>
                <p className="mt-6 text-left md:text-left lg:text-left">
                  Teknologier: {subdescription}
                </p>
                <div className="flex justify-center mt-6">
                  <img src={image} alt={name} role="presentation" />
                </div>
                <div className="flex justify-center mt-4">
                  {/* Display only Github button if not empty  */}
                  {urlgithub && (
                    <a rel="noopener noreferrer" target="_blank" aria-label={name} href={urlgithub}>
                      Github
                    </a>
                  )}
                  {urlwww && (
                    <a rel="noopener noreferrer" target="_blank" aria-label={name} href={urlwww}>
                      Besøk
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
}

export default ProsjektProjects;
