import api from './api';

class App{
    constructor(){
       this.repositories = []; 

       this.formEl = document.getElementById('repo-form');
       this.inputEl = document.querySelector('input[name=repository]');
       this.listEl = document.getElementById('repo-list');

       this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);

    }

    setLoading(loading = true){
        if ( loading === true){
            let loadingEL = document.createElement('span');
            loadingEL.appendChild(document.createTextNode('Carregando'));
            loadingEL.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEL);
        } else {

            document.getElementById('loading').remove();

        }
    }

    async addRepository(event){
        event.preventDefault(); // Aparentemente essa chamada DEVE ficar na primeira linha. Estava dando erro quando eu deixei ficar no meio da função atual.

        const repoInput = this.inputEl.value;

        if ( repoInput.length === 0 ){
            return;
        }

        this.setLoading();

    try { 
        const response = await api.get(`/repos/${repoInput}`);

        const { name, description, html_url, owner: {avatar_url}} = response.data;


        console.log(response);


        /*this.repositories.push({
            name: 'RocketSeat.com.br',
            description: 'Tire a sua ideia do papel e dê vida à sua startup.',
            avatar_url: 'http://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat.com.br/',


        });*/

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,


        });

        this.inputEl.value = '';

        console.log(this.repositories);
        this.renderList();
    } catch (err) {

        alert('O repositório não existe');

    }

        this.setLoading(false);

    }

    renderList(){

        this.listEl.innerHTML='';

        this.repositories.forEach(repo => {

            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));
        
            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        });

           
        

    }
}

//const meuApp = new App();

new App();