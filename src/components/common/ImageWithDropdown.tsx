import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ProfileImage from "./Image";
type Options = { name: string; render: () => React.ReactNode }[];
type ImageWithDropdownProps = {
  optionsArray: Options;
};
type StyledDropDown = {
  $isDropdownOpen: boolean;
};

const ImageDropdown = styled.span<StyledDropDown>`
  position: relative;
  display: flex;
  flex-direction: column;
  .dropdown {
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 4px;
    background: grey;
    width: 150px;
    position: absolute;
    transition: 0.3s ease-in-out;
    top: 100%;
    right: 0%;
    z-index: 100;
    overflow: hidden;
  }

  .dropdown:hover {
  }
  .nodropdown {
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    border-radius: 4px;
    background: grey;
    width: 150px;
    position: absolute;
    top: 100%;
    right: 0%;
    z-index: 100;
    height: 0px;
    overflow: hidden;
  }
  .options {
    display: flex;
    justify-content: space-around;
  }
`;
export default function ImageWithDropdown({
  optionsArray,
}: ImageWithDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const clickEvent = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      dropdownRef.current.className === "dropdown" &&
      (e.target as HTMLElement)?.className !== "profileimg"
    ) {
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", (e) => clickEvent(e));

    return () => {
      document.removeEventListener("mousedown", (e) => clickEvent(e));
    };
  }, []);
  return (
    <ImageDropdown
      onClick={() => handleDropdown()}
      $isDropdownOpen={isDropdownOpen}
    >
      <ProfileImage
        type="download"
        width="42px"
        height="42px"
        isCircle={true}
        name="image"
      />
      {
        <div
          className={isDropdownOpen ? "dropdown" : "nodropdown"}
          ref={dropdownRef}
        >
          {optionsArray.map((elm) => {
            return (
              <div
                className="options"
                key={elm.name}
                onClick={() => setIsDropdownOpen(false)}
              >
                {elm.render()}
              </div>
            );
          })}
        </div>
      }
    </ImageDropdown>
  );
}
