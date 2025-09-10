//Principais
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

//Corações
const heart1 = document.querySelector(".heart");
const heart2 = document.querySelector(".heart1");
const heart3 = document.querySelector(".heart2");

//Decorações, "telas" e informações exibidas na tela
const estrelas = document.querySelector(".sky-stars");
const goku = document.querySelector(".goku");
const dragon = document.querySelector(".dragon");
const dragonair = document.querySelector(".dragonair");

const gameBoard = document.querySelector(".game-board");
const infoBoard = document.querySelector(".info-board");
const telaMorte = document.querySelector(".div-continuar");
const telaIncio = document.querySelector(".tela_inicio");

//:D
const musica = document.getElementById('troca');

//Pontos e vidas ao inciar o jogo
let pontos = 0;
let lifes = 3;

const coin = document.querySelector(".coin");

//Sumindo com algumas coisas da tela antes do jogo começar
pipe.style.display = "none";
mario.style.display = "none";
infoBoard.style.display = "none";
telaMorte.style.display = "none";


//Conforme vai sendo alterado o valor no select vai executando está função
//Muda o personagem exibido na tela de Start e dentro do jogo já que define o src da classe mario com o Gif do personagem escolhido
function mudarPersonagem() {
    let selecao = document.getElementById("character-select").value;
    let personagemSelecionado = document.getElementById("personagem-sel");
    switch (selecao) {
        case "mario":
            mario.src = "/_media/gifs-principais/mario.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/marioDancando.gif";
            break;
        case "sonic":
            mario.src = "/_media/gifs-principais/sonic.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/sonic_dance.gif";
            break;
        case "pikachu":
            mario.src = "/_media/gifs-principais/Pikachu.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/pikachu_parado.gif";
            mario.style.marginLeft = "5px";
            break;
        case "kirby":
            mario.src = "/_media/gifs-principais/kirby.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/kirby-nintendo.gif";
            mario.style.width = "130px";
            mario.style.bottom = "-3px";
            break;
        case "SwordSkeleton":
            mario.src = "/_media/gifs-principais/skeleton.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/skeleton_Dancing.gif";
            break;
        case "Batman":
            mario.src = "/_media/gifs-principais/batman.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/batman_Dance.gif";
            break;
        case "Luffy":
            mario.src = "/_media/gifs-principais/luffy.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/luffy_walk.gif";
            mario.style.width = "115px";
            mario.style.marginLeft = "6px";
            break;
        case "Link":
            mario.src = "/_media/gifs-principais/link.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/link_Dance.gif";
            mario.style.width = "135px";
            mario.style.bottom = "-12px";
            mario.style.marginLeft = "8px";
            break;
        case "Luigi":
            mario.src = "/_media/gifs-principais/luigi.gif";
            mario.style.width = "180px";
            mario.style.bottom = "-20px";
            personagemSelecionado.src = "/_media/gifs-startscreen/luigi_Dance.gif";
            break;
        case "Gohan":
            mario.src = "/_media/gifs-principais/gohan.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/gohan_Intro.gif";
            mario.style.width = "225px";
            mario.style.bottom = "-14px";
            personagemSelecionado.style.width = "220px";
            break;
        default:
            mario.src = "/_media/gifs-principais/mario.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/marioDancando.gif";
            break;
    }
}


