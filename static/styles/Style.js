export default (
	<style>
		{`
body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
		'Droid Sans', 'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas,
		'Courier New', monospace;
}

dt {
	font-size: 1em;
}

dd {
	font-size: 0.8em;
	width: 600px;
}

dl {
	margin-right: 120px;
}

a {
	color: rgb(27, 149, 224);
}

.app-card {
	display: flex;
	margin-bottom: 20px;
}

/* スマホ　767px以下 */
@media only screen and (max-width: 767px) {
	img {
		width: 50%;
		height: auto;
	}
}
/* pc　768px以上 */
@media only screen and (min-width: 768px), print {
	img {
		width: auto;
		height: 200px;
	}
}

.App {
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	font-size: calc(10px + 2vmin);
	color: white;
	padding: 1em;
}

@media (prefers-reduced-motion: no-preference) {
	.App-logo {
		animation: App-logo-spin infinite 20s linear;
	}
}

.App-link {
	color: #61dafb;
}

@keyframes App-logo-spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
`}
	</style>
);
