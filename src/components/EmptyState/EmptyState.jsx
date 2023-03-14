import Image from "next/image";

const EmptyState = () => (
  <div className="flex items-center justify-center flex-col">
    <Image
      src="/images/emptyCharacters.png"
      width={300}
      height={100}
      alt="Logo letras"
      priority
    />
    <h1 className="text-center font-medium mt-3 text-lg ">
      Sorry, there is no data avaliable, try with other filters
    </h1>
  </div>
);

export default EmptyState;
