// ==UserScript==
// @name        Pokemon Showdown Avatar Replacer
// @description Replaces avatars with custom "NFTs" on pokemon showdown
// @match      http://play.pokemonshowdown.com/*
// @match      https://play.pokemonshowdown.com/*
// @match      http://play.pokemonshowdown.com/*
// @match      https://play.pokemonshowdown.com/*
// @match      http://replay.pokemonshowdown.com/*
// @match      https://replay.pokemonshowdown.com/
// @match      http://replay.pokemonshowdown.com/*
// @match      https://replay.pokemonshowdown.com/*
// @updateURL    https://github.com/beta20x/NFTDB/raw/master/script.js
// @downloadURL  https://github.com/beta20x/NFTDB/raw/master/script.js
// @match      http://*.psim.us/*
// @match      https://*.psim.us/
// @match      http://*.psim.us/*
// @match      https://*.psim.us/*
// @version     2.0.8
// @grant       none
// ==/UserScript==


const data = [
    {
        name: "Jumpluff Ace Trainer",
        query: "https://play.pokemonshowdown.com/sprites/trainers/erika-gen2.png",
        replacement: "https://i.imgur.com/0TN5NDe.png"
    },
    {
        name: "Oleana Calyrex Ice",
        query: "https://play.pokemonshowdown.com/sprites/trainers/maid-gen4.png",
        replacement: "https://i.imgur.com/TwJ1x9G.png"
    },
    {
        name: "Rotom Heat Trainer",
        query: "https://play.pokemonshowdown.com/sprites/trainers/blackbelt-gen1rb.png",
        replacement: "https://i.imgur.com/ObCckQn.png"
    },
    {
        name: "Slowbro Trainer",
        query: "https://play.pokemonshowdown.com/sprites/trainers/acetrainer-gen1rb.png",
        replacement: "https://i.imgur.com/onhKdqk.png"
    },
    {
        name: "Grookey Trainer",
        query: "https://play.pokemonshowdown.com/sprites/trainers/expertf-gen6.png",
        replacement: "https://i.imgur.com/dUYdPN0.png"
    },
    {
        name: "Piers Overqwil",
        query: "https://play.pokemonshowdown.com/sprites/trainers/beauty-gen6xy.png",
        replacement: "https://i.imgur.com/DxuupCk.png"
    },
    {
        name: "Rocket Absol",
        query: "https://play.pokemonshowdown.com/sprites/trainers/sidney-gen3.png",
        replacement: "https://i.imgur.com/AbWrOcY.png"
    },
    {
        name: "Soliera Poipole",
        query: "https://play.pokemonshowdown.com/sprites/trainers/lusamine-masters.png",
        replacement: "https://i.imgur.com/j0Gu8WW.png"
    },
    {
        name: "Archie Primal Kyogre",
        query: "https://play.pokemonshowdown.com/sprites/trainers/archie-gen6.png",
        replacement: "https://i.imgur.com/Iphkl7n.png"
    },
    {
        name: "N Zoroark Hisui",
        query: "https://play.pokemonshowdown.com/sprites/trainers/n-masters.png",
        replacement: "https://i.imgur.com/5sVe5S3.png"
    },
    {
        name: "Mustard Kubfu",
        query: "https://play.pokemonshowdown.com/sprites/trainers/youngster-gen1rb.png",
        replacement: "https://i.imgur.com/KrfdiLH.png"
    },
    {
        name: "Ghetsis Eiscue Noice",
        query: "https://play.pokemonshowdown.com/sprites/trainers/fisherman-gen2jp.png",
        replacement: "https://i.imgur.com/gSl3nrz.png"
    },
    {
        name: "Basketball Player Sandaconda",
        query: "https://play.pokemonshowdown.com/sprites/trainers/swimmerm-gen3rs.png",
        replacement: "https://i.imgur.com/C6AG4cv.png"
    },
    {
        name: "Mordecai Articuno",
        query: "https://play.pokemonshowdown.com/sprites/trainers/boarder-gen2.png",
        replacement: "https://i.imgur.com/fD3g1MI.png"
    },
    {
        name: "Turo Miraidon",
        query: "https://play.pokemonshowdown.com/sprites/trainers/volkner-masters.png",
        replacement: "https://i.imgur.com/MXUw7SY.png"
    },
    {
        name: "Sada Koraidon",
        query: "https://play.pokemonshowdown.com/sprites/trainers/sonia-professor.png",
        replacement: "https://i.imgur.com/31hrE4h.png"
    },
    {
        name: "Red Zacain Crowned",
        query: "https://play.pokemonshowdown.com/sprites/trainers/red-gen1main.png",
        replacement: "https://i.imgur.com/4HpdzJ8.png"
    },
    {
        name: "Collector Klawf",
        query: "https://play.pokemonshowdown.com/sprites/trainers/collector-masters.png",
        replacement: "https://i.imgur.com/q7BvPK9.png"
    },
    {
        name: "Clay Kleavor",
        query: "https://play.pokemonshowdown.com/sprites/trainers/bugsy-gen2.png",
        replacement: "https://i.imgur.com/GsmDxUk.png"
    },
    {
        name: "Homelander Palafin",
        query: "https://play.pokemonshowdown.com/sprites/trainers/theroyal.png",
        replacement: "https://i.imgur.com/JYuqES2.png"
    }, 
    {
        name: "Fisherman Chi-Yu",
        query: "https://play.pokemonshowdown.com/sprites/trainers/fisherman-gen6.png",
        replacement: "https://i.imgur.com/botOYvB.png"
    },
    {
        name: "Colress Iron Valiant",
        query: "https://play.pokemonshowdown.com/sprites/trainers/colress-gen7.png",
        replacement: "https://i.imgur.com/mngFNeL.png"
    },
    {
        name: "Ball Guy Electrode",
        query: "https://play.pokemonshowdown.com/sprites/trainers/waiter-gen4dp.png",
        replacement: "https://i.imgur.com/zOYlwET.png"
    },
    {
        name: "Wo-Chien Live Reaction",
        query: "https://play.pokemonshowdown.com/sprites/trainers/cameraman-gen8.png",
        replacement: "https://i.imgur.com/rznoYXF.png"
    },
    {
        name: "Cram-o-Master",
        query: "https://play.pokemonshowdown.com/sprites/trainers/engineer-gen3.png",
        replacement: "https://i.imgur.com/ZgUdSRK.png"
    }
]


setInterval(function() {
    for (let i = 0; i < data.length; i++){
        for (let image of document.getElementsByClassName('trainersprite')){
            image.style['background-image'] = image.style['background-image'].replace(data[i].query, data[i].replacement);
        }
        for (let image of document.getElementsByTagName('img')) {
            if (image.src == data[i].query) image.src = data[i].replacement;
        }
    }
}, 50);
