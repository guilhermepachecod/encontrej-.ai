Como Usar
Buscar Informações de Animais Perdidos
Para buscar informações de animais perdidos, você pode usar a função searchAPI. Esta função recebe um objeto com os dados do formulário e retorna uma lista de resultados fictícios para teste.

// Exemplo de uso da função searchAPI
const formData = {
    especie: 'Cachorro',
    raca: 'Vira-lata',
    porte: 'Pequeno',
    pelagem: 'Marrom',
    sexo: 'Macho',
    faixa_etaria: 'Adulto',
    cidade: 'Porto Alegre',
    outras_caracteristicas: 'Cicatriz na orelha esquerda'
};

const resultados = searchAPI(formData);
console.log(resultados);


Upload de Imagem para Pesquisa
Para fazer o upload de uma imagem para pesquisa, você pode usar a função searchAPIimage. Esta função não requer entrada de dados e simula o upload de uma imagem, retornando um objeto com informações fictícias da imagem.

// Exemplo de uso da função searchAPIimage
const imagem = searchAPIimage();
console.log(imagem);

Dados Fictícios
Para testar as funções searchAPI e searchAPIimage, você pode usar os dados fictícios fornecidos na variável fakeApiResponse. Esta variável contém uma lista de resultados fictícios para teste.

// Exemplo de dados fictícios
const fakeApiResponse = [
    { id: 1, imageUrl: 'https://example.com/image1.jpg', title: 'Pet 1', description: 'Descrição do Pet 1' },
    { id: 2, imageUrl: 'https://example.com/image2.jpg', title: 'Pet 2', description: 'Descrição do Pet 2' },
    { id: 3, imageUrl: 'https://example.com/image3.jpg', title: 'Pet 3', description: 'Descrição do Pet 3' },
    // Mais resultados...
];

