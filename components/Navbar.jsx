import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-navbarColor py-4">
      <div className="flex items-center ml-4">
        <Link href="/" className="text-2xl p-1">
          <span className="text-greenPrimary">Bio</span>Reactor Dashboard
        </Link>
        <Image src="/favicon.ico" width={30} height={30} alt="bioreactor logo"/>
      </div>
    </nav>
  );
};

export default Navbar;
