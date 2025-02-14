import { CiCamera } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import handleImageUpload from "../../utils/uploadImages";
export const ProjectEdit = () => {
  const [project, setProject] = useState({});
  const projectImg = useRef();

  return (
    <div className="h-full w-full p-2 flex gap-2  overflow-scroll overflow-x-hidden flex-col">
      <div className="w-full h-full">
        <div className="w-full p-4 flex h-full bg-white rounded-xl">
          <div className="h-full w-1/2 flex flex-col gap-3 justify-between p-4">
            <div className="flex flex-col gap-3">
              <div className="w-[147.63px] h-[19px]">
                <p className="font-bold text-[#11142D] tracking-[0.5%] leading-5 text-[1rem]">
                  Project Details
                </p>
              </div>
              <h1 className=" font-bold text-[0.75rem]">Project Name</h1>
              <input
                type="text"
                placeholder="Project Name"
                className="border-2 w-full p-2 -mt-2 rounded-xl"
              />
              <h1 className=" font-bold text-[0.75rem]">Domain Name</h1>
              <input
                type="text"
                placeholder="Domain Name"
                className="border-2 w-full p-2 -mt-2 rounded-xl"
              />
            </div>

            <button className="w-full h-[39px] py-[11px] px-[24px] font-bold text-[1rem] text-white tracking-[0.5%] leading-5 flex justify-center items-center bg-[#5541D7] rounded-[8px] gap-[10px]">
              Save
            </button>
          </div>
          <div className="h-full w-1/2 p-4">
            <div
              className=" border-dashed border-4 rounded-xl h-full w-full"
              onClick={() => projectImg.current.click()}
            >
              <div className="w-full flex flex-col h-full relative justify-center items-center">
                <CiCamera size={70} style={{ margin: "auto" }} />
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className=" hidden"
                  ref={projectImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[26vh] rounded-[14px] flex flex-col gap-3 p-2">
        <p className="font-bold text-[#11142D] text-[1rem] tracking-[0.5%] leading-5">
          About Project
        </p>
        <div className="w-[662.52px] h-[55px] bg-[#FAFAFA]"></div>
        <input
          type="text"
          className="w-full h-[150px] px-4"
          placeholder="Project Desc"
        />
      </div>
    </div>
  );
};
