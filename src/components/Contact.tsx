import { contacts } from '../constant/contact';
import propTypes from 'prop-types';

// Functional react component with props

type Props = {
  bg_image: string;
};

export const Contact: React.FC<Props> = ({ bg_image }) => {
  return (
    <div className="py-16">
      <div className={` bg-${bg_image} w-full h-full`}>
        <div className="flex flex-col justify-center items-center py-4 md:py-20">
          <div className="flex justify-center pt-10 md:py-16">
            <h1 className="font-Rubik-Bold font-extrabold md:text-4xl text-2xl text-[#BD1424]">
              Contact Us
            </h1>
          </div>
          <div className="flex flex-col  lg:gap-24 md:flex-row justify-center items-center">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex flex-col justify-center items-center m-4"
              >
                <a href={contact.link} target="_blank" rel="noreferrer">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="w-12 h-12"
                  />
                </a>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-Rubik-Bold font-extrabold text-base">
                    {contact.name}
                  </h1>
                  <div className="font-Rubik-Light font-light text-base">
                    {contact.handle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  bg_image: propTypes.string.isRequired,
};
