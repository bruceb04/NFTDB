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
// @version     1.0.4
// @grant       none
// ==/UserScript==

const queries = ["https://play.pokemonshowdown.com/sprites/trainers/erika-gen2.png", "https://play.pokemonshowdown.com/sprites/trainers/maid-gen4.png",
                   "https://play.pokemonshowdown.com/sprites/trainers/blackbelt-gen1rb.png", "https://play.pokemonshowdown.com/sprites/trainers/acetrainer-gen1rb.png",
                   "https://play.pokemonshowdown.com/sprites/trainers/expertf-gen6.png", "https://play.pokemonshowdown.com/sprites/trainers/beauty-gen6xy.png", 
                   "https://play.pokemonshowdown.com/sprites/trainers/sidney-gen3.png","https://play.pokemonshowdown.com/sprites/trainers/lusamine-masters.png",
                "https://play.pokemonshowdown.com/sprites/trainers/archie-gen6.png"];
const replacements = ["https://i.imgur.com/0TN5NDe.png", "https://i.imgur.com/TwJ1x9G.png", "https://i.imgur.com/ObCckQn.png",
                        "https://i.imgur.com/onhKdqk.png", "https://i.imgur.com/dUYdPN0.png", "https://i.imgur.com/DxuupCk.png",
                       "https://i.imgur.com/AbWrOcY.png", "https://i.imgur.com/j0Gu8WW.png", "https://i.imgur.com/Iphkl7n.png"];


setInterval(function() {
    for (let image of document.getElementsByTagName('img')) {
        for (let i = 0; i < queries.length; i++){
            if (image.src == queries[i]) image.src = replacements[i];
        }
    }
    for (let image of document.getElementsByClassName('trainersprite')){
        for (let j = 0; j < queries.length; j++){
           image.style['background-image'] = image.style['background-image'].replace(queries[j], replacements[j]);
        }
    }

}, 75);