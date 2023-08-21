import React from "react";

const useParams = (searchParams, key, value) => {
  searchParams.set(key, value);

  return searchParams;
};

export default useParams;
