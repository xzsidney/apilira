# LiraRPG - Documentação do Banco de Dados e API

Este documento serve como mapa definitivo da estrutura do banco de dados (**Sequelize / MySQL**) do sistema. Anteriormente baseado em Prisma, o motor do banco foi totalmente migrado para o Sequelize (com driver `mysql2`), resolvendo problemas de conexão e quedas ("PANIC: timer has gone away") ocorridos na Hostinger e em hospedagens compartilhadas. O banco é desenhado usando o padrão de **Catálogos Globais** (Definitions) para permitir escalabilidade e suporte a infinitos sistemas (Vampiro, Lobisomem, Mago, etc.) sem alterar o código-fonte.

> [!NOTE]
> A API conecta-se ao banco instanciando o Singleton exportado em `src/config/db.ts`. O esquema do banco não utiliza mais o `schema.prisma`. Qualquer alteração nas tabelas deve ser feita diretamente nas classes (Models) localizadas na pasta `src/models/`.

---

## 1. Tabelas de Sistema Core

### **`User` (Usuários)**
Armazena as credenciais e dados dos jogadores e mestres.
- **`id`** *(String, UUID)*: Identificador único do usuário.
- **`name`** *(String)*: Nome de exibição.
- **`email`** *(String, Unique)*: Email usado para o login.
- **`password`** *(String)*: Senha criptografada (Hash BCrypt).
- **`createdAt`** *(DateTime)*: Data de criação do registro.
- **`updatedAt`** *(DateTime)*: Data da última modificação.
- *Relações*: 1 para N com a tabela `Character`.

### **`Character` (Personagens)**
A entidade central do jogador. Ela não armazena pontos de Atributos ou Itens diretamente, mas serve como um elo (hub) para as tabelas de associação.
- **`id`** *(String, UUID)*: Identificador único do personagem.
- **`name`** *(String)*: Nome do personagem no jogo.
- **`gameStyle`** *(Enum)*: Sistema ao qual pertence (`VAMPIRE`, `WEREWOLF`, `MAGE`, `HUNTER`). Define quais regras se aplicam.
- **`avatarUrl`** *(String, Opcional)*: URL da imagem/retrato do personagem (upload).
- **`concept`** *(String, Opcional)*: Conceito geral do personagem.
- **`nature`** / **`demeanor`** *(String, Opcional)*: Natureza e Comportamento (psicológico).
- **Campos Específicos de Vampiro:**
  - **`vampireClaId`** *(String, FK, Opcional)*: Aponta para a tabela `VampireClaDefinition`.
  - **`vampirePredatorId`** *(String, FK, Opcional)*: Aponta para `VampirePredatorDefinition`.
  - **`vampireResonanceId`** *(String, FK, Opcional)*: Aponta para `VampireResonanceDefinition`.
  - **`vampireGeneration`** *(Int, Opcional)*: Geração do vampiro (ex: 13).
  - **`vampireSire`** *(String, Opcional)*: Nome do Senhor que o Abraçou.
  - **`vampireHunger`** *(Int, Opcional)*: Fome inicial/atual.
  - **`vampireAmbition`** *(String, Opcional)*: Ambição de longo prazo.
  - **`vampireDesire`** *(String, Opcional)*: Desejo de curto prazo (para a noite).
- **`experienceTotal`** *(Int)*: Experiência total ganha.
- **`experienceSpent`** *(Int)*: Experiência gasta.
- **`isNpc`** *(Boolean)*: Define se a ficha é controlada pelo Mestre (Verdadeiro) ou por um Jogador (Falso). Permite reaproveitar 100% da arquitetura da ficha para os monstros da crônica.
- **`isTemplate`** *(Boolean)*: Define se a ficha é um "Molde" (ex: "Policial Genérico") que pode ser clonado várias vezes.
- **`userId`** *(String, FK)*: Chave estrangeira que aponta para o `User` dono da ficha.
- **`createdAt` / `updatedAt`** *(DateTime)*: Datas de auditoria.

---

## 2. Catálogos Globais (Definitions)
Estas tabelas funcionam como "Dicionários". Elas guardam o que existe no jogo e podem ser consultadas no Swagger (`GET /api/*-definitions`).

