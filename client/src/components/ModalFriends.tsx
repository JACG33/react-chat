import { gruposChat } from "../examples";
import CardItem from "./CardItem";
import ModalBase from "./ModalBase";
import { IconPlus } from "./svg";


const MessageItem = () => {
  return (
    <>
      {gruposChat.map((message) => (
        <CardItem key={message.id} img={message.imagen}>
          <span>{message.nombre}</span>
          <small>{message.descripcion.slice(0, 30)}...</small>
        </CardItem>
      ))}
    </>
  );
};

const ModalFriends = () => {
  return (
    <ModalBase
      titleButton="Crear nuevo Chat"
      titleModal="Amigos"
      targetModal="modalFriends"
      iconTrigger={<IconPlus />}
    >
      <MessageItem/>
    </ModalBase>
  );
};

export default ModalFriends;
