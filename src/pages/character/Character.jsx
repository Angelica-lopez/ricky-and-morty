import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import PropTypes from "prop-types";

const Character = ({
  name,
  gender,
  status,
  species,
  origin,
  type,
  location,
  image,
  episodes,
}) => (
  <div className="flex justify-start max-w-[1100px] px-2 xs:px-10 m-auto flex-col">
    <Link href="/" className="flex items-center py-4">
      <BiArrowBack className="w-6 h-6" />
      <div className="ml-3 text-lg font-bold">Go Back</div>
    </Link>
    <div className="flex flex-col items-center">
      <div className="h-[148px] w-[146px] xs:h-[300px] xs:w-[300px] relative rounded-[50%] overflow-hidden border-4 border-[rgba(242,242,247,1)]">
        <Image fill src={image} alt="Character picture" />
      </div>
      <h1 className="text-[32px] xs:text-[40px] font-normal leading-[56.25px] text-[rgba(8,31,50,1)]">
        {name}
      </h1>
    </div>
    <div className="gap-x-5 flex w-full justify-center flex-col xs:flex-row pb-11 xs:p-0">
      <div className="flex flex-col my-3 xs:my-[42px] flex-1">
        <h1 className="font-medium text-xl leading-6 tracking-[0.15px] text-[rgba(142,142,147,1)] xs:mb-11 mb-1.5">
          Informations
        </h1>
        <div className="w-full p-0 xs:pl-5">
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Gender
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              {gender}
            </h5>
          </div>
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Status
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              {status}
            </h5>
          </div>
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Specie
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              {species}
            </h5>
          </div>
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Origin
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              {origin?.name}
            </h5>
          </div>
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Type
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              {type || "-"}
            </h5>
          </div>
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Location
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              {location?.name}
            </h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-[42px] flex-1">
        <h1 className="font-medium text-xl leading-6 tracking-[0.15px] text-[rgba(142,142,147,1)] xs:mb-11 mb-1.5">
          Episodes
        </h1>
        {episodes?.length ? (
          episodes?.map((episode) => (
            <div key={episode.id} className="p-0 xs:pl-5">
              <div className="border-b border-[(255,255,255,1)]">
                <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
                  {episode.episode}
                </h3>
                <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-0.5">
                  {episode.name}
                </h5>
                <h6 className="font-medium text-[10px] text-[rgba(110,121,140,1)] pb-3 leading-4 tracking-[1.5px]">
                  {episode.air_date?.toUpperCase()}
                </h6>
              </div>
            </div>
          ))
        ) : (
          <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
            There is no episodes for this character
          </h3>
        )}
      </div>
    </div>
  </div>
);

Character.defaultProps = {
  name: "-",
  gender: "-",
  status: "-",
  species: "-",
  origin: {
    name: "-",
  },
  type: "-",
  location: {
    name: "-",
  },
  image: "/images/rick.png",
  episodes: [],
};

Character.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  type: PropTypes.string,
  location: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  image: PropTypes.string,
  episodes: PropTypes.array,
};

export default Character;
