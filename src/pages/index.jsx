import Image from "next/image";
import { useState } from "react";
import Card from "../components/Card";
import InputSearch from "../components/InputSearch";
import Modal from "../components/Modal";
import { getCharacters } from "../api";
import {
  SPECIES_OPTIONS,
  GENDER_OPTIONS,
  STATUS_OPTIONS,
  DEFAULT_FILTERS,
} from "../data";
import SelectFilters from "../components/SelectFilters";

const Home = ({ characters }) => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => setOpenModal(false);
  const onOpenModal = () => setOpenModal(true);

  const onHandelFilterChange = ({ target: { name, value } }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <>
      {openModal && (
        <Modal
          onClose={onCloseModal}
          isOpen={openModal}
          onApplyFilters={setFilters}
          speciesOptions={SPECIES_OPTIONS}
          genderOptions={GENDER_OPTIONS}
          statusOptions={STATUS_OPTIONS}
          filters={filters}
        />
      )}
      <div className="flex flex-col items-center max-w-[1100px] px-6 xs:px-10 m-auto relative z-10 ">
        <Image
          src="/images/Logo.svg"
          width={600}
          height={100}
          className="py-[26px]"
          alt="Logo letras"
          priority
        />
        <div className="flex flex-col xs:hidden w-full gap-y-4 mb-12 mt-10">
          <InputSearch
            name="name"
            value={filters.name}
            placeholder="Filter by name..."
            onChange={onHandelFilterChange}
          />
          <button
            onClick={onOpenModal}
            type="submit"
            className="w-full font-medium text-sm leading-4 tracking-[1.5px] text-[#2196F3] px-[30.46px] py-5 bg-[#F2F9FE] shadow-shadowButton rounded"
          >
            MORE FILTERS
          </button>
        </div>
        <div className="xs:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-cols-[repeat(auto-fit,minmax(240px,1fr))]  gap-5 justify-items-center w-full pb-4 hidden xs:grid">
          <InputSearch
            name="name"
            value={filters.name}
            placeholder="Filter by name..."
            onChange={onHandelFilterChange}
          />
          <SelectFilters
            filters={filters}
            onFilterChange={onHandelFilterChange}
          />
        </div>

        <div className="xs:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] grid gap-5 justify-items-center w-full">
          {characters?.map((elem) => (
            <Card
              key={elem.id}
              id={elem.id}
              name={elem.name}
              species={elem.species}
              imageUrl={elem.image}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-12 pb-11">
        <button
          type="submit"
          className="font-medium text-sm leading-4 tracking-[1.5px] text-[#2196F3] px-[30.46px] py-[10.005px] bg-[#F2F9FE] shadow-shadowButton rounded"
        >
          LOAD MORE
        </button>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const characters = await getCharacters();
  return { props: { characters: characters.results } };
};

export default Home;
