import './App.css';
import { Header } from './components/Header';
import { SkillsList } from './components/SkillsList';

function App() {
  return (
    <div className="App">
        <Header firstname={"Lucas"}/>
        <SkillsList skills={["css", "html", "JavaScript", "React"]}/>
    </div>
  ); 
}

export default App;
