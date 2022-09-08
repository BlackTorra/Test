import './App.css';
import HouseProvider from './store/HouseProvider';
import HouseLayout from './components/Layout/HouseLayout';
import ControlPanel from './components/ControlPanel/ControlPanel';

function App() {
  return (
    <HouseProvider>
      <main>
        <HouseLayout/>
        <ControlPanel/>
      </main>
    </HouseProvider>
  );
}

export default App;