### **`AttributeDefinition`**
As estatísticas base do sistema (Ex: Força, Destreza, Vigor, Carisma).
- **`id`** *(String, UUID)*: Identificador.
- **`name`** *(String)*: Nome do atributo (ex: "Inteligência").
- **`type`** *(String)*: Categoria, útil para separar se é um atributo universal ou específico (Ex: "UNIVERSAL").
- **`description`** *(String, Opcional)*: Texto explicativo.

### **`ClanDefinition`**
Os Clãs ou tribos aos quais o personagem pertence (Ex: Brujah, Ventrue).
- **`id`** *(String, UUID)*: Identificador.
- **`name`** *(String)*: Nome do clã.
- **`gameStyle`** *(String)*: Sistema (Ex: "VAMPIRE").
- **`description`** *(String, Opcional)*: Texto explicativo e lore.

### **`SkillDefinition`**
As habilidades e conhecimentos técnicos (Ex: Furtividade, Sobrevivência, Medicina).
- **`id`** *(String, UUID)*: Identificador.
- **`name`** *(String)*: Nome da habilidade.
- **`type`** *(String)*: Categoria (Ex: "Físico", "Mental", ou "UNIVERSAL").
- **`description`** *(String, Opcional)*: Texto explicativo.

### **`StatusDefinition`**
As barras dinâmicas que possuem um valor mutável durante o jogo e regras rígidas de criação. (Ex: Humanidade, Fome, Gnose, Arete, Força de Vontade).
- **`id`** *(String, UUID)*: Identificador.
- **`name`** *(String)*: Nome do status.
- **`gameStyle`** *(String)*: Qual jogo utiliza esse status (Ex: "VAMPIRE"). Status "UNIVERSAL" aplicam-se a todos (Ex: Força de Vontade).
- **`maxValue`** *(Int)*: O valor máximo (quantas "bolinhas" a interface gráfica deve desenhar para este status, ex: 10).
- **`defaultInitialValue`** *(Int)*: Quando uma ficha nova é criada, este status nascerá com este valor (Ex: Humanidade nasce com 7).
- **`description`** *(String, Opcional)*: Texto explicativo.

### **`ItemDefinition`**
O inventário mundial. Toda espada, carro ou poção registrada oficialmente no servidor.
- **`id`** *(String, UUID)*: Identificador.
- **`name`** *(String, Unique)*: Nome do item (ex: "Escopeta").
- **`description`** *(String, Opcional)*: Descrição do item.
- **`value`** *(Float)*: Preço monetário ou custo em pontos.
- **`requirements`** *(String, Opcional)*: Texto livre dizendo o que exige (Ex: "Força 4").

### **`MeritFlawDefinition`**
Vantagens (Qualidades) e Desvantagens (Defeitos).
- **`id`** *(String, UUID)*: Identificador.
- **`name`** *(String)*: Nome (Ex: "Rico", "Caçado").
- **`type`** *(Enum)*: `MERIT` ou `FLAW`.
- **`gameStyle`** *(String)*: Sistema (Ex: "VAMPIRE").
- **`description`** *(String, Opcional)*: Efeito mecânico.

### **`PowerDefinition`**
A categoria raiz de poderes (Disciplinas, Esferas, Dons). Ex: "Rapidez" ou "Domínio da Vida".
- **`id`** *(String, UUID)*: Identificador.
- **`name`** *(String)*: Nome (Ex: "Rapidez").
- **`gameStyle`** *(String)*: Sistema.
- **`type`** *(Enum)*: `DISCIPLINE`, `GIFT`, `SPHERE`, `EDGE`.
- **`description`** *(String, Opcional)*: Lore geral do poder.

### **`PowerLevelDefinition`**
Os poderes específicos e destrinchados para cada nível de um `PowerDefinition`. Se o jogador quiser comprar nível 1 de "Rapidez", ele deve escolher um poder desta tabela que tenha `level` 1.
- **`id`** *(String, UUID)*: Identificador.
- **`powerDefinitionId`** *(String, FK)*: Aponta para a Disciplina/Esfera pai.
- **`level`** *(Int)*: O nível (de 1 a 5, geralmente).
- **`name`** *(String)*: O nome do feitiço/poder (Ex: "Graça Felina").
- **`description`** *(String, Opcional)*: Lore e efeitos.
- **`system`** *(String, Opcional)*: Regras mecânicas, custo de sangue, rolagem de dados.

