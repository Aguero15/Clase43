import React from "react";
import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from "./LastMovieInDb";



function ContentRowTop() {
	return (
			<div>
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				<div className="row">

				<ContentRowMovies
				titles = {["Movies in database", "Total awards", "Actors quantity"]}
				counts = {[21,79,49]}
				borderColors = {["card border-left-primary shadow h-100 py-2", "card border-left-success shadow h-100 py-2", "card border-left-warning shadow h-100 py-2"]}
				icons = {["fas fa-film fa-2x text-gray-300", "fas fa-award fa-2x text-gray-300", "fas fa-user fa-2x text-gray-300"]}

				/>
				</div>

			</div>
			<LastMovieInDb/>
			
			</div>
	)

}
export default ContentRowTop;