import './App.css';
import { Routes, Route } from 'react-router-dom';
import Front from './components/front/front';
import About from './components/about/about';

function App() {
  return (
	<Routes>
		<Route exact path='/' element={<Front />} />
		<Route exact path='/about' element={<About />} />
	</Routes>
  );
}

export default App;
