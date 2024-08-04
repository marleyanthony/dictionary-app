import { createApi } from "unsplash-js";
import { Photo } from "../Types/Types";
import { useEffect, useState } from "react";

const PhotoComponent = () => {
  const [photoResponse, setPhotosResponse] = useState<any | null>(null);
  const unsplash = createApi({
    accessKey: "bHUc8RD8oZ43PJAzlLSU79uLGtsUr-TyEWKiJRP4a-c",
  });

  useEffect(() => {
    unsplash.search
      .getPhotos({ query: "basketball", orientation: "landscape" })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.error("something went wrong!");
      });
  });

  const PhotoComp: React.FC<{ photo: Photo }> = ({ photo }) => {
    const { user, urls } = photo;

    return (
      <>
        <img className="img" src={urls.regular} alt="filler" />
        <a
          className="credit"
          target="_blank"
          href={`https://unsplash.com/@${user.username}`}
          rel="noreferrer"
        >
          {user.name}
        </a>
      </>
    );
  };

  if (photoResponse === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="feed">
        <PhotoComp photo={photoResponse.response.results[0]} />
      </div>
    );
  }
};

export default PhotoComponent;
