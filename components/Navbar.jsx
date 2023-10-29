import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-navbarColor py-4">
      <div className="flex items-center ml-4">
        <Link href="/" className="text-2xl p-1">
          <span className="text-greenPrimary">Bio</span>Reactor
        </Link>
        <Image src="/favicon.ico" width={30} height={30} />
      </div>
      <div className="flex">
        <Link href="/stats" className="navLink">Stats</Link>
        <Link href="/sensors" className="navLink">Sensors</Link>
        <Link href="/data" className="navLink">Data</Link>
      </div>
    </nav>
  );
};

export default Navbar;
