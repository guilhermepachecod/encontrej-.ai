<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Encontre Já</title>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<script src="script.js"></script>
  <div class="d-none d-sm-block">
    <div class="header black">
      <img src="cachorro.png" alt="Foto de um cachorro" class="dog-photo">
      <div class="texto-flutuante">
        <h2>EncontreJá.Ai</h2>
      </div>
      <div class="text-content">
        <h1 >NÓS AJUDAMOS <br>VOCÊ A <br>ENCONTRAR SEU <br>PET PERDIDO <br>NAS ENCHENTES <br>DO RS</h1>
        <p class="subtitle">Com auxílio de inteligência artificial</p>
      </div>

    </div>
    </div>
    <div class="d-block d-sm-none">
      <div class=" black">
      <div class="texto-flutuante-phone">
          <h2>EncontreJá.Ai</h2>
        </div>
        <img src="cachorro.png" alt="Foto de um cachorro" class="dog-photo-phone">
        <div class="text-content-phone">
        <h1 >NÓS AJUDAMOS <br>VOCÊ A <br>ENCONTRAR SEU <br>PET PERDIDO <br>NAS ENCHENTES <br>DO RS</h1>
        <p class="subtitle">Com auxílio de inteligência artificial</p>
      </div>

      </div>
    </div>
    <div class="d-none d-sm-block">
    <div class="how-can-we-help black">
      <h2>Como podemos ajudar você?</h2>
      <div class="options">
        <div class="option">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">TUTOR</h5>
            <p class="card-text">ESTOU À<br> PROCURA DO<br> MEU PET<br> PERDIDO</p>
          </div>
        </div>
        </div>
        <div class="option-right">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">ABRIGOS E LARES TEMPORARIOS</h5>
            <p class="card-text">QUERO<br> CADASTRAR<br> ANIMAIS<br> ENCONTRADOS.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    <div class="d-block d-sm-none">
    <div class="how-can-we-help-phone black">
      <h2 class="h2-phone">Como podemos ajudar você?</h2>
      <div class="options-phone">
        <div class="option-phone">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">TUTOR</h5>
            <p class="card-text">ESTOU À<br> PROCURA DO<br> MEU PET<br> PERDIDO</p>
          </div>
        </div>
        </div>
        <div class="option-phone">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">ABRIGOS E LARES TEMPORARIOS</h5>
            <p class="card-text">QUERO<br> CADASTRAR<br> ANIMAIS<br> ENCONTRADOS.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
      <div class="upload-container white">
      <input type="file" id="fileInput" style="display: none;" accept="image/*">
        <div id="chooseFileButton" class="upload-box" onclick="openFilePicker()">
          <p>Clique aqui para anexar a <br>foto do seu pet</p>
        </div>
        <p class="instruction">Escolha uma foto nítida que seu pet esteja em<br> destaque e com boa resolução.</p>
        <button onclick="uploadImage()">EncontreiJá.Ai</button>
      </div>
      
    <div class="characteristics white">
      <h3>Selecione todas as características do <br>seu pet:</h3>
      <form id="pet-form">
        <div class="form-group">
          <label for="especie">Qual era a espécie do seu pet? Cachorro ou gato?</label>
          <br>
          <input type="text" id="especie" name="especie">
        </div>
        <div class="form-group">
          <label for="raca">Qual é a raça do seu pet?</label>
          <br>
          <input type="text" id="raca" name="raca">
        </div>
        <div class="form-group">
          <label for="porte">Qual o porte (tamanho) do seu pet?</label>
          <br>
          <input type="text" id="porte" name="porte">
        </div>
        <div class="form-group">
          <label for="pelagem">Qual a cor da pelagem?</label>
          <br>
          <input type="text" id="pelagem" name="pelagem">
        </div>
        <div class="form-group">
          <label for="sexo">Seu pet é macho ou fêmea?</label>
          <br>
          <input type="text" id="sexo" name="sexo">
        </div>
        <div class="form-group">
          <label for="faixa-etaria">Seu pet é filhote, adulto ou idoso?</label>
          <br>
          <input type="text" id="faixa-etaria" name="faixa-etaria">
        </div>
        <div class="form-group">
          <label for="cidade">Em qual cidade seu pet foi resgatado?</label>
          <br>
          <input type="text" id="cidade" name="cidade">
        </div>
        <div class="form-group">
          <label for="outras-caracteristicas">Seu pet tem alguma outra característica física que o diferencie dos demais?</label>
          <br><input type="text" id="outras-caracteristicas" name="outras-caracteristicas">
        </div>
        <button type="button" onclick="submitForm()">EncontreiJá.Ai</button>
