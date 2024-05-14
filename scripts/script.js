function submitForm() {
  // Obtém os dados do formulário
  var formData = validatePet({
    type: document.querySelector('input[name="tipo"]:checked') ? document.querySelector('input[name="tipo"]:checked').value : "",
    breed: Array.from(document.querySelectorAll('input[name="raca"]:checked')).map(option => option.value),
    size: Array.from(document.querySelectorAll('input[name="porte"]:checked')).map(option => option.value),
    color: Array.from(document.querySelectorAll('input[name="cor"]:checked')).map(option => option.value),
    gender: document.querySelector('input[name="genero"]:checked') ? document.querySelector('input[name="genero"]:checked').value : "",
    age: Array.from(document.querySelectorAll('input[name="idade"]:checked')).map(option => option.value),
    observations: document.getElementById("observacoes").value
  });

  getPets(formData)
    .then(results => renderResults(results))
    .catch(error => console.error("Erro ao buscar os pets:", error));
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
  getCategoryValues('raca').then(results => {
    populateSelectOptions("raca", results);
  });
  getCategoryValues('cor').then(results => {
    populateSelectOptions("cor", results);
  }).catch(error => {
    console.error("Erro ao carregar os dados da API:", error);
  });
}
// Função para buscar na API fictícia
function searchAPI(formData) {
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
    { id: 1, value: 'Labrador', label: 'Labrador' },
    { id: 2, value: 'Golden', label: 'Golden' },
    { id: 3, value: 'Bulldog', label: 'Bulldog' },
    { id: 4, value: 'Beagle', label: 'Beagle' },
    // Mais resultados...
    // Retornar a resposta simulada da API
  ];

  console.log(fakeApiResponse)
  return Promise.resolve(fakeApiResponse);
}
//EU CRIEI ESSA NOVA AQUI MAS È TEMPORARIA E DEVE SER REMOVIDA
function fetchFAKEAPI() {
  // Aqui você fará a solicitação para a API, para carregar o select
  // e receberá a resposta da API
  // Neste exemplo, vamos simular uma resposta da API

  const fakeApiResponse = [
    { id: 1, value: 'Branco', label: 'Branco' },
    { id: 1, value: 'Preto', label: 'Preto' },
    { id: 1, value: 'Marrom', label: 'Marrom' },
    { id: 1, value: 'Caramelo', label: 'Branco' },
    { id: 1, value: 'Amarelo', label: 'Preto' },
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
    noResultsButton.addEventListener('click', function () {
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
      image.alt = result.type;
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
      description.textContent = result.observations;
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
    image.alt = result.title;
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
  // Selecione o container dos checkboxes
  const checkboxGroup = document.getElementById(selectId);
  checkboxGroup.innerHTML = "";
  // Itere sobre os dados e crie os checkboxes
  data.forEach(option => {
    // Crie o input do tipo checkbox
    const divcheckbox = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = option.toLowerCase();
    checkbox.name = selectId;
    checkbox.value = option;

    // Crie a label para o checkbox
    const label = document.createElement("label");
    label.htmlFor = option;
    label.textContent = option;

    // Adicione o checkbox e a label ao container
    divcheckbox.appendChild(checkbox);
    divcheckbox.appendChild(label);
    checkboxGroup.appendChild(divcheckbox);
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
                  <img src="${result.imgUrl}" alt="${result.title}" class="modal-card-img">
                  <div class="modal-card-info">
                      <h5 class="modal-card-title">${result.title}</h5>
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

function renderImage() {
  var file = document.getElementById('fileInput').files[0];
  var fr = new FileReader();
  
  // Mostrar indicador de carregamento
  document.getElementById('loadingIndicator').style.display = 'block';

  fr.readAsDataURL(file);
  fr.onload = async function (e) {
    var img = document.getElementById('imgPreview');
    img.src = e.target.result;

    var btn = document.getElementById('chooseFileButton');
    btn.style.display = 'none';
    
    // Sobe imagem para o imgBB para gerar URL
    // com a URL manda para o backend pegar infos com a IA
    let base64 = e.target.result.split(',')[1]
    let imgUrl = await submitToImgBB(base64);
    let infos = await extractImageInfos(imgUrl)
    submitValueToForms(infos)

    // Esconder indicador de carregamento após a imagem ser carregada
    document.getElementById('loadingIndicator').style.display = 'none';
  }
}


async function submitToImgBB(img) {
  let url = 'https://api.imgbb.com/1/upload'

  let form = new FormData()
  let apiKey = '2e777b441cd2680c9ca66360fb8ab8e6'

  form.append('image', img)
  form.append('key', apiKey)

  let res = await fetch(url, {
    method: 'POST',
    body: form
  })

  if (!res.ok) {
    console.error('Erro ao enviar imagem para o imgBB')
    console.error(res)
    return
  }

  let data = await res.json()
  return data.data.image.url
}


function submitValueToForms({type, breeds, size, colors, age, observations}) {
  document.querySelector(`input[name="tipo"][value="${type}"]`).checked = true;
  breeds.forEach(breed => {
    try{
      document.querySelector(`input[name="raca"][id="${breed}"]`).checked = true;
    } catch (e) {
      console.log('Breed not found:', breed)
    }
  });

  // size.forEach(size => {
  //     try{
  //       document.querySelector(`input[name="porte"][id="${size}"]`).checked = true;
  //     } catch (e) {
  //       console.log('Size not found:', size)
  //     }
  // });

  colors.forEach(color => {
    try{
      document.querySelector(`input[name="cor"][id="${color}"]`).checked = true;
    } catch (e) {
      console.log('Color not found:', color)
    }
  });

  age.forEach(age => {
    try{
      document.querySelector(`input[name="idade"][id="${age}"]`).checked = true;
    } catch (e) {
      console.log('Age not found:', age)
    }
  });

  // document.getElementById('observacoes').value = observations;
}