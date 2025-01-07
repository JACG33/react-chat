import { ReactNode } from "react";
import { useConversationStore } from "../store/conversationStore";

type Card = {
  children: ReactNode;
  message: {
    nombre: string,
    imagen: string
  }
};

const CardItem: React.FC<Card> = ({ children, message }) => {

  const openChat = useConversationStore(stae => stae.setConversation)

  const hdleOpenChat = (name: string, url: string) => { openChat({ name, url }) }

  return (
    <div className="rounded-lg p-3 shadow-sm flex gap-2 items-center justify-start w-full min-w-32 hover:shadow-lg cursor-pointer transition-all duration-400" onClick={() => {
      hdleOpenChat(message.nombre, message.imagen)
    }}>
      <div className="rounded-full w-14 h-14">
        <img src={message.imagen} alt="" width={56} height={56} className="rounded-full w-14 h-14" />
      </div>
      <div className="flex flex-col gap1">{children}</div>
    </div>
  );
};

export default CardItem;
