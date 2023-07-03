import { useRouter } from "next/router";
import Image from "next/image";

export default function SpaceDetails() {
  const { query } = useRouter();
  const { spaceId } = query;

  console.log(query);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="py-4">
        <h1 className="text-2xl font-semibold text-gray-900 text-center">
          Space {spaceId}
        </h1>
        <h2 className="text-xl font-semibold text-gray-900 text-center">
          Opening Hours : 8am to 7pm
        </h2>
        <div className="pt-12 grid grid-cols-3 gap-4">
          <span className="col-span-2">
            Description Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Reprehenderit voluptatem illo perspiciatis dolor incidunt quis
            quos veniam, accusantium libero ad quidem perferendis molestias
            nostrum nulla sunt aliquam, minus quam sit? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Doloremque laborum repudiandae
            ratione, sunt soluta exercitationem nam corporis, maxime fuga a
            totam, accusamus modi ipsum. Esse voluptas magnam eius? Corporis,
            animi.
          </span>
          <Image
            className="col-span-1 "
            src="https://st.depositphotos.com/1003345/1581/i/600/depositphotos_15810017-stock-photo-woman-feeding-the-elephant.jpg"
            width={300}
            height={300}
            alt="space"
          />
        </div>
        <div>
          <table className="border pt-12">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="border px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Capacity
                </th>
                <th
                  scope="col"
                  className="border px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Duration
                </th>
                <th
                  scope="col"
                  className="border px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  HandicappedAccess
                </th>
                <th
                  scope="col"
                  className="border px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Last Maintenance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Meeting Room
                </td>
                <td className="border px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  10
                </td>
                <td className="border px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  1 hour
                </td>
                <td className="border px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Yes
                </td>
                <td className="border px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  1 month ago
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
