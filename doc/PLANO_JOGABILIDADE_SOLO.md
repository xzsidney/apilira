Me ajude a pensar na jogabilidade

Imagine que temos um grupo de jogadores do mundo real que se encontra para jogar RPG de mesa (contendo o mestre e os jogadores). Sempre que acaba a sessão, eles têm que esperar um tempo indeterminado para se reunirem de novo e jogarem novamente.

Estava pensando em fazer algo assim: o mestre cria o início da história com base na mesa que eles jogaram (ou até antes), e os jogadores vão se desenvolvendo dentro dessa história no próprio RPG, de forma paralela.

Exemplo 1: O personagem vai para uma aventura solo. Digamos que seja um Vampiro que está com fome; ele faz sua aventura para caçar com o objetivo de recuperar sangue. Ele pode conseguir ou falhar, dependendo de onde e quem vai caçar, além de seus atributos, habilidades e poderes. Além disso, pode sofrer dano ou até mesmo quebrar a Máscara e passar a ser caçado.

Exemplo 2: Um personagem do tipo Caçador precisa ir investigar um lugar ou um corpo que está sem sangue. A partir daí, ele vai investigando nessa aventura solo.

Eu estava pensando no conceito daqueles livros-jogos de RPG antigos (choose your own adventure), em que você lia uma parte da história e escolhia: "Vá para a página X". Mas adaptado para o conceito de sucesso ou falha: você lê o texto, faz a ação e, se passar no teste, vai para a página X; se errar, vai para a página Y.

Essa é a minha ideia inicial. Não sei qual front-end utilizar: se uso o Godot para fazer um joguinho estilo RPG Maker, ou se crio em HTML mesmo, no estilo Carmen Sandiego.

Pode me ajudar com as tecnologias e a jogabilidade? Pode até dar ideias que ainda não pensei.

1. Ideias de Jogabilidade (Para enriquecer o projeto)
Como o seu foco é preencher o "tempo de espera" entre as sessões presenciais, o jogo precisa ser assíncrono e de ritmo rápido (estilo mobile ou abas de navegador).

O "Diário de Bordo" Integrado: Tudo o que o jogador faz na aventura solo gera um "resumo da história" automático. Na próxima sessão presencial, o mestre só precisa ler o relatório para saber o que os jogadores fizeram entre as mesas (ex: "O Vampiro do Sidney se alimentou, mas perdeu 2 pontos de Humanidade").

Ações por Energia/Tempo Real: Para o jogador não "zerar" o conteúdo em um dia, você pode usar um sistema de ações limitadas por tempo. Caçar gasta 1 ponto de ação. Investigar a cena do crime gasta mais 1. Isso mantém o engajamento ao longo da semana.

Interferência Indireta: Se o Caçador falhar em um teste investigando o corpo na terça-feira, ele pode deixar uma pista que facilita ou dificulta a vida do Vampiro (que também é jogador da mesa) na quarta-feira, sem que eles precisem jogar juntos no aplicativo.