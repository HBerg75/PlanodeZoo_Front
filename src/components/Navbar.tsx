import Link from "next/link";


export default function Navbar() {

  return (
    <div className="sticky top-0 z-10">
      <div className="mx-auto px-2 bg-primary sm:px-4 lg:px-8 shadow-lg py-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="md:flex items-center lg:px-0 flex-1">
            <button>
              <a href="/">
                <h1 className="text-gray-300">Home</h1>
              </a>
            </button>
          </div>
          <div className="hidden md:flex items-center flex-1 justify-evenly">
            <Link href="/login">
              <h1 className="text-gray-300">Login</h1>
            </Link>

            <Link href="/register">
              <h1 className="text-gray-300">Register</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
