document.getElementById("newsBtn").addEventListener("click", function () {
  fetchNews("top-headlines");
});

document.getElementById("affairsBtn").addEventListener("click", function () {
  fetchNews("everything");
});

function fetchNews(endpoint) {
  const apiKey = "b9c7161e06ae4437b7aed5e4f51c2582";
  const url = `https://newsapi.org/v2/${endpoint}?country=in&apiKey=${apiKey}`;

  const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Using a public proxy to bypass CORS
  const finalUrl = proxyUrl + url;

  fetch(finalUrl)
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
