import { useAuth } from "../../contexts/AuthContext";

export const Dashboard = () => {
  const { signOut } = useAuth();
  return (
    <>
      <div>i'm the dashboard</div>
      <button onClick={signOut}>deslogar</button>
    </>
  );
};
