import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        alt="logo"
        src="/assets/shared/desktop/logo.svg"
        width={143}
        height={25}
      />
    </Link>
  );
}

export default Logo;
