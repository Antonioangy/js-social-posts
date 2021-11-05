// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.


// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
const post = [
    {
        
        autore: "Antonio Dumitru",
        fotoProfilo: "",
        dataCreazione: "27/03/2021",
        contenuto: `la mia prima foto`,
        immagine: "https://i.picsum.photos/id/277/300/300.jpg?hmac=6nBRqeNnqyIsMzhXkeSuvgTjvl4oFhR-mUlzEBy7Kbk",
        numeroLike: 80
    },

    {
      

        autore: "Marco Rossi",
        fotoProfilo: "",
        dataCreazione: "16/02/2019",
        contenuto: `il mio paesaggio preferito`,
        immagine: "https://i.picsum.photos/id/277/300/300.jpg?hmac=6nBRqeNnqyIsMzhXkeSuvgTjvl4oFhR-mUlzEBy7Kbk",
        numeroLike: 180
    },

    {
        autore: "Fabio Tonoli",
        dataCreazione: "25/12/2020",
        fotoProfilo: "",
        contenuto: `Paesaggi ne abbiamo? :D`,
        immagine: "https://i.picsum.photos/id/277/300/300.jpg?hmac=6nBRqeNnqyIsMzhXkeSuvgTjvl4oFhR-mUlzEBy7Kbk",
        numeroLike: 88
    },
]


let alreadyPosted = document.querySelector('.post');


// creo un ciclo for 
for (let i = 0; i<post.length; i++){


    
    post.innerHTML += `
    <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${post[i].fotoProfilo}">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${post[i].autore}</div>
            <div class="post-meta__time">${post[i].dataCreazione}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${post[i].contenuto}</div>
<div class="post__image">
    <img src="${post[i].immagine}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${post[i].numeroLike}</b> persone
        </div>
    </div> 
</div>            
`
    
}