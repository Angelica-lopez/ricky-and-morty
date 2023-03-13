import Image from "next/image";
import { useState } from "react";
import Card from "../components/Card";
import InputSelect from "../components/InputSelect";
import InputSearch from "../components/InputSearch";
import {
  SPECIES_OPTIONS,
  GENDER_OPTIONS,
  STATUS_OPTIONS,
  DEFAULT_FILTERS,
} from "../data";

const Home = ({ characters }) => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const onHandelFilterChange = ({ target: { name, value } }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col items-center max-w-[1100px] px-10 m-auto">
        <Image
          src="/images/Logo.svg"
          width={600}
          height={100}
          className="py-[26px]"
          alt="Logo letras"
          priority
        />
        <div className="grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid gap-5 justify-items-center w-full pb-4">
          <InputSearch
            name="name"
            value={filters.name}
            placeholder="Filter by name..."
            onChange={onHandelFilterChange}
          />
          <InputSelect
            name="species"
            value={filters.species}
            options={SPECIES_OPTIONS}
            category="Species"
            onChange={onHandelFilterChange}
          />
          <InputSelect
            name="gender"
            value={filters.gender}
            options={GENDER_OPTIONS}
            category="Gender"
            onChange={onHandelFilterChange}
          />
          <InputSelect
            name="status"
            value={filters.status}
            options={STATUS_OPTIONS}
            category="Status"
            onChange={onHandelFilterChange}
          />
        </div>
        <div className="grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid gap-5 justify-items-center w-full">
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

Home.getInitialProps = async () => {
  const characterRes = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await characterRes.json();
  return { characters: characters.results };
};

export default Home;
