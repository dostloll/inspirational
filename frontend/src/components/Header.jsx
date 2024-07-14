export default function Header() {
  return (
    <>
      <header className="flex fixed backdrop-blur-sm items-center bg-black/30 justify-between w-full">
        <a
          className="px-3 mt-10 font-bold text-2xl py-2 rounded-3xl hover:bg-white hover:text-black transition duration-300 ml-5"
          href="#"
        >
          Logo
        </a>
        <nav className=" flex space-x-5 mr-10 items-center">
          <a
            className="px-1 mt-10 py-0 rounded-2xl hover:bg-white hover:text-black transition duration-300"
            href="/"
          >
            Home
          </a>
          <a
            className="px-1 mt-10 py-1 rounded-2xl hover:bg-white hover:text-black transition duration-300"
            href="/inspiration"
          >
            Inspiration
          </a>
          <a
            className="px-1 mt-10 py-0 rounded-2xl hover:bg-white hover:text-black transition duration-300"
            href="/contacts"
          >
            Contacts
          </a>
          <a
            className="px-1 mt-10 py-1 rounded-2xl hover:bg-white hover:text-black transition duration-300"
            href="/about"
          >
            About
          </a>
          <a
            className="px-1 mt-10 py-0 rounded-2xl hover:bg-white hover:text-black transition duration-300"
            href="/services"
          >
            Services
          </a>
        </nav>
      </header>
    </>
  );
}
