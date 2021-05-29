let currentId = 0;

$(function () {
	$("#movie-form").on("submit", function (e) {
		e.preventDefault();

		//this gets the value of the inputs
		let title = $("#title")[0].value;
		let rating = $("#rating")[0].value;

		//creating the html to append to the row
		let newRowHtml = `<tr id='${currentId}'>
			<td>${title}</td>
			<td>${rating}</td>
			<td><button class="btn btn-danger"> Delete! </button></td>
		</tr>`;

		//appending the new row to the table
		$("#table-body").append(newRowHtml);

		//increment the currentId for unique row num
		currentId++;

		//reseting input to ''
		$("#title")[0].value = "";
		$("#rating")[0].value = "";
	});

	// delete clicked row
	$("#table-body").on("click", function (e) {
		e.preventDefault();

		//this only works if delete button clicked
		if (e.target.classList.contains("btn-danger")) {
			//get rid of the parent
			e.target.offsetParent.parentElement.remove();
		}
	});
});
