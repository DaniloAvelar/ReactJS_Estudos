import './App.css';
import Challenge from './components/Challenge';
import FirstComponent from "./components/FirstComponent";
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';



function App() {
  return (
    <>
      <h1>Fundamentos do React</h1>
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
      <MyComponent />
      <Challenge />
    </>
  )
}

export default App