//Função é executada quando o user clicar em "sim" na telaMorte, caso ele clique em "não" a página será recarregada
//Some com a tela de morte, volta o cano
function tiraVida() {
    telaMorte.style.display = "none";
    pipe.style.display = "flex";

    //Verifica o n° de vidas, reduz 1 no mesmo e some com o respectivo coração da tela
    if (lifes >= 3) {
        lifes--;
        heart3.style.display = "none";
    } else if (lifes == 2) {
        lifes--;
        heart2.style.display = "none";
    } else if (lifes == 1) {
        musica.src = '_media/sounds/marioDeath.mp3';
        musica.removeAttribute('loop'); // remove o loop do som morrendo
        lifes--;
        heart1.style.display = "none";
        //Aqui decidi tirar o infoBoard porque já acabou o game, não tem como voltar...
        infoBoard.style.display = "none";
        //Armazeno o conteudo html do elemento com id "pontos", e exibo na tela de morte com a tag <p>, coloquei um <br> e um botão também
        const totalPontos = document.getElementById("pontos").innerHTML;
        telaMorte.innerHTML = "<p>Infelizmente você perdeu todas suas vidas</p><br><p>Pontos: " + totalPontos + "</p><button onclick='window.location.reload()'>Tentar Novamente</button>";
        //Exibo a telaMorte
        telaMorte.style.display = "flex";

        //Isso aqui já tinha
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        //Verifico qual o gif usado, baseado nisso coloca uma imagem de morte e música conforme o personagem que está sendo usado
        if (mario.src.match("_media/gifs-principais/Pikachu.gif")) {
            mario.src = "/_imagens/deaths/pikachu_death.png";
            musica.src = "_media/sounds/retired_Sound_pikachu.mp3";
            // Ajustado tamanho, margem e posição do chão para cada boneco
            mario.style.width = "130px";
            mario.style.marginLeft = "50px";
            mario.style.bottom = "-6px";
        } else if (mario.src.match("_media/gifs-principais/sonic.gif")) {
            mario.src = "/_imagens/deaths/sonic_death.png";
            musica.src = "_media/sounds/sonic_Death_sound.mp3";
            mario.style.width = "75px";
            mario.style.marginLeft = "50px";
        } else if (mario.src.match("_media/gifs-principais/kirby.gif")) {
            mario.src = "/_imagens/deaths/kirby-sleeping.gif";
            musica.src = "_media/sounds/kirby_Death.mp3";
            mario.style.width = "125px";
            mario.style.marginLeft = "50px";
            mario.style.bottom = "-14px";
        } else if (mario.src.match("_media/gifs-principais/skeleton.gif")) {
            mario.src = "/_imagens/deaths/skeleton_Death.gif";
            musica.src = "_media/sounds/skeleton_Death.mp3";
            mario.style.width = "85px";
            mario.style.marginLeft = "50px";
            mario.style.bottom = "-6px";
        } else if (mario.src.match("_media/gifs-principais/batman.gif")) {
            mario.src = "/_imagens/deaths/batman_Death.gif";
            musica.src = "_media/sounds/batman_Death.mp3";
            mario.style.width = "150px";
            mario.style.marginLeft = "15px";
            mario.style.bottom = "-13px";
        } else if (mario.src.match("_media/gifs-principais/luffy.gif") || mario.src.match("_media/gifs-principais/luffyGear.gif")) {
            mario.src = "/_imagens/deaths/luffyDeath.png";
            musica.src = "_media/sounds/luffy_Death.mp3";
            mario.style.width = "110px";
            mario.style.marginLeft = "50px";
            mario.style.bottom = "-9px";
        } else if (mario.src.match("_media/gifs-principais/link.gif")) {
            mario.src = "/_imagens/deaths/link_Death.png";
            musica.src = "_media/sounds/zelda_GameOver.mp3";
            mario.style.width = "110px";
            mario.style.marginLeft = "50px";
        } else if (mario.src.match("_media/gifs-principais/luigi.gif")) {
            mario.src = "/_imagens/deaths/luigi_death.png";
            musica.src = "_media/sounds/marioDeath.mp3";
            mario.style.width = "60px";
            mario.style.marginLeft = "50px";
            mario.style.bottom = "-1px";
        } else if (mario.src.match("_media/gifs-principais/gohan.gif")) {
            mario.src = "/_imagens/deaths/gohan_Death.png";
            musica.src = "_media/sounds/gohan_Death.mp3";
            mario.style.width = "200px";
            mario.style.marginLeft = "50px";
            mario.style.bottom = "-69px";
        } else {
            mario.src = "/_imagens/deaths/game-over.png";
            mario.style.width = "75px";
            mario.style.marginLeft = "50px";
        }


        //Limpo o loop
        clearInterval(loop);
    }
}

