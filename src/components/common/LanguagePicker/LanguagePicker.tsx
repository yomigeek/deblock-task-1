import { useRouter } from "next/router";
// import useLocale from "src/utils/hooks/useLocale";
import { tx } from "@twind/core";

const languages = [
  { value: "en-GB", name: "English(UK)" },
  { value: "fr-FR", name: "Français" },
];

const LanguagePicker = () => {
  const router = useRouter();
  const { locale } = router;
  const updateLocale = (locale: any) =>
    router.push(router.asPath, router.asPath, { locale });

  console.log(locale);

  return (
    <div className="petlab-container first relative z-50 -mb-4 flex justify-end !pl-0 pb-3 small-desktop:pt-6">
      {languages.map(({ value, name }) => (
        <div
          key={value}
          onClick={() => updateLocale(value)}
          className={tx(
            `cursor-pointer text-xs transition-all duration-200 first:after:(inline-block pl-2 text-blue-900 content-['/']) last:pl-2 hover:text-red-700 text-blue-800	hover:text-blue-600 `,
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
