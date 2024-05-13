const arrElementValues = (element) => Array.from(element.selectedOptions).map(option => option.value);

function submitForm() {    
    // Obtém os dados do formulário
    var formData = validatePet({
      type: document.getElementById("tipo").value,
      breed: arrElementValues(document.getElementById("raca")),
      size: arrElementValues(document.getElementById("porte")),
      color: arrElementValues(document.getElementById("cor")),
      gender: document.getElementById("genero").value,
      age: arrElementValues(document.getElementById("idade")),
      observations: document.getElementById("observacoes").value
    });
    
    searchAPI(formData)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        renderResults(data)
      })
      .catch(err => console.error('Erro ao buscar dados:', err));

    // Aqui você pode adicionar código para enviar os dados para o Forms do Google ou outro destino desejado
  }
  function openFilePicker() {
    document.getElementById('fileInput').click();
}

function uploadImage() {
  var fileInput = document.getElementById('fileInput');
  var file = fileInput.files[0];
  if (file) {
      // Aqui você pode processar o arquivo selecionado
      console.log('Arquivo selecionado:', file);
      searchAPIimage(file).then(results => {
        renderResults(results);
      });
  }
}

function onloadPageUpdates() {
      // Aqui você pode processar o arquivo selecionado
      loadAPIUpdates().then(results => {
        renderResultsUpdates(results);
      });
      fetchAPI().then(results => {
        populateSelectOptions("raca",results);
      });
      fetchAPI().then(results => {
        populateSelectOptions("cor",results);
      }).catch(error => {
        console.error("Erro ao carregar os dados da API:", error);
      });
}
  // Função para buscar na API fictícia
  function searchAPI(formData) {
    const query = queryString(formData);
    console.log(query);
    const url = `https://encontreja-ai.vercel.app/api/pet?${query}`;
    
    var res = fetch(url);
 
    return Promise.resolve(res)
 }
 
