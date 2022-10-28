import logo from "./logo.svg";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <LoginForm />
      </div>
    </>
  );
}

export default App;
