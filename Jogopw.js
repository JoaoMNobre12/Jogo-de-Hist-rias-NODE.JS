console.log(
    "\n========================================\nBEM VINDO(A) AO 'VOLTANDO PARA A ORIGEM' CONHEÇA AS REGRAS:"
  ); //Código utilizado para imprimir as boas vindas ao jogo
  console.log(
    "Durante o jogo, você deve escolher opções para continuar a história desse modo: \n[1] Opção 1\n[2] Opção 2\nBasta digitar o número que iremos te mostrar o resultado das escolhas \nConforme for escolhendo as opções a história do jogo vai mudando e te levando a um dos vários finais\n========================================"
  ); //utilizado para imprimir na tela o modo de jogar o jogo
  
  const readline = require ('readline'); //importa o módulo readline, usado para interagir
  const r1 = readline.createInterface({
      input:process.stdin, //fluxo de entrada
      output:process.stdout //Fluxo de
  });

ABCD()


function ABCD (){
    r1.question ("[1] Iniciar o jogos \n [2] Não Iniciar jogo",(Resposta)=>{
        if (Resposta==1){
            console.log(
                "\n========================================\n\n\nCAPÍTULO 1 - CARREIRA OU AMIZADE \n\nPrepare-se para embarcar em uma emocionante jornada jornalística! Você é um talentoso profissional do jornalismo,\ntrabalhando para um renomado jornal internacional em Daphne. \n\nSua paixão pelo trabalho\né inigualável, e você está determinado a alcançar o topo da carreira o mais rápido possível.\nUm belo dia, seu chefe chega até você com uma proposta intrigante: investigar relatos nantigos \nde OVNIs em uma cidade da Califórnia. \n\nVocê tem um prazo razoável para entregar a \nmatéria, mas se preferir, pode partir imediatamente. Seu chefe confia em sua capacidade de escolher a melhor abordagem \npara a história e deixa a decisão em suas mãos. \n\nPorém, justamente nesse mesmo dia, seu amigo te convida para um baile social e enfatiza \nque tem algo muito importante para lhe contar. \n\nO dilema está lançado! Entre seguir a trilha dos mistérios extraterrestres e descobrir \nsegredos reveladores no baile, cada escolha que você fizer moldará não apenas sua carreira, mas também o desenrolar \ndesta intrigante narrativa.\n\n");        
                r1.question('\n========================================\n[1] Ir para o evento com o melhor amigo \n[2] Ir para a cidade e investigar \nDigite aqui:',Timeline1);//Iniciar jogo
            }
        else if (Resposta==2){
            console.log("Jogo não iniciado");
        }
        else{
            console.log("Jogo inválido");
        }
    });

    function Timeline1 (resposta1){ //Bloco de possibilidade de uma pergunta
        if (resposta1==1){ //Cria caminho para uma possibilidade
            console.log(`CAPÍTULO 2 - ENCONTRO MEU AMIGO 
            Enquanto adentro o salão do baile, meus olhos encontram Henry em meio à multidão. 
            Seu olhar carrega uma urgência que não consigo ignorar, e ele se aproxima sussurrando 
            que tem algo importante para me contar. No entanto, minha atenção é desviada para o 
            outro lado do salão, onde avisto figuras suspeitas, cujas conversas parecem sugestionar 
            um conhecimento secreto sobre os alienígenas. Uma escolha se desenrola diante de 
            mim: devo seguir imediatamente para junto de Henry e ouvir sua revelação ou devo 
            primeiro investigar as pessoas misteriosas do outro lado do salão? Cada segundo é 
            precioso, e sinto o peso da responsabilidade sobre meus ombros enquanto pondero 
            sobre qual caminho seguir.`);
            r1.question('\n========================================\n[1] Ir falar com o melhor amigo \n[2] Ir falar com as pessoas suspeitas \nDigite aqui:',Timeline1A);//criando pergunta e puxando a função//Iniciar jogo
        }
        else if (resposta1==2){//Caminho para uma possibilidade
            console.log(`CAPÍTULO 2 - INDO PARA OUTRA CIDADE
            
            Contexto: Em vez de acompanhar seu amigo ao baile, a protagonista decide seguir sozinha para outra cidade em busca
            de informações sobre alienígenas, dando início a uma jornada que a levará 
            a descobertas extraordinárias e perigos inesperados.
            Decidindo seguir seu próprio caminho, a protagonista parte para outra cidade em busca de pistas 
            sobre a presença de alienígenas na Terra. Movida pela curiosidade e determinação, ela se aventura 
            rumo ao desconhecido, deixando para trás a segurança de sua vida cotidiana.
            Você ouve algumas pessoas conversando, decide ouvir?`);
            r1.question('\n========================================\n[1] Ouvir \n[2] Não ouvir \nDigite aqui:',Timeline1A9);//criando pergunta e puxando função
        }
    
        else {//Caso digitem errado
            console.log("Linha do tempo inexistente");
        }
    };
    
    function Timeline1A9 (resposta5){//Bloco de possibilidade
        if (resposta5==1){
            console.log(`CAPÍTULO 3 - OUVINDO OS JOVENS E DESCOBRINDO ALGO IMPORTANTE\n\n
            Protagonista: (aproximando-se do grupo) "Olá, pessoal. Desculpe a intromissão, mas sou jornalista e estou 
            investigando histórias sobre alienígenas. Vocês parecem saber algo sobre isso."
            Jovem 1: (curioso) "Você é jornalista? Bem, podemos contar o que sabemos. Há rumores sobre alienígenas por aqui."
            Jovem 2: "Sim, tínhamos um amigo que achávamos ser um alienígena. Ele era meio estranho, sabe? 
            Sempre tinha respostas para tudo e sabia coisas que ninguém mais sabia."
            Protagonista: "Isso é fascinante. Quem era esse amigo de vocês?"    
            Jovem 1: "O nome dele é Henry. Ele desapareceu recentemente, e estamos preocupados. 
            Suspeitamos que ele possa estar em perigo."
            O coração da protagonista dispara ao ouvir o nome de Henry. Ela pega uma arma tecnológica que estava em cima de uma bancada próxima, 
            provavelmente deixada para trás por alguém.
            Protagonista: (determinada) "Obrigada por me contar. Preciso ir. Tenho que encontrar Henry."
            Ela corre para o carro e dirige rapidamente para o baile onde Henry deveria estar. Chegando lá, vê Henry sendo 
            atacado por uma figura sinistra.
            Figura Sinistra: (gritando) "Você não pode escapar, alienígena traidor!"
            Henry: (lutando) "Me deixe em paz!"
            Protagonista, ainda no carro, vê a cena e percebe o dilema que enfrenta. Você tem a arma tecnológica que pegou na c
            idade que tinha ido, nnão sabe o que fazer com a arma.`);
            r1.question('\n========================================\n[1] Defende o Henry \n[2] Não defende o Henry \n Digite aqui:',Timeline1A7);//Criando pergunta e puxando função
    
        }
        else {
            console.log("Linha do tempo inexistente");
        }
    }
    
    function Timeline1A(resposta2){//bloco de possibilidade
        if (resposta2==1){
        console.log(`CAPÍTULO 3 – ATAQUE 
        Protagonista: (observando Henry) 'Você está bem, Henry? Parece preocupado.'         
        Henry: (olhando ao redor nervosamente) 'Precisamos conversar, mas não aqui. Vamos 
        para um lugar mais tranquilo.' 
        Os dois saem da pista de dança e encontram um canto mais reservado no salão, 
        longe da multidão.           
        Protagonista: 'O que está acontecendo? Você está me assustando.'             
        Henry: (respirando fundo) 'Eu sou um alienígena. Vim para a Terra para estudar a vida 
        humana, mas algo deu errado.            
        Henry: Descobriram quem eu sou e agora estou em perigo. Precisamos sair daqui.'           
        Protagonista: (chocado) 'O quê? Você está falando sério? Quem descobriu?'         
        Henry: 'Os caçadores de alienígenas. Eles estão aqui e vão me pegar se não agirmos 
        rápido. Vamos sair discretamente.' 
        Os dois amigos começam a se mover em direção à saída, tentando não chamar a 
        atenção. Quando chegam ao estacionamento, percebem que estão sendo seguidos por 
        figuras sombrias.             
        Figura Sombra 1: (com uma voz ameaçadora) 'Não adianta fugir, Henry. Sabemos quem 
        você é.'             
        Protagonista: (sussurrando para Henry) 'O que vamos fazer? Estamos cercados.'            
        Henry: (desesperado) 'Precisamos lutar ou fugir. Não tenho outra escolha.'             
        O protagonista sente o peso da decisão. Atacar os caçadores pode colocar a vida 
        de Henry em perigo, mas fugir sem lutar pode significar a captura de seu amigo.`);
        r1.question('\n========================================\n[1] Defender Henry \n[2] Não defender Henry \n Digite aqui:',Timeline1AA);}//pergunta e função
        else if (resposta2==2){
            console.log(`CAPÍTULO 3 - FOFOCA 
            Movido pela curiosidade, o protagonista decide investigar e se aproxima discretamente do grupo suspeito.
            Pessoa Suspeita 1: (sussurrando) "Tenho certeza de que vi um deles aqui. Eles estão disfarçados."
            Pessoa Suspeita 2: (olhando ao redor) "Sim, precisamos encontrá-los antes que fujam. Não podemos deixar escapar."
            Protagonista: (interrompendo) "Desculpe, mas sobre o que vocês estão falando?"
            Os suspeitos se entreolham, surpresos com a intromissão.
            Pessoa Suspeita 1: (sussurrando) "Não deveríamos estar falando sobre isso com estranhos."
            Protagonista: "Eu ouvi vocês falando sobre algo importante. Posso ajudar?"
            Pessoa Suspeita 2: (depois de uma pausa) "Tudo bem, mas mantenha isso em segredo. Há alienígenas entre nós. Eles se disfarçaram de humanos 
            e estão infiltrados nesta festa."
            Protagonista: (chocado) "Alienígenas? Aqui?"
            Pessoa Suspeita 1: "Sim. E estamos certos de que um deles é seu amigo, Henry. Veja, ele está ali."
            A pessoa suspeita aponta discretamente para Henry, que está do outro lado do salão, olhando nervosamente ao redor.
            Protagonista: (pensando) "Henry? Isso é impossível... ou será que ele realmente está escondendo algo?"`);
            r1.question('\n========================================\n[1] Você acredita nele e volta para falar com Henry \n [2] Você não acredita e volta para falar com o Henry \n Digite aqui:',Timeline1A7);}
        };//bloco de história com história, pergunta e função
    
    function Timeline1A7(resposta3){
        if (resposta3==1 || resposta3==2){
        console.log(`CAPÍTULO 4 - PERDENDO
        A protagonista, por hesitar em falar com seu amigo a tempo, chega tarde demais e testemunha a morte de Henry nas mãos dos inimigos alienígenas.
        Protagonista: (correndo em direção a Henry) "Henry! Eu... eu deveria ter vindo antes..."
        O coração da protagonista afunda ao ver Henry caído no chão, cercado pelos inimigos alienígenas.
        Henry: (com um último suspiro) "É tarde demais... você... não podia fazer nada..."
        Os olhos de Henry se fecham enquanto a vida deixa seu corpo, deixando a protagonista paralisada pela dor e pela culpa.
        Protagonista: (olhando para o céu) "Eu falhei com você, Henry... Eu sinto muito..."
        O grito de guerra dos alienígenas ecoa ao redor da protagonista, que se vê cercada e encurralada.
        Protagonista: (com determinação) "Eu posso não ter salvado Henry, mas não vou deixar que mais ninguém morra por minha causa!"
    `)
    r1.question('\n========================================\n[1] Você vinga seu amigo\n [2] Você não vinga seu amigo \n Digite aqui:',Timeline1A8);}
    
    ;
    };
    
    function Timeline1A8 (resposta4){
        if (resposta4==1){
            console.log(`CAPÍTULO 5 - VENCENDO MESMO PERDENDO
            Após testemunhar a morte de seu melhor amigo Henry pelas mãos dos aliens, 
            a protagonista é consumida pela determinação de vingar sua morte. Com coragem e astúcia, 
            ela lidera uma investida contra os invasores, derrotando-os e garantindo a segurança de seu mundo. 
            Sua bravura e resiliência são reconhecidas globalmente, e ela é premiada pelo seu incrível heroísmo.`);
        }
        else if (resposta4==2) {
                console.log(`CAPÍTULO 5 - PERDENDO NOVAMENTE
                Você parado olhando para os vilões e eles te matam por acharem que você sabia sobre os aliens`);
        };
    }
    
    
    function Timeline1AA (resposta2){
        if (resposta2==1){
        console.log(`CAPÍTULO 4 – DEFENDENDO E FUGINDO 
        O protagonista se coloca entre Henry e as figuras sombrias, preparado para defender 
        seu amigo a qualquer custo.          
        Figura Sombra 2: (avançando ameaçadoramente) "Não tem para onde fugir, alienígena. 
        Se entregue pacificamente e faremos isso rápido."          
        Protagonista: "Vocês não vão encostar nele. Estamos saindo daqui, agora."          
        O protagonista segura firme a arma alienígena, pronta para usar se necessário.         
        Figura Sombra 1: "Você é valente, humano, mas não sabe com quem está lidando."   
        Os caçadores avançam, e uma batalha frenética se inicia. O protagonista usa 
        habilmente a arma alienígena para repelir os atacantes, permitindo que eles se afastem. 
        Protagonista: "Henry, corra! Vamos sair daqui!"          
        Os dois amigos fogem para o carro do protagonista, escapando do 
        estacionamento enquanto os caçadores de alienígenas ficam para trás.          
        Henry: (ofegante) "Obrigado por me defender. Eu não sei o que faria sem você."         
        Protagonista: "Estamos juntos nessa, Henry. Agora precisamos descobrir para onde 
        vamos. Temos que nos esconder até encontrarmos uma solução."          
        O protagonista dirige pelas ruas da cidade, procurando um lugar seguro para se 
        refugiar enquanto tentam descobrir quem são esses caçadores de alienígenas e como 
        podem proteger Henry, para onde devem ir?`)
        r1.question('\n========================================\n[1] Planeta do Henry \n[2] Chile \nDigite aqui:',Timeline1AAA);//Iniciar jogo
    }   
        else if (resposta2=2){
            console.log(`CAPÍTULO 4 – PERDENDO
            A protagonista se encontra diante de uma decisão angustiante: salvar ou não salvar seu melhor amigo, Henry, em meio ao perigo iminente dos caçadores de alienígenas.
            Protagonista: (sussurrando para si mesma) "Eu... Eu não posso fazer isso."
            O coração da protagonista se aperta com a indecisão, enquanto ela pondera sobre as possíveis consequências de suas ações.
            Henry: (olhando para a protagonista com desespero) "Por favor, me ajude! Não me deixe aqui!"
            A voz de Henry ecoa nos ouvidos da protagonista, mas ela se sente paralisada pela incerteza
            Protagonista: (lutando contra as lágrimas) "Eu... Eu sinto muito, Henry."
            Com um último olhar de pesar, a protagonista se vira e começa a correr na direção oposta, deixando Henry para trás
            Henry: (gritando enquanto é capturado) "Não! Por favor, volte!"
            A culpa e a angústia consomem a protagonista enquanto ela foge da cena, sabendo que sua decisão teve consequências irreversíveis.
            Protagonista: (lutando contra as lágrimas) "Eu não poderia... Eu não deveria ter feito isso."
            Enquanto ela se afasta da situação, o peso da decisão pesa sobre seus ombros, deixando-a atormentada pelo que deixou para trás.
            `)
            r1.question('\n========================================\n[1] Decide voltar \n[2] Não volta \nDigite aqui:',Timeline1A6);//Iniciar jogo
    
        }
    };
    
    function TimelineA6(resposta6){
        if (resposta6==1){
            console.log(`CAPÍTULO 5 - PERDENDO NOVAMENTE
            O protagonista volta para o baile e ve seu amigo morto, ao atacar o vilão o protagonista morre também, assim finalizando a história.`)
        }
        else if (resposta6==2){
            console.log(`CAPÍTULO 5 - PRÊMIO
            Você volta para tentar ajudar seu amigo mas ele morreu, culpado você escreve uma matéria sobre Henry e acaba conquistando o seu sonho
            de ganhar o maior prêmio do jornalismo.`)
        }
    }
    function Timeline1AAA(resposta3){
        if (resposta3==1){
            console.log(`CAPÍTULO 5 – PLANETA DE HENRY 
            O protagonista e Henry decidiram fugir para o planeta natal de Henry para escapar dos 
            caçadores de alienígenas. No entanto, enquanto tentam escapar, são atacados por seus 
            perseguidores.  
            Protagonista: "Henry, temos que chegar ao seu planeta natal. Lá estaremos seguros." 
            Henry: "Sim, você está certo. Vamos lá, rápido!"  
            Os dois amigos correm para o veículo do protagonista e partem em alta 
            velocidade pela estrada, determinados a alcançar a segurança do planeta natal de Henry.  
            Henry: "Cuidado! Eles estão nos seguindo."  
            O protagonista olha pelo retrovisor e vê os caçadores de alienígenas em seus 
            calcanhares, seus veículos se aproximando rapidamente.  
            Protagonista: "Segure-se, Henry. Eu vou acelerar."  
            O protagonista pisa fundo no acelerador, mas os caçadores continuam a se 
            aproximar, disparando tiros contra eles. 
            Henry: "Precisamos de um plano! Eles não vão parar!"  `);
    
            r1.question('\n========================================\n[1] Vocês decidem explodir a nave para salvar todos \n[2] Atacar a nave inimiga\n Digite aqui:',Timeline1AAAA);//Iniciar jogo
        }
        else if (resposta3==2){
            console.log(`CAPÍTULO 5 - CHILE
            Após garantirem sua segurança, o protagonista e Henry decidiram fugir para o Chile em busca de uma vida tranquila e
             longe dos perigos do espaço sideral. No Chile, encontraram um refúgio seguro onde puderam recomeçar suas vidas, 
             longe das ameaças que enfrentaram anteriormente. Juntos, exploraram as belezas naturais do país, mergulharam na cultura 
             local e construíram uma rotina pacífica e estável. Seja como amigos ou em um relacionamento romântico, sua jornada os uniu 
             de forma indelével, e no Chile, eles encontraram o tão almejado recomeço.`);
    
             r1.question('\n========================================\n[1] Vocês namoram \n ´2] São apenas amigos \n Digite a resposta:',Timeline1A5);//Iniciar jogo
        }
    };
    
    function Timeline1AAAA(resposta4){
        if (resposta4==1){
            console.log(`CAPÍTULO 6 – FIM PARA HEROIS E VILÕES 
            Protagonista: "Henry, não podemos deixar que eles nos capturem. Temos que fazer algo."  
            Henry: "Eu sei o que fazer. Vamos destruir a nave. Eles não podem nos seguir se não 
            tivermos mais nada para ser seguido." 
            O protagonista olha para Henry, reconhecendo a determinação em seus olhos.  
            Protagonista: "Está bem. Vamos fazer isso juntos."  
            Os dois amigos trabalham rapidamente para preparar a nave para autodestruição, 
            enquanto os caçadores se aproximam cada vez mais.  
            Henry: "Está pronto. Vamos, agora!"  
            Eles se apressam para fora da nave, correndo para uma distância segura 
            enquanto ativam o mecanismo de autodestruição.  
            Protagonista: "Adeus, Henry. Obrigado por tudo."  
            Henry: "Obrigado por ter sido meu amigo." 
            Uma explosão ensurdecedora irrompe enquanto a nave é consumida pelo fogo. O 
            protagonista e Henry observam em silêncio, sabendo que estão dando suas vidas para 
            proteger uns aos outros e garantir a segurança de seu planeta. No final, a nave dos 
            caçadores é destruída junto com a deles, pondo um fim à perseguição`);
            console.log("=============================\nEsse foi um dos finais do jogo, para iniciar o jogo novamente digite [1], caso \n não queira jogar novamente digite [2]\n Digite: \n=============================")
            ABCD();
        }
        else if (resposta4==2){
            console.log(`CAPÍTULO 6 – VITÓRIA
            O protagonista e Henry, confrontados pelos caçadores de alienígenas, decidem enfrentá-los diretamente para garantir sua segurança e alcançar o planeta natal de Henry. 
            Protagonista: "Henry, temos que lutar. Juntos, podemos derrotá-los." 
            Henry: "Você está certo. Vamos mostrar a eles do que somos capazes."
             Os dois amigos enfrentam os caçadores com coragem e determinação, usando sua astúcia e habilidades para virar o jogo a seu favor. 
            Protagonista: "Henry, siga-me! Vamos atacar a nave inimiga."
             Comandando a nave com habilidade, o protagonista lidera o ataque contra os caçadores, desviando-se de seus disparos e manobrando habilmente para contra-atacar. 
            Henry: "Estamos quase lá! Prepare-se para o impacto." 
            Com um golpe decisivo, a nave do protagonista atinge a nave inimiga em cheio, causando uma explosão espetacular que os caçadores não esperavam. 
            Protagonista: "Nós conseguimos! Henry, vamos para o planeta natal." Henry: "Sim, finalmente estaremos a salvo." 
            Com os caçadores derrotados e sua nave danificada, o protagonista e Henry partem para o planeta natal de Henry, deixando para trás o perigo e a ameaça. Enquanto a nave desaparece no horizonte, os dois amigos olham para o futuro com esperança, sabendo que enfrentaram desafios incríveis juntos e emergiram vitoriosos.
            `);
            console.log("=============================\nEsse foi um dos finais do jogo, para iniciar o jogo novamente digite [1], caso \n não queira jogar novamente digite [2]\n Digite: \n=============================")
            ABCD();
        }
    }
    
    function Timeline1A5(resposta5){
        if (resposta5==1){
            console.log(`CAPÍTULO 6 – NAMORO ALIEN E HUMANO		
            Durante a jornada enfrentando os perigos e desafios juntos, o vínculo entre o protagonista e Henry se fortaleceu ainda mais. 
            Eles encontraram conforto um no outro em momentos de adversidade, compartilhando risos, medos e triunfos. 
            Esse relacionamento pode ter evoluído para algo mais do que amizade, e ao chegarem ao Chile e começarem uma vida normal, 
            eles decidem embarcar em um relacionamento romântico. Juntos, eles enfrentam os altos e baixos da vida cotidiana, continuando 
            a apoiar um ao outro em todas as situações.
            `);
            console.log("\n\n=============================\nEsse foi um dos finais do jogo, para iniciar o jogo novamente digite [1], caso \nnão queira jogar novamente digite [2]\N Digite:\n=============================")
            ABCD();
    
        }   
        else if (resposta5==2){
            console.log(`CAPÍTULO 6 – AMIZADE ALIEN E HUMANO		
            Enquanto a jornada uniu profundamente o protagonista e Henry, seu relacionamento permanece estritamente platônico. 
            Eles compartilham um vínculo de amizade inquebrável, mas não há sentimentos românticos entre eles. No Chile, eles 
            decidem continuar sua vida como bons amigos, apoiando-se mutuamente enquanto desfrutam de uma vida tranquila e normal. 
            Suas aventuras os uniram de uma forma que vai além do romance, e eles encontram felicidade e satisfação na amizade que construíram.
            `);
            console.log("=============================\nEsse foi um dos finais do jogo, para iniciar o jogo novamente digite [1], caso \n não queira jogar novamente digite [2]\n Digite:\n=============================")

            ABCD();
    
        }
        
    };
    
};
