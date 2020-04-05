const filename = process.argv[2];

const linksArray = require(`./${filename}`);

function main() {
    mapReduce(linksArray)
}

function mapReduce(array) {
    let backlinkDic = {};

    let referrerUrlsKeys = Object.keys(array);

    //Parcurg cheile pe rand
    referrerUrlsKeys.forEach(referrerKey => {
        //Parcurg fiecare lista pentru fiecare cheie
        array[referrerKey].forEach(targetUrl => {
            //Verific daca am o lista pentru cheia respectiva(adica targetURL) si daca nu am o creez o lista cu refferURL
            if(!backlinkDic[targetUrl]){
                backlinkDic[targetUrl] = new Array(referrerKey)
            } else {
                //Verific intai daca am deja linkul in lista pentru a nu fi de mai multe ori
                if(!backlinkDic[targetUrl].some(key => key === referrerKey)){
                    backlinkDic[targetUrl].push(referrerKey)
                }
            }
        })
    });

    console.log(backlinkDic)
}

main();
