import { Inter } from "next/font/google";
import { SquaresPlusIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import SpaceService from "@/services/spaceService";
import { ISpace } from "@/interfaces/space";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [spaces, setSpaces] = useState<ISpace[]>([]);
  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const spacesData = await SpaceService.getAllSpaces();
        setSpaces(spacesData);
        console.log("🚀 ~ file: spaces.tsx:16 ~ Spaces ~ spaces:", spaces);
      } catch (err) {
        console.log("🚀 ~ file: spaces.tsx:26 ~ fetchSpaces ~ err:", err);
      }
    };
    fetchSpaces();
  }, []);

  return (
    <>
    <h1 className="text-center text-2xl bold pb-6">Welcome to the Planode ZOO</h1>
    <h2 className="text-center text-xl bold pb-6">Get access to your favorite space</h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {spaces.map((space) => (
          <li
            key={space._id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={space.images}
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {space.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dd className="text-sm text-gray-500">{space.type}</dd>
                <dd className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Opening Hours : {space.openingHours}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <button className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                    <SquaresPlusIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Enter with my ticket
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
