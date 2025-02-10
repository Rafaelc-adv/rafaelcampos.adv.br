<script>
document.addEventListener("DOMContentLoaded", function () {
    var postsPerPage = 4; // Número de posts por página
    var postContainer = document.querySelectorAll(".post-outer"); // Seleciona os posts no Blogger
    var totalPosts = postContainer.length;
    var totalPages = Math.ceil(totalPosts / postsPerPage);
    var currentPage = 1;

    function showPage(page) {
        var start = (page - 1) * postsPerPage;
        var end = start + postsPerPage;

        postContainer.forEach(function(post, index) {
            post.style.display = (index >= start && index < end) ? "block" : "none";  // Não utilizar &amp;&amp;
        });

        updatePaginationButtons();
    }

    function updatePaginationButtons() {
        var paginationContainer = document.getElementById("pagination-container");
        paginationContainer.innerHTML = "";

        if (currentPage > 1) {
            var prevButton = document.createElement("a");
            prevButton.href = "#";
            prevButton.innerHTML = "« Anterior";
            prevButton.classList.add("prev-page");
            prevButton.addEventListener("click", function (e) {
                e.preventDefault();
                currentPage--;
                showPage(currentPage);
            });
            paginationContainer.appendChild(prevButton);
        }

        var pageIndicator = document.createElement("span");
        pageIndicator.innerHTML = "Página " + currentPage + " de " + totalPages;
        pageIndicator.classList.add("page-number");
        paginationContainer.appendChild(pageIndicator);

        if (currentPage < totalPages) {
            var nextButton = document.createElement("a");
            nextButton.href = "#";
            nextButton.innerHTML = "Próximo »";
            nextButton.classList.add("next-page");
            nextButton.addEventListener("click", function (e) {
                e.preventDefault();
                currentPage++;
                showPage(currentPage);
            });
            paginationContainer.appendChild(nextButton);
        }
    }

    var paginationDiv = document.createElement("div");
    paginationDiv.id = "pagination-container";
    paginationDiv.style.textAlign = "center";
    paginationDiv.style.marginTop = "20px";
    document.querySelector(".blog-posts")?.appendChild(paginationDiv);

    showPage(currentPage);
});
</script>
