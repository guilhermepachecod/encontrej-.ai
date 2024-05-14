<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Encontre Já</title>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
</head>

<body onload="onloadPageUpdates()">
  <script src="scripts/script.js"></script>
  <script src="scripts/utils.js"></script>
  <script src="scripts/apiCalls.js"></script>
  <div class="d-none d-sm-block">
    <div class="header black">
      <img src="cachorro.png" alt="Foto de um cachorro" class="dog-photo">
      <div class="texto-flutuante">
        <h2>EncontreJá.Ai</h2>
      </div>
      <div class="text-content">
        <h1>NÓS AJUDAMOS <br>VOCÊ A <br>ENCONTRAR SEU <br><span class="bluehighlight">PET</span> PERDIDO <br>NAS
          ENCHENTES <br>DO RS</h1>
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
        <h1>NÓS AJUDAMOS <br>VOCÊ A <br>ENCONTRAR SEU <br><span class="bluehighlight">PET</span> PERDIDO <br>NAS
          ENCHENTES <br>DO RS</h1>
        <p class="subtitle">Com auxílio de inteligência artificial</p>
      </div>

    </div>
  </div>
  <div class="d-none d-sm-block">
    <div class="how-can-we-help black">
      <h2>Como podemos ajudar <span class="bluehighlight">você?</span></h2>
      <div class="options">
        <div class="option">
          <a class="none" href="#selecao">
            <div class="card card-ajudar" style="width: 18rem;">
              <div class="card-body-ajudar">
                <h5 class="card-title-ajudar">TUTOR</h5>
                <p class="card-text-ajudar">ESTOU À<br> PROCURA DO<br> MEU PET<br> PERDIDO</p>
              </div>
            </div>
          </a>
        </div>
        <div class="option-right">
          <a class="none" href="#cadastrar">
            <div class="card card-ajudar" style="width: 18rem;">
              <div class="card-body-ajudar">
                <h5 class="card-title-ajudar">ABRIGOS E LARES TEMPORARIOS</h5>
                <p class="card-text-ajudar">QUERO<br> CADASTRAR<br> ANIMAIS<br> ENCONTRADOS.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="d-block d-sm-none">
    <div class="how-can-we-help-phone black">
      <h2 class="h2-phone">Como podemos ajudar você?</h2>
      <div class="options-phone">
        <div class="option-phone">
          <a class="none" href="#selecao">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">TUTOR</h5>
                <p class="card-text">ESTOU À<br> PROCURA DO<br> MEU PET<br> PERDIDO</p>
              </div>
            </div>
          </a>
        </div>
        <div class="option-phone">
          <a class="none" href="#cadastrar">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">ABRIGOS E LARES TEMPORARIOS</h5>
                <p class="card-text">QUERO<br> CADASTRAR<br> ANIMAIS<br> ENCONTRADOS.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="upload-container white">
  <div id="loadingIndicator" class="loading-indicator"></div>
    <input type="file" id="fileInput" style="display: none;" accept="image/*" onchange="renderImage()">
    <div id="chooseFileButton" class="upload-box" onclick="openFilePicker()">
      <p>Clique aqui para anexar a <br>foto do seu pet</p>
    </div>
    <p class="instruction">Escolha uma foto nítida que seu pet esteja em<br> destaque e com boa resolução.</p>
    <!-- <button onclick="uploadImage()">EncontreJá.Ai</button> -->
    <img id='imgPreview' onclick="openFilePicker()" />
  </div>

  <div id="selecao" class="characteristics white">
    <h3>Selecione todas as características do <br>seu pet:</h3>
    <form id="pet-form">
      <div class="form-group">
        <label for="tipo">Tipo: (Cachorro ou Gato)</label><br>
        <div class="checkbox-group">
          <input type="radio" id="cachorro" name="tipo" value="cachorro">
          <label for="cachorro">Cachorro</label>
          <input type="radio" id="gato" name="tipo" value="gato">
          <label for="gato">Gato</label>
        </div>
      </div>

      <div class="form-group container">
        <label>Raça:</label><br>
        <div class="checkbox-group-raca container" id="raca">
          <input type="checkbox" id="poodle" name="raca" value="poodle">
          <label for="poodle">Poodle</label>
          <input type="checkbox" id="labrador" name="raca" value="labrador">
          <label for="labrador">Labrador</label>
          <input type="checkbox" id="siames" name="raca" value="siames">
          <label for="siames">Siamês</label>
          <!-- Adicione mais opções de raça aqui -->
        </div>
      </div>

      <!-- <div class="form-group">
    <label>Porte: (Pequeno, Médio, Grande)</label><br>
    <div class="checkbox-group" id="porte">
      <input type="checkbox" id="mini" name="porte" value="mini">
      <label for="mini">Mini</label>
      <input type="checkbox" id="pequeno" name="porte" value="pequeno">
      <label for="pequeno">Pequeno</label>
      <input type="checkbox" id="medio" name="porte" value="medio">
      <label for="medio">Médio</label>
      <input type="checkbox" id="grande" name="porte" value="grande">
      <label for="grande">Grande</label>
      <input type="checkbox" id="gigante" name="porte" value="gigante">
      <label for="gigante">Gigante</label>
      <!-- Adicione mais opções de porte aqui -->
      <!-- </div> -->
      <!-- </div> -->


      <div class="form-group">
        <label for="cor">Cor:</label><br>
        <div class="checkbox-group" id="cor">
          <input type="checkbox" id="pequeno" name="porte" value="pequeno">
          <label for="pequeno">Preto</label>
          <input type="checkbox" id="medio" name="porte" value="medio">
          <label for="medio">Branco</label>
          <input type="checkbox" id="grande" name="porte" value="grande">
          <label for="grande">Marrom</label>
          <!-- Adicione mais opções de porte aqui -->
        </div>
      </div>

      <div class="form-group">
        <label for="genero">Gênero: (Macho ou Fêmea)</label><br>
        <div id="genero" class="checkbox-group">
          <input type="radio" id="macho" name="genero" value="macho">
          <label for="macho">Macho</label>
          <br>
          <input type="radio" id="femea" name="genero" value="femea">
          <label for="femea">Fêmea</label>
        </div>
      </div>

      <div class="form-group">
        <label for="idade">Idade: (Filhote, Adulto, Idoso)</label><br>
        <div class="checkbox-group">
          <input type="checkbox" id="filhote" name="idade" value="filhote">
          <label for="filhote">Filhote</label>
          <input type="checkbox" id="adulto" name="idade" value="adulto">
          <label for="adulto">Adulto</label>
          <input type="checkbox" id="idoso" name="idade" value="idoso">
          <label for="idoso">Idoso</label>
        </div>
      </div>

      <div class="form-group">
        <label for="observacoes">Observações:</label><br>
        <textarea id="observacoes" name="observacoes" placeholder="Inclua informações adicionais aqui..."></textarea>
      </div>

      <button type="button" onclick="submitForm()">EncontreJá.Ai</button>
    </form>


  </div>
  <div id="results" class="results-container white container text-justify">
    <h3 id="statusresultado">RESULTADOS ENCONTRADOS</h3>
    <div id="results-container" class="row justify-content-center"></div>
  </div>
  <div class="d-none d-sm-block">
    <div id="cadastrar" class="search-again darkblack">
      <h4>Cadastro de animal <br>resgatado</h4>
      <div class="info-box">
        <div class="options">
          <div class="option">
            <!-- <div class="cardcad" style="width: 18rem;">
            <div class="cardcad-body">
              <h5 class="cardcad-title">FOTO</h5>
              <h6 class="cardcad-text">(foto nítida, de preferência com apenas um animal e com boa resolução)</h6>
            </div>
          </div> -->
          </div>
          <button class="option">
            <div class="cardcad" style="width: 18rem;">
              <div class="cardcad-body">
                <h5 class="cardcad-title">Registrar cachorro</h5>
              </div>
            </div>
          </button>
          <button class="option">
            <div class="cardcad" style="width: 18rem; height: 12rem;">
              <div class="cardcad-body">
                <h5 class="cardcad-title">Registrar gato</h5>
                </p>
              </div>
            </div>
          </button>
        </div>
        <!-- <button onclick="registerPet()" class="cadastro">Cadastrar CACHORRO</button> -->
        <!-- <button onclick="finishRegistration()" class="cadastro">Cadastrar GATO</button> -->
      </div>
    </div>
  </div>
  <div class="thank-you">
    <p class="thank-you-pri">Obrigado!</p>
    <p class="thank-you-sec">Você está ajudando muito neste <br>reencontro</p>
    <p class="thank-you-ter">EncontreJá.Ai</p>
  </div>
  <div class="latest-updates container">
    <div class="row">
      <div class="col-4">
        <p class="text-xl-left"><span class="bluehighlight">ÚLTIMAS<br> ATUALIZAÇÕES</span><br>
          VEJA QUEM<br> CHEGOU NO<br> NOSSO BANCO<br> DE DADOS</p>
      </div>
      <div class="col-8 lastupdates">
        <div id="lastupdates-container">
        </div>
      </div>
    </div>
  </div>
  <div class="curiosidades black">
    <h2 class="highlight-text">Três curiosidades</h2>
    <div class="curiosidade">
      <div class="curiosidade-text">
        <p class="curiosidade-text-main">Como funciona?</p>
        <p class="curiosidade-text-secondary">Nossa Inteligência Artificial - AI busca no banco de imagens pets com
          características físicas parecidas com a imagem e descrição que você forneceu.</p>
      </div>
    </div>
    <div class="curiosidade">
      <div class="curiosidade-text">
        <p class="curiosidade-text-main">Atualização constante</p>
        <p class="curiosidade-text-secondary">Nossos banco de dados são atualizados constantemente com informações dos
          grupos de resgates, abrigos e redes sociais.</p>
      </div>
    </div>
    <div class="curiosidade">
      <div class="curiosidade-text">
        <p class="curiosidade-text-main">SOBRE A FOTO</p>
        <p class="curiosidade-text-secondary">Escolha uma foto nítida que seu pet esteja em destaque e com boa
          resolução.</p>
      </div>
    </div>
  </div>
  <div class="parceiros black">
    <h2 class="primary-parceiros">Redes e parceiros</h2>
    <h2 class="terciary-parceiros">Conheça os heróis que estão salvando <br>e cuidando dos animais resgatados.</h2>
    <div class="container container-parceiros">
      <div class="image-container">
        <img src="imagem1.jpeg" alt="Imagem 1">
      </div>
      <div class="image-container">
        <img src="imagem2.jpeg" alt="Imagem 2">
      </div>
      <div class="image-container">
        <img src="imagem3.jpeg" alt="Imagem 3">
      </div>
      <div class="image-container">
        <img src="imagem4.jpeg" alt="Imagem 4">
      </div>
    </div>

  </div>
  </div>
  <div class="donations black">
    <div>
      <p class="primary">OS ABRIGOS PRECISAM DE <span class="bluehighlight">DOAÇÕES</span></p>
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
    <div class="contactleft">
      <p class="text-contactleft">QUER AJUDAR OU <br>COLABORAR DE <br>ALGUMA FORMA?</p>
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