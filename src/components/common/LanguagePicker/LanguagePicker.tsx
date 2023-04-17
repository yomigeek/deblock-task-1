import { useRouter } from "next/router";
import { tx } from "@twind/core";

const languages = [
  { value: "en-GB", name: "UK (English)" },
  { value: "fr-FR", name: "France (FR)" },
];

const LanguagePicker = () => {
  const router = useRouter();
  const { locale } = router;
  const updateLocale = (locale: any) => {
    localStorage.setItem("userPreferredCountry", locale);
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <div className="relative -mb-4 flex justify-end !pl-0 pb-3 small-desktop:pt-6">
      {languages.map(({ value, name }) => (
        <div
          key={value}
          onClick={() => updateLocale(value)}
          className={tx(
            `cursor-pointer text-xs first:after:(inline-block pl-2 text-blue-900 content-['/']) last:pl-2 hover:text-red-700 text-blue-800	hover:text-blue-600 `,
            value === locale && "text-red-700"
          )}
        >
          {name.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default LanguagePicker;
