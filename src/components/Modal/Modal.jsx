import { useState } from "react";
import { GrClose } from "react-icons/gr";
import PropTypes from "prop-types";
import SelectFilters from "../SelectFilters";

const Modal = ({ isOpen, onClose, filters, onApplyFilters }) => {
  const [modalFilters, setModalFilters] = useState(filters);

  const onHandelFilterChange = ({ target: { name, value } }) => {
    setModalFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const onApply = (event) => {
    event.preventDefault();
    onApplyFilters(modalFilters);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="bg-[rgba(0,0,0,0.5)] fixed z-20 bottom-0 top-0 left-0 right-0 flex">
          <form
            onSubmit={onApply}
            className="px-6 m-auto flex flex-col justify-center items-center w-full max-w-[312px] rounded bg-white"
          >
            <div className="w-full flex justify-between py-4 items-center">
              <h1 className="font-medium text-xl leading-[30px] tracking-[0.15px]">
                Filters
              </h1>
              <button type="button" onClick={onClose}>
                <GrClose />
              </button>
            </div>
            <div className="flex gap-y-3 flex-col w-full">
              <SelectFilters
                filters={modalFilters}
                onFilterChange={onHandelFilterChange}
              />
            </div>
            <button
              type="submit"
              className="font-medium text-sm leading-4 tracking-[1.5px] text-[#2196F3] px-[30.46px] py-[10.005px] mt-8 mb-5 my-4 bg-[#F2F9FE] shadow-shadowButton rounded w-full"
            >
              APPLY
            </button>
          </form>
        </div>
      )}
      ;
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
  onApplyFilters: PropTypes.func.isRequired,
};

export default Modal;
