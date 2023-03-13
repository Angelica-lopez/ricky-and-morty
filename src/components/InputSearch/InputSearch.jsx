import PropTypes from "prop-types";
import { SlMagnifier } from "react-icons/sl";

const InputSearch = ({ placeholder, name }) => (
  <div className="relative w-full">
    <SlMagnifier className="absolute z-20 top-5 left-[19px]" />
    <input
      className="z-10 pl-12 w-full h-[56px] rounded-lg text-base font-normal leading-6 border text-[rgba(0,0,0,0.5)] border-[rgba(0,0,0,0.5)] py-3"
      placeholder={placeholder}
    />
  </div>
);

InputSearch.defaultProps = {
  placeholder: "",
};

InputSearch.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default InputSearch;
