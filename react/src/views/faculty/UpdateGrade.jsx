import React from "react";
import Button from "../../components/Button";

const UpdateGrade = () => {
  return (
    <div>
      <header className="relative font-semibold text-center">
        <div>
          <h1 className="py-4 text-2xl">Update of Grades</h1>
        </div>

        <div className="flex flex-col items-center md:flex-wrap md:flex-row">
          <div className="flex flex-row items-center justify-normal">
            <div className="mr-2">
              <label htmlFor="">Subject:</label>
              <select className="p-2 mx-2" name="" id="">
                <option value="">CS Elective 1 (LEC)</option>
              </select>
            </div>

            <div className="mr-2">
              <label htmlFor="">Student No.:</label>
              <select className="p-2 mx-2" name="" id="">
                <option value="">2020-00000</option>
              </select>
            </div>
          </div>

          <Button color="seaserpent" label="Search" newClass="text-white" />
        </div>
      </header>

      <main className="my-4">
        <div className="flex flex-row items-center justify-between px-2 py-4 text-center text-white bg-maroon">
          <div>
            <h1 className="font-semibold">Course Code</h1>
            <span>CSC 0413</span>
          </div>
          <div>
            <h1 className="font-semibold">Subject Title</h1>
            <span>CS Elective 1 (LEC)</span>
          </div>
          <div>
            <h1 className="font-semibold">Units</h1>
            <span>2</span>
          </div>
          <div>
            <h1 className="font-semibold">Term/A.Y.</h1>
            <span>1 / 2023</span>
          </div>
        </div>
        <table className="table w-full text-center bg-white table-fixed">
          <thead className="text-white bg-redwood">
            <tr>
              <th className="py-4">Subject</th>
              <th className="py-4">Student No.</th>
              <th className="py-4">Student Name</th>
              <th className="py-4">College</th>
              <th className="py-4">Year</th>
              <th className="hidden">Final Grade</th>
              <th className="hidden">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4">CS Elective 1 (LEC)</td>
              <td className="py-4">2020-00000</td>
              <td className="py-4">STUDENT NAME 1</td>
              <td className="py-4">BSCS</td>
              <td className="py-4">4</td>
              <td className="hidden py-4">
                <select name="" id="">
                  <option value="">1.00</option>
                  <option value="">1.25</option>
                  <option value="">1.50</option>
                  <option value="">1.75</option>
                  <option value="">2.00</option>
                  <option value="">2.25</option>
                  <option value="">2.50</option>
                  <option value="">2.75</option>
                  <option value="">3.00</option>
                </select>
              </td>
              <td className="hidden py-4">
                <input type="text" name="" id="" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="text-right">
          <Button
            color="seaserpent"
            label="Update Grades"
            newClass="text-white py-4"
          />
        </div>
      </main>
    </div>
  );
};

export default UpdateGrade;
