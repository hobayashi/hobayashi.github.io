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
	font-size: 2em;
}

dd {
	font-size: 1em;
}

a {
	color: rgb(27, 149, 224);
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
		width: 640px;
		height: auto;
	}
}

.App {
	text-align: center;
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
}

.App-logo {
	height: 40vmin;
	pointer-events: none;
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
