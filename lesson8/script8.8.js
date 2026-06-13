// if (!name) returns undefined if not declared
function getSecretMessage(name) {
    if (!name) return
    return `О, а я тебя знаю! Ты же тот самый ${name}`
}

console.log(
    getSecretMessage()
)