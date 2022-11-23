import "./App.css";
import MovieContextProvider from "./context/Context";
import { Header } from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <MovieContextProvider>
      <div className='app'>
        <Header />
        <main>
          <Home />
        </main>
      </div>
    </MovieContextProvider>
  );
}

export default App;
