import React, { useState, useEffect } from "react";
import {
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
  WrenchScrewdriverIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

import SpaceService from "../../services/spaceService";
import { ISpace } from "@/interfaces/space";

export default function Spaces() {
  const [spaces, setSpaces] = useState<ISpace[]>([]);

  useEffect(() => {
    const fetchSpaces = async () => {
      const spacesData = await SpaceService.getAllSpaces();
      setSpaces(spacesData);
    };
    
    fetchSpaces();
  }, []);

  console.log(spaces);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Spaces of the Zoo
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Here, you can see all spaces of the zoo
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add space
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Maintenance
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Maintenance Off
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Details
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Delete
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {spaces.map((item, key) => (
                  <tr key={key}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.status}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.description}
                    </td>{" "}
                    <td
                      onClick={() => console.log("ok")}
                      className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                    >
                      <WrenchScrewdriverIcon
                        aria-hidden="true"
                        className="cursor-pointer h-5 w-5 text-gray-400"
                      />
                    </td>
                    <td
                      onClick={() => console.log("ok")}
                      className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                    >
                      <CheckIcon
                        aria-hidden="true"
                        className="cursor-pointer h-5 w-5 text-gray-400"
                      />
                    </td>
                    <td
                      onClick={() => console.log("ok")}
                      className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                    >
                      <EyeIcon
                        aria-hidden="true"
                        className="cursor-pointer h-5 w-5 text-gray-400"
                      />
                    </td>
                    <td
                      onClick={() => console.log("ok")}
                      className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                    >
                      <PencilSquareIcon
                        aria-hidden="true"
                        className="cursor-pointer h-5 w-5 text-gray-400"
                      />
                    </td>
                    <td
                      onClick={() => console.log("ok")}
                      className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                    >
                      <TrashIcon
                        aria-hidden="true"
                        className="cursor-pointer h-5 w-5 text-gray-400"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
