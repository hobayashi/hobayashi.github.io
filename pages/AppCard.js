const AppCard = (props) => (
	<div class="app-card">
		<dl>
			<dt>{props.appName}</dt>
			<dd>{props.description1}</dd>
			<dd>{props.description2}</dd>
			<dd>
				<a
					target="brank"
					href={props.link}
				>
					{props.linkTitle}
				</a>
			</dd>
		</dl>
		{/* <img src="../static/images/KeyDrummerCaptured.png" /> */}
	</div>
);

export default AppCard;
