import Topography from "./Topography";
import styled from "styled-components";
import { useState } from "react";
import { Control, Controller } from "react-hook-form";
type ImageUploadProps = {
  type: "upload" | "download";
  height: string;
  width: string;
  isCircle?: boolean;
  name: string;
  control?: Control;
  url?: string;
};
type StyledImageUploadProps = {
  $height: string;
  $width: string;
  $isCircle?: boolean;
  $type: "upload" | "download";
  $preview: string | ArrayBuffer;
};
const Styled = styled.div<StyledImageUploadProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  & .imageBox {
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    border-radius: ${(props) => (props.$isCircle ? "50%" : "0px")};
    border: 1px solid black;
    position: relative;
    overflow: hidden;
    background-image: ${(props) =>
      props.$type === "upload" ? `url("/images/upload-Img.jpg")` : null};
    background-size: cover;
  }
  & .imageBox :hover {
    cursor: pointer;
  }
  & input {
    opacity: 0;
    position: absolute;
    color: transparent;
    background: transparent;
    border-radius: ${(props) => (props.$isCircle ? "50%" : "0px")};
    display: inline;
    width: 100%;
    height: 100%;
  }
  & .profileupload {
    z-index: ${(props) => (props.$preview ? "100" : "-100")};
    top: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .profileimg {
    top: 0px;
    left: 0px;
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .profileimg:hover {
    opacity: 0.7;
  }
`;
export default function ProfileImage({
  type,
  url = "",
  height,
  width,
  isCircle = false,
  name,
  control,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | ArrayBuffer>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const previewImg = new FileReader();
      previewImg.onload = (e) => {
        if (e.target?.result) {
          setPreview(e.target.result);
        }
      };
      previewImg.readAsDataURL(e.target?.files?.[0]);
    }
  };
  return (
    <Styled
      $height={height}
      $width={width}
      $isCircle={isCircle}
      $preview={preview}
      $type={type}
    >
      <div className="imageBox">
        {type === "upload" ? (
          <>
            <Controller
              name={name}
              control={control as Control}
              render={({ field: { onChange } }) => (
                <input
                  name={name}
                  type="file"
                  onChange={(e) => {
                    handleChange(e);
                    onChange(e.target?.files?.[0].name);
                  }}
                />
              )}
            />

            <img className="profileupload" src={preview as string} />
          </>
        ) : (
          <img className="profileimg" src={url || "/images/upload-Img.jpg"} />
        )}
      </div>
      {type === "upload" && (
        <Topography varient="subtitle3">Upload your image</Topography>
      )}
    </Styled>
  );
}
