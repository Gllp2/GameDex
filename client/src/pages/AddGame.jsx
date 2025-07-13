import Header from "../components/Header";
import FloatingLogosBackground from "../components/floating-logos-background";
import AddGameForm from "../components/AddGameForm";

const AddGame = () => {
  return (
    <>
      <Header />
      <FloatingLogosBackground />

      <div className="addGame-container">
        <AddGameForm />
      </div>
    </>
  );
};

export default AddGame;
