import style from "../static/styles/Style";

export default () => (
  <div className="App">
    {style}
    <header className="App-header">
      <h1>Hobayashi's Portfolios</h1>
    </header>
    <div class="app-card">
      <dl>
        <dt>Key Drummer</dt>
        <dd>Simple Sound Player.</dd>
        <dd>Using Electron, TypeScript, jQuery.</dd>
        <dd>
          <a
            target="brank"
            href="https://github.com/hobayashi/SoundSamplerVerE"
          >
            GitHub
          </a>
        </dd>
      </dl>
      {/* <img src="../static/images/KeyDrummerCaptured.png" /> */}
    </div>
    <div class="app-card">
      <dl>
        <dt>Dark Kakuge-Checker</dt>
        <dd>Adapt Dark Mode UI to Kakuge-Checker.</dd>
        <dd>Using Google Extentions, TypeScript.</dd>
        <dd>
          <a
            target="brank"
            href="https://chrome.google.com/webstore/detail/dark-kakuge-checker/keaigfdapmnmnndndekncagmndhlppnp?hl=ja"
          >
            Chrome Web Store
          </a>
        </dd>
      </dl>
      {/* <img src="../static/images/DarkKakugeCheckerCaptured.jpeg" /> */}
    </div>
    <dl>
      <dt>Fighting Board for Android</dt>
      <dd>Score Board App for Fighing Games.</dd>
      <dd>Using C#, Xamarin.Android, Rx</dd>
      <dd>
        <a
          target="brank"
          href="https://play.google.com/store/apps/details?id=com.companyname.fightingboard"
        >
          Play Store
        </a>
      </dd>
    </dl>
    <dl>
      <dt>Fighting Board for iOS</dt>
      <dd>Score Board App for Fighing Games.</dd>
      <dd>Using React.js, Next.js.</dd>
      <dd>
        <a
          target="brank"
          href="https://apps.apple.com/jp/app/fighting-board/id1566082511"
        >
          App Store
        </a>
      </dd>
    </dl>
  </div>
);
