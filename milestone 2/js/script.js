const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const containerMainImage = document.querySelector('.left-image')
for (let i = 0; i < items.length; i++) {
    const mainImage = items[i];
    const titleImage = title[i];
    const textImage = text[i];
    
    console.log(mainImage);
    console.log(titleImage);
    console.log(textImage);

    const newImage = `
    <div class="main-image">
        <img src="${mainImage}" alt="Img ${i}">
        <div class="image-text">
            <h3>${titleImage}</h3>
            <p>${textImage}</p>
        </div>
    </div>
    `;

    containerMainImage.innerHTML += newImage;
    
}