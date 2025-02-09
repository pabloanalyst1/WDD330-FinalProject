import { fetchNews } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const newsContainer = document.getElementById('news-container');

    // Call my API para get noticias
    const articles = await fetchNews();

    // Check if error
    if (articles.error) {
        newsContainer.innerHTML = `<p class="error-message">⚠️ ${articles.error}</p>`;
        return;
    }

    // Show top 10 news
    newsContainer.innerHTML = articles.map(article => `
        <div class="news-card">
            <img src="${article.image || article.image_url || 'assets/images/default-news.jpg'}" 
                 alt="News Image" 
                 onerror="this.onerror=null; this.src='assets/images/default-news.jpg';">
            <div class="news-content">
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available'}</p>
                <a href="${article.url}" target="_blank">Read More</a>
            </div>
        </div>
    `).join('');
});
