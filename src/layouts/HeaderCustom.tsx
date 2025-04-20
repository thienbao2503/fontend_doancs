import Head from "next/head";
import { Header } from "antd/es/layout/layout";
import { MagnifyingGlassIcon, EnvelopeIcon, BellIcon } from "@heroicons/react/24/outline";

function HeaderCustom() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dashboard Header</title>
      </Head>
      <Header
        className="flex items-center justify-between bg-gray-50 px-4 py-3 border-b border-gray-200"
        style={{ height: "48px" }}
      >
        <h1 className="text-blue-900 font-semibold text-lg m-0">
          Dashboard
        </h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search here..."
            className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            style={{ width: "150px", height: "32px" }}
          />
          <button
            aria-label="Search"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-1.5"
            style={{ width: "32px", height: "32px" }}
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
          <button
            aria-label="Messages"
            className="text-gray-600 hover:text-gray-900 p-1.5"
            style={{ width: "32px", height: "32px" }}
          >
            <EnvelopeIcon className="w-5 h-5" />
          </button>
          <div className="h-4 border-r border-gray-300" />
          <button
            aria-label="Notifications"
            className="text-gray-600 hover:text-gray-900 p-1.5"
            style={{ width: "32px", height: "32px" }}
          >
            <BellIcon className="w-5 h-5" />
          </button>
        </div>
      </Header>
    </>
  );
}

export default HeaderCustom;