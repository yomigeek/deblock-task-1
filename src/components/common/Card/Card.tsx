import { CardProps } from "./card.types";
const Card = ({ title, content }: CardProps) => {
  return (
    <>
      <div className="mr-4 mb-4 p-4 bg-white shadow-card-box w-full tablet:w-[45%] small-desktop:w-[30%]">
        <h3 className="text-[20px] mb-2 font-medium	">{title}</h3>
        <p className="text-sm leading-5">{content}</p>
      </div>
    </>
  );
};

export default Card;
