import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        alt="logo"
        src="/assets/shared/desktop/logo.svg"
        width="0"
        height="0"
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
      />
    </Link>
  );
}

export default Logo;
