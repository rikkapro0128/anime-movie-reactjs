import SubHeader from './components/header/sub';
import MainHeader from './components/header/main';
import './CommonStyle/fonts.scss';
import './CommonStyle/reset.scss';
import './CommonStyle/index.scss';

function App() {
  return (
    <div className="App">
      <SubHeader />
      <MainHeader />
    </div>
  );
}

export default App;
