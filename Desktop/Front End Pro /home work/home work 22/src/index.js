'use strict';

const films = [
    {
        title :'Спеши любить',
        genre : 'драма',
        year :'1990',
    },
    {
        title :'Как я встретил вашу маму',
        genre : 'комедия',
        year :'2003',
    },
    {
        title :'Славные парни',
        genre : 'криминал',
        year :'1980',
    },
    {
        title :'Впритык',
        genre :'комедия',
        year :'1983',
    },
    {
        title :'Парни',
        genre :'комедия',
        year :'1985',
    },
    {
        title :'papapapa',
        genre :'комедия',
        year :'1980',
    }
];
//console.log(Object.values(films));

const sortFilms = function(arrayFilms){
    return arrayFilms.reduce((obj,currentValue) => {

        const {title,genre,year} = currentValue;

        if(!obj[genre]){
            obj[genre] = [];
        }

        obj[genre].push({title,year});
        return obj;

    },{});
};
const sortedFilms = sortFilms(films);

sortedFilms[Symbol.iterator] = function() {
    const item = Object.values(this).flat();
    const items = item.map((i) => {
        return i.title;
    });
    //console.log(items);

    //console.log(items.length);
    let itemIndex = 0;
    return {
        next() {
            return {
                value: items[itemIndex++],
                done : itemIndex > items.length
            };
        }
    };
};

for(const key of sortedFilms){
/* eslint-disable */
    console.log(key);
};