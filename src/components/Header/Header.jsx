import Image from "next/image";

const Header = () => (
  <header className="py-[6px] shadow-shadowHeader">
    <div className="flex justify-start max-w-[1100px] px-3 xs:px-10 m-auto">
      <Image
        src="/static/images/logoHeader.png"
        width={50}
        height={50}
        alt="Logo rick and morty"
      />
    </div>
  </header>
);

export default Header;
