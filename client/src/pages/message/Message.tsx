import MessageLayout from "../../layouts/MessageLayout";
import { personas } from "../../examples";
import CardItem from "../../components/CardItem";
import { IconChatBubbleSolid } from "../../components/svg";

const MessageItem = () => {
  return (
    <>
      {personas.map((message) => (
        <CardItem key={message.id} img={message.imagen}>
          <span>{message.nombre}</span>
          <small>{message.descripcion.slice(0, 30)}...</small>
        </CardItem>
      ))}
    </>
  );
};

const Message = () => {
  return (
    <MessageLayout>
      <div className="grid grid-rows-[80px_1fr] gap-4">
        <div className="flex flex-col justify-center items-center p-2 gap-2">
          <div>
            <h2 className="text-xl font-bolder flex gap-2 items-center"><IconChatBubbleSolid/> Mensajes</h2>
          </div>
          <input type="search" name="" id=""  className="rounded-md w-full h-8 py-1 px-2" />
        </div>
        <div className="h-[calc(100dvh_-80px)] overflow-y-auto  flex flex-col gap-2">
          <MessageItem />
        </div>
      </div>
    </MessageLayout>
  );
};

export default Message;
