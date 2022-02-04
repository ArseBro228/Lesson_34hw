// let lang = prompt("На каком языке вы хотите просматривать контент?")

// switch(lang) {
//     case 'русский':
//         alert("Вы вибрали язык 'русский', Добро пожаловать");
//         break;
//     case 'английський':
//         alert("Вы вибрали язык 'английськкий', Welcome");
//         break;
//     case 'французкий':
//         alert("Вы вибрали язык 'французкий', Bienvenue");
//         break;
//     default:
//         alert("Такого языка в системе нет)")
// }

// switch (переменная) {
//     case значение1:
//         инструкция1
//         break;
//     case значение2:
//         инструкция2
//         break;
//     case значение3:
//         инструкция3
//         break;
//     default:
//         break;
// }

let selector = document.getElementById('selector')
let p = document.getElementById('p')
selector.addEventListener('change', function(){
    let option = selector.value
    if(option == 'H_P'){
        p.innerHTML = `
        <div class="block1">
            <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcall-board.ru%2F800%2F600%2Fhttps%2Fwww.colady.ru%2Fwp-content%2Fuploads%2F2017%2F05%2Fsamye-chitaemye-knigi-mira.png&f=1&nofb=1" alt="">
            <h1>Harry Potter</h1>
            <p>«Га́рри По́ттер» (англ. «Harry Potter») — серия романов, написанная британской писательницей Дж. К. Роулинг. Книги представляют собой хронику приключений юного волшебника Гарри Поттера, а также его друзей Рона Уизли и Гермионы Грейнджер, обучающихся в школе чародейства и волшебства Хогвартс. Основной сюжет посвящён противостоянию Гарри и тёмного волшебника по имени лорд Волан-де-Морт, в чьи цели входит обретение бессмертия и порабощение магического мира.</p>
        </div>`
    } else if(option == 'astral'){
        p.innerHTML = `
        <div class="block2">
            <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSLboxF-P27g%2Fmaxresdefault.jpg&f=1&nofb=1" alt="">
            <h1>ASTRAL</h1>
            <p>Преподаватель Джош, его жена Рене и трое их детей (Далтон, Фостер и Кэлли) переезжают в новый дом. Ещё даже не успев распаковаться, Рене начинает замечать странные вещи. Книги, которые она ставила на полку, вдруг оказываются на полу, коробка с нотными тетрадями, которые она долго не могла найти, оказывается на чердаке, слышатся странные звуки.</p>
        </div>`
    } else if(option == 'avatar'){
        p.innerHTML = `
        <div class="block3">
            <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.computerhoy.com%2Fsites%2Fnavi.axelspringer.es%2Fpublic%2Fstyles%2F1200%2Fpublic%2Fmedia%2Fimage%2F2017%2F03%2F227284-vas-tener-que-esperar-mas-ver-estreno-avatar-2.jpg%3Fitok%3D-cybd3ZY&f=1&nofb=1" alt="">
            <h1>Avatar</h1>
            <p>Джейк Салли — бывший морской пехотинец, прикованный к инвалидному креслу. Несмотря на немощное тело, Джейк в душе по-прежнему остаётся воином. Он получает задание совершить путешествие в несколько световых лет к базе землян на планете Пандора, где корпорации добывают редкий минерал, имеющий огромное значение для выхода Земли из энергетического кризиса.</p>
        </div>`
    } else{
        p.innerHTML = ' '
    }
})



