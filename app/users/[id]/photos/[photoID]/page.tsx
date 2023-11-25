import React from "react";

interface Props {
  params: { id: number; photoID: number };
}

const PhotosDetailsPage = ({ params: { id, photoID } }: Props) => {
  return (
    <div>
      PhotosDetailsPage {id} {photoID}
    </div>
  );
};

export default PhotosDetailsPage;
