import { gruposChat } from "../examples";
import { useConversationStore } from "../store/conversationStore";
import CardItem from "./CardItem";
import ModalBase from "./ModalBase";
import { IconPlus } from "./svg";


const MessageItem = () => {

  const openChat=useConversationStore(stae=>stae.setConversation)

  const hdleOpenChat=(name:string,url:string)=>{
    openChat({name,url})
  }

  return (
    <>
      {gruposChat.map((message) => (
        <CardItem key={message.id} img={message.imagen}>
          <span>{message.nombre}</span>
          <small>{message.descripcion.slice(0, 30)}...</small>
          <button type="button" onClick={()=>{
          hdleOpenChat(message.nombre,message.imagen)
        }}>open</button>
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
