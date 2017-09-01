var displayDiv = document.getElementById("movie-result"),
    showMovieInfoBtn = document.getElementById("generate-movie");

var Movie = function Movie(title, director, writer, star) {
        this.title = title;
        this.director = director;
        this.writer = writer;
        this.star = star;
}

var movie1 = new Movie("Lean on Me", "John G. Avildsen", "Michael Schiffer", "Samuel Jackson");

showMovieInfoBtn.addEventListener("click", function() {
displayDiv.innerHTML = ("<b>Movie Name:</b> " + movie1.title + "<br>" + "<b>Director:</b> " + movie1.director + "<br>" + "<b>Writer:</b> " + movie1.writer + "<br>" + "<b>Star:</b> " + movie1.star);

});