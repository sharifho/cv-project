function genneratePDF() {
	const element = document.getElementById("sharifpdf");
	
	html2pdf()
	.from(element)
	.save();
}
