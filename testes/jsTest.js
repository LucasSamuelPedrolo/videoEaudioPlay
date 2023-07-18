
async function testandoAPI() {
    try {

        const options = {
            method: 'POST'
        };

        const resposta = await fetch('http://localhost:5000/login', options);

        const inf = await resposta.text();
        console.log(inf)

    } catch (er) {
        console.log(er);
    }
}

testandoAPI()