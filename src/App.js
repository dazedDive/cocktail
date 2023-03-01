import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <div className="bg-fixed fixed overflow-y-auto ... bg-gradient-to-tr from-slate-500 to-slate-700 w-screen h-screen">
      <Nav/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
