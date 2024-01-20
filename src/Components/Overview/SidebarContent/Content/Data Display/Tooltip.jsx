import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";

// icons
import { SlInfo } from "react-icons/sl";

const Tooltip = () => {
  // roundedTooltipPreview
  const [roundedTooltipPreview, setRoundedTooltipPreview] = useState(true);
  const [roundedTooltipCode, setRoundedTooltipCode] = useState(false);

  const handleRoundedTooltipPreview = () => {
    setRoundedTooltipPreview(true);
    setRoundedTooltipCode(false);
  };

  const handleRoundedTooltipCode = () => {
    setRoundedTooltipCode(true);
    setRoundedTooltipPreview(false);
  };

  // arrowTooltipPreview
  const [arrowTooltipPreview, setArrowTooltipPreview] = useState(true);
  const [arrowTooltipCode, setArrowTooltipCode] = useState(false);

  const handleArrowTooltipPreview = () => {
    setArrowTooltipPreview(true);
    setArrowTooltipCode(false);
  };

  const handleArrowTooltipCode = () => {
    setArrowTooltipCode(true);
    setArrowTooltipPreview(false);
  };

  return (
    <>
      <aside>
        <div className="p-4 flex gap-2 w-[80%] bg-[#d18f0011] border border-[#d18e00]  rounded mb-8">
          <p>
            <SlInfo className="text-[#d17d00] text-[1.2rem]" />
          </p>
          <p className="text-[#d18e00] text-[0.9rem]">
            You can style it yourself if you want. And after copying the code
            you " z-index " check a little. And since the tooltip is only coming
            up on hovering over a button to show the demo, you'll need to set it
            up well in your project when you get this code.
          </p>
        </div>
        <ContentHeader text={"rounded tooltip"} />

        <p className="w-[80%] text-text text-[1rem]">
          This is the card skeleton. The skeleton provided here basically shows
          the information of an account.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                roundedTooltipPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleRoundedTooltipPreview}>
              Preview
            </button>
            <button
              className={`${
                roundedTooltipCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleRoundedTooltipCode}>
              Code
            </button>
          </div>
          {roundedTooltipPreview && (
            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
              <div className=" relative group">
                <button className="px-3 py-2 border border-primary rounded text-primary ">
                  Rounded Tooltip
                </button>

                <div className=" absolute bottom-[-90%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                    Rounded Tooltip
                  </span>
                </div>
              </div>
            </div>
          )}

          {roundedTooltipCode && (
            <Showcode
              code='
import React from "react";

const RoundedTooltip = () => {
  return (
    <div className=" relative group">
      <button className="px-3 py-2 border border-primary rounded text-primary ">
        Rounded Tooltip
      </button>

      <div className=" absolute bottom-[-90%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
        <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
          Rounded Tooltip
        </span>
      </div>
    </div>
  );
};

export default RoundedTooltip;
              '
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"arrow tooltip"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          This is the card skeleton. The skeleton provided here basically shows
          the information of an account.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                arrowTooltipPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleArrowTooltipPreview}>
              Preview
            </button>
            <button
              className={`${
                arrowTooltipCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleArrowTooltipCode}>
              Code
            </button>
          </div>
          {arrowTooltipPreview && (
            <div className="p-8 pb-12 mb-4 flex items-center flex-col gap-5 justify-center">
              <div className="flex items-center gap-6">
                <div className=" relative group">
                  <button className="px-3 py-2 border border-primary rounded text-primary ">
                    Left
                  </button>

                  <div className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-[1%] before:rotate-[40deg] before:rounded-b-3xl">
                    <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                      Left
                    </span>
                  </div>
                </div>

                <div className=" relative group">
                  <button className="px-3 py-2 border border-primary rounded text-primary ">
                    Center
                  </button>

                  <div className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-1/3 before:rotate-[45deg] before:rounded-b-3xl">
                    <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                      Center
                    </span>
                  </div>
                </div>
                <div className=" relative group">
                  <button className="px-3 py-2 border border-primary rounded text-primary ">
                    Right
                  </button>

                  <div className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:right-[1%] before:rotate-[45deg] before:rounded-r-3xl">
                    <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                      Right
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {arrowTooltipCode && (
            <Showcode
              code='
import React from "react";

const ArrowTooltip = () => {
  return (
    <div className="flex items-center gap-6">
      <div className=" relative group">
        {/* left */}
        <button className="px-3 py-2 border border-primary rounded text-primary ">
          Left
        </button>

        <div className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-[1%] before:rotate-[40deg] before:rounded-b-3xl">
          <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
            Left
          </span>
        </div>
      </div>

      {/* center */}
      <div className=" relative group">
        <button className="px-3 py-2 border border-primary rounded text-primary ">
          Center
        </button>

        <div className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-1/3 before:rotate-[45deg] before:rounded-b-3xl">
          <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
            Center
          </span>
        </div>
      </div>

      {/* right */}
      <div className=" relative group">
        <button className="px-3 py-2 border border-primary rounded text-primary ">
          Right
        </button>

        <div className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:right-[1%] before:rotate-[45deg] before:rounded-r-3xl">
          <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
            Right
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArrowTooltip;
              '
            />
          )}
        </div>

        <OverviewFooter />
      </aside>
      <Helmet>
        <title>Data Display - Tooltip</title>
      </Helmet>
    </>
  );
};

export default Tooltip;