import { useState } from "react";
// import Input from "./form/Input";
// import Label from "./form/Label";
import ModalBase from "./ModalBase";
import { IconUserOutline } from "./svg";
import Button from "./form/Button";
import { useAuthProvider } from "../hooks/useAuthProvider";

type FormState = {
  name: string;
  username: string;
  password: string;
  birthday: string;
};

const initialForm = {
  name: "",
  username: "",
  password: "",
  birthday: "",
};

const ModalProfile = () => {
  const { username,hdlUserOut } = useAuthProvider()
  const [formProfile, setFormProfile] = useState<FormState>(initialForm);
  return (
    <ModalBase
      titleButton="Ver Perfil"
      targetModal="modalProfile"
      iconTrigger={<IconUserOutline />}
    >
      <div className="min-w-56 md:min-w-96">
        <div className="flex justify-center items-center">
          <img
            src={`https://placehold.co/40?text=${username}`}
            width={80}
            height={80}
            className="w-48 h-48 rounded-full"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center mt-6">
          <span className="text-xl">{username}</span>
        </div>

        <div className="flex justify-center items-center mt-6">
        <Button type="button" className="bg-red-500 hover:bg-red-600" onClick={()=>{hdlUserOut()}}>Cerrar sesion</Button>
          <button ></button>
        </div>
      </div>
      {/*<form className="min-w-56 md:min-w-96">
        <div className="flex justify-center items-center">
          <img
            src={`https://placehold.co/40?text=${username}`}
            width={80}
            height={80}
            className="w-48 h-48 rounded-full"
            alt=""
          />
        </div>
        <div>
          <div className="flex flex-col gap-1 my-4">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              name="nombre"
              id="nombre"
              value={formProfile.name}
              onChange={(e) =>
                setFormProfile({ ...formProfile, name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1 my-4">
            <Label htmlFor="usuario">Usuario</Label>
            <Input
              name="usuario"
              id="usuario"
              value={formProfile.username}
              onChange={(e) =>
                setFormProfile({ ...formProfile, username: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1 my-4">
            <Label htmlFor="birthday">Cumpleaños</Label>
            <Input
              name="birthday"
              type="date"
              id="birthday"
              value={formProfile.birthday}
              onChange={(e) =>
                setFormProfile({ ...formProfile, birthday: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1 my-4">
            <Label htmlFor="paswword">Contraseña</Label>
            <Input
              name="paswword"
              type="password"
              id="paswword"
              value={formProfile.password}
              onChange={(e) =>
                setFormProfile({ ...formProfile, password: e.target.value })
              }
            />
          </div>
          <div className="flex flex justify-end items-center gap-2 pt-3">
            <Button type="submit">Actualizar</Button>
          </div>
        </div>
      </form>*/}
    </ModalBase>
  );
};

export default ModalProfile;
