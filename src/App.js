import './App.css';
import CurrentWeather from './components/Current Weather/CurrentWeather';
import Search from './components/search/Search';

function App() {

  const handleonSearchChange =(searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
      <Search onSearchChange={handleonSearchChange}></Search>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
