import Image from "next/image";

import Container from "../Container";
import NavLinks from "./NavLinks";

import SearchBar from "./SearchBar";
import LoggedUser from "./LoggedUser";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Container>
      <div className="w-full flex items-center justify-center gap-2">
        <Logo />
        <NavLinks />
        <SearchBar />
        <LoggedUser />
      </div>
    </Container>
  );
};

export default Navbar;
