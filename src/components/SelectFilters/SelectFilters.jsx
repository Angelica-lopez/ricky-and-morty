import PropTypes from "prop-types";
import InputSelect from "../InputSelect";
import { SPECIES_OPTIONS, GENDER_OPTIONS, STATUS_OPTIONS } from "../../data";

const SelectFilters = ({ filters, onFilterChange }) => (
  <>
    <InputSelect
      name="species"
      value={filters.species}
      options={SPECIES_OPTIONS}
      category="Species"
      onChange={onFilterChange}
    />
    <InputSelect
      name="gender"
      value={filters.gender}
      options={GENDER_OPTIONS}
      category="Gender"
      onChange={onFilterChange}
    />
    <InputSelect
      name="status"
      value={filters.status}
      options={STATUS_OPTIONS}
      category="Status"
      onChange={onFilterChange}
    />
  </>
);

SelectFilters.propTypes = {
  filters: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default SelectFilters;
