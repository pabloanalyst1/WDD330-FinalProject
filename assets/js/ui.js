import { fetchNews } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const newsContainer = document.getElementById('news-container');

    // Call my API to get news
    const articles = await fetchNews();

    // Check if there was an error
    if (articles.error) {
        newsContainer.innerHTML = `<p class="error-message">⚠️ ${articles.error}</p>`;
        return;
    }

    // Display 10 news only and show if errors
    if (articles.length === 0) {
        newsContainer.innerHTML = '<p class="error-message">No news available at the moment.</p>';
        return;
    }

    // Top 10 mist recent news
    const limitedArticles = articles.slice(0, 10);

    // Create news in the interface
    newsContainer.innerHTML = limitedArticles.map(article => `
        <div class="news-card">
            <img src="${article.urlToImage || 'assets/images/default-news.jpg'}" alt="News Image">
            <div class="news-content">
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available'}</p>
                <a href="${article.url}" target="_blank">Read More</a>
            </div>
        </div>
    `).join('');
});
