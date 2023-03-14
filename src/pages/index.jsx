import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import EmptyState from "../components/EmptyState";
import InputSearch from "../components/InputSearch";
import Modal from "../components/Modal";
import { getCharacters } from "../api";
import { formatFilters } from "../utils";
import {
  SPECIES_OPTIONS,
  GENDER_OPTIONS,
  STATUS_OPTIONS,
  DEFAULT_FILTERS,
} from "../data";
import SelectFilters from "../components/SelectFilters";

const Home = ({ characters, filters: filtersProp }) => {
  const router = useRouter();
  const [searchedName, setSearchedName] = useState(filtersProp.name || "");
  const [fetchFromClient, setFetchFromClient] = useState(false);
  const [filters, setFilters] = useState({
    ...DEFAULT_FILTERS,
    ...filtersProp,
  });
  const [openModal, setOpenModal] = useState(false);
  const [characterState, setCharacterState] = useState(characters);
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(false);

  const onCloseModal = () => setOpenModal(false);
  const onOpenModal = () => setOpenModal(true);

  const onHandelFilterChange = ({ target: { name, value } }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    if (!fetchFromClient) setFetchFromClient(true);
  };

  const onHandelInputChange = ({ target: { value } }) => {
    setSearchedName(value);
    if (!fetchFromClient) setFetchFromClient(true);
  };

  const onFeachCharactersByFilter = async () => {
    setIsLoadingCharacters(true);
    try {
      const formattedFilters = formatFilters({
        ...filters,
        name: searchedName,
      });
      const filteredCharacters = await getCharacters(formattedFilters);
      setCharacterState(filteredCharacters.results || []);
      router.push({
        pathname: "/",
        query: {
          ...(filters.gender && { gender: filters.gender }),
          ...(filters.species && { species: filters.species }),
          ...(filters.status && { status: filters.status }),
          ...(searchedName && { name: searchedName }),
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingCharacters(false);
    }
  };

  const onClearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchedName("");
  };

  useEffect(() => {
    if (fetchFromClient) {
      onFeachCharactersByFilter();
    }
  }, [filters]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (fetchFromClient) {
        onFeachCharactersByFilter();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchedName]);

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
          src="/static/images/logo.svg"
          width={600}
          height={100}
          className="py-[26px]"
          alt="Logo letras"
          priority
        />
        <div className="flex flex-col xs:hidden w-full gap-y-4 mb-12 mt-10">
          <InputSearch
            name="name"
            value={searchedName}
            placeholder="Filter by name..."
            onChange={onHandelInputChange}
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
            value={searchedName}
            placeholder="Filter by name..."
            onChange={onHandelInputChange}
          />
          <SelectFilters
            filters={filters}
            onFilterChange={onHandelFilterChange}
          />
        </div>
        {isLoadingCharacters ? (
          <div className="py-2">
            <Image
              src="/static/images/loading.svg"
              width={300}
              height={100}
              className="animate-spin"
              alt="Loading image"
              priority
            />
          </div>
        ) : !characterState?.length ? (
          <EmptyState />
        ) : (
          <div className="xs:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] grid gap-5 justify-items-center w-full">
            {characterState?.map((elem) => (
              <Card
                key={elem.id}
                id={elem.id}
                name={elem.name}
                species={elem.species}
                imageUrl={elem.image}
              />
            ))}
          </div>
        )}
        {(Object.values(filters).some((filter) => !!filter) ||
          !!searchedName) && (
          <div className="flex justify-center py-6">
            <button
              type="button"
              onClick={onClearFilters}
              className="font-medium text-sm leading-4 tracking-[1.5px] text-[#2196F3] px-[30.46px] py-[10px] bg-[#F2F9FE] shadow-shadowButton rounded uppercase"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const formattedParams = formatFilters(query);
  const characters = await getCharacters(formattedParams);

  return { props: { characters: characters?.results || [], filters: query } };
};

export default Home;