---

## 3. Tabelas de Associação (A Ficha do Jogador)
Elas fazem a junção N para N entre a tabela `Character` e as tabelas `Definition`. Para o usuário preencher a ficha, ele consome os endpoints `POST /api/characters/:id/...`.

### **`CharacterAttribute`**
- **`characterId`** *(FK)*: O jogador.
- **`attributeId`** *(FK)*: O Catálogo de Atributos.
- **`value`** *(Int)*: Quantas bolinhas o jogador tem (Padrão: 1).
- **`specialty`** *(String, Opcional)*: Especialização se o valor for alto (Ex: "Arrombamento").
- **`description`** *(String, Opcional)*: Anotações livres.

### **`CharacterSkill`**
- **`characterId`** *(FK)*: O jogador.
- **`skillId`** *(FK)*: O Catálogo de Habilidades.
- **`value`** *(Int)*: Quantas bolinhas o jogador tem (Padrão: 0).
- **`specialty`** *(String, Opcional)*: Especialização (Ex: "Pistolas").
- **`description`** *(String, Opcional)*: Anotações.

### **`CharacterStatus`**
*Nota: Criado automaticamente quando o Character nasce, lendo os status pertinentes da tabela `StatusDefinition`.*
- **`characterId`** *(FK)*: O jogador.
- **`statusId`** *(FK)*: O Catálogo de Status.
- **`value`** *(Int)*: Os pontos que o jogador possui atualmente. Pode flutuar durante o jogo.

### **`CharacterMeritFlaw`**
- **`characterId`** *(FK)*: O jogador.
- **`meritFlawId`** *(FK)*: A Qualidade ou Defeito.
- **`points`** *(Int)*: Quantos pontos a Qualidade custou ou o Defeito rendeu.
- **`description`** *(String, Opcional)*: Contexto da história do jogador.

### **`CharacterItem`**
- **`characterId`** *(FK)*: O jogador.
- **`itemId`** *(FK)*: O Item do Catálogo.
- **`quantity`** *(Int)*: Quantas unidades ele tem na mochila.
- **`description`** *(String, Opcional)*: Modificações (Ex: "Mira a laser acoplada").

### **`CharacterPower`**
Guarda "quantas bolinhas" totais o jogador tem na Disciplina/Esfera principal.
- **`characterId`** *(FK)*: O jogador.
- **`powerDefinitionId`** *(FK)*: A Disciplina (Ex: Rapidez).
- **`level`** *(Int)*: Quantas bolinhas ele possui.

### **`CharacterPowerSelection`**
Se o jogador tem Rapidez Nível 2 na tabela `CharacterPower`, ele terá 2 linhas nesta tabela salvando exatamente **quais** subpoderes específicos ele escolheu.
- **`characterPowerId`** *(FK)*: O registro-pai da Disciplina comprada.
- **`powerLevelDefinitionId`** *(FK)*: O poder específico escolhido.

---

## 4. Como Navegar na API e Conectar
Todas essas entidades podem ser testadas e modificadas acessando:
🔗 **`http://localhost:3001/api-docs`**

Ao acessar o Swagger, você terá a lista detalhada com todas as descrições dos endpoints, esquemas de entrada (JSON), e botões "Try it out" para executar as rotas diretamente do navegador sem precisar do Postman. (Basta fazer o login na rota `/api/auth/login` e clicar em "Authorize" colando o Token).

> [!IMPORTANT]
> A URL do painel de administração / hospedagem do Hostinger usa a credencial `mysql://u328169675_sidmax:XZspl5127912@127.0.0.1:3306/u328169675_rpgnew`. Ao rodar a aplicação em ambiente de produção, garanta que a variável `DATABASE_URL` no `.env` possua essa formatação exata ou preencha as variáveis particionadas (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).

### Testando a conexão com o banco
Foi criada uma rota leve de "ping" no banco de dados, ignorando a sobrecarga do ORM para verificar falhas na nuvem:
- `GET /teste`
Retorna uma mensagem de sucesso garantindo que a comunicação entre Node e MySQL2 está funcionando corretamente.
