"use client";
import { strict } from "assert";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import React, { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadImage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          alt="Madhu PP Image"
          height={180}
          width={270}
        />
      )}
      <CldUploadWidget
        uploadPreset="ml_default"
        options={{ sources: ["local"], multiple: false, maxFiles: 2 }}
        onUpload={(result, widget) => {
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadImage;
