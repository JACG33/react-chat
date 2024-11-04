import { ReactNode, useRef } from "react";
import questionBtnCss from "./questionbutton.module.css";
import { IconXmark } from "./svg";
import ButtonIcon from "./ButtonIcon";
// Este codigo es generado con la IA para dar soporte a las propiedades popovertarget, popover
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    popovertarget?: string;
    popover?: string;
  }
}

type ModalBase = {
  children: ReactNode;
  iconTrigger: ReactNode;
  titleModal?: string;
  titleButton?: string;
  targetModal: string;
};

const ModalBase = ({
  children,
  titleButton,
  titleModal,
  targetModal,
  iconTrigger,
}: ModalBase) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const hldClosePopOver = () => {
    modalRef?.current?.hidePopover();
  };

  return (
    <>
      <ButtonIcon
        title={titleButton}
        className="shadow-lg"
        popovertarget={targetModal}
        type="button"
      >
        {iconTrigger}
      </ButtonIcon>

      <div
        ref={modalRef}
        className={questionBtnCss.question__modal}
        popover="true"
        id={targetModal}
      >
        <div className={questionBtnCss.question__modal__header}>
          <h2>{titleModal}</h2>
          <button
            className={questionBtnCss.question__button__close}
            type="button"
            onClick={hldClosePopOver}
          >
            <IconXmark />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default ModalBase;
