import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

import Logo from "public/images/pngs/pay-logo.png";
import LanguagePicker from "@components/common/LanguagePicker";

const Header = () => {
  const { t } = useTranslation("navigation");
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <header className="flex mb-8 items-center justify-between">
        <div>
          <Link href="/" locale={locale}>
            <Image alt="logo" src={Logo} width={40} height={10} />
          </Link>
        </div>
        <nav>
          <LanguagePicker />
          <ul className="mt-5">
            <li
              onClick={() => router.push("/contact")}
              className="cursor-pointer text-right text-blue-900 mb-5"
            >
              {t("contactNav")}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
