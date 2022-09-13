export const getImage = (dispatchList, type) => {
  if (dispatchList === null) 
    return Array.from(new Array(5).keys()).map((item) => ({
      id: `pid_${item + 1}`,
      image: "/images/cong-van.png",
      type: type,
    }));
  else
    return Array.from(dispatchList).map((item) => ({
      id: `pid_${item + 1}`,
      image: `${process.env.REACT_APP_API_ENDPOINT}/${item.image_path}`,
      type: type !== "Công văn" ? type : item.category_name
      }
    ));
};
