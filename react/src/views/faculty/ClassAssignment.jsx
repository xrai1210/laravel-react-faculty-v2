import React from "react";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import Button from "../../components/Button";
import { IoIosAddCircleOutline } from "react-icons/io";

const ClassAssignment = () => {
  return (
    <div>
      <header className="relative flex flex-col items-center justify-center font-semibold text-center">
        <h1 className="py-4 text-2xl">Current Class Assignment</h1>
        <Button
          color="seaserpent"
          label="Print"
          icon={<MdOutlineLocalPrintshop className="mr-2 h-7 w-7" />}
          newClass="text-white flex flex-row items-center"
        />
      </header>

      <main>
        <div className="py-2 text-xl text-center bg-maroon text-antiquewhite md:py-4 md:text-2xl">
          <h1>1st Semester SY. 2023-2024</h1>
        </div>

        {/* for mobile view */}
        <div className="md:hidden">
          <div className="my-2 bg-white rounded shadow-lg">
            <div className="flex flex-row items-center justify-between px-2 py-4 border-2 border-black border-opacity-50 rounded cursor-pointer bg-duststorm">
              <h1 className="text-lg font-semibold">Class 1</h1>
              <IoIosAddCircleOutline className="w-7 h-7"/>
            </div>

            <div className="p-2 ">
              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Class Code:</h1>
                <p className="w-1/2">20223</p>
              </div>

              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Corse Code & Section:</h1>
                <p className="w-1/2">CSC 0123.1-4</p>
              </div>

              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Course Title:</h1>
                <p className="w-1/2">CS Elective 2 (Lab)</p>
              </div>

              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Class Schedule:</h1>
                <p className="w-1/2">
                  M 6:00p - 9:00p <span>Comlab 4</span>
                </p>
              </div>

              <div className="flex flex-row items-center justify-between my-2">
                <h1 className="w-1/2 font-semibold">Credits:</h1>
                <p className="w-1/2">3</p>
              </div>
            </div>
          </div>

          <div className="my-2 bg-white rounded shadow-lg">
            <div className="flex flex-row items-center justify-between px-2 py-4 border-2 border-black border-opacity-50 rounded cursor-pointer bg-duststorm">
              <h1 className="text-lg font-semibold">Class 2</h1>
              <IoIosAddCircleOutline className="w-7 h-7" />
            </div>

            <div className="p-2 ">
              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Class Code:</h1>
                <p className="w-1/2">20223</p>
              </div>

              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Corse Code & Section:</h1>
                <p className="w-1/2">CSC 0123.1-4</p>
              </div>

              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Course Title:</h1>
                <p className="w-1/2">CS Elective 2 (Lab)</p>
              </div>

              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Class Schedule:</h1>
                <p className="w-1/2">
                  M 6:00p - 9:00p <span>Comlab 4</span>
                </p>
              </div>

              <div className="flex flex-row items-center justify-between my-2">
                <h1 className="w-1/2 font-semibold">Credits:</h1>
                <p className="w-1/2">3</p>
              </div>
            </div>
          </div>

          <div className="my-2 bg-white rounded shadow-lg">
            <div className="flex flex-row items-center justify-between px-2 py-4 border-2 border-black border-opacity-50 rounded cursor-pointer bg-duststorm">
              <h1 className="text-lg font-semibold">Class 3</h1>
              <IoIosAddCircleOutline className="w-7 h-7" />
            </div>

            <div className="p-2 ">
              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Class Code:</h1>
                <p className="w-1/2">20223</p>
              </div>

              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Corse Code & Section:</h1>
                <p className="w-1/2">CSC 0123.1-4</p>
              </div>

              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Course Title:</h1>
                <p className="w-1/2">CS Elective 2 (Lab)</p>
              </div>

              <div className="flex flex-row items-center justify-between my-2 border-b-2">
                <h1 className="w-1/2 font-semibold">Class Schedule:</h1>
                <p className="w-1/2">
                  M 6:00p - 9:00p <span>Comlab 4</span>
                </p>
              </div>

              <div className="flex flex-row items-center justify-between my-2">
                <h1 className="w-1/2 font-semibold">Credits:</h1>
                <p className="w-1/2">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* for desktop view */}
        <div className="hidden md:block">
          <table className="table w-full text-center table-fixed">
            <thead className=" bg-redwood text-antiquewhite">
              <tr>
                <th className="py-4">Class Code</th>
                <th className="py-4">Course Code & Section</th>
                <th className="py-4">Course Title</th>
                <th className="py-4">Class Schedule</th>
                <th className="py-4">Credits</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border">
                <td className="py-2">20223</td>
                <td className="py-2">CSC 0123.1-4</td>
                <td className="py-2">CS Elective 2 (Lab)</td>
                <td className="py-2">M 6:00p - 9:00p Comlab 4</td>
                <td className="py-2">3</td>
              </tr>
              <tr className="border">
                <td className="py-2">20223</td>
                <td className="py-2">CSC 0123.1-4</td>
                <td className="py-2">CS Elective 2 (Lab)</td>
                <td className="py-2">M 6:00p - 9:00p Comlab 4</td>
                <td className="py-2">3</td>
              </tr>
              <tr className="border">
                <td className="py-2">20223</td>
                <td className="py-2">CSC 0123.1-4</td>
                <td className="py-2">CS Elective 2 (Lab)</td>
                <td className="py-2">M 6:00p - 9:00p Comlab 4</td>
                <td className="py-2">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ClassAssignment;
