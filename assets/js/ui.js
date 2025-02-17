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

import { fetchUpcomingGames } from './games.js';

document.addEventListener('DOMContentLoaded', async () => {
    const gamesContainer = document.getElementById('games-container');

    const games = await fetchUpcomingGames();

    if (games.error) {
        gamesContainer.innerHTML = `<p class="error-message">⚠️ ${games.error}</p>`;
        return;
    }

    // Only show 6 recent gamess
    gamesContainer.innerHTML = games.slice(0, 6).map(game => `
        <div class="game-card">
            <img src="${game.background_image || 'assets/images/default-game.jpg'}" 
                 alt="${game.name}" 
                 onerror="this.onerror=null; this.src='assets/images/default-game.jpg';">
            <div class="game-content">
                <h3>${game.name}</h3>
                <p>Release Date: ${game.released || 'TBA'}</p>
                <a href="https://rawg.io/games/${game.slug}" target="_blank">More Info</a>
            </div>
        </div>
    `).join('');
});
