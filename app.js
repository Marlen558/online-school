// Sync (for, function, log, alert)
// Async (timeout, promise, DOM events, AJAX запросы)

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0);

// console.log(3);



// const date = new Date()

// console.log(date.getFullYear());

// console.log(date.getMonth() + 1);

// console.log(date.getUTCDay());

// console.log(date.getHours());

// console.log(date.getMinutes());

// console.log(date.getSeconds());



//-----------------------------------------------------------------//
// Promise Обещание
// Promise status(pending, filfilled, rejected)
// Promise methods (then, catch, finally, ...all)


// const phone = {
//     img: "https://softech.kg/image/cache/63ccea961faf68e3d9e4b6f1e4d845c8.jpg",
//     model: 'Iphone 14',
//     price: '90000 Som',
//     year: 2022,
//     color: 'space grey'
// }
// const phone2 = {
//     ...phone,
//     img: 'https://www.worten.pt/i/b55a9cc15b4b5fb10c349d2903c4b46bf6b38a93.jpg',
//     color: 'gold'
// }

// const smartphones = [phone, phone2]

// function fetchPhone(phoneName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (phoneName == "iphone") {
//                 resolve(smartphones)
//             } else {
//                 reject("Product Not Found")
//             }
//         }, 2000);
//     });
// }

// const input = document.getElementById("input")
// const btn = document.getElementById("btn-s")
// const emptyDiv = document.getElementById("phone")

// btn.onclick = () => {
//     const name = input.value
//     emptyDiv.innerHTML = "<h4>Loading ...</h4>"
//     const res = fetchPhone(name).then((data) => {
//         emptyDiv.innerHTML = ""
//         for (let i = 0; i < data.length; i++) {
//             emptyDiv.innerHTML += `
//         <div>
//             <img src="${data[i].img}" width="150px" alt="" />
//         </div>
//         <div>
//              <h4>${data[i].model}</h4>
//              <p>${data[i].price}</p>
//              <p>${data[i].year}</p>
//              <p>${data[i].color}</p>
//         </div>       
//         `
//         }
//     }).catch((error) => {
//         emptyDiv.innerText = error
//     }).finally(() => {
//         input.value = ""
//     })
//     console.log(res);
// }



// //------------------Fetch API---------------------------
// fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {return res.json()})
//       .then((userData) => {
//         console.log(userData);
//       }).catch((err) => {
//         console.log('err boldu');
//         console.log(err);
//       })



const movie = {
    img: "https://kg.kinoafisha.info/bishkek/movies/8370880/",
    name: 'Дочь',
    year: 2022,
    genre: 'Romantic',
    country: "Kyrgyzstan",
    price: '350 som',
    director: 'Bakyt Osmonkanov'

}

const movie2 = {
    ...movie,
    img: "http://www.manascinema.com/movies/2397",
    name: 'Аяш 2',
    genre: 'Comedy'
}

const movie3 = {
    img: "https://broadway.kg/release/11.06.2023/61",
    name: 'Мага Конул Бур',
    year: 2023,
    genre: 'Romantic',
    country: "Kazakhstan",
    price: '300 som',
    director: 'Abdusaid Shahislamov'
}

const movie4 = {
    ...movie3,
    img: "https://www.kinopoisk.ru/film/5296922/",
    name: 'Джохан 2',
    genre: 'Comedy'
}

const movies = [movie, movie2, movie3, movie4];
const Comedy = [movie2, movie4];
const Romantic = [movie, movie3];

function fetchMovie(movieName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(movieName == "movie") {
                resolve(movies);
            }else if(movieName == "Comedy"){
                resolve(Comedy);
            }else if(movieName == "Romantic"){
                resolve(Romantic)
            }else {
                reject("Movie not found")
            }
        }, 2000);
    });
}

const input = document.getElementById('input')
const btn = document.getElementById('btn-s')
const emptyDiv = document.getElementById('movie')

btn.onclick = () => {
    const name = input.value;
    emptyDiv.innerHTML = "<h4>Searching ...</h4>"
    const res = fetchMovie(name).then((data) => {
        emptyDiv.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            emptyDiv.innerHTML += `
        <div>
            <img src="${data[i].img}" width="250px" height="200px" alt="" />
        </div>
        <div>
             <h4>${data[i].name}</h4>
             <p>${data[i].year}</p>
             <p>${data[i].genre}</p>
             <p>${data[i].country}</p>
             <p>${data[i].price}</p>
             <p>${data[i].director}</p>
        </div>       
        `
        }
    }).catch((error) => {
        emptyDiv.innerText = error
    }).finally(() => {
        input.value = ""
    })
    console.log(res);
}
