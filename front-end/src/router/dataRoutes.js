import DispatchCategory from "../page/DispatchCategory";
import DispatchList from "../page/Home";
import AtomIconHomeOutlined from "../Atomic/atoms/AtomIconHomeOutlined";
import AtomIconCategoryOutlined from "../Atomic/atoms/AtomIconCategoryOutlined";

const dataRoutes = [
  {
    name: "Trang chủ",
    element: <DispatchList />,
    icon: <AtomIconHomeOutlined />,
    path: "/",
  },
  {
    name: "Danh mục công văn",
    element: <DispatchCategory />,
    icon: <AtomIconCategoryOutlined />,
    path: "/DispatchCategory",
  },
];
export default dataRoutes;
