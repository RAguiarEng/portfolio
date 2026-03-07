/* ============================================
   SUBSTACK — ARTIGO MAIS RECENTE
   ============================================ */
(function () {
    const RSS_URL = 'https://raguiareng.substack.com/feed';
    // anterior: const API_URL  = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(RSS_URL);
    // atual:
    const API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fraguiareng.substack.com%2Ffeed&api_key=YOUR_KEY';

    const elLoading = document.getElementById('substack-loading');
    const elContent = document.getElementById('substack-content');
    const elError = document.getElementById('substack-error');

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    }

    function stripHTML(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    function showError() {
        elLoading.style.display = 'none';
        elError.style.display = 'flex';
    }

    fetch(API_URL)
        .then(function (res) {
            if (!res.ok) throw new Error('Falha na requisição');
            return res.json();
        })
        .then(function (data) {
            if (data.status !== 'ok' || !data.items || data.items.length === 0) {
                throw new Error('Feed vazio ou inválido');
            }

            const article = data.items[0];
            const excerpt = stripHTML(article.description).trim().slice(0, 220) + '…';

            document.getElementById('substack-date').textContent = formatDate(article.pubDate);
            document.getElementById('substack-title').textContent = article.title;
            document.getElementById('substack-excerpt').textContent = excerpt;
            document.getElementById('substack-link').href = article.link;

            elLoading.style.display = 'none';
            elContent.style.display = 'block';
        })
        .catch(showError);
})();