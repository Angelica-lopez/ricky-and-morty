import PropTypes from "prop-types";

const InputSelect = ({ category, options, name }) => (
  <select
    name={name}
    className="pl-3 w-full h-[56px] rounded-lg text-base font-normal leading-6 border text-[rgba(0,0,0,0.5)] border-[rgba(0,0,0,0.5)] py-3"
  >
    <option>{category}</option>
    {options?.map((elem, i) => (
      <option key={elem.id} value={elem.value}>
        {elem?.label}
      </option>
    ))}
  </select>
);

InputSelect.propTypes = {
  category: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputSelect;
