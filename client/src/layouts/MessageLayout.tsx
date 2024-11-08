import { ReactNode } from "react";
import ButtonIcon from "../components/ButtonIcon";
import ModalFriends from "../components/ModalFriends";
import {
  IconChatBubbleOutline,
  IconChatsBubbleOutline,
  IconContactOutline,
  IconHamburger,
  IconPaperClip,
} from "../components/svg";
import { NavLink } from "react-router-dom";
import ModalProfile from "../components/ModalProfile";
import { useSideBarProvider } from "../hooks/useSidebarProvider";

type Message = {
  children: ReactNode;
};

const MessageLayout: React.FC<Message> = ({ children }) => {
  const { openSeccion, setOpenSecction } = useSideBarProvider();

  return (
    <div
      className={`grid grid-cols-[80px_1fr] h-screen gap-3 bg-gray-100 ${
        openSeccion ? "grid-cols-[430px_1fr]" : ""
      }`}
    >
      <div className="relative">
        <aside
          className={`w-20 grid grid-rows-[40px_1fr_60px] h-full gap-2 items-start justify-center py-2 relative z-20 ${
            openSeccion ? "shadow-[10px_0px_35px_-15px_rgba(0,0,0,0.15)]" : ""
          }`}
        >
          <button
            type="button"
            className="flex items-center justify-center rounded-lg shadow-sm py-2 px-3"
            onClick={() => setOpenSecction(!openSeccion)}
          >
            <IconHamburger />
          </button>
          <div>
            <ButtonIcon title="Mesajes">
              <NavLink to={"/"}>
                <IconChatBubbleOutline />
              </NavLink>
            </ButtonIcon>
            <ButtonIcon title="Grupos">
              <NavLink to={"/chatgroup"}>
                <IconChatsBubbleOutline />
              </NavLink>
            </ButtonIcon>
            <ButtonIcon title="Archivados">
              <IconPaperClip />
            </ButtonIcon>
            <ButtonIcon title="Amigos">
              <IconContactOutline />
            </ButtonIcon>
          </div>
          <ModalProfile />
        </aside>

        {openSeccion && (
          <div
            className="w-full h-full fixed bg-black/30 inset-[0px_0px_0px_80px] z-0"
            onClickCapture={() => setOpenSecction(false)}
          />
        )}
        <div
          className={`absolute flex flex-col gap-2 h-full rounded-tr-3xl p-2 overflow-hidden rounded-br-3xl bg-blue-300 top-0 left-20 z-10 transition-all duration-300 ${
            openSeccion
              ? "w-[350px] shadow-[10px_0px_35px_-15px_rgba(0,0,0,0.3)] visible"
              : "invisible w-[0px]"
          }`}
        >
          {children}
        </div>
      </div>
      <div className="w-full shadow-lg bg-gray-200 rounded-tl-3xl rounded-bl-3xl">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="m-auto flex flex-col items-center justify-center">
            <span>Inicia un chat</span>
            <ModalFriends />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageLayout;
