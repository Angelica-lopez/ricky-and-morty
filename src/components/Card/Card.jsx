import PropTypes from "prop-types";
import Link from "next/link";

const Card = ({ id, name, species, imageUrl }) => (
  <Link
    href={`/character/${id}`}
    className="w-full rounded shadow-shadowCard overflow-hidden"
  >
    <div
      className="w-full h-[168px] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="p-4">
      <h1 className="font-medium text-xl leading-6 tracking-[0.15px] text-[rgba(0,0,0,0.87)]">
        {name}
      </h1>
      <span className="text-sm font-normal leading-[21px] tracking-[0.25px] text-[rgba(0,0,0,0.6)]">
        {species}
      </span>
    </div>
  </Link>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;
