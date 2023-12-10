import React from "react";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { RiFileExcel2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const GradingSheet = () => {
  const navigate = useNavigate();

  const handleRowClick = (path) => {
    navigate(path);
    console.log("hello");
  };

  return (
    <div className="w-full">
      <header className="relative font-semibold text-center">
        <div>
          <h1 className="py-4 text-2xl">Encoding of Grades</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1>AY. & Sem</h1>
          <select className="p-2" name="" id="">
            <option value="">2023 -2023 1st Semester </option>
            <option value="">2023 -2023 1st Semester </option>
            <option value="">2023 -2023 1st Semester </option>
          </select>
          <button
            className="px-4 py-2 my-2 text-white rounded shadow-lg bg-seaserpent"
            type="button"
          >
            Search
          </button>
        </div>
      </header>

      <main className="relative w-full">
        <div className="py-2 text-xl text-center bg-maroon text-antiquewhite md:py-4 md:text-2xl">
          <h1>
            Grading Sheet for <span>2023 - 2024 1st Semester</span>
          </h1>
        </div>
        <table className="table w-full text-center table-fixed">
          <thead className="relative text-white border-b-2 border-white bg-redwood">
            <tr>
              <th className="py-2">Class</th>
              <th className="py-2">Section</th>
              <th className="py-2">Subject Title</th>
              <th className="py-2">Schedule</th>
              <th className="py-2">Class List</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr
              className="shadow-lg cursor-pointer"
              onClick={() => handleRowClick("/faculty/grades/class1")} //change this if you have dynamic data
            >
              <td className="py-4">CSC 0413</td>
              <td className="py-4">2</td>
              <td className="py-4">CS Elective 1 (Lab)</td>
              <td className="py-4">W 6:00P - 8:00P GV 306</td>
              <td className="py-4">
                <button type="button" className="mx-1">
                  <MdOutlineLocalPrintshop className="w-7 h-7" />
                </button>
                <button type="button" className="mx-1">
                  <RiFileExcel2Line color="green" className="w-7 h-7" />
                </button>
              </td>
            </tr>

            <tr className="shadow-lg cursor-pointer">
              <td className="py-4">CSC 0413</td>
              <td className="py-4">2</td>
              <td className="py-4">CS Elective 1 (Lab)</td>
              <td className="py-4">W 6:00P - 8:00P GV 306</td>
              <td className="py-4">
                <button type="button" className="mx-1">
                  <MdOutlineLocalPrintshop className="w-7 h-7" />
                </button>
                <button type="button" className="mx-1">
                  <RiFileExcel2Line color="green" className="w-7 h-7" />
                </button>
              </td>
            </tr>

            <tr className="shadow-lg cursor-pointer">
              <td className="py-4">CSC 0413</td>
              <td className="py-4">2</td>
              <td className="py-4">CS Elective 1 (Lab)</td>
              <td className="py-4">W 6:00P - 8:00P GV 306</td>
              <td className="py-4">
                <button type="button" className="mx-1">
                  <MdOutlineLocalPrintshop className="w-7 h-7" />
                </button>
                <button type="button" className="mx-1">
                  <RiFileExcel2Line color="green" className="w-7 h-7" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default GradingSheet;
