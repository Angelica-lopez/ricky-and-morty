import Image from "next/image";
import Card from "../components/Card";
import InputSelect from "../components/InputSelect";
import InputSearch from "../components/InputSearch";
import { infoSpecies, infoGender, infoStatus } from "../data";

const Home = ({ characters }) => (
  <>
    <div className="flex flex-col items-center max-w-[1100px] px-10 m-auto">
      <Image
        src="/images/Logo.svg"
        width={600}
        height={100}
        className="py-[26px]"
        alt="Logo letras"
      />
      <div className="grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid gap-5 justify-items-center w-full pb-4">
        <InputSearch name="search" placeholder="Filter by name..." />
        <InputSelect name="species" options={infoSpecies} category="Species" />
        <InputSelect name="gender" options={infoGender} category="Gender" />
        <InputSelect name="status" options={infoStatus} category="Status" />
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

Home.getInitialProps = async () => {
  const characterRes = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await characterRes.json();
  return { characters: characters.results };
};

export default Home;
