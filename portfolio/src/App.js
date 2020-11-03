import './App.css';
import KeyDrummerCaptured from './images/KeyDrummerCaptured.png';
import DarkKakugeCheckerCaptured from './images/DarkKakugeCheckerCaptured.jpg';
import FightingBoardCaptured from './images/FightingBoardCaptured.webp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hobayashi's Portfolios</h1>
        <dl>
          <dt><a target="brank" href="https://github.com/hobayashi/SoundSamplerVerE">Key Drummer</a></dt>
          <dd>Simple Sound Player.</dd>
          <dd>Using Electron, TypeScript, jQuery.</dd>
        </dl>
        <img src={KeyDrummerCaptured} alt=""></img>
        <dl>
          <dt><a target="brank" href="https://chrome.google.com/webstore/detail/dark-kakuge-checker/keaigfdapmnmnndndekncagmndhlppnp?hl=ja">Dark Kakuge-Checker</a></dt>
          <dd>Adapt Dark Mode UI to Kakuge-Checker.</dd>
          <dd>Using Google Extentions, TypeScript.</dd>
        </dl>
        <img src={DarkKakugeCheckerCaptured} alt=""></img>
        <dl>
          <dt><a target="brank" href="https://play.google.com/store/apps/details?id=com.companyname.fightingboard">Fighting Board</a></dt>
          <dd>Score Board App for Fighing Games.</dd>
          <dd>Using C#, Xamarin.Android, Rx</dd>
        </dl>
        <img src={FightingBoardCaptured} alt=""></img>
      </header>
    </div>
  );
}

export default App;
