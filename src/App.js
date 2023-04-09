import './App.css';
import Search from './components/search/Search';

function App() {

  const handleonSearchChange =(searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
      <Search onSearchChange={handleonSearchChange}></Search>
    </div>
  );
}

export default App;
