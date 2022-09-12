import DispatchCategory from "../page/DispatchCategory";
import DispatchList from "../page/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";
import EditNotificationsOutlinedIcon from "@mui/icons-material/EditNotificationsOutlined";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";

const dataRoutes = [
  {
    name: "Trang chủ",
    element: <DispatchList />,
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  {
    name: "Danh mục công văn",
    element: <DispatchCategory />,
    icon: <CategoryOutlinedIcon />,
    path: "/DispatchCategory",
    children: [
      {
        name: "Công văn giải thích",
        element: <DispatchCategory />,
        icon: <ChatOutlinedIcon />,
        path: "/DispatchCategory",
      },
      {
        name: "Công văn chỉ đạo",
        element: <DispatchCategory />,
        icon: <TouchAppOutlinedIcon />,
        path: "/DispatchCategory",
      },
      {
        name: "Công văn đôn đốc, nhắc nhở",
        element: <DispatchCategory />,
        icon: <EditNotificationsOutlinedIcon />,
        path: "/DispatchCategory",
      },
      {
        name: "Công văn đề nghị, yêu cầu",
        element: <DispatchCategory />,
        icon: <RequestPageOutlinedIcon />,
        path: "/DispatchCategory",
      },
      {
        name: "Công văn phúc đáp",
        element: <DispatchCategory />,
        icon: <ReplyAllOutlinedIcon />,
        path: "/DispatchCategory",
      },
      {
        name: "Công văn xin ý kiến",
        element: <DispatchCategory />,
        icon: <TipsAndUpdatesOutlinedIcon />,
        path: "/DispatchCategory",
      },
    ],
  },
];
export default dataRoutes;
