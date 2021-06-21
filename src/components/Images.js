import React, { useState } from "react";
import "./Images.css";
import Image from "./Image";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchImage from "../utils/hooks/useFetchImage";
import Loading from "./Loading";
import useDebounce from "../utils/hooks/useDebounce";

export default function Images() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [images, setImages, errors, isLoading] = useFetchImage(
    page,
    searchTerm
  );
  const debounce = useDebounce();

  function handleRemove(index) {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  function handleSearch(e) {
    const value = e.target.value;
    debounce(() => setSearchTerm(value));
  }

  function ShowImage() {
    return (
      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        className="gallery"
      >
        {images.map((image, index) => (
          <Image
            image={image.urls.regular}
            index={index}
            key={index}
            title={image.alt_description}
            time={image.created_at}
            handleRemove={handleRemove}
          />
        ))}
      </InfiniteScroll>
    );
  }

  return (
    <>
      <div className="search">
        <input
          placeholder="Nhập ảnh tìm kiếm.."
          type="text"
          className="search__input"
          onChange={handleSearch}
        />
      </div>
      {errors.length > 0 && (
        <div className="errors">
          <h1 className="heading__error">{errors}</h1>
          <p>hãy kiểm tra lại xem gọi api đúng chưa</p>
        </div>
      )}
      <ShowImage />
      {isLoading && <Loading />}
    </>
  );
}
