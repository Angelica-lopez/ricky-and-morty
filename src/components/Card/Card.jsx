import PropTypes from "prop-types";

const Card = ({ name, specie, url }) => (
  <div className="w-full rounded shadow-shadowCard overflow-hidden">
    <div
      className="w-full h-[160px] bg-cover"
      style={{ backgroundImage: `url(${url})` }}
    />
    <div className="px-6 py-4">
      <h1 className="font-medium text-xl leading-[30px] tracking-[0.15px] text-[rgba(0,0,0,0.87)]">
        {name}
      </h1>
      <span className="text-sm font-normal leading-[21px] tracking-[0.25px] text-[rgba(0,0,0,0.6)]">
        {specie}
      </span>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
