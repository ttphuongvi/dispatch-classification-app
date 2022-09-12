export const getImage = (num = 10) => {
  return Array.from(new Array(num).keys()).map((item) => ({
    id: `pid_${item + 1}`,
    image: "/images/cong-van.png",
    type: "Công văn giải thích",
  }));
};
