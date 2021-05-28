import style from '../static/styles/Style';
import AppCard from './AppCard';

const Index = () => (
	<div className="App">
		{style}
		<header className="App-header">
			<h1>Hobayashi's Portfolios</h1>
		</header>
		<AppCard
			appName="Key Drummer"
			description1="Simple Sound Player."
			description2="Using Electron, TypeScript, jQuery."
			link="https://github.com/hobayashi/SoundSamplerVerE"
			linkTitle="GitHub"
		></AppCard>
		<AppCard
			appName="Dark Kakuge-Checker"
			description1="Adapt Dark Mode UI to Kakuge-Checker."
			description2="Using Google Extentions, TypeScript."
			link="https://chrome.google.com/webstore/detail/dark-kakuge-checker/keaigfdapmnmnndndekncagmndhlppnp?hl=ja"
			linkTitle="Chrome Web Store"
		></AppCard>
		<AppCard
			appName="Fighting Board for Android"
			description1="Score Board App for Fighing Games."
			description2="Using C#, Xamarin.Android, Rx."
			link="https://play.google.com/store/apps/details?id=com.companyname.fightingboard"
			linkTitle="Play Store"
		></AppCard>
		<AppCard
			appName="Fighting Board for iOS"
			description1="Score Board App for Fighing Games."
			description2="Using React.js, Next.js."
			link="https://apps.apple.com/jp/app/fighting-board/id1566082511"
			linkTitle="App Store"
		></AppCard>
	</div>
);

export default Index;
