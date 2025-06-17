fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        search = data.search;
        links = data.links;
        copy = data.copy;
        avatarframe = data.avatarframe;
        background = data.background;
        miniprofile = data.miniprofile;
        specialprofile = data.specialprofile;
        badge = data.badge;
        delbadge = data.delbadge;
        renderCards();
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));

function renderCards() {

    // Поиск по странице
    const searchContainer = document.querySelector('.search-items');
    searchContainer.innerHTML = '';
    search.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('search-item');
        card.innerHTML = `
            <a href="${item.link}"><p>🔍︎</p> ${item.title}</a>
        `;
        searchContainer.appendChild(card);
    });

    // Мои ссылки
    const linksContainer = document.querySelector('.links-items');
    linksContainer.innerHTML = '';
    links.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('links-item');
        card.innerHTML = `
            <a href="${item.link}" target="_blank"><p>⮕</p> ${item.title}</a>
        `;
        linksContainer.appendChild(card);
    });

    // Текст для копирования
    const copyContainer = document.querySelector('.copy-items');
    copyContainer.innerHTML = '';
    copy.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('copy-item');
        card.innerHTML = `
            <h5 title="${item.description}">${item.title}</h5>
            <input type="text" value="${item.text}" readonly="">
            <button onclick="copyText(${index})"><p>✂</p>скопировать</button>
            <a href="${item.link}" target="_blank">Резерв</a>
        `;
        copyContainer.appendChild(card);
    });

    // Рамки
    const avatarframeContainer = document.querySelector('.avatarframe-items');
    avatarframeContainer.innerHTML = '';
    avatarframe.forEach((item, index) => {
        const card = document.createElement('a');
        card.classList.add('avatarframe-item');
        card.href = item.link;
        card.target = '_blank';
        card.innerHTML = `
            <div class="img">
                <img src="img/avatar.jpg" alt="avatar" class="avatar">
                <img src="${item.img}" alt="frame" class="frame">
            </div>
            <h5>${item.title}</h5>
        `;
        avatarframeContainer.appendChild(card);
    });

    // Фоны
    const backgroundContainer = document.querySelector('.background-items');
    backgroundContainer.innerHTML = '';
    background.forEach((item, index) => {
        const card = document.createElement('a');
        card.classList.add('background-item');
        card.href = item.link;
        card.target = '_blank';
        card.innerHTML = `
            <div class="img">
                <img src="${item.img}" alt="img">
            </div>
            <h5>${item.title}</h5>
        `;
        backgroundContainer.appendChild(card);
    });

    // Фоны мини-профиля
    const miniprofileContainer = document.querySelector('.miniprofile-items');
    miniprofileContainer.innerHTML = '';
    miniprofile.forEach((item, index) => {
        const card = document.createElement('a');
        card.classList.add('miniprofile-item');
        card.href = item.link;
        card.target = '_blank';
        card.innerHTML = `
            <div class="video">
                <video src="${item.video}" alt="video" autoplay loop muted>
            </div>
            <h5>${item.title}</h5>
        `;
        miniprofileContainer.appendChild(card);
    });

    // Особый профиль
    const specialprofileContainer = document.querySelector('.specialprofile-items');
    specialprofileContainer.innerHTML = '';
    specialprofile.forEach((item, index) => {
        const card = document.createElement('a');
        card.classList.add('specialprofile-item');
        card.href = item.link;
        card.target = '_blank';
        card.innerHTML = `
            <div class="video">
                <video src="${item.video}" alt="video" autoplay loop muted>
            </div>
            <h5>${item.title}</h5>
        `;
        specialprofileContainer.appendChild(card);
    });

    // Значки
    const badgeContainer = document.querySelector('.badge-items');
    badgeContainer.innerHTML = '';
    badge.forEach((item, index) => {
        const card = document.createElement('a');
        card.classList.add('badge-item');
        card.href = item.link;
        card.target = '_blank';
        card.innerHTML = `
            <div class="img">
                <img src="${item.img}" alt="badge" class="badge">
            </div>
            <h5>Lvl: ${item.lvl}</h5>
            <p>${item.title}</p>
        `;
        badgeContainer.appendChild(card);
    });

    // Удаление значка напоказ
    const delbadgeContainer = document.querySelector('.delbadge-items');
    delbadgeContainer.innerHTML = '';
    delbadge.forEach((item, index) => {
        if (item.text) {
            const card = document.createElement('div');
            card.classList.add('delbadge-item');
            card.innerHTML = `
                <div class="info">
                    <h5>1. Переходим в Профиль -> Редактировать профиль -> Значок напоказ</h5>
                    <h5>2. Открываем Просмотр кода элемента (Ctrl+Shift+J)</h5>
                    <h5>3. Открываем Консоль (Console)</h5>
                    <button onclick="copyText(${index})">4. Копируем текст (тык*)</button>
                    <h5>5. Вставляем текст</h5>
                    <h5>6. Enter -> Сохранить</h5>
                </div>
            `;
            delbadgeContainer.appendChild(card);
        }

        if (item.video) {
            const card = document.createElement('div');
            card.classList.add('delbadge-item');
            card.innerHTML = `
                <div class="video">
                    <video src="${item.video}" alt="video" autoplay loop muted>
                </div>
            `;
            delbadgeContainer.appendChild(card);
        }
    });
}

function copyText(index) {
    navigator.clipboard.writeText(copy[index].text)
        .then(() => alert('Текст скопирован!'))
        .catch(err => console.error('Ошибка копирования:', err));
}

renderCards();