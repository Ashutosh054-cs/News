document.getElementById("newsBtn").addEventListener("click", function () {
  fetchNews("http://localhost:3000/news"); // Updated URL to match the server
});

document.getElementById("affairsBtn").addEventListener("click", function () {
  fetchNews("http://localhost:3000/news"); // Updated URL to match the server
});

function fetchNews(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Log the response to see what you get
      const articles = data.articles;
      if (articles) {
        let output = "<h2>Latest Updates</h2>";
        articles.forEach((article) => {
          output += `
                        <div>
                            <h3>${article.title}</h3>
                            <p>${article.description}</p>
                            <a href="${article.url}" target="_blank">Read more</a>
                        </div>
                    `;
        });
        document.getElementById("content").innerHTML = output;
      } else {
        document.getElementById("content").innerHTML =
          "<p>No articles found.</p>";
      }
    })
    .catch((error) => console.error("Error fetching news:", error));
}
