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
        desc: "Công văn hướng dẫn là công văn có nội dung hướng dẫn thực hiện về nội dung nào đó đã được quy định mà chưa rõ ràng hoặc chưa được quy định trong văn bản quy phạm pháp luật, văn bản nội bộ, quy định của đơn vị, cơ quan, tổ chức, doanh nghiệp theo yêu cầu của cấp dưới.",
      },
      {
        name: "Công văn giải thích",
        element: <ExplainOfficialDispatch />,
        icon: <FormatQuoteOutlinedIcon />,
        path: "/ExplainOfficialDispatch",
        desc: "Công văn giải thích là công văn được dùng để cụ thể hóa, chi tiết hóa nội dung của các văn bản khác về thực hiện một công việc nào đó mà cơ quan, cá nhân nhận được chưa rõ, có thể hiểu không đúng về các quy định, nội dung của văn bản đó.",
      },
      {
        name: "Công văn chỉ đạo",
        element: <CommandDispatch />,
        icon: <TouchAppOutlinedIcon />,
        path: "/CommandDispatch",
        desc: "Công văn chỉ đạo là công văn của cấp trên thông tin cho cơ quan, bộ phận cấp dưới về các công việc cần triển khai, cần thực hiện. Nội dung của loại công văn này gần giống với chỉ thị, nên các chủ thể cần cẩn trọng khi sử dụng loại văn bản này.",
      },
      {
        name: "Công văn đôn đốc, nhắc nhở",
        element: <ReminderDispatch />,
        icon: <EditNotificationsOutlinedIcon />,
        path: "/ReminderDispatch",
        desc: "Công văn đôn đốc nhắc nhở là công văn của cấp trên nhằm nhắc nhở, chấn chỉnh cấp dưới khi thực hiện các hoạt động, công việc, biện pháp, quyết định đã có yêu cầu thực hiện trước đó.",
      },
      {
        name: "Công văn đề nghị, yêu cầu",
        element: <RequestDispatch />,
        icon: <RequestPageOutlinedIcon />,
        path: "/RequestDispatch",
        desc: "Công văn đề nghị yêu cầu là công văn của các cơ quan, bộ phận cấp dưới, gửi cấp trên hoặc cơ quan, bộ phận ngang cấp để đề nghị, yêu cầu cơ quan, bộ phận đó cung cấp các thông tin, giải quyết công văn có liên quan đến nhiệm vụ, quyền hạn của các cơ quan đó.",
      },
      {
        name: "Công văn phúc đáp",
        element: <ReplyDispatch />,
        icon: <ReplyAllOutlinedIcon />,
        path: "/ReplyDispatch",
        desc: "Là công văn dùng để trả lời về những vấn đề mà cơ quan, đơn vị, tổ chức, doanh nghiệp yêu cầu thuộc thẩm quyền, nhiệm vụ, quyền hạn của mình.",
      },
      {
        name: "Công văn xin ý kiến",
        element: <ConsultDispatch />,
        icon: <TipsAndUpdatesOutlinedIcon />,
        path: "/ConsultDispatch",
        desc: "Là công văn của cấp dưới yêu cầu cấp trên cho ý kiến chỉ đạo, hướng dẫn thực hiện một hoặc một số công việc nhất định khi có vấn đề phát sinh.",
      },
    ],
  },
];
export default dataRoutes;
