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
const posts = [
    {
        
        autore: "Antonio Dumitru",
        fotoProfilo: "https://www.emozionifotografiche.org/wp-content/uploads/2020/03/Fotografando-Paesaggi-1-800p-300x300.jpg",
        dataCreazione: "27/03/2021",
        contenuto: `Il mio viaggio in Giappone`,
        immagine: "https://media.istockphoto.com/photos/fuji-japan-in-spring-picture-id876560704?k=20&m=876560704&s=612x612&w=0&h=ESL0O5Msbqh0jEs382NM_gh-2lRAvmA4QEgWZDvYffQ=",
        numeroLike: 80
    },

    {
      

        autore: "Matteo Cola",
        fotoProfilo: "https://photos.bandsintown.com/thumb/132355.jpeg",
        dataCreazione: "16/02/2019",
        contenuto: `il mio paesaggio preferito`,
        immagine: "https://i.picsum.photos/id/277/300/300.jpg?hmac=6nBRqeNnqyIsMzhXkeSuvgTjvl4oFhR-mUlzEBy7Kbk",
        numeroLike: 8
    },

    {
        autore: "Fabio Tonoli",
        dataCreazione: "25/12/2020",
        fotoProfilo: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/27/2021/11/GettyImages-1348299407.jpg",
        contenuto: `La mia macchinina preferita :D`,
        immagine: "https://foto2.newsauto.it/wp-content/uploads/2021/06/f1-2021-gp-stiria-ferrari-780x470.jpg",
        numeroLike: 88
    },
]


let container = document.querySelector('#container');

// creo un ciclo for 
function stampaPosts() {
    for (let i = 0; i<posts.length; i++){
        container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${posts[i].fotoProfilo}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].autore}</div>
                        <div class="post-meta__time">${posts[i].dataCreazione}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].contenuto}</div>
            <div class="post__image">
                <img src="${posts[i].immagine}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${i}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].numeroLike}</b> persone
                    </div>
                </div> 
            </div>         
        </div>   
        `
    }

    const buttons = document.querySelectorAll('.like-button');

    for (let i = 0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function() {
            const id = this.getAttribute('data-postid');
            console.log(id);
            var element = i+1;
            posts[id].numeroLike = posts[id].numeroLike + 1;
            document.getElementById("like-counter-"+element).innerHTML  = posts[id].numeroLike;
            stampaPosts();
        });
    }

}

stampaPosts();



