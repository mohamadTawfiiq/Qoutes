
var qoutes = [

    {
        qouteContent: `<p class=" text-center fs-2 fw-semibold"> “Be yourself; everyone else is already taken.”</p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold text-danger " >-- Oscar Wilde</p>`
    },

    {
        qouteContent: `<p class=" text-center  fs-2 fw-semibold"> “So many books, so little time.” </p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold text-danger " >-- Frank Zappa</p>`
    },

    {
        qouteContent: `<p class=" text-center  fs-2 fw-semibold"> “A room without books is like a body without a soul.”</p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold text-danger" >-- Marcus Tullius Cicero</p>`
    },

    {
        qouteContent: `<p class=" text-center fs-2 fw-semibold"> “You only live once, but if you do it right, once is enough.”</p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold text-danger " >-- Mae West</p>`
    },

    {
        qouteContent: `<p class=" text-center  fs-2 fw-semibold"> “Be the change that you wish to see in the world.” </p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold  text-danger " >-- Mahatma Gandhi</p>`
    },

    {
        qouteContent: `<p class=" text-center  fs-2 fw-semibold"> “In three words I can sum up everything I've learned about life: it goes on.”</p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold  text-danger " >-- Robert Frost</p>`
    },

    {
        qouteContent: `<p class=" text-center fs-2 fw-semibold"> “If you tell the truth, you don't have to remember anything.”</p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold text-danger " >-- Mark Twain</p>`
    },

    {
        qouteContent: `<p class=" text-center  fs-2 fw-semibold"> “Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .” </p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold  text-danger " >-- C.S. Lewis, The Four Loves</p>`
    },

    {
        qouteContent: `<p class=" text-center  fs-2 fw-semibold"> “A friend is someone who knows all about you and still loves you.”</p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold  text-danger " >-- Elbert Hubbard</p>`
    },

    {
        qouteContent: `<p class=" text-center fs-2 fw-semibold"> “To live is the rarest thing in the world. Most people exist, that is all.”</p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold text-danger " >-- Oscar Wilde</p>`
    },

    {
        qouteContent: `<p class=" text-center  fs-2 fw-semibold"> “We accept the love we think we deserve.”</p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold  text-danger " >-- Stephen Chbosky, The Perks of Being a Wallflower</p>`
    },

    {
        qouteContent: `<p class=" text-center  fs-2 fw-semibold"> “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”</p>`,
        qouteAouther: `<p class=" text-center  fs-3 fw-bold  text-danger " >-- Ralph Waldo Emerson</p>`
    }

]

function Qoutes() {

    document.getElementById("Quote").innerHTML = qoutes[Math.floor(Math.random() * qoutes.length)].qouteContent
    document.getElementById("auther").innerHTML = qoutes[Math.floor(Math.random() * qoutes.length)].qouteAouther

}


// console.log( qoutes[ Math.floor(Math.random() * qoutes.length ) ]);

// document.getElementById("Quote").innerHTML=  qoutes[ Math.floor(Math.random() * qoutes.length ) ].qouteContent  

