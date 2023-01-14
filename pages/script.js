let quotations = [
    {
        author: 'Конфуций',
        text: 'Найдите работу, в которую влюбитесь, и вам больше не придётся трудиться ни одного дня в жизни.',
        img: '../images/konfucii.png',
    },
    {
        author: 'Конфуций',
        text: 'Красота есть во всем, но не всем дано это видеть.',
        img: '../images/konfucii.png',
    },
    {
        author: 'Конфуций',
        text: 'Когда вам покажется, что цель недостижима, не изменяйте цель — изменяйте свой план действий.',
        img: '../images/konfucii.png',
    },
    {
        author: 'Конфуций',
        text: 'Это неважно, что медленно ты идёшь... главное — не останавливайся.',
        img: '../images/konfucii.png',
    },
    {
        author: 'Конфуций',
        text: 'Величайшая слава не в том, чтобы никогда не ошибаться, а в том, чтобы уметь подняться каждый раз, когда падаешь...',
        img: '../images/konfucii.png',
    },
    {
        author: 'Конфуций',
        text: 'Есть три ошибки в общении людей: первая — это желание говорить прежде, чем нужно; вторая — застенчивость, не говорить когда это нужно; третья — говорить, не наблюдая за вашим слушателем.',
        img: '../images/konfucii.png',
    },
    {
        author: 'Лао-Цзы',
        text: 'Тот, кто знает и делает вид незнающего, тот на высоте. Кто без знаний делает вид знающего, тот больной.',
        img: '../images/lao-dzi.png',
    },
    {
        author: 'Лао-Цзы',
        text: 'Умеющий управлять другими силен, но умеющий владеть собой ещё сильнее.',
        img: '../images/lao-dzi.png',
    },
    {
        author: 'Лао-Цзы',
        text: 'Будьте внимательны к своим мыслям, они — начало поступков.',
        img: '../images/lao-dzi.png',
    },
    {
        author: 'Лао-Цзы',
        text: 'Если кто-то причинил тебе зло, не мсти. Сядь на берегу реки, и вскоре ты увидишь, как мимо тебя проплывает труп твоего врага.',
        img: '../images/lao-dzi.png',
    },
    {
        author: 'Лао-Цзы',
        text: 'Хотя в мире нет предмета, который был бы слабее и нежнее воды, но она может разрушить самый твердый предмет.',
        img: '../images/lao-dzi.png',
    },
    {
        author: 'Лао-Цзы',
        text: 'Верные слова не изящны. Красивые слова не заслуживают доверия. Добрый не красноречив. Красноречивый не может быть добрым. Знающий не доказывает, доказывающий не знает.',
        img: '../images/lao-dzi.png',
    },
    {
        author: 'Аврелий Августин',
        text: 'Eсли ты любишь человека таким, какой он есть, то ты любишь его. Eсли ты пытаешься его кардинально менять, то ты любишь себя. Вот и всё.',
        img: '../images/augustine.jpg',
    },
    {
        author: 'Аврелий Августин',
        text: 'Если бы Бог назначил женщину быть госпожой мужчины, он сотворил бы ее из головы, если бы — рабой, то сотворил бы из ноги; но так как он назначил ей быть подругой и равной мужчине, то сотворил из ребра.',
        img: '../images/augustine.jpg',
    },
    {
        author: 'Аврелий Августин',
        text: 'Мир — это книга. И кто не путешествовал по нему — прочитал в ней только одну страницу.',
        img: '../images/augustine.jpg',
    },
    {
        author: 'Аврелий Августин',
        text: 'Чудо противоречит не законам природы, а лишь нашим представлениям о законах природы...',
        img: '../images/augustine.jpg',
    },
    {
        author: 'Аврелий Августин',
        text: 'Человек не будет наслаждаться едой и питьем, если не перестрадает от голода и жажды.',
        img: '../images/augustine.jpg',
    },
    {
        author: 'Аврелий Августин',
        text: 'Я убедил себя, что следует больше доверять тем, кто учит, а не тем, кто приказывает.',
        img: '../images/augustine.jpg',
    },
];


// let quotations = [
//     {
//         author: 'Конфуций',
//         img: '../../assets/images/panda.png',
//         text: [
//             'Найдите работу, в которую влюбитесь, и вам больше не придётся трудиться ни одного дня в жизни.',
//             'Красота есть во всем, но не всем дано это видеть.',
//             'Когда вам покажется, что цель недостижима, не изменяйте цель — изменяйте свой план действий.',
//             'Это неважно, что медленно ты идёшь... главное — не останавливайся.',
//             'Величайшая слава не в том, чтобы никогда не ошибаться, а в том, чтобы уметь подняться каждый раз, когда падаешь...',
//             'Есть три ошибки в общении людей: первая — это желание говорить прежде, чем нужно; вторая — застенчивость, не говорить когда это нужно; третья — говорить, не наблюдая за вашим слушателем.'
//         ]
//     },
//     {
//         author: 'Лао-Цзы',
//         text:
//             img: '../../assets/images/panda.png',
//     },
// ];
let zone = document.getElementById('genetateQuot');
let refresh_button = document.querySelector('.refresh-hidden');
const cardsContainer = document.querySelector('.quotation-container');

let imgCount = quotations.length;

function randomCards(imgCount) {
    quotations = quotations.sort(() => Math.random() - 0.5).slice(0, 1);
    return quotations;
}

function createCards() {
    cardsContainer.innerHTML = '';
    randomCards();
    quotations.forEach(el => {
        // document.getElementById(img).src = "${el.img}";
        // document.getElementById(author).textContent += "${el.author}";
        // document.getElementById(text).textContent  += "${el.text}";

        cardsContainer.innerHTML = //refresh
            `<div class="quotation-container">
                <div class="refresh-hidden"></div> 
                <div class="remove-clickable_zone" id='genetateQuot'></div>
                <div class="img-container">
                    <img src=${el.img} alt="картинка">
                </div> 
                <div class="text-quotation-container">
                    <div class="author">
                        <span>${el.author}</span>
                    </div>
                    <div class="quotation">
                        <q>${el.text}</q>
                    </div>
                </div>
            </div>`
    });

let refresh_button = document.querySelector('.refresh-hidden');

let zone = document.querySelector('.clickable-zone');
// refresh_button.classList.add('refresh');
    
}


function change_quotation() {
    createCards();
    zone.classList.add('remove-clickable-zone');
    refresh_button.classList.add('refresh');
    setTimeout(() => zone.style.display = 'none', 500);

}

// refresh_button.addEventListener('click', createCards);
