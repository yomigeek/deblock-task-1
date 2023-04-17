import { useTranslation } from "next-i18next";

import Card from "@components/common/Card";
import { ThreeCardsBlockProps } from "./threecardsblock.types";

const ThreeCardsBlock = ({ title }: ThreeCardsBlockProps) => {
  const { t } = useTranslation("common");

  return (
    <section>
      <h1 className="text-center my-5 text-[20px] tablet:text-[25px]">
        {title}
      </h1>
      <div className="tablet:(flex flex-wrap) justify-evenly ml-2">
        {[...Array(3)].map((_, index) => (
          <Card
            key={`card-section-${index}`}
            title={`${t("card")} ${index + 1}`}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur."
          />
        ))}
      </div>
    </section>
  );
};

export default ThreeCardsBlock;