function searchAPIimage(file) {
  // Aqui você fará a solicitação para a API, enviando os dados do formulário
  // e receberá a resposta da API
  // Neste exemplo, vamos simular uma resposta da API
  const fakeApiResponse = [
      { id: 1, imageUrl: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/05/Foto-de-Cachorro-6.jpg', title: 'Pet 1', description: 'Descrição do Pet 1' },
      { id: 2, imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fdescubra-agora-5-cuidados-que-se-deve-ter-com-os-filhotes-de-cachorro-2.jpg&f=1&nofb=1&ipt=931ce249445b42cf1f2c779963d6ada5a875345f46dabd00639057909e0b0f3b&ipo=images', title: 'Pet 2', description: 'Descrição do Pet 2' },
      { id: 3, imageUrl: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/05/Foto-de-Cachorro-6.jpg', title: 'Pet 3', description: 'Descrição do Pet 3' },
      { id: 4, imageUrl: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/05/Foto-de-Cachorro-6.jpg', title: 'Pet 1', description: 'Descrição do Pet 4' },
      // Mais resultados...
  ];
  // Retornar a resposta simulada da API
  return Promise.resolve(fakeApiResponse);
}
function loadAPIUpdates() {
  // Aqui você fará a solicitação para a API, enviando os dados do formulário
  // e receberá a resposta da API
  // Neste exemplo, vamos simular uma resposta da API
  // O máximo de itens aqui não pode passar de 8
  //pares ajustam melhor
  const fakeApiResponse = [
      { id: 1, imageUrl: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/05/Foto-de-Cachorro-6.jpg', title: 'Pet 1', description: 'Descrição do Pet 1' },
      { id: 2, imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fdescubra-agora-5-cuidados-que-se-deve-ter-com-os-filhotes-de-cachorro-2.jpg&f=1&nofb=1&ipt=931ce249445b42cf1f2c779963d6ada5a875345f46dabd00639057909e0b0f3b&ipo=images', title: 'Pet 2', description: 'Descrição do Pet 2' },
      { id: 3, imageUrl: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/05/Foto-de-Cachorro-6.jpg', title: 'Pet 3', description: 'Descrição do Pet 3' },
      { id: 4, imageUrl: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/05/Foto-de-Cachorro-6.jpg', title: 'Pet 1', description: 'Descrição do Pet 4' },
      { id: 1, imageUrl: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/05/Foto-de-Cachorro-6.jpg', title: 'Pet 1', description: 'Descrição do Pet 1' },
      { id: 2, imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fdescubra-agora-5-cuidados-que-se-deve-ter-com-os-filhotes-de-cachorro-2.jpg&f=1&nofb=1&ipt=931ce249445b42cf1f2c779963d6ada5a875345f46dabd00639057909e0b0f3b&ipo=images', title: 'Pet 2', description: 'Descrição do Pet 2' },
      { id: 3, imageUrl: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/05/Foto-de-Cachorro-6.jpg', title: 'Pet 3', description: 'Descrição do Pet 3' },
      { id: 4, imageUrl: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/05/Foto-de-Cachorro-6.jpg', title: 'Pet 1', description: 'Descrição do Pet 4' },
      // Mais resultados...
  ];
  // Retornar a resposta simulada da API
  return Promise.resolve(fakeApiResponse);
}
  // Função para buscar na API fictícia
function fetchAPI() {
    // Aqui você fará a solicitação para a API, para carregar o select
    // e receberá a resposta da API
    // Neste exemplo, vamos simular uma resposta da API

    const fakeApiResponse = [
      { id: 1, value: 'Branco',  label: 'Branco' },
      { id: 1, value: 'Preto',  label: 'Preto' },
      { id: 1, value: 'Marrom',  label: 'Marrom' },
      // Mais resultados...
      // Retornar a resposta simulada da API
    ];

    return Promise.resolve(fakeApiResponse);
  }

function renderResults(results) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';

  // Verifica se há resultados
  if (results.length === 0) {
    // Se não houver resultados, exibe uma mensagem de aviso
    const statusresultado = document.getElementById('statusresultado');
    statusresultado.innerHTML = 'Não encontramos <br>resultados para a sua <br>pesquisa.';
    
    const noResultsDIV = document.createElement('div');
    const noResultsMessageA = document.createElement('p');
    noResultsMessageA.textContent = 'Isso pode ocorrer por alguns fatores:';
    noResultsMessageA.classList.add('pbold');
    noResultsDIV.appendChild(noResultsMessageA);
    noResultsDIV.appendChild(document.createElement('br'));
    const noResultsMessageB = document.createElement('p');
    noResultsMessageB.textContent = 'Não está disponível no banco de dados. Foto com diferenças muito grandes de iluminação e ângulo.';
    noResultsMessageB.classList.add('perro');
    noResultsDIV.appendChild(noResultsMessageB);
    noResultsDIV.appendChild(document.createElement('br'));
    const noResultsMessageC = document.createElement('p');
    noResultsMessageC.textContent = 'Não perca suas esperanças. Nosso cadastro é atualizado diariamente e faremos tudo para reunir vocês novamente. Volte em breve';
    noResultsMessageC.classList.add('perro');
    noResultsDIV.appendChild(noResultsMessageC);

    noResultsDIV.appendChild(document.createElement('br'));
    const noResultsButton = document.createElement('button');
    noResultsButton.textContent = 'REFAZER BUSCA';
    noResultsButton.addEventListener('click', function() {
      document.getElementById('selecao').scrollIntoView({ behavior: 'smooth' });
  });
    noResultsDIV.appendChild(noResultsButton);
    
    noResultsDIV.classList.add('diverro');
    resultsContainer.appendChild(noResultsDIV);
  } else {
    results.forEach(result => {
      // Criar um card para cada resultado
      const card = document.createElement('div');
      card.classList.add('card');
      card.classList.add('card-result');
      card.classList.add('center');
      // Criar a imagem
      const image = document.createElement('img');
      image.src = result.imgUrl;
      image.alt = result.location;
      image.classList.add('card-img-top-result');
      card.appendChild(image);

      // Criar o título
      const title = document.createElement('h5');
      title.textContent = result.location;
      title.classList.add('card-text');
      title.classList.add('card-text-result');
      title.classList.add('white');
      card.appendChild(title);

      // Criar a descrição
      const description = document.createElement('p');
      description.textContent = result.observations ? result.observations : 'Sem descrição';
      description.classList.add('card-text');
      description.classList.add('card-text-result');
      //card.appendChild(description);

      card.addEventListener('click', () => {
        // Abra o modal com as informações do card
        openModal(result);
      });

      // Adicionar o card ao contêiner de resultados
      resultsContainer.appendChild(card);
    });
  }

  // Mova o scroll para a seção de resultados
  document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}


function renderResultsUpdates(results) {
  const resultsContainer = document.getElementById('lastupdates-container');
  resultsContainer.innerHTML = ''; // Limpa o conteúdo do elemento

  results.forEach(result => {
    // Criar um card para cada resultado
    const card = document.createElement('div');
    card.classList.add('card-updates');
    
    // Criar a imagem
    const image = document.createElement('img');
    image.src = result.imgUrl;
    image.alt = result.location;
    image.classList.add('card-img-top');
    card.appendChild(image);

    card.addEventListener('click', () => {
      // Abra o modal com as informações do card
      openModal(result);
    });

    // Adicionar o card ao contêiner de resultados
    resultsContainer.appendChild(card);
  });
}
function populateSelectOptions(selectId, data) {
  const select = document.getElementById(selectId);
  select.innerHTML = ""; // Limpa as opções existentes

  data.forEach(option => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.label;
      select.appendChild(optionElement);
  });
}
function openModal(result) {
      // Criar o modal
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `
          <div class="modal-overlay"></div>
          <div class="modal-content">
          <div class="modal-header">
          <button class="modal-close-btn" onclick="closeModal()">X</button>
          </div>
              <div class="modal-card">
                  <img src="${result.imgUrl}" alt="${result.location}" class="modal-card-img">
                  <div class="modal-card-info">
                      <h5 class="modal-card-title">${result.location}</h5>
                      <p class="modal-card-description">${result.observations}</p>
                  </div>
              </div>
          </div>
      `;
      
      // Adicionar o modal ao corpo da página
      document.body.appendChild(modal);
}
// Função para fechar o modal
function closeModal() {
  const modal = document.querySelector('.modal');
  if (modal) {
      modal.remove();
  }
}
