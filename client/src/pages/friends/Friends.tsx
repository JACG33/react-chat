import MessageLayout from "../../layouts/MessageLayout";
import { personas } from "../../examples";

const MessageItem = () => {
  return (
    <>
      {personas.forEach((message) => (
        <div key={message.id}>
          <img src={message.imagen} alt="" />
          <span>{message.nombre}</span>
        </div>
      ))}
    </>
  );
};

const Friends = () => {
  return (
    <MessageLayout>
      <MessageItem />
    </MessageLayout>
  );
};

export default Friends;
