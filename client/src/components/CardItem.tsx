import { ReactNode } from "react";

type Card = {
  children: ReactNode;
  img: string;
};

const CardItem: React.FC<Card> = ({ children, img }) => {
  return (
    <div className="rounded-lg p-3 shadow-sm flex gap-2 items-center justify-start w-full min-w-32 hover:shadow-lg cursor-pointer transition-all duration-400">
      <div className="rounded-full w-14 h-14">
        <img src={img} alt="" width={56} height={56} className="rounded-full w-14 h-14"/>
      </div>
      <div className="flex flex-col gap1">{children}</div>
    </div>
  );
};

export default CardItem;
