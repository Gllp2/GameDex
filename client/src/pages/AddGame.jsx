import Header from "../components/Header";
import FloatingLogosBackground from "../components/floating-logos-background";
import AddGameForm from "../components/AddGameForm";
import "../styles/AddGameForm.css";

const AddGame = () => {
  return (
    <>
      <Header />
      <FloatingLogosBackground />
      <div className="addgame-container">
        <AddGameForm />
      </div>
    </>
  );
};

export default AddGame;