function iniciarGame() {

    //Sumo com a tela de Start, apareço com as informações (vida e pontos), o cano e o "mario"
    telaIncio.style.display = "none";
    infoBoard.style.display = "flex";
    pipe.style.display = "flex";
    mario.style.display = "flex";

    //Isso aqui virifica se o display é "none", se for ele ganha pontos e exibe no elemento com id "pontos"
    //Sem isso o user podia só deixar lá a telaMorte aberta e ir ganhando pontos infinitos... agora ele tem que escolher ou "sim" ou "não", se sim e ele tiver vidas ok, caso contrário recarrega a página.
    setInterval(() => {
        if (telaMorte.style.display.match("none")) {
            pontos++;
            document.getElementById("pontos").innerHTML = pontos;
        }
    }, 100)

    // Variável para controlar se a moeda já foi coletada
    let coinCollected = false;
    setInterval(() => {
        // Só verifica se a moeda está visível na tela
        if (coin.style.display !== "none") {
            // Pega a posição da moeda e do Mario
            const coinPosition = coin.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
            // Verifica se o Mario está na altura e posição da moeda e se ela ainda não foi coletada
            if (coinPosition <= 120 && coinPosition > 0 && marioPosition >= 120 && !coinCollected) {
                pontos += 500;
                coin.style.display = "none"; // Esconde a moeda
                coinCollected = true;
                // Após 2 segundos, faz a moeda reaparecer e libera para ser coletada de novo
                setTimeout(() => {
                    coin.style.display = "block";
                    coinCollected = false;
                }, 2000);
            }
        }
    }, 100);

    //Já tinha antes
    const jump = () => {
        mario.classList.add("jump");
        setTimeout(() => {
            mario.classList.remove("jump");
        }, 500);
    }

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

        // Se todas as condições forem verdadeiras, troca o luffy normal para o JoyBoy (ele está dentro do loop principal pois é onde o jogo vai rodando constantemente)
        // Está usando o gif do Luffy normal e pontuação mínima atingida para usar o Gear, ainda não está com o gif do Gear
        if (mario.src.includes("luffy.gif") && pontos >= 2500 && !mario.src.includes("luffyGear.gif")) {
            mario.src = "/_media/gifs-principais/luffyGear.gif"; // Troca para o gif do Luffy Gear
            mario.style.width = "140px";
        }

        //Dificuldade baseada na qntd de pontos, deixando a animação do pipe mais rápida
        //Também muda o fundo e adiciona alguns pequenos detalhes
        if (pontos == 1500) {
            pipe.style.animationDuration = "0.88s";
            // Seleciona o elemento do Mario e do cano (pipe) na tela
        }
        if (pontos >= 5000) {
            pipe.style.animationDuration = "0.78s";
            gameBoard.style.backgroundImage = "linear-gradient(#ffcc70, #ff7eb3)";
            // Seleciona os elementos dos corações (vidas)
            goku.style.display = "flex";
        }
        if (pontos >= 10000) {
            musica.src = '_media/sounds/hard.mp3';
            pipe.style.animationDuration = "0.58s";
            // Seleciona elementos de decoração, telas e informações
            gameBoard.style.backgroundImage = "linear-gradient(#141e30, #243b55)";
            estrelas.style.display = "flex";
            dragon.style.display = "flex";
            goku.style.display = "none";
            dragonair.style.display = "none";
        }

        //Verifica se o "Mario" arrelou no cano se sim aparece a tela de morte e some com o cano
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 && lifes > 0) {
            telaMorte.style.display = "flex";
            // Elemento de áudio para trocar músicas e efeitos
            pipe.style.display = "none";
        }
    }, 10);



    //Adicionei isso por frescura, não acho que fazia sentido ele pular com o user apertando qualquer tecla...
    //Agora só vai pular se pressionar seta pra cima, w e espaço
    // Esconde elementos do jogo antes de começar
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
                jump();
                break;
            case "w":
                jump();
                break;
            //Tive que pesquisar pra descobrir que assim era o espaço, eu tinha colocado "space" e não ia :D (na minha cabeça fazia sentido)
            case " ":
                jump();
                break;
            default:
                break;
        }
    });
}

