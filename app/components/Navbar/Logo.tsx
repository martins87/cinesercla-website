import Image from "next/image";

import CineSercla from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="flex flex-1">
      <Image width={200} src={CineSercla} alt="Logo" />
    </div>
  );
};

export default Logo;
