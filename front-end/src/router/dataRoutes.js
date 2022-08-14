import DispatchCategory from "../page/DispatchCategory";
import DispatchList from "../page/DispatchList";

const dataRoutes = [
  {
    name: "Trang chủ",
    element: <DispatchList />,
    path: "/",
  },
  {
    name: "Danh mục công văn",
    element: <DispatchCategory />,
    path: "/DispatchCategory",
  },
];
export default dataRoutes;