</form>

    </div>
    <div id="results" class="results-container white container text-justify">
    <h3>RESULTADOS ENCONTRADOS</h3>
      <div id="results-container" class="row justify-content-center"></div>
    </div>
    <div class="d-none d-sm-block">
    <div class="search-again darkblack">
      <h4>Cadastro de animal <br>resgatado</h4>
      <div class="info-box">
        <div class="options">
          <div class="option">
          <div class="cardcad" style="width: 18rem;">
            <div class="cardcad-body">
              <h5 class="cardcad-title">FOTO</h5>
              <h6 class="cardcad-text">(foto nítida, de preferência com apenas um animal e com boa resolução)</h6>
            </div>
          </div>
          </div>
          <div class="option">
          <div class="cardcad" style="width: 18rem;">
            <div class="cardcad-body">
              <h5 class="cardcad-title">NOME DO ABRIGO OU CONTATO RESPONSÁVEL</h5>
            </div>
          </div>
          </div>
          <div class="option">
          <div class="cardcad" style="width: 18rem;">
            <div class="cardcad-body">
              <h5 class="cardcad-title">DESCRIÇÃO</h5>
              <p class="cardcad-text">(animal, espécie, pelagem, porte, sexo, raça, idade,  cor, estado de saúde...)</p>
            </div>
          </div>
          </div>
        </div>
        <button onclick="registerPet()" class="cadastro">Cadastrar Pet</button>
        <button onclick="finishRegistration()" class="cadastro">Concluir Cadastro</button>
      </div>
    </div>
    </div>
    <div class="thank-you">
      <p class="thank-you-pri">Obrigado!</p>
      <p class="thank-you-sec">Você está ajudando muito neste <br>reencontro</p>
      <p class="thank-you-ter">EncontreJá.Ai</p>
    </div>
    <div class="latest-updates">
        <p class="text-xl-left">ÚLTIMAS<br> ATUALIZAÇÕES<br>
            VEJA QUEM<br> CHEGOU NO<br> NOSSO BANCO<br> DE DADOS</p>
          <div id="lastupdates">
          </div>
    </div>
      <div class="donations black">
        <div>
            <p class="primary">OS ABRIGOS PRECISAM DE DOAÇÕES</p>
            <p class="secondary">Ajude quem está resgatando e cuidando dos animais.</p>
        </div>
        <div class="d-none d-sm-block">
        <div>
          <div class="pixright">
            <p class="terciary">Doe para os abrigos perto de você: </p>
            <p class="lista">RAÇÃO </p>
            <p class="lista">MANTINHAS </p>
            <p class="lista">ROUPINHAS </p>
            <p class="lista">CAMINHAS </p>
            <p class="lista">CASINHAS </p>
            <p class="lista">CORDAS </p>
            <p class="lista">COLEIRAS </p>
            <p class="lista">REMÉDIOS </p>
            <p class="lista">GUIAS </p>
            <p class="lista">VACINAS </p>
          </div>
          <div class="pixleft">
            <div class="pixbox">
              <!-- Lista de itens para doação -->
              <p class="terciaryd">Ou através de pix:</p>
              <p class="pix">Deise Falci<br>Pix: deisefalci@gmail.com</p>
              <p class="pix">Vets sem Fronteira<br>Pix: 818351160-00<br> Diego Goulart Sampaio</p>
            </div>
          </div>
        </div>
        </div>
        <div class="d-block d-sm-none">
        <div>
        <div class="">
            <p class="terciary">Doe para os abrigos perto de você: </p>
            <p class="lista">RAÇÃO </p>
            <p class="lista">MANTINHAS </p>
            <p class="lista">ROUPINHAS </p>
            <p class="lista">CAMINHAS </p>
            <p class="lista">CASINHAS </p>
            <p class="lista">CORDAS </p>
            <p class="lista">COLEIRAS </p>
            <p class="lista">REMÉDIOS </p>
            <p class="lista">GUIAS </p>
            <p class="lista">VACINAS </p>
          </div>
          <div class="">
            <div class="pixbox-phone">
              <!-- Lista de itens para doação -->
              <p class="terciaryd">Ou através de pix:</p>
              <p class="pix">Deise Falci<br>Pix: deisefalci@gmail.com</p>
              <p class="pix">Vets sem Fronteira<br>Pix: 818351160-00<br> Diego Goulart Sampaio</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    <div class="contact">
      <div class="contactleft"><p class="text-contactleft">QUER AJUDAR OU <br>COLABORAR DE <br>ALGUMA FORMA?</p>
    </div>
    <div class="d-none d-sm-block">
      <div class="contactright">        
        <p class="mini-contactright">E-mail:</p>
        <p class="text-contactright">contato@encontreja.ai</p>
        <p class="mini-contactright">Meu site:</p>
        <p class="text-contactright">encontreja.ai</p>
        <p class="mini-contactright">Nossas redes sociais:</p>
        <p class="text-contactright">@encontreja.ai</p>

      </div>
    </div>
    <div class="d-block d-sm-none">
      <div class="contactright-phone">        
        <p class="mini-contactright-phone">Email:</p>
        <p class="text-contactright-phone">contato@encontreja.ai</p>
        <p class="mini-contactright-phone">Meu site:</p>
        <p class="text-contactright-phone">encontreja.ai</p>
        <p class="mini-contactright-phone">Nossas redes sociais:</p>
        <p class="text-contactright-phone">@encontreja.ai</p>

      </div>
    </div>
    </div>
    
    <footer class="rodape">
    <p>&copy; 2024 <a href="https://soft.dev.br">soft.dev.br</a></p>
  </footer>
  </div>
  

</body>
</html>
