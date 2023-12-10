import { createBrowserRouter } from "react-router-dom";
import FacultyLayout from "./components/FacultyLayout";
import DocumentTitle from "./components/DocumentTitle";
import Dashboard from "./views/faculty/Dashboard";
import ProfileModule from "./views/faculty/ProfileModule.jsx";
import ClassAssignment from "./views/faculty/ClassAssignment.jsx";
import SearchClassAssignment from "./views/faculty/SearchClassAssignment.jsx";
import GradingSheet from "./views/faculty/GradingSheet.jsx";
import UpdateGrade from "./views/faculty/UpdateGrade.jsx";
import ChangePassword from "./views/faculty/ChangePassword.jsx";
import GradingSheetClass from "./views/faculty/GradingSheetClass.jsx";
import GradingSheetReport from "./views/faculty/GradingSheetReport.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FacultyLayout />,
    children: [
      {
        path: "/faculty/dashboard",
        element: (
          <>
            <DocumentTitle title="Dashboard" />
            <Dashboard />
          </>
        ),
      },
      {
        path: "/faculty/profile",
        element: (
          <>
            <DocumentTitle title="Profile" />
            <ProfileModule />
          </>
        ),
      },
      {
        path: "/faculty/class-assignment",
        element: (
          <>
            <DocumentTitle title="Class Assignment" />
            <ClassAssignment />
          </>
        ),
      },
      {
        path: "/faculty/class-assignment/search",
        element: (
          <>
            <DocumentTitle title="Search Class Assignment" />
            <SearchClassAssignment />
          </>
        ),
      },
      {
        path: "/faculty/grades",
        element: (
          <>
            <DocumentTitle title="Grading Sheet" />
            <GradingSheet />
          </>
        ),
      },
      {
        path: "/faculty/grades/class1",
        element: (
          <>
            <DocumentTitle title="Report of Grades" />
            <GradingSheetClass />
          </>
        ),
      },
      {
        path: "/faculty/grades/class1/report",
        element: (
          <>
            <DocumentTitle title="Report of Grades" />
            <GradingSheetReport />
          </>
        ),
      },
      {
        path: "/faculty/grades/update",
        element: (
          <>
            <DocumentTitle title="Update Grades" />
            <UpdateGrade />
          </>
        ),
      },
      {
        path: "/faculty/change-password",
        element: (
          <>
            <DocumentTitle title="Change Password" />
            <ChangePassword />
          </>
        ),
      },
    ],
  },
]);

export default router;
