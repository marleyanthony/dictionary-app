import { createApi } from "unsplash-js";
import { Photo } from "../Types/Types";
import { useEffect, useState } from "react";

const PhotoComponent = (term: any) => {
  const [photoResponse, setPhotosResponse] = useState<any | null>(null);
  const unsplash = createApi({
    accessKey: "bHUc8RD8oZ43PJAzlLSU79uLGtsUr-TyEWKiJRP4a-c",
  });

  useEffect(() => {
    unsplash.search
      .getPhotos({ query: `${term.term}`, orientation: "landscape" })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.error("something went wrong!");
      });
  }, [term.term]);

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

  if (photoResponse !== null && photoResponse.type === "fail") {
    return <h1>Loading...</h1>;
  }

  if (photoResponse !== null && photoResponse.type === "success") {
    return (
      <div className="feed">
        <PhotoComp photo={photoResponse.response.results[0]} />
      </div>
    );
  }
  return <h1>test</h1>;
};

export default PhotoComponent;
