import React from "react";

export default function Form() {
	return (
		<form id="search-form">
			<div class="row">
				<div class="col-9">
					<input
						id="search-text-input"
						type="text"
						placeholder="Enter a city ..."
						class="form-control"
					/>
				</div>
				<div class="col-3">
					<input
						type="submit"
						value="Search"
						class="btn btn-primary w-100"
					/>
				</div>
			</div>
		</form>
	);
}
