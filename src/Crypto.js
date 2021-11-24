import React from "react";

export default function Crypto() {
	return (
		<div>
			<h1>
				Cryptocurrency
				<span role="img" aria-label="emoji">
					📈
				</span>
			</h1>
			<ul className="crypto">
				<li>BTC - $56,466.40 USD</li>
				<li>ETH - $4,259.29 USD</li>
			</ul>
		</div>
	);
}
