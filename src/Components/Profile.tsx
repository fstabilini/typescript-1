import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { updateUser } from "../features/user/userSlice";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdate = () => {
    dispatch(updateUser({ name: "Roberto" }));
  };
  const handleUpdate2 = () => {
    dispatch(updateUser({ address: "Holmberg 1212" }));
  };

  return (
    <div>
      <h1>Nombre: {user.name}</h1>
      <h2>Dirección: {user.address}</h2>
      <button onClick={handleUpdate}>Cambiar nombre a Roberto</button>
      <button onClick={handleUpdate2}>Cambiar dirección a Holmberg</button>
    </div>
  );
};

export default Profile;
