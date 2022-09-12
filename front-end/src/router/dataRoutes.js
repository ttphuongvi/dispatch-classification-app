import DispatchCategory from "../page/DispatchCategory";
import DispatchList from "../page/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";
import EditNotificationsOutlinedIcon from "@mui/icons-material/EditNotificationsOutlined";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import InstructiveDispatch from "../page/InstructiveDispatch";
import ExplainOfficialDispatch from "../page/ExplainOfficialDispatch";
import RequestDispatch from "../page/RequestDispatch";
import ReminderDispatch from "../page/ReminderDispatch";
import CommandDispatch from "../page/CommandDispatch";
import ReplyDispatch from "../page/ReplyDispatch";
import ConsultDispatch from "../page/ConsultDispatch";

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
        name: "Công văn hướng dẫn",
        element: <InstructiveDispatch />,
        icon: <DocumentScannerOutlinedIcon />,
        path: "/InstructiveDispatch",
      },
      {
        name: "Công văn giải thích",
        element: <ExplainOfficialDispatch />,
        icon: <FormatQuoteOutlinedIcon />,
        path: "/ExplainOfficialDispatch",
      },
      {
        name: "Công văn chỉ đạo",
        element: <CommandDispatch />,
        icon: <TouchAppOutlinedIcon />,
        path: "/CommandDispatch",
      },
      {
        name: "Công văn đôn đốc, nhắc nhở",
        element: <ReminderDispatch />,
        icon: <EditNotificationsOutlinedIcon />,
        path: "/ReminderDispatch",
      },
      {
        name: "Công văn đề nghị, yêu cầu",
        element: <RequestDispatch />,
        icon: <RequestPageOutlinedIcon />,
        path: "/RequestDispatch",
      },
      {
        name: "Công văn phúc đáp",
        element: <ReplyDispatch />,
        icon: <ReplyAllOutlinedIcon />,
        path: "/ReplyDispatch",
      },
      {
        name: "Công văn xin ý kiến",
        element: <ConsultDispatch />,
        icon: <TipsAndUpdatesOutlinedIcon />,
        path: "/ConsultDispatch",
      },
    ],
  },
];
export default dataRoutes;
