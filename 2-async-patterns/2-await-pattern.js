const { readFile, writeFile } = require('fs')
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// new better way
const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise('./content/result-mind-grenade.txt', "Cool");

        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

// old, ugly way
/*
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

getText('./content/first.txt')
    .then(result => console.log(result))
    .catch((err) => console.log(err))
*/