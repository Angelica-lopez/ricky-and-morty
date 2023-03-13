import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";

const Character = () => (
  <div className="flex justify-start max-w-[1100px] px-[40px] m-auto flex-col">
    <div className="flex items-center py-4">
      <BiArrowBack className="w-6 h-6" />
      <div className="ml-3 text-lg font-bold">Go Back</div>
    </div>
    <div className="flex flex-col items-center">
      <div className="h-[300px] w-[300px] relative rounded-[50%] overflow-hidden border-1 border-[rgba(242,242,247,1)]">
        <Image fill src="/images/rick.png" />
      </div>
      <h1 className="text-[40px] font-normal leading-[56.25px] text-[rgba(8,31,50,1)]">
        Rick Sanchez
      </h1>
    </div>
    <div className="flex w-full justify-between">
      <div className="flex flex-col w-[48%] my-[42px]">
        <h1 className="font-medium text-xl leading-6 tracking-[0.15px] text-[rgba(142,142,147,1)] mb-11">
          Informations
        </h1>
        <div className="w-full">
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Gender
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              Male
            </h5>
          </div>
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Status
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              Male
            </h5>
          </div>
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Specie
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              Male
            </h5>
          </div>
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Origin
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              Male
            </h5>
          </div>
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Type
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              Male
            </h5>
          </div>
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              Location
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-3">
              Male
            </h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[48%] my-[42px]">
        <h1 className="font-medium text-xl leading-6 tracking-[0.15px] text-[rgba(142,142,147,1)] mb-11">
          Episodes
        </h1>
        <div className="w-full">
          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              S01E01
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-0.5">
              Pilot
            </h5>
            <h6 className="font-medium text-[10px] text-[rgba(110,121,140,1)] pb-3 leading-4 tracking-[1.5px]">
              DECEMBER 2, 2013
            </h6>
          </div>

          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              S01E01
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-0.5">
              Pilot
            </h5>
            <h6 className="font-medium text-[10px] text-[rgba(110,121,140,1)] pb-3 leading-4 tracking-[1.5px]">
              DECEMBER 2, 2013
            </h6>
          </div>

          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              S01E01
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-0.5">
              Pilot
            </h5>
            <h6 className="font-medium text-[10px] text-[rgba(110,121,140,1)] pb-3 leading-4 tracking-[1.5px]">
              DECEMBER 2, 2013
            </h6>
          </div>

          <div className="border-b border-[(255,255,255,1)]">
            <h3 className="font-bold text-base leading-6 tracking-[0.15px] text-[rgba(8,31,50,1)] pt-[9px]">
              S01E01
            </h3>
            <h5 className="font-base text-sm text-[rgba(110,121,140,1)] pb-0.5">
              Pilot
            </h5>
            <h6 className="font-medium text-[10px] text-[rgba(110,121,140,1)] pb-3 leading-4 tracking-[1.5px]">
              DECEMBER 2, 2013
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Character;
