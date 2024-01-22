import Image from "next/image";

const Logo = () => {
  return (
    <div className="logoContainer">
      <Image src={"/logo.svg"} fill alt="eReferral-logo" />
    </div>
  );
};

export default Logo;
