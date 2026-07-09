-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 09/07/2026 às 18:06
-- Versão do servidor: 11.8.8-MariaDB-log
-- Versão do PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `u328169675_rpgnew`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `Action`
--

CREATE TABLE `Action` (
  `id` varchar(191) NOT NULL,
  `actionIdentifier` varchar(191) NOT NULL,
  `focus` varchar(191) NOT NULL,
  `text` text NOT NULL,
  `testStr` varchar(191) NOT NULL,
  `difficulty` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `Action`
--

INSERT INTO `Action` (`id`, `actionIdentifier`, `focus`, `text`, `testStr`, `difficulty`, `createdAt`, `updatedAt`) VALUES
('0f9fdef8-a9d0-482f-b835-1c96517424bc', 'Acao06_03', 'Mental', 'Chutar uma caçamba de lixo na direção dele para bloquear a linha de tiro e correr desesperadamente de volta para a avenida.', 'Raciocínio + Atletismo', 2, '2026-07-04 18:37:35.181', '2026-07-04 18:37:35.181'),
('1a357ca9-8cc9-412e-b9bc-5625b08e027e', 'Acao08_01', 'Físico', 'Esgueirar-se por trás dela quando ela entrar em uma área de fumantes isolada do jardim.', 'Destreza + Furtividade', 2, '2026-07-04 18:37:35.201', '2026-07-04 18:37:35.201'),
('1c5b91a0-3eba-4b0d-942d-d6ac271285bd', 'Acao02_01', 'Físico', 'Entrar sorrateiramente em um beco escuro atrás de um restaurante que parece promissor.', 'Destreza + Furtividade', 2, '2026-07-04 18:37:35.031', '2026-07-04 18:37:35.031'),
('2910795c-a66f-4f75-a0fc-bf703497de22', 'Acao02_03', 'Mental', 'Observar o posicionamento das câmeras de segurança e os horários das patrulhas para achar uma rota segura.', 'Raciocínio + Percepção', 2, '2026-07-04 18:37:35.058', '2026-07-04 18:37:35.058'),
('2a5e844a-b354-48c4-ba09-59baa39cf01d', 'Acao06_02', 'Social', 'Usar o olhar aterrorizante de Intimidação para congelar o policial de medo por um segundo antes que ele atire.', 'Carisma + Intimidação', 3, '2026-07-04 18:37:35.171', '2026-07-04 18:37:35.171'),
('301abe87-1d3f-4e89-9ca2-a9e0673dad8c', 'Acao02_02', 'Social', 'Fingir ser um congressista perdido para puxar assunto com uma pessoa isolada perto de um ponto de táxi.', 'Carisma + Subterfúgio', 3, '2026-07-04 18:37:35.047', '2026-07-04 18:37:35.047'),
('353a7bec-deb9-43e1-a29a-3e3eca3a3aeb', 'Acao04_03', 'Mental', 'Morder o próprio lábio até sangrar, usando a dor física para retomar o foco mental por alguns segundos e procurar um alvo mais fácil.', 'Determinação + Autocontrole', 3, '2026-07-04 18:37:35.121', '2026-07-04 18:37:35.121'),
('3655bf01-9098-429e-a4f2-61c6d471fe9b', 'Acao16_02', 'Físico', 'Desclinar do motel. Conduzi-la até o canto escuro do estacionamento ali mesmo para dar o bote longe dos olhares, já que você não consegue mais se segurar.', 'Destreza + Furtividade', 2, '2026-07-04 18:37:35.317', '2026-07-04 18:37:35.317'),
('45521ee7-df5f-4bba-b724-af73a4f1d9cc', 'Acao01_02', 'Social', 'Ligar para o seu contato da noite, procurando por uma fonte de alimentação segura.', 'Carisma + Sobrevivência', 2, '2026-07-04 18:37:35.009', '2026-07-04 18:37:35.009'),
('488f789f-646e-4bd6-9658-7d57c19ce51a', 'Acao16_01', 'Social', 'Insistir e usar o máximo de sua Persuasão para convencê-la de que o motel é mais seguro e luxuoso.', 'Manipulação + Persuasão', 3, '2026-07-04 18:37:35.311', '2026-07-04 18:37:35.311'),
('6caf15ab-c718-4356-972c-a7523ac99fc4', 'Acao10_02', 'Mental', 'Usar um grampo ou pedaço de arame encontrado no chão para abrir o cadeado sem fazer nenhum barulho.', 'Destreza + Ladroagem', 3, '2026-07-04 18:37:35.277', '2026-07-04 18:37:35.277'),
('74804ad1-1668-447a-9c25-b1ac2f5c1217', 'Acao14_01', 'Físico', 'Empurrar o corpo da vítima no chão e escalar o muro dos fundos para fugir antes de ser visto.', 'Destreza + Atletismo', 2, '2026-07-04 18:37:35.292', '2026-07-04 18:37:35.292'),
('75decbb3-b56b-4afd-8730-89c26ea5b4ed', 'Acao15_01', 'Físico', 'Largar o corpo ensanguentado do policial e correr em disparada cruzando a avenida antes que o cerco feche.', 'Sucesso Automático', 0, '2026-07-04 18:37:35.304', '2026-07-04 18:37:35.304'),
('7d6ce052-42d7-4661-9f8e-0fae813ef549', 'Acao06_01', 'Físico', 'Avançar contra a arma dele usando sua força pura para desarmá-lo e iniciar uma briga corporal.', 'Força + Briga', 3, '2026-07-04 18:37:35.161', '2026-07-04 18:37:35.161'),
('8586c3e6-330e-4d8c-a13e-44e6ca6a9943', 'Acao14_02', 'Social', 'Usar Dominação (Esquecimento) na pessoa que acabou de dobrar o beco para fazê-la esquecer o que viu.', 'Carisma + Dominação', 3, '2026-07-04 18:37:35.298', '2026-07-04 18:37:35.298'),
('96e17643-655c-401d-9fb9-4cd4cabb8288', 'Acao03_01', 'Físico', 'Escalar o muro lateral do estacionamento aproveitando o barulho de um caminhão que passa.', 'Força + Atletismo', 2, '2026-07-04 18:37:35.070', '2026-07-04 18:37:35.070'),
('997a7efc-e1f0-4524-b251-95cadf0fd8bf', 'Acao05_01', 'Físico', 'Descer pelas escadas de incêndio externas de forma silenciosa para interceptar a área dos funcionários.', 'Destreza + Furtividade', 1, '2026-07-04 18:37:35.131', '2026-07-04 18:37:35.131'),
('9cf9789f-0924-47b1-898b-30c2d2fbec14', 'Acao01_01', 'Físico', 'Sair do refúgio imediatamente para procurar um local de caça nas ruas.', 'Sucesso Automático', 0, '2026-07-04 18:37:34.998', '2026-07-04 18:37:34.998'),
('a03492cf-d78d-420e-9dc4-eaf9e4265421', 'Acao17_01', 'Físico', 'Largar a mulher desmaiada no banco do carro e fugir correndo por entre as sombras rumo ao seu refúgio.', 'Sucesso Automático', 0, '2026-07-04 18:37:35.324', '2026-07-04 18:37:35.324'),
('a3bb56e5-fe04-4cc7-a6f3-1b70f69db5c4', 'Acao11_01', 'Físico', 'Consumir o sangue rapidamente e saltar o muro de volta para a rua, limpando os vestígios.', 'Sucesso Automático', 0, '2026-07-04 18:37:35.285', '2026-07-04 18:37:35.285'),
('a6f08631-6b87-4cc6-a8d8-fa8dd6950fe2', 'Acao09_01', 'Físico', 'Dar o bote rápido pelas costas antes que a pessoa note sua aproximação.', 'Força + Briga', 2, '2026-07-04 18:37:35.231', '2026-07-04 18:37:35.231'),
('b77be3b9-7e80-40da-b37e-1ab97e0cd06b', 'Acao04_02', 'Social', 'Forçar um sorriso maníaco e tentar usar sua Presença (Fascínio) para fazer com que ela ande voluntariamente até você, ignorando a multidão.', 'Carisma + Presença', 3, '2026-07-04 18:37:35.111', '2026-07-04 18:37:35.111'),
('ba4f86a9-0693-4ce1-b72b-a0d405e74a60', 'Acao05_03', 'Mental', 'Usar seu conhecimento das ruas para deduzir qual beco adjacente os funcionários usam para descartar o lixo do hotel, longe dos olhos da segurança.', 'Inteligência + Manha', 2, '2026-07-04 18:37:35.151', '2026-07-04 18:37:35.151'),
('c422e8aa-1f70-4d11-aeeb-e31a5994d8d7', 'Acao08_02', 'Social', 'Aproximar-se calmamente, acender um isqueiro e usar sua lábia sedutora para encantá-la, oferecendo-se para levá-la a um lugar \'especial\'.', 'Manipulação + Subterfúgio', 2, '2026-07-04 18:37:35.212', '2026-07-04 18:37:35.212'),
('c611f065-6064-4ed8-92cd-d515afaccd5d', 'Acao10_01', 'Físico', 'Usar sua força bruta enriquecida pelo sangue para quebrar o cadeado em um puxão silencioso.', 'Força + Ofícios', 2, '2026-07-04 18:37:35.262', '2026-07-04 18:37:35.262'),
('c7be7724-74ef-43a0-a1aa-6c71d7d9beb3', 'Acao04_01', 'Físico', 'Avançar brutalmente e arrastar a jovem para trás das caçambas de entulho de uma obra ali perto.', 'Força + Briga', 4, '2026-07-04 18:37:35.101', '2026-07-04 18:37:35.101'),
('c7dabbcd-54e6-4471-a03b-631a2017df02', 'Acao03_03', 'Mental', 'Procurar pelo painel elétrico externo do estacionamento para tentar cortar a energia e destravar o portão.', 'Inteligência + Tecnologia', 3, '2026-07-04 18:37:35.091', '2026-07-04 18:37:35.091'),
('d1e21970-54b8-465f-9a37-f852e503ac4b', 'Acao08_03', 'Mental', 'Analisar o comportamento dela à distância para decifrar exatamente qual tipo de substância ela quer, usando isso como isca perfeita.', 'Inteligência + Sagacidade', 2, '2026-07-04 18:37:35.221', '2026-07-04 18:37:35.221'),
('ded2d058-0802-4de0-a04a-e3feb33db723', 'Acao07_01', 'Físico', 'Correr de volta para o seu refúgio de mãos vazias, trancando as portas enquanto a Besta racha sua mente.', 'Sucesso Automático', 0, '2026-07-04 18:37:35.190', '2026-07-04 18:37:35.190'),
('e5d6626e-6977-4d38-8fab-0df2260574b3', 'Acao05_02', 'Social', 'Vestir uma roupa social elegante do seu armário e caminhar até a área VIP do evento misturando-se aos médicos estrangeiros.', 'Manipulação + Etiqueta', 2, '2026-07-04 18:37:35.141', '2026-07-04 18:37:35.141'),
('e80234f1-09c8-4866-a285-bf92887dec85', 'Acao01_03', 'Mental', 'Tentar resistir e lutar contra o avanço da Fome para clarear os pensamentos.', 'Autocontrole + Determinação', 3, '2026-07-04 18:37:35.020', '2026-07-04 18:37:35.020'),
('f44d8163-b57c-4c0b-83c6-62c0bc7abc49', 'Acao09_03', 'Mental', 'Aguardar nas sombras até que a vítima entre embaixo da marquise apagada de um prédio antigo.', 'Raciocínio + Furtividade', 2, '2026-07-04 18:37:35.252', '2026-07-04 18:37:35.252'),
('f8ed5473-4a43-4b35-8bbf-c838e44cc46f', 'Acao03_02', 'Social', 'Abordar o guarda do estacionamento e tentar convencê-lo ou suborná-lo para te deixar entrar por dois minutos.', 'Manipulação + Persuasão', 3, '2026-07-04 18:37:35.081', '2026-07-04 18:37:35.081'),
('fe8b26fd-ffee-4c8b-bc81-df040ac4b10d', 'Acao09_02', 'Social', 'Chamar a atenção da pessoa com um sussurro usando Presença para paralisá-la de fascínio.', 'Carisma + Presença', 3, '2026-07-04 18:37:35.241', '2026-07-04 18:37:35.241'),
('ff693ef9-5371-4a09-86ab-e41b96da0512', 'Acao18_01', 'Físico', 'Colocá-la deitada confortavelmente na cama e sair do quarto caminhando calmamente em direção à rua.', 'Sucesso Automático', 0, '2026-07-04 18:37:35.331', '2026-07-04 18:37:35.331');

-- --------------------------------------------------------

--
-- Estrutura para tabela `Adventure`
--

CREATE TABLE `Adventure` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `gameStyle` varchar(191) NOT NULL,
  `objective` text DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `Adventure`
--

INSERT INTO `Adventure` (`id`, `name`, `gameStyle`, `objective`, `createdAt`, `updatedAt`) VALUES
('6964afc5-5a7d-4c2e-b56a-ea1b35258c36', 'Matar a Fome', 'Vampiro', 'Saciar a queimação da Fome e controlar a Besta sem quebrar a Máscara.', '2026-07-04 18:37:34.731', '2026-07-04 18:37:34.731');

-- --------------------------------------------------------

--
-- Estrutura para tabela `AdventureScene`
--

CREATE TABLE `AdventureScene` (
  `id` varchar(191) NOT NULL,
  `adventureId` varchar(191) NOT NULL,
  `sceneId` varchar(191) NOT NULL,
  `order` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `AdventureScene`
--

INSERT INTO `AdventureScene` (`id`, `adventureId`, `sceneId`, `order`) VALUES
('04d00b8f-89c4-478c-9433-02e7bf923eee', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '58e87852-5dec-41a8-b602-0523bd93692a', 0),
('0d73e410-04fb-4da1-82ae-eaa4ff39a083', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '17075cbf-0069-4e91-b189-a9540da015fe', 0),
('17da3aaf-4a0a-436b-8436-27578fbbad16', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '08b2ee8f-4f28-4345-bb93-aa71a011a786', 0),
('1b43dd45-af79-4f6b-b5dd-8a3d6cfa2fb3', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '39f84093-fc94-4ba7-8bbf-26bc01e44843', 0),
('2997468c-b7ac-4535-bcc6-7b3b72864f37', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '7250b119-7c62-4e7f-a24b-7a4552743c51', 0),
('2be036a4-843f-4929-b3da-ee2c162067c1', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '181fa2e1-96c0-497e-b036-a78712f18de3', 0),
('377c8b50-d374-4bd2-8545-1d0ede8851c3', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '221eeee1-8cfe-4b66-ab33-da1a852dc706', 0),
('4d2a67ef-d443-4c91-ae0d-6df385de9056', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '0a1df234-560c-477b-b7fe-d3b5e64e8576', 0),
('64dc7453-5823-494b-99b2-fab3d7d3c971', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '8ec12df3-1f32-4c2f-89e9-17e7e358d848', 0),
('68191617-efa3-46b5-8efa-8ffc34d0999e', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 0),
('6ff9414b-8e0c-4ba9-9193-ef8126882e7d', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', 'f714ae17-d1b5-4977-bc89-eb6862444124', 0),
('70af1cb5-bf56-498f-9791-c71ee55faf75', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', 'f255176b-9e3e-4a09-ad3c-9821a7e3fb06', 0),
('829960bd-e93b-4a71-9a8b-ee460062af38', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '3109de85-558a-490c-800e-fc5e7b50ddeb', 0),
('91240524-e5c9-4f9a-8edd-f4c64425d91c', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', 'ac1f1657-8a3a-465f-8725-67e3fd71a74b', 0),
('987fc346-a00d-448c-becb-67b1e59fef2e', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '0cda666b-1ac3-40de-93e9-387c4a13efab', 0),
('9f1806a9-bc64-4879-b336-92250aba66dc', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '1d167c21-1aef-44a6-800e-d570569b8f7c', 0),
('b6fc6432-d263-4973-92a0-6557a41cc43e', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', 'ec38b7ae-dcb7-4d47-83a0-5592bda0cf0a', 0),
('bff15947-4b93-4955-997b-3d4e40eff03b', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '096b030b-f032-448a-961d-1907898e8458', 0),
('d6e1c707-c19e-4549-92ef-a7473d641c30', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '9d2f4509-c3aa-4bae-bb13-0bfb95014b7b', 0),
('da234f78-41f1-44d6-a29a-0a887ce3e2ee', '6964afc5-5a7d-4c2e-b56a-ea1b35258c36', '35700470-4d37-4e3d-8082-6e6d96918802', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `AttributeDefinition`
--

CREATE TABLE `AttributeDefinition` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `AttributeDefinition`
--

INSERT INTO `AttributeDefinition` (`id`, `name`, `type`, `description`, `createdAt`, `updatedAt`) VALUES
('092fddd3-9ac0-4e81-8df2-6d114acdf438', 'Percepção', 'UNIVERSAL', 'Atributo Mental (V20/M20)', '2026-07-04 16:40:33.085', '2026-07-04 16:40:33.085'),
('1cb29de6-2172-4bd3-9667-00d494d09c2d', 'Determinação', 'UNIVERSAL', 'Atributo Mental (V5/W5)', '2026-07-04 16:40:33.080', '2026-07-04 16:40:33.080'),
('2cdb29c0-49d1-488a-815c-de74f872a705', 'Raciocínio', 'UNIVERSAL', 'Atributo Mental', '2026-07-04 16:40:33.075', '2026-07-04 16:40:33.075'),
('2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 'Carisma', 'UNIVERSAL', 'Atributo Social', '2026-07-04 16:40:33.050', '2026-07-04 16:40:33.050'),
('444f9aeb-d5e0-4642-b656-6657d7631bfe', 'Autocontrole', 'UNIVERSAL', 'Atributo Social (V5/W5)', '2026-07-04 16:40:33.060', '2026-07-04 16:40:33.060'),
('58ce2e4e-3e49-4047-a374-8df6f3d89952', 'Aparência', 'UNIVERSAL', 'Atributo Social (V20/M20)', '2026-07-04 16:40:33.065', '2026-07-04 16:40:33.065'),
('b458ef99-5c2d-40ed-b938-f2d6492a98a7', 'Força', 'UNIVERSAL', 'Atributo Físico', '2026-07-04 16:40:32.833', '2026-07-04 16:40:32.833'),
('c49eb647-f3b5-4664-ac18-b5056f56f195', 'Inteligência', 'UNIVERSAL', 'Atributo Mental', '2026-07-04 16:40:33.070', '2026-07-04 16:40:33.070'),
('dcf46522-36a5-40d9-85c7-f0383bfce0ca', 'Vigor', 'UNIVERSAL', 'Atributo Físico', '2026-07-04 16:40:33.045', '2026-07-04 16:40:33.045'),
('ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 'Manipulação', 'UNIVERSAL', 'Atributo Social', '2026-07-04 16:40:33.055', '2026-07-04 16:40:33.055'),
('f0f82117-eaab-4f89-bcb1-c963a258bf4c', 'Destreza', 'UNIVERSAL', 'Atributo Físico', '2026-07-04 16:40:33.041', '2026-07-04 16:40:33.041');

-- --------------------------------------------------------

--
-- Estrutura para tabela `BackgroundDefinition`
--

CREATE TABLE `BackgroundDefinition` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `gameStyle` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `BackgroundDefinition`
--

INSERT INTO `BackgroundDefinition` (`id`, `name`, `gameStyle`, `description`, `createdAt`, `updatedAt`) VALUES
('02cfcb5e-d07d-44fa-977c-d7e16033c1ea', 'Fetiche', 'WEREWOLF', 'Um objeto físico que possui um espírito aprisionado dentro dele, concedendo poderes.', '2026-07-04 16:51:05.153', '2026-07-04 16:51:05.153'),
('08643aa8-2a92-445a-a8f4-e797d88348ab', 'Avatar', 'MAGE', 'A força da essência mágica da alma do mago, que permite manipular a realidade.', '2026-07-04 16:51:05.117', '2026-07-04 16:51:05.117'),
('0d65fc4b-4889-4c5b-a6d7-cccfd01250f0', 'Influência', 'UNIVERSAL', 'Poder político ou social dentro da comunidade mortal.', '2026-07-04 16:51:05.069', '2026-07-04 16:51:05.069'),
('0dc6d622-fcd2-4110-9e90-be35bb6c2fdc', 'Destino', 'MAGE', 'Um propósito cósmico que protege e guia o mago rumo à grandeza.', '2026-07-04 16:51:05.127', '2026-07-04 16:51:05.127'),
('2f58b916-a63a-4b33-bd9d-6077ee5962e8', 'Recursos', 'UNIVERSAL', 'Riqueza, bens materiais e renda mensal disponível.', '2026-07-04 16:51:05.079', '2026-07-04 16:51:05.079'),
('3e639e83-9659-414c-82fb-6fddadc1fc15', 'Contatos', 'UNIVERSAL', 'Fontes de informação em diversos setores da sociedade (polícia, submundo, mídia).', '2026-07-04 16:51:05.057', '2026-07-04 16:51:05.057'),
('429c0e4d-48d2-480a-9a90-97d592c82890', 'Status', 'VAMPIRE', 'A reputação e a posição do vampiro dentro da sociedade e seita dos Membros.', '2026-07-04 16:51:05.112', '2026-07-04 16:51:05.112'),
('4474fe11-e709-4b4c-8761-551586e7c896', 'Maravilha', 'MAGE', 'Um item mágico criado ou descoberto (Talismãs, Fetiches Místicos).', '2026-07-04 16:51:05.138', '2026-07-04 16:51:05.138'),
('4fd49aa1-1740-465e-a5e1-98fa770f239d', 'Sonho', 'MAGE', 'Conexão intuitiva com o inconsciente coletivo para obter inspiração ou respostas.', '2026-07-04 16:51:05.143', '2026-07-04 16:51:05.143'),
('53547809-ddc3-47ac-8602-3a6ef1f4d3be', 'Geração', 'VAMPIRE', 'A distância que o vampiro tem de Caim. Quanto menor, mais poderoso o sangue.', '2026-07-04 16:51:05.107', '2026-07-04 16:51:05.107'),
('587d0f73-b0fe-4e58-86c5-e8fd1582b11d', 'Fama', 'UNIVERSAL', 'O quão conhecido o personagem é na sociedade mortal.', '2026-07-04 16:51:05.064', '2026-07-04 16:51:05.064'),
('5e9ea9f1-ca7a-4b2c-b441-72ded8ff31d9', 'Lacaios', 'UNIVERSAL', 'Servos leais e seguidores que obedecem ao personagem (Carniais, funcionários, etc).', '2026-07-04 16:51:05.091', '2026-07-04 16:51:05.091'),
('61c47f5b-b6c3-486d-8c49-4fb19c890501', 'Aliados', 'UNIVERSAL', 'Amigos ou associados que podem ajudar o personagem com favores ou força física.', '2026-07-04 16:51:05.046', '2026-07-04 16:51:05.046'),
('63ed432b-af71-4da5-bc5b-07d0a027860a', 'Biblioteca', 'MAGE', 'Uma coleção de livros raros, tomos mágicos e dados de pesquisa oculta.', '2026-07-04 16:51:05.122', '2026-07-04 16:51:05.122'),
('8da25a37-09e3-4b28-b071-fabcb3b73ec6', 'Mentor', 'UNIVERSAL', 'Um protetor, guia ou professor que auxilia o personagem.', '2026-07-04 16:51:05.075', '2026-07-04 16:51:05.075'),
('90941f02-6713-4fb0-b051-7d8bae1b53b9', 'Refúgio', 'UNIVERSAL', 'Um local seguro para morar, se esconder ou operar.', '2026-07-04 16:51:05.085', '2026-07-04 16:51:05.085'),
('9a0e369f-c7e7-4a59-85f8-aa3d5b44ac9e', 'Raça Pura', 'WEREWOLF', 'Linhagem lendária e prestígio hereditário perante a Nação Garou.', '2026-07-04 16:51:05.158', '2026-07-04 16:51:05.158'),
('a32e40c7-3124-4cdf-b571-9f8f4f073b3b', 'Identidade Alternativa', 'UNIVERSAL', 'Documentação e histórico falsos e bem construídos (Máscara).', '2026-07-04 16:51:05.096', '2026-07-04 16:51:05.096'),
('bb8b41d3-7a44-4e15-bc43-ed0a870c450b', 'Parentes', 'WEREWOLF', 'Humanos ou lobos que carregam o sangue Garou, imunes ao delírio e que auxiliam a matilha.', '2026-07-04 16:51:05.168', '2026-07-04 16:51:05.168'),
('c9d7a8af-7ba7-4faa-a143-eebac04ba237', 'Nodo', 'MAGE', 'Um local de poder místico de onde o mago pode extrair Quintessência.', '2026-07-04 16:51:05.133', '2026-07-04 16:51:05.133'),
('d04a205b-42e1-44f0-a9cf-c24868db7bd0', 'Rebanho', 'VAMPIRE', 'Um grupo de mortais dos quais o vampiro pode se alimentar de forma segura e regular.', '2026-07-04 16:51:05.101', '2026-07-04 16:51:05.101'),
('e3df9ed4-1ff9-4a29-a170-0eb6b37ef508', 'Totem', 'WEREWOLF', 'O espírito patrono da matilha do personagem, que concede bênçãos coletivas.', '2026-07-04 16:51:05.163', '2026-07-04 16:51:05.163'),
('eae5d3d4-5304-4b5b-937b-fc1760936f51', 'Ancestrais', 'WEREWOLF', 'A capacidade de canalizar conhecimentos e habilidades de encarnações passadas da matilha.', '2026-07-04 16:51:05.148', '2026-07-04 16:51:05.148'),
('edead497-2950-4bd0-952b-ea0824fc35ac', 'Ritos', 'WEREWOLF', 'Conhecimento de rituais místicos espirituais aprendidos pela tribo.', '2026-07-04 16:51:05.173', '2026-07-04 16:51:05.173');

-- --------------------------------------------------------

--
-- Estrutura para tabela `Character`
--

CREATE TABLE `Character` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `gameStyle` enum('VAMPIRE','WEREWOLF','MAGE','HUNTER') NOT NULL,
  `experienceTotal` int(11) NOT NULL DEFAULT 0,
  `experienceSpent` int(11) NOT NULL DEFAULT 0,
  `isNpc` tinyint(1) NOT NULL DEFAULT 0,
  `isTemplate` tinyint(1) NOT NULL DEFAULT 0,
  `userId` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `avatarUrl` varchar(191) DEFAULT NULL,
  `concept` varchar(255) DEFAULT NULL,
  `nature` varchar(255) DEFAULT NULL,
  `demeanor` varchar(255) DEFAULT NULL,
  `chronicle` varchar(255) DEFAULT NULL,
  `history` text DEFAULT NULL,
  `roleplayHints` text DEFAULT NULL,
  `health` int(11) NOT NULL DEFAULT 7,
  `maxHealth` int(11) NOT NULL DEFAULT 7,
  `willpower` int(11) NOT NULL DEFAULT 1,
  `maxWillpower` int(11) NOT NULL DEFAULT 1,
  `energy` int(11) NOT NULL DEFAULT 1,
  `maxEnergy` int(11) NOT NULL DEFAULT 1,
  `vampireClaId` varchar(36) DEFAULT NULL,
  `werewolfTribeId` varchar(36) DEFAULT NULL,
  `mageTraditionId` varchar(36) DEFAULT NULL,
  `hunterCreedId` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `Character`
--

INSERT INTO `Character` (`id`, `name`, `gameStyle`, `experienceTotal`, `experienceSpent`, `isNpc`, `isTemplate`, `userId`, `createdAt`, `updatedAt`, `avatarUrl`, `concept`, `nature`, `demeanor`, `chronicle`, `history`, `roleplayHints`, `health`, `maxHealth`, `willpower`, `maxWillpower`, `energy`, `maxEnergy`, `vampireClaId`, `werewolfTribeId`, `mageTraditionId`, `hunterCreedId`) VALUES
('04473047-f317-4d1f-8948-6875ed73059b', 'Renato \'Asas-de-Chumbo\' Alvarenga', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000', 'assets/portraits/renato_asas_de_chumbo_alvarenga.png', 'Caminhoneiro Terrestre e Mensageiro', NULL, NULL, NULL, 'Renato passou anos cruzando as BRs entre São Paulo e o sul do Brasil ao volante de uma carreta de carga. Ele sempre gostou do silêncio da madrugada no asfalto. Durante uma noite de forte neblina na Rodovia Régis Bittencourt, ele atropelou o que parecia ser uma pessoa, mas que na verdade era uma criatura disforme nascida de um acidente ambiental provocado por uma empresa do Wyrm. Ao descer do veículo, foi emboscado por outros monstros. A adrenalina do ataque destravou seu sangue Garou. Ele usou chaves de fenda e sua força bruta para dilacerar as abominações. Desde então, ele foi acolhido pelos Peregrinos e usa suas rotas comerciais para transportar segredos, fetiches e mensagens vitais entre Caerns isolados.', 'Você fala de forma pausada, fuma muito e tem os olhos cansados de quem já viu demais na escuridão das estradas. Você trata seu caminhão como um lar móvel e raramente cria raízes em um lugar por muito tempo. Para você, o perigo nunca está parado, ele sempre viaja com o vento da noite.', 7, 7, 4, 10, 1, 10, NULL, 'b965432f-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL),
('05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', 'Rodrigo \'Língua-de-Prata\' Castro', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000', 'assets/portraits/rodrigo_lingua_de_prata_castro.png', 'Músico de Taberna e Historiador', NULL, NULL, NULL, 'Rodrigo era um músico e folclorista que viajava pelo interior do sul do país coletando contos populares e canções antigas. Durante uma apresentação em um festival de inverno na serra, ele testemunhou o dono de uma grande madeireira — visivelmente maculado pelo Wyrm — ameaçando os moradores locais para tomar suas propriedades tradicionais. A injustiça e o desespero do povo ecoaram nas cordas do violão de Rodrigo, engatilhando sua Primeira Mudança. Ele saltou do palco em forma Crinos e arrebentou os capangas armados. Rodrigo foi acolhido pelos Galhardos, e hoje usa suas músicas para camuflar a história secreta da Nação Garou e inflamar o espírito de batalha de sua matilha.', 'Você é o coração da festa e o guardião da memória. Suas piadas são ácidas, suas histórias são cativantes e você nunca recusa um bom copo. No entanto, por trás do sorriso de boêmio, há uma profunda melancolia ao ver que o mundo antigo está morrendo; você luta para que essa queda aconteça cantando e de cabeça erguida.', 7, 7, 5, 10, 1, 10, NULL, '6fd9b666-9fca-412b-a512-5a834cafaf4f', NULL, NULL),
('05df9749-8fb8-4244-8500-6dce2262ddeb', 'Dr. Fernando Krauss', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000', 'assets/portraits/dr_fernando_krauss.png', 'Farmacêutico e Pesquisador de Laboratório', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, '7cdf1014-6ad5-47b8-82dc-4d14684bc476'),
('0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', 'André de Albuquerque Maranhão', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:55:31.108', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', 'Antônio Canellas', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', 'Aristeu Nogueira', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'Benedito Meia-Légua', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'Daniel Gomes de Freitas', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', 'Djalma Dutra', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', 'Dulce Maia', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', 'Elisa Kauffmann Abramovich', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'Luísa Mahin', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', 'Nuta James', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'Pajeú', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'Rafael Mourão', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', 'Severo Fournier', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:28:33.000', '2026-07-07 19:28:33.000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', 'Helena \'Voz-Serena\' Fontes', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000', 'assets/portraits/helena_voz_serena_fontes.png', 'Líder Comunitária e Curandeira', NULL, NULL, NULL, 'Helena foi criada em um bairro de periferia em São Paulo que sofria com poluição e descaso. Ela fundou uma ONG que transformava terrenos baldios em hortas comunitárias. Quando uma empreiteira (controlada sub-repticiamente pela Pentex) tentou incendiar o local para forçar a desocupação, Helena defendeu o terreno e sofreu sua Primeira Mudança. Em vez de massacrar os agressores, ela os neutralizou e usou a mídia e as provas para prender os mandantes. Hoje, ela é o pilar emocional de sua matilha, curando as feridas de seus aliados e tentando provar que há outros meios de vencer o Wyrm além de derramar sangue.', 'Você é a mãe da matilha. Você ouve as angústias dos outros membros e tenta impedir que eles sucumbam ao Hauglosk (fanatismo violento). Quando em perigo, você sempre tenta dialogar ou imobilizar os adversários humanos primeiro. Mas não se engane: quando se trata de espíritos do Wyrm ou monstros irremediáveis, sua fúria é tão devastadora quanto a de qualquer outro lobisomem.', 7, 7, 6, 10, 1, 10, NULL, '1a493dc5-22c0-4d15-995a-3bc8dbb05efe', NULL, NULL),
('0cc79b65-0fdd-4684-a61a-48191eb4c210', 'Ingrid \'Quebra-Escudos\' Wolf', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000', 'assets/portraits/ingrid_quebra-escudos_wolf.png', 'Soldado de Choque e Renegada', NULL, NULL, NULL, 'Ingrid foi treinada desde cedo por uma célula extremista das Crias de Fenris no interior do Paraná. Eles ensinavam que a Nação Garou era fraca e que todos os humanos deveriam ser exterminados para salvar Gaia. Quando sua Primeira Mudança ocorreu em um acampamento de treinamento militarizado, ela viu seus antigos mentores massacrando uma vila de camponeses inocentes apenas por estarem perto de uma área de mata. Horrorizada com a loucura de sua própria tribo, ela usou suas lâminas para matar seus instrutores e salvar os sobreviventes humanos. Desde então, ela vive como renegada, caçada tanto pelos fanáticos do Culto de Fenris quanto pelas outras tribos que não confiam em seu sangue.', 'Você é dura, cicatrizada e direta. Você fala apenas o necessário e prefere que suas ações em combate mostrem sua lealdade. Você vive sob um estresse absurdo; sabe que um deslize violento seu fará com que as pessoas digam \'eu avisei, ela é uma Fenris enlouquecida\'. Você luta o dobro para provar que ainda há honra na sua linhagem.', 7, 7, 5, 10, 2, 10, NULL, 'a8d60cb2-9eb3-4e44-ab9a-3543e221f88b', NULL, NULL),
('0d8e7c17-be9f-4603-a5ea-69a41674bb36', 'Dulce Maia', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:57.000', '2026-07-09 17:15:57.000', 'assets/portraits/dulce_maia.png', 'Acompanhante', 'Competidor', 'Esperto', NULL, 'Dulce é uma personificação da ambição. Escolhida por uma Ventrue devido a sua beleza, ela foi transformada em carniçal, serviçal e amante daquela que acabaria por se tornar sua senhora. Inicialmente considerada apenas uma \'carinha bonita\', a perspicácia da jovem desconcerta alguns membros mais conservadores.', 'Você era julgada pela sua aparência, e aprendeu a usar isso a seu favor. Você parece uma patricinha, avoada e fútil; mas isso tudo é uma cortina de fumaça que esconde sua real personalidade.', 7, 7, 4, 10, 10, 10, 'b964c822-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('10412337-5fb4-4bb6-ba48-0efc36c5489d', 'Severo Fournier', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:39.000', '2026-07-09 17:19:39.000', 'assets/portraits/severo_fournier.png', 'Professor', 'Fanático', 'Sobrevivente', NULL, 'Severo tinha tudo: uma bela esposa, filhos obedientes, um ótimo emprego como professor universitário. Mas então um pergaminho estranho lhe foi enviado para tradução, e em pouco tempo ele perdeu tudo. Sua família foi assassinada, seu emprego retirado. Aquele pergaminho continha um fragmento do Livro de Nod, e Severo acabou sendo abraçado como medida para impedir a existência dos vampiros de ser levada a público.', 'Você odeia o clã, mas o laço de sangue é forte demais. Então você decidiu se tornar alguém em posição de liderança, para um dia se vingar. Você é frio e calculista, e finge ser um peão leal. Um dia, eles verão a verdade.', 7, 7, 4, 10, 10, 10, 'b964ab26-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'Kauê \'Caminha-nas-Sombras\' Terena', 'MAGE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000', 'assets/portraits/kaue_caminha_nas_sombras_terena.png', 'Xamã Urbano e Resgatista', 'Arquiteto', 'Sobrevivente', NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, 'b9661bd0-7bb2-11f1-a1c9-e89e5efddb4f', NULL),
('15bc2ae9-7198-4d09-a659-7e950dc05216', 'Daniel Gomes de Freitas', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:57.000', '2026-07-09 17:15:57.000', 'assets/portraits/daniel_freitas.png', 'Estudante', 'Arquiteto', 'Durão', NULL, 'Daniel era um defensor das minorias em seu tempo de estudante, uma voz potente em meio às multidões. Esta pode ter sido a razão de ele ter sido abraçado, logo após ser fuzilado pelos militares em 66. Seu senhor era um infiltrado europeu, encarregado de vigiar a Camarilla brasileira durante os anos de ditadura. Agora Daniel ainda se envolve em problemas com o Principado de Curitiba devido aos seus atos de rebeldia.', 'Você ainda esquece a hora de ficar quieto, mas nunca desobedeceu quando a desobediência poderia causar sua destruição. Você viveu por uma causa, e morreu por ela. Agora sua causa é você mesmo.', 7, 7, 4, 10, 10, 10, 'b9642f5a-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('214e2ef6-9fa5-4621-855f-259f171ece90', 'Rodrigo \'Língua-de-Prata\' Castro', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000', 'assets/portraits/rodrigo_lingua_de_prata_castro.png', 'Músico de Taberna e Historiador', NULL, NULL, NULL, 'Rodrigo era um músico e folclorista que viajava pelo interior do sul do país coletando contos populares e canções antigas. Durante uma apresentação em um festival de inverno na serra, ele testemunhou o dono de uma grande madeireira — visivelmente maculado pelo Wyrm — ameaçando os moradores locais para tomar suas propriedades tradicionais. A injustiça e o desespero do povo ecoaram nas cordas do violão de Rodrigo, engatilhando sua Primeira Mudança. Ele saltou do palco em forma Crinos e arrebentou os capangas armados. Rodrigo foi acolhido pelos Galhardos, e hoje usa suas músicas para camuflar a história secreta da Nação Garou e inflamar o espírito de batalha de sua matilha.', 'Você é o coração da festa e o guardião da memória. Suas piadas são ácidas, suas histórias são cativantes e você nunca recusa um bom copo. No entanto, por trás do sorriso de boêmio, há uma profunda melancolia ao ver que o mundo antigo está morrendo; você luta para que essa queda aconteça cantando e de cabeça erguida.', 7, 7, 5, 10, 1, 10, NULL, '6fd9b666-9fca-412b-a512-5a834cafaf4f', NULL, NULL),
('21bbecef-357a-47cd-a78a-daf385c869a6', 'Benedito Meia-Légua', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:56.000', '2026-07-09 17:15:56.000', 'assets/portraits/benedito_meia_legua.png', 'Investigador', 'Sobrevivente', 'Gozador', NULL, 'Benedito era um simples investigador da polícia em uma época perigosa para o país, um pouco antes do golpe militar. Quando o exército assumiu o governo, vários de seus opositores desapareceram. O chefe do departamento onde Benedito trabalhava era um destes opositores, e todos os subordinados dele foram levados para interrogatório — Benedito nunca foi liberado, acabando carniçal para um vampiro Nosferatu. Após provar seu valor como investigador, ele acabou sendo abraçado.', 'Profissionalismo define seu ser, mas curiosidade move seus atos. Você é um investigador, e aprendeu a gostar do papel de monstro e a usar ratos, pombos, cães e gatos para aprender segredos. Piadista e irreverente, nada é sagrado.', 7, 7, 4, 10, 10, 10, 'b9646e10-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'Benedito Meia-Légua', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:38.000', '2026-07-09 17:19:38.000', 'assets/portraits/benedito_meia_legua.png', 'Investigador', 'Sobrevivente', 'Gozador', NULL, 'Benedito era um simples investigador da polícia em uma época perigosa para o país, um pouco antes do golpe militar. Quando o exército assumiu o governo, vários de seus opositores desapareceram. O chefe do departamento onde Benedito trabalhava era um destes opositores, e todos os subordinados dele foram levados para interrogatório — Benedito nunca foi liberado, acabando carniçal para um vampiro Nosferatu. Após provar seu valor como investigador, ele acabou sendo abraçado.', 'Profissionalismo define seu ser, mas curiosidade move seus atos. Você é um investigador, e aprendeu a gostar do papel de monstro e a usar ratos, pombos, cães e gatos para aprender segredos. Piadista e irreverente, nada é sagrado.', 7, 7, 4, 10, 10, 10, 'b9646e10-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('2779605e-32ff-4d5a-844f-ddec7d59095d', 'Antônio Canellas', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:37.000', '2026-07-09 17:19:37.000', 'assets/portraits/antonio_canellas.png', 'Malandro', 'Esperto', 'Caçador de Emoções', NULL, 'Antônio não é um Gangrel típico, ele é um habitante da selva de pedra. Amante da civilização, ele nunca teve as inclinações selvagens que se espera de um Nômade. Assim que foi liberado por seu Senhor, Antônio passou a usar suas habilidades para conseguir conforto e segurança. Hoje ele possui um prédio no centro de Curitiba, um estacionamento vertical que serve de fachada para diversos negócios escusos.', 'Você é um marginal boa pinta, um ladrão de carros que bebe o sangue de algumas pessoas que vêm estacionar os carros em seu estabelecimento. Você é um malandro, sedutor, que sabe o valor das amizades.', 7, 7, 4, 10, 10, 10, 'b96440ad-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('2cd6e835-681b-482e-976a-e8066a9c6252', 'Danilo \'Trator\' Mendes', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000', 'assets/portraits/danilo_trator_mendes.png', 'Mecânico de Desmanche e Cobrador', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, '03aca330-a92c-444f-a5b6-9045b1997866'),
('31f4a144-d6a2-410b-bb9b-243ffc6bee2a', 'Thiago \'Espelho-Vazio\' Wu', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000', 'assets/portraits/thiago_espelho_vazio_wu.png', NULL, NULL, NULL, NULL, 'Thiago nasceu no bairro da Liberdade, em São Paulo, e passou a juventude buscando respostas para a ansiedade caótica da cidade grande através de artes marciais e meditação zen. Sua Primeira Mudança ocorreu durante um retiro espiritual nas montanhas do Paraná, quando um grupo de capangas a serviço de uma mineradora ligada à Pentex invadiu a área sagrada para ameaçar os monges. Em vez de se entregar à fúria destrutiva comum, Thiago canalizou a Besta em movimentos fluidos e marciais em forma Glabro e Crinos, desarmando e neutralizando a ameaça com precisão cirúrgica sem derramar uma gota de sangue desnecessária. Ele foi acolhido pelos poucos Andarilhos do Espelho remanescentes no Brasil e agora atua como um conselheiro místico nas matilhas urbanas, ajudando os jovens Garou a não caírem no Hauglosk.', 'Você é a personificação da calma na tempestade. Suas palavras são poucas, mas carregam um peso filosófico imenso. Em combate, você prefere usar a força do próprio oponente contra ele (esquivas e imobilizações) em vez de ataques brutos. Para você, a guerra contra o Wyrm é vencida primeiro dentro da mente de cada Garou.', 7, 7, 6, 10, 1, 10, NULL, '4c70cb44-b968-4799-8993-a86b0d412314', NULL, NULL),
('3468c45e-2f30-4684-a537-fc8fef969e4e', 'Vitor \'Corta-Garganta\' Peixoto', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000', 'assets/portraits/vitor_corta_garganta_peixoto.png', 'Político Corruptor', NULL, NULL, NULL, 'Vitor sempre soube como os bastidores do poder funcionam em Curitiba. Ele atuava como lobista e articulador de campanhas políticas, subornando vereadores e costurando acordos escusos para grandes empreiteiras. Sua Primeira Mudança ocorreu quando um desses acordos envolveu o descarte ilegal de resíduos químicos industriais diretamente sobre um território de mata nativa que continha um santuário espiritual. Quando ele percebeu o erro que havia cometido, os agentes do Wyrm tentaram assassiná-lo. Vitor se transformou, esquartejou os capangas e usou sua influência para colocar a culpa em um assalto comum. Ele assumiu o manto dos Senhores das Sombras para caçar aqueles que tentaram usá-lo.', 'Você não é um herói idealista. Você sabe que o mundo é movido a favores, chantagem e medo. Você usa sorrisos falsos e discursos eloquentes para colocar seus inimigos humanos exatamente onde você quer. Para você, a Nação Garou está perdendo a guerra porque é ingênua demais; o Wyrm deve ser combatido com as armas dele: traição, poder financeiro e facas nas costas.', 7, 7, 5, 10, 1, 10, NULL, 'b96502a2-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL),
('35d180bf-0823-4be9-938a-baaa05a29fb8', 'Renato \'Asas-de-Chumbo\' Alvarenga', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000', 'assets/portraits/renato_asas_de_chumbo_alvarenga.png', 'Caminhoneiro Terrestre e Mensageiro', NULL, NULL, NULL, 'Renato passou anos cruzando as BRs entre São Paulo e o sul do Brasil ao volante de uma carreta de carga. Ele sempre gostou do silêncio da madrugada no asfalto. Durante uma noite de forte neblina na Rodovia Régis Bittencourt, ele atropelou o que parecia ser uma pessoa, mas que na verdade era uma criatura disforme nascida de um acidente ambiental provocado por uma empresa do Wyrm. Ao descer do veículo, foi emboscado por outros monstros. A adrenalina do ataque destravou seu sangue Garou. Ele usou chaves de fenda e sua força bruta para dilacerar as abominações. Desde então, ele foi acolhido pelos Peregrinos e usa suas rotas comerciais para transportar segredos, fetiches e mensagens vitais entre Caerns isolados.', 'Você fala de forma pausada, fuma muito e tem os olhos cansados de quem já viu demais na escuridão das estradas. Você trata seu caminhão como um lar móvel e raramente cria raízes em um lugar por muito tempo. Para você, o perigo nunca está parado, ele sempre viaja com o vento da noite.', 7, 7, 4, 10, 1, 10, NULL, 'b965432f-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL),
('385fe266-b519-4667-8d59-5d9ad1bf3d19', 'Rafael Mourão', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:58.000', '2026-07-09 17:15:58.000', 'assets/portraits/rafael_mourao.png', 'Estudante', 'Arquiteto', 'Durão', NULL, 'Rafael Mourão era estudante de direito em Curitiba nos anos 70, um filho de família tradicional que não conseguia fechar os olhos para as injustiças ao redor. Envolvido com movimentos estudantis clandestinos durante a ditadura, foi abraçado por um Brujah que reconheceu nele o mesmo fogo que move todos os membros do clã. Hoje navega entre sua lealdade ao clã e suas convicções pessoais, tentando não perder nem uma nem outra.', 'Você ainda acredita que pode mudar as coisas de dentro do sistema. É uma visão ingênua, mas é a que te mantém em pé. Cuidado para que a Paixão Ardente não te queime antes da hora.', 7, 7, 4, 10, 10, 10, 'b9642f5a-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('3b619f01-b885-43b0-8c93-ca40fedb5f4d', 'Severo Fournier', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:58.000', '2026-07-09 17:15:58.000', 'assets/portraits/severo_fournier.png', 'Professor', 'Fanático', 'Sobrevivente', NULL, 'Severo tinha tudo: uma bela esposa, filhos obedientes, um ótimo emprego como professor universitário. Mas então um pergaminho estranho lhe foi enviado para tradução, e em pouco tempo ele perdeu tudo. Sua família foi assassinada, seu emprego retirado. Aquele pergaminho continha um fragmento do Livro de Nod, e Severo acabou sendo abraçado como medida para impedir a existência dos vampiros de ser levada a público.', 'Você odeia o clã, mas o laço de sangue é forte demais. Então você decidiu se tornar alguém em posição de liderança, para um dia se vingar. Você é frio e calculista, e finge ser um peão leal. Um dia, eles verão a verdade.', 7, 7, 4, 10, 10, 10, 'b964ab26-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('3e164f99-8716-4df2-ad99-f74c544f2450', 'Tânia \'Gatilha\' Souza', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:44.000', '2026-07-09 17:19:44.000', 'assets/portraits/t_nia_gatilha_souza.png', 'Armeira e Contrabandista de Munição', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, '96219f58-8f23-4b48-a8c8-32a2d5885567'),
('43846bc8-6385-4d07-b742-b9b4de21bd10', 'Ingrid \'Quebra-Escudos\' Wolf', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000', 'assets/portraits/ingrid_quebra-escudos_wolf.png', 'Soldado de Choque e Renegada', NULL, NULL, NULL, 'Ingrid foi treinada desde cedo por uma célula extremista das Crias de Fenris no interior do Paraná. Eles ensinavam que a Nação Garou era fraca e que todos os humanos deveriam ser exterminados para salvar Gaia. Quando sua Primeira Mudança ocorreu em um acampamento de treinamento militarizado, ela viu seus antigos mentores massacrando uma vila de camponeses inocentes apenas por estarem perto de uma área de mata. Horrorizada com a loucura de sua própria tribo, ela usou suas lâminas para matar seus instrutores e salvar os sobreviventes humanos. Desde então, ela vive como renegada, caçada tanto pelos fanáticos do Culto de Fenris quanto pelas outras tribos que não confiam em seu sangue.', 'Você é dura, cicatrizada e direta. Você fala apenas o necessário e prefere que suas ações em combate mostrem sua lealdade. Você vive sob um estresse absurdo; sabe que um deslize violento seu fará com que as pessoas digam \'eu avisei, ela é uma Fenris enlouquecida\'. Você luta o dobro para provar que ainda há honra na sua linhagem.', 7, 7, 5, 10, 2, 10, NULL, 'a8d60cb2-9eb3-4e44-ab9a-3543e221f88b', NULL, NULL),
('4654d49f-5ea8-487b-baf6-510f51f0c0bd', 'Cauã \'Sangue-na-Terra\'', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:39.000', '2026-07-09 17:19:39.000', 'assets/portraits/caua_sangue_na_terra.png', 'Predador de Fronteira', NULL, NULL, NULL, 'Nascido em uma reserva ambiental na Serra do Mar, no Paraná, Cauã teve pouco contato com humanos até sua Primeira Mudança. Ele testemunhou grileiros e caçadores furtivos dizimando a fauna local para vender terras a fazendeiros. Certo dia, um desses caçadores atirou nele, despertando sua Fúria Crinos. Cauã estripou o acampamento inteiro. Hoje, ele atua nas bordas da civilização, vigiando as rodovias que cortam a floresta e garantindo que quem ousa caçar na mata vire a própria presa.', 'Você não confia em máquinas, dinheiro ou palavras bonitas. Sua linguagem corporal é a de um lobo: você rosna quando ameaçado, encara nos olhos para demonstrar dominância e prefere dormir no chão. Você tolera os Andarilhos do Asfalto e outras tribos urbanas apenas enquanto forem úteis para a guerra, mas no fundo acha que eles são animais de estimação da humanidade.', 7, 7, 6, 10, 1, 10, NULL, 'b37bc5a3-5987-4d6b-9458-6ab5248f3418', NULL, NULL),
('50b4b6cb-90d0-48b8-8e06-955fa443f747', 'Augusto \'Gloom\' Penteado', 'MAGE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000', 'assets/portraits/augusto_gloom_penteado.png', 'Dono de Brechó e Necromante Amador', 'Plebiscitário / Cínico', 'Gozador', NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, 'e5c887be-12e4-44bd-a04d-f998c137a51d', NULL),
('52853423-896a-4c78-8d02-a90b4a0fcc05', 'Beatriz \'Tarantela\' Valente', 'MAGE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000', 'assets/portraits/beatriz_tarantela_valente.png', NULL, 'Inovador', 'Galante', NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, '44f14747-3925-4b05-8273-d9cb6ee41053', NULL),
('56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', 'Juliana \'Juju\' Cavalcanti', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000', 'assets/portraits/juliana_juju_cavalcanti.png', 'Entregadora de Aplicativo e Ex-Boxeadora', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, '96219f58-8f23-4b48-a8c8-32a2d5885567'),
('5728e84c-2a60-4622-84da-d86d1adc9a14', 'Djalma Dutra', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:57.000', '2026-07-09 17:15:57.000', 'assets/portraits/djalma_dutra.png', 'Motoqueira', 'Sobrevivente', 'Durão', NULL, 'Djalma não parece uma Toreador típica, e não é. Desordeira, criminosa, violenta, esquentada... ela tinha tudo para se tornar uma presidiária. Visada por um Brujah para se tornar mais uma cria em sua gangue, Djalma foi capturada e abraçada por uma Toreador como uma manobra política. Após cumprir seu papel nos planos de sua Senhora, Djalma foi liberada da servidão e esquecida pelo clã. Mas ela não é o tipo de pessoa a ficar esquecida por muito tempo.', 'Você foi usada, abusada e descartada. Você é um tanto estourada, e ainda acha que uma boa mão na cara resolve muita coisa. Se eles te deram algumas habilidades, você vai usar.', 7, 7, 4, 10, 10, 10, 'b9649cdf-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('58630d0d-5df2-4d36-b895-c1f94731f7d0', 'Thiago \'Olha-o-Abismo\' Guató', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:16:00.000', '2026-07-09 17:16:00.000', 'assets/portraits/thiago_olha_o_abismo_guato.png', 'Ocultista e Guardião de Relíquias', NULL, NULL, NULL, 'Thiago cresceu no interior do Paraná, fascinado pelas lendas locais e ruínas jesuíticas esquecidas na mata. Ele passava as noites estudando livros antigos de demonologia e folclore indígena. Durante uma expedição solitária em uma caverna usada para rituais de sacrifício por uma seita ligada ao Wyrm, ele tocou em um ídolo de pedra negra. O objeto tentou devorar sua alma, mas a centelha Garou em seu sangue despertou para repelir a criatura. Thiago quebrou o ídolo e baniu o espírito maligno de volta para a Umbra Profunda. Desde então, ele foi adotado pelo Conselho dos Fantasmas para caçar relíquias amaldiçoadas e reforçar os selos místicos que impedem os monstros do passado de acordar.', 'Você fala baixo, observa muito e parece estar sempre olhando para algo atrás das pessoas. Suas roupas são velhas e cobertas de símbolos de proteção. Você não tem pressa; sabe que os maiores erros acontecem quando as pessoas agem sem entender o oculto. Para você, as garras limpam a carne, mas apenas o conhecimento místico limpa a alma da terra.', 7, 7, 5, 10, 1, 10, NULL, 'b6c7fbdd-3ffc-4746-a75a-1d3d2ebe58c6', NULL, NULL),
('6cf5e879-2cfb-4a06-8e33-83913386e5fe', 'Aristeu Nogueira', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:56.000', '2026-07-09 17:15:56.000', 'assets/portraits/aristeu_nogueira.png', 'Artista', 'Penitente', 'Gozador', NULL, 'A vida nunca foi difícil para Aristeu, pois ele nasceu dotado de beleza. Filho único de família de classe média, ele se tornou modelo infantil com seis anos. Após entrevista para participar de um curta-metragem ele encontrou a bela produtora do projeto, e ambos iniciaram um caso. Ela era um membro da Camarilla, e em um impulso de momento, Aristeu foi abraçado. Sua Senhora foi destruída por abraçar sem permissão do Príncipe.', 'Você não queria ser um vampiro, e sequer sabia que sua amante era uma vampira. Por fora, você age como se não ligasse para nada e faz piadas com tudo, mas internamente você teme o Príncipe horrivelmente.', 7, 7, 2, 10, 10, 10, 'b9649cdf-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('6f026cb2-a499-4b37-9108-b29a683c4746', 'Gabriela \'Ping\' Torres', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000', 'assets/portraits/gabriela_ping_torres.png', 'Técnica de Monitoramento de Segurança', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, 'dce50de7-fbbc-448f-91bd-24d183875882'),
('79c5d5d1-39c0-4617-a516-320602bee9af', 'Djalma Dutra', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:38.000', '2026-07-09 17:19:38.000', 'assets/portraits/djalma_dutra.png', 'Motoqueira', 'Sobrevivente', 'Durão', NULL, 'Djalma não parece uma Toreador típica, e não é. Desordeira, criminosa, violenta, esquentada... ela tinha tudo para se tornar uma presidiária. Visada por um Brujah para se tornar mais uma cria em sua gangue, Djalma foi capturada e abraçada por uma Toreador como uma manobra política. Após cumprir seu papel nos planos de sua Senhora, Djalma foi liberada da servidão e esquecida pelo clã. Mas ela não é o tipo de pessoa a ficar esquecida por muito tempo.', 'Você foi usada, abusada e descartada. Você é um tanto estourada, e ainda acha que uma boa mão na cara resolve muita coisa. Se eles te deram algumas habilidades, você vai usar.', 7, 7, 4, 10, 10, 10, 'b9649cdf-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', 'Marcos \'Dólar\' Camargo', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:44.000', '2026-07-09 17:19:44.000', 'assets/portraits/marcos_d_lar_camargo.png', 'Falsificador de Documentos e Estelionatário', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, '7cdf1014-6ad5-47b8-82dc-4d14684bc476'),
('7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'André de Albuquerque Maranhão', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:37.000', '2026-07-09 17:19:37.000', 'assets/portraits/andre_maranhao.png', 'Profissional', 'Galante', 'Diretor', NULL, 'André é o típico exemplar de homem de sucesso. Ele começou do zero, um desconhecido cuja única vantagem era um sobrenome tradicional na sociedade paulista, ele construiu uma tremenda fortuna e adquiriu uma grande influência no setor de construção de São Paulo. Chamando a atenção de uma Ventrue que desejava seus recursos, ele acabou se tornando sua cria. Quando o Sabá atacou São Paulo (há 30 anos) e causou grandes estragos aos membros da cidade, ele sobreviveu e sua senhora não. Então ele abraçou a oportunidade, se mudou para Curitiba, e agora já é o responsável por uma empresa crescente e de sucesso na cidade.', 'Você é um profissional, educado e sob controle. Suas ambições são grandes, mas você sabe esperar a hora certa para fazer e cobrar favores. Quando você decide permitir que suas paixões aflorem, pessoas morrem.', 7, 7, 4, 10, 10, 10, 'b964c822-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('7d982347-90b4-4454-9d6f-0103e31f84e3', 'Melissa \'Anúbis\' Santiago', 'MAGE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000', 'assets/portraits/melissa_anubis_santiago.png', 'Médica Legista e Assassina do Carma', 'Penitente', 'Durão', NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, 'b965eea9-7bb2-11f1-a1c9-e89e5efddb4f', NULL),
('83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', 'Elisa Kauffmann Abramovich', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:57.000', '2026-07-09 17:15:57.000', 'assets/portraits/elisa_abramovich.png', 'Assassina', 'Tradicionalista', 'Caçador de Emoções', NULL, 'A história de Elisa é considerada comum para as mulheres nascidas no começo do século passado: inteligente, via todas as oportunidades de aprendizado passarem fora de seu alcance. Um tutor percebeu seu talento místico e ela foi recrutada para o clã Tremere. Seu talento para as linhas taumatúrgicas impressionou seus colegas. Hoje Elisa é a Mão Esquerda de Lis Losentaff — ela executa os alvos definidos.', 'Você é mais velha e poderosa do que os neófitos comuns. O machismo a incomoda, mas o feminismo atual a irrita. Você acredita em tradição, respeito, hierarquia, ordem. Os únicos momentos em que você libera suas emoções é quando o fogo corre por seus dedos.', 7, 7, 5, 10, 10, 10, 'b964ab26-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('8db861e1-cd37-4702-9560-7fe22f1fcb5a', 'Antônio Canellas', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:56.000', '2026-07-09 17:15:56.000', 'assets/portraits/antonio_canellas.png', 'Malandro', 'Esperto', 'Caçador de Emoções', NULL, 'Antônio não é um Gangrel típico, ele é um habitante da selva de pedra. Amante da civilização, ele nunca teve as inclinações selvagens que se espera de um Nômade. Assim que foi liberado por seu Senhor, Antônio passou a usar suas habilidades para conseguir conforto e segurança. Hoje ele possui um prédio no centro de Curitiba, um estacionamento vertical que serve de fachada para diversos negócios escusos.', 'Você é um marginal boa pinta, um ladrão de carros que bebe o sangue de algumas pessoas que vêm estacionar os carros em seu estabelecimento. Você é um malandro, sedutor, que sabe o valor das amizades.', 7, 7, 4, 10, 10, 10, 'b96440ad-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('8dc036c2-e800-46be-a13d-5cf69d53f840', 'teste', 'VAMPIRE', 0, 0, 0, 0, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-07 19:11:25.330', '2026-07-07 19:17:58.996', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('90ab2b43-00ec-492c-83fb-6299c62f1a3e', 'Murilo \'Root\' Silveira', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000', 'assets/portraits/murilo_root_silveira.png', 'Místico Digital', NULL, NULL, NULL, 'Murilo era um analista de segurança digital sênior em um polo tecnológico em Campinas, SP. Durante uma auditoria em um servidor fantasma de uma subsidiária da Pentex, ele encontrou linhas de código que não faziam sentido lógico, parecendo uma linguagem ritualística codificada. Ao quebrar a criptografia, a presença espiritual da Teia invadiu sua mente, engatilhando sua Primeira Mudança no meio do escritório. Ele foi resgatado por uma matilha urbana e hoje usa computadores modificados e antenas místicas para mapear os movimentos industriais do Wyrm diretamente pela deep web.', 'Você é focado, pragmático e enxerga o mundo místico como um grande sistema operacional. Para você, os espíritos são programas e a Umbra é a grande rede. Você prefere resolver os problemas derrubando a infraestrutura digital e financeira dos inimigos antes que a matilha precise puxar as garras.', 7, 7, 5, 10, 1, 10, NULL, 'b96551fa-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL),
('9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', 'Sérgio \'Muralha\' Ribeiro', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:44.000', '2026-07-09 17:19:44.000', 'assets/portraits/s_rgio_muralha_ribeiro.png', 'Paramédico e Motorista do SAMU', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, '03aca330-a92c-444f-a5b6-9045b1997866'),
('9de148ce-7d82-46e7-a389-8c5dc1634396', 'Ariel \'Dente-de-Gelo\' Mello', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000', 'assets/portraits/arieldentedegelomello.png', 'Sobrevivente de Montanha e Rastreador', NULL, NULL, NULL, 'Ariel cresceu na região mais fria do Brasil, nos planaltos serranos de Santa Catarina e Rio Grande do Sul. Ele trabalhava como guia de ecoturismo e resgate em fendas de difícil acesso. Durante um inverno rigoroso com forte geada, ele liderou as buscas por um grupo de técnicos de uma mineradora estrangeira que haviam sumido na mata alta. Ao encontrá-los, descobriu que eles estavam realizando testes químicos sigilosos que estavam matando as nascentes de água locais. Quando os técnicos o ameaçaram com armas pesadas, a brutalidade do vento gelado ecoou em seu sangue e Ariel passou pela Primeira Mudança. O inverno cobriu o sangue dos técnicos mortos. Hoje ele vigia as fronteiras frias, caçando qualquer indústria que queira usar o isolamento das montanhas para mascarar crimes contra o planeta.', 'Você é direto, seco e não gasta palavras com amenidades. Suas emoções são como o gelo: duras por fora, mas capazes de quebrar estruturas com enorme violência. Você não suporta ambientes abafados ou o calor caótico das capitais e prefere a clareza e a solidão das altitudes.', 7, 7, 5, 10, 1, 10, NULL, 'b16cafa4-9786-4b23-85ad-0fb894cf5442', NULL, NULL),
('a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', 'Thiago \'Lente\' Bastos', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:44.000', '2026-07-09 17:19:44.000', 'assets/portraits/thiago_lente_bastos.png', 'Fotógrafo Policial e Perito', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, '7cdf1014-6ad5-47b8-82dc-4d14684bc476'),
('a64f21f3-63e9-448a-9491-f7d69f333829', 'Marcos \'Coveiro\' Lima', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000', 'assets/portraits/marcos_coveiro_lima.png', 'Segurança de Cemitério e Ex-Militar', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, '03aca330-a92c-444f-a5b6-9045b1997866'),
('a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', 'Nuta James', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:58.000', '2026-07-09 17:15:58.000', 'assets/portraits/nuta_james.png', 'Acompanhante', 'Celebrante', 'Bon Vivant', NULL, 'Nuta tinha uma vida de prazeres e sucesso. Ela recebia vários rótulos: Modelo, atriz, amante, prostituta. Sua beleza era tida como uma das mais desejáveis de Curitiba. Infelizmente tais qualidades lhe concederam a indesejável atenção de um influente e imoral político, o qual destruiu sua vida por meio de drogas. Destruída, ela recebeu uma proposta na sarjeta: sua beleza em troca da oportunidade de vingança.', 'Você pode ser horripilante, mas ainda sabe aproveitar a boa vida. Sua disciplina permite enganar quase todos. O maldito que arruinou sua vida já apodreceu há muito tempo, mas canalhas existem aos montes.', 7, 7, 3, 10, 10, 10, 'b9646e10-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('af9e52c3-d295-4d44-9150-58172b10d798', 'Renan \'Punho-Vazio\' Nakashima', 'MAGE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000', 'assets/portraits/renan_punho_vazio_nakashima.png', 'Lutador de MMA e Monge Urbano', 'Competidor', 'Durão', NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, 'b9660d2a-7bb2-11f1-a1c9-e89e5efddb4f', NULL),
('b424c935-b69d-4b11-8812-aba3546736eb', 'Nuta James', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:39.000', '2026-07-09 17:19:39.000', 'assets/portraits/nuta_james.png', 'Acompanhante', 'Celebrante', 'Bon Vivant', NULL, 'Nuta tinha uma vida de prazeres e sucesso. Ela recebia vários rótulos: Modelo, atriz, amante, prostituta. Sua beleza era tida como uma das mais desejáveis de Curitiba. Infelizmente tais qualidades lhe concederam a indesejável atenção de um influente e imoral político, o qual destruiu sua vida por meio de drogas. Destruída, ela recebeu uma proposta na sarjeta: sua beleza em troca da oportunidade de vingança.', 'Você pode ser horripilante, mas ainda sabe aproveitar a boa vida. Sua disciplina permite enganar quase todos. O maldito que arruinou sua vida já apodreceu há muito tempo, mas canalhas existem aos montes.', 7, 7, 3, 10, 10, 10, 'b9646e10-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('b4ba6f70-890d-454a-a3e9-4cac04525268', 'Logan', 'VAMPIRE', 0, 0, 0, 0, '534cfda8-25d9-4fc5-95a9-3607d5adae68', '2026-07-04 18:53:20.512', '2026-07-04 18:53:20.512', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 1, 1, 1, NULL, NULL, NULL, NULL),
('bc1df692-72d3-4d95-ae68-f273e1f110f3', 'Pastor Jonas Ramos', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:44.000', '2026-07-09 17:19:44.000', 'assets/portraits/pastor_jonas_ramos.png', 'Líder Religioso e Ex-Capelão Prisional', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, 'e09ad55a-aeeb-46da-9d86-1ad46cd88a4c'),
('bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', 'Valdir \'Velho\' Albuquerque', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:44.000', '2026-07-09 17:19:44.000', 'assets/portraits/valdir_velho_albuquerque.png', 'Agiota e Dono de Cortiço', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, 'e09ad55a-aeeb-46da-9d86-1ad46cd88a4c'),
('c46e08d1-83aa-492a-9b73-8080fc3429ca', 'Elisa Kauffmann Abramovich', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:38.000', '2026-07-09 17:19:38.000', 'assets/portraits/elisa_abramovich.png', 'Assassina', 'Tradicionalista', 'Caçador de Emoções', NULL, 'A história de Elisa é considerada comum para as mulheres nascidas no começo do século passado: inteligente, via todas as oportunidades de aprendizado passarem fora de seu alcance. Um tutor percebeu seu talento místico e ela foi recrutada para o clã Tremere. Seu talento para as linhas taumatúrgicas impressionou seus colegas. Hoje Elisa é a Mão Esquerda de Lis Losentaff — ela executa os alvos definidos.', 'Você é mais velha e poderosa do que os neófitos comuns. O machismo a incomoda, mas o feminismo atual a irrita. Você acredita em tradição, respeito, hierarquia, ordem. Os únicos momentos em que você libera suas emoções é quando o fogo corre por seus dedos.', 7, 7, 5, 10, 10, 10, 'b964ab26-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('c848366b-b82b-4859-a217-e4b0b878dee1', 'Vitor \'Corta-Garganta\' Peixoto', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:16:00.000', '2026-07-09 17:16:00.000', 'assets/portraits/vitor_corta_garganta_peixoto.png', 'Político Corruptor', NULL, NULL, NULL, 'Vitor sempre soube como os bastidores do poder funcionam em Curitiba. Ele atuava como lobista e articulador de campanhas políticas, subornando vereadores e costurando acordos escusos para grandes empreiteiras. Sua Primeira Mudança ocorreu quando um desses acordos envolveu o descarte ilegal de resíduos químicos industriais diretamente sobre um território de mata nativa que continha um santuário espiritual. Quando ele percebeu o erro que havia cometido, os agentes do Wyrm tentaram assassiná-lo. Vitor se transformou, esquartejou os capangas e usou sua influência para colocar a culpa em um assalto comum. Ele assumiu o manto dos Senhores das Sombras para caçar aqueles que tentaram usá-lo.', 'Você não é um herói idealista. Você sabe que o mundo é movido a favores, chantagem e medo. Você usa sorrisos falsos e discursos eloquentes para colocar seus inimigos humanos exatamente onde você quer. Para você, a Nação Garou está perdendo a guerra porque é ingênua demais; o Wyrm deve ser combatido com as armas dele: traição, poder financeiro e facas nas costas.', 7, 7, 5, 10, 1, 10, NULL, 'b96502a2-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL),
('c8bbed56-707d-40d5-ae62-d8318ede5974', 'Dr. Ricardo Malta', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000', 'assets/portraits/dr_ricardo_malta.png', 'Promotor de Justiça e Auditor', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, 'e09ad55a-aeeb-46da-9d86-1ad46cd88a4c'),
('ca314ab3-288f-4421-838a-4f4c410d21eb', 'Dr. Arthur \'Volt\' Von Éter', 'MAGE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000', 'assets/portraits/dr_arthur_volt_von_eter.png', 'Cientista de Garagem e Inventor Elétrico', 'Inovador', 'Gozador', NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, 'b965fdd8-7bb2-11f1-a1c9-e89e5efddb4f', NULL),
('cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'Clara \'Glitch\' Medeiros', 'MAGE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000', 'assets/portraits/clara_glitch_medeiros.png', 'Engenheira de Redes e Ativista Digital', 'Rebelde', 'Esperto', NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, '40d4fda0-c64d-4ad1-bd54-421b817a4a19', NULL),
('cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', 'Murilo \'Root\' Silveira', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000', 'assets/portraits/murilo_root_silveira.png', 'Místico Digital', NULL, NULL, NULL, 'Murilo era um analista de segurança digital sênior em um polo tecnológico em Campinas, SP. Durante uma auditoria em um servidor fantasma de uma subsidiária da Pentex, ele encontrou linhas de código que não faziam sentido lógico, parecendo uma linguagem ritualística codificada. Ao quebrar a criptografia, a presença espiritual da Teia invadiu sua mente, engatilhando sua Primeira Mudança no meio do escritório. Ele foi resgatado por uma matilha urbana e hoje usa computadores modificados e antenas místicas para mapear os movimentos industriais do Wyrm diretamente pela deep web.', 'Você é focado, pragmático e enxerga o mundo místico como um grande sistema operacional. Para você, os espíritos são programas e a Umbra é a grande rede. Você prefere resolver os problemas derrubando a infraestrutura digital e financeira dos inimigos antes que a matilha precise puxar as garras.', 7, 7, 5, 10, 1, 10, NULL, 'b96551fa-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL),
('d0427c26-036b-41ff-85df-2153326cbaa3', 'Gabriela \'Cinzas\' da Silva', 'MAGE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000', 'assets/portraits/gabriela_cinzas_da_silva.png', 'Herbalista e Parteira de Comunidade', 'Sobrevivente', 'Durão', NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, 'b9663b4c-7bb2-11f1-a1c9-e89e5efddb4f', NULL);
INSERT INTO `Character` (`id`, `name`, `gameStyle`, `experienceTotal`, `experienceSpent`, `isNpc`, `isTemplate`, `userId`, `createdAt`, `updatedAt`, `avatarUrl`, `concept`, `nature`, `demeanor`, `chronicle`, `history`, `roleplayHints`, `health`, `maxHealth`, `willpower`, `maxWillpower`, `energy`, `maxEnergy`, `vampireClaId`, `werewolfTribeId`, `mageTraditionId`, `hunterCreedId`) VALUES
('d1d425b0-e41d-4982-bc1c-ae39353d620c', 'Cauã \'Sangue-na-Terra\'', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000', 'assets/portraits/caua_sangue_na_terra.png', 'Predador de Fronteira', NULL, NULL, NULL, 'Nascido em uma reserva ambiental na Serra do Mar, no Paraná, Cauã teve pouco contato com humanos até sua Primeira Mudança. Ele testemunhou grileiros e caçadores furtivos dizimando a fauna local para vender terras a fazendeiros. Certo dia, um desses caçadores atirou nele, despertando sua Fúria Crinos. Cauã estripou o acampamento inteiro. Hoje, ele atua nas bordas da civilização, vigiando as rodovias que cortam a floresta e garantindo que quem ousa caçar na mata vire a própria presa.', 'Você não confia em máquinas, dinheiro ou palavras bonitas. Sua linguagem corporal é a de um lobo: você rosna quando ameaçado, encara nos olhos para demonstrar dominância e prefere dormir no chão. Você tolera os Andarilhos do Asfalto e outras tribos urbanas apenas enquanto forem úteis para a guerra, mas no fundo acha que eles são animais de estimação da humanidade.', 7, 7, 6, 10, 1, 10, NULL, 'b37bc5a3-5987-4d6b-9458-6ab5248f3418', NULL, NULL),
('d3447e2c-91b1-43c3-ba23-a72cbe35cb10', 'Aristeu Nogueira', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:37.000', '2026-07-09 17:19:37.000', 'assets/portraits/aristeu_nogueira.png', 'Artista', 'Penitente', 'Gozador', NULL, 'A vida nunca foi difícil para Aristeu, pois ele nasceu dotado de beleza. Filho único de família de classe média, ele se tornou modelo infantil com seis anos. Após entrevista para participar de um curta-metragem ele encontrou a bela produtora do projeto, e ambos iniciaram um caso. Ela era um membro da Camarilla, e em um impulso de momento, Aristeu foi abraçado. Sua Senhora foi destruída por abraçar sem permissão do Príncipe.', 'Você não queria ser um vampiro, e sequer sabia que sua amante era uma vampira. Por fora, você age como se não ligasse para nada e faz piadas com tudo, mas internamente você teme o Príncipe horrivelmente.', 7, 7, 2, 10, 10, 10, 'b9649cdf-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('d3539a15-8752-4837-a88b-143d9adeeede', 'Mariana Alencar', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000', 'assets/portraits/mariana_alencar.png', 'Vigilante Forense', NULL, NULL, NULL, 'Mariana trabalhava como investigadora forense em Curitiba, lidando diariamente com o pior lado da humanidade em casos de violência doméstica e abusos corporativos. Ela se frustrava ao ver criminosos influentes escapando por corrupção ou falhas jurídicas. Seu despertar aconteceu ao periciar um cativeiro mantido por um alto executivo ligado a uma empresa de fachada da Pentex. O horror da cena liberou sua Fúria. Ela rasgou o agressor antes que a patrulha chegasse. Ela alterou os laudos e encobriu o próprio crime na polícia; hoje usa o distintivo para caçar monstros.', 'Você mantém a postura séria, formal e fria de uma investigadora técnica, mas por dentro há uma tempestade de julgamento místico. Você é o juiz e o carrasco. Quando você interroga alguém, a verdade aparece por bem ou pelas garras.', 7, 7, 5, 10, 1, 10, NULL, 'b9652288-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL),
('dd3a584e-a71a-4c50-a9dd-efd31f3a491a', 'Carlos \'Kadu\' Fagundes', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000', 'assets/portraits/carlos_kadu_fagundes.png', 'Segurança Particular e Ex-Gângster', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, '96219f58-8f23-4b48-a8c8-32a2d5885567'),
('dee555ea-d9c6-407d-9de5-646bfdc07325', 'André de Albuquerque Maranhão', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:56.000', '2026-07-09 17:15:56.000', 'assets/portraits/andre_maranhao.png', 'Profissional', 'Galante', 'Diretor', NULL, 'André é o típico exemplar de homem de sucesso. Ele começou do zero, um desconhecido cuja única vantagem era um sobrenome tradicional na sociedade paulista, ele construiu uma tremenda fortuna e adquiriu uma grande influência no setor de construção de São Paulo. Chamando a atenção de uma Ventrue que desejava seus recursos, ele acabou se tornando sua cria. Quando o Sabá atacou São Paulo (há 30 anos) e causou grandes estragos aos membros da cidade, ele sobreviveu e sua senhora não. Então ele abraçou a oportunidade, se mudou para Curitiba, e agora já é o responsável por uma empresa crescente e de sucesso na cidade.', 'Você é um profissional, educado e sob controle. Suas ambições são grandes, mas você sabe esperar a hora certa para fazer e cobrar favores. Quando você decide permitir que suas paixões aflorem, pessoas morrem.', 7, 7, 4, 10, 10, 10, 'b964c822-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('e197f398-16cb-4037-a4f7-71f51df4bb69', 'Benito \'Rato\' Souza', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000', 'assets/portraits/benito_rato_souza.png', 'Técnico de Manutenção de Esgotos (SABESP)', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, 'dce50de7-fbbc-448f-91bd-24d183875882'),
('e3324aa2-c101-4e59-af43-d9c52d149db5', 'Bruno \'Fumaça\' Dias', 'HUNTER', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000', 'assets/portraits/bruno_fuma_a_dias.png', 'Olheiro de Tráfico e Vapor', NULL, NULL, NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, NULL, 'dce50de7-fbbc-448f-91bd-24d183875882'),
('e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', 'Luísa Mahin', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:58.000', '2026-07-09 17:15:58.000', 'assets/portraits/luisa_mahin.png', 'Diletante', 'Celebrante', 'Bon Vivant', NULL, 'Luísa sempre teve a atitude errada na hora errada. Primogênita nascida em família rica e influente no Rio de Janeiro, desde cedo demonstrava que a vida da alta sociedade não servia para ela. Deserdada ao agredir seu noivo (casamento arranjado pelos pais), ela acabou envolvida com pessoas perigosas, o que a levou aos braços e presas de seu senhor, um Brujah criminoso. Eventualmente ela escapou, buscando refúgio em Curitiba.', 'Você é dona de seu próprio nariz, e isso você jamais esquece. Nestor ajudou você em um momento difícil, e você ainda irá pagar sua bondade. Baladas, bebidas, sexo: cada noite é uma nova noite.', 7, 7, 5, 10, 10, 10, 'b9642f5a-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('e66836b3-1c0d-4cb3-ac3e-f176fa440395', 'Mariana Alencar', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000', 'assets/portraits/mariana_alencar.png', 'Vigilante Forense', NULL, NULL, NULL, 'Mariana trabalhava como investigadora forense em Curitiba, lidando diariamente com o pior lado da humanidade em casos de violência doméstica e abusos corporativos. Ela se frustrava ao ver criminosos influentes escapando por corrupção ou falhas jurídicas. Seu despertar aconteceu ao periciar um cativeiro mantido por um alto executivo ligado a uma empresa de fachada da Pentex. O horror da cena liberou sua Fúria. Ela rasgou o agressor antes que a patrulha chegasse. Ela alterou os laudos e encobriu o próprio crime na polícia; hoje usa o distintivo para caçar monstros.', 'Você mantém a postura séria, formal e fria de uma investigadora técnica, mas por dentro há uma tempestade de julgamento místico. Você é o juiz e o carrasco. Quando você interroga alguém, a verdade aparece por bem ou pelas garras.', 7, 7, 5, 10, 1, 10, NULL, 'b9652288-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL),
('e7673626-500d-4251-aa90-85e6b9d50a23', 'Luísa Mahin', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:38.000', '2026-07-09 17:19:38.000', 'assets/portraits/luisa_mahin.png', 'Diletante', 'Celebrante', 'Bon Vivant', NULL, 'Luísa sempre teve a atitude errada na hora errada. Primogênita nascida em família rica e influente no Rio de Janeiro, desde cedo demonstrava que a vida da alta sociedade não servia para ela. Deserdada ao agredir seu noivo (casamento arranjado pelos pais), ela acabou envolvida com pessoas perigosas, o que a levou aos braços e presas de seu senhor, um Brujah criminoso. Eventualmente ela escapou, buscando refúgio em Curitiba.', 'Você é dona de seu próprio nariz, e isso você jamais esquece. Nestor ajudou você em um momento difícil, e você ainda irá pagar sua bondade. Baladas, bebidas, sexo: cada noite é uma nova noite.', 7, 7, 5, 10, 10, 10, 'b9642f5a-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('e8285381-459e-464d-b4cc-240068000369', 'Padre Gabriel \'Voz-do-Trono\' Mendes', 'MAGE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000', 'assets/portraits/padre_gabriel_voz_do_trono_mendes.png', 'Pároco de Periferia e Exorcista', 'Cuidador', 'Tradicionalista', NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, 'b965cf12-7bb2-11f1-a1c9-e89e5efddb4f', NULL),
('e9cea982-eba9-408a-a911-a208b0ac774d', 'Thiago \'Olha-o-Abismo\' Guató', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000', 'assets/portraits/thiago_olha_o_abismo_guato.png', 'Ocultista e Guardião de Relíquias', NULL, NULL, NULL, 'Thiago cresceu no interior do Paraná, fascinado pelas lendas locais e ruínas jesuíticas esquecidas na mata. Ele passava as noites estudando livros antigos de demonologia e folclore indígena. Durante uma expedição solitária em uma caverna usada para rituais de sacrifício por uma seita ligada ao Wyrm, ele tocou em um ídolo de pedra negra. O objeto tentou devorar sua alma, mas a centelha Garou em seu sangue despertou para repelir a criatura. Thiago quebrou o ídolo e baniu o espírito maligno de volta para a Umbra Profunda. Desde então, ele foi adotado pelo Conselho dos Fantasmas para caçar relíquias amaldiçoadas e reforçar os selos místicos que impedem os monstros do passado de acordar.', 'Você fala baixo, observa muito e parece estar sempre olhando para algo atrás das pessoas. Suas roupas são velhas e cobertas de símbolos de proteção. Você não tem pressa; sabe que os maiores erros acontecem quando as pessoas agem sem entender o oculto. Para você, as garras limpam a carne, mas apenas o conhecimento místico limpa a alma da terra.', 7, 7, 5, 10, 1, 10, NULL, 'b6c7fbdd-3ffc-4746-a75a-1d3d2ebe58c6', NULL, NULL),
('ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'Pajeú', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:58.000', '2026-07-09 17:15:58.000', 'assets/portraits/pajeu.png', 'Caçadora', 'Sobrevivente', 'Celebrante', NULL, 'A Gangrel conhecida como Pajeú não tem a mais complexa das histórias. Sua família terminou na noite em que um grupo de membros passou pela região, incumbido de caçar um grupo de lobisomens. A jovem garota lutou até o fim, e antes de sucumbir conseguiu vencer um dos inimigos ao cortar sua cabeça com um facão. Em respeito a sua força, ela foi abraçada ali mesmo, recebendo o nome e o posto do vampiro que ela matou.', 'Deixe as frescuras para quem quer ser fresco. Você é um monstro, um animal, uma caçadora. Você respeita a força, despreza os fracos, e não tem muita serventia pra frouxos. Felizmente você é bonita, muito bonita: e isso é uma excelente arma.', 7, 7, 5, 10, 10, 10, 'b96440ad-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'Rafael Mourão', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:39.000', '2026-07-09 17:19:39.000', 'assets/portraits/rafael_mourao.png', 'Estudante', 'Arquiteto', 'Durão', NULL, 'Rafael Mourão era estudante de direito em Curitiba nos anos 70, um filho de família tradicional que não conseguia fechar os olhos para as injustiças ao redor. Envolvido com movimentos estudantis clandestinos durante a ditadura, foi abraçado por um Brujah que reconheceu nele o mesmo fogo que move todos os membros do clã. Hoje navega entre sua lealdade ao clã e suas convicções pessoais, tentando não perder nem uma nem outra.', 'Você ainda acredita que pode mudar as coisas de dentro do sistema. É uma visão ingênua, mas é a que te mantém em pé. Cuidado para que a Paixão Ardente não te queime antes da hora.', 7, 7, 4, 10, 10, 10, 'b9642f5a-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('f0be8449-b32b-4757-a081-0b8d96402541', 'Helena \'Voz-Serena\' Fontes', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000', 'assets/portraits/helena_voz_serena_fontes.png', 'Líder Comunitária e Curandeira', NULL, NULL, NULL, 'Helena foi criada em um bairro de periferia em São Paulo que sofria com poluição e descaso. Ela fundou uma ONG que transformava terrenos baldios em hortas comunitárias. Quando uma empreiteira (controlada sub-repticiamente pela Pentex) tentou incendiar o local para forçar a desocupação, Helena defendeu o terreno e sofreu sua Primeira Mudança. Em vez de massacrar os agressores, ela os neutralizou e usou a mídia e as provas para prender os mandantes. Hoje, ela é o pilar emocional de sua matilha, curando as feridas de seus aliados e tentando provar que há outros meios de vencer o Wyrm além de derramar sangue.', 'Você é a mãe da matilha. Você ouve as angústias dos outros membros e tenta impedir que eles sucumbam ao Hauglosk (fanatismo violento). Quando em perigo, você sempre tenta dialogar ou imobilizar os adversários humanos primeiro. Mas não se engane: quando se trata de espíritos do Wyrm ou monstros irremediáveis, sua fúria é tão devastadora quanto a de qualquer outro lobisomem.', 7, 7, 6, 10, 1, 10, NULL, '1a493dc5-22c0-4d15-995a-3bc8dbb05efe', NULL, NULL),
('f37fe62d-0129-4ed2-9234-a24286c5ee67', 'Thiago \'Espelho-Vazio\' Wu', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:16:00.000', '2026-07-09 17:16:00.000', 'assets/portraits/thiago_espelho_vazio_wu.png', NULL, NULL, NULL, NULL, 'Thiago nasceu no bairro da Liberdade, em São Paulo, e passou a juventude buscando respostas para a ansiedade caótica da cidade grande através de artes marciais e meditação zen. Sua Primeira Mudança ocorreu durante um retiro espiritual nas montanhas do Paraná, quando um grupo de capangas a serviço de uma mineradora ligada à Pentex invadiu a área sagrada para ameaçar os monges. Em vez de se entregar à fúria destrutiva comum, Thiago canalizou a Besta em movimentos fluidos e marciais em forma Glabro e Crinos, desarmando e neutralizando a ameaça com precisão cirúrgica sem derramar uma gota de sangue desnecessária. Ele foi acolhido pelos poucos Andarilhos do Espelho remanescentes no Brasil e agora atua como um conselheiro místico nas matilhas urbanas, ajudando os jovens Garou a não caírem no Hauglosk.', 'Você é a personificação da calma na tempestade. Suas palavras são poucas, mas carregam um peso filosófico imenso. Em combate, você prefere usar a força do próprio oponente contra ele (esquivas e imobilizações) em vez de ataques brutos. Para você, a guerra contra o Wyrm é vencida primeiro dentro da mente de cada Garou.', 7, 7, 6, 10, 1, 10, NULL, '4c70cb44-b968-4799-8993-a86b0d412314', NULL, NULL),
('f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'Pajeú', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:39.000', '2026-07-09 17:19:39.000', 'assets/portraits/pajeu.png', 'Caçadora', 'Sobrevivente', 'Celebrante', NULL, 'A Gangrel conhecida como Pajeú não tem a mais complexa das histórias. Sua família terminou na noite em que um grupo de membros passou pela região, incumbido de caçar um grupo de lobisomens. A jovem garota lutou até o fim, e antes de sucumbir conseguiu vencer um dos inimigos ao cortar sua cabeça com um facão. Em respeito a sua força, ela foi abraçada ali mesmo, recebendo o nome e o posto do vampiro que ela matou.', 'Deixe as frescuras para quem quer ser fresco. Você é um monstro, um animal, uma caçadora. Você respeita a força, despreza os fracos, e não tem muita serventia pra frouxos. Felizmente você é bonita, muito bonita: e isso é uma excelente arma.', 7, 7, 5, 10, 10, 10, 'b96440ad-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('fa4de05e-c20b-4500-be91-ae1a6e08d17f', 'Dulce Maia', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:38.000', '2026-07-09 17:19:38.000', 'assets/portraits/dulce_maia.png', 'Acompanhante', 'Competidor', 'Esperto', NULL, 'Dulce é uma personificação da ambição. Escolhida por uma Ventrue devido a sua beleza, ela foi transformada em carniçal, serviçal e amante daquela que acabaria por se tornar sua senhora. Inicialmente considerada apenas uma \'carinha bonita\', a perspicácia da jovem desconcerta alguns membros mais conservadores.', 'Você era julgada pela sua aparência, e aprendeu a usar isso a seu favor. Você parece uma patricinha, avoada e fútil; mas isso tudo é uma cortina de fumaça que esconde sua real personalidade.', 7, 7, 4, 10, 10, 10, 'b964c822-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('fc615238-98cd-4aae-8c93-45e8f12cde48', 'Daniel Gomes de Freitas', 'VAMPIRE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:38.000', '2026-07-09 17:19:38.000', 'assets/portraits/daniel_freitas.png', 'Estudante', 'Arquiteto', 'Durão', NULL, 'Daniel era um defensor das minorias em seu tempo de estudante, uma voz potente em meio às multidões. Esta pode ter sido a razão de ele ter sido abraçado, logo após ser fuzilado pelos militares em 66. Seu senhor era um infiltrado europeu, encarregado de vigiar a Camarilla brasileira durante os anos de ditadura. Agora Daniel ainda se envolve em problemas com o Principado de Curitiba devido aos seus atos de rebeldia.', 'Você ainda esquece a hora de ficar quieto, mas nunca desobedeceu quando a desobediência poderia causar sua destruição. Você viveu por uma causa, e morreu por ela. Agora sua causa é você mesmo.', 7, 7, 4, 10, 10, 10, 'b9642f5a-7bb2-11f1-a1c9-e89e5efddb4f', NULL, NULL, NULL),
('fcdac56a-8cd0-41bc-8e62-77fa943d3a32', 'Ariel \'Dente-de-Gelo\' Mello', 'WEREWOLF', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:39.000', '2026-07-09 17:19:39.000', 'assets/portraits/arieldentedegelomello.png', 'Sobrevivente de Montanha e Rastreador', NULL, NULL, NULL, 'Ariel cresceu na região mais fria do Brasil, nos planaltos serranos de Santa Catarina e Rio Grande do Sul. Ele trabalhava como guia de ecoturismo e resgate em fendas de difícil acesso. Durante um inverno rigoroso com forte geada, ele liderou as buscas por um grupo de técnicos de uma mineradora estrangeira que haviam sumido na mata alta. Ao encontrá-los, descobriu que eles estavam realizando testes químicos sigilosos que estavam matando as nascentes de água locais. Quando os técnicos o ameaçaram com armas pesadas, a brutalidade do vento gelado ecoou em seu sangue e Ariel passou pela Primeira Mudança. O inverno cobriu o sangue dos técnicos mortos. Hoje ele vigia as fronteiras frias, caçando qualquer indústria que queira usar o isolamento das montanhas para mascarar crimes contra o planeta.', 'Você é direto, seco e não gasta palavras com amenidades. Suas emoções são como o gelo: duras por fora, mas capazes de quebrar estruturas com enorme violência. Você não suporta ambientes abafados ou o calor caótico das capitais e prefere a clareza e a solidão das altitudes.', 7, 7, 5, 10, 1, 10, NULL, 'b16cafa4-9786-4b23-85ad-0fb894cf5442', NULL, NULL),
('fd489d17-6679-4bcf-9659-3a713f9fd26c', 'Augusto \'Solomon\' Valerius', 'MAGE', 0, 0, 1, 1, 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000', 'assets/portraits/augusto_solomon_valerius.png', 'Professor de Arquitetura e Hermetista', 'Perfeccionista', 'Diretor', NULL, NULL, NULL, 7, 7, 1, 10, 1, 10, NULL, NULL, 'b9662b48-7bb2-11f1-a1c9-e89e5efddb4f', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `CharacterAttribute`
--

CREATE TABLE `CharacterAttribute` (
  `id` varchar(191) NOT NULL,
  `characterId` varchar(191) NOT NULL,
  `attributeId` varchar(191) NOT NULL,
  `value` int(11) NOT NULL DEFAULT 1,
  `specialty` varchar(191) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `CharacterAttribute`
--

INSERT INTO `CharacterAttribute` (`id`, `characterId`, `attributeId`, `value`, `specialty`, `description`) VALUES
('002774c9-4ecd-47c5-81df-949dbeb750e8', 'af9e52c3-d295-4d44-9150-58172b10d798', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('004172fe-a82e-4d86-ac0b-63343f3b6715', '2cd6e835-681b-482e-976a-e8066a9c6252', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('014e3f88-7f8f-4f82-9397-36f3ab0c2d11', 'f37fe62d-0129-4ed2-9234-a24286c5ee67', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 4, NULL, NULL),
('01b863d3-31d4-4de3-b75f-651656089f1f', '214e2ef6-9fa5-4621-855f-259f171ece90', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('01f75764-2a1c-463a-a7b3-c987762ab5e1', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('02546d71-8372-4c3d-b67b-59c3af46c763', 'f37fe62d-0129-4ed2-9234-a24286c5ee67', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('02ac51e7-174a-43e7-ac64-f67c4b761a9d', '0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('03e8bcf8-2964-44f0-bb83-e58a54136dfe', 'e9cea982-eba9-408a-a911-a208b0ac774d', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('04354168-d6b2-4c1e-a78e-8a5958cad8f3', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 1, NULL, NULL),
('0701bf80-ce4d-4f01-a04d-5790e5f80010', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('07295ad9-23a2-43e6-9d51-973cf56f5529', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('073130fb-8ee9-4202-854d-556132e15529', 'fcdac56a-8cd0-41bc-8e62-77fa943d3a32', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('074bc2e9-d1c6-4a26-9829-50fa50d847d3', '90ab2b43-00ec-492c-83fb-6299c62f1a3e', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('08d335ad-7f9e-468a-92cb-8f20a49bf254', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('0922f554-2556-404a-8c87-2e87cd4e3dae', 'e66836b3-1c0d-4cb3-ac3e-f176fa440395', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('0956a53e-bed6-44f1-b24b-4ce1ede0779d', 'b424c935-b69d-4b11-8812-aba3546736eb', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('096d7637-988b-4074-9db9-0cf2534b2106', 'd1d425b0-e41d-4982-bc1c-ae39353d620c', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('0a5f83e4-3215-450f-aab8-69fd09d56132', '52853423-896a-4c78-8d02-a90b4a0fcc05', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('0b000170-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('0b000eaf-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('0b001b4e-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('0b002b0b-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('0b003967-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('0b0047c7-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('0b0055ab-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('0b0062c6-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('0b006fd2-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('0b007d0b-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 5, NULL, NULL),
('0b01f98b-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('0b02087f-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('0b0219a4-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('0b0229d4-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('0b023a16-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('0b024a52-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 4, NULL, NULL),
('0b025960-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('0b026cf0-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('0b027a69-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('0b028801-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('0b043785-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 5, NULL, NULL),
('0b044499-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('0b0452cb-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('0b04674a-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('0b047435-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('0b048e50-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 0, NULL, NULL),
('0b049e56-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('0b04ade8-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 1, NULL, NULL),
('0b04bbae-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('0b04c9e1-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('0b065786-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 4, NULL, NULL),
('0b066512-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('0b067232-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('0b067f03-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('0b068bc0-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('0b0698ca-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('0b06a5d3-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('0b06b477-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('0b06c133-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('0b06ced4-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('0b0894b0-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('0b08a12f-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 5, NULL, NULL),
('0b08aeea-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('0b08badd-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('0b08c64c-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('0b08d1cc-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('0b08dd6b-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('0b08eb57-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('0b08f6ee-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('0b09026a-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('0b0a4f42-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('0b0a5c91-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('0b0a6a83-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 1, NULL, NULL),
('0b0a78bd-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('0b0a8749-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('0b0a9468-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 4, NULL, NULL),
('0b0aa0fe-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('0b0aae0f-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('0b0abb28-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('0b0aca7d-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('0b0c3dda-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('0b0c4c69-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('0b0c58a9-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 1, NULL, NULL),
('0b0c6506-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 1, NULL, NULL),
('0b0c74e8-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('0b0c8429-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('0b0c93a3-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('0b0ca31f-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('0b0caf9f-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('0b0cbdd7-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 4, NULL, NULL),
('0b0e1b85-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('0b0e2720-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('0b0e31b0-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('0b0e3d8f-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('0b0e485d-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('0b0e53ac-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('0b0e5ebc-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('0b0e6a0f-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('0b0e74e2-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 1, NULL, NULL),
('0b0e801e-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('0b101f4f-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 5, NULL, NULL),
('0b1031c8-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('0b1043aa-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('0b1052b2-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('0b1062fb-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('0b107122-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 0, NULL, NULL),
('0b107e55-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('0b108c9e-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('0b109cd9-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('0b10ad62-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('0b130bfd-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('0b131aaa-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('0b13280b-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('0b1335fc-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 1, NULL, NULL),
('0b13438f-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('0b135141-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 4, NULL, NULL),
('0b135ee5-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('0b136cbc-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('0b137a6e-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('0b1387ed-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('0b14f194-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 4, NULL, NULL),
('0b14ffe4-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('0b150d58-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('0b151bd7-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('0b1560a3-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('0b156e34-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('0b157bcf-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('0b158931-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('0b159575-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('0b15a13f-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('0b178587-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('0b1795da-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('0b17a3c1-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('0b17b065-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('0b17bd42-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('0b17c9a7-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('0b17d57f-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('0b17e182-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('0b17ed1a-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('0b17f8e6-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 5, NULL, NULL),
('0b76f1d2-bb86-49a3-8dbf-947a1ede37c5', 'a64f21f3-63e9-448a-9491-f7d69f333829', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('0c377fe0-68c9-4120-ba7e-5ebdf97fca58', '6f026cb2-a499-4b37-9108-b29a683c4746', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('0c6668b7-f5b9-4ed1-9d20-5be6f0988866', '9de148ce-7d82-46e7-a389-8c5dc1634396', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('0c6e74f4-0ff2-443c-839f-c4e6a3050714', 'cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('0c7f23d5-a4fb-4760-9336-39ef8d05cdfc', '05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('0c8deb27-1a4e-48d5-8273-339cbcb01f56', 'f37fe62d-0129-4ed2-9234-a24286c5ee67', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('0c9acc2c-5764-483f-b7b0-2d0a276cab3a', 'e7673626-500d-4251-aa90-85e6b9d50a23', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('0cc6e4ac-ce9e-4cf4-8b23-f48cc7fee784', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('0ccaa509-2d79-4976-bb1e-af338604424e', 'e197f398-16cb-4037-a4f7-71f51df4bb69', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('0d09b913-4e7a-44b4-8520-cf1b2ad04fb8', 'f0be8449-b32b-4757-a081-0b8d96402541', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 4, NULL, NULL),
('0d293993-ae2f-4726-aa40-1f6e67216e6b', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('0d9293cd-e765-4bee-a50c-f0758349ba60', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('0db39cbe-515d-443d-b196-a2f1809566fd', '50b4b6cb-90d0-48b8-8e06-955fa443f747', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('0e3dba66-9c9f-4804-b2b0-7ae1246f3fef', 'd0427c26-036b-41ff-85df-2153326cbaa3', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('0e4056c9-dc7c-4965-b383-e98b80e83488', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('0e54e707-f673-4c87-b13a-587bd8373937', '6f026cb2-a499-4b37-9108-b29a683c4746', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('0e84c4ac-cddf-4370-8f0d-235afb89210b', 'e8285381-459e-464d-b4cc-240068000369', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('0e9b62d1-ca84-46ad-96b9-b41b697d2a03', 'ca314ab3-288f-4421-838a-4f4c410d21eb', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('0fa4db71-ef1c-4279-9b24-2c10e93c6b26', 'f0be8449-b32b-4757-a081-0b8d96402541', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('100a606a-6a04-4fec-b79f-fb28b0a51097', '04473047-f317-4d1f-8948-6875ed73059b', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('108bfdfb-f2d2-4e67-bef6-e50915ecdfb1', '5728e84c-2a60-4622-84da-d86d1adc9a14', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('1181b9ba-91ed-47f3-a334-245151c295be', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('11a1cbc3-7567-4a0e-8757-a499fae3bbb8', '52853423-896a-4c78-8d02-a90b4a0fcc05', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('11bb7899-2519-4582-9c4b-05e1c1670a69', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 4, NULL, NULL),
('11ec953d-788d-48af-b9cf-f67944c5759d', '6f026cb2-a499-4b37-9108-b29a683c4746', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('1261e7a5-24db-41d9-8a15-260b9f0ae0a3', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('12b35604-8baf-4260-aba7-7c7dc75ba301', 'd0427c26-036b-41ff-85df-2153326cbaa3', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('12c7f566-7819-4b5b-9edc-8f18d6b17207', 'af9e52c3-d295-4d44-9150-58172b10d798', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('13303459-b0bb-483c-8684-24276b7efe06', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 4, NULL, NULL),
('137aeab2-c9c5-4e1e-ab52-65b93e640037', '21bbecef-357a-47cd-a78a-daf385c869a6', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('137fcfa0-e450-483c-9a7d-c414bd282377', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('14cf4e15-cb78-47ad-8a41-778724a2d420', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('155c4f61-511e-450a-bce3-a550cd7a9e26', 'e66836b3-1c0d-4cb3-ac3e-f176fa440395', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('15c5dc50-9700-4133-af54-2d496f45fe43', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('15cf7df4-a7e3-4ca8-b6a9-22f464baf852', 'e66836b3-1c0d-4cb3-ac3e-f176fa440395', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('15db56f0-85f6-4e8c-a6a4-d75904c8d21d', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('165dd225-8043-4456-b111-5cf5afd66e41', 'e197f398-16cb-4037-a4f7-71f51df4bb69', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('167e5dd0-0fc9-4024-9558-1e81f1481548', '4654d49f-5ea8-487b-baf6-510f51f0c0bd', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('16e85c4d-a628-4f96-9b6d-528e8d90a89a', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('17195ee2-8726-46a1-b840-a61b75c5bde1', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('172b8340-9df2-4bb9-8dcc-e1f05df46622', '6f026cb2-a499-4b37-9108-b29a683c4746', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('1793e9f1-6cee-4edd-833f-aefea6113972', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('17df9b59-6ea4-497a-8b2a-3f35644b5a2d', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('18047d6e-0e6d-486a-83c5-dc19c3207362', 'd3539a15-8752-4837-a88b-143d9adeeede', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('18657c05-07d0-4598-8ee0-fe314e973c07', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('187d0496-4b54-4303-a1ca-624ca43b398c', '79c5d5d1-39c0-4617-a516-320602bee9af', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('18aa58b8-7093-4758-b715-6fedb43478cc', 'e3324aa2-c101-4e59-af43-d9c52d149db5', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('1a3b74e1-473d-433b-9e64-5beca118e22d', 'e8285381-459e-464d-b4cc-240068000369', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('1a8877cf-ae93-448e-8150-b1f7e704ef99', '31f4a144-d6a2-410b-bb9b-243ffc6bee2a', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('1ab02b10-3d08-489a-a732-d4339f6de59f', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('1b733ce1-ac16-4cc1-9028-d161991ca0cf', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('1bb935db-035f-46ce-adae-61ac97da8834', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('1c988f68-3855-4e4b-9117-603cf878eeed', 'f37fe62d-0129-4ed2-9234-a24286c5ee67', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('1cd103b6-8154-4cca-b89c-0aab7a6e8bcc', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('1cdea6ed-e90c-4011-b6b1-dd5e47e0dc31', '50b4b6cb-90d0-48b8-8e06-955fa443f747', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('1d75a08c-d7fa-4011-88d0-861e056b7443', '0cc79b65-0fdd-4684-a61a-48191eb4c210', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('1da01559-9bd6-47c9-bb1f-50d5a54042db', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('1e71208b-a94f-4428-b3d1-4a403fd21cd7', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('1ed9d9f2-dac7-4f8c-8be0-16d78169e1c2', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('1f150c91-b510-4043-bbe1-36cadbfc2106', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('1f363a1b-16a8-4b5f-a828-aa897db1662e', '3468c45e-2f30-4684-a537-fc8fef969e4e', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('1f404474-fcae-4ad0-ab85-ca3dd6151ed6', '3468c45e-2f30-4684-a537-fc8fef969e4e', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('1fbf808c-9488-4ea4-b5d6-b638d07cf13a', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('20692f2a-415b-4fa8-bc4e-7632879c0979', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('2208eef3-5048-4e1f-ab55-b70c8136a4b7', '7d982347-90b4-4454-9d6f-0103e31f84e3', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('22fe4431-9dd9-44bf-85a2-5d87b2eddba4', 'fcdac56a-8cd0-41bc-8e62-77fa943d3a32', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('23614fb0-2394-414c-bde8-f3c2a9fd159b', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('23d44998-ee75-441d-9697-b2342f25c1ae', 'd3539a15-8752-4837-a88b-143d9adeeede', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('24122d99-4fd7-4eb7-acb4-0ca3854a0f1d', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('24f07949-2f85-4965-a504-7847bfa68f70', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('25721ad1-e7b2-4c94-942f-a11d3077fc09', '0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 4, NULL, NULL),
('258beabf-c3f7-4d2e-bbe3-c7f3db510306', '43846bc8-6385-4d07-b742-b9b4de21bd10', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 4, NULL, NULL),
('277c43b7-4e65-4916-b7fd-9fea431fbf67', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('27cd9811-ed3a-446a-a756-1d585780f9b4', '35d180bf-0823-4be9-938a-baaa05a29fb8', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('280532f3-7fad-405d-a264-932c830763e9', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 4, NULL, NULL),
('28771348-e386-4852-adcd-4407036ead29', 'e9cea982-eba9-408a-a911-a208b0ac774d', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('28cfcac6-bcd7-4cac-8b5a-937ad3529fc4', '43846bc8-6385-4d07-b742-b9b4de21bd10', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('291cc079-3836-43ba-9795-e65ad6d43cf6', 'e9cea982-eba9-408a-a911-a208b0ac774d', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('291fcf21-c99a-4440-9b23-9e1a90cfd2bd', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('292375c0-ade6-481b-a931-02976d757a46', 'fcdac56a-8cd0-41bc-8e62-77fa943d3a32', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('29ed454d-0d81-49f6-aed1-86d2b12b040f', 'f37fe62d-0129-4ed2-9234-a24286c5ee67', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('2a5407a6-ca9c-4ef1-827b-e40c69b6d219', 'c848366b-b82b-4859-a217-e4b0b878dee1', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('2abfdfa3-5164-409c-ae7e-81aefbb407ca', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('2bd177c7-3e36-4fea-9c71-89749dc901a5', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('2c2ba2ef-9a6a-42e5-bea4-03e8568b33c7', 'cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('2c7493fb-dcac-4080-8308-e3b6f851190e', 'd3539a15-8752-4837-a88b-143d9adeeede', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('2c9e9314-39b7-4a61-b2f3-6c09b233d258', '0cc79b65-0fdd-4684-a61a-48191eb4c210', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 4, NULL, NULL),
('2cd09900-5cee-4ba3-8c71-dcddafafaa82', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('2cd2a20b-c949-48ae-b0ba-23874a94a001', 'd1d425b0-e41d-4982-bc1c-ae39353d620c', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 1, NULL, NULL),
('2cf071ef-11b1-463d-b9e7-e6f24a19d1de', 'e3324aa2-c101-4e59-af43-d9c52d149db5', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('2cf4847c-c85c-4fbe-8197-a033b0c53e58', '35d180bf-0823-4be9-938a-baaa05a29fb8', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('2d2312c8-bc14-4ae5-9384-96d515ff4e53', 'af9e52c3-d295-4d44-9150-58172b10d798', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('2d5ceed9-e719-4fdc-bcf8-8f015f7644e5', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('2e8587d5-b79d-49ba-96ab-638ec7279fc6', 'fcdac56a-8cd0-41bc-8e62-77fa943d3a32', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('2e9f3ad6-1da7-4de4-8858-c719a2e91390', '21bbecef-357a-47cd-a78a-daf385c869a6', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 1, NULL, NULL),
('2f3a3ff5-4727-42fc-a9e9-59a7a3b1b398', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('2f6db998-ca02-49ee-a55a-4643544ed540', 'b424c935-b69d-4b11-8812-aba3546736eb', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 0, NULL, NULL),
('2ff0a800-0ec3-40c5-a3a3-df8ea84fc0f6', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('30ec5810-681c-4b57-876d-147290e2e8f2', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('31166a98-7044-4b99-a619-f55043224623', 'e9cea982-eba9-408a-a911-a208b0ac774d', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('3203abab-0208-455c-aaee-baeae902d18b', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('321fc61a-77e5-4c41-be2c-073579fe1bf7', 'c848366b-b82b-4859-a217-e4b0b878dee1', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('32e30977-fbcc-45c0-968d-fe8a040cadb0', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('33414614-4e12-4f7d-8393-6a75efc384e2', '2cd6e835-681b-482e-976a-e8066a9c6252', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('33460584-90db-4ef3-8ad7-f2bb0ab9528b', '31f4a144-d6a2-410b-bb9b-243ffc6bee2a', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('33a02c65-9ef4-4816-bad4-e01a0ec2238c', '52853423-896a-4c78-8d02-a90b4a0fcc05', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('33ec432a-a7e6-44d7-99c0-caa071633937', 'b424c935-b69d-4b11-8812-aba3546736eb', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('33fcdf0c-7bdb-47d1-9fec-f9687a14f26c', '58630d0d-5df2-4d36-b895-c1f94731f7d0', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('340982f1-3af4-4a60-8394-73bbdf8c0930', 'cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('34103634-e5a1-41ef-9a25-75938745a41c', 'e7673626-500d-4251-aa90-85e6b9d50a23', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('345a578c-d336-46bb-a75c-be520db5104a', '214e2ef6-9fa5-4621-855f-259f171ece90', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('34692dcb-2aef-4062-824e-860971f2ad30', '3468c45e-2f30-4684-a537-fc8fef969e4e', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('34e94ecf-cd76-4d2a-bade-959941e286b3', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 1, NULL, NULL),
('34f752a7-3e52-4c60-8b22-5dc9698d0074', 'd1d425b0-e41d-4982-bc1c-ae39353d620c', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('352a706f-deac-4e96-9ce6-352bb6ac391d', '31f4a144-d6a2-410b-bb9b-243ffc6bee2a', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('3597293e-6678-4791-8c45-0a45c7bab164', '90ab2b43-00ec-492c-83fb-6299c62f1a3e', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('35e88156-5857-4d9d-9d9e-2f5a7484e2c3', 'd1d425b0-e41d-4982-bc1c-ae39353d620c', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('35f15b64-852d-4163-b57d-6a9b6e481695', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('36794e35-84fb-4d69-bd72-a87e9ff7d99b', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('367da807-b75d-49d7-a9b4-de63b390f41e', 'cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('36d200c7-e4e5-496a-935c-e7316fae2a4b', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('3775de20-9f04-4eb9-9199-1ef0ac29bfcc', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('379a1653-3c9c-4115-9c0d-5b1934d7b2d6', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('3879484f-f5c8-40cc-ab91-c09f87913420', 'e197f398-16cb-4037-a4f7-71f51df4bb69', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('387efa7b-95ae-47d2-bd14-bc68557f36b8', '9de148ce-7d82-46e7-a389-8c5dc1634396', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('38fa39c1-66ae-4afd-ac34-42ab8cc72159', '52853423-896a-4c78-8d02-a90b4a0fcc05', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('39d9c4fb-665b-44cf-bd5b-0d4f94f8019a', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('39fa5504-06cd-4dd7-af79-ac7f546eff1f', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('3a30876c-c011-47ac-8279-caf5c0577be6', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('3a7c92da-db3a-45e2-8694-9d81944ab699', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('3ae9bca1-2d99-496f-ac88-cb14c59b3635', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('3baf5d0a-b5d7-4932-b28b-c14b4b7c985c', 'ca314ab3-288f-4421-838a-4f4c410d21eb', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('3bfa89f8-d523-4edb-8720-e1e2cf7b19fd', '7d982347-90b4-4454-9d6f-0103e31f84e3', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('3c4773e9-3d98-4b9f-9649-9b985554a4dc', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('3c4b3610-3c56-4861-ba2e-7f15d5f74371', '6f026cb2-a499-4b37-9108-b29a683c4746', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('3c87f38f-6008-479d-a5f1-e9a36a903010', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('3d737360-50c7-413c-a209-718cd0c0472a', 'a64f21f3-63e9-448a-9491-f7d69f333829', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('3e2ca075-d105-4352-a3d7-ec458f78d0a3', '21bbecef-357a-47cd-a78a-daf385c869a6', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('3ee89ee8-24b1-48e7-81f3-2c3da53bf2b6', 'e8285381-459e-464d-b4cc-240068000369', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('3f27a825-ffea-47f4-bd7d-a8d61766e4f3', '2779605e-32ff-4d5a-844f-ddec7d59095d', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('3f9758a2-7a77-466c-9951-43538496ac48', 'f37fe62d-0129-4ed2-9234-a24286c5ee67', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('3fb23ddc-3e75-4bb9-b1d6-44e0f2099312', 'e197f398-16cb-4037-a4f7-71f51df4bb69', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('401f8cba-4c67-475a-bb2a-d8b5d46f000b', 'c848366b-b82b-4859-a217-e4b0b878dee1', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('4042f2f6-3437-46a6-85a7-80c8059eec4f', '43846bc8-6385-4d07-b742-b9b4de21bd10', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('4070db89-840a-451a-bb72-8e0829a36ddb', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 4, NULL, NULL),
('40bb900e-f10c-4989-affe-dfe4b85c2066', 'cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('40e1fe57-4c76-4280-9fc1-ed15a99f7d68', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('4153241f-0bd5-4fe9-9f11-7cc15d498b9c', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 1, NULL, NULL),
('41ce9fb8-2614-45eb-b214-2a878137e77d', '15bc2ae9-7198-4d09-a659-7e950dc05216', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('41eba5a8-1a67-4675-84b2-0d3fa61638b4', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('4208abac-d149-47b6-a304-b8423e2bf5ef', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('42e4e72e-4345-4f83-be8c-155e44d453b5', 'a64f21f3-63e9-448a-9491-f7d69f333829', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('43601535-16d6-4f25-87d1-2f48fe35cf87', 'f37fe62d-0129-4ed2-9234-a24286c5ee67', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('441dc3df-5edb-4f9f-9abc-bcff5cf9fffe', 'af9e52c3-d295-4d44-9150-58172b10d798', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('442bcd03-574c-4eb7-b22b-736423234db2', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('44a6f0e9-8a23-46fc-ad8a-dc2cd66e576e', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('44cf89ad-5c3d-412c-8bc3-20b996c50aa2', 'af9e52c3-d295-4d44-9150-58172b10d798', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('4623304f-4bb7-4051-bb3c-8ead9699b13d', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('466791ab-a6bb-4f04-a8ee-9c5b76cdcef6', '4654d49f-5ea8-487b-baf6-510f51f0c0bd', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('46e9b5cf-09f4-4a9e-9d5a-25d23732a313', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('472127c5-34f5-4b82-9a84-32866222d2ad', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('4753e6c9-5ced-46f6-80b6-24bee4695647', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('4764cc36-b893-4d53-a4ca-5b2ca7efb6bd', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('476d10ba-12f3-4bce-ba84-dceaf0e8fa97', 'e7673626-500d-4251-aa90-85e6b9d50a23', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('47db2963-f2b1-4760-b676-6383486a81d5', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('4875a7ba-9e1a-4e0f-93f7-99dcc530f31c', '05df9749-8fb8-4244-8500-6dce2262ddeb', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('488056c0-704c-42e9-9891-559fb885b0ba', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('48a1edb1-7f81-4376-8eb3-a7c9a84477eb', '90ab2b43-00ec-492c-83fb-6299c62f1a3e', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('48a5de34-c551-4014-bedf-1ee4d9c02f53', '21bbecef-357a-47cd-a78a-daf385c869a6', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 0, NULL, NULL),
('4a0509f2-1f96-4665-b257-b9032cd8ad6d', '3468c45e-2f30-4684-a537-fc8fef969e4e', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('4a3769e0-b877-4aae-b779-c2b522dd5f0c', '0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('4a4cf9dc-0d89-4ff9-845f-a6510e1824d5', 'e9cea982-eba9-408a-a911-a208b0ac774d', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('4a5abc26-cb43-4f98-a6d0-437c1f6cb211', 'e7673626-500d-4251-aa90-85e6b9d50a23', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('4a9c3062-850a-4753-8f39-dc1afe01915e', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('4b29a0d5-55a7-46a9-8ce4-8d7a57bf28fd', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('4b7a5171-a2bf-4ee5-bca9-79158220e478', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('4b99b484-8ae4-46b4-b524-fc5c468e8f7a', 'dee555ea-d9c6-407d-9de5-646bfdc07325', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('4b9d0e3e-2824-4d00-ab67-a75c17459b6f', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('4bd9a0e1-8e33-4b13-a3d2-9944c1d0b15a', 'a64f21f3-63e9-448a-9491-f7d69f333829', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('4c1daf5a-2177-46ab-a614-69c35e819fcc', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 1, NULL, NULL),
('4cd305b4-0167-4fea-b8b8-5877b41679e7', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('4d32b938-095e-4bef-bd32-96cebea473c6', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('4d4585ba-fa08-42b0-a0b1-bb1aead93a61', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('4d86bd4e-3439-41ac-9204-82b0f8fbde60', 'e9cea982-eba9-408a-a911-a208b0ac774d', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('4ddf5c80-a8f2-403d-b8d8-efd6b800d43d', 'fcdac56a-8cd0-41bc-8e62-77fa943d3a32', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('4f00472f-f048-4bb2-abed-ad93bff3c8d9', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('4f060b5c-b7f7-437c-ad6e-e457431482d8', '31f4a144-d6a2-410b-bb9b-243ffc6bee2a', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('504ed0af-f1a6-428a-860f-d5edb63ec3c6', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('50593626-363f-4a66-b0cb-ea74ae631479', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('50c3bafb-d432-4b46-b03a-637bd8327527', '7d982347-90b4-4454-9d6f-0103e31f84e3', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('50dcc90a-0ec6-4df1-9345-c08d91f7072b', 'e66836b3-1c0d-4cb3-ac3e-f176fa440395', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('51721df3-7f02-4787-93a8-71d406585212', '0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('524cd5db-5bfc-43a4-ac35-41bf33889af9', '79c5d5d1-39c0-4617-a516-320602bee9af', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('5311bc89-d039-4ab1-bf37-fcc7bd14ed66', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('5327add5-75e3-4c01-b404-ef3f0499dcc0', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('535dfb16-61d2-4be8-bab5-e862c5f43fe7', 'f37fe62d-0129-4ed2-9234-a24286c5ee67', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('536c63c6-1002-4774-8ca4-6909116741cb', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('53b7e316-f8ce-4375-bc8c-38b7d6dec5dc', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('53e87d2a-73da-48a2-b544-b355f661d8b3', '2779605e-32ff-4d5a-844f-ddec7d59095d', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('53f6d222-2c64-4152-9d80-cfd26c4ad6a3', 'c8bbed56-707d-40d5-ae62-d8318ede5974', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('544060c4-bb05-474f-802d-c1633c43c69c', 'f0be8449-b32b-4757-a081-0b8d96402541', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('54991736-f893-453a-b820-ba4f313c1b26', '05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('55df8b1c-662b-4b29-903d-a6c7a1eb3d82', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('56a66bab-80c6-4d08-b882-ececa09f736a', 'b424c935-b69d-4b11-8812-aba3546736eb', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 5, NULL, NULL),
('57509c42-173f-4057-958b-069503afb612', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('5823ebc2-b47b-4177-b21d-08f4586ab494', '04473047-f317-4d1f-8948-6875ed73059b', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('594ec55a-e993-42a4-9d92-360991f9728b', 'd0427c26-036b-41ff-85df-2153326cbaa3', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('59875565-58ef-4a66-a8de-015cfe8a67e0', 'd0427c26-036b-41ff-85df-2153326cbaa3', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('598b4273-5124-4db6-aed9-b1bca6a7b621', '04473047-f317-4d1f-8948-6875ed73059b', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('5be234c8-1123-49f6-86ec-b29b8ca80ea5', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('5c0549e8-d186-414c-b31a-067e0c8f75d9', 'e8285381-459e-464d-b4cc-240068000369', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('5c89e51e-ce72-4a45-9e21-ae9457db38d2', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('5caabfef-c60e-4ea5-8182-28d48c10b6a0', '3e164f99-8716-4df2-ad99-f74c544f2450', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('5caff1be-0392-4606-bbdb-9724ae0ab689', '90ab2b43-00ec-492c-83fb-6299c62f1a3e', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('5d34c317-1c06-4819-90d0-298eaafe7194', '2cd6e835-681b-482e-976a-e8066a9c6252', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('5df48a16-b685-4aba-ade8-86c67919e739', 'e9cea982-eba9-408a-a911-a208b0ac774d', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('5ecda314-2fae-4483-9bdf-7643c29b77ac', '04473047-f317-4d1f-8948-6875ed73059b', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('60973cfc-2636-4d82-ac82-9e7b2371158e', 'd0427c26-036b-41ff-85df-2153326cbaa3', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('60b65337-418e-4934-ab68-f086236c704d', 'c848366b-b82b-4859-a217-e4b0b878dee1', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('60cd3534-280e-498e-8cd0-6f962a731c4d', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('61269790-6ecf-4697-a49b-9471252fca76', 'c848366b-b82b-4859-a217-e4b0b878dee1', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('613fb22c-a482-469e-85c4-3acb0518e9d2', '31f4a144-d6a2-410b-bb9b-243ffc6bee2a', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('61bae689-62a2-48eb-b290-6dd26082ef4b', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('623a1e60-dbbb-4dc8-83a0-c58f01394ca6', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('6286e15d-e4a5-490a-ace9-ff3b95a0b230', '58630d0d-5df2-4d36-b895-c1f94731f7d0', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('62aafd37-5921-4baf-af68-ebfd2c9f732c', '90ab2b43-00ec-492c-83fb-6299c62f1a3e', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('6376260e-eb5e-4c70-9f3e-92af03babdef', '21bbecef-357a-47cd-a78a-daf385c869a6', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('640574ce-65bd-488b-9ea5-8efe3e46d95a', 'f37fe62d-0129-4ed2-9234-a24286c5ee67', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('640a858d-b6cb-44fe-a81b-d6246272fe9b', '58630d0d-5df2-4d36-b895-c1f94731f7d0', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('645d2003-04fb-4162-bfc7-dc0222d1fc46', 'd0427c26-036b-41ff-85df-2153326cbaa3', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 4, NULL, NULL),
('6503d5d0-2f04-4f36-b17e-169ad87b6a98', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL);
INSERT INTO `CharacterAttribute` (`id`, `characterId`, `attributeId`, `value`, `specialty`, `description`) VALUES
('65663aba-9307-406d-8991-2ed6780d6a33', '0cc79b65-0fdd-4684-a61a-48191eb4c210', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('6566a346-2917-4403-b182-2e4feacf6128', '10412337-5fb4-4bb6-ba48-0efc36c5489d', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('65d594cd-986d-427c-9297-b7df41f7ee73', '214e2ef6-9fa5-4621-855f-259f171ece90', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('65e7381f-67a6-4189-a4d8-cfe8b0b26d85', '79c5d5d1-39c0-4617-a516-320602bee9af', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 5, NULL, NULL),
('65ec3fd1-4d49-4806-8ec8-148a17f07880', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 0, NULL, NULL),
('65eda1c3-ec2a-4e96-b962-e290ec2c3b2e', '05df9749-8fb8-4244-8500-6dce2262ddeb', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('660065ca-624d-4944-b70e-89c6f11bece9', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('6628d7d6-5126-4aa1-bf9a-c2f90f5cc3c0', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('66374a71-9f11-4979-9186-8f49b921d102', '05df9749-8fb8-4244-8500-6dce2262ddeb', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('66b92c02-a1c3-4d91-972b-3d03d0486d32', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('676523e2-37ca-4547-b7ea-93a4e21343df', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('678a6a09-6272-4f4e-a4c5-c9ce5621a2bf', '6f026cb2-a499-4b37-9108-b29a683c4746', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('67b725f8-673c-4c38-9ae5-52072c89c914', '0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('67fafcab-1416-4112-aea3-48a89afdc71a', '05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('688b231a-2214-4c2e-8a57-fc02f536212f', '0cc79b65-0fdd-4684-a61a-48191eb4c210', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 1, NULL, NULL),
('68b30f23-f84c-492e-8d9c-24a37828fcac', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('693e6ce3-38a3-45a6-b3e0-ab977ba8ffca', '05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('69ad913d-5b05-429b-9589-f38001e3db3a', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('69cb44ab-a59c-4ef8-9622-7d98daf3c5e1', '2cd6e835-681b-482e-976a-e8066a9c6252', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('6a14bf9b-cb3c-4167-951f-e60baeeffbd5', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('6a42deef-a3f7-47bc-aa01-f089e6e4222d', '4654d49f-5ea8-487b-baf6-510f51f0c0bd', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('6a67aa35-46c0-4296-a731-fec6762e7d3c', '5728e84c-2a60-4622-84da-d86d1adc9a14', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('6a941997-73b0-4100-a056-50252eeae89c', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('6ac22d1b-d08e-4080-a576-8a98d8d68e7c', 'd1d425b0-e41d-4982-bc1c-ae39353d620c', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('6afe0d6b-0e20-4262-bc74-954186148b98', 'af9e52c3-d295-4d44-9150-58172b10d798', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('6b522ccb-e3b7-4891-ab69-cea1a3d3f4fe', '15bc2ae9-7198-4d09-a659-7e950dc05216', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('6c15882c-b029-403d-8233-bfbf34f86ef5', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('6c951f05-a81f-42f9-a00a-2035a90b1bfa', '3468c45e-2f30-4684-a537-fc8fef969e4e', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('6cf85780-d37c-4deb-956a-34757d9385e5', 'c848366b-b82b-4859-a217-e4b0b878dee1', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('6d08c4a2-542d-4adc-9b01-9e2bfb24dc5c', 'a64f21f3-63e9-448a-9491-f7d69f333829', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('6d098a1b-dbdc-44f8-b4ea-fff213976489', '79c5d5d1-39c0-4617-a516-320602bee9af', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('6de6cfe6-d1a7-47bb-8633-b0ccc3619fad', '31f4a144-d6a2-410b-bb9b-243ffc6bee2a', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('6dfb6fcf-e25d-4d47-a440-9a892d2000f1', '214e2ef6-9fa5-4621-855f-259f171ece90', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('6e1b2b5a-f419-412a-af4e-725e884f6eb1', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('6e6b2510-1d41-4107-9878-724fdefed69d', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('6e78fc88-7974-44c4-b57d-dd699b1ac306', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 0, NULL, NULL),
('6f29d49c-369f-425a-bc63-270a78d5bb15', 'dee555ea-d9c6-407d-9de5-646bfdc07325', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('70199388-3087-4dbe-907f-d9f9f6285fa6', 'd3539a15-8752-4837-a88b-143d9adeeede', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('7054f284-0f62-447f-8fd6-8aca4e51d32c', '10412337-5fb4-4bb6-ba48-0efc36c5489d', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('707c667d-20bf-4458-9087-2366d097851f', '0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('710faeef-0336-46be-bb26-5c482ccc0909', '2cd6e835-681b-482e-976a-e8066a9c6252', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('7162c5b7-69e5-444e-850b-b63840279b14', 'd0427c26-036b-41ff-85df-2153326cbaa3', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('71638071-0538-4b28-91c7-84d73c0cd189', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('7188f2cd-2ae6-4134-ad8f-9edfbd97305e', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 4, NULL, NULL),
('7231d7f0-4276-44db-98d8-025b00fd8784', 'd3539a15-8752-4837-a88b-143d9adeeede', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('72942617-b871-4e70-b406-7c93a8b558e6', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 1, NULL, NULL),
('72c68381-c860-4f88-9944-a9a975143cdf', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('7302fd9e-2587-49e1-b0df-267211a25cae', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('73eba8dd-2d63-4c6c-98f6-5fd3f866afb2', 'e7673626-500d-4251-aa90-85e6b9d50a23', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('73f70b4f-e4c2-4696-85c9-e19ee2c4028b', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('74787304-53df-4245-acc6-0f5491f983ad', '05df9749-8fb8-4244-8500-6dce2262ddeb', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('74da677a-ba45-4aa6-ac87-d685821fa191', 'f0be8449-b32b-4757-a081-0b8d96402541', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('75b1682f-fb5e-4b09-b67c-f31f144401c0', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('76880169-1950-4a74-8db8-9c8b99b97084', 'f0be8449-b32b-4757-a081-0b8d96402541', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('76927fa3-60fa-40b2-8ce8-f4efb8165bf6', '52853423-896a-4c78-8d02-a90b4a0fcc05', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('76c350ea-ebba-460a-a33f-09fc2db49e76', '35d180bf-0823-4be9-938a-baaa05a29fb8', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('771a6fcd-ab60-4b7b-8b24-283c14223f83', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('777f39a4-83b6-4644-b4ac-e5cba3d22fc4', '31f4a144-d6a2-410b-bb9b-243ffc6bee2a', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('7783d3e6-e483-4bef-95b0-4eb5cc6b40bb', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('78b40e8e-5b1c-4dde-bc6c-8afd395b0557', '15bc2ae9-7198-4d09-a659-7e950dc05216', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('78b5e489-0969-4f22-98bf-2e74c73d9189', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('78f6a5a1-2a1d-46b9-9f8e-15ed13c40279', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 4, NULL, NULL),
('791df00b-7df8-45ef-860a-577979523d96', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('7aa5a5dd-df4b-4ebc-99c8-4a7760d0e282', '52853423-896a-4c78-8d02-a90b4a0fcc05', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('7ab9b82b-56a3-450a-adc6-b77653d7ac7d', '58630d0d-5df2-4d36-b895-c1f94731f7d0', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('7b4301d0-7f7e-4cf5-96df-2f928f2c86ad', 'ca314ab3-288f-4421-838a-4f4c410d21eb', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('7bbebaad-99db-4ef8-bd64-4fe7678461af', '52853423-896a-4c78-8d02-a90b4a0fcc05', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('7c33eae1-4310-48d0-b90c-af83301a8ece', '4654d49f-5ea8-487b-baf6-510f51f0c0bd', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('7ca3af2f-3dfb-4b8d-bdd9-3b9bcb6b1d04', 'f0be8449-b32b-4757-a081-0b8d96402541', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('7d50fc78-70e7-47d6-83b0-78cd7a5af7ff', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('7de48ee1-6185-4d99-9c0b-88e628c05957', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('7e1ae017-e152-456d-8d42-6633b194736c', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('7ead845c-bfd0-41cf-b94f-46d6745fdb15', '9de148ce-7d82-46e7-a389-8c5dc1634396', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('7f73ca8a-05f7-45f9-a8a9-2c86b81507c9', 'e197f398-16cb-4037-a4f7-71f51df4bb69', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('7f82dff5-f927-45f6-a2a2-3a04ba5544f1', '50b4b6cb-90d0-48b8-8e06-955fa443f747', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('7f86ba83-e7dd-4beb-a9f1-90ee1ca08a2f', 'cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('7fd11c7e-e1a8-435b-8dbb-797db3865384', '04473047-f317-4d1f-8948-6875ed73059b', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('804a3dbd-224a-4e26-a150-6574bf14aaf6', 'e7673626-500d-4251-aa90-85e6b9d50a23', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('804c6a69-1f8b-408d-b253-4b6ed1de4849', '31f4a144-d6a2-410b-bb9b-243ffc6bee2a', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('809fb4ca-5c7f-4166-b5bc-da06c50861d9', '3e164f99-8716-4df2-ad99-f74c544f2450', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 1, NULL, NULL),
('8144b61c-9d44-4723-aa0d-df3b2ce6bab0', 'b424c935-b69d-4b11-8812-aba3546736eb', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('814faa96-2e7c-4d32-99cf-39819b18aebd', '6f026cb2-a499-4b37-9108-b29a683c4746', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('8150a955-ba56-45f1-a332-da49e8204504', 'fcdac56a-8cd0-41bc-8e62-77fa943d3a32', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('81e4db87-b5de-43e8-9256-e8b92ab0b50f', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('8207fb81-4f88-4f1a-80a6-ace08cd644ca', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('821acb91-ac3e-4012-ae48-c7bd9808262a', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('82b1b0af-41a0-497d-9c36-ed975166d114', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 4, NULL, NULL),
('82be22c0-ed02-4452-8ed0-4ed5a3f4c563', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('839140aa-bec3-4fa7-9d32-674d6a6ccdb9', '5728e84c-2a60-4622-84da-d86d1adc9a14', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('83fe64c7-3e3a-41bf-98c6-ef43fc8d88e2', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('840fd11a-4739-4b5e-9373-37bc73185d4c', 'e197f398-16cb-4037-a4f7-71f51df4bb69', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('841aa633-c71f-411a-944f-edaf4c867b80', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('8424b7a3-aead-4621-8bfa-ebcc90afc86b', 'dee555ea-d9c6-407d-9de5-646bfdc07325', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('843a600f-e59d-4e24-acfb-7567ff034a54', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('84f0dd10-c82a-4f55-9c3c-b136aa413aae', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('8577282c-7a19-47f3-8104-f7d28f080841', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('86c2343f-f358-4c66-9baf-af419456dc2f', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('879d4f86-bc5f-4f36-a6d6-db41f7a122ca', 'e7673626-500d-4251-aa90-85e6b9d50a23', '2cdb29c0-49d1-488a-815c-de74f872a705', 1, NULL, NULL),
('87a7d02a-5e05-46a9-99d2-57baeb839ec4', 'b424c935-b69d-4b11-8812-aba3546736eb', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('87ebf0b4-4258-49b0-8f48-a16d6a0d77af', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('88e4fb6c-52b8-49e9-8f07-c779d974048f', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('89afcd27-5ed1-4db9-b9d8-b78680996c1f', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('89c16b36-515c-45b7-a02e-e8eb73f68229', '2779605e-32ff-4d5a-844f-ddec7d59095d', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('8a030d25-67ab-4fd9-a941-219f7fa69004', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('8a0e986c-c77c-47d1-80a3-ad549b885e6b', '35d180bf-0823-4be9-938a-baaa05a29fb8', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('8a2a1387-d615-47c1-b298-df5070f47ad7', '214e2ef6-9fa5-4621-855f-259f171ece90', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('8a5a7d9a-d710-45cd-bd1d-ba57fcf4b386', 'cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('8b8ebcbe-8fc9-4e13-8d30-a4f4c2084169', 'b424c935-b69d-4b11-8812-aba3546736eb', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('8bc546c7-94ff-47c6-9ff5-acf43a4ff2e1', '4654d49f-5ea8-487b-baf6-510f51f0c0bd', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('8be205bc-fa57-42dc-b8d4-ed0510f00dd4', '58630d0d-5df2-4d36-b895-c1f94731f7d0', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('8c2f7e73-85e9-4ad5-9a19-ccdbe65ad23e', 'd0427c26-036b-41ff-85df-2153326cbaa3', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('8c8c310a-c4d8-4755-9320-f18d40fb876f', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('8dc4e27a-e53f-4443-ad17-6de69d1ffcf5', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('8e26ab9e-be0b-4b94-a7cd-8fd2fd81da5a', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('8e7cdf38-9833-4ce7-bf29-2ef7f6620d4c', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('8f993d84-2bd9-4691-9497-92fe1e795db5', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('8fa7b010-a8c2-4107-8191-ee5f54a898ab', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 1, NULL, NULL),
('8ff6363f-a694-4d29-9ea7-04f3af5aaa3d', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('90e2e809-c1cb-4834-8a73-50c75cc882da', '3468c45e-2f30-4684-a537-fc8fef969e4e', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('917b55a1-c09d-4232-9749-ac6b6ed14814', 'c848366b-b82b-4859-a217-e4b0b878dee1', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('91a45889-4d6f-438a-8f7f-fab33cdc8a58', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 1, NULL, NULL),
('91ade0d1-2b51-4d14-a493-d34a2f15e252', 'f0be8449-b32b-4757-a081-0b8d96402541', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('91aedf1d-9320-4eb5-ada5-ef24f4acd887', 'b424c935-b69d-4b11-8812-aba3546736eb', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('91d2e9fe-7e6a-4cd0-ab34-689d436a2966', '15bc2ae9-7198-4d09-a659-7e950dc05216', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('91e2781a-81a7-47a2-a67f-9a33755d5982', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('929b3855-593a-43fc-89e3-469ce83c4e88', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('92d4f398-ff0a-4be4-9b02-f03d782bf7fe', 'f37fe62d-0129-4ed2-9234-a24286c5ee67', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('9302b58a-4d67-4fcd-9fd8-0d8444ecef4b', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('93321cb1-4577-4a69-a9dd-1ea151be1665', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 1, NULL, NULL),
('9349db76-b93a-4e20-adfc-3976671a73d8', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('94849537-9c28-41ff-8986-5a514ab502d3', '2cd6e835-681b-482e-976a-e8066a9c6252', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('94cdba9a-dc92-4d09-8c76-7221f95f1d19', '04473047-f317-4d1f-8948-6875ed73059b', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('9563a2b1-8e6d-425f-a052-4fab50992315', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('959d351d-48f9-48bd-b9e0-4fe74422b373', '05df9749-8fb8-4244-8500-6dce2262ddeb', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('962aea77-e2f6-4bd5-94b2-b954a84fc0b5', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('970a7d37-0627-4378-a874-b01f0eaf6d69', '79c5d5d1-39c0-4617-a516-320602bee9af', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('97e65fc7-67f5-4bdb-af45-9a36e8476bc4', '4654d49f-5ea8-487b-baf6-510f51f0c0bd', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('988852c3-6c91-4a20-a2ce-73a299bc29b7', 'd3539a15-8752-4837-a88b-143d9adeeede', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('98c35801-97e5-4647-87e9-3f57e7b096d6', 'e7673626-500d-4251-aa90-85e6b9d50a23', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('98c58c4c-4ff0-4518-bdae-b001c4bf5fdf', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('98d87ba8-9334-4d3a-9f6b-cf5fb180ceb7', 'e197f398-16cb-4037-a4f7-71f51df4bb69', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('99291a45-1fb5-44b2-9c91-c8839188545c', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('9967eec1-2824-414c-b2d8-b1211ef2bab2', '21bbecef-357a-47cd-a78a-daf385c869a6', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 5, NULL, NULL),
('9a42328a-9155-4640-b86f-3caacbb6ccea', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('9a89448b-bbbf-4b29-9658-2530bed12fbd', '58630d0d-5df2-4d36-b895-c1f94731f7d0', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('9b3add98-8937-47c7-8de8-f3ad5ba1a17c', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 4, NULL, NULL),
('9b9c7555-4ba7-4451-ba24-0447f994e495', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('9ccf49b6-3ac3-4c0f-8559-19fdf36b61a0', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('9da57fe6-f4d7-4ad1-aa4f-b4039ad379fa', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('9db387d5-dc4f-46f9-a421-242613b38bf9', '7d982347-90b4-4454-9d6f-0103e31f84e3', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('9dfe1099-99bb-48e3-9c09-d3f0c01ed35e', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('9e1fec6f-91bc-4d41-b3aa-27b8541c013a', '0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('9e2508b3-dc78-4ce7-a388-fe2fb03e2c0c', '05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('9e8bb014-636f-4e85-b2db-a24195c82f7f', '2779605e-32ff-4d5a-844f-ddec7d59095d', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('9f63816b-a6fa-41fa-b355-bf8512911d8c', 'c8bbed56-707d-40d5-ae62-d8318ede5974', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('9ff889e3-3224-4892-a8ee-70a786d71fdc', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('a0064389-deb4-4870-bebb-8f6232dd6b83', '9de148ce-7d82-46e7-a389-8c5dc1634396', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('a0369c63-5a08-40c4-b9e7-51fefa76c3f2', '79c5d5d1-39c0-4617-a516-320602bee9af', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('a0423995-9fa0-45fc-b79e-3c4ebc9d92cf', '35d180bf-0823-4be9-938a-baaa05a29fb8', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('a06d103a-c458-4ea9-92a9-c7cace855d79', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('a0d60c44-fa12-4693-9dd9-a408a265accb', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('a172725b-685f-4cdd-80f6-b73d7b1d32a5', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('a1d0efac-f4f6-4051-a659-2765ee397d7f', '3e164f99-8716-4df2-ad99-f74c544f2450', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('a273ee4c-32af-49ed-a9d7-b90a244efc7b', '90ab2b43-00ec-492c-83fb-6299c62f1a3e', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('a2f05ca1-16e4-44c3-8e72-c7c8ef2e2eff', '0cc79b65-0fdd-4684-a61a-48191eb4c210', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('a3a24996-4b26-4e56-bb79-ac6ee67f635a', '10412337-5fb4-4bb6-ba48-0efc36c5489d', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('a3ac7a8e-7215-4e6b-adfa-25ca59b25637', 'e197f398-16cb-4037-a4f7-71f51df4bb69', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('a4767fe8-1edd-46ee-8ba6-1b00dde4e8d8', 'fcdac56a-8cd0-41bc-8e62-77fa943d3a32', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('a493da1b-0afa-41cb-833f-4e2539a06c8a', '2779605e-32ff-4d5a-844f-ddec7d59095d', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('a4a436eb-7008-41d9-915e-5b8d2ca040c1', '79c5d5d1-39c0-4617-a516-320602bee9af', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('a51fad8e-d39b-4102-afdc-dbbf8c0d0b07', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('a5475e69-fc03-46ed-817f-162054b94ddc', '21bbecef-357a-47cd-a78a-daf385c869a6', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('a54832c2-7453-4eff-93b0-78243766f29b', 'a64f21f3-63e9-448a-9491-f7d69f333829', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 4, NULL, NULL),
('a579ba1b-f1f6-410e-ac19-98c76d555c90', '2779605e-32ff-4d5a-844f-ddec7d59095d', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('a650b65c-66dc-4c61-a68e-ab8d63b6b6fc', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('a667c869-a24f-4e2a-b625-ca844e3e09b0', '79c5d5d1-39c0-4617-a516-320602bee9af', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('a68bfe7f-b9fb-4609-bc3e-c1f77493e1e4', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('a7722200-c878-4329-927e-5c5c6e07ae48', '35d180bf-0823-4be9-938a-baaa05a29fb8', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('a7b8dee2-d924-4ade-ba32-1e615ecde3ed', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('a824cbad-ab25-4795-a1d9-2e4d2c929a89', '90ab2b43-00ec-492c-83fb-6299c62f1a3e', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('a85b71e2-1106-45d4-ad57-422a491d419d', '0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('a8aca609-62da-481e-a9f4-58bff6f46db1', '90ab2b43-00ec-492c-83fb-6299c62f1a3e', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('a8efcefe-0bdc-4e97-8941-93d7c68798b8', '05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('a8f6797b-0d75-4b20-a52d-8f8c064a0ba8', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('a92f409f-b4fb-469f-9d30-e9083b0d3659', 'ca314ab3-288f-4421-838a-4f4c410d21eb', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('a9a7f5b1-fd74-41ec-aebe-89302198450d', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('a9f0a2ac-c107-4fae-9441-e2641c482735', 'a64f21f3-63e9-448a-9491-f7d69f333829', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('aa01c100-9e64-4f8a-b3b6-74eda304a12e', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('aa06925c-5f6d-4a36-a48b-193262b1ca87', '10412337-5fb4-4bb6-ba48-0efc36c5489d', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('aa40ed7a-2f35-4eee-a1e8-db126141e8fe', '05df9749-8fb8-4244-8500-6dce2262ddeb', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('aa70172d-9cba-46c5-aa3c-1ae3dd8e9d03', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('aadf9f3b-b7f8-4b60-994e-8771880ba8a2', 'e9cea982-eba9-408a-a911-a208b0ac774d', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('ab0d90e7-bc1c-482e-8fb0-410c9ae168f3', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 1, NULL, NULL),
('ab31a21f-5497-4e17-929e-13340564acbb', 'af9e52c3-d295-4d44-9150-58172b10d798', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('ab589169-1521-4a98-b03d-6f6e5f204046', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('ab8acd17-42b7-4235-ba73-ec92d6750364', '5728e84c-2a60-4622-84da-d86d1adc9a14', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('ac0d6169-99e5-42fe-90bd-86396660a699', '43846bc8-6385-4d07-b742-b9b4de21bd10', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('ac1c65ee-54a0-4b5f-9ce8-a8b5b5f0bb73', 'd1d425b0-e41d-4982-bc1c-ae39353d620c', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('ac568cb6-315b-4e05-b2f7-9e9aa839750c', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('ac67c641-91f8-4efd-8603-b659ce21550a', '5728e84c-2a60-4622-84da-d86d1adc9a14', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('acd51b4d-49d2-4016-bf70-6f205c036e84', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('ad2b6aec-c512-46aa-abc7-1157fcebfd37', 'dee555ea-d9c6-407d-9de5-646bfdc07325', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('ad32fec1-81f7-4372-8a19-cbcb93ec1ee4', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('ad4b3379-6aeb-4cc4-8b8d-13124623e2ab', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('ad75979f-0647-4bb2-abc9-a4fedc3df210', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('adedc0b1-fbbf-48a8-83c1-bb6f73d04d4d', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('ae8464af-816b-4d78-b1d5-f0df7cc691dd', 'e66836b3-1c0d-4cb3-ac3e-f176fa440395', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('aeafb061-ac55-4c75-80ec-4ca5242a85df', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('aec472ce-f101-4ebf-bd6b-74840747ee2c', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('aec51064-88d9-4819-b401-d37b90b9b6f0', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('aeef7f03-6cc2-41a0-a232-ef331d9108f7', '214e2ef6-9fa5-4621-855f-259f171ece90', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('af10db35-c451-4a22-b286-cdf97a0e48a0', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('af9e1242-de7f-4c96-948b-08d71045d3f4', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('b00e1c12-3128-46be-b2dc-dfbe73f6da3d', '43846bc8-6385-4d07-b742-b9b4de21bd10', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('b0b6f06d-4c72-4eaf-8a76-f0ebe9fdc123', '3e164f99-8716-4df2-ad99-f74c544f2450', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('b1412943-1066-4e2d-9a3c-fc0e960bce73', '3e164f99-8716-4df2-ad99-f74c544f2450', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('b1d5c052-b081-4360-91ad-9fabb60abe3e', '6f026cb2-a499-4b37-9108-b29a683c4746', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('b1f6f4d4-0bd5-4f85-b581-cd8020c3b386', '04473047-f317-4d1f-8948-6875ed73059b', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('b21fc9e7-5043-47dc-ae97-1a801499063a', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('b2745c66-3b81-4a1e-ba37-c68f12c20c5a', '43846bc8-6385-4d07-b742-b9b4de21bd10', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 1, NULL, NULL),
('b28831dd-72c8-471f-9cd2-7168fd92d9c3', 'e3324aa2-c101-4e59-af43-d9c52d149db5', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('b28ddec6-5952-462a-a306-09b64e017cca', 'e9cea982-eba9-408a-a911-a208b0ac774d', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('b2aea1ac-7b28-4d73-bd65-7f9671483faf', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('b2b68640-2f9d-4e4f-ae16-dd8fd9833df0', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('b2f008fe-0e7a-4a7b-95a0-9d201ef9e8c6', '5728e84c-2a60-4622-84da-d86d1adc9a14', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 5, NULL, NULL),
('b37bec42-d5be-4b6d-8979-1a433d1b7a09', 'e8285381-459e-464d-b4cc-240068000369', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('b3daa6f1-8a1b-4f46-8cd8-87285886636a', 'd1d425b0-e41d-4982-bc1c-ae39353d620c', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('b471ac08-241c-482c-bbaa-1a175e36a5f7', '43846bc8-6385-4d07-b742-b9b4de21bd10', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('b478c5f9-bf24-465f-a63d-93cc4744516d', '7d982347-90b4-4454-9d6f-0103e31f84e3', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('b5da1985-a7ce-4601-946b-1dc486858d6b', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('b69311a8-d21d-4bee-805d-67de85aef347', 'e66836b3-1c0d-4cb3-ac3e-f176fa440395', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('b6967d8e-2563-4e2f-aa0f-6decd45d8e8f', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('b6bc7a7e-55c9-43d2-9aac-f5170481fcff', 'e3324aa2-c101-4e59-af43-d9c52d149db5', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('b6c2f20a-1b16-42cf-ae18-9c41dd961078', '0cc79b65-0fdd-4684-a61a-48191eb4c210', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('b71e012e-23e9-4eb1-a5e5-96ee76ddfe6d', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 4, NULL, NULL),
('b75ba739-f88c-47c5-a74f-94f062a88aaf', 'f0be8449-b32b-4757-a081-0b8d96402541', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('b795f4f5-0ad4-4223-8e44-b7581fd6bad6', '2cd6e835-681b-482e-976a-e8066a9c6252', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 4, NULL, NULL),
('b7b11ec1-6f7d-4ef2-b899-00c4afbc0976', '0cc79b65-0fdd-4684-a61a-48191eb4c210', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('b8b5cec2-82ec-437a-96b4-6fccfcf0a271', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('b8f0ebbc-a5bb-4715-ac89-29cdaa8118fe', 'c8bbed56-707d-40d5-ae62-d8318ede5974', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('b9554dff-fd35-4cee-82e1-972f400ebc82', '4654d49f-5ea8-487b-baf6-510f51f0c0bd', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('b9ef2940-7bd8-413c-8650-b809c4f7d33c', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('baaa0d3d-e18a-467c-87fe-31cd32b98cfb', 'c8bbed56-707d-40d5-ae62-d8318ede5974', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('bab5d69f-f8ed-4448-94b8-5bae168f1558', '3e164f99-8716-4df2-ad99-f74c544f2450', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('baca4c37-8876-4a4a-8ad2-f0737f0a05d0', '43846bc8-6385-4d07-b742-b9b4de21bd10', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('bb05526e-0391-4d48-83d8-6baed4a81839', 'af9e52c3-d295-4d44-9150-58172b10d798', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('bb243e1b-3e54-46de-88bc-651d999aad68', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('bb85ec25-a171-4352-b7bd-6fcc4096e80a', '05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('bb986455-c525-40c1-88b4-7f974dc693aa', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('bbd8bb59-7dcd-457e-b29f-fa91e9d44837', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('bbf137aa-4d6f-49ba-a13c-bd2ae4f16b0e', '05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('bd018fee-1526-4c03-b84d-d8944bf5ba79', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('bd4d9c3e-8652-4e8d-a749-8d4715e4e783', 'a64f21f3-63e9-448a-9491-f7d69f333829', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 1, NULL, NULL),
('bdfe488a-aed5-43c3-8f13-25df1530088e', '3468c45e-2f30-4684-a537-fc8fef969e4e', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('be43054b-3f3d-4e4e-bc58-ce7110174f2d', 'e8285381-459e-464d-b4cc-240068000369', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('be780af8-c08a-4381-bac5-92e3a55e77a8', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('beaa7de9-89b5-42a7-8635-082f94765964', 'fcdac56a-8cd0-41bc-8e62-77fa943d3a32', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('beae5524-dac7-440a-96d3-24bd2df373e0', 'cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('bed23dbc-e77e-4c0a-8a04-ab75529277db', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('bf43072b-f54d-498a-a18c-1a36aaa0e828', 'f0be8449-b32b-4757-a081-0b8d96402541', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('bf6f2a32-a8db-4a37-8af1-343b8d6c055c', 'e7673626-500d-4251-aa90-85e6b9d50a23', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('bfaa2cba-df45-48af-ac47-46531c2ebd56', '214e2ef6-9fa5-4621-855f-259f171ece90', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('bfbd2147-647e-4c03-8170-bdabff5c3ca0', '35d180bf-0823-4be9-938a-baaa05a29fb8', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('c0539f3b-1d4b-482d-bd3e-c6459b0c5e2a', '21bbecef-357a-47cd-a78a-daf385c869a6', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('c05ddad2-8821-4a6e-b173-e08ed4d47ffc', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('c07642a5-305f-4232-a092-7bcd5bca9e8f', 'c8bbed56-707d-40d5-ae62-d8318ede5974', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('c07c9284-4271-46fd-933d-864a1e278311', 'd3539a15-8752-4837-a88b-143d9adeeede', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('c084a2c6-8e56-4d74-aeca-9010cb31db00', 'd0427c26-036b-41ff-85df-2153326cbaa3', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('c18cd971-7ec9-434a-b77e-248e4a0145ac', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('c1ba2f6a-1876-47ed-920a-4116441b061b', '3468c45e-2f30-4684-a537-fc8fef969e4e', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('c1d67982-62b4-4fe7-ba6d-9426d5072ff4', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 4, NULL, NULL),
('c1e4a06e-392c-403a-846b-c7d671b1c209', '3468c45e-2f30-4684-a537-fc8fef969e4e', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('c26b0b8a-0dc5-4914-8641-f6fdf5628613', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('c2e5a3a9-ae28-443b-8b8e-0ce9c3d5513e', 'd1d425b0-e41d-4982-bc1c-ae39353d620c', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('c36274c6-0c99-421b-9248-de0890d894af', '58630d0d-5df2-4d36-b895-c1f94731f7d0', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('c3686d9c-a90d-42ca-9826-5fdd157e137c', '0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('c3f46cdc-ce66-435a-9ab1-ddf0995f9629', 'e8285381-459e-464d-b4cc-240068000369', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('c3f7ddde-5435-4079-bf33-bd31ac0387ed', 'af9e52c3-d295-4d44-9150-58172b10d798', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('c4839489-001d-4bd8-b45e-b8a08c15912b', '6f026cb2-a499-4b37-9108-b29a683c4746', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('c4bae819-3160-4c13-beca-3ab3b23ce9f5', '35d180bf-0823-4be9-938a-baaa05a29fb8', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('c4bb9d58-4d31-4ab7-9c68-acb0296b09ea', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('c4be2c8b-a3ab-444d-a600-cda5299eeb4e', '58630d0d-5df2-4d36-b895-c1f94731f7d0', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('c4e02493-90d6-4af5-be0c-bd270c85c3df', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('c564d7eb-aaf9-472f-bb80-51cd834b6676', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('c68eae89-1b67-4622-8a66-69483ff4006d', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('c6a3cfcd-a903-4769-bc6b-497652d7012a', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 4, NULL, NULL),
('c70685bf-cf62-46ad-b734-9fb768750fec', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('c75261e4-4862-4561-bd53-b9b6787c1267', '31f4a144-d6a2-410b-bb9b-243ffc6bee2a', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 4, NULL, NULL),
('c81a178b-b59e-4ce5-b6af-c10257013d74', 'e66836b3-1c0d-4cb3-ac3e-f176fa440395', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('c8310ab6-a845-4426-a740-13c43ecb9e14', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('c8fdf092-17ea-436a-a274-12d85a86376b', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('ca01e87b-a6db-4540-a91c-b71b8714c794', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('cb5441c4-0c1f-43e1-a020-2e7ab4110c16', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('cbefcbfd-0531-4ea0-935e-880bf42e0fa4', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('cc58be15-acad-492d-9edb-0986395ded3d', 'e9cea982-eba9-408a-a911-a208b0ac774d', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('cc735ff9-e405-4cc6-adc6-a9c5034ae3d9', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '2cdb29c0-49d1-488a-815c-de74f872a705', 1, NULL, NULL),
('ccbc8078-7225-4da7-9b82-0d354c7c3c6b', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('cd047bb5-3672-460d-85ba-fcb6253b9b32', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 1, NULL, NULL),
('cd1e3170-e6b9-4fb3-ad24-b54dba057514', '3e164f99-8716-4df2-ad99-f74c544f2450', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('cd52d45a-0646-4595-89b8-f97fb8a79536', '7d982347-90b4-4454-9d6f-0103e31f84e3', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('cdb8b931-ab76-4e5e-bdc7-d66f4f2ff252', '0cc79b65-0fdd-4684-a61a-48191eb4c210', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('ce060451-67ed-434f-8c06-2a0261c443d5', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 1, NULL, NULL),
('ce40649a-30bb-4742-86cb-8d56d4df5cc8', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('cf49c8f3-58bb-4118-9d45-6acc0647a73a', '214e2ef6-9fa5-4621-855f-259f171ece90', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('cf9f9b36-7892-4117-a142-a17c1bda018a', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('cfa949b8-8607-424d-bb35-cb332946f6bc', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('d0273454-7149-4658-804b-e8d8a89f6997', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('d0a397e2-39d0-4769-8e4a-69f7e6c48893', '35d180bf-0823-4be9-938a-baaa05a29fb8', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('d16293bf-68e0-42a1-8e86-156463598152', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('d2941d36-3b59-4c1b-a43a-4bb59877ca73', '5728e84c-2a60-4622-84da-d86d1adc9a14', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('d2baf0ea-1fd1-40d5-a791-b6c48b887e1c', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('d2d7ff4f-8b8f-4cab-a696-6a0e4b141de8', '214e2ef6-9fa5-4621-855f-259f171ece90', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('d2fd8588-b810-4445-9b53-6a1f6c3670ca', '2779605e-32ff-4d5a-844f-ddec7d59095d', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('d3597fbc-18cd-4b96-b3a1-ec0badb01981', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('d3946349-efd1-4e6e-8858-cade50333645', '0cc79b65-0fdd-4684-a61a-48191eb4c210', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('d3cd7b86-7208-47b3-835f-06ecccb05018', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('d3e586ad-e7a8-4e0a-8983-8dbcc7453049', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('d40c19dc-2de3-4087-867e-74b417f8cd1a', 'e66836b3-1c0d-4cb3-ac3e-f176fa440395', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('d428d5ef-9cf5-4e74-b2e7-daa3b423b530', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('d4b0adea-0be7-43fe-bff4-193389572663', '5728e84c-2a60-4622-84da-d86d1adc9a14', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 4, NULL, NULL),
('d4d8e2e0-1e7f-4ef4-9757-61afa7ae66ab', '31f4a144-d6a2-410b-bb9b-243ffc6bee2a', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('d4fa5b82-fd4b-4d82-9a7a-65c82e873648', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('d5dca6a2-2f21-423b-837c-5759a177e6e6', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('d5f0e274-8b5a-4e2d-96eb-82beef04adab', 'd3539a15-8752-4837-a88b-143d9adeeede', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('d63e92ba-8d7e-4dca-8075-2b9548655928', 'b424c935-b69d-4b11-8812-aba3546736eb', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('d689eb20-b0f8-422e-b1ec-e6da2a6f9df2', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('d6fbebc2-e6c6-4e97-b0d5-0dc824873139', '0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('d720b392-17e5-4a0b-a9d5-6c9c6703465c', 'cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('d7b33137-8947-4324-b4fe-e2281469ee0a', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('d8186410-d8f5-4180-848f-2186cbbb6a1c', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 1, NULL, NULL),
('d8b6a776-5cfc-4391-808e-8fc33fe70c47', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('d918128f-0948-4594-8ac7-5a118bbb06cd', 'e66836b3-1c0d-4cb3-ac3e-f176fa440395', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('d91a7828-871b-4870-8bd2-308841f65b23', 'e197f398-16cb-4037-a4f7-71f51df4bb69', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('d959db37-e7d6-4712-a046-e0c72ff14076', '214e2ef6-9fa5-4621-855f-259f171ece90', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('dae06b90-484e-4c2b-9c22-fc5f9f7788c4', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('dbffce00-72c5-4a27-abdc-a0d0cc0ae535', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('dc09ea87-91d1-4b06-b69f-221b29dc3972', '2779605e-32ff-4d5a-844f-ddec7d59095d', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 4, NULL, NULL),
('dc10a637-34fa-4bba-a97d-764d78da8cc8', '9de148ce-7d82-46e7-a389-8c5dc1634396', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('dc1fd1eb-8d20-43ff-a29f-0d77fd73e767', '58630d0d-5df2-4d36-b895-c1f94731f7d0', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('dc3f66f2-9b63-4a2c-9d13-bd511423b6bf', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('dd5d32a7-bc4f-40be-96d3-d901fdff8f0b', '50b4b6cb-90d0-48b8-8e06-955fa443f747', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('dd68ac25-4d56-4571-af6c-783abc08e006', '58630d0d-5df2-4d36-b895-c1f94731f7d0', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('ddc4fde8-caa3-4023-8d61-fb097703f735', 'f0be8449-b32b-4757-a081-0b8d96402541', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('de22b16e-8e72-44d2-80fb-6a5671caf280', '04473047-f317-4d1f-8948-6875ed73059b', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('de547e34-af8e-4f61-80db-64dded0569fd', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('de672249-2a98-46c5-b664-a3115d5d313f', '04473047-f317-4d1f-8948-6875ed73059b', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('df5808dd-6bfc-4d30-8a8e-a49d19abc761', '9de148ce-7d82-46e7-a389-8c5dc1634396', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('df5ef71d-1627-475d-b906-e62f88940f9c', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('df8c1b2e-0d94-4a8d-b5c4-9ec4832fa1d6', '3e164f99-8716-4df2-ad99-f74c544f2450', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('e030a013-7405-4823-9279-a6ac4d8ba95c', '0cc79b65-0fdd-4684-a61a-48191eb4c210', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('e05a4cf4-9312-4237-9f66-c1918caed1ab', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('e0aa9010-2482-4350-bc04-ab164fa30d05', '9de148ce-7d82-46e7-a389-8c5dc1634396', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('e16ed955-480f-416e-ad47-b2be1dd5454c', '10412337-5fb4-4bb6-ba48-0efc36c5489d', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('e18ff8cf-de74-4103-9b4a-2675e0ddb11f', '7d982347-90b4-4454-9d6f-0103e31f84e3', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('e1f95ccf-41ec-4baa-952e-06a1dc55a082', '05df9749-8fb8-4244-8500-6dce2262ddeb', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('e292601e-14fc-48cd-bf6d-a11b9bdaafa4', 'dee555ea-d9c6-407d-9de5-646bfdc07325', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('e325e1b2-2b58-492e-9851-94675d446678', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('e3694363-fedf-4c90-918f-a8536b9d61b3', 'a64f21f3-63e9-448a-9491-f7d69f333829', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('e3e6c998-56e3-4480-bc74-193dadb22bc6', '52853423-896a-4c78-8d02-a90b4a0fcc05', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('e4399c3c-d1eb-4e9c-8b8c-d3e3f89e22aa', 'e8285381-459e-464d-b4cc-240068000369', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('e47dc01e-e0b4-4f59-ada8-a428dca2d0d9', '43846bc8-6385-4d07-b742-b9b4de21bd10', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('e51b3e4c-c1eb-4a8d-8312-343a664fa30b', '9de148ce-7d82-46e7-a389-8c5dc1634396', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('e522dbaa-1e15-4e9e-a95c-4b1785bcd286', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('e53b737d-7201-462a-9c34-fccbcad54d40', '9de148ce-7d82-46e7-a389-8c5dc1634396', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('e5c27e3e-104f-493d-a5b3-059698c8d0a1', 'd1d425b0-e41d-4982-bc1c-ae39353d620c', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('e5c5a5f5-ea6a-40ba-984e-d1116271662b', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('e5ce7b19-c995-4b04-9f54-f3adb096050d', 'd1d425b0-e41d-4982-bc1c-ae39353d620c', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('e6b579c6-ab6a-4a66-9bfb-85193d3ebe92', 'c848366b-b82b-4859-a217-e4b0b878dee1', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('e73a093c-8cb8-4d00-91e0-884060a671f7', 'e3324aa2-c101-4e59-af43-d9c52d149db5', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL);
INSERT INTO `CharacterAttribute` (`id`, `characterId`, `attributeId`, `value`, `specialty`, `description`) VALUES
('e759c45c-0b43-48d7-9293-7156c18d5a0c', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('e7e50971-7402-422e-9ade-796bddb5d917', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('e7fe53a2-fbf9-4616-868d-a3146d0737bd', 'c848366b-b82b-4859-a217-e4b0b878dee1', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('e804e349-69c3-4847-87c9-d197e7ea9370', '90ab2b43-00ec-492c-83fb-6299c62f1a3e', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('e87c286f-91b1-4c57-adaa-aa5acd9f0f89', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('e89a10c5-45d6-49dc-b500-3f8bb795f2b3', 'd3539a15-8752-4837-a88b-143d9adeeede', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('e967b72f-e4e0-4af9-b027-2f9506603333', '5728e84c-2a60-4622-84da-d86d1adc9a14', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('ea1ed856-7065-4818-a8b5-9a8007273d41', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 3, NULL, NULL),
('ea6105ff-6620-4637-8f77-731b036aa001', '2779605e-32ff-4d5a-844f-ddec7d59095d', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('eb11a136-94ec-4944-9e7a-86d352a80853', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('ebd32cdf-ff96-4e70-a050-ffa838d98c90', 'fcdac56a-8cd0-41bc-8e62-77fa943d3a32', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('ebd75496-024a-4a05-a03a-873e66c4b31a', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 5, NULL, NULL),
('ec559ab3-bb1f-478c-af07-4535279057dc', '05df9749-8fb8-4244-8500-6dce2262ddeb', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('ecbaaf82-714a-48d7-a8b4-f1ac0c61c94a', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('ecbfb627-1ba9-48a8-8608-fb31bac8e89e', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 1, NULL, NULL),
('ece0b3c2-51ce-43e5-b08b-8e3a4e451694', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('ed4c5232-4a2c-47d7-9574-0b3d0f400ef8', '3468c45e-2f30-4684-a537-fc8fef969e4e', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('ed9dda0e-c9cb-4d17-a4e9-59913c48b3de', '43846bc8-6385-4d07-b742-b9b4de21bd10', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('ee587561-4649-432f-bcba-75b107e39bf5', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('ee8e22ad-1cbb-4e52-a759-572863c88204', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 4, NULL, NULL),
('eed8f1cd-31fe-4d27-ab88-2d8889eb6595', 'e8285381-459e-464d-b4cc-240068000369', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('eede4b2f-022b-4859-8d9d-95df50713521', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('efc4aac8-082f-40db-b3fe-f83807484ce5', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('f036c27b-910f-4dbc-a82f-78fc2e46332d', 'ca314ab3-288f-4421-838a-4f4c410d21eb', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 4, NULL, NULL),
('f0cd9606-3e0c-4ce9-8edd-8e4155f3ba41', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('f156399c-6d61-40df-96ac-e0239cddd02b', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('f15d68fb-0352-4340-b22b-d9db4f8ce064', '4654d49f-5ea8-487b-baf6-510f51f0c0bd', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('f1dfea13-a1da-4ae2-af18-155bb344b2e5', '4654d49f-5ea8-487b-baf6-510f51f0c0bd', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 4, NULL, NULL),
('f237b7bc-aa58-4b75-9b95-7fbc681563ed', '9de148ce-7d82-46e7-a389-8c5dc1634396', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('f27ab124-107e-42d3-aaae-0b1f92e3e095', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 1, NULL, NULL),
('f2f00e21-e5a0-49cd-bd3a-478822a8d2ed', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 3, NULL, NULL),
('f30acf06-bab6-4710-80f7-61fa71345967', '3e164f99-8716-4df2-ad99-f74c544f2450', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 3, NULL, NULL),
('f371ff12-273e-486e-9802-dd27c8314af4', '05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('f39333a7-5104-4d68-a855-48082fa685f5', '79c5d5d1-39c0-4617-a516-320602bee9af', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 2, NULL, NULL),
('f399cb21-e428-4dc4-b475-87c320c71828', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('f3a21e98-5d3e-4568-8f23-29b89e6aa184', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 5, NULL, NULL),
('f4378a7a-cb34-43e8-9a34-8ce42b85d187', '04473047-f317-4d1f-8948-6875ed73059b', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('f46212c3-eafb-43f6-a81b-2ab2771bfaef', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 1, NULL, NULL),
('f50337d5-5ced-4a85-9bbe-69541de7bb9d', '21bbecef-357a-47cd-a78a-daf385c869a6', '2cdb29c0-49d1-488a-815c-de74f872a705', 3, NULL, NULL),
('f53907a7-6dd6-43dc-8063-ae58ccafc0ec', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 2, NULL, NULL),
('f5c078ea-ff1d-4cc6-ba37-7bf6b0714ca1', 'd3539a15-8752-4837-a88b-143d9adeeede', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('f5d84020-ae3d-47b8-a8de-7e33a5bb9eb6', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('f617ce76-10a6-4240-9cb4-d93cac37c120', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('f65c06ad-1cf9-441a-a8b9-7d70fb6d3226', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '58ce2e4e-3e49-4047-a374-8df6f3d89952', 3, NULL, NULL),
('f6b06dd7-2f7d-45d2-92e8-1c99d5b00ad1', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 3, NULL, NULL),
('f7a0ae90-c91f-4a16-939a-194538d3144d', '90ab2b43-00ec-492c-83fb-6299c62f1a3e', '092fddd3-9ac0-4e81-8df2-6d114acdf438', 2, NULL, NULL),
('f7c00499-7b57-42ab-b84a-3fd2411a4e78', '2cd6e835-681b-482e-976a-e8066a9c6252', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 1, NULL, NULL),
('f7f826e5-fb7c-4b74-9bb9-575687838fde', 'e66836b3-1c0d-4cb3-ac3e-f176fa440395', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('f828bbb8-da7a-4bf8-871d-aa6e95b9abe4', '52853423-896a-4c78-8d02-a90b4a0fcc05', '2cdb29c0-49d1-488a-815c-de74f872a705', 2, NULL, NULL),
('f8bc1626-2401-435f-a0fb-4d54b4c32532', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 4, NULL, NULL),
('f91caf6d-6056-423e-97e9-e5f4e86cd3aa', '05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 3, NULL, NULL),
('f949dc2f-4637-4aa8-9eb5-f4eafe8966f1', 'cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 2, NULL, NULL),
('f9b88de4-a77a-46e4-aa50-46f1d7c644d1', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 2, NULL, NULL),
('fabb0b69-34de-468b-a660-5ebae07ce56a', '7d982347-90b4-4454-9d6f-0103e31f84e3', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 3, NULL, NULL),
('fb340647-70b4-40d2-99c8-25e458f5a8e8', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('fbe8f2d5-3f5d-4b66-86e7-13d1ddf0f63a', 'c848366b-b82b-4859-a217-e4b0b878dee1', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('fc11f82b-575f-4d88-9f09-0303e6878140', '35d180bf-0823-4be9-938a-baaa05a29fb8', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 2, NULL, NULL),
('fc48433a-7268-486e-8dc3-8bb126ba5201', '2cd6e835-681b-482e-976a-e8066a9c6252', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('fca1b1fb-a2c9-4495-a898-326c17650fc4', '50b4b6cb-90d0-48b8-8e06-955fa443f747', 'f0f82117-eaab-4f89-bcb1-c963a258bf4c', 2, NULL, NULL),
('fcb86d0d-4efb-4885-9139-c8f4e249f333', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL),
('fcdd38ff-097f-4999-9b65-7bd54a888220', '4654d49f-5ea8-487b-baf6-510f51f0c0bd', '2f242854-097b-42d0-9aeb-e3d8bc8a3d5e', 1, NULL, NULL),
('fce1b911-e496-4682-b070-72fb617da93b', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('fcfad94c-ff50-4c05-9959-8d56cbb52764', '7d982347-90b4-4454-9d6f-0103e31f84e3', 'c49eb647-f3b5-4664-ac18-b5056f56f195', 3, NULL, NULL),
('fcfe0deb-8449-4dde-baea-cd394fcf6aa0', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 4, NULL, NULL),
('fd6fc9b9-ae3b-42c0-be09-be1eae2fe952', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 2, NULL, NULL),
('fdab3f5b-9dc5-49c4-b890-dc26f17d4da1', 'fcdac56a-8cd0-41bc-8e62-77fa943d3a32', 'ee6e0ee0-cd39-4191-bcec-e8b3f7b86fcb', 1, NULL, NULL),
('fedf909c-d732-48dc-9fe5-664fd2005556', '05df9749-8fb8-4244-8500-6dce2262ddeb', 'dcf46522-36a5-40d9-85c7-f0383bfce0ca', 2, NULL, NULL),
('ff008721-663a-4c0f-ab76-c891162f14d9', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '1cb29de6-2172-4bd3-9667-00d494d09c2d', 3, NULL, NULL),
('ff66d7eb-a9c5-4db7-a0fb-548b6d62cd0c', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '444f9aeb-d5e0-4642-b656-6657d7631bfe', 3, NULL, NULL),
('ffecf95c-b48e-4aa1-bbad-9aeee2285757', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', 'b458ef99-5c2d-40ed-b938-f2d6492a98a7', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `CharacterBackground`
--

CREATE TABLE `CharacterBackground` (
  `id` varchar(191) NOT NULL,
  `characterId` varchar(191) NOT NULL,
  `backgroundId` varchar(191) NOT NULL,
  `level` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `CharacterHaven`
--

CREATE TABLE `CharacterHaven` (
  `id` varchar(191) NOT NULL,
  `characterId` varchar(191) NOT NULL,
  `havenDefinitionId` varchar(191) NOT NULL,
  `regionId` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `CharacterItem`
--

CREATE TABLE `CharacterItem` (
  `id` varchar(191) NOT NULL,
  `characterId` varchar(191) NOT NULL,
  `itemId` varchar(191) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `CharacterMeritFlaw`
--

CREATE TABLE `CharacterMeritFlaw` (
  `id` varchar(191) NOT NULL,
  `characterId` varchar(191) NOT NULL,
  `meritFlawId` varchar(191) NOT NULL,
  `points` int(11) NOT NULL DEFAULT 1,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `CharacterPower`
--

CREATE TABLE `CharacterPower` (
  `id` varchar(191) NOT NULL,
  `characterId` varchar(191) NOT NULL,
  `powerDefinitionId` varchar(191) NOT NULL,
  `level` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `CharacterPower`
--

INSERT INTO `CharacterPower` (`id`, `characterId`, `powerDefinitionId`, `level`) VALUES
('0b0195f4-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '2c56e5cb-8069-4469-8044-87435369c846', 3),
('0b01a377-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', 'e11ed28d-03e3-4387-aa49-71e421b0ff27', 2),
('0b03c78b-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', 'd198ead9-5e80-46d0-ba08-7594ed464ccb', 3),
('0b03d467-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '91aaa1a2-a616-474c-8844-bcf07b1309aa', 1),
('0b03e17e-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '24ff7ac9-5d0b-4bf9-b417-c35648793293', 1),
('0b05d83a-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '92b9c79a-22b9-4a63-9ddc-f8f84f17aa92', 2),
('0b05e5a1-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '832e8c0b-3182-43ff-8d34-fada7a99c4a5', 2),
('0b05f19e-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'b71f34d9-ae8c-4e89-b021-42122bf166b3', 1),
('0b083149-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'd198ead9-5e80-46d0-ba08-7594ed464ccb', 3),
('0b083e51-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '91aaa1a2-a616-474c-8844-bcf07b1309aa', 2),
('0b09ea9a-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', 'd198ead9-5e80-46d0-ba08-7594ed464ccb', 2),
('0b09f63c-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '91aaa1a2-a616-474c-8844-bcf07b1309aa', 2),
('0b0a012c-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '24ff7ac9-5d0b-4bf9-b417-c35648793293', 1),
('0b0bcf14-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', 'a13bb356-8ad4-4740-8a6c-0bab48c1dcff', 3),
('0b0bdbd3-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', 'd198ead9-5e80-46d0-ba08-7594ed464ccb', 2),
('0b0fa67e-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'd198ead9-5e80-46d0-ba08-7594ed464ccb', 2),
('0b0fb5a5-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'b71f34d9-ae8c-4e89-b021-42122bf166b3', 3),
('0b12a1c3-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '92b9c79a-22b9-4a63-9ddc-f8f84f17aa92', 4),
('0b12b334-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', 'b71f34d9-ae8c-4e89-b021-42122bf166b3', 1),
('0b148844-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'e11ed28d-03e3-4387-aa49-71e421b0ff27', 4),
('0b1495bb-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '832e8c0b-3182-43ff-8d34-fada7a99c4a5', 1),
('0b1714c4-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'd198ead9-5e80-46d0-ba08-7594ed464ccb', 3),
('0b1723eb-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '91aaa1a2-a616-474c-8844-bcf07b1309aa', 2),
('0b18fea1-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '24ff7ac9-5d0b-4bf9-b417-c35648793293', 2),
('0b19085f-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', 'a13bb356-8ad4-4740-8a6c-0bab48c1dcff', 3),
('33c69f41-e6d1-454b-bec7-09f3b5d94cd3', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', 'a13bb356-8ad4-4740-8a6c-0bab48c1dcff', 4),
('fc648f2d-ce1e-44c7-84a5-3e7caa01200a', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', '2c56e5cb-8069-4469-8044-87435369c846', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `CharacterPowerSelection`
--

CREATE TABLE `CharacterPowerSelection` (
  `id` varchar(191) NOT NULL,
  `characterPowerId` varchar(191) NOT NULL,
  `powerLevelDefinitionId` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `CharacterSkill`
--

CREATE TABLE `CharacterSkill` (
  `id` varchar(191) NOT NULL,
  `characterId` varchar(191) NOT NULL,
  `skillId` varchar(191) NOT NULL,
  `value` int(11) NOT NULL DEFAULT 0,
  `specialty` varchar(191) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `CharacterSkill`
--

INSERT INTO `CharacterSkill` (`id`, `characterId`, `skillId`, `value`, `specialty`, `description`) VALUES
('0039b7fb-c6c9-4c74-8023-1bdb9bf98ef6', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '689563da-dfc5-4bf0-93b6-1e23665157cb', 2, NULL, NULL),
('0043c9bb-72f6-45fc-93be-80b00a7f69ee', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 2, NULL, NULL),
('00cfa86e-28a9-4263-93cc-47bec869d4ff', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 1, NULL, NULL),
('01f44f24-a7d1-4eb3-972f-0ebdea83491f', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 2, NULL, NULL),
('02d3f1d4-77d3-4ea5-b36e-5018f71ed88e', '2779605e-32ff-4d5a-844f-ddec7d59095d', '443f7320-b393-4008-8984-17ae5889d0ce', 2, NULL, NULL),
('0313f70c-380e-43a5-a585-b8c6877003f6', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('03195b34-87f9-4faf-b4bd-12d12aae980c', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('0492a19b-cce3-43fd-90bf-224bf5685e48', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('04d4a3ca-27fb-43e1-9227-cdacff8c50e1', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 1, NULL, NULL),
('04eefc35-fd8b-4eea-9e8a-e2c61ea4ef76', 'b424c935-b69d-4b11-8812-aba3546736eb', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('04f0d8eb-b6ea-4001-be34-0f621b93e583', 'ca314ab3-288f-4421-838a-4f4c410d21eb', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 2, NULL, NULL),
('053a263b-b587-4c62-a8da-31622acf8de8', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('0589c3b9-5ef8-4dde-b81c-b2b9f57eae28', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 1, NULL, NULL),
('05b3a205-7f4b-4176-8a46-62329af767e8', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('05bcc1a4-8369-451e-b59e-78859fde7335', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('06d3e3a2-7cd8-480a-8700-2655bf898d36', '50b4b6cb-90d0-48b8-8e06-955fa443f747', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('07101dc5-7f33-45cf-9712-5a70b72618fc', '2779605e-32ff-4d5a-844f-ddec7d59095d', '689563da-dfc5-4bf0-93b6-1e23665157cb', 2, NULL, NULL),
('078e6764-a550-4b93-aa95-326f18c0a089', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 2, NULL, NULL),
('07d27d0e-c3ad-4bc1-8f5e-955ffeda6576', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 2, NULL, NULL),
('0837fe58-c9d4-4627-bf8f-712a2d42e659', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('083c19ec-9b96-4ba5-b768-c0fdc46ec41f', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 3, NULL, NULL),
('08b51527-ad30-4ca0-bcc6-4ab01eaf5ee4', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', 'b2699299-24e8-4255-9cde-e7ce81efd674', 1, NULL, NULL),
('08b7ae5a-bef0-4096-8606-5dc74647c0df', '2cd6e835-681b-482e-976a-e8066a9c6252', 'ed013ea8-f060-4925-be66-c79549e3220f', 1, NULL, NULL),
('08fa6aad-3d54-4b2f-b47d-2517799b115f', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '689563da-dfc5-4bf0-93b6-1e23665157cb', 1, NULL, NULL),
('090eb4fa-7bff-4fbe-b573-9b7404d82041', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 3, NULL, NULL),
('09292c44-b35e-4ef9-bc41-4d9a0c988058', '21bbecef-357a-47cd-a78a-daf385c869a6', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('09ba4b78-4a2e-41f0-8ad9-268f63bf6577', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('09f98c6b-00c9-483c-8f4b-67b0f7e957d2', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('0a00b048-4182-4561-9f62-ac1dc371cd94', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '4205111f-2065-49a2-ada5-60e5c328b876', 3, NULL, NULL),
('0b00bc06-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('0b00c90b-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '443f7320-b393-4008-8984-17ae5889d0ce', 2, NULL, NULL),
('0b00df53-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 2, NULL, NULL),
('0b00ebed-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 3, NULL, NULL),
('0b00f8de-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('0b0105e5-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', 'dc608ac5-e286-4360-a820-a22dedb5232b', 1, NULL, NULL),
('0b011295-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '87ed59fb-09b7-41a2-9705-7beab70efa70', 2, NULL, NULL),
('0b011fd6-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '07b45576-7589-4250-8b4e-2c51bcd0628f', 2, NULL, NULL),
('0b013771-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('0b014f66-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 2, NULL, NULL),
('0b015de0-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('0b02cf66-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('0b02dca6-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 3, NULL, NULL),
('0b02f74c-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('0b03208f-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 3, NULL, NULL),
('0b032f70-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 2, NULL, NULL),
('0b033fd6-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '07b45576-7589-4250-8b4e-2c51bcd0628f', 2, NULL, NULL),
('0b034ec2-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '4205111f-2065-49a2-ada5-60e5c328b876', 3, NULL, NULL),
('0b036631-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('0b037dc0-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('0b038b01-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('0b04ece7-0eb0-41f8-b5b9-d75bad25b828', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '2862c2c3-adfb-4f2a-880e-d34d0807872c', 2, NULL, NULL),
('0b050f50-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'b63554b8-e343-492a-ba2d-057f831c22aa', 3, NULL, NULL),
('0b051de5-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 1, NULL, NULL),
('0b052aa5-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '443f7320-b393-4008-8984-17ae5889d0ce', 3, NULL, NULL),
('0b0542a8-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 1, NULL, NULL),
('0b05501d-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '8064844d-9e75-40ee-8616-bfa2e6596acd', 2, NULL, NULL),
('0b056756-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'dc608ac5-e286-4360-a820-a22dedb5232b', 1, NULL, NULL),
('0b057485-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '07b45576-7589-4250-8b4e-2c51bcd0628f', 3, NULL, NULL),
('0b058bfb-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('0b059892-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('0b05a6c2-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '27b60157-4fc9-4da8-b021-cc5032f25b84', 2, NULL, NULL),
('0b072581-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('0b07319d-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('0b073dcc-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('0b074966-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 1, NULL, NULL),
('0b0754c5-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('0b0760a6-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('0b076c7b-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('0b077861-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '8064844d-9e75-40ee-8616-bfa2e6596acd', 1, NULL, NULL),
('0b0786b5-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('0b07934c-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '07b45576-7589-4250-8b4e-2c51bcd0628f', 1, NULL, NULL),
('0b079fae-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '05127c64-f20e-4340-9dcb-9cd39bd578a6', 2, NULL, NULL),
('0b07ac5d-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '4205111f-2065-49a2-ada5-60e5c328b876', 3, NULL, NULL),
('0b07c2c0-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('0b07cfc5-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 1, NULL, NULL),
('0b07e697-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('0b07f285-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('0b07fed8-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('0b093f12-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', 'b63554b8-e343-492a-ba2d-057f831c22aa', 3, NULL, NULL),
('0b094a53-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 1, NULL, NULL),
('0b0956b5-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '443f7320-b393-4008-8984-17ae5889d0ce', 3, NULL, NULL),
('0b096b12-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('0b09764e-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('0b0981b0-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '07b45576-7589-4250-8b4e-2c51bcd0628f', 2, NULL, NULL),
('0b098d3c-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '05127c64-f20e-4340-9dcb-9cd39bd578a6', 3, NULL, NULL),
('0b09a06f-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('0b09b46f-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('0b09bf93-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 2, NULL, NULL),
('0b0b0748-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 1, NULL, NULL),
('0b0b1aa0-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('0b0b255c-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('0b0b310b-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '87ed59fb-09b7-41a2-9705-7beab70efa70', 2, NULL, NULL),
('0b0b3bd7-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 3, NULL, NULL),
('0b0b4690-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '07b45576-7589-4250-8b4e-2c51bcd0628f', 3, NULL, NULL),
('0b0b51ed-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '4205111f-2065-49a2-ada5-60e5c328b876', 2, NULL, NULL),
('0b0b6a15-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('0b0b846c-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('0b0b9e45-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('0b0cfa3b-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 1, NULL, NULL),
('0b0d079f-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('0b0d13fd-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '8064844d-9e75-40ee-8616-bfa2e6596acd', 2, NULL, NULL),
('0b0d1f66-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', 'dc608ac5-e286-4360-a820-a22dedb5232b', 1, NULL, NULL),
('0b0d2ad3-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '07b45576-7589-4250-8b4e-2c51bcd0628f', 1, NULL, NULL),
('0b0d3655-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '05127c64-f20e-4340-9dcb-9cd39bd578a6', 2, NULL, NULL),
('0b0d4f82-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 3, NULL, NULL),
('0b0d5e82-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 2, NULL, NULL),
('0b0d6ce5-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('0b0d86cf-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 2, NULL, NULL),
('0b0d9303-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 3, NULL, NULL),
('0b0d9eb5-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '2908b1f5-ffa1-42a8-afea-94f296274616', 1, NULL, NULL),
('0b0eb9d5-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('0b0ece3d-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('0b0eda3b-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 1, NULL, NULL),
('0b0ee516-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('0b0ef311-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('0b0effcf-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('0b0f0df8-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 1, NULL, NULL),
('0b0f1eff-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '07b45576-7589-4250-8b4e-2c51bcd0628f', 3, NULL, NULL),
('0b0f2e45-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '4205111f-2065-49a2-ada5-60e5c328b876', 1, NULL, NULL),
('0b0f47e3-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('0b0f5591-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 1, NULL, NULL),
('0b0f702e-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('0b10fcff-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('0b111bf6-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('0b112e2a-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 2, NULL, NULL),
('0b113e8f-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('0b114ea8-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('0b115ffa-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('0b116e2a-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 3, NULL, NULL),
('0b1186a9-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('0b119ff5-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('0b1266ce-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('0b13c8ed-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'b63554b8-e343-492a-ba2d-057f831c22aa', 3, NULL, NULL),
('0b13d69f-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 2, NULL, NULL),
('0b13e52d-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '443f7320-b393-4008-8984-17ae5889d0ce', 3, NULL, NULL),
('0b13fde9-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 3, NULL, NULL),
('0b141b0b-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '05127c64-f20e-4340-9dcb-9cd39bd578a6', 2, NULL, NULL),
('0b142a22-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 3, NULL, NULL),
('0b143882-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'b2699299-24e8-4255-9cde-e7ce81efd674', 3, NULL, NULL),
('0b144653-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('0b145437-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 2, NULL, NULL),
('0b15da29-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('0b15e610-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('0b15f0eb-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('0b15fc5b-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 1, NULL, NULL),
('0b160908-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('0b16148f-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('0b161f5d-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('0b162b40-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '8064844d-9e75-40ee-8616-bfa2e6596acd', 1, NULL, NULL),
('0b16366b-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('0b1641af-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '07b45576-7589-4250-8b4e-2c51bcd0628f', 1, NULL, NULL),
('0b164d95-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '05127c64-f20e-4340-9dcb-9cd39bd578a6', 2, NULL, NULL),
('0b1659fc-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '4205111f-2065-49a2-ada5-60e5c328b876', 3, NULL, NULL),
('0b167020-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('0b167de8-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 1, NULL, NULL),
('0b169413-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('0b16a192-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('0b16e0a9-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('0b182f4c-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('0b183b10-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 2, NULL, NULL),
('0b18464f-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('0b18524d-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('0b185d95-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('0b186947-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 2, NULL, NULL),
('0b1874c1-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '05127c64-f20e-4340-9dcb-9cd39bd578a6', 2, NULL, NULL),
('0b188099-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '4205111f-2065-49a2-ada5-60e5c328b876', 2, NULL, NULL),
('0b188bc6-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('0b189891-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 3, NULL, NULL),
('0b18ada0-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('0b18b91c-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('0b18c6b2-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 2, NULL, NULL),
('0b18d2ca-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '2908b1f5-ffa1-42a8-afea-94f296274616', 2, NULL, NULL),
('0b2e7071-d37d-48a0-ad79-1cf1fc2f7580', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('0b43f59b-db37-40f6-8123-3446d3b9e3da', '79c5d5d1-39c0-4617-a516-320602bee9af', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('0b5bf278-33f0-45a6-b782-a91f5ac064ba', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('0b8b4a61-b081-453a-ad93-a67d0326ec22', 'af9e52c3-d295-4d44-9150-58172b10d798', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 3, NULL, NULL),
('0bf226b3-2463-4133-8623-a86f0e03042a', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '87ed59fb-09b7-41a2-9705-7beab70efa70', 2, NULL, NULL),
('0c00a352-5d8f-4ede-ad37-62a9fd32e3b1', '05df9749-8fb8-4244-8500-6dce2262ddeb', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 2, NULL, NULL),
('0c1dc558-4819-4f1f-a321-8169ea0e32e9', 'b424c935-b69d-4b11-8812-aba3546736eb', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('0c4ec04d-5405-48d9-af72-8265c7147a75', '52853423-896a-4c78-8d02-a90b4a0fcc05', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('0d57574d-8869-4a40-a5aa-74f3a0d961c0', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('0daf2ce3-949d-4115-9d8d-4b5270492ba9', 'b424c935-b69d-4b11-8812-aba3546736eb', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 3, NULL, NULL),
('0e317e8c-81b4-4702-884e-2b2f40f0a2e7', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', 'dc608ac5-e286-4360-a820-a22dedb5232b', 1, NULL, NULL),
('0e35ce57-5f3b-4502-aa04-8fab19bc961b', 'a64f21f3-63e9-448a-9491-f7d69f333829', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('0f1dbdb2-a49d-4e66-81b1-41f7176949a5', '6f026cb2-a499-4b37-9108-b29a683c4746', 'ea9cf46b-75b2-42ca-a8aa-c83b5da503f4', 2, NULL, NULL),
('0f26023a-5030-4c22-bef3-991fa0915478', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '8064844d-9e75-40ee-8616-bfa2e6596acd', 2, NULL, NULL),
('0f443b6e-209e-42d5-9761-693bee67ef5f', '2779605e-32ff-4d5a-844f-ddec7d59095d', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('0f761d0c-24d8-4279-b99f-6d81f1ff82cf', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '2862c2c3-adfb-4f2a-880e-d34d0807872c', 1, NULL, NULL),
('0fbccf71-3b43-4f1b-b73c-6b6eb2a0bb17', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('0fd89b72-3b41-4bac-b848-518ad6348c1a', '15bc2ae9-7198-4d09-a659-7e950dc05216', '689563da-dfc5-4bf0-93b6-1e23665157cb', 1, NULL, NULL),
('104fa60f-4777-44ea-b012-3169f5005448', '2cd6e835-681b-482e-976a-e8066a9c6252', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('109ef090-4716-4f36-a180-de08d3c4aa40', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '4205111f-2065-49a2-ada5-60e5c328b876', 2, NULL, NULL),
('10e192a8-8793-4f93-820a-47fb2ed87e26', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('10f02e3c-bbaa-4bcb-a302-5796dd96b6d4', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', '443f7320-b393-4008-8984-17ae5889d0ce', 3, NULL, NULL),
('11d1c1e2-14da-4cff-a9e3-47adbdc8001a', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '689563da-dfc5-4bf0-93b6-1e23665157cb', 1, NULL, NULL),
('11d8c7a2-3e66-4351-a813-279bf2fbc4e1', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('12216d5f-4d89-4ea2-9906-0aef0ab31b77', 'e8285381-459e-464d-b4cc-240068000369', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 3, NULL, NULL),
('126b5693-1e7d-4cbd-a6d1-2a8c975113c3', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 1, NULL, NULL),
('13273307-9cbe-46bc-8a84-946d3ece6641', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 3, NULL, NULL),
('1376ce16-b466-4ce0-9ce3-0bc438d4c35c', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('13bf8cd7-21c3-4b3a-b0c0-ea0c2a302396', '2cd6e835-681b-482e-976a-e8066a9c6252', '516e56c8-f4d8-4a26-94cf-ba0a36c6daa0', 2, NULL, NULL),
('146a003f-64fe-4105-a7e7-070bc37d7939', '5728e84c-2a60-4622-84da-d86d1adc9a14', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('149b6562-5796-4f12-b605-1a83c102c49e', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '689563da-dfc5-4bf0-93b6-1e23665157cb', 2, NULL, NULL),
('14f6910d-9860-49c4-82ba-a25700d9e1ef', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '871a5920-4680-4daf-965e-bd18449c4db2', 1, NULL, NULL),
('150cdc6f-ec14-49c7-87e5-f636431c308a', 'e197f398-16cb-4037-a4f7-71f51df4bb69', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('15bf8c84-5538-4ef2-b992-9d76d12e784b', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('1624020b-484d-42fb-88a4-8d1e9c99804b', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 3, NULL, NULL),
('1649a6f2-ffa6-4423-8510-6cfc93f909fb', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'b63554b8-e343-492a-ba2d-057f831c22aa', 3, NULL, NULL),
('164dcc5e-9659-4a08-b603-01f31c540813', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 2, NULL, NULL),
('16e853aa-840a-4d0e-9fdd-ad5cfb28ea35', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 1, NULL, NULL),
('1710ecb8-66b1-47e3-9e9a-312ffa9e2074', '10412337-5fb4-4bb6-ba48-0efc36c5489d', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('177b1c7b-1cdb-4d74-9553-c80518ca18e0', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'cf2cfe23-2434-4e75-9018-5d225996fbb9', 2, NULL, NULL),
('17c1efde-2f5a-4f4d-b5b5-58b5116009be', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('18077264-f1dd-4d80-9ed9-91e365b33a59', 'e8285381-459e-464d-b4cc-240068000369', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('189625c8-5c3b-4268-8635-69ddc45295e1', '2cd6e835-681b-482e-976a-e8066a9c6252', 'dd36667a-def8-4ff5-af0d-0ac0d7371746', 2, NULL, NULL),
('18f5d78b-4ecd-40df-b302-b6a7d97ceb3a', '2779605e-32ff-4d5a-844f-ddec7d59095d', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('1916646a-eba1-4b3e-b55a-d0a39d17fea6', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('194ef427-a497-4d7b-b849-2b90c3e494c4', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('199be905-9db3-4778-8298-e3234ea0415c', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('19b0b012-e77c-41e4-b7d5-3d724bea3215', '21bbecef-357a-47cd-a78a-daf385c869a6', '8064844d-9e75-40ee-8616-bfa2e6596acd', 2, NULL, NULL),
('1a1e9976-d5fa-4e66-97a3-db6420683af4', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('1a9a0563-8e7c-40b2-8ab8-a0e814048727', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('1ab64725-9c65-4fb5-ba6c-ce51ae6b38a5', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 3, NULL, NULL),
('1b1d3346-5d96-456b-9e00-532c40a9bb39', '2cd6e835-681b-482e-976a-e8066a9c6252', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('1b478263-1c97-4c58-96ec-dcd86ce4add2', 'a64f21f3-63e9-448a-9491-f7d69f333829', '871a5920-4680-4daf-965e-bd18449c4db2', 2, NULL, NULL),
('1b818cef-b011-4fe1-8f1b-d4a27716335b', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('1b8d4a44-599c-4eaa-8ea5-43945a579f03', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('1b8e018d-ec5c-41f4-91e7-a61b41cebf92', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', 'ef6c68d1-47c8-4d08-821a-aa800deecac2', 2, NULL, NULL),
('1c147fa2-663b-4799-8c93-0fe8a80601d8', 'b424c935-b69d-4b11-8812-aba3546736eb', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('1c8625e2-faa6-44ab-9cfc-2219f5a1c3e5', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 3, NULL, NULL),
('1d38ab10-7293-4402-b8ef-8ca6700844eb', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 2, NULL, NULL),
('1de5045b-286f-4f29-9e4a-7ae3c2ae5df0', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('1de7a986-38d0-4239-b276-265fb8971c4c', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('1e9e57d8-7623-42ea-b7db-46ca1278a5da', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', '2908b1f5-ffa1-42a8-afea-94f296274616', 2, NULL, NULL),
('1ef72536-f82c-409c-9024-3bd6bc158ddb', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', '443f7320-b393-4008-8984-17ae5889d0ce', 2, NULL, NULL),
('1f21c0b3-c9f8-4766-a2ef-02c935f27bcb', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('1fdeb4c9-16ed-4494-b75b-cf6054d1becd', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('201cafcc-6be0-4f45-bdc0-2024ef2ba121', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '4205111f-2065-49a2-ada5-60e5c328b876', 3, NULL, NULL),
('20f0e5e9-3f71-4e0f-9756-480702805e3e', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('21576b61-90af-44e1-a3ab-d95f4873e3e9', 'e197f398-16cb-4037-a4f7-71f51df4bb69', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('21cd9602-c6ce-4724-ae4a-326d89cd8fe3', '15bc2ae9-7198-4d09-a659-7e950dc05216', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('231904cb-6db5-42d7-abbb-a14a345c48d2', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('233a4000-b077-4d39-bacd-d457cb1b7789', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'c84de1c5-d785-4153-aa67-9d6704d2ec88', 2, NULL, NULL),
('236b4aaa-9ca0-4444-a6dd-8ae98e07fdaa', '2cd6e835-681b-482e-976a-e8066a9c6252', '871a5920-4680-4daf-965e-bd18449c4db2', 2, NULL, NULL),
('23777e96-a9c6-49da-bf2f-55c1c0045626', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('23ad78e2-3acf-4d10-8490-991e54c525e9', '5728e84c-2a60-4622-84da-d86d1adc9a14', 'b63554b8-e343-492a-ba2d-057f831c22aa', 3, NULL, NULL),
('23bef778-efb0-40a7-81e3-f0407e23f583', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('23d6b1af-7e13-4b27-993b-d6df32d09518', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '2862c2c3-adfb-4f2a-880e-d34d0807872c', 1, NULL, NULL),
('23fb8345-1d2f-4b4a-93de-9bcd6c014952', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 2, NULL, NULL),
('240a9b08-973b-4869-90f3-916783605816', '5728e84c-2a60-4622-84da-d86d1adc9a14', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('242746eb-c140-4e47-8400-5799f7af07a4', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 2, NULL, NULL),
('248ab58f-d5cf-448b-9674-6d64192c1cb3', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 1, NULL, NULL),
('25710518-2b26-4afa-93bd-59efe80afb10', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '0cb581cc-5627-48f5-b9c0-84f7338b88d3', 3, NULL, NULL),
('2619ce34-a0f3-4661-a6fb-1a71f3cb519c', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('26511dd2-01f1-427a-aaaf-3258087063d9', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('2666021e-c17f-4518-9a4e-8239a94c60af', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('2671dc8d-ee36-4f4d-9f08-7bac2cbada21', '6f026cb2-a499-4b37-9108-b29a683c4746', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('27bef781-7a52-4971-9206-716108368b66', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('28209254-7329-4cdc-808e-d466fb4c448e', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('29119d67-78cf-4be5-9415-d275286902cb', '7d982347-90b4-4454-9d6f-0103e31f84e3', 'c84de1c5-d785-4153-aa67-9d6704d2ec88', 1, NULL, NULL),
('29544850-9d05-4510-ab48-80cb0c9747d8', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 1, NULL, NULL),
('2a2d059f-773d-4798-8ee1-8950a5a223d9', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 1, NULL, NULL),
('2a444e95-a9f2-4036-8216-2b12a110e74a', '15bc2ae9-7198-4d09-a659-7e950dc05216', '4205111f-2065-49a2-ada5-60e5c328b876', 3, NULL, NULL),
('2aa8a169-c377-4fcf-a572-43e266ace14b', '15bc2ae9-7198-4d09-a659-7e950dc05216', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('2af5c117-bb66-428e-b11b-1a7eda1559fc', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '689563da-dfc5-4bf0-93b6-1e23665157cb', 1, NULL, NULL),
('2b9e602d-fe0c-4661-8b71-1b9f348cd0e1', 'e197f398-16cb-4037-a4f7-71f51df4bb69', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('2bb5d6e6-8d36-4748-b56a-1f09df337728', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('2c00b8eb-b0b4-4340-827e-f5ea6af09bf7', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('2c1abf2b-c34c-4bee-a838-16d5dc192035', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 1, NULL, NULL),
('2c25c167-4d02-4ae2-bc11-c9b994aeb116', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('2c72c294-0b63-4add-a6c1-c7583c4c5c06', 'e8285381-459e-464d-b4cc-240068000369', '6c29e5e5-481f-4b9c-ba21-fefa2e284f49', 2, NULL, NULL),
('2c861859-78c7-46b9-9c71-96565ef4719c', 'd0427c26-036b-41ff-85df-2153326cbaa3', 'c84de1c5-d785-4153-aa67-9d6704d2ec88', 2, NULL, NULL),
('2c9427e7-c264-4ac0-b38a-0ac7c6939c38', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('2cb42312-bc16-400e-ad4f-4d7e9fbd86db', 'b424c935-b69d-4b11-8812-aba3546736eb', '689563da-dfc5-4bf0-93b6-1e23665157cb', 3, NULL, NULL),
('2cfda73b-07e7-49e9-a653-550ebb2d9b28', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 1, NULL, NULL),
('2d919cbf-ba14-4e80-aedf-1c2caf37f8c4', 'b424c935-b69d-4b11-8812-aba3546736eb', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('2e246e93-8dbc-40ab-bc2a-3825fdec4da9', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '689563da-dfc5-4bf0-93b6-1e23665157cb', 2, NULL, NULL),
('2e47e3d8-b0ec-4977-8d5a-9db80208b361', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('2e592588-ad47-4c7a-8d7d-d9099892f754', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('2f4b5e97-968d-46d0-ad54-cbfa0d2726ce', '6f026cb2-a499-4b37-9108-b29a683c4746', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('302ebd6e-74ac-4b1e-8a60-6a273aa4683c', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('3044d234-98e8-4d00-8c1c-44c89be3703f', 'e8285381-459e-464d-b4cc-240068000369', '4205111f-2065-49a2-ada5-60e5c328b876', 1, NULL, NULL),
('30f9765d-ab83-4773-b3aa-5e92493d6769', '79c5d5d1-39c0-4617-a516-320602bee9af', 'b63554b8-e343-492a-ba2d-057f831c22aa', 3, NULL, NULL),
('314294aa-0502-4321-a4d2-43df0b9a6130', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 3, NULL, NULL),
('31bb69ab-ad3f-4419-ae4c-8b59a94113f3', '5728e84c-2a60-4622-84da-d86d1adc9a14', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('31e7c703-9d0c-4561-9347-43f2e0776de5', 'e3324aa2-c101-4e59-af43-d9c52d149db5', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('320f7dce-97d6-4610-8ed9-53a013024b40', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 2, NULL, NULL),
('323d51e1-3378-4955-96c6-2930d91c103b', 'ca314ab3-288f-4421-838a-4f4c410d21eb', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('326ecdd5-861c-4a6d-9c36-6dbca55bbe10', 'e3324aa2-c101-4e59-af43-d9c52d149db5', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 1, NULL, NULL),
('32921b61-a3fe-4d96-a24d-7808a3c43f5a', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('32c249b5-48ce-4334-a5d3-136d519e475a', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('330c8193-8a77-4c1f-97ac-8eae3f6ac36f', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('3399efa2-f9fc-4c0a-a4dc-71a3ef3d53e5', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '2908b1f5-ffa1-42a8-afea-94f296274616', 3, NULL, NULL),
('33b44eba-9b8d-4d0a-ab0f-0d3865abd5f6', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'cf2cfe23-2434-4e75-9018-5d225996fbb9', 1, NULL, NULL),
('33c88b4f-7089-4197-b409-065c208b2fba', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', 'db1c0914-7c79-4be6-902a-331e1ff01038', 2, NULL, NULL),
('33eae77d-7869-4cc2-9764-11d0b7076c26', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'ea9cf46b-75b2-42ca-a8aa-c83b5da503f4', 4, NULL, NULL),
('345573ef-5e53-42a1-aba2-a8edfa0036c8', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 2, NULL, NULL),
('348dcc67-23a9-4ec8-9e27-dd4d471cb2c2', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '7ae771ff-4e14-4df3-b4d1-9b9ceb3ccc6c', 1, NULL, NULL),
('34d223e9-ecc9-40ca-b44f-fef0e26e3015', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('35615a8a-8736-48d7-a647-9a508344bb7d', '6f026cb2-a499-4b37-9108-b29a683c4746', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('35701e12-5335-4e8e-817d-71b42597e3f4', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('363c65d2-0f86-425d-afc2-9125d814ddba', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('366f0db0-b3a0-49c2-9934-ae5b7e998388', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 1, NULL, NULL),
('36e7078a-4607-4623-a595-5a2a677a47f4', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('37e87289-039f-4eae-99ee-8f156215822f', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 3, NULL, NULL),
('3838bff4-1ccf-4d4f-badc-6739d59b5289', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('38c1bdbc-4a1a-4057-a28c-159b95f68aa2', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('394f9753-e9e5-42a9-9541-9c95b1426952', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('395328ea-ef9b-4bd0-8439-22cc5d160867', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '4205111f-2065-49a2-ada5-60e5c328b876', 2, NULL, NULL),
('39bdb0be-96e1-4e02-81dd-c61bd47c0fd2', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '871a5920-4680-4daf-965e-bd18449c4db2', 2, NULL, NULL),
('39ff4b1c-6bc8-4ab1-80c3-f6b367ef33c3', 'e197f398-16cb-4037-a4f7-71f51df4bb69', 'd5b9c1cf-ab25-46bd-9005-876cdc041bc5', 2, NULL, NULL),
('3a4599e0-d0e4-463b-aaf4-f69da4c3ea11', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '87ed59fb-09b7-41a2-9705-7beab70efa70', 2, NULL, NULL),
('3ad7d176-3b6d-4433-ad5c-a5b2fd88d024', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 1, NULL, NULL),
('3cb82fff-6a9e-4821-83f7-baad4b909629', '3e164f99-8716-4df2-ad99-f74c544f2450', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('3ce3aeb8-bf5f-4172-8567-d77fc1e82696', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 2, NULL, NULL),
('3cfbcd47-4433-44a3-b3df-f4e6c051cfe2', 'dee555ea-d9c6-407d-9de5-646bfdc07325', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 1, NULL, NULL),
('3d280805-c389-4c88-b967-66afa8f728c3', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', '8064844d-9e75-40ee-8616-bfa2e6596acd', 2, NULL, NULL),
('3d4028bb-4a1a-436f-aace-c056c57f03c3', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('3df7a08a-2016-4b35-bf65-8ef6756cf35a', 'd0427c26-036b-41ff-85df-2153326cbaa3', 'b2699299-24e8-4255-9cde-e7ce81efd674', 2, NULL, NULL),
('3e00ea59-cc44-4d1c-aa49-f341455518ac', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 1, NULL, NULL),
('3ecdaf02-10c0-4d2e-894e-969e60d2ea4b', '05df9749-8fb8-4244-8500-6dce2262ddeb', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('3eef5703-ed42-463c-be01-3cc610f06847', '6f026cb2-a499-4b37-9108-b29a683c4746', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('3f5aa29b-82ea-4039-9c58-099bb3060056', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', '6c29e5e5-481f-4b9c-ba21-fefa2e284f49', 2, NULL, NULL),
('3f95cf3d-d5da-4c2c-9fc1-4bf308fd7561', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 1, NULL, NULL),
('3fe7724e-27d2-46ab-8faa-dddbbec15beb', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('40d33a2d-0276-4c52-80fb-86d4ebe3728e', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('42218ef7-ba21-486c-8942-f5804f42c253', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('422a68f7-9260-4dec-af9e-f622861afda0', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 3, NULL, NULL),
('42b7683e-2c5b-405c-b990-9d067908a698', '05df9749-8fb8-4244-8500-6dce2262ddeb', '80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 2, NULL, NULL),
('43120be1-b813-4cb3-b9f1-05c88325389d', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', 'e256b4d2-3bb8-4edf-b0db-a103baa255fa', 2, NULL, NULL),
('4374359b-bf79-4577-a9e0-9bd6dc618b3d', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '4205111f-2065-49a2-ada5-60e5c328b876', 3, NULL, NULL),
('43ae1c5a-16fd-4cdd-8f84-5cb7ccf03b85', 'b424c935-b69d-4b11-8812-aba3546736eb', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('43d91d3a-505a-4bb9-acc0-e90d40e0d3a0', '15bc2ae9-7198-4d09-a659-7e950dc05216', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('43de9fc8-aaae-4989-9e6e-4e2194433268', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('44216b96-0e52-4271-bd48-a6c43bc61ecf', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('4490119e-7013-4250-9c84-54b1bf189c91', 'd0427c26-036b-41ff-85df-2153326cbaa3', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 3, NULL, NULL),
('45e98fb5-fcd1-437f-8aa8-923023b9df0d', 'e8285381-459e-464d-b4cc-240068000369', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('46440b6c-b5af-4d59-a321-fb97b6e772de', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 3, NULL, NULL),
('4683092b-e9bf-4436-a049-097bc1f43842', '79c5d5d1-39c0-4617-a516-320602bee9af', '0be60180-1759-4c07-a241-37180c58b80f', 3, NULL, NULL),
('4694d374-e382-47da-a3b2-03761cb77a45', '52853423-896a-4c78-8d02-a90b4a0fcc05', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('46b99612-1a0c-40aa-adc1-8341f70b7d36', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '689563da-dfc5-4bf0-93b6-1e23665157cb', 1, NULL, NULL),
('46ce5411-4b44-42ec-82f4-53bc6be29000', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '55d18c71-b494-4c22-900d-302f645d3c34', 2, NULL, NULL),
('46eaf541-a93a-4270-a89e-cd26228920fe', '05df9749-8fb8-4244-8500-6dce2262ddeb', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('472e2498-38ef-428f-856c-a880ee3f44cd', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('4792b7d5-2855-4ca8-ac07-84e66b02b1f0', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'b2699299-24e8-4255-9cde-e7ce81efd674', 3, NULL, NULL),
('480204a4-5394-4791-a3b7-05c83291deb8', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('482476a1-e61c-4478-a786-3241c0604353', '2cd6e835-681b-482e-976a-e8066a9c6252', '89dc28e4-a3c5-41bb-91d2-5e9e9c1e191d', 2, NULL, NULL),
('489e502f-2cf8-4560-ba48-b054c03013ff', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('48e00e18-d956-420c-9dc2-1645ffa3dfd6', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('4997d4ad-ac40-4cf8-8638-8497a285875a', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '87ed59fb-09b7-41a2-9705-7beab70efa70', 2, NULL, NULL),
('4a5dc764-ac6b-4aa4-88ac-501f53b04fc4', '15bc2ae9-7198-4d09-a659-7e950dc05216', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('4aa05f41-195f-4340-9569-b0ca5e0358dd', 'a64f21f3-63e9-448a-9491-f7d69f333829', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('4ac7f920-d207-4862-8718-a1c43200cb9f', '5728e84c-2a60-4622-84da-d86d1adc9a14', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 2, NULL, NULL),
('4b7987bd-d2aa-4683-960c-9ba1a74a115b', '5728e84c-2a60-4622-84da-d86d1adc9a14', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 3, NULL, NULL),
('4ca5a4b8-0c6b-482e-8a06-0c203155c89b', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'b63554b8-e343-492a-ba2d-057f831c22aa', 3, NULL, NULL),
('4d13611c-eed1-4153-addb-b34215979255', 'e7673626-500d-4251-aa90-85e6b9d50a23', '0be60180-1759-4c07-a241-37180c58b80f', 3, NULL, NULL),
('4e31b94c-c1b8-4c9e-a8d9-97030bdf8e04', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '8064844d-9e75-40ee-8616-bfa2e6596acd', 1, NULL, NULL),
('4e7bea5d-eecb-4e07-815c-e8333e484383', 'e197f398-16cb-4037-a4f7-71f51df4bb69', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('4e7fdf62-3030-49f9-ad1d-999847bcaa0d', '21bbecef-357a-47cd-a78a-daf385c869a6', '0be60180-1759-4c07-a241-37180c58b80f', 3, NULL, NULL),
('4e9cfe28-ed4c-44ec-8ef9-4c1c258f5d9b', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 3, NULL, NULL),
('4ea84ac7-8023-4f3f-ae16-3606766a319a', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('4ebd03fe-0ecb-42c4-9c87-743fa5e78194', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 2, NULL, NULL),
('4ec249d1-01b1-44cc-86db-f029eafdc8be', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '89dc28e4-a3c5-41bb-91d2-5e9e9c1e191d', 2, NULL, NULL),
('4f31abb1-300d-40ce-a1cd-e583c59d7713', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '89dc28e4-a3c5-41bb-91d2-5e9e9c1e191d', 2, NULL, NULL),
('4f783f20-9929-4113-800d-bce467e02b61', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('4fbd9f3a-496d-47c2-914d-e5c72a2000a6', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('4fcdee30-bfc4-42b3-95bd-c94b4fb6d0cf', '05df9749-8fb8-4244-8500-6dce2262ddeb', '55d18c71-b494-4c22-900d-302f645d3c34', 2, NULL, NULL),
('50122040-3d53-432d-9e25-8bcc059f85cb', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('503277b0-918b-4f47-b95d-561eb274aee2', 'e7673626-500d-4251-aa90-85e6b9d50a23', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 1, NULL, NULL);
INSERT INTO `CharacterSkill` (`id`, `characterId`, `skillId`, `value`, `specialty`, `description`) VALUES
('50633c34-a2e5-48d2-a7b0-b4f84f16854b', '2779605e-32ff-4d5a-844f-ddec7d59095d', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('50e8567a-fa9e-45dc-a283-594566fc54ac', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 2, NULL, NULL),
('5110b352-4780-4fa8-9b38-28156de0de7d', '50b4b6cb-90d0-48b8-8e06-955fa443f747', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 2, NULL, NULL),
('52baf7c9-8ac8-4aa1-b19c-b5d61188863b', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('5384283a-7003-486d-bab9-4f46f862484c', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('546ece62-b5fd-487e-bc04-3a6475d1111d', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('54fe49b6-d226-4bed-ac3c-6eee30f7847a', 'c8bbed56-707d-40d5-ae62-d8318ede5974', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('5532b37e-d820-4ab9-9f8f-1f22e1303b95', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 1, NULL, NULL),
('55480b17-e4f6-423b-aa0e-9ebb80e81c96', 'e7673626-500d-4251-aa90-85e6b9d50a23', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('55b04006-67d2-41bb-95dc-4615f11e9c33', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', '27b60157-4fc9-4da8-b021-cc5032f25b84', 2, NULL, NULL),
('55d15851-f628-49cf-b142-9b1f43a77389', 'd0427c26-036b-41ff-85df-2153326cbaa3', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('5665bd49-7c8c-4b2c-82af-eb6b24cb3454', '21bbecef-357a-47cd-a78a-daf385c869a6', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 1, NULL, NULL),
('56f48548-6aa9-4074-9281-5517af36fdd4', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('57242fbf-32f7-4bf3-9b66-60f3d44834f9', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('576c36a9-6134-48f4-a7a7-8174b55f1274', '10412337-5fb4-4bb6-ba48-0efc36c5489d', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('57c2f900-10ba-4fae-92d0-57cfab9e87b8', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('580c2908-616f-4a33-acd9-ce2be9efbbe0', 'e197f398-16cb-4037-a4f7-71f51df4bb69', 'e3eaa266-5a88-42e9-8cd8-99306ae98732', 2, NULL, NULL),
('5828d587-26ed-4eb5-8f25-e99f507361c1', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('5838c860-3d90-434d-b381-c6feaa682bf0', '7d982347-90b4-4454-9d6f-0103e31f84e3', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 3, NULL, NULL),
('58599f44-6f55-4830-88b6-f5e3222c9b5b', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('5866e71f-26a1-4377-9a17-ec46d1f5805d', 'e7673626-500d-4251-aa90-85e6b9d50a23', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('58d7e267-928a-4bdc-8231-2cd6b1c18a68', 'dee555ea-d9c6-407d-9de5-646bfdc07325', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('59820fce-aa8d-422e-afdb-50a4a59c118f', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 2, NULL, NULL),
('59d0b034-9cbd-4376-acf4-b201a4789005', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('59d3dbc9-bf8a-4e51-b744-1c18fcfde78a', '7d982347-90b4-4454-9d6f-0103e31f84e3', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('59f8550f-267a-4a93-86bf-058e27fa520e', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '8064844d-9e75-40ee-8616-bfa2e6596acd', 2, NULL, NULL),
('5a1c3239-c885-467f-8cc8-9631f0c190bc', 'e8285381-459e-464d-b4cc-240068000369', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('5a2a2ba9-cbb2-4b46-bffb-b3c2c64414f8', '2779605e-32ff-4d5a-844f-ddec7d59095d', 'dc608ac5-e286-4360-a820-a22dedb5232b', 1, NULL, NULL),
('5aa6119c-ffd4-4d89-9489-d938a1e65db9', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('5b6c3172-fad7-42b5-a072-911321d2f34a', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('5bd8c192-f7d4-430a-b51e-845f2d60b4cf', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 3, NULL, NULL),
('5c214916-5777-40de-b3fd-00c6d707c4ba', '3e164f99-8716-4df2-ad99-f74c544f2450', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('5c394798-ce8f-4926-93ef-e3dbd3f12481', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '2908b1f5-ffa1-42a8-afea-94f296274616', 2, NULL, NULL),
('5c75f226-6d11-4c1a-aacd-7dfbd2462a5b', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 2, NULL, NULL),
('5caba245-751f-46e0-b462-0d2c9f782231', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 3, NULL, NULL),
('5cb093f6-cc3f-448c-a02a-e574042b3755', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('5cdaadbc-da44-47ad-8a42-511fd53884b4', '2779605e-32ff-4d5a-844f-ddec7d59095d', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('5d9495b5-0308-40e2-a19e-adaea00d2733', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 2, NULL, NULL),
('5dc3e36a-bfee-4350-924b-c5cc485e60b1', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '55d18c71-b494-4c22-900d-302f645d3c34', 2, NULL, NULL),
('5e67b0cb-83ac-4c92-9989-03b72e6c8e2d', '05df9749-8fb8-4244-8500-6dce2262ddeb', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('5eba70d8-666a-4198-8472-825a14211a9f', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('5ec079ef-2b3a-4e02-b0fa-67aa9c84d791', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('5f1558c1-21aa-432e-88d2-5646dc00b1e3', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 1, NULL, NULL),
('5fae2ecc-5f80-44fa-9bff-72720e14629e', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'dc608ac5-e286-4360-a820-a22dedb5232b', 2, NULL, NULL),
('5fb0c878-d3b7-4f19-945d-1345aeed961c', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '89dc28e4-a3c5-41bb-91d2-5e9e9c1e191d', 2, NULL, NULL),
('5fbcd463-6fd3-46e5-8f3c-049ef395def4', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 2, NULL, NULL),
('6010da95-81cf-451f-8e7b-473c6970f43f', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('605fb68f-68a1-46fc-acb9-15e43a389efb', 'dee555ea-d9c6-407d-9de5-646bfdc07325', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('60cae705-7397-4a7b-9a28-a5dc398ea7a6', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('614e69b3-5eac-463a-81af-6885d9e46347', '3e164f99-8716-4df2-ad99-f74c544f2450', '443f7320-b393-4008-8984-17ae5889d0ce', 2, NULL, NULL),
('619bfce9-7f79-46c7-aa1f-fa411b1085d9', '2779605e-32ff-4d5a-844f-ddec7d59095d', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 2, NULL, NULL),
('62319a03-f43e-4318-a101-453ce0ab831b', '79c5d5d1-39c0-4617-a516-320602bee9af', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 3, NULL, NULL),
('6246b1e9-544e-4891-886d-0cdcb71e7130', 'd0427c26-036b-41ff-85df-2153326cbaa3', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('62856d10-8c47-4e59-8418-e76f764ae643', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('62a9b41f-995c-4d89-b1b7-d78acaa91820', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '443f7320-b393-4008-8984-17ae5889d0ce', 2, NULL, NULL),
('62e7123c-173d-4918-addd-be46f93c3967', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '689563da-dfc5-4bf0-93b6-1e23665157cb', 1, NULL, NULL),
('6332dfce-3a1b-4b3a-8778-f5ec785d3fff', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('6350c767-6624-4276-ab87-db1d25d6734e', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'dc608ac5-e286-4360-a820-a22dedb5232b', 1, NULL, NULL),
('6379cbe8-646e-4677-b543-17db2363f06d', 'e3324aa2-c101-4e59-af43-d9c52d149db5', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 1, NULL, NULL),
('641f7995-c9eb-4f82-ada0-11cca805e088', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('646c0beb-c4b2-441e-b19d-7f9774164753', 'e7673626-500d-4251-aa90-85e6b9d50a23', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('64869c28-5150-4ae0-9d9a-080514d8ac4c', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', '443f7320-b393-4008-8984-17ae5889d0ce', 3, NULL, NULL),
('64c77f30-bb12-4a93-bdd3-f70a9c36c1ad', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '443f7320-b393-4008-8984-17ae5889d0ce', 3, NULL, NULL),
('659eee3c-cf6f-4796-9f05-a9218923446e', '05df9749-8fb8-4244-8500-6dce2262ddeb', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('663715d8-e333-4cf3-acd6-6c55d4640788', '3e164f99-8716-4df2-ad99-f74c544f2450', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('663822b6-7fba-459e-b97f-c935df2ffae7', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('665a6f5c-ab52-418d-ab56-368c9fd72cf7', '15bc2ae9-7198-4d09-a659-7e950dc05216', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('66ad1e72-f8d1-48ae-94c9-51f716e3b4c4', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 2, NULL, NULL),
('670284e0-3559-4a16-8efd-591cedfe38a4', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('67928c4b-54ac-4f7d-94e5-707b098afcfb', '7d982347-90b4-4454-9d6f-0103e31f84e3', '6c29e5e5-481f-4b9c-ba21-fefa2e284f49', 1, NULL, NULL),
('67f75768-6e2c-44ad-836e-aa1958550b73', 'a64f21f3-63e9-448a-9491-f7d69f333829', '443f7320-b393-4008-8984-17ae5889d0ce', 2, NULL, NULL),
('68a35cdf-b3e4-4fd0-bd57-ecb1427675ec', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 3, NULL, NULL),
('69e20058-c74f-424e-8416-8fd3af31390a', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 3, NULL, NULL),
('6a07283d-97ca-4d3a-896e-28a122ed2d1e', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 2, NULL, NULL),
('6a22fecf-9eb9-4995-8510-eefed2ea27b8', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('6a2613ae-0171-4733-a9e5-2a51264e747b', '52853423-896a-4c78-8d02-a90b4a0fcc05', '63d12e39-1156-4406-adb3-55205e5564ea', 1, NULL, NULL),
('6a923c61-60d4-4205-82b1-1ad41b2652fe', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', 'dc608ac5-e286-4360-a820-a22dedb5232b', 1, NULL, NULL),
('6b4b2a60-9bda-45b6-84ef-59d5fe1302b2', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '2862c2c3-adfb-4f2a-880e-d34d0807872c', 1, NULL, NULL),
('6b68ed20-e7d9-4456-9bd0-3a51695ac0f1', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('6bdbac1a-ea0d-4b27-a6cb-b785a7fa5d75', '6f026cb2-a499-4b37-9108-b29a683c4746', '80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 2, NULL, NULL),
('6c2afcec-c6a6-4a27-92ad-5b4ad67b1449', '6f026cb2-a499-4b37-9108-b29a683c4746', '61e73dee-307b-41b0-a986-1d06afc668cd', 2, NULL, NULL),
('6c2ca539-15fd-437f-97ba-004b4937f01e', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '95a1aedc-366f-40fe-9020-edaccbe51ed8', 2, NULL, NULL),
('6c9b6ee7-e072-4c67-a61d-c39123d519c5', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '75ba9355-1c76-4a0b-90d5-85d684b7f590', 2, NULL, NULL),
('6cbe6983-5f90-43e1-aedb-5f96983ec5a7', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 2, NULL, NULL),
('6d512395-e45d-4017-801f-b1c96d530ebb', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 2, NULL, NULL),
('6d53ecd4-af7e-41e0-a568-e27a68fd5659', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('6ef89a1e-deaf-4340-8f7d-c54bd6b8c739', '15bc2ae9-7198-4d09-a659-7e950dc05216', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 1, NULL, NULL),
('6fc3222f-b6b9-45fb-9d35-90451574aa9e', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 2, NULL, NULL),
('70ebbc96-ea15-4550-98d4-b5686d575ec3', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('7126755d-453b-4a14-8aa5-1a83c82a0b6d', 'e197f398-16cb-4037-a4f7-71f51df4bb69', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 3, NULL, NULL),
('71daebc6-7b85-44ba-a2f6-a59a439ff127', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 3, NULL, NULL),
('727a5c54-b39c-4174-ad61-7f449e98a546', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 2, NULL, NULL),
('72d07e17-a78a-4e95-908e-223dcb313bbe', 'af9e52c3-d295-4d44-9150-58172b10d798', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 1, NULL, NULL),
('72fb0be2-4ebc-4e5b-9156-9897e39a5df5', 'e7673626-500d-4251-aa90-85e6b9d50a23', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('736f1857-8f6a-4f90-82d5-a99eb767fa65', '6f026cb2-a499-4b37-9108-b29a683c4746', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('737709c3-d486-4de2-a9a4-cbe57f8f79e7', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('737f9184-c309-4cbd-948b-faeb7c84c098', 'b424c935-b69d-4b11-8812-aba3546736eb', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('738beca2-75b2-43e7-890d-5c637df079eb', '05df9749-8fb8-4244-8500-6dce2262ddeb', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('738c8330-ac4f-413b-981a-fd901544b8a9', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '689563da-dfc5-4bf0-93b6-1e23665157cb', 1, NULL, NULL),
('74579c7c-b347-4df1-ab42-ebb0f1f59ff6', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('7462517f-4640-432b-9169-fa2fb655e458', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '2862c2c3-adfb-4f2a-880e-d34d0807872c', 1, NULL, NULL),
('748420eb-d6d6-41e8-bb96-d103b8588b5e', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '75ba9355-1c76-4a0b-90d5-85d684b7f590', 1, NULL, NULL),
('754248e1-cab7-45d3-b2cf-3ce154853d13', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '3e6a90c0-acf2-4799-ab1c-364e25a500e6', 2, NULL, NULL),
('75c094a7-303f-409f-83ed-7058e05a8876', 'd0427c26-036b-41ff-85df-2153326cbaa3', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 2, NULL, NULL),
('75e609d6-410b-4de9-af49-5e6940a8add2', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('76180492-64a5-4444-bf84-fcb0fbf1086d', 'e7673626-500d-4251-aa90-85e6b9d50a23', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('7647f97a-df12-40dd-be18-127f4e322da3', 'e7673626-500d-4251-aa90-85e6b9d50a23', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 1, NULL, NULL),
('76d2daa7-1e11-4b11-a6fd-55ce8390b4de', '3e164f99-8716-4df2-ad99-f74c544f2450', '89dc28e4-a3c5-41bb-91d2-5e9e9c1e191d', 2, NULL, NULL),
('76d67541-08dd-42dd-8c6c-dd9eb6369774', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', 'ed013ea8-f060-4925-be66-c79549e3220f', 3, NULL, NULL),
('770d7184-6563-4020-b675-2c42dd00eaa1', '21bbecef-357a-47cd-a78a-daf385c869a6', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 1, NULL, NULL),
('7713b215-79e4-419d-b898-28cd96f30ffc', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('772ca848-a104-4a48-b721-1b2d8a75b1db', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('773307c6-3b8a-4392-8a81-dcb646800175', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('774aafa6-4e78-4ab8-addc-bc02a0a16bb3', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '27b60157-4fc9-4da8-b021-cc5032f25b84', 1, NULL, NULL),
('777b02c0-c917-4be3-97be-b3394566b21e', '79c5d5d1-39c0-4617-a516-320602bee9af', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 2, NULL, NULL),
('783fae51-96e3-4bc4-81ed-4fc86410ae4d', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('7868666b-d54c-4ce0-a37c-9b567a590134', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '689563da-dfc5-4bf0-93b6-1e23665157cb', 3, NULL, NULL),
('78698d5a-36fb-4ebe-a94c-99140a9fd983', 'af9e52c3-d295-4d44-9150-58172b10d798', '6c29e5e5-481f-4b9c-ba21-fefa2e284f49', 1, NULL, NULL),
('7890ea8f-10b5-4f2b-afff-0c7723c74cf4', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 1, NULL, NULL),
('78b0b4d3-5b7c-4cc7-80d0-a167b087c6dd', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '0953362a-1a54-4dc6-b6f7-1da179148bbf', 2, NULL, NULL),
('78d3d76e-d17f-4f96-8074-79f8e8126880', 'e7673626-500d-4251-aa90-85e6b9d50a23', '4205111f-2065-49a2-ada5-60e5c328b876', 1, NULL, NULL),
('7900fb1a-8afc-4116-8b7d-201b4d108274', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 1, NULL, NULL),
('79a0545a-f857-40e5-b96c-8ad437edce78', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 2, NULL, NULL),
('79b744f2-6a64-4d11-b1a3-f15e7680964c', '7d982347-90b4-4454-9d6f-0103e31f84e3', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 3, NULL, NULL),
('7abace54-7498-455f-a036-a6396056967d', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('7ba7ac4f-9e81-4cee-be1a-033bba11cfae', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 2, NULL, NULL),
('7bf6e58d-414a-42e9-802d-4aac7692cee7', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '4205111f-2065-49a2-ada5-60e5c328b876', 3, NULL, NULL),
('7c181205-6a78-4830-929b-4f38ad375e94', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 3, NULL, NULL),
('7c74b769-40f5-4676-a4ea-edb000da3f08', 'a64f21f3-63e9-448a-9491-f7d69f333829', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('7d02d35b-b956-479a-b1a6-aa089f031a1c', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('7db7fdd1-cc4a-4fd2-95df-a478c31d9875', '79c5d5d1-39c0-4617-a516-320602bee9af', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 2, NULL, NULL),
('7e4f7b3a-f11f-4075-8dfd-7d50da75d648', '3e164f99-8716-4df2-ad99-f74c544f2450', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('7f4a33d9-fd28-4bd8-b5fa-3c6275ddea15', '52853423-896a-4c78-8d02-a90b4a0fcc05', '8064844d-9e75-40ee-8616-bfa2e6596acd', 2, NULL, NULL),
('7fa2e3b4-5a92-474f-8b92-0468390dde1f', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 1, NULL, NULL),
('81ad04a9-96d3-4432-8dc6-b41c35b8fee9', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', '689563da-dfc5-4bf0-93b6-1e23665157cb', 2, NULL, NULL),
('81cd7e6f-a219-4932-b8c4-148b11cfaea8', 'e197f398-16cb-4037-a4f7-71f51df4bb69', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('8267b218-e25e-4fc0-ae4e-228f0f12cb89', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '95a1aedc-366f-40fe-9020-edaccbe51ed8', 2, NULL, NULL),
('83a68d05-ff8c-4f37-80d1-c74556cc3d91', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '2862c2c3-adfb-4f2a-880e-d34d0807872c', 1, NULL, NULL),
('844ea370-01c8-4890-bfc2-b439a54da8eb', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '871a5920-4680-4daf-965e-bd18449c4db2', 2, NULL, NULL),
('84684e7b-86ed-4fc4-986f-4d032cbef502', '2cd6e835-681b-482e-976a-e8066a9c6252', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 1, NULL, NULL),
('846b561a-5fbb-4fb5-977d-f3469d7b0f13', '2779605e-32ff-4d5a-844f-ddec7d59095d', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 2, NULL, NULL),
('846ba7fd-68e2-49a8-be67-d392d8dfc731', '52853423-896a-4c78-8d02-a90b4a0fcc05', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('85047b74-e3da-4013-afbf-0548e08080ca', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('8534c113-1055-4ab8-95fb-f20b2613293c', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'bd89ae90-55ab-473b-92b1-3c6bae308f67', 2, NULL, NULL),
('854b3dd3-72c5-40f2-a792-c809dd309d01', 'dee555ea-d9c6-407d-9de5-646bfdc07325', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('857af04e-7281-41e2-afb5-d43a4d0e0419', 'af9e52c3-d295-4d44-9150-58172b10d798', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 2, NULL, NULL),
('85d7ce1b-4ba2-44ef-bdcb-bb6a492dfec2', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 2, NULL, NULL),
('86271010-85e4-4376-b97f-02e605de3ef4', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 3, NULL, NULL),
('864a9758-298b-40cd-8c8c-26d12969cd0c', 'af9e52c3-d295-4d44-9150-58172b10d798', 'c84de1c5-d785-4153-aa67-9d6704d2ec88', 2, NULL, NULL),
('865bfa9f-00dd-4d63-a202-0f1e3a9feda5', 'e7673626-500d-4251-aa90-85e6b9d50a23', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('86d43a90-bcf3-4bc0-be95-4e1a9f9aa8ef', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('8757aebc-464e-4698-bd1d-18ac88af09f5', 'd0427c26-036b-41ff-85df-2153326cbaa3', 'f6388b17-9580-4b2e-bfe2-acbdd3106d89', 2, NULL, NULL),
('877442c9-0a10-4aba-84b7-96c0fd9611ce', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '689563da-dfc5-4bf0-93b6-1e23665157cb', 1, NULL, NULL),
('87bdcd15-9621-4643-80f2-e45aac1370c4', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 1, NULL, NULL),
('882d0e17-c2d1-4062-83e6-018dfad6b6db', '10412337-5fb4-4bb6-ba48-0efc36c5489d', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('89417ae8-c485-4685-865f-f35f415ca23e', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 2, NULL, NULL),
('89487dd1-e930-4d40-886a-23e5382480cd', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 1, NULL, NULL),
('89955771-9bca-4d5a-b8c8-d61595802740', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('8a40836f-15ac-47b0-82c3-1ff90b30335a', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('8acf2a98-050a-4fa5-b879-7b816dc0f54c', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('8b16a4d2-ec20-42bb-8041-b23b07c25920', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '8064844d-9e75-40ee-8616-bfa2e6596acd', 2, NULL, NULL),
('8b1aee91-4cdc-4fea-a90f-cd66416e5ed4', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '689563da-dfc5-4bf0-93b6-1e23665157cb', 2, NULL, NULL),
('8b854279-0651-49b8-a263-b3328709d56f', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 1, NULL, NULL),
('8cc2cdf6-c9fd-43f9-a53a-538101b4b4bc', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('8d126b12-6326-46ef-aea3-63afeb023d64', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('8d215747-71a0-4b09-ad14-a67123511ec2', 'e8285381-459e-464d-b4cc-240068000369', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('8d517b3e-e71f-45f4-80b7-1ecfaea7495e', '79c5d5d1-39c0-4617-a516-320602bee9af', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('8da5fff0-7f2c-485b-9fb9-bfdae728721d', '50b4b6cb-90d0-48b8-8e06-955fa443f747', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('8df84fd9-3933-49b6-b7c4-4ed72a7610b8', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 2, NULL, NULL),
('8e817937-d132-462e-8305-5445c96a8a0a', 'af9e52c3-d295-4d44-9150-58172b10d798', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('8ebdccf1-14af-4066-809e-35430ddcb0a8', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 2, NULL, NULL),
('8ef6b27f-ea80-4c6c-b222-0f1d7f645da8', 'b424c935-b69d-4b11-8812-aba3546736eb', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('8f027ce1-6477-41df-ba76-dd481536d9b1', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('8f55bf92-5dd4-4829-8262-73532e0495b7', '5728e84c-2a60-4622-84da-d86d1adc9a14', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('8fa50502-dbae-40f7-ba42-fd02535acc12', '3e164f99-8716-4df2-ad99-f74c544f2450', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('8fb02bd4-b3f1-4f48-9c56-74da6dc82d35', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('8fb8c4f7-60e8-4abe-b03f-e5ca7405abad', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('90404836-3f42-4a12-ad2c-42b6979658fc', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('91061d46-469a-478a-9abe-f09e45048f3d', '79c5d5d1-39c0-4617-a516-320602bee9af', '443f7320-b393-4008-8984-17ae5889d0ce', 3, NULL, NULL),
('92a3a9c0-1330-4ac6-ba15-cbfd58450da0', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 1, NULL, NULL),
('9396a863-f171-432e-8f1b-b4ac39709e34', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 1, NULL, NULL),
('939a92e8-a387-4c00-9081-6fe96d648f4d', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('940d127f-cf05-4d20-b150-732673e59819', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '87ed59fb-09b7-41a2-9705-7beab70efa70', 2, NULL, NULL),
('95e24b9e-b8c2-47a5-a8a8-b57fccd89820', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 1, NULL, NULL),
('96440a16-685e-43de-8db2-b0cad73bc376', '6f026cb2-a499-4b37-9108-b29a683c4746', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 3, NULL, NULL),
('96968a30-e93c-4f95-9065-5ce0415518c1', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '8064844d-9e75-40ee-8616-bfa2e6596acd', 1, NULL, NULL),
('96a0d09a-d5c7-41a7-a474-e123835344c2', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('96ebad15-8416-4fb6-8f0a-73c553eef56e', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('974364cd-c026-40c7-a3c3-50dab813cf31', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('977b9c36-16bf-4676-ab54-64bfc2e93a2a', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', 'a28466bd-b29e-43fc-87ce-465f189bd152', 2, NULL, NULL),
('9785bd3b-a332-46f2-bcd6-440badf92361', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('9854e3e9-1977-48d1-9f25-6093bd795694', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('98820465-8377-4b2c-92a5-ba9bc6d94813', 'a64f21f3-63e9-448a-9491-f7d69f333829', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('9883d83c-495d-4aed-a722-0b22097756ca', '3e164f99-8716-4df2-ad99-f74c544f2450', '9c957410-9b1b-445a-941d-5cee6184e43f', 2, NULL, NULL),
('98be1bc4-7a5d-404c-bf3c-de33ddbe5e55', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('98bf6c2a-2660-4405-a597-5af94e9a36de', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('98cfebdb-1203-4b1b-88b7-6eb7e22e0f25', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 1, NULL, NULL),
('994f6e1d-64ae-42cd-b369-1ba01ce2dc96', '52853423-896a-4c78-8d02-a90b4a0fcc05', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 2, NULL, NULL),
('9af9521a-62d5-4be7-b635-111d603f374a', '5728e84c-2a60-4622-84da-d86d1adc9a14', '443f7320-b393-4008-8984-17ae5889d0ce', 3, NULL, NULL),
('9bbcd07f-2389-4871-8d38-977065f84faf', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 2, NULL, NULL),
('9cc9328b-d1f2-4477-8e98-099edd2d2153', 'e8285381-459e-464d-b4cc-240068000369', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 2, NULL, NULL),
('9cf15a7e-91c3-4dbb-bbed-1a9bdda08c0d', '3e164f99-8716-4df2-ad99-f74c544f2450', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 1, NULL, NULL),
('9d3b4ba5-cdc7-4020-8211-4e2c760f2cd3', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 1, NULL, NULL),
('9decd47b-24c3-425f-a5dd-cd9a1ac01e6f', '15bc2ae9-7198-4d09-a659-7e950dc05216', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('9e6c12e5-e350-4a7e-be25-41087bd58d9e', '52853423-896a-4c78-8d02-a90b4a0fcc05', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 1, NULL, NULL),
('9e928f77-34dd-4c55-b79a-c1015251e891', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('9e93dd5a-4d70-46b7-a6c7-9cac949a9e55', 'a64f21f3-63e9-448a-9491-f7d69f333829', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('9eacfdcf-fe31-4574-9755-b050aa1776a1', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('9ed13baf-7f35-4a17-8886-b36592f6ec90', 'e7673626-500d-4251-aa90-85e6b9d50a23', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('9f2324e4-3244-459f-9601-7efa1f295ebc', '2cd6e835-681b-482e-976a-e8066a9c6252', '443f7320-b393-4008-8984-17ae5889d0ce', 3, NULL, NULL),
('9fc340a6-84d7-4174-aaaf-1bad9705d8b1', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '2908b1f5-ffa1-42a8-afea-94f296274616', 1, NULL, NULL),
('a0bf4273-4506-4081-a095-99936f6a9973', 'e197f398-16cb-4037-a4f7-71f51df4bb69', '2908b1f5-ffa1-42a8-afea-94f296274616', 2, NULL, NULL),
('a11faefe-a3b1-4bd8-ac1a-39fd4dc995b6', 'a64f21f3-63e9-448a-9491-f7d69f333829', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('a1b4acbf-215e-4d36-880b-27173eaac467', 'af9e52c3-d295-4d44-9150-58172b10d798', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 2, NULL, NULL),
('a1cde850-f148-4c1f-a00b-b8f52256f1f4', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('a23cfd90-d522-4329-b1ea-9b2a62bca04d', '52853423-896a-4c78-8d02-a90b4a0fcc05', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 3, NULL, NULL),
('a2893316-936f-4f58-b2c8-20e910ad11a9', 'ca314ab3-288f-4421-838a-4f4c410d21eb', 'dc608ac5-e286-4360-a820-a22dedb5232b', 3, NULL, NULL),
('a28e6e72-2ea6-4c08-bc7e-e329c82ab50e', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '443f7320-b393-4008-8984-17ae5889d0ce', 2, NULL, NULL),
('a3930ed0-201b-4c45-b01d-abc88cc7aca6', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('a42b5d8d-af26-44d9-a948-168464ae620b', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('a5469061-3c7c-4e93-b14f-264f1fb027a1', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 3, NULL, NULL),
('a551ca50-94b1-4f45-ad57-88420b5a359f', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('a5ad6776-442b-4586-aadf-1ec383d5e5f8', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 2, NULL, NULL),
('a5f386f0-e997-48ec-9507-875692bdd743', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('a66b44ea-39b7-4e41-a6d0-2a979359ba43', '15bc2ae9-7198-4d09-a659-7e950dc05216', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('a6d242bd-dc45-4ee1-9587-fab324ea9861', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '8064844d-9e75-40ee-8616-bfa2e6596acd', 2, NULL, NULL),
('a709d656-2f54-4786-a1d1-cb2b08ec116e', '5728e84c-2a60-4622-84da-d86d1adc9a14', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 2, NULL, NULL),
('a75cb448-acc8-4165-85aa-8c54dbcc1463', '21bbecef-357a-47cd-a78a-daf385c869a6', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('a7b99946-2bb2-4a81-b6b8-97c8a2832dab', '21bbecef-357a-47cd-a78a-daf385c869a6', 'b63554b8-e343-492a-ba2d-057f831c22aa', 3, NULL, NULL),
('a7d1aa07-0aca-416e-92df-89f4ca4396da', '7d982347-90b4-4454-9d6f-0103e31f84e3', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 2, NULL, NULL),
('a7f4674e-9aa6-4fc4-852f-538b9691ebea', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('a8502cee-7f22-4006-8c5d-b88d0e67b7e9', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '27b60157-4fc9-4da8-b021-cc5032f25b84', 2, NULL, NULL),
('a8dc4dc4-634a-4644-852e-fbc0a176d1d1', '7d982347-90b4-4454-9d6f-0103e31f84e3', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('a9f0abab-55e9-4ef1-a78d-1fd2468df41e', '2779605e-32ff-4d5a-844f-ddec7d59095d', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 2, NULL, NULL),
('aa05411d-deaf-4644-93f9-9e7911be91de', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('aa4f88a2-e89b-41a9-a532-d3c64615ea91', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('aadfb0f5-9cc2-4d04-ab73-2818c32f3f55', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('aaf7d6ef-1b1c-4adb-ba48-78629d151785', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', 'ea9cf46b-75b2-42ca-a8aa-c83b5da503f4', 2, NULL, NULL),
('abd387d5-5271-4232-9193-cc5523f718ab', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'b2699299-24e8-4255-9cde-e7ce81efd674', 2, NULL, NULL),
('abd50cbf-59a2-4be0-87af-117afe702431', 'a64f21f3-63e9-448a-9491-f7d69f333829', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('ac362ebf-4125-462d-a075-e17e781308d4', 'e7673626-500d-4251-aa90-85e6b9d50a23', '689563da-dfc5-4bf0-93b6-1e23665157cb', 1, NULL, NULL),
('aca4be6a-10c2-4564-93af-744719f1885e', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('ad7b237f-f73b-4718-a64d-0610666f31b1', '50b4b6cb-90d0-48b8-8e06-955fa443f747', 'ea9cf46b-75b2-42ca-a8aa-c83b5da503f4', 1, NULL, NULL),
('ad916a61-590e-442d-adcd-51b42c901cb2', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('ae0fd1d0-6e92-4b7e-989d-4ea39c04de72', '2cd6e835-681b-482e-976a-e8066a9c6252', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 1, NULL, NULL),
('ae240576-744a-4814-986c-b3e22a46e422', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', '0be60180-1759-4c07-a241-37180c58b80f', 3, NULL, NULL),
('ae28234e-2ab1-4a95-b134-4799a1aaadc9', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('ae7be4bf-42a9-4ef3-9a37-9a651a8c6ef1', 'b424c935-b69d-4b11-8812-aba3546736eb', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('aeb53a2e-686b-4ec2-8684-5c27c9c74bfb', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 3, NULL, NULL),
('afc0b3d8-e1b1-49fb-bb33-835151d7422b', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 3, NULL, NULL),
('afd598d8-38c0-44b6-a7ec-c016fe48af1f', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '73134799-066f-444b-ae55-109d3bfcef57', 2, NULL, NULL),
('b08810e6-05fb-4f63-8fc0-1dcbd4d85454', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 3, NULL, NULL),
('b0a749b6-cff1-4966-8544-0e5baade78da', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 1, NULL, NULL),
('b0b1d3d9-71d1-49db-ac35-1b4f73e115b0', '7d982347-90b4-4454-9d6f-0103e31f84e3', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 1, NULL, NULL),
('b0bb7a35-ec2b-4f7c-8a9b-a6e4348d1b2a', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', 'dc608ac5-e286-4360-a820-a22dedb5232b', 2, NULL, NULL),
('b0bd4791-9808-4ba5-9a33-02cbfb7d78d6', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('b13e0327-5323-420b-b442-8142fc498d54', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('b1703bb6-ff9e-4081-b68c-217e48a98869', '21bbecef-357a-47cd-a78a-daf385c869a6', '27b60157-4fc9-4da8-b021-cc5032f25b84', 2, NULL, NULL),
('b19492d2-76d0-4505-8602-c07581fc9f6c', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 2, NULL, NULL),
('b1b4e214-4c0c-4b5e-9c21-0fbbf22dfddc', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 3, NULL, NULL),
('b291dd59-9dea-46e8-a780-92ec4281289d', 'd0427c26-036b-41ff-85df-2153326cbaa3', '7143875c-5c06-43da-a3ad-c89c5d621b99', 1, NULL, NULL),
('b2a06683-10fe-4e6c-b36b-727723073db9', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('b2acda0c-1480-48c5-a6c7-4084dc0cb5bf', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '0be60180-1759-4c07-a241-37180c58b80f', 3, NULL, NULL),
('b2c2f926-aebc-4fd4-a8c5-c77f5507a0bf', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('b2d598d0-6010-4d80-a3e7-95f6c9a04be8', 'c8bbed56-707d-40d5-ae62-d8318ede5974', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('b2dda3f5-4179-4ed8-bfc9-2d15ef54a56a', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 1, NULL, NULL),
('b305659e-f66d-47e5-9e5d-f9ce08bfa26c', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('b3d77ed4-b787-44aa-a8ab-066c4397a253', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '21911b32-d5ba-4ebb-9491-44085077084e', 1, NULL, NULL),
('b3f6fa4b-0c12-4e23-967b-1aa74ff28cf1', 'a64f21f3-63e9-448a-9491-f7d69f333829', '75ba9355-1c76-4a0b-90d5-85d684b7f590', 2, NULL, NULL),
('b41382ff-99fb-44a7-bda9-8d7036dec3ac', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('b4bb12b1-8fa2-4d1b-82a2-f6514e2bec4a', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('b5480ada-3c0d-4728-bb64-286ddd23f9ed', '21bbecef-357a-47cd-a78a-daf385c869a6', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 3, NULL, NULL),
('b54d2bdc-fc45-4b9d-b89f-eb653b0608c5', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 2, NULL, NULL),
('b5bd61d1-769a-4fbb-8c61-077bb0c4ad46', '2cd6e835-681b-482e-976a-e8066a9c6252', 'd5b9c1cf-ab25-46bd-9005-876cdc041bc5', 2, NULL, NULL),
('b5ee6b80-fe9d-4c3f-bc86-c2d65ed6d6ff', 'e197f398-16cb-4037-a4f7-71f51df4bb69', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 1, NULL, NULL),
('b6340543-144f-4d72-ae66-fa010617bcc3', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('b674738f-8116-4d07-a981-2f090fc6a614', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '4205111f-2065-49a2-ada5-60e5c328b876', 2, NULL, NULL),
('b7bbffbf-63c0-485d-8929-6e1d90b6ccc5', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('b8775b08-20f1-4b59-8530-f0fc90270594', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '4205111f-2065-49a2-ada5-60e5c328b876', 2, NULL, NULL),
('b8e8ff12-eb6d-4e4a-b5ef-4d0dfab84cef', '5728e84c-2a60-4622-84da-d86d1adc9a14', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 1, NULL, NULL),
('b992d976-0c7b-4b8d-b144-6c7fec777503', '2cd6e835-681b-482e-976a-e8066a9c6252', 'b2699299-24e8-4255-9cde-e7ce81efd674', 2, NULL, NULL),
('b9b4bcd7-506b-46ec-9b08-8f3d9168404d', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('ba1b2dbf-0d62-47d7-9cf6-5567fd928a23', 'b424c935-b69d-4b11-8812-aba3546736eb', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('ba70b232-04bd-4a21-bcd1-4e8617aad9f9', 'a64f21f3-63e9-448a-9491-f7d69f333829', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 1, NULL, NULL),
('ba85a96d-0188-4649-bb39-2ba960112686', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'b63554b8-e343-492a-ba2d-057f831c22aa', 3, NULL, NULL),
('bb6d5726-77dd-4693-95a7-0db25170a3ff', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('bbe1bb5b-a32a-46bb-860e-77422bec4712', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('bc1655b5-76c0-4d0c-8857-e4ccef2bbb5f', 'dee555ea-d9c6-407d-9de5-646bfdc07325', 'dc608ac5-e286-4360-a820-a22dedb5232b', 2, NULL, NULL),
('bd73b8c0-c0b0-46f8-bfc5-c142e1e4ba81', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('be3cedda-277a-4b3f-8cb1-2c4e0270de93', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 1, NULL, NULL),
('bee7a571-5d87-47ee-b24f-b10d71799391', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '87ed59fb-09b7-41a2-9705-7beab70efa70', 2, NULL, NULL),
('bfa56baf-c85f-497c-8b06-f6728eb5f142', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 2, NULL, NULL),
('c04cc72e-5a78-43c3-a445-30ac53294e46', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 3, NULL, NULL),
('c0b83c9f-f33f-4aeb-a878-eda94164a3e2', '21bbecef-357a-47cd-a78a-daf385c869a6', '443f7320-b393-4008-8984-17ae5889d0ce', 3, NULL, NULL),
('c0d8c539-6541-4e8a-88e0-5872c8364c6b', '05df9749-8fb8-4244-8500-6dce2262ddeb', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 2, NULL, NULL),
('c14f2004-1c4d-4f21-9607-fb1313f28554', 'e7673626-500d-4251-aa90-85e6b9d50a23', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 1, NULL, NULL),
('c1e6e571-7a68-48e4-ba58-6c143fd960ec', 'a64f21f3-63e9-448a-9491-f7d69f333829', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('c28ba2b4-2d79-4682-83dc-bd60c7817cb6', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 2, NULL, NULL),
('c363ed2e-eeed-400a-968b-a9a1d830434c', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('c3fd6c5b-a0d9-4b86-97ef-7bed652faf19', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('c44b3e12-90cd-4c20-8163-75baf835a920', '3e164f99-8716-4df2-ad99-f74c544f2450', 'b2699299-24e8-4255-9cde-e7ce81efd674', 1, NULL, NULL),
('c4926ffa-2e9c-4723-86d7-fe1a09900782', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('c543e774-d803-4239-aaff-19651eb66d4a', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('c5803cb2-8ad1-46d2-8383-cab2bcc92ac1', 'e8285381-459e-464d-b4cc-240068000369', 'c84de1c5-d785-4153-aa67-9d6704d2ec88', 2, NULL, NULL),
('c586f2f8-f1af-4653-8d8a-02924910788a', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', 'b2699299-24e8-4255-9cde-e7ce81efd674', 2, NULL, NULL),
('c58eae4a-816e-4f1b-9646-643224a9a53e', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 2, NULL, NULL),
('c5dada9b-be18-4faf-a472-9cc9d32aaef5', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '2862c2c3-adfb-4f2a-880e-d34d0807872c', 1, NULL, NULL),
('c6e8c744-db15-4c76-95b1-8a0649bb24a0', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('c6fa12d9-9bf0-4d70-9f06-ea472837505c', 'd0427c26-036b-41ff-85df-2153326cbaa3', '6c29e5e5-481f-4b9c-ba21-fefa2e284f49', 1, NULL, NULL),
('c7457630-6641-4c6e-8c19-7a33af502b7a', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('c85c5060-8e8d-4b3f-ae8f-3e55aef2a324', '5728e84c-2a60-4622-84da-d86d1adc9a14', '0be60180-1759-4c07-a241-37180c58b80f', 3, NULL, NULL),
('c90016d7-0007-4412-9f00-4ed97da09f4b', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '9076200f-0aa7-4e59-a226-5137311cd960', 2, NULL, NULL),
('c9ca5ec6-5a92-4647-9d3d-e87277df2fdf', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('c9d893ef-b878-41bd-af03-19e46346974d', '2779605e-32ff-4d5a-844f-ddec7d59095d', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('ca6f0bdb-90c5-490e-9c12-b6ce2ef68b05', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', '8064844d-9e75-40ee-8616-bfa2e6596acd', 2, NULL, NULL),
('ca78560d-d25e-4546-8159-1fd9ffdf0ff3', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('cac8cf4f-0e6e-426c-9f2a-c2514ed88580', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('cc0b400d-23ba-4a05-b219-6a0fcf54cd42', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('cc332ca5-8fe6-4b19-9aaf-ae9c1dac9a3e', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('cc4755eb-8900-4054-a9a3-2c8404295d8f', '2cd6e835-681b-482e-976a-e8066a9c6252', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('cc677481-3eaf-40dd-8fda-7c6bc2021869', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '27b60157-4fc9-4da8-b021-cc5032f25b84', 2, NULL, NULL),
('cd53b9b5-4d90-4951-8e20-d552a4093616', 'ca314ab3-288f-4421-838a-4f4c410d21eb', 'ea9cf46b-75b2-42ca-a8aa-c83b5da503f4', 2, NULL, NULL),
('ce72306b-b424-44ba-b578-178a1286d2c0', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('cf17bd63-0293-45a3-95fd-48bfeb55281a', 'dd3a584e-a71a-4c50-a9dd-efd31f3a491a', '443f7320-b393-4008-8984-17ae5889d0ce', 2, NULL, NULL),
('cf8cb331-290c-482e-b62b-b436b05e2389', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('cfac97bc-adbf-44ae-b975-f16650cfa90e', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '0953362a-1a54-4dc6-b6f7-1da179148bbf', 2, NULL, NULL),
('cfadf8fb-b8f1-4932-9d3e-2c7975f4cef8', '05df9749-8fb8-4244-8500-6dce2262ddeb', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 2, NULL, NULL),
('cfd3c29c-965a-45f6-a250-bcede96a85d8', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 2, NULL, NULL),
('d023af4b-fb01-461e-92ca-f3258cd37a3a', 'e3324aa2-c101-4e59-af43-d9c52d149db5', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 3, NULL, NULL),
('d110d227-6156-4f35-b6d3-55abe211b19c', '52853423-896a-4c78-8d02-a90b4a0fcc05', 'c84de1c5-d785-4153-aa67-9d6704d2ec88', 1, NULL, NULL),
('d1235baa-c5ec-4d54-8bbc-8631714a593d', '3e164f99-8716-4df2-ad99-f74c544f2450', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 3, NULL, NULL),
('d12817db-a8f2-4990-8f2b-17a08a5fb708', 'bc1df692-72d3-4d95-ae68-f273e1f110f3', '0fede81e-65ae-41b3-9744-a38bf21eac60', 3, NULL, NULL),
('d1529bdf-527e-435c-972a-f3802762920f', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '689563da-dfc5-4bf0-93b6-1e23665157cb', 1, NULL, NULL),
('d19a0d96-fa3d-4efd-ac48-d70716f42867', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('d24d4c0f-8cd6-4353-857a-7a82072d34cd', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '2908b1f5-ffa1-42a8-afea-94f296274616', 3, NULL, NULL),
('d2c682e5-b744-4181-a43e-c529a97cf679', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('d2d5cefa-2ea1-4869-b99c-eefa204a300f', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 3, NULL, NULL),
('d2d7112c-3e9c-4076-8702-90d50c94e1f9', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('d32acc3d-43f0-4e20-bf07-8ff69e271a9c', '3e164f99-8716-4df2-ad99-f74c544f2450', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('d358b12b-8e67-4867-9d97-46a267502750', '79c5d5d1-39c0-4617-a516-320602bee9af', '689563da-dfc5-4bf0-93b6-1e23665157cb', 3, NULL, NULL),
('d37b2af9-4c95-4c6c-8fe8-3b8a071b251a', '79c5d5d1-39c0-4617-a516-320602bee9af', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('d39e874e-64ab-4c5b-9320-dff9581986c0', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '8064844d-9e75-40ee-8616-bfa2e6596acd', 3, NULL, NULL),
('d3d2c9fc-ddb8-4a2c-adbd-fe0caafc9005', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '8064844d-9e75-40ee-8616-bfa2e6596acd', 1, NULL, NULL),
('d410887c-41af-4d66-98ca-312a31fb409e', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '8064844d-9e75-40ee-8616-bfa2e6596acd', 1, NULL, NULL),
('d4dab129-1c4b-4df4-ab50-0d31952c47a7', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('d60b98d2-8b98-4359-8df3-9032663cf950', '52853423-896a-4c78-8d02-a90b4a0fcc05', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 2, NULL, NULL),
('d6ac5d66-2a87-470d-a449-a1889001cad4', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('d6ceb659-d05c-4bba-9e8e-15114544bd97', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('d7068aa2-8c55-4805-ae61-2895a32e82a4', '05df9749-8fb8-4244-8500-6dce2262ddeb', 'b13f0eee-e81b-4d30-ae1b-2d6765938de7', 2, NULL, NULL),
('d818f4c0-93ac-450c-af12-3dcecb619696', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'cf2cfe23-2434-4e75-9018-5d225996fbb9', 1, NULL, NULL),
('d87bcd91-2e8e-42aa-857d-efdcb43f50da', '21bbecef-357a-47cd-a78a-daf385c869a6', '689563da-dfc5-4bf0-93b6-1e23665157cb', 2, NULL, NULL),
('d88c655d-d254-439c-a764-0ca032269d34', '21bbecef-357a-47cd-a78a-daf385c869a6', 'cf2cfe23-2434-4e75-9018-5d225996fbb9', 2, NULL, NULL),
('d9a737aa-edf4-49f1-af88-d6c0b84d6988', '2779605e-32ff-4d5a-844f-ddec7d59095d', '87ed59fb-09b7-41a2-9705-7beab70efa70', 2, NULL, NULL),
('dacc256b-cd31-4977-a081-e6ca0aaa1b74', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('daceb42e-923b-4341-b9ad-61ee7f39d5ea', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 1, NULL, NULL),
('db776232-1bbf-479b-a971-2654aba11dcb', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'dc608ac5-e286-4360-a820-a22dedb5232b', 1, NULL, NULL),
('db9b91eb-422a-4aa0-8819-6051bdb20996', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('dc727dd7-18fe-400b-b8d4-18a186421755', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('dc7e1736-8a58-4872-b5b7-be102f747d33', '385fe266-b519-4667-8d59-5d9ad1bf3d19', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('dcd6b530-9a03-478f-8d4d-f74e723316e5', '2779605e-32ff-4d5a-844f-ddec7d59095d', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('ddca6b06-03e0-4a01-ac93-136e9c43c7f5', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('ddcc31e5-28c1-4856-b6c1-0b9d52ee0643', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('de344eeb-81f2-412b-af32-d7e3d860aaf5', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('de4239e4-0eee-41e7-be7b-8599d3c3fa1e', '79c5d5d1-39c0-4617-a516-320602bee9af', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('de6c5842-3174-4dbe-a737-c9c922405ebd', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('de8409d2-7f5a-4d56-beda-ec85480a3ec2', 'fc615238-98cd-4aae-8c93-45e8f12cde48', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('df50dc8b-52a6-4f2a-aad7-086846c5c540', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('df8e14fc-526d-413c-b702-0783e13208ec', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('dfd3b65f-06a4-4a28-9d6e-d899e2e15a06', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '4205111f-2065-49a2-ada5-60e5c328b876', 3, NULL, NULL);
INSERT INTO `CharacterSkill` (`id`, `characterId`, `skillId`, `value`, `specialty`, `description`) VALUES
('e0217a60-e229-4756-a14d-3133886f7917', '79c5d5d1-39c0-4617-a516-320602bee9af', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('e065adae-3b61-4e0d-8eed-e65dd8180f6f', '6f026cb2-a499-4b37-9108-b29a683c4746', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL),
('e09d48f6-2f48-4e4b-be24-dac0e62f574c', '6f026cb2-a499-4b37-9108-b29a683c4746', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 2, NULL, NULL),
('e18c0b16-6436-4081-9556-286d47dfcad2', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('e1b97427-7271-40d2-8a32-47b49e898147', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 2, NULL, NULL),
('e1df414f-29f3-4d17-951f-50bb0ddf5ab7', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '1da140aa-ce9e-4085-97c0-49554751335a', 1, NULL, NULL),
('e324b2e2-60ca-4cb9-ad1c-aab128f22ba6', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '689563da-dfc5-4bf0-93b6-1e23665157cb', 2, NULL, NULL),
('e32e5753-8773-4b0f-9197-87d68eba23d4', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', '443f7320-b393-4008-8984-17ae5889d0ce', 3, NULL, NULL),
('e3cc76d2-c0e6-4535-8425-21e7af1c5ef7', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 2, NULL, NULL),
('e3f70db9-842d-46b3-b0b2-99e304ebbd5b', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '2908b1f5-ffa1-42a8-afea-94f296274616', 2, NULL, NULL),
('e401e737-1b16-4e48-8179-f3afe5b2909d', 'd0427c26-036b-41ff-85df-2153326cbaa3', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('e4052cbb-f8c1-4d2f-9548-fc9cb634f8c3', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('e4415190-b212-4a37-b904-97c2d2bc86e7', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('e4976c6b-f3aa-49f0-a967-ab77705dc036', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '2908b1f5-ffa1-42a8-afea-94f296274616', 1, NULL, NULL),
('e4dbe0f6-46bc-4a5d-a35a-6ee94611b1a0', 'cf394d4a-97bc-49a0-b2f9-d36a6151f86a', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 1, NULL, NULL),
('e5801609-6d97-46c2-ab1c-bdb631f809ea', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 2, NULL, NULL),
('e621b5bb-2d19-4b0d-8b1a-0babee33e6d7', 'c8bbed56-707d-40d5-ae62-d8318ede5974', 'e1301b41-ce52-4c7e-8436-86fa58f2bd68', 3, NULL, NULL),
('e633514f-396f-4120-87ae-ede258e2d9ba', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('e660ebad-4e15-4831-994c-158f00848f95', '21bbecef-357a-47cd-a78a-daf385c869a6', 'dc608ac5-e286-4360-a820-a22dedb5232b', 1, NULL, NULL),
('e6e73346-0b16-4a34-bbc6-b526c6f4548e', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('e6eafba4-b3f5-4487-b870-8ad23cb22a91', 'e7673626-500d-4251-aa90-85e6b9d50a23', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 3, NULL, NULL),
('e7ebea04-4dc3-471f-b59c-8b992f17ae56', '52853423-896a-4c78-8d02-a90b4a0fcc05', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('e8153acf-7959-43e0-b4c4-ff938aeb4cab', 'af9e52c3-d295-4d44-9150-58172b10d798', '83f7ceb4-cf67-408e-8d5f-8912cc8de1d8', 1, NULL, NULL),
('ea8621c7-3724-42ec-85e7-55906496286e', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 2, NULL, NULL),
('eaa83f49-47b6-48f7-a3e2-12f3cd53941a', '9c4ecc89-186f-4bef-b5ba-ba5e109e96b8', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 1, NULL, NULL),
('eb3caba2-8424-49a1-ad68-f389417bbbf7', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '27b60157-4fc9-4da8-b021-cc5032f25b84', 2, NULL, NULL),
('eb569303-0ae3-4a22-839c-f0de39a4929b', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('eb695433-0e7b-44c5-904b-ddec8d07909f', 'b424c935-b69d-4b11-8812-aba3546736eb', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 2, NULL, NULL),
('ebee1437-0c12-43dd-b846-858964ef7bb8', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 1, NULL, NULL),
('ec375ed6-db7f-4094-9698-b232a4c39b92', 'b424c935-b69d-4b11-8812-aba3546736eb', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('ec98034e-f949-4f3a-9819-279a66971df2', '7d982347-90b4-4454-9d6f-0103e31f84e3', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('ed150972-d068-4c14-8d6e-21771d214f1c', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 1, NULL, NULL),
('edaebd93-90c1-4cec-ba8d-a1c7c788029c', 'a4dc9865-eaa1-4af4-8cf4-82f2b61cf87f', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('edf78682-379a-4d8d-9f97-a4ffcc227c7b', 'af9e52c3-d295-4d44-9150-58172b10d798', '2eb0c354-58f5-4d14-b7ce-db66f8db25a8', 3, NULL, NULL),
('ee2e2d8c-0a8f-49dd-a8b3-d0cebaf2a77f', 'e197f398-16cb-4037-a4f7-71f51df4bb69', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 1, NULL, NULL),
('ee5c5186-c6cb-47f8-8559-1c3244ff32d1', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 3, NULL, NULL),
('ee60c8ad-9030-4d78-98f1-0fc75501fac3', 'e8285381-459e-464d-b4cc-240068000369', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 1, NULL, NULL),
('ee87cb62-300f-4d5d-8533-f59e147f4215', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', '6dbd50b8-2452-44dc-9e16-7a0d037c7916', 1, NULL, NULL),
('eec67431-33e7-4841-89ca-fd75604047d4', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '8063337d-1f60-49ea-96aa-c18598e2f1ea', 1, NULL, NULL),
('ef10a7f2-f91b-4df1-adba-724c03c71169', '79c5d5d1-39c0-4617-a516-320602bee9af', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 1, NULL, NULL),
('ef1b07c8-a9fc-4b5b-9ed5-6bd3bc8d1fb9', '05df9749-8fb8-4244-8500-6dce2262ddeb', '653011cf-0ac0-4bd6-8869-26961601b647', 3, NULL, NULL),
('ef1bf469-2ce9-4be3-964d-76bcd0afd481', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', 'dc608ac5-e286-4360-a820-a22dedb5232b', 1, NULL, NULL),
('ef523d1b-ef6c-40a5-a5a9-244226952a91', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('f002c31b-fc0b-48b8-8a1a-8af4e9ec9504', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', '0be60180-1759-4c07-a241-37180c58b80f', 2, NULL, NULL),
('f02fb443-d123-4eea-be42-beb2a9ecca48', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 1, NULL, NULL),
('f03dd3fe-5cd6-4ea9-a6ac-a67ec4df1200', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '787366b0-f856-4dce-ab95-90e5f38eb0e5', 2, NULL, NULL),
('f05e3e17-4e77-4077-ba88-e7c0e65d52ab', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '2862c2c3-adfb-4f2a-880e-d34d0807872c', 2, NULL, NULL),
('f069e418-0ff3-4af4-b720-589367d9f742', '2779605e-32ff-4d5a-844f-ddec7d59095d', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 3, NULL, NULL),
('f06f3fa7-f37a-4794-887f-5a8e74127467', '7b3a96e2-6d2f-4816-86ca-598f79ac4d4e', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 1, NULL, NULL),
('f17327d6-4162-4ce9-844c-07a9943d6f7c', 'e8285381-459e-464d-b4cc-240068000369', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('f1d39f1e-aec1-4080-9ce2-f2b68a34b623', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 3, NULL, NULL),
('f1f8c8a2-8583-419a-8e54-23586e048802', '52853423-896a-4c78-8d02-a90b4a0fcc05', '4205111f-2065-49a2-ada5-60e5c328b876', 3, NULL, NULL),
('f258eaf4-95f8-4bc5-859d-c6006b8bd3e9', '15bc2ae9-7198-4d09-a659-7e950dc05216', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('f25da0be-1699-4ae6-add8-7babd65bae4e', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 3, NULL, NULL),
('f28c0497-78c1-4d01-aab8-6b8368a9b4a7', '05df9749-8fb8-4244-8500-6dce2262ddeb', 'c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 1, NULL, NULL),
('f2df3d7d-2928-4613-b4c7-e95c3d9a068c', 'd0427c26-036b-41ff-85df-2153326cbaa3', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('f2e0b969-f8c6-43c6-b6cf-b0c7755e3993', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('f3afe234-7db4-46a3-b157-37850418b7be', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 2, NULL, NULL),
('f430d9b9-d298-433a-99ed-430ec96c73bd', '15bc2ae9-7198-4d09-a659-7e950dc05216', '8064844d-9e75-40ee-8616-bfa2e6596acd', 1, NULL, NULL),
('f4cc1d70-ec8a-45cd-b1c0-e3c56bd7d7c3', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', '8064844d-9e75-40ee-8616-bfa2e6596acd', 2, NULL, NULL),
('f5752a35-d85d-43da-bcf6-59bd356809fc', 'fd489d17-6679-4bcf-9659-3a713f9fd26c', '8064844d-9e75-40ee-8616-bfa2e6596acd', 1, NULL, NULL),
('f59e95ce-4d17-4011-8512-771b6110f962', '52853423-896a-4c78-8d02-a90b4a0fcc05', '668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 2, NULL, NULL),
('f5ab14fd-2e08-496a-9b39-1eaa80f609d8', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 2, NULL, NULL),
('f6245500-86eb-4119-9d03-e3a0c1233340', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('f629957b-9850-47f1-af41-b22cf49d3778', 'e197f398-16cb-4037-a4f7-71f51df4bb69', '5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 1, NULL, NULL),
('f666afcc-4e86-4745-92c5-a23b01ad24b9', 'e8285381-459e-464d-b4cc-240068000369', 'bfce5bd1-a23f-4e13-9f39-e315f6fed149', 2, NULL, NULL),
('f6777820-5dff-4295-a2d8-798fb4ec939d', 'e197f398-16cb-4037-a4f7-71f51df4bb69', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('f7a4300c-fba5-4144-bba8-6bed4d952f30', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', '4205111f-2065-49a2-ada5-60e5c328b876', 1, NULL, NULL),
('f7d21e6a-9319-47e9-b0c5-37b46b1f4959', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '871a5920-4680-4daf-965e-bd18449c4db2', 2, NULL, NULL),
('f8072fe7-9150-482a-bb15-4e34f9074c6d', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('f80b7193-dec3-4a93-8c0e-5ca382a461ae', '6f026cb2-a499-4b37-9108-b29a683c4746', '426434a5-c92c-4f9a-9031-3baa4c4b5428', 1, NULL, NULL),
('f82e41c5-39d8-48c7-9a8d-e5ec1e52ef38', 'af9e52c3-d295-4d44-9150-58172b10d798', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('f8748230-56bc-43e1-b9a3-ec1ce0018fd5', 'af9e52c3-d295-4d44-9150-58172b10d798', '443f7320-b393-4008-8984-17ae5889d0ce', 1, NULL, NULL),
('f8880e33-e653-4086-9c38-7947671151ef', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'b2699299-24e8-4255-9cde-e7ce81efd674', 3, NULL, NULL),
('f8bb5aea-79ba-401d-b9e6-d196c15cc95b', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 3, NULL, NULL),
('f8c7991e-4c07-406f-8600-4d8423057248', '6f026cb2-a499-4b37-9108-b29a683c4746', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('f8fd85a8-88f8-413d-b224-c56c798efc2f', '10412337-5fb4-4bb6-ba48-0efc36c5489d', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 2, NULL, NULL),
('f9289178-4b3d-41ca-be2c-fe9803b8ba5c', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', '87ed59fb-09b7-41a2-9705-7beab70efa70', 1, NULL, NULL),
('f92b7b6a-5769-4d7b-95ae-1d6351f4f9d6', '3e164f99-8716-4df2-ad99-f74c544f2450', '87ed59fb-09b7-41a2-9705-7beab70efa70', 2, NULL, NULL),
('f9d812ee-b79b-48d2-b79f-ee11f8d8bdaf', 'a64f21f3-63e9-448a-9491-f7d69f333829', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 3, NULL, NULL),
('f9dcaef0-3b08-430e-b180-664e833706fe', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 3, NULL, NULL),
('f9e5e31a-2115-403e-9a0a-399a069eb2c4', '7d982347-90b4-4454-9d6f-0103e31f84e3', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 1, NULL, NULL),
('f9fbf885-8de3-415d-bc54-239e4e1bfd2f', '5728e84c-2a60-4622-84da-d86d1adc9a14', '689563da-dfc5-4bf0-93b6-1e23665157cb', 3, NULL, NULL),
('fa62e28f-53ad-4df8-9dec-ee7d01484169', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', 'a3b5035c-5f9c-435d-b0c7-d25272f30861', 2, NULL, NULL),
('fa656c01-077e-4f07-892c-5f64ff1c59fa', '5728e84c-2a60-4622-84da-d86d1adc9a14', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 2, NULL, NULL),
('fb210108-39d5-4d83-bec3-5edee74cbdfa', 'e3324aa2-c101-4e59-af43-d9c52d149db5', '89dc28e4-a3c5-41bb-91d2-5e9e9c1e191d', 2, NULL, NULL),
('fbc1a0aa-bded-4a6c-bc86-9a943f52b5e1', 'c8bbed56-707d-40d5-ae62-d8318ede5974', '4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 2, NULL, NULL),
('fbe0aa38-03b2-4fee-a688-b8cf66218f40', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('fbe89649-0dda-43b7-9b6c-260f36db8cf5', '56b42e50-da6a-45a7-ad6d-a0ad5992d9ff', '69e96c2f-edb0-4ee6-b410-eff19845b54d', 2, NULL, NULL),
('fc062f03-c014-49c6-b1c9-bf2194ed3733', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '0fede81e-65ae-41b3-9744-a38bf21eac60', 2, NULL, NULL),
('fc4f6f38-cc64-4979-87eb-4f04bc9c58d5', '50b4b6cb-90d0-48b8-8e06-955fa443f747', '1da140aa-ce9e-4085-97c0-49554751335a', 2, NULL, NULL),
('fccc75fd-46bf-4a91-aa28-011cc037c588', '7d982347-90b4-4454-9d6f-0103e31f84e3', '27b60157-4fc9-4da8-b021-cc5032f25b84', 1, NULL, NULL),
('fd301a3f-ba8d-4cdd-9c04-8982ffae01df', 'e7673626-500d-4251-aa90-85e6b9d50a23', '9729df70-24d2-4b76-9a39-9ad67f4ba89e', 2, NULL, NULL),
('fd64d382-9813-46e5-8ab0-ef97321ea24f', 'dee555ea-d9c6-407d-9de5-646bfdc07325', '1da140aa-ce9e-4085-97c0-49554751335a', 3, NULL, NULL),
('fe2f72a6-55eb-4d73-b12c-8fa6f0a7db79', 'd0427c26-036b-41ff-85df-2153326cbaa3', '08d77eec-38f6-4448-b9d5-230a2e12f17d', 2, NULL, NULL),
('fe413f0c-e8cd-4519-83c1-0da43c424b3d', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', '995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 1, NULL, NULL),
('fec02311-0cc7-4461-b8ea-cb06b99d48c6', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 3, NULL, NULL),
('fec137aa-7bae-42d2-9eda-65bbafe1fcb0', '1264d246-3d19-47ea-9ceb-ce4aaf3a2037', 'b63554b8-e343-492a-ba2d-057f831c22aa', 2, NULL, NULL),
('fed536f0-8e12-4282-a86f-d4bbbe675347', 'ca314ab3-288f-4421-838a-4f4c410d21eb', '83f7ceb4-cf67-408e-8d5f-8912cc8de1d8', 1, NULL, NULL),
('fedbecb4-b669-4c18-b0c3-e3bf872bf367', 'e8285381-459e-464d-b4cc-240068000369', 'b63554b8-e343-492a-ba2d-057f831c22aa', 1, NULL, NULL),
('ff262972-4120-4e45-b2fa-57e279498576', '7d982347-90b4-4454-9d6f-0103e31f84e3', '90687584-48a3-40f6-af4e-f9bf09a1a4cb', 1, NULL, NULL),
('ffd91c9b-892e-4b05-a73b-813d44ba9e6f', 'bdbac8ac-1a5e-4104-b44d-93dc94aa13d4', 'ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `CharacterStatus`
--

CREATE TABLE `CharacterStatus` (
  `id` varchar(191) NOT NULL,
  `characterId` varchar(191) NOT NULL,
  `statusId` varchar(191) NOT NULL,
  `value` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `CharacterStatus`
--

INSERT INTO `CharacterStatus` (`id`, `characterId`, `statusId`, `value`) VALUES
('02ec7054-6adf-406a-a26f-558904c76917', 'cfce1e0a-7ed0-4ea7-a5cc-79c2b30ecaa6', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 3),
('0a9f87a2-fca1-401f-a142-87e166ae37f4', '31f4a144-d6a2-410b-bb9b-243ffc6bee2a', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 2),
('0aff8780-7a3a-11f1-a1c9-e89e5efddb4f', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 4),
('0aff9397-7a3a-11f1-a1c9-e89e5efddb4f', '0afd7a0a-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('0b016c9a-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 4),
('0b017a68-7a3a-11f1-a1c9-e89e5efddb4f', '0affc14c-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('0b03a234-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 2),
('0b03af42-7a3a-11f1-a1c9-e89e5efddb4f', '0b01ad87-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 8),
('0b05b3d5-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 4),
('0b05c177-7a3a-11f1-a1c9-e89e5efddb4f', '0b03ec38-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('0b080b9c-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 4),
('0b081879-7a3a-11f1-a1c9-e89e5efddb4f', '0b05fcc7-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('0b09cb49-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 4),
('0b09d6c0-7a3a-11f1-a1c9-e89e5efddb4f', '0b0848ee-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5),
('0b0babba-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 4),
('0b0bb8b9-7a3a-11f1-a1c9-e89e5efddb4f', '0b0a0a67-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('0b0dab6c-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 5),
('0b0db724-7a3a-11f1-a1c9-e89e5efddb4f', '0b0be8dd-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5),
('0b0f7d91-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 5),
('0b0f8dc7-7a3a-11f1-a1c9-e89e5efddb4f', '0b0dd3b0-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5),
('0b1276f5-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 3),
('0b1285e9-7a3a-11f1-a1c9-e89e5efddb4f', '0b0fbfdd-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 7),
('0b14623f-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 5),
('0b146faf-7a3a-11f1-a1c9-e89e5efddb4f', '0b12bf13-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5),
('0b16eef3-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 4),
('0b16fbf0-7a3a-11f1-a1c9-e89e5efddb4f', '0b14a0e7-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('0b18de42-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', '72bed5b7-06d3-4da8-9e3c-8f75115ea478', 4),
('0b18e9a5-7a3a-11f1-a1c9-e89e5efddb4f', '0b1730cd-7a3a-11f1-a1c9-e89e5efddb4f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('0fadb8fa-dd84-401a-b18f-e40f561c0715', '90ab2b43-00ec-492c-83fb-6299c62f1a3e', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 3),
('14075807-35ab-4278-8100-74ec4b584a8d', '0cc79b65-0fdd-4684-a61a-48191eb4c210', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 3),
('2922ee01-b6fd-44fc-a700-a8fe3cc8e4fc', '385fe266-b519-4667-8d59-5d9ad1bf3d19', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('2b4c9187-a7ca-4425-9575-b2eeb379cd58', 'f7dccac9-27ed-4419-8f68-2e8ce748b6e3', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5),
('2c25998d-2ed0-49db-b10d-82988138ca45', '5728e84c-2a60-4622-84da-d86d1adc9a14', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5),
('2fbd49f8-043d-4e0b-a24e-589b91c537cb', '6cf5e879-2cfb-4a06-8e33-83913386e5fe', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 8),
('32897650-e5b4-4660-acb8-3b01cf7b50d4', 'a794d6fd-9d09-4c7c-ba61-1f8b1f2be4f4', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 7),
('33bd8da7-a843-4a15-9780-45d9d33371a0', 'fa4de05e-c20b-4500-be91-ae1a6e08d17f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('34794c8a-0a72-4bee-a74c-d02fa4368dfa', '2779605e-32ff-4d5a-844f-ddec7d59095d', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('3f0709d0-9681-4433-b195-f8fb47e6aeab', '21bbecef-357a-47cd-a78a-daf385c869a6', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('3f35b357-7b37-4267-a853-49211813772a', 'd3447e2c-91b1-43c3-ba23-a72cbe35cb10', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 8),
('433173b7-637f-444a-9278-dcae15a935b6', 'd3539a15-8752-4837-a88b-143d9adeeede', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 3),
('43f25771-e194-4c97-87d2-a346b1a391fb', 'e5d39a55-53ce-4ccb-bbd5-7f67fd77dd76', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5),
('46892d67-1542-4856-a507-23f7c9dd2318', '83f50e37-dbbf-47bf-a3dc-bfbb6c0287a6', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5),
('46dbe51a-f80d-4829-8049-b170e1d10141', 'b424c935-b69d-4b11-8812-aba3546736eb', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 7),
('4b4c7f02-7742-4830-b00d-b7246e2602cc', 'c848366b-b82b-4859-a217-e4b0b878dee1', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 2),
('52dc9d2c-94bd-4c0c-a0bc-2f4f2b44bfd9', 'ed26373b-22ae-4a9d-9c31-bfdf4f7e9cc0', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5),
('5cbc990b-cd9c-457e-9860-d27814c86765', 'fc615238-98cd-4aae-8c93-45e8f12cde48', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('5de876c5-d9a6-48e2-b6d2-7e4213eca410', 'c46e08d1-83aa-492a-9b73-8080fc3429ca', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5),
('6242a22a-5c41-4807-a591-685de3117ede', '3b619f01-b885-43b0-8c93-ca40fedb5f4d', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('64d9d6a4-892b-4a95-9876-795255a2c467', '04473047-f317-4d1f-8948-6875ed73059b', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 2),
('72e23bd3-bb1a-47c8-8c45-f8969a841417', '05dc34a9-2a6a-47cb-a9c9-f00a7de29e95', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 1),
('7998502b-a91a-4bad-a88a-a89e45dbc6a6', '2492662c-be0d-4ee2-8c03-3d8c3977a57b', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('7ec05390-5cf0-4ae0-a957-40c22d509cd9', 'e7673626-500d-4251-aa90-85e6b9d50a23', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5),
('80ffff1b-1040-433a-8451-cbc2b3117ccc', 'ee65740f-9bf6-4d1a-a73e-76e56fdcdc2c', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('852ccc61-c413-4dca-909c-05d66cdd7bf9', '15bc2ae9-7198-4d09-a659-7e950dc05216', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('8cd0d79c-717b-4a48-ac33-5f35e4e9bcfc', '35d180bf-0823-4be9-938a-baaa05a29fb8', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 2),
('95629e5f-f3ce-43c0-89cc-1f0e85cae95f', '58630d0d-5df2-4d36-b895-c1f94731f7d0', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 3),
('9903bdb9-66ca-47e9-9420-9d8c2f7e7a91', 'e66836b3-1c0d-4cb3-ac3e-f176fa440395', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 3),
('9afbcfca-078f-4997-ad66-ea6ea7b53fa2', 'dee555ea-d9c6-407d-9de5-646bfdc07325', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('a2aaa571-284e-4012-94fd-787ab25b1d8d', '43846bc8-6385-4d07-b742-b9b4de21bd10', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 3),
('a49eeb5e-35bd-4fcd-9eaa-eee30e1f6904', 'e9cea982-eba9-408a-a911-a208b0ac774d', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 3),
('b1aaf2ee-e266-4925-a4dd-7858b51438f2', '214e2ef6-9fa5-4621-855f-259f171ece90', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 1),
('b65e450c-9f3e-464b-8774-7acd193c75ed', 'fcdac56a-8cd0-41bc-8e62-77fa943d3a32', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 2),
('c17c1897-af76-4e28-bd91-4689ad7ba8df', '3468c45e-2f30-4684-a537-fc8fef969e4e', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 2),
('c29dfe87-f101-4447-b033-94f99caace4d', '9de148ce-7d82-46e7-a389-8c5dc1634396', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 2),
('c5a94e01-2242-4cab-97dd-5e712668ad80', '0bc3db28-28d8-42a5-aa66-a1a8d33c0a9b', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 2),
('c9a9b7e3-77bd-4aad-8b67-1099e0290d31', '0d8e7c17-be9f-4603-a5ea-69a41674bb36', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('da6f8185-d49d-435e-a08d-6f8585f8ca07', '4654d49f-5ea8-487b-baf6-510f51f0c0bd', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 3),
('dbea86ec-dd50-49b7-8e5b-4de219d55b3a', '10412337-5fb4-4bb6-ba48-0efc36c5489d', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('df8fac28-dc30-43e0-8b09-c9a6e238cc7b', 'd1d425b0-e41d-4982-bc1c-ae39353d620c', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 3),
('e0866253-544e-447e-bb3a-46676f5ec9e8', '8db861e1-cd37-4702-9560-7fe22f1fcb5a', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('e2fd5212-f121-4149-a07c-d7c620619497', 'f0be8449-b32b-4757-a081-0b8d96402541', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 2),
('f18006c3-ac46-408e-93b4-587d71b48d5e', 'f37fe62d-0129-4ed2-9234-a24286c5ee67', 'd7029276-c2ec-4961-b8a8-2f9fe8d16118', 2),
('f6e9c000-13f8-49df-bd85-0b3b935fa249', '7cfe0ff9-2f7b-43e1-8b5e-01dbf41ef90f', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 6),
('f9d827a7-df9b-43a3-85e1-f871a8c3c1dc', '79c5d5d1-39c0-4617-a516-320602bee9af', 'fc2e5692-9f47-4a32-9b90-f4725640e480', 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Criminality`
--

CREATE TABLE `Criminality` (
  `id` varchar(191) NOT NULL,
  `crimeType` varchar(191) NOT NULL,
  `severity` varchar(191) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `Criminality`
--

INSERT INTO `Criminality` (`id`, `crimeType`, `severity`, `description`) VALUES
('14d180fb-faf0-48c2-8e85-c754553f5898', 'Geral', 'Alta', NULL),
('622e8669-3da0-44b3-95b0-ae3aef2df117', 'Geral', 'Baixa', NULL),
('942eccdf-f996-47e0-b62a-3a85ef975ee9', 'Geral', 'Altíssima', NULL),
('a3c17235-316b-4e6e-97c1-531a1e73276d', 'Geral', 'Média-Alta', NULL),
('a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 'Geral', 'Média', NULL),
('f1781f52-cb3d-4bbc-8d49-594dab14ab77', 'Geral', 'Média-Baixa', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `DemographicProfile`
--

CREATE TABLE `DemographicProfile` (
  `id` varchar(191) NOT NULL,
  `species` varchar(191) NOT NULL,
  `socialClass` varchar(191) NOT NULL,
  `profession` varchar(191) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `DemographicProfile`
--

INSERT INTO `DemographicProfile` (`id`, `species`, `socialClass`, `profession`, `description`) VALUES
('0754cbf8-0650-4c5e-9553-17a89736dd3a', 'Sobrenatural', 'Média', 'Mago (Tecnocracia)', NULL),
('12d2763b-1e0f-46c5-8861-7f0db28c9ecd', 'Sobrenatural', 'Média', 'Mago (Tradição: Verbena)', NULL),
('14392d32-237b-4fb7-8bdc-b1c8c095cea1', 'Sobrenatural', 'Média', 'Lobisomem (Roedores de Ossos)', NULL),
('15e2416f-d54c-4855-9315-53debed5f29e', 'Sobrenatural', 'Média', 'Caçadores (Células de Motoboys)', NULL),
('16b6b8dc-0006-453d-984e-d87ca1f1e2d9', 'Sobrenatural', 'Média', 'Lobisomem (Garras Vermelhas)', NULL),
('16db7059-3b91-4d7f-b3da-01697f4be8a9', 'Sobrenatural', 'Média', 'Lobisomem (Andarilhos / Crias)', NULL),
('2aaa7b03-57da-4380-9ca9-b464ee90456e', 'Sobrenatural', 'Média', 'Vampiros (Clã Hecata / Giovanni)', NULL),
('2de84a81-36fb-4afe-8146-5b2a45b0d726', 'Sobrenatural', 'Média', 'Caçadores (Células Operárias)', NULL),
('2e9fc87c-c698-4c43-9c72-3d70f102fe94', 'Sobrenatural', 'Média', 'Caçadores (Seguranças de Shopping)', NULL),
('30448bb7-31ed-49bd-86e1-d92d501c6c47', 'Sobrenatural', 'Média', 'Mago (Tecnocracia - Sindicato)', NULL),
('352a9e32-8ad8-4edf-abd7-b067288bf4b4', 'Sobrenatural', 'Média', 'Vampiros (Clã Toreador)', NULL),
('359d3339-5d5b-4b77-96e3-a602eb6ff3eb', 'Sobrenatural', 'Média', 'Lobisomem (Garras Vermelhas - Caern Supremo)', NULL),
('3b4f5c4e-8a3d-4469-a407-59858b89f085', 'Humano', 'Média', 'Forças de Segurança', NULL),
('41b7cd0e-914a-4d2a-81e4-8e039a3faf31', 'Sobrenatural', 'Média', 'Vampiros (Clã Hecata / Necromantes)', NULL),
('447cf08e-c1ab-4b8d-ab4d-e56b5b8b5e8b', 'Sobrenatural', 'Média', 'Vampiros (Clã Malkavian)', NULL),
('4720582e-9bd3-4f7c-a5d7-55f4523ad298', 'Sobrenatural', 'Média', 'Vampiros (Caitiff / Sangue-Fraco)', NULL),
('48d074c3-1f62-4fae-bb72-a426c443ed88', 'Sobrenatural', 'Média', 'Caçadores (Células Religiosas)', NULL),
('4bd97f77-2839-4e79-9450-e3cb8f03d0ef', 'Sobrenatural', 'Média', 'Vampiros (Clã Lasombra Anarquistas)', NULL),
('508b871c-7d6f-47f1-8b21-5beb56ebdbc8', 'Sobrenatural', 'Média', 'Vampiros (Anarquistas / Clã Brujah)', NULL),
('5caee783-c712-4c03-993d-670f650b035b', 'Sobrenatural', 'Média', 'Mago (Irmandade de Akasha)', NULL),
('6e9052db-37d7-4862-8363-7eb77386649e', 'Sobrenatural', 'Média', 'Vampiros (Clã Ventrue / Anciões)', NULL),
('72af8510-c12b-47d0-8386-dc8ea8170e84', 'Sobrenatural', 'Média', 'Mago (Órfãos / Sem Tradição)', NULL),
('7563d823-bf2e-4969-80c1-015da5918bb7', 'Sobrenatural', 'Média', 'Vampiros (Clã Nosferatu)', NULL),
('83c821b8-ff5f-4493-8016-a8fee17cb9aa', 'Sobrenatural', 'Média', 'Vampiros (Clã Toreador / Anarquistas)', NULL),
('8c806e93-eb20-4ca0-859e-1b83427a9ce6', 'Sobrenatural', 'Média', 'Caçadores (Inquisidores da Fé)', NULL),
('935ce533-67e7-496c-b6b6-83b0d91a600f', 'Sobrenatural', 'Média', 'Vampiros (Anarquistas / Clã Ministry)', NULL),
('94e96568-af76-4510-9b3a-b33609954436', 'Sobrenatural', 'Média', 'Caçadores (Células de Proteção Urbana)', NULL),
('996bf5e7-e41b-4294-bcf3-c6a797c34233', 'Sobrenatural', 'Média', 'Vampiros (Clã Giovanni / Hecata)', NULL),
('a27d468b-e300-49a8-bd3f-de1abbadeb3c', 'Sobrenatural', 'Média', 'Mago (Tecnocracia - Iteração X)', NULL),
('a41fa57e-df2f-4dad-ae62-07704c53e3d1', 'Sobrenatural', 'Média', 'Vampiros (Clã Ventrue - Príncipe)', NULL),
('a442b882-ff7c-4394-83e0-0ca0cc30a832', 'Sobrenatural', 'Média', 'Vampiros (Clã Ventrue)', NULL),
('abddfc46-45ac-45f9-a779-2722f17c3c25', 'Sobrenatural', 'Média', 'Vampiros (Caitiff / Carniçais)', NULL),
('add1541c-fc8e-4279-be5d-4cfcbd7f00e2', 'Sobrenatural', 'Média', 'Mago (Filhos de Éter / Ordem de Hermes)', NULL),
('b82be143-ebeb-4ae4-bed6-e8bd2f2d5aff', 'Sobrenatural', 'Média', 'Vampiros (Clã Brujah / Malkavian)', NULL),
('bb01d78d-53ad-4ca8-a6bb-0c0f00a88a62', 'Sobrenatural', 'Média', 'Caçadores (Células Acadêmicas)', NULL),
('bc302b32-d55c-41ea-8590-a68975210443', 'Sobrenatural', 'Média', 'Vampiros (Clã Gangrel)', NULL),
('c21a887e-b97e-4570-be67-864b89ffa9bb', 'Sobrenatural', 'Média', 'Caçadores (Torcidas Organizadas)', NULL),
('c765ab46-3eda-49f2-8bc3-479213742162', 'Sobrenatural', 'Média', 'Mago (Tradição: Adeptos da Virtualidade)', NULL),
('d191d1b5-633c-412d-8608-61a65d288428', 'Sobrenatural', 'Média', 'Vampiros (Clã Ventrue / Lasombra)', NULL),
('d9acd382-b80a-4b56-92a0-c683ffc72205', 'Sobrenatural', 'Média', 'Lobisomem (Fúrias Gêmeas / Crias)', NULL),
('e4c19351-76cb-4cb0-86da-47ded5414b8b', 'Sobrenatural', 'Média', 'Lobisomem (Andarilhos do Asfalto)', NULL),
('eb4b4148-699f-4d12-ae5e-f94b1a676c78', 'Sobrenatural', 'Média', 'Vampiros (Clã Tremere)', NULL),
('eb660fb6-bc87-4f13-b13c-6991afc03bbd', 'Sobrenatural', 'Média', 'Vampiros (Clã Toreador e Ventrue)', NULL),
('fa7b0aa1-c768-4ab0-88af-1b9075029e5f', 'Sobrenatural', 'Média', 'Mago (Coro Celestial)', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `HavenDefinition`
--

CREATE TABLE `HavenDefinition` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `price` double NOT NULL DEFAULT 0,
  `securityLevel` int(11) NOT NULL DEFAULT 1,
  `minionCapacity` int(11) NOT NULL DEFAULT 0,
  `allyCapacity` int(11) NOT NULL DEFAULT 0,
  `requiredBackgroundId` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `HunterCreedDefinition`
--

CREATE TABLE `HunterCreedDefinition` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `englishName` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `mainEdges` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`mainEdges`)),
  `afflictionTriggerName` varchar(255) NOT NULL,
  `afflictionTriggerDescription` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `HunterCreedDefinition`
--

INSERT INTO `HunterCreedDefinition` (`id`, `name`, `englishName`, `description`, `mainEdges`, `afflictionTriggerName`, `afflictionTriggerDescription`, `createdAt`, `updatedAt`) VALUES
('03aca330-a92c-444f-a5b6-9045b1997866', 'Martelo (Martyr)', 'TBD', 'Gerado automaticamente', '\"TBD\"', 'TBD', 'TBD', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000'),
('7cdf1014-6ad5-47b8-82dc-4d14684bc476', 'Inquiridor (Inquisitive)', 'TBD', 'Gerado automaticamente', '\"TBD\"', 'TBD', 'TBD', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000'),
('96219f58-8f23-4b48-a8c8-32a2d5885567', 'Vingador (Avenger)', 'TBD', 'Gerado automaticamente', '\"TBD\"', 'TBD', 'TBD', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000'),
('b9665337-7bb2-11f1-a1c9-e89e5efddb4f', 'Inquisidores', 'Inquisitive', 'Caçadores focados em monitorar, catalogar e desvendar os segredos do sobrenatural. Eles acreditam que o conhecimento e a informação correta são as melhores armas para desmantelar os monstros.', '[\"Investigação\",\"Drones de Vigilância Térmica e Rastreamento\"]', 'Obscurantismo Paralisante', 'Se deparar com um fenômeno sobrenatural inexplicável ou perder registros cruciais de uma investigação faz com que seu Ímpeto desabe, jogando o caçador em Paranoia Obsessiva.', '2026-07-09 16:24:57.007', '2026-07-09 16:24:57.007'),
('b966635d-7bb2-11f1-a1c9-e89e5efddb4f', 'Vingadores', 'Avenger', 'Movidos pelo ódio e pelo desejo de retribuição. Não buscam entender ou salvar; seu único objetivo é a aniquilação total e violenta de qualquer criatura da noite que cruze seu caminho.', '[\"Armas de Fogo / Armas Brancas\",\"Munição de Fósforo Branco / Modificações de Dano Agravado\"]', 'Fúria Cegante / Obsessão por Sangue', 'Falhar em um ataque ou ver um monstro escapar ileso faz com que o caçador perca a cautela tática, sofrendo severas penalidades em dados de Defesa e Furtividade devido à raiva cega[cite: 4].', '2026-07-09 16:24:57.008', '2026-07-09 16:24:57.008'),
('b9667734-7bb2-11f1-a1c9-e89e5efddb4f', 'Protetores', 'Martyr', 'Colocam a segurança dos inocentes acima de tudo, inclusive de suas próprias vidas. Operam como escudos humanos, infiltrados em igrejas, ONGs e comunidades carentes para vigiar os civis.', '[\"Fé Inabalável / Socorro Tático\",\"Colete de Kevlar Pesado / Injetores de Adrenalina Pura\"]', 'Trauma de Pilar / Culpa do Sobrevivente', 'Se um civil inocente ou um aliado próximo (Pilar) sofrer ferimentos graves na cena devido à sua falha protetiva, o caçador entra instantaneamente em Aflição profunda, travando o gatilho[cite: 1, 4].', '2026-07-09 16:24:57.009', '2026-07-09 16:24:57.009'),
('b9668723-7bb2-11f1-a1c9-e89e5efddb4f', 'Juízes', 'Judgmatic', 'Eles enxergam a caçada como um tribunal. Avaliam as ações dos monstros e aplicam sentenças proporcionais: destroem os assassinos brutais, mas podem poupar ou usar criaturas que mantenham sua humanidade.', '[\"Liderança / Intimidação\",\"Táticas de Cerco e Interrogatório Urbano\"]', 'Crise de Convicção / Dúvida Moral', 'Ser forçado a quebrar seu próprio código moral (como executar uma presa comprovadamente inocente) estraçalha sua obstinação, zerando o Ímpeto e gerando o estado de Traumatizado[cite: 1, 4].', '2026-07-09 16:24:57.009', '2026-07-09 16:24:57.009'),
('b966977c-7bb2-11f1-a1c9-e89e5efddb4f', 'Redentores', 'Redeemer', 'Acreditam que os monstros são vítimas de uma maldição e buscam salvá-los ou curá-los. Tentam apelar para a antiga humanidade das criaturas através da diplomacia, recorrendo à violência apenas como último recurso.', '[\"Empatia / Persuasão\",\"Gabaritos de Contenção Não-Letal / Sedativos\"]', 'Desespero Utópico', 'Testemunhar um monstro abraçar o sadismo por completo ou ver uma tentativa de cura falhar tragicamente faz o caçador cair em melancolia, impedindo o ganho de Ímpeto por 3 noites[cite: 1, 4].', '2026-07-09 16:24:57.009', '2026-07-09 16:24:57.009'),
('dce50de7-fbbc-448f-91bd-24d183875882', 'Oráculo (Visionary)', 'TBD', 'Gerado automaticamente', '\"TBD\"', 'TBD', 'TBD', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000'),
('e09ad55a-aeeb-46da-9d86-1ad46cd88a4c', 'Juiz (Judgement)', 'TBD', 'Gerado automaticamente', '\"TBD\"', 'TBD', 'TBD', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000');

-- --------------------------------------------------------

--
-- Estrutura para tabela `ItemDefinition`
--

CREATE TABLE `ItemDefinition` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `value` double NOT NULL DEFAULT 0,
  `requirements` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `availability` int(11) DEFAULT NULL,
  `concealment` varchar(191) DEFAULT NULL,
  `damageOrEffect` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `ItemDefinition`
--

INSERT INTO `ItemDefinition` (`id`, `name`, `description`, `value`, `requirements`, `createdAt`, `updatedAt`, `availability`, `concealment`, `damageOrEffect`) VALUES
('226b0e33-9af6-4733-81dd-43beb75d1b7e', 'Fuzil de Assalto (T4 / 5.56)', 'Dano massivo. Disparos geram Visibilidade imediata.', 4, NULL, '2026-07-04 17:24:14.697', '2026-07-04 17:24:14.697', 7, 'Impossível', '+4'),
('3368ff54-5abd-456e-b1ff-11e70e6baa54', 'Munição de Fósforo Branco', 'Causa dano agravado direto em Vampiros (V5).', 3, NULL, '2026-07-04 17:24:14.732', '2026-07-04 17:24:14.732', 7, 'Bolso', '+2 Agravado (Fogo)'),
('38024ab4-ce1e-4977-9f75-b7315fd9686c', 'Adaga Ritualística de Prata', 'Feita de prata pura; quebra a regeneração Garou. Dif. de Ativação (Arete): Física normal', 3, NULL, '2026-07-04 17:24:14.760', '2026-07-04 17:24:14.760', 0, 'Casaco Largo', 'Força +2 (Dano Agravado em Lobisomens)'),
('3af98f5a-80bb-4582-8350-e8088dd1f1a6', 'Katana / Espada Longa', 'Exige a Habilidade Armas Brancas para não se cortar.', 3, NULL, '2026-07-04 17:24:14.717', '2026-07-04 17:24:14.717', 6, 'Impossível', 'Força +3'),
('48661168-3360-45e1-8f22-c052232ad584', 'Faca Tática / Canivete', 'Silenciosa. Perfeita para Furtividade.', 1, NULL, '2026-07-04 17:24:14.707', '2026-07-04 17:24:14.707', 2, 'Bolso', 'Força +1'),
('572a290c-d1c3-4d91-916c-96b8ef6c34b3', 'Drone de Vigilância Térmica', 'Ignora efeitos básicos de Ofuscação nível 1.', 3, NULL, '2026-07-04 17:24:14.740', '2026-07-04 17:24:14.740', 5, 'Mochila', 'Permite rastrear calor'),
('59ecb935-5490-4316-999c-ad221718ca4a', 'Runa da Casca de Árvore', 'Geralmente entalhada em madeira da Cantareira.', 2, NULL, '2026-07-04 17:24:14.774', '2026-07-04 17:24:14.774', 5, 'Bolso', '+2 dados em testes de Vigor'),
('7143832f-2ad0-4dcd-9a2a-7e7869f70b19', 'Soco Inglês', 'Transforma dano de Briga em contundente pesado.', 1, NULL, '2026-07-04 17:24:14.723', '2026-07-04 17:24:14.723', 2, 'Bolso', 'Força +1'),
('796a16b6-5a6c-4b0e-9990-917b4087dc46', 'Espingarda Calibre .12', 'Dano devastador a queima-roupa; espalha chumbo.', 2, NULL, '2026-07-04 17:24:14.702', '2026-07-04 17:24:14.702', 5, 'Casaco Largo', '+3'),
('7c640564-f613-4974-9b99-e0e116440461', 'Pistola 9mm (Glock/Imbel)', 'Padrão para Caçadores e PMs.', 2, NULL, '2026-07-04 17:24:14.655', '2026-07-04 17:24:14.655', 4, 'Bolso / Velado', '+2'),
('8443f6b7-2546-49d4-a69f-bf2dd864ea60', 'Grimório Antigo (Texto Hermético)', 'Contém rotinas mágicas prontas para diminuir Paradoxo. Dif. de Ativação (Arete): Teste de Ocultismo', 4, NULL, '2026-07-04 17:24:14.765', '2026-07-04 17:24:14.765', 7, 'Impossível', 'Permite estudar rituais'),
('a0818dd0-37b7-45fc-8102-dadf862c5b12', 'Colete de Kevlar Pesado', 'Reduz o dano de armas de fogo e impactos físicos.', 3, NULL, '2026-07-04 17:24:14.745', '2026-07-04 17:24:14.745', 6, 'Casaco Largo', 'Absorve 2 de Dano'),
('a5936539-5f7d-4d11-8b25-3425acdd8120', 'Injetor de Adrenalina Pura', 'Se usado em excesso, causa o estado de Aflição.', 2, NULL, '2026-07-04 17:24:14.750', '2026-07-04 17:24:14.750', 4, 'Bolso', 'Ignora penalidades por ferimento por 3 turnos'),
('b5e6e174-846f-4083-b352-ff91c1181ecb', 'Notebook Tecnomante Customizado', 'Reduz em -1 a dif. para magias de Correspondência/Forças. Dif. de Ativação (Arete): Base da Esfera', 4, NULL, '2026-07-04 17:24:14.755', '2026-07-04 17:24:14.755', 0, 'Mochila', 'Foco para Adeptos da Virtualidade'),
('b9ffd53c-cec1-4acf-843d-84b84b4b132f', 'Revólver .38 (Canela Seca)', 'Confiável, não deixa estojos de bala na cena.', 1, NULL, '2026-07-04 17:24:14.686', '2026-07-04 17:24:14.686', 3, 'Bolso', '+2'),
('ba686d7c-eb4b-4bb7-af3b-93fa891aa598', 'Pedra de Sangue (Período/Matéria)', 'Funciona como uma bateria mágica para descarregar feitiços. Dif. de Ativação (Arete): Não exige teste para extrair', 3, NULL, '2026-07-04 17:24:14.770', '2026-07-04 17:24:14.770', 0, 'Bolso', 'Armazena 5 pontos de Quintessência'),
('f4b85881-06b3-4860-9be1-6975bfadb5d0', 'Machadinha de Incêndio', 'Usada por Caçadores do Credo Vingador.', 1, NULL, '2026-07-04 17:24:14.712', '2026-07-04 17:24:14.712', 3, 'Casaco Largo', 'Força +2'),
('fbbdf540-0ad6-412f-9126-a948da6980bc', 'Pedra do Uivo (Fetiche)', 'Espírito de um lobo ancestral aprisionado na pedra.', 3, NULL, '2026-07-04 17:24:14.779', '2026-07-04 17:24:14.779', 6, 'Bolso', 'Ativa o Dom Chamado Além da Névoa sem gastar Fúria'),
('fced2625-d692-47dc-9eb8-1f2a50159992', 'Runa do Rastreador Urbano', 'Abençoada por espíritos do asfalto.', 1, NULL, '2026-07-04 17:24:14.784', '2026-07-04 17:24:14.784', 4, 'No corpo (Tatuagem/Cicatriz)', 'Reduz em -2 a dificuldade de caça na Zona Sul');

-- --------------------------------------------------------

--
-- Estrutura para tabela `MageTraditionDefinition`
--

CREATE TABLE `MageTraditionDefinition` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `englishName` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `affinitySphere` varchar(255) NOT NULL,
  `focusInstruments` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`focusInstruments`)),
  `paradigmFlawName` varchar(255) NOT NULL,
  `paradigmFlawDescription` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `MageTraditionDefinition`
--

INSERT INTO `MageTraditionDefinition` (`id`, `name`, `englishName`, `description`, `affinitySphere`, `focusInstruments`, `paradigmFlawName`, `paradigmFlawDescription`, `createdAt`, `updatedAt`) VALUES
('40d4fda0-c64d-4ad1-bd54-421b817a4a19', 'Adeptos Virtuais', 'TBD', 'Gerado automaticamente', 'TBD', '\"TBD\"', 'TBD', 'TBD', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000'),
('44f14747-3925-4b05-8273-d9cb6ee41053', 'Cultistas do Êxtase', 'TBD', 'Gerado automaticamente', 'TBD', '\"TBD\"', 'TBD', 'TBD', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000'),
('b965bebd-7bb2-11f1-a1c9-e89e5efddb4f', 'Adeptos da Virtualidade', 'Virtual Adepts', 'Tecnómagos e hackers que entendem a realidade como um código de computador passível de ser \'hackeado\'[cite: 1]. Dominam a infraestrutura digital e redes ocultas[cite: 17].', 'Correspondência', '[\"Notebook Tecnomante Customizado\",\"Drones de Vigilância Térmica\",\"Algoritmos e Hardware de Santa Ifigênia\"]', 'Dependência de Hardware / Foco Rígido', 'Sua magia é intrinsecamente ligada à tecnologia. Se o Mago for privado de computadores ou rede de dados, sua dificuldade de conjuração é severamente penalizada.', '2026-07-09 16:24:57.004', '2026-07-09 16:24:57.004'),
('b965cf12-7bb2-11f1-a1c9-e89e5efddb4f', 'Coro Celestial', 'Celestial Chorus', 'Buscam o divino por meio da crença e da devoção em uma força unificada[cite: 1]. Operam em santuários e basílicas tradicionais da cidade[cite: 17].', 'Primórdio', '[\"Orações, Cânticos e Hinos\",\"Símbolos Religiosos Sagrados\",\"Incensos e Velas Rituais\"]', 'Dogmatismo Rígido', 'Seus feitiços exigem pureza de intenção e fé. Caso execute ações que entrem em contradição direta com seus votos morais, o Paradoxo ricocheteia com o dobro de agressividade[cite: 1, 4].', '2026-07-09 16:24:57.004', '2026-07-09 16:24:57.004'),
('b965e04a-7bb2-11f1-a1c9-e89e5efddb4f', 'Culto do Êxtase', 'Cult of Ecstasy', 'Buscam a iluminação através dos sentidos, emoções, meditação e alteração da percepção e do tempo[cite: 1].', 'Tempo', '[\"Músicas Dinâmicas / Dança\",\"Estimulantes e Substâncias Alteradoras\",\"Meditação Sensorial Intensa\"]', 'Alheamento Temporal / Distração', 'Sua manipulação constante da linha do tempo gera desorientação. Sofrem penalidades em rolagens de Prontidão e Iniciativa ao saírem de feitiços de transe temporal[cite: 4].', '2026-07-09 16:24:57.005', '2026-07-09 16:24:57.005'),
('b965eea9-7bb2-11f1-a1c9-e89e5efddb4f', 'Eutanatos', 'Euthanatoi', 'Sacerdotes da morte, do destino e do renascimento. Controlam o ciclo de almas através da entropia[cite: 1] e vigiam os cemitérios urbanos[cite: 17].', 'Entropia', '[\"Dados, Moedas e Jogos de Azar\",\"Adagas Rituais\",\"Cinzas e Símbolos de Decomposição\"]', 'O Peso do Destino / Máscara Fúnebre', 'Lidar com o decaimento torna sua aura pesada. Humanas comuns sentem repulsa inconsciente, aplicando penalidades em testes sociais de primeira impressão (Lábia/Etiqueta)[cite: 4].', '2026-07-09 16:24:57.005', '2026-07-09 16:24:57.005'),
('b965fdd8-7bb2-11f1-a1c9-e89e5efddb4f', 'Filhos do Éter', 'Sons of Ether', 'Cientistas idealistas, rebeldes e inventores que utilizam a eter-ciência em vez da ortodoxia Tecnocrática[cite: 1]. Operam em laboratórios e galpões secretos[cite: 17].', 'Matéria', '[\"Gambiarras de Engenharia / Óculos Táticos\",\"Raios de Plasma e Bobinas Personalizadas\",\"Manuais Científicos Alternativos\"]', 'Instabilidade da Invenção', 'Seus aparatos científicos desafiam o Consenso Público de forma vulgar. Falhas em seus testes de Matéria frequentemente explodem as engenhocas, causando dano físico direto ao Mago[cite: 1, 4].', '2026-07-09 16:24:57.005', '2026-07-09 16:24:57.005'),
('b9660d2a-7bb2-11f1-a1c9-e89e5efddb4f', 'Irmandade de Akasha', 'Akashic Brotherhood', 'Monges guerreiros focados no domínio da mente e do corpo por meio de energia interior[cite: 1]. Concentrados na região tradicional da Liberdade[cite: 17].', 'Mente', '[\"Exercícios de Respiração (Pranayama)\",\"Movimentos de Artes Marciais / Katana\",\"Meditação Ascética Concentrada\"]', 'Rigidez Marcial / Necessidade de Foco', 'Sua magia exige equilíbrio biológico e mental. Estar sob efeito de venenos, ferimentos graves ou ambientes de barulho caótico (Marginais) obstaculiza o uso de seus poderes interiores[cite: 4].', '2026-07-09 16:24:57.006', '2026-07-09 16:24:57.006'),
('b9661bd0-7bb2-11f1-a1c9-e89e5efddb4f', 'Oradores dos Sonhos', 'Dreamspeakers', 'Xamãs que servem como pontes entre o mundo material, espiritual e os ancestrais[cite: 1]. Infiltrados nas reservas e matas periféricas.', 'Espírito', '[\"Tambores e Chocalhos Rituais\",\"Ervas Queimadas e Defumações\",\"Pactos de Sangue com Espíritos Locais\"]', 'Magnetismo Espiritual', 'Sua proximidade com o Véu faz com que entidades da Umbra fiquem constantemente atraídas pelo seu rastro, aumentando as chances de encontros perigosos com o invisível durante as patrulhas[cite: 4].', '2026-07-09 16:24:57.006', '2026-07-09 16:24:57.006'),
('b9662b48-7bb2-11f1-a1c9-e89e5efddb4f', 'Ordem de Hermes', 'Order of Hermes', 'Mestres clássicos de rituais, invocação e numerologia esotérica. Baseiam-se em textos e pactos antigos[cite: 1]. Operam na Capela Central de Perdizes[cite: 17].', 'Forças', '[\"Grimórios Antigos e Pergaminhos\",\"Palavras de Comando em Enochiano\",\"Cálculos Matemáticos Planificados\"]', 'Complexidade Ritual / Verbose', 'Seus feitiços exigem gestos precisos e entonação perfeita de palavras arcanas. São incapazes de lançar feitiços de forma silenciosa ou totalmente paralisados, sob risco de sofrerem Choque de Retorno imediato[cite: 1, 4].', '2026-07-09 16:24:57.007', '2026-07-09 16:24:57.007'),
('b9663b4c-7bb2-11f1-a1c9-e89e5efddb4f', 'Verbena', 'Verbena', 'Bruxos pagãos primitivos e druidas que manipulam os fluxos de vida e sangue da natureza[cite: 1]. Escondem-se nas matas fechadas do Mandaqui e Cantareira[cite: 17].', 'Vida', '[\"Sacrifício de Sangue Próprio ou Animal\",\"Ervas Silvestres, Raízes e Caldeirões\",\"Entalhes em Madeira e Runas da Casca de Árvore\"]', 'Paradoxo da Carne / Dano Primitivo', 'Sua magia é visceral, orgânica e sangrenta. O uso de rituais de transmutação biológica em locais públicos gera repulsa imediata no Consenso, gerando anomalias físicas grotescas na região[cite: 1, 4].', '2026-07-09 16:24:57.007', '2026-07-09 16:24:57.007'),
('e5c887be-12e4-44bd-a04d-f998c137a51d', 'Filhos Ocos (Hollow Ones)', 'TBD', 'Gerado automaticamente', 'TBD', '\"TBD\"', 'TBD', 'TBD', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000');

-- --------------------------------------------------------

--
-- Estrutura para tabela `MediaVisibility`
--

CREATE TABLE `MediaVisibility` (
  `id` varchar(191) NOT NULL,
  `mediaType` varchar(191) NOT NULL,
  `severity` varchar(191) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `MediaVisibility`
--

INSERT INTO `MediaVisibility` (`id`, `mediaType`, `severity`, `description`) VALUES
('20a37897-0c1b-4830-8f02-2b1075346cea', 'Mídia Local', 'Nenhuma', NULL),
('6cbaf787-1da7-4d0e-928d-3ef9ffd7a937', 'Mídia Local', 'Altíssima', NULL),
('6ceb229e-c584-4e2a-a4af-05247f0817eb', 'Mídia Local', 'Baixa', NULL),
('996e87f8-acd8-477d-9dd9-d28d52fd965a', 'Mídia Local', 'Alta', NULL),
('af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 'Mídia Local', 'Média', NULL),
('bb1ff249-bd74-492e-8c4b-53229800ae4e', 'Mídia Local', 'Eventual (Alta/Baixa)', NULL),
('c6fc927e-6e30-4036-9587-0ecc4abf69a8', 'Mídia Local', 'Crítica', NULL),
('d37282e3-e836-4855-8b2c-5609198a9b23', 'Mídia Local', 'Baixa-Média', NULL),
('d78e7c9b-0af9-4a4d-b146-13a2fa6d0ec3', 'Mídia Local', 'Média-Alta', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `MeritFlawDefinition`
--

CREATE TABLE `MeritFlawDefinition` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `type` enum('MERIT','FLAW') NOT NULL,
  `gameStyle` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `apiEffect` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`apiEffect`)),
  `category` varchar(191) DEFAULT NULL,
  `points` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `MeritFlawDefinition`
--

INSERT INTO `MeritFlawDefinition` (`id`, `name`, `type`, `gameStyle`, `description`, `createdAt`, `updatedAt`, `apiEffect`, `category`, `points`) VALUES
('086308fd-1d54-409c-8749-e240866d2659', 'Equilíbrio Perfeito', 'MERIT', 'MAGE', 'Útil para escapar de agentes da Tecnocracia pulando telhados no centro velho.', '2026-07-04 17:54:27.431', '2026-07-04 17:54:27.431', '{\"alvo_teste\": [\"esportes\", \"atletismo_coordenacao\"], \"modificador_dados\": 2}', 'Física', 1),
('0a04e083-ae4a-4833-832f-a0d58c183fb6', 'Fobia Tremenda', 'FLAW', 'VAMPIRE', 'Pode ser medo de fogo, água profunda (Represa do Grajaú) ou grandes aglomerações.', '2026-07-04 17:54:27.350', '2026-07-04 17:54:27.350', '{\"condicao\": \"confrontar_gatilho_especifico\", \"gatilho_teste\": \"Rötschreck_imediato\"}', 'Mental', 2),
('0bbeea0f-1ae2-4782-a2ca-f0aae1d9d570', 'Afinidade com a Umbra', 'MERIT', 'WEREWOLF', 'O lobo se move facilmente entre o asfalto de SP e o plano místico espiritual.', '2026-07-04 17:54:27.377', '2026-07-04 17:54:27.377', '{\"alvo_teste\": \"atravessar_pelicula\", \"modificador_dificuldade\": -2}', 'Mental', 3),
('113851b0-4909-4678-b007-09f95734edd2', 'Fúria Cega', 'FLAW', 'WEREWOLF', 'O motor sobrenatural explode com facilidade, gerando caos irracional.', '2026-07-04 17:54:27.411', '2026-07-04 17:54:27.411', '{\"gatilhos\": [\"dano_fisico\", \"insulto_social\"], \"alvo_teste\": \"resistir_frenesi\", \"modificador_dificuldade\": 2}', 'Social', 3),
('1227d548-f608-490b-90bf-be24dcf1e2c6', 'Vontade Inabalável', 'MERIT', 'VAMPIRE', 'Comum em caçadores veteranos abraçados ou mentes altamente disciplinadas.', '2026-07-04 17:54:27.321', '2026-07-04 17:54:27.321', '{\"alvo_teste\": \"resistencia_poderes_mentais\", \"modificador_dados\": 2, \"disciplinas_afetadas\": [\"Dominação\", \"Presença\"]}', 'Mental', 3),
('12861b9b-64bc-4c5c-91fa-2554e7bded64', 'Resistência ao Sol', 'MERIT', 'VAMPIRE', 'Extremamente raro e valioso; permite fugas diurnas milagrosas pelas ruas de SP.', '2026-07-04 17:54:27.333', '2026-07-04 17:54:27.333', '{\"altera_tipo_dano\": {\"de\": \"agravado\", \"para\": \"superficial\", \"condicao\": \"primeiros_turnos_exposicao\"}}', 'Física', 5),
('12933634-3466-43c2-9d28-aaf70acae7fe', 'Resistência ao Paradoxo', 'MERIT', 'MAGE', 'A realidade parece \'perdoar\' seus pequenos deslizes contra o Consenso.', '2026-07-04 17:54:27.427', '2026-07-04 17:54:27.427', '{\"condicao\": \"falha_magica_vulgar\", \"reducao_acumulo_paradoxo\": 1}', 'Mental', 2),
('158c1381-552f-4ffd-947a-78ae9f585e46', 'Alimentação Restrita', 'FLAW', 'VAMPIRE', 'Limita severamente as opções de caça na rua durante as escolhas do Twine.', '2026-07-04 17:54:27.361', '2026-07-04 17:54:27.361', '{\"bloqueia_saciedade_alvos\": \"nao_especificados_pelo_defeito\"}', 'Física', 3),
('2044cc35-1165-498b-8961-2fb385b1f3cb', 'Mente Blindada', 'MERIT', 'HUNTER', 'Sua força de vontade e obstinação humana são extremamente difíceis de quebrar.', '2026-07-04 17:54:27.470', '2026-07-04 17:54:27.470', '{\"condicao\": \"resistir_poderes_mentais_monstros\", \"alvo_teste\": [\"autocontrol\", \"determinacao\"], \"modificador_dados\": 2}', 'Mental', 3),
('22ac6906-3d45-4832-b251-84081e78f848', 'Armeiro Clandestino', 'MERIT', 'HUNTER', 'Excelente para caçadores operários que utilizam galpões ocultos no Jaguaré.', '2026-07-04 17:54:27.477', '2026-07-04 17:54:27.477', '{\"alvo_teste\": [\"criar_itens_arsenal\", \"modificar_municao\"], \"modificador_dificuldade\": -2}', 'Física', 2),
('2d2399da-aaea-48b1-8b09-12b5f86e32a5', 'Segunda Inquisição no Rastro', 'FLAW', 'VAMPIRE', 'Vans pretas patrulham o quarteirão do seu refúgio com frequência assustadora.', '2026-07-04 17:54:27.369', '2026-07-04 17:54:27.369', '{\"tipo_inimigo\": \"caçadores_tecnologicos\", \"chance_encontro_aleatorio\": 0.4}', 'Social', 4),
('361c44b6-dec7-45e7-adc5-866c4a2e863d', 'Segredo Sombrio', 'FLAW', 'MAGE', 'Você pode ter negociado com Nephandi ou vendido dados para os Ventrue.', '2026-07-04 17:54:27.467', '2026-07-04 17:54:27.467', '{\"consequencia\": \"julgamento_pelo_conselho\", \"condicao_descoberta_perda_status\": true}', 'Social', 1),
('4163b645-3243-4815-b584-3fae62463e38', 'Avatar Insano / Destrutivo', 'FLAW', 'MAGE', 'Seu Avatar exige a Ascensão através do caos, flertando com o perigo.', '2026-07-04 17:54:27.451', '2026-07-04 17:54:27.451', '{\"gatilho_surto_loucura\": \"falha_critica_rolagem_arete\"}', 'Mental', 3),
('4d564584-fc32-44ac-bb0a-470a3de28ef9', 'Repulsivo', 'FLAW', 'VAMPIRE', 'Padrão para o Clã Nosferatu, forçando o uso de Ofuscação nos becos da Sé.', '2026-07-04 17:54:27.365', '2026-07-04 17:54:27.365', '{\"falha_automatica_testes\": \"sociais_baseados_em_aparence\"}', 'Física', 2),
('4f08bf24-0bf2-4054-bb05-14de9a4e977f', 'Pesadelos Recorrentes', 'FLAW', 'VAMPIRE', 'Visões perturbadoras que drenam o descanso e incitam a Besta interior.', '2026-07-04 17:54:27.354', '2026-07-04 17:54:27.354', '{\"alvo_penalidade\": \"acoes_mentais_inicio_noite\", \"teste_obrigatorio\": \"forca_de_vontade_ao_acordar\", \"falha_penalidade_dados\": -1}', 'Mental', 1),
('4f3a106c-f943-49cd-8fec-d6d320fd0e41', 'Monstro Desfigurado', 'FLAW', 'WEREWOLF', 'Suas garras e mandíbula são grotescas, quebrando qualquer chance de sutileza.', '2026-07-04 17:54:27.405', '2026-07-04 17:54:27.405', '{\"delirio_humano_violento\": true, \"aumenta_danos_colaterais\": true}', 'Física', 2),
('54dc648b-457f-4bab-9c8c-76d9bbd3e03f', 'Traumatizado', 'FLAW', 'HUNTER', 'Memórias brutais e paralisantes que travam o dedo no gatilho na hora H.', '2026-07-04 17:54:27.494', '2026-07-04 17:54:27.494', '{\"condicao\": \"confrontar_tipo_especifico_monstro_gatilho\", \"perda_imediata_impeto\": 1}', 'Mental', 1),
('56ad5b2c-594f-4940-ad1c-f6416ba3e7ad', 'Equipamento Defeituoso', 'FLAW', 'HUNTER', 'Drones ou armas montadas com peças baratas contrabandeadas da Santa Ifigênia.', '2026-07-04 17:54:27.497', '2026-07-04 17:54:27.497', '{\"exige_reparo\": \"teste_oficios\", \"condicao_quebra_item\": \"falha_teste_fisico_arsenal\"}', 'Física', 2),
('5795d2a7-c120-4a74-b251-b236080c653d', 'Caçado pela Tecnocracia', 'FLAW', 'MAGE', 'Câmeras de reconhecimento facial disparam alertas se você passar pelo centro.', '2026-07-04 17:54:27.463', '2026-07-04 17:54:27.463', '{\"chance_emboscada_regiao_republica\": 0.35, \"rastreio_automatica_bairros_tecnologicos\": true}', 'Social', 4),
('596a2576-bf17-47b9-96a5-3ee255af9216', 'Paradoxo Permanente', 'FLAW', 'MAGE', 'Uma deformidade visível ou tique físico que a realidade pune constantemente.', '2026-07-04 17:54:27.445', '2026-07-04 17:54:27.445', '{\"pontos_paradoxo_travados\": 2}', 'Mental', 3),
('5d9183d0-fb23-4b53-8587-69b22ae1e05a', 'Fé Inabalável', 'MERIT', 'HUNTER', 'Comum em caçadores do Credo Protetor infiltrados nas igrejas da Penha.', '2026-07-04 17:54:27.474', '2026-07-04 17:54:27.474', '{\"permite_teste_recuperacao_aflicao\": {\"atributo\": \"determinacao\", \"ignora_redencao_externa\": true}}', 'Mental', 2),
('5e124289-591c-446e-87ee-3c6a983c0f39', 'Célula Coesa', 'MERIT', 'HUNTER', 'O poder do suporte tático e da confiança mútua entre humanos comuns.', '2026-07-04 17:54:27.487', '2026-07-04 17:54:27.487', '{\"condicao\": \"aliados_na_mesma_cena\", \"alvo_teste\": [\"social\", \"mental\"], \"modificador_dados\": 1, \"uso_limitado_por_aventura\": 1}', 'Social', 2),
('64d2f1cc-84fe-4bf8-ba4a-bcbf90530f78', 'Contatos na Burocracia', 'MERIT', 'MAGE', 'Facilita a vida do mago infiltrado nos bastidores do Fórum da Barra Funda.', '2026-07-04 17:54:27.438', '2026-07-04 17:54:27.438', '{\"alvo_teste\": [\"politica\", \"direito_desviar_investigacoes\"], \"modificador_dados\": 2}', 'Social', 2),
('661a7c72-2381-4124-b4c8-d51f2b6984f4', 'Magnetismo da Wyrm', 'FLAW', 'WEREWOLF', 'Criaturas e servos da Devastadora sentem o seu cheiro espiritual a quilômetros.', '2026-07-04 17:54:27.402', '2026-07-04 17:54:27.402', '{\"alvo_teste\": \"furtividade_contra_servos_wyrm\", \"modificador_dificuldade_inimigo\": -2}', 'Mental', 3),
('695e9c58-d017-4595-9d1b-3d57c58c1d30', 'Contatos Comprometidos', 'FLAW', 'VAMPIRE', 'Seus aliados ou informantes exigem favores perigosos ou cobram caro por sangue seguro.', '2026-07-04 17:54:27.372', '2026-07-04 17:54:27.372', '{\"custo_recursos_dobrado\": true, \"modificador_dificuldade_suporte\": 2}', 'Social', 2),
('6b362f1d-60df-4835-acf4-aa039069a249', 'Renome de Linhagem', 'MERIT', 'WEREWOLF', 'Respeito imediato garantido entre as matilhas ancestrais da Serra da Cantareira.', '2026-07-04 17:54:27.391', '2026-07-04 17:54:27.391', '{\"pontos_iniciais_renome\": 1}', 'Social', 2),
('6efdb080-e6cc-4b50-932d-dd4c3a857aac', 'Concentração Absoluta', 'MERIT', 'MAGE', 'Permite conjurar efeitos precisos mesmo sob o barulho da Marginal Tietê.', '2026-07-04 17:54:27.434', '2026-07-04 17:54:27.434', '{\"testes_afetados\": [\"meditacao\", \"conjuracao_esferas\"], \"ignora_penalidades_distracao\": true}', 'Física', 2),
('71e7ee0d-c4e8-4707-89d9-3d53191d6cb8', 'Vulnerabilidade Sobrenatural', 'FLAW', 'MAGE', 'Seu corpo físico desprotegido reage terrivelmente às garras dos outros monstros.', '2026-07-04 17:54:27.460', '2026-07-04 17:54:27.460', '{\"dano_agravado_fonte_especifica\": true}', 'Física', 4),
('75005780-6f93-4d61-a601-dde1a77e9ff6', 'Protetor de Pilares', 'FLAW', 'HUNTER', 'Você possui um familiar ou amigo inocente que virou o calcanhar de Aquiles dos monstros.', '2026-07-04 17:54:27.508', '2026-07-04 17:54:27.508', '{\"gatilho_aflicao_automatica\": \"pilar_sofrer_dano_na_historia\"}', 'Social', 2),
('7564b758-8c11-42cf-9aff-55029dc7ed6b', 'Sentidos Hiper-Aguçados', 'MERIT', 'WEREWOLF', 'Capaz de farejar o rastro de um alvo mesmo em meio à poluição da Marginal Tietê.', '2026-07-04 17:54:27.388', '2026-07-04 17:54:27.388', '{\"alvo_teste\": \"percepcao_olfato_audicao\", \"forma_requerida\": \"Hominídea\", \"modificador_dados\": 2}', 'Física', 2),
('7ba92c45-b1af-4a05-9a4f-de814a19c014', 'Paranoia Obsessiva', 'FLAW', 'HUNTER', 'O caçador vê monstros em cada esquina, desgastando sua sanidade do dia a dia.', '2026-07-04 17:54:27.491', '2026-07-04 17:54:27.491', '{\"condicao\": \"fora_de_caçada_ativa\", \"alvo_teste\": [\"sagacidade\", \"raciocinio\"], \"penalidade_dados\": -2}', 'Mental', 2),
('7cedc2c5-fa58-4702-8bd7-468f77f0f2cc', 'Tolerância a Toxinas', 'MERIT', 'HUNTER', 'Seu corpo aguenta o tranco de compostos químicos perigosos e ambientes insalubres.', '2026-07-04 17:54:27.480', '2026-07-04 17:54:27.480', '{\"alvo_teste\": \"vigor_resistir_venenos_sangue_contaminado\", \"modificador_dados\": 2}', 'Física', 2),
('8253697f-7d4e-4fab-828f-6c0426c2f645', 'Status na Camarilla', 'MERIT', 'VAMPIRE', 'Respeito político garantido nos salões nobres do Itaim Bibi.', '2026-07-04 17:54:27.343', '2026-07-04 17:54:27.343', '{\"condicao\": \"interacao_membros_seita\", \"alvo_teste\": \"manipulacao_diplomacia\", \"modificador_dados\": 2}', 'Social', 2),
('847cd882-0c6c-489a-b27c-afed40218232', 'Película Espessa', 'FLAW', 'WEREWOLF', 'O Garou é espiritualmente \'cego\', muito preso à dura realidade material.', '2026-07-04 17:54:27.398', '2026-07-04 17:54:27.398', '{\"alvo_teste\": [\"atravessar_pelicula\", \"notar_espiritos\"], \"modificador_dificuldade\": 2}', 'Mental', 2),
('86c0740b-f6bb-4862-bfd5-a809c82d7428', 'Alergia a Prata Estrita', 'FLAW', 'WEREWOLF', 'O maior pesadelo biológico de um lobo nas ruas de São Paulo.', '2026-07-04 17:54:27.408', '2026-07-04 17:54:27.408', '{\"dano_por_turno_contato_prata\": {\"tipo\": \"agravado\", \"quantidade\": 1, \"aplica_em_hominideo\": true}}', 'Física', 4),
('8bee8b7c-fa1f-41bf-8368-8b688d8febee', 'Rede de Informantes', 'MERIT', 'HUNTER', 'Conexões diretas com motoboys na Brasilândia ou seguranças na Vila Olímpia.', '2026-07-04 17:54:27.484', '2026-07-04 17:54:27.484', '{\"alvo_teste\": [\"investigacao\", \"manha_descobrir_fraqueza_inimiga\"], \"modificador_dificuldade\": -2}', 'Social', 3),
('9003a5d5-9752-415c-9b31-de0a55d65f02', 'Exilado da Seita', 'FLAW', 'WEREWOLF', 'Você quebrou leis da Litania e não é bem-vindo nos santuários urbanos.', '2026-07-04 17:54:27.415', '2026-07-04 17:54:27.415', '{\"alvo_teste\": \"testes_sociais_com_propria_tribo\", \"penalidade_dados\": -2}', 'Social', 2),
('9392e39e-fb3a-4ef5-a53f-bd83262ca36a', 'Identidade Falsa de Elite', 'MERIT', 'VAMPIRE', 'Permite transitar livremente por fiscalizações na Vila Olímpia ou na Avenida Paulista.', '2026-07-04 17:54:27.347', '2026-07-04 17:54:27.347', '{\"ignora_fiscalizacao_mundana\": true}', 'Social', 3),
('96499a03-ccd1-4d9a-a1ba-ea7d1ed90de2', 'Refúgio Fortificado', 'MERIT', 'VAMPIRE', 'Uma cobertura blindada nos Jardins ou um bunker subterrâneo secreto na Sé.', '2026-07-04 17:54:27.340', '2026-07-04 17:54:27.340', '{\"alvo_teste\": \"rastreio_invasao_refugio\", \"modificador_dificuldade_inimigo\": 2}', 'Social', 2),
('9917d690-f598-4ca7-8b66-f7b3e7e020db', 'Foco Rígido / Dependência', 'FLAW', 'MAGE', 'Padrão para tecnomantes que dependem de hardware customizado da Santa Ifigênia.', '2026-07-04 17:54:27.456', '2026-07-04 17:54:27.456', '{\"bloqueia_magica_sem_instrumento\": true}', 'Física', 2),
('b85ae4d9-59fb-498a-b38e-283c4c2d813e', 'Dependência Chemical', 'FLAW', 'HUNTER', 'Químicos e estimulantes usados para segurar o medo diante do terror urbano.', '2026-07-04 17:54:27.501', '2026-07-04 17:54:27.501', '{\"alvo_penalidade\": \"testes_fisicos_em_combate\", \"penalidade_dados_sem_consumo\": -1}', 'Física', 3),
('bf55d4fa-6227-41c2-bd0f-4daa1dc51490', 'Consumidor Eficiente', 'MERIT', 'VAMPIRE', 'O vampiro sabe extrair e processar cada gota de Ressonância das suas vítimas.', '2026-07-04 17:54:27.336', '2026-07-04 17:54:27.336', '{\"alvo_teste\": \"alimentacao\", \"modificador_reducao_fome\": 2}', 'Física', 3),
('cde26eba-fca1-4d18-a82e-66a8046b3797', 'Equilíbrio de Harano', 'MERIT', 'WEREWOLF', 'Sua mente se mantém firme diante da inevitabilidade do Apocalipse de Gaia.', '2026-07-04 17:54:27.395', '2026-07-04 17:54:27.395', '{\"alvo_teste\": \"resistir_harano\", \"modificador_dados\": 2}', 'Social', 3),
('cf18237a-0817-4329-87b9-fb44f8de9594', 'Besta Calma', 'MERIT', 'VAMPIRE', 'O vampiro mantém o controle mesmo sob forte estresse urbano.', '2026-07-04 17:54:27.328', '2026-07-04 17:54:27.328', '{\"alvo_teste\": \"resistir_frenesi\", \"modificador_dificuldade\": -1}', 'Mental', 2),
('d02bca75-6dec-4f5a-8158-41fd20f22deb', 'Laços com a Tradição', 'MERIT', 'MAGE', 'Respeito e abrigo espiritual imediato garantidos na Basílica da Penha.', '2026-07-04 17:54:27.442', '2026-07-04 17:54:27.442', '{\"alvo_teste\": \"interacoes_sociais_faccao\", \"modificador_dados\": 1, \"garante_refugio_seguro\": true}', 'Social', 2),
('d14f6c31-828f-41f2-8863-e1adcbfbb08a', 'Rastro Policial (Infiltrado)', 'FLAW', 'HUNTER', 'Agências oficiais (DEIC) investigam suas ações vigilantes como terrorismo doméstico.', '2026-07-04 17:54:27.505', '2026-07-04 17:54:27.505', '{\"bloqueia_transito_armas\": [\"Itaim Bibi\", \"Jardins\", \"Higienópolis\"], \"chance_abordagem_policial\": 0.25}', 'Social', 3),
('d66a9066-be1c-4215-ab58-d03582cafcbd', 'Mentor Espiritual', 'MERIT', 'WEREWOLF', 'Um espírito aliado que habita o Caern secreto do Parque Ibirapuera.', '2026-07-04 17:54:27.380', '2026-07-04 17:54:27.380', '{\"alvo_teste\": [\"ocultismo\", \"aprender_dons\"], \"modificador_dados\": 1}', 'Mental', 2),
('ddac1ce9-d333-473e-8dbb-b15eb364adfe', 'Sangue Ralo (Caitiff/Sangue-Fraco)', 'FLAW', 'VAMPIRE', 'Escondem-se nas franjas de SP, como nas favelas densas do Sapopemba.', '2026-07-04 17:54:27.357', '2026-07-04 17:54:27.357', '{\"remove_bonus_cla\": true, \"trava_nivel_disciplina\": 1}', 'Física', 2),
('e5684b3e-e32a-4dae-be12-d57a0043ab01', 'Avatar Forte', 'MERIT', 'MAGE', 'Seu espírito desperto possui uma conexão visceral e pura com o Primórdio.', '2026-07-04 17:54:27.424', '2026-07-04 17:54:27.424', '{\"alvo_teste\": [\"absorver_quintessencia\", \"canalizar_quintessencia\"], \"modificador_dados\": 2}', 'Mental', 3),
('faaedc8a-de10-4ed1-a201-717b8f925e5f', 'Cura Acelerada', 'MERIT', 'WEREWOLF', 'Sua biologia Garou é absurdamente vigorosa e resiliente a ferimentos.', '2026-07-04 17:54:27.384', '2026-07-04 17:54:27.384', '{\"regeneracao_adicional_sem_furia\": true}', 'Física', 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `PowerDefinition`
--

CREATE TABLE `PowerDefinition` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `gameStyle` varchar(191) NOT NULL,
  `type` enum('DISCIPLINE','GIFT','SPHERE','EDGE') NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `PowerDefinition`
--

INSERT INTO `PowerDefinition` (`id`, `name`, `gameStyle`, `type`, `description`, `createdAt`, `updatedAt`) VALUES
('09ad810f-0d54-45de-b4f8-ba0d22a79357', 'Correspondência', 'MAGE', 'SPHERE', 'Domínio sobre as distâncias, localizações, teletransporte e a ilusão do espaço físico. Foco: Mental.', '2026-07-04 16:40:33.531', '2026-07-04 17:08:00.955'),
('24ff7ac9-5d0b-4bf9-b417-c35648793293', 'Auspícios', 'VAMPIRE', 'DISCIPLINE', NULL, '2026-07-04 16:40:33.520', '2026-07-04 16:40:33.520'),
('2c56e5cb-8069-4469-8044-87435369c846', 'Fortitude', 'VAMPIRE', 'DISCIPLINE', 'Resistência sobrenatural que permite ao vampiro ignorar tiros, quedas e até mitigar dano de fogo e luz solar. Foco: Físico.', '2026-07-04 16:57:17.918', '2026-07-04 16:57:17.918'),
('2cc4df53-61d5-4f32-a1bd-cba80457904a', 'Dons Universais da Cidade', 'WEREWOLF', 'GIFT', 'Dons que todo lobisomem urbano em São Paulo pode aprender para lidar com a infraestrutura e a pobreza. Foco: Misto.', '2026-07-04 17:02:52.344', '2026-07-04 17:02:52.344'),
('37b32131-343f-4465-8177-a75ee39ca96c', 'Matéria', 'MAGE', 'SPHERE', 'Manipulação de substâncias sólidas, líquidas e gasosas que não possuem vida. Foco: Físico.', '2026-07-04 16:40:33.556', '2026-07-04 17:08:01.073'),
('3a759777-8aa8-4d99-b1df-904d85462908', 'Dons do Augúrio: Ragabash', 'WEREWOLF', 'GIFT', 'Dons de furtividade, trapaça, subversão e questionamento das regras sociais e físicas. Foco: Físico / Mental.', '2026-07-04 17:02:52.306', '2026-07-04 17:02:52.306'),
('453ff247-29ee-4e1a-a2ef-8763e2584900', 'Auspício', 'VAMPIRE', 'DISCIPLINE', 'Sentidos sobrenaturais aguçados, percepção da aura e habilidades de ler pensamentos. Foco: Mental.', '2026-07-04 16:57:17.827', '2026-07-04 16:57:17.827'),
('76624ed4-5110-4d48-be72-cdc81976b0c6', 'Feitiçaria de Sangue', 'VAMPIRE', 'DISCIPLINE', 'Rituais arcanos e manipulação direta das propriedades místicas do sangue (antiga Taumaturgia). Foco: Mental.', '2026-07-04 16:57:18.062', '2026-07-04 16:57:18.062'),
('76a8df72-8d48-4c2d-ab8b-450f7359e912', 'Dons do Augúrio: Galliard', 'WEREWOLF', 'GIFT', 'Dons que manipulam emoções, inspiram aliados, preservam as lendas e usam a comunicação espiritual. Foco: Social.', '2026-07-04 17:02:52.237', '2026-07-04 17:02:52.237'),
('797d8671-89fc-4e47-ae4e-9fca0a2bf654', 'Forças', 'MAGE', 'SPHERE', 'Controle sobre os elementos físicos dinâmicos: eletricidade, fogo, gravidade, som e luz. Foco: Físico / Mental.', '2026-07-04 16:40:33.541', '2026-07-04 17:08:01.042'),
('7b985000-c64c-4021-b468-637ae59bd144', 'Primórdio', 'MAGE', 'SPHERE', 'Manipulação da energia mágica pura que molda o universo e alimenta a realidade. Foco: Mental.', '2026-07-04 16:40:33.561', '2026-07-04 17:08:01.140'),
('832e8c0b-3182-43ff-8d34-fada7a99c4a5', 'Animalismo', 'VAMPIRE', 'DISCIPLINE', 'Habilidade de se conectar, dominar e falar com a fauna urbana e a Besta interior de outros. Foco: Mental / Social.', '2026-07-04 16:40:33.501', '2026-07-04 16:57:17.748'),
('8c733ddc-7d50-4d70-b4bf-29b5b84bc2f4', 'Dons do Augúrio: Theurge', 'WEREWOLF', 'GIFT', 'Dons voltados para a interação profunda com a Umbra, espíritos, rituais e cura. Foco: Mental.', '2026-07-04 17:02:52.270', '2026-07-04 17:02:52.270'),
('8d6c7081-98aa-4945-8076-a3b4240a2d9c', 'Entropia', 'MAGE', 'SPHERE', 'Manipulação do azar, da probabilidade, da decomposição da matéria e do destino. Foco: Mental.', '2026-07-04 16:40:33.536', '2026-07-04 17:08:01.005'),
('91aaa1a2-a616-474c-8844-bcf07b1309aa', 'Rapidez', 'VAMPIRE', 'DISCIPLINE', 'Velocidade e reflexos sobrenaturais que desafiam as leis da física. Foco: Físico.', '2026-07-04 16:57:17.857', '2026-07-04 16:57:17.857'),
('92b9c79a-22b9-4a63-9ddc-f8f84f17aa92', 'Ofuscação', 'VAMPIRE', 'DISCIPLINE', 'A habilidade de sumir da percepção das pessoas, alterando a mente de quem olha para parecer invisível ou outra pessoa. Foco: Mental / Físico.', '2026-07-04 16:57:17.964', '2026-07-04 16:57:17.964'),
('9789d9d1-ab4b-404f-8764-14dc2657b358', 'Espírito', 'MAGE', 'SPHERE', 'Interação e controle sobre o mundo espiritual (a Umbra) e as entidades que nele habitam. Foco: Mental.', '2026-07-04 16:40:33.566', '2026-07-04 17:08:01.173'),
('9b1a3c5b-5973-4df1-b2c9-514f03218438', 'Tempo', 'MAGE', 'SPHERE', 'Percepção, dilatação e manipulação da linha do tempo e da velocidade dos eventos. Foco: Mental.', '2026-07-04 16:40:33.571', '2026-07-04 17:08:01.215'),
('a13bb356-8ad4-4740-8a6c-0bab48c1dcff', 'Dominação', 'VAMPIRE', 'DISCIPLINE', 'A capacidade de quebrar a força de vontade de uma vítima e impor comandos diretos. Foco: Mental / Social.', '2026-07-04 16:40:33.525', '2026-07-04 16:57:17.887'),
('aaccccf0-78bb-412f-b0c0-8894d240ae74', 'Dons do Augúrio: Philodox', 'WEREWOLF', 'GIFT', 'Dons focados na aplicação das leis da Litania, verdade, ordem, liderança e resolução de disputas. Foco: Mental / Social.', '2026-07-04 17:02:52.198', '2026-07-04 17:02:52.198'),
('b71f34d9-ae8c-4e89-b021-42122bf166b3', 'Potência', 'VAMPIRE', 'DISCIPLINE', 'Força física devastadora capaz de despedaçar metal e paredes de concreto com as mãos vazias. Foco: Físico.', '2026-07-04 16:57:17.998', '2026-07-04 16:57:17.998'),
('d198ead9-5e80-46d0-ba08-7594ed464ccb', 'Presença', 'VAMPIRE', 'DISCIPLINE', 'Atração e magnetismo sobrenaturais, gerando amor cego, fascínio ou pânico paralisante em quem olha. Foco: Social.', '2026-07-04 16:57:18.028', '2026-07-04 16:57:18.028'),
('d61caf12-f0ac-454b-a084-5ea8624636a5', 'Dons do Augúrio: Ahroun', 'WEREWOLF', 'GIFT', 'Dons voltados para o combate direto, destruição da Wyrm e liderança em batalha. Foco: Físico.', '2026-07-04 17:02:52.146', '2026-07-04 17:02:52.146'),
('dac3fb48-e67b-40c2-bf4f-9a7033d185a0', 'Vida', 'MAGE', 'SPHERE', 'Controle sobre organismos vivos, plantas, animais, corpos humanos e a própria cura. Foco: Físico.', '2026-07-04 16:40:33.546', '2026-07-04 17:08:01.246'),
('e11ed28d-03e3-4387-aa49-71e421b0ff27', 'Metamorfose', 'VAMPIRE', 'DISCIPLINE', 'Capacidade de transformar a própria biologia, criando garras, fundindo-se à terra ou virando animais. Foco: Físico.', '2026-07-04 16:57:18.093', '2026-07-04 16:57:18.093'),
('eeb90d09-baba-48ed-a5c1-3e443fed9565', 'Mente', 'MAGE', 'SPHERE', 'Leitura, controle, projeção e alteração da psique humana e sobrenatural. Foco: Social / Mental.', '2026-07-04 16:40:33.551', '2026-07-04 17:08:01.103');

-- --------------------------------------------------------

--
-- Estrutura para tabela `PowerLevelDefinition`
--

CREATE TABLE `PowerLevelDefinition` (
  `id` varchar(191) NOT NULL,
  `powerDefinitionId` varchar(191) NOT NULL,
  `level` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `system` text DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `PowerLevelDefinition`
--

INSERT INTO `PowerLevelDefinition` (`id`, `powerDefinitionId`, `level`, `name`, `description`, `system`, `createdAt`, `updatedAt`) VALUES
('009ac0e9-fbbd-4a64-9e88-6e592bb48e5f', 'aaccccf0-78bb-412f-b0c0-8894d240ae74', 2, 'Mandato do Rei / Sentir Linhas de Força', NULL, NULL, '2026-07-04 17:02:52.213', '2026-07-04 17:02:52.213'),
('0495cf98-b9d2-49d3-9a82-569f6f21c014', '2cc4df53-61d5-4f32-a1bd-cba80457904a', 5, 'Dominar a Infraestrutura Urbana / Maldição da Sucata', NULL, NULL, '2026-07-04 17:02:52.370', '2026-07-04 17:02:52.370'),
('069a14e4-9caf-431b-9e95-65621d5d947d', '8c733ddc-7d50-4d70-b4bf-29b5b84bc2f4', 4, 'Prender o Espírito / Tecelagem de Quintessência Metafísica', NULL, NULL, '2026-07-04 17:02:52.295', '2026-07-04 17:02:52.295'),
('0bc801c9-1ecc-4a04-a1d7-88ec62bb527e', 'd61caf12-f0ac-454b-a084-5ea8624636a5', 5, 'Fúria de Gaia / Golpe do Apocalipse', NULL, NULL, '2026-07-04 17:02:52.190', '2026-07-04 17:02:52.190'),
('175f927f-7263-40c9-9603-cf89d0f2bc66', '91aaa1a2-a616-474c-8844-bcf07b1309aa', 3, 'Piscar (Mover-se tão rápido que parece teletransporte visual)', NULL, NULL, '2026-07-04 16:57:17.872', '2026-07-04 16:57:17.872'),
('193239d1-adcc-4632-b3c0-d392b7b4870c', '76a8df72-8d48-4c2d-ab8b-450f7359e912', 2, 'Distorcer Narrativa / Uivo do Lobo Caçador', NULL, NULL, '2026-07-04 17:02:52.248', '2026-07-04 17:02:52.248'),
('1b2f0ba4-2219-4b70-a86d-5a7a8f657c0b', '37b32131-343f-4465-8177-a75ee39ca96c', 5, 'Criar Matéria Sólida que Desafia as Leis Físicas', NULL, NULL, '2026-07-04 17:08:01.098', '2026-07-04 17:08:01.098'),
('1c8dd2b2-3430-447f-99ac-8123a38b32fc', '8c733ddc-7d50-4d70-b4bf-29b5b84bc2f4', 5, 'Portal da Umbra / Invocar Avatar de Gaia', NULL, NULL, '2026-07-04 17:02:52.300', '2026-07-04 17:02:52.300'),
('20c167a2-e012-42e9-9115-e0556011010b', 'b71f34d9-ae8c-4e89-b021-42122bf166b3', 4, 'Força Titânica', NULL, NULL, '2026-07-04 16:57:18.018', '2026-07-04 16:57:18.018'),
('214baba7-59d0-47e9-a5b4-658892ed3600', '76a8df72-8d48-4c2d-ab8b-450f7359e912', 1, 'Chamado Além da Névoa / Voz do Sentimento', NULL, NULL, '2026-07-04 17:02:52.243', '2026-07-04 17:02:52.243'),
('230288d4-9a03-4cc8-966c-53399f2711d8', 'b71f34d9-ae8c-4e89-b021-42122bf166b3', 5, 'Terremoto (Golpear o chão e derrubar oponentes)', NULL, NULL, '2026-07-04 16:57:18.024', '2026-07-04 16:57:18.024'),
('248506bf-3526-40ef-8395-617dc230ac21', '09ad810f-0d54-45de-b4f8-ba0d22a79357', 2, 'Linha de Visão Distante', NULL, NULL, '2026-07-04 17:08:00.981', '2026-07-04 17:08:00.981'),
('24ec8433-76a1-4f2b-97a0-1ed3b5ce8cba', 'd61caf12-f0ac-454b-a084-5ea8624636a5', 4, 'Golpe Dilacerante / Pele de Diamante', NULL, NULL, '2026-07-04 17:02:52.183', '2026-07-04 17:02:52.183'),
('27010ad2-9d3a-4a54-a438-01bc4b9a2255', '91aaa1a2-a616-474c-8844-bcf07b1309aa', 5, 'Estouro de Velocidade (Múltiplas ações)', NULL, NULL, '2026-07-04 16:57:17.882', '2026-07-04 16:57:17.882'),
('2819dc9c-0319-4e81-b8c3-f487dac87dd4', '7b985000-c64c-4021-b468-637ae59bd144', 4, 'Criar Artefatos Mágicos Permanentes / Drenar Magia Alheia', NULL, NULL, '2026-07-04 17:08:01.159', '2026-07-04 17:08:01.159'),
('2c3814a0-b7b3-465d-9639-3df12d3ac894', 'eeb90d09-baba-48ed-a5c1-3e443fed9565', 1, 'Sentir Emoções / Escudo Mental Básico', NULL, NULL, '2026-07-04 17:08:01.110', '2026-07-04 17:08:01.110'),
('2e91d37c-c196-4b82-9798-f31578d07fa3', '9b1a3c5b-5973-4df1-b2c9-514f03218438', 1, 'Percepção Temporal Perfeita / Ver o Passado Recente', NULL, NULL, '2026-07-04 17:08:01.220', '2026-07-04 17:08:01.220'),
('320642e7-b23d-43f5-b627-37e72dae891f', '2c56e5cb-8069-4469-8044-87435369c846', 3, 'Defender a Mente / Armadura de Sangue', NULL, NULL, '2026-07-04 16:57:17.940', '2026-07-04 16:57:17.940'),
('330b94a9-e39f-4036-a976-d6ab4933a823', '92b9c79a-22b9-4a63-9ddc-f8f84f17aa92', 3, 'Máscara dos Mil Rostos (Mudar de aparência visual)', NULL, NULL, '2026-07-04 16:57:17.983', '2026-07-04 16:57:17.983'),
('33102827-9ceb-4d57-97bb-eba4ae924085', 'e11ed28d-03e3-4387-aa49-71e421b0ff27', 5, 'Metamorfose Divina', NULL, NULL, '2026-07-04 16:57:18.118', '2026-07-04 16:57:18.118'),
('3382e795-650b-4974-89f9-9466e1a040eb', 'a13bb356-8ad4-4740-8a6c-0bab48c1dcff', 1, 'Comando Vermelho / Hipnotizar', NULL, NULL, '2026-07-04 16:57:17.893', '2026-07-04 16:57:17.893'),
('338da64f-0606-4352-b47d-c6fc3f191d57', '76624ed4-5110-4d48-be72-cdc81976b0c6', 2, 'Extinguir Chamas / Sangue Envenenado', NULL, NULL, '2026-07-04 16:57:18.073', '2026-07-04 16:57:18.073'),
('36951e83-70fb-46e9-b56a-6903dc0ce3d7', '92b9c79a-22b9-4a63-9ddc-f8f84f17aa92', 5, 'Ocultar a Célula / Manto do Invisível', NULL, NULL, '2026-07-04 16:57:17.993', '2026-07-04 16:57:17.993'),
('382b37c4-810e-43f5-983d-8e943672fc4c', '9789d9d1-ab4b-404f-8764-14dc2657b358', 2, 'Tocar Espíritos / Manipular Objetos Efêmeros', NULL, NULL, '2026-07-04 17:08:01.183', '2026-07-04 17:08:01.183'),
('39e34c53-f207-4e19-93e0-cf16dc714734', '2c56e5cb-8069-4469-8044-87435369c846', 4, 'Ignorar a Dor', NULL, NULL, '2026-07-04 16:57:17.945', '2026-07-04 16:57:17.945'),
('3b9ec095-a2c3-478b-8834-4e8d2a43ad1a', 'b71f34d9-ae8c-4e89-b021-42122bf166b3', 3, 'Arremesso Brutal', NULL, NULL, '2026-07-04 16:57:18.013', '2026-07-04 16:57:18.013'),
('3cc2f561-a79d-422e-83e3-466d9592418e', '453ff247-29ee-4e1a-a2ef-8763e2584900', 5, 'Projeção Psíquica', NULL, NULL, '2026-07-04 16:57:17.852', '2026-07-04 16:57:17.852'),
('3cea5524-46e2-4f1d-b230-d606aca5e8f0', 'd198ead9-5e80-46d0-ba08-7594ed464ccb', 5, 'Majestade (Ninguém consegue te atacar fisicamente)', NULL, NULL, '2026-07-04 16:57:18.056', '2026-07-04 16:57:18.056'),
('3d31c578-500b-4c90-bbaa-7f8fa93de28a', 'eeb90d09-baba-48ed-a5c1-3e443fed9565', 4, 'Controlar a Vontade / Alterar Memórias de Longo Prazo', NULL, NULL, '2026-07-04 17:08:01.125', '2026-07-04 17:08:01.125'),
('3ea99f25-d403-4976-927e-4c861c8acc3b', 'dac3fb48-e67b-40c2-bf4f-9a7033d185a0', 2, 'Curar Pequenas Feridas / Alterar Traços Físicos Leves', NULL, NULL, '2026-07-04 17:08:01.257', '2026-07-04 17:08:01.257'),
('408662ae-65bc-4fae-9334-0b300656991e', '832e8c0b-3182-43ff-8d34-fada7a99c4a5', 4, 'Atrair a Praga', NULL, NULL, '2026-07-04 16:57:17.816', '2026-07-04 16:57:17.816'),
('41bda8e9-4393-48a2-a8d1-24c88f6fbc34', '91aaa1a2-a616-474c-8844-bcf07b1309aa', 2, 'Esquiva Sobrenatural', NULL, NULL, '2026-07-04 16:57:17.867', '2026-07-04 16:57:17.867'),
('43d3e5d8-50e8-4331-bcd7-18452ce69183', '92b9c79a-22b9-4a63-9ddc-f8f84f17aa92', 4, 'Sumir da Visão', NULL, NULL, '2026-07-04 16:57:17.988', '2026-07-04 16:57:17.988'),
('47b667e0-9cc3-4733-be45-b6ce45999c4b', 'aaccccf0-78bb-412f-b0c0-8894d240ae74', 5, 'Geas (Impor uma missão mágica irrecusável) / Voz da Litania', NULL, NULL, '2026-07-04 17:02:52.231', '2026-07-04 17:02:52.231'),
('47ddaa10-819a-4626-9b58-87b865785896', 'a13bb356-8ad4-4740-8a6c-0bab48c1dcff', 4, 'Condicionamento Crônico', NULL, NULL, '2026-07-04 16:57:17.908', '2026-07-04 16:57:17.908'),
('485fe97a-fa11-4764-81e5-7b973f49ae27', '797d8671-89fc-4e47-ae4e-9fca0a2bf654', 2, 'Redirecionar Forças', NULL, NULL, '2026-07-04 17:08:01.053', '2026-07-04 17:08:01.053'),
('4dd00a06-8500-4d61-8fbd-39a1adba56b9', '9789d9d1-ab4b-404f-8764-14dc2657b358', 1, 'Sentir o Véu / Ver Espíritos ao Redor', NULL, NULL, '2026-07-04 17:08:01.178', '2026-07-04 17:08:01.178'),
('4dd1b3af-7001-43d0-8ebe-32b98a3b4370', 'dac3fb48-e67b-40c2-bf4f-9a7033d185a0', 5, 'Criar Vida Do Zero / Mutações Biológicas Permanentes', NULL, NULL, '2026-07-04 17:08:01.271', '2026-07-04 17:08:01.271'),
('4de3914b-ba42-4dfa-bb66-3cd405db9b81', '92b9c79a-22b9-4a63-9ddc-f8f84f17aa92', 1, 'Manto de Sombras / Silêncio Absoluto', NULL, NULL, '2026-07-04 16:57:17.972', '2026-07-04 16:57:17.972'),
('4ecc075e-4c23-4142-a7f1-ca75d77030c4', 'a13bb356-8ad4-4740-8a6c-0bab48c1dcff', 3, 'Comando Racional / Deitar a Mente', NULL, NULL, '2026-07-04 16:57:17.903', '2026-07-04 16:57:17.903'),
('4f692a9f-3a5a-4424-9a8b-9e511078865a', '76624ed4-5110-4d48-be72-cdc81976b0c6', 5, 'Caldeirão de Sangue (Ferver o sangue nas veias do inimigo)', NULL, NULL, '2026-07-04 16:57:18.088', '2026-07-04 16:57:18.088'),
('52071804-69ad-47fb-a135-9bb8287fb2a4', '2c56e5cb-8069-4469-8044-87435369c846', 1, 'Resiliência Física / Mente Inabalável', NULL, NULL, '2026-07-04 16:57:17.926', '2026-07-04 16:57:17.926'),
('52d953cc-5a85-49f9-aa56-0a5b3b380bce', '37b32131-343f-4465-8177-a75ee39ca96c', 1, 'Analisar Estrutura Atômica / Detectar Substâncias Ocultas', NULL, NULL, '2026-07-04 17:08:01.079', '2026-07-04 17:08:01.079'),
('55d98eea-f680-4c3a-b8c9-ef64c94653df', 'e11ed28d-03e3-4387-aa49-71e421b0ff27', 2, 'Garras Ferais (Dano agravado)', NULL, NULL, '2026-07-04 16:57:18.103', '2026-07-04 16:57:18.103'),
('57b9efd8-cc0b-49e5-a426-3589e55308e6', '7b985000-c64c-4021-b468-637ae59bd144', 3, 'Materializar Quintessência / Absorver Energia de Fontes Sagradas', NULL, NULL, '2026-07-04 17:08:01.154', '2026-07-04 17:08:01.154'),
('582e8cfb-1ad3-4768-8ccf-fc20ead5b01c', '76624ed4-5110-4d48-be72-cdc81976b0c6', 1, 'Gosto do Sangue / Corrosão Ácida', NULL, NULL, '2026-07-04 16:57:18.067', '2026-07-04 16:57:18.067'),
('5dce48da-9ca2-4494-8810-98c4e9635f8d', 'd61caf12-f0ac-454b-a084-5ea8624636a5', 2, 'Escudo de Fúria / Espírito do Combate', NULL, NULL, '2026-07-04 17:02:52.164', '2026-07-04 17:02:52.164'),
('60ec3b50-0334-4db5-b7a4-b644369ffed2', '09ad810f-0d54-45de-b4f8-ba0d22a79357', 1, 'Sentir Espaço / Localização Exata', NULL, NULL, '2026-07-04 17:08:00.972', '2026-07-04 17:08:00.972'),
('6336a028-f8f2-4a21-aba7-439ba1706c96', 'eeb90d09-baba-48ed-a5c1-3e443fed9565', 3, 'Projeção Psíquica / Ilusões Mentais Diretas', NULL, NULL, '2026-07-04 17:08:01.119', '2026-07-04 17:08:01.119'),
('660652ec-0b67-4405-8f91-251050f263a4', '832e8c0b-3182-43ff-8d34-fada7a99c4a5', 2, 'Conversar com Animais', NULL, NULL, '2026-07-04 16:57:17.803', '2026-07-04 16:57:17.803'),
('68156fe3-2e8b-48c7-b3a9-ccf7810816be', 'eeb90d09-baba-48ed-a5c1-3e443fed9565', 2, 'Ler Pensamentos Superficiais / Impulsionar Emoções Básicas', NULL, NULL, '2026-07-04 17:08:01.114', '2026-07-04 17:08:01.114'),
('6a3f4d4d-2aa1-4eaf-9eb1-8f96cd10e4c7', '3a759777-8aa8-4d99-b1df-904d85462908', 3, 'Mentira Perfeita / Abrir Fechaduras com a Mente', NULL, NULL, '2026-07-04 17:02:52.326', '2026-07-04 17:02:52.326'),
('6d7a039e-6905-445d-a8d1-3662d48b0d24', '453ff247-29ee-4e1a-a2ef-8763e2584900', 4, 'Toque do Espírito', NULL, NULL, '2026-07-04 16:57:17.847', '2026-07-04 16:57:17.847'),
('6e7191e1-dd85-4222-8b2c-9c6577099f09', 'd198ead9-5e80-46d0-ba08-7594ed464ccb', 2, 'Beijo do Vampiro (Gera êxtase na vítima)', NULL, NULL, '2026-07-04 16:57:18.038', '2026-07-04 16:57:18.038'),
('71d296ba-5843-4d84-a2f3-6a3947fdcf6d', '832e8c0b-3182-43ff-8d34-fada7a99c4a5', 5, 'Possuir o Animal / Lançar a Besta', NULL, NULL, '2026-07-04 16:57:17.822', '2026-07-04 16:57:17.822'),
('7484ad3c-f057-439a-9f32-02d576bccd65', 'e11ed28d-03e3-4387-aa49-71e421b0ff27', 1, 'Olhos de Gato / Adaptação Biológica', NULL, NULL, '2026-07-04 16:57:18.097', '2026-07-04 16:57:18.097'),
('7dc65973-2a5b-4e1d-a5ef-70983edd9fa7', '9789d9d1-ab4b-404f-8764-14dc2657b358', 4, 'Invocar e Prender Espíritos Poderosos / Selar Portais Espirituais', NULL, NULL, '2026-07-04 17:08:01.202', '2026-07-04 17:08:01.202'),
('7de6ad08-8740-4c90-9531-5bc978ae2cc7', '9b1a3c5b-5973-4df1-b2c9-514f03218438', 3, 'Acelerar ou Desacelerar o Tempo', NULL, NULL, '2026-07-04 17:08:01.232', '2026-07-04 17:08:01.232'),
('7e9a27cf-b0c9-4454-8759-d736494aebc4', '9789d9d1-ab4b-404f-8764-14dc2657b358', 5, 'Criar ou Destruir Reinos Espirituais Inteiros', NULL, NULL, '2026-07-04 17:08:01.208', '2026-07-04 17:08:01.208'),
('7ff89520-c2ef-47b5-a25f-eea425082b50', '453ff247-29ee-4e1a-a2ef-8763e2584900', 2, 'Premonição', NULL, NULL, '2026-07-04 16:57:17.837', '2026-07-04 16:57:17.837'),
('85579bea-9574-4eb9-8d3c-dcfb60a8c88a', 'dac3fb48-e67b-40c2-bf4f-9a7033d185a0', 1, 'Sentir Doenças e Saúde / Analisar DNA', NULL, NULL, '2026-07-04 17:08:01.251', '2026-07-04 17:08:01.251'),
('89dc91f9-cac7-4282-8b85-883ebb74f597', '797d8671-89fc-4e47-ae4e-9fca0a2bf654', 1, 'Sentir Energias / Rastrear Sinais de Rede', NULL, NULL, '2026-07-04 17:08:01.048', '2026-07-04 17:08:01.048'),
('8b3f68ef-9887-4f39-8138-ec770e2c4763', 'd61caf12-f0ac-454b-a084-5ea8624636a5', 1, 'Garras de Navalha / Sentir a Prata', NULL, NULL, '2026-07-04 17:02:52.157', '2026-07-04 17:02:52.157'),
('8cf59dad-038b-4d09-bd49-4250040ca7d8', 'e11ed28d-03e3-4387-aa49-71e421b0ff27', 3, 'Fusão com a Terra (Esconder-se no solo de SP durante o dia)', NULL, NULL, '2026-07-04 16:57:18.108', '2026-07-04 16:57:18.108'),
('97fbbec7-3007-4663-a445-34bef8a22aea', '2cc4df53-61d5-4f32-a1bd-cba80457904a', 4, 'Sobrecarga de Rede / Camuflagem entre a Massa', NULL, NULL, '2026-07-04 17:02:52.364', '2026-07-04 17:02:52.364'),
('98731162-ba6d-42d8-8411-2acdef5e92f4', '3a759777-8aa8-4d99-b1df-904d85462908', 2, 'Passo Falso / Sombra Rastejante', NULL, NULL, '2026-07-04 17:02:52.318', '2026-07-04 17:02:52.318'),
('99753a23-6d9e-4079-8832-f0232d32e6fb', '453ff247-29ee-4e1a-a2ef-8763e2584900', 1, 'Sentidos Aguçados / Percepção de Aura', NULL, NULL, '2026-07-04 16:57:17.832', '2026-07-04 16:57:17.832'),
('997a0cdf-7e15-48e0-8bc2-8d51e7d8da18', 'aaccccf0-78bb-412f-b0c0-8894d240ae74', 4, 'Julgamento de Gaia / Elo Mental', NULL, NULL, '2026-07-04 17:02:52.226', '2026-07-04 17:02:52.226'),
('9b0e543e-9223-453b-be68-56aac4de614f', '76a8df72-8d48-4c2d-ab8b-450f7359e912', 3, 'Olhar Paralisante / Canto de Guerra', NULL, NULL, '2026-07-04 17:02:52.254', '2026-07-04 17:02:52.254'),
('9b970587-26da-4eba-a32e-0b8cb2931188', '797d8671-89fc-4e47-ae4e-9fca0a2bf654', 5, 'Tempestades de Energia Coletiva', NULL, NULL, '2026-07-04 17:08:01.068', '2026-07-04 17:08:01.068'),
('9c3ff378-be5f-4b17-8f79-f6910886f7f3', '8c733ddc-7d50-4d70-b4bf-29b5b84bc2f4', 2, 'Comando Espiritual / Visão da Umbra', NULL, NULL, '2026-07-04 17:02:52.280', '2026-07-04 17:02:52.280'),
('9e3d3fda-755a-4e29-ab70-867529af3be7', '453ff247-29ee-4e1a-a2ef-8763e2584900', 3, 'Escanear a Mente / Vidência', NULL, NULL, '2026-07-04 16:57:17.842', '2026-07-04 16:57:17.842'),
('9ed411ac-3bc3-429e-9533-12c0f1013369', '37b32131-343f-4465-8177-a75ee39ca96c', 2, 'Transmutar Forma da Matéria', NULL, NULL, '2026-07-04 17:08:01.083', '2026-07-04 17:08:01.083'),
('9fe766b7-6ae6-48ea-9187-80491daa275b', '797d8671-89fc-4e47-ae4e-9fca0a2bf654', 4, 'Controlar Forças Maiores', NULL, NULL, '2026-07-04 17:08:01.063', '2026-07-04 17:08:01.063'),
('a002efd1-0c8a-404f-be5d-8941fdb08eba', '8d6c7081-98aa-4945-8076-a3b4240a2d9c', 4, 'Atrofia da Vida', NULL, NULL, '2026-07-04 17:08:01.032', '2026-07-04 17:08:01.032'),
('a0e048fb-b053-48c7-b6ea-eef4dc3ee392', 'aaccccf0-78bb-412f-b0c0-8894d240ae74', 1, 'Sabor da Verdade / Resistência à Dor', NULL, NULL, '2026-07-04 17:02:52.208', '2026-07-04 17:02:52.208'),
('a25fb8e0-606e-4b4b-9a1c-68042ebd542d', '2cc4df53-61d5-4f32-a1bd-cba80457904a', 2, 'Controlar Máquinas Simples / Sobrevivência das Ruas', NULL, NULL, '2026-07-04 17:02:52.354', '2026-07-04 17:02:52.354'),
('a5c0c41a-9e0b-4631-b279-cda035741698', 'a13bb356-8ad4-4740-8a6c-0bab48c1dcff', 5, 'Possessão de Almas (Controlar corpos humanos)', NULL, NULL, '2026-07-04 16:57:17.913', '2026-07-04 16:57:17.913'),
('a65a4040-a6b5-4b62-8a28-d443d922d681', '37b32131-343f-4465-8177-a75ee39ca96c', 3, 'Alterar Propriedades', NULL, NULL, '2026-07-04 17:08:01.088', '2026-07-04 17:08:01.088'),
('a870d274-cba3-4564-b140-48311d0fcc27', '76624ed4-5110-4d48-be72-cdc81976b0c6', 3, 'Escudo de Sangue / Movimento do Sangue', NULL, NULL, '2026-07-04 16:57:18.078', '2026-07-04 16:57:18.078'),
('ab8db310-c195-4a5a-a245-f338c82d7e48', '797d8671-89fc-4e47-ae4e-9fca0a2bf654', 3, 'Transmutar Forças / Criar Fogo ou Eletricidade Básica', NULL, NULL, '2026-07-04 17:08:01.058', '2026-07-04 17:08:01.058'),
('ab8fbb0f-3ec5-4c60-8f5a-28aa5e0bf022', '2cc4df53-61d5-4f32-a1bd-cba80457904a', 3, 'Hackear o Consenso / Invocar Espírito do Asfalto', NULL, NULL, '2026-07-04 17:02:52.359', '2026-07-04 17:02:52.359'),
('abf8a289-d295-4e2d-b9bc-6422f3612bcd', 'e11ed28d-03e3-4387-aa49-71e421b0ff27', 4, 'Forma de Névoa / Forma de Lobo/Morcego', NULL, NULL, '2026-07-04 16:57:18.113', '2026-07-04 16:57:18.113'),
('b01afba9-2d69-4b98-ad2b-a1ce17263367', '37b32131-343f-4465-8177-a75ee39ca96c', 4, 'Transmutar Elementos Complexos', NULL, NULL, '2026-07-04 17:08:01.094', '2026-07-04 17:08:01.094'),
('b02eab0c-0872-4311-96d3-a6e37e529f95', '8d6c7081-98aa-4945-8076-a3b4240a2d9c', 1, 'Sentir Probabilidade / Ver Falhas Estruturais', NULL, NULL, '2026-07-04 17:08:01.014', '2026-07-04 17:08:01.014'),
('b77e5203-fb38-4ca2-bd85-aeffbe590ec5', '9789d9d1-ab4b-404f-8764-14dc2657b358', 3, 'Atravessar a Película', NULL, NULL, '2026-07-04 17:08:01.195', '2026-07-04 17:08:01.195'),
('b8ae280e-bdf5-42f1-aff5-2857395eecd6', 'dac3fb48-e67b-40c2-bf4f-9a7033d185a0', 4, 'Transmutação Humana Completa', NULL, NULL, '2026-07-04 17:08:01.266', '2026-07-04 17:08:01.266'),
('b9ecbca7-fa00-4f36-a250-568e23639936', '7b985000-c64c-4021-b468-637ae59bd144', 5, 'Alterar o Fluxo Universal / Destruir a Essência Mística de um Alvo', NULL, NULL, '2026-07-04 17:08:01.168', '2026-07-04 17:08:01.168'),
('c0d10031-e0a2-4d75-92f0-29721c41bc06', 'b71f34d9-ae8c-4e89-b021-42122bf166b3', 1, 'Salto Sobrenatural / Impacto Brutal', NULL, NULL, '2026-07-04 16:57:18.003', '2026-07-04 16:57:18.003'),
('c1e6429e-49aa-4c17-8a36-1f5474ccf47a', '76624ed4-5110-4d48-be72-cdc81976b0c6', 4, 'Roubo de Sangue à Distância', NULL, NULL, '2026-07-04 16:57:18.083', '2026-07-04 16:57:18.083'),
('c39afad6-f7da-4723-9503-3ab501263291', '9b1a3c5b-5973-4df1-b2c9-514f03218438', 5, 'Viagem Temporal Própria / Criar Bolhas de Tempo Isoladas', NULL, NULL, '2026-07-04 17:08:01.242', '2026-07-04 17:08:01.242'),
('c4d622da-68da-4c2f-b115-e2296c025096', '09ad810f-0d54-45de-b4f8-ba0d22a79357', 4, 'Teletransporte Humano / Abrir Portais Geográficos', NULL, NULL, '2026-07-04 17:08:00.992', '2026-07-04 17:08:00.992'),
('ca504c4f-e73b-4a31-8b30-52e9f59acf96', '8d6c7081-98aa-4945-8076-a3b4240a2d9c', 5, 'Manipular o Destino / Controlar Linhas de Caos Social', NULL, NULL, '2026-07-04 17:08:01.037', '2026-07-04 17:08:01.037'),
('cd7d95d4-1a1d-4602-922d-4b0f2072d3ac', 'dac3fb48-e67b-40c2-bf4f-9a7033d185a0', 3, 'Transformar Organismos Simples / Curar Danos Graves', NULL, NULL, '2026-07-04 17:08:01.261', '2026-07-04 17:08:01.261'),
('cdc4bab0-e2fc-4bff-9e0e-1f5c4434f20b', '9b1a3c5b-5973-4df1-b2c9-514f03218438', 4, 'Âncoras Temporais / Congelar um Alvo no Tempo', NULL, NULL, '2026-07-04 17:08:01.237', '2026-07-04 17:08:01.237'),
('ce7d7d22-1fe1-4249-adfa-e8f5f5337f06', '832e8c0b-3182-43ff-8d34-fada7a99c4a5', 1, 'Sentir a Besta / Vínculo de Sangue com Animais', NULL, NULL, '2026-07-04 16:57:17.787', '2026-07-04 16:57:17.787'),
('cecdf354-261c-41e6-b811-d7c456792c83', 'd198ead9-5e80-46d0-ba08-7594ed464ccb', 3, 'Transe Hipnótico / Voz de Comando', NULL, NULL, '2026-07-04 16:57:18.044', '2026-07-04 16:57:18.044'),
('d01ff0bf-65e4-4e96-ba46-80bcdfd80de0', '832e8c0b-3182-43ff-8d34-fada7a99c4a5', 3, 'Acalmar a Besta / Dominar o Rebanho', NULL, NULL, '2026-07-04 16:57:17.811', '2026-07-04 16:57:17.811'),
('d70441a8-6236-43a6-9d69-a1e2d40e3ba1', '8c733ddc-7d50-4d70-b4bf-29b5b84bc2f4', 1, 'Sentir Espíritos / Falar com Espíritos', NULL, NULL, '2026-07-04 17:02:52.275', '2026-07-04 17:02:52.275'),
('d81e5453-5fee-4640-9df9-e6a939508d4e', 'b71f34d9-ae8c-4e89-b021-42122bf166b3', 2, 'Punhos de Aço', NULL, NULL, '2026-07-04 16:57:18.008', '2026-07-04 16:57:18.008'),
('da7db600-3aea-479b-b687-8b224b9eb9f6', '8d6c7081-98aa-4945-8076-a3b4240a2d9c', 2, 'Controlar o Azar / Alterar Probabilidades', NULL, NULL, '2026-07-04 17:08:01.020', '2026-07-04 17:08:01.020'),
('dda81677-0cda-47e2-aa3a-60a2aca97354', '76a8df72-8d48-4c2d-ab8b-450f7359e912', 4, 'Presença Inspiradora / Sonho Compartilhado', NULL, NULL, '2026-07-04 17:02:52.259', '2026-07-04 17:02:52.259'),
('e0d08a4b-b43a-4382-8250-bc9f498baa2a', '3a759777-8aa8-4d99-b1df-904d85462908', 5, 'Caos Completo / Rir da Morte', NULL, NULL, '2026-07-04 17:02:52.339', '2026-07-04 17:02:52.339'),
('e12eb60b-1a12-40bf-925f-c039516f9707', '3a759777-8aa8-4d99-b1df-904d85462908', 1, 'Silêncio Absoluto / Desviar Olhar', NULL, NULL, '2026-07-04 17:02:52.312', '2026-07-04 17:02:52.312'),
('e2ac1b6e-6a12-4918-94df-be9106bd6d87', '3a759777-8aa8-4d99-b1df-904d85462908', 4, 'Roubar o Dom / Desaparecimento Urbano', NULL, NULL, '2026-07-04 17:02:52.332', '2026-07-04 17:02:52.332'),
('e2d7ae31-2d6c-438a-ba36-412d231900f0', '7b985000-c64c-4021-b468-637ae59bd144', 2, 'Canalizar Energia / Encantar Armas e Objetos Mundanos', NULL, NULL, '2026-07-04 17:08:01.149', '2026-07-04 17:08:01.149'),
('e491609f-8e2c-4e4e-b44d-b4ef17aafa06', '76a8df72-8d48-4c2d-ab8b-450f7359e912', 5, 'Uivo do Apocalipse / Canção da Criação', NULL, NULL, '2026-07-04 17:02:52.264', '2026-07-04 17:02:52.264'),
('e597c257-5df9-4bf5-8b00-4f8fa7abbaa9', '09ad810f-0d54-45de-b4f8-ba0d22a79357', 5, 'Co-presença Total', NULL, NULL, '2026-07-04 17:08:00.997', '2026-07-04 17:08:00.997'),
('ea3c9b64-d540-48bc-8845-dcb6c0eb9331', 'd61caf12-f0ac-454b-a084-5ea8624636a5', 3, 'Coração de Vidro / Toque de Prata', NULL, NULL, '2026-07-04 17:02:52.177', '2026-07-04 17:02:52.177'),
('eaa4b2c3-bfbb-4c29-ae9c-ed75ad37d926', '92b9c79a-22b9-4a63-9ddc-f8f84f17aa92', 2, 'Passar Despercebido', NULL, NULL, '2026-07-04 16:57:17.978', '2026-07-04 16:57:17.978'),
('ebcfe866-e2da-40fa-adbf-d5a14dc6c2e3', '9b1a3c5b-5973-4df1-b2c9-514f03218438', 2, 'Premonições do Futuro / Dilatação Temporal Leve', NULL, NULL, '2026-07-04 17:08:01.227', '2026-07-04 17:08:01.227'),
('ec4b49df-d65c-4b53-afee-b249fa998586', '8c733ddc-7d50-4d70-b4bf-29b5b84bc2f4', 3, 'Tecelão do Véu / Exorcismo', NULL, NULL, '2026-07-04 17:02:52.290', '2026-07-04 17:02:52.290'),
('ecd0aef8-55fc-4684-aa63-cb9258e3eece', 'aaccccf0-78bb-412f-b0c0-8894d240ae74', 3, 'Elo de Sangue / Olhar da Verdade', NULL, NULL, '2026-07-04 17:02:52.220', '2026-07-04 17:02:52.220'),
('edc7a17a-15ab-4f9f-838e-89caeab816f9', '2c56e5cb-8069-4469-8044-87435369c846', 5, 'Quebrar o Impacto / Imunidade Temporária', NULL, NULL, '2026-07-04 16:57:17.956', '2026-07-04 16:57:17.956'),
('f0344653-1bff-402a-8d80-041f026ff09e', '8d6c7081-98aa-4945-8076-a3b4240a2d9c', 3, 'Decomposição da Matéria', NULL, NULL, '2026-07-04 17:08:01.026', '2026-07-04 17:08:01.026'),
('f1a5dc88-05e7-4069-be13-27be317dffe1', '2cc4df53-61d5-4f32-a1bd-cba80457904a', 1, 'Sintonizar Tecnologia / Farejar o Lixo', NULL, NULL, '2026-07-04 17:02:52.349', '2026-07-04 17:02:52.349'),
('f54da900-102b-4823-b048-fc31f27553e6', '09ad810f-0d54-45de-b4f8-ba0d22a79357', 3, 'Co-localidade Simples / Teletransporte de Objetos Pequenos', NULL, NULL, '2026-07-04 17:08:00.987', '2026-07-04 17:08:00.987'),
('f55d464b-5acc-46f9-98f1-c9b791fd98cc', '7b985000-c64c-4021-b468-637ae59bd144', 1, 'Sentir Quintessência / Ver o Invisível Mágico', NULL, NULL, '2026-07-04 17:08:01.145', '2026-07-04 17:08:01.145'),
('f6459705-db5e-4a23-b151-3150bf0ca665', 'a13bb356-8ad4-4740-8a6c-0bab48c1dcff', 2, 'Esquecimento (Apagar memórias recentes)', NULL, NULL, '2026-07-04 16:57:17.897', '2026-07-04 16:57:17.897'),
('f863bf65-c9d9-4780-aee9-f3c815e04ab0', '91aaa1a2-a616-474c-8844-bcf07b1309aa', 1, 'Reflexos Rápidos / Pés Ligeiros', NULL, NULL, '2026-07-04 16:57:17.862', '2026-07-04 16:57:17.862'),
('f975b473-0235-4d7e-97e1-687eca37695a', 'eeb90d09-baba-48ed-a5c1-3e443fed9565', 5, 'Criar uma Mente Nova / Possessão Psíquica Completa', NULL, NULL, '2026-07-04 17:08:01.134', '2026-07-04 17:08:01.134'),
('fb0ce80c-3814-47af-be76-191e21fd4574', 'd198ead9-5e80-46d0-ba08-7594ed464ccb', 4, 'Convocar (Fazer a vítima ir até você de qualquer lugar da cidade)', NULL, NULL, '2026-07-04 16:57:18.051', '2026-07-04 16:57:18.051'),
('fce6c9f1-2e3f-4309-9e8d-8290fd62b4e4', '2c56e5cb-8069-4469-8044-87435369c846', 2, 'Pele de Ferro', NULL, NULL, '2026-07-04 16:57:17.933', '2026-07-04 16:57:17.933'),
('fd4eb5a5-e557-402d-b775-c2dd63401430', '91aaa1a2-a616-474c-8844-bcf07b1309aa', 4, 'Agilidade Perfeita', NULL, NULL, '2026-07-04 16:57:17.877', '2026-07-04 16:57:17.877'),
('fd975421-5d6f-4ba3-a766-d7b577754a3b', 'd198ead9-5e80-46d0-ba08-7594ed464ccb', 1, 'Olhar Aterrorizante / Fascínio', NULL, NULL, '2026-07-04 16:57:18.033', '2026-07-04 16:57:18.033');

-- --------------------------------------------------------

--
-- Estrutura para tabela `PublicSecurity`
--

CREATE TABLE `PublicSecurity` (
  `id` varchar(191) NOT NULL,
  `securityType` varchar(191) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `PublicSecurity`
--

INSERT INTO `PublicSecurity` (`id`, `securityType`, `description`) VALUES
('0245bdac-bb60-4882-b00b-7c6f8b05c1a4', 'Guarda Universitária & PM', NULL),
('04ba1bfc-8bff-4417-bb87-b8030663b388', 'Choque da PM & GCM (Madrugadas)', NULL),
('09ee624e-6330-4c28-9bbe-e4b5c92059f3', 'ROTA em Incursões Cirúrgicas', NULL),
('1cf807b9-f7bd-40ba-97ea-51ff18d368e1', 'Choque & Escoltas do Fórum Criminal', NULL),
('1d4bd734-5e05-4fb0-bdf0-95ce5f9a4992', 'PM - Operação Delegada', NULL),
('1f525d94-097e-487b-a2dc-acc522ca477d', 'Guarda Civil Ambiental (Barcos)', NULL),
('213836d2-9107-46e7-a0c5-aa2e5b68cb01', 'Vans Blindadas Privadas & PM', NULL),
('2853a033-b7b4-4503-9c43-f175bcbcfaac', 'PM Rondas Marginais', NULL),
('291c0274-3607-4f09-a80f-3118ecebca3a', 'Divisão de Roubo de Cargas (DEIC)', NULL),
('29485603-5bf4-4675-bbd6-d875e029c953', 'COE (Comando de Operações Especiais)', NULL),
('2c7a5380-37bf-4f4f-b141-96b31f1eb63a', 'Câmeras IA Privadas & Guaritas', NULL),
('2da5b212-4554-4012-986f-1b838b3a17a5', 'ROTA em Confrontos Pesados', NULL),
('2f4d815a-7850-471b-a1e3-c711b37592c0', 'Vigilância Solidária Câmeras & PM', NULL),
('33fb8eab-b417-4069-a768-66d07d4732c2', 'Batalhão de Choque da PM', NULL),
('384c87d8-b274-4a38-9e01-d95b3a05a078', 'PM Batalhão de Choque em Dias de Jogo', NULL),
('3c78112a-4120-4013-8075-f61e4d1f939a', 'Vigilância Interna Cemitério & GCM', NULL),
('40e529ce-8beb-4d7e-b7e4-dcef28fb1142', 'Policiamento Turístico da PM', NULL),
('47b123df-7ed1-4bb0-aba7-1317d7dbd182', 'Guaritas Fixas Complexos de Saúde', NULL),
('51ec0d80-a1c6-40f8-b808-96d28283fb1f', 'GATE (PM) & Forças Consulares Privadas', NULL),
('5200d839-9e4d-4e2b-971c-c14eb9e12411', 'Força Tática PM (Incursões em Comboio)', NULL),
('53be1cdd-475d-41a1-98e2-975005e0fdec', 'Polícia Federal & Fiscais do Trabalho', NULL),
('55b321e2-541a-44f0-9ce6-750749f5edee', 'PM Comunitária & Vigilância de Idosos Local', NULL),
('59771f9b-c3a3-4cb7-8945-a2fe312c5ab5', 'Polícia Civil (DEIC)', NULL),
('5d13b621-aa84-4e49-a305-439455c56847', 'Policiamento Ostensivo de Eventos PM', NULL),
('6e2c049e-ef8d-42c3-bef3-bc5f85ed90e8', 'Base Comunitária PM & Segurança Universitária', NULL),
('71eea593-7121-4b89-8c8f-bdba97f5c4e9', 'Polícia Militar (ROA - Fictícia)', NULL),
('74b44ecd-a2a5-4799-9ba5-9287581e30c7', 'Choque, ROTA & Polícia Civil Velada', NULL),
('7c974c51-24f2-4568-b3cd-31a6ae037eb6', 'AlphaSecurity Privada (Drones/Vans)', NULL),
('80ea809a-c16c-450f-b5d7-5dd6637fa815', 'Polícia Comunitária (Bases de Latão)', NULL),
('821bc9f7-6a0a-48ea-a61e-1ed601d9931e', 'Segurança do CEAGESP & Polícia Civil', NULL),
('911c1828-eb4c-4199-8006-a4d0eb1f2585', 'Polícia Civil Rondas Regulares', NULL),
('93e74b98-6777-428f-833a-1654a6295918', 'OmniSec Privada Armada', NULL),
('a40cc9e0-1f3b-4bfb-9e80-e9aaa4d07162', 'Força Tática PM (Encostas)', NULL),
('a7b0b86b-8352-4956-b5cb-23081787c0f4', 'Cavalaria PM & Segurança Circuito Privada', NULL),
('a94fa3e8-ae59-4a2c-8c66-966987c3801b', 'Guaritas Blindadas Privadas & PM', NULL),
('ad2fac40-a194-45b8-8376-6f21cb07288f', 'Monitoramento CityCams & PM', NULL),
('b66b35c8-403e-4e1f-a76c-812cf09511d9', 'PM Rondas de Moto (ROCAM)', NULL),
('b80eda4b-a23a-4144-8eef-e9a72a6dd303', 'Patrulhas PM (Resposta Lenta)', NULL),
('baafb2a2-514d-4d71-90af-b930e5e6d2d2', 'Batalhão de Choque ZN Central', NULL),
('bc9a24e2-f49f-48d8-aabe-9e03a6fa6256', 'Patrulhamento de Fronteira ROTA', NULL),
('d5132174-d8e8-4a44-9ac3-59e26dd27f0c', 'Guarda Civil Metropolitana (GCM)', NULL),
('d889dfac-9b57-4196-9f7d-daedbbc945ee', 'Empresa Privada ShieldGuard & PM', NULL),
('db340ec4-6ece-4c25-a440-22d498443663', 'PM de Bairro & Motos Guarda Municipal', NULL),
('e228d65f-ecec-425c-8e12-de96fe5dae04', 'GCM Calçadões & PM Base Fixa', NULL),
('e46c4ef8-6af9-4e59-a2d5-c94166848e43', 'Segurança Corporativa & Base PM Estação', NULL),
('ea8a0e9b-d028-402a-872d-4c9f2a81db1e', 'PM Rondas Preventivas & Choque', NULL),
('eb0efaf9-98e0-4729-867e-ada309ab45c6', 'Rondas Comunitárias da PM', NULL),
('fab0c6ce-6eb5-4605-a583-54ed6c840527', 'Polícia Militar (Rádio Patrulha)', NULL),
('fd2e828b-cbb8-4c81-bca9-b3b08023d28c', 'Polícia Rodoviária Federal & Segurança Interna', NULL),
('fe9f4646-3550-4eb3-a18b-26a05ba833b3', 'PM Ambiental (Viaturas Selva 4x4)', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Region`
--

CREATE TABLE `Region` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `level` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `dangerLevel` int(11) NOT NULL DEFAULT 1,
  `parentRegionId` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `difficultyDomain` int(11) DEFAULT NULL,
  `factionDomain` varchar(191) DEFAULT NULL,
  `narrativeClimate` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `Region`
--

INSERT INTO `Region` (`id`, `name`, `level`, `description`, `dangerLevel`, `parentRegionId`, `createdAt`, `updatedAt`, `difficultyDomain`, `factionDomain`, `narrativeClimate`) VALUES
('006de375-961c-48cb-a2a7-bb0dee75b6fb', 'Bom Retiro', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.509', '2026-07-04 16:04:22.509', NULL, 'Caçadores (Inquisidores da Fé)', 'Ruas estreitas, prédios históricos ocupados, forte contraste entre o dia caótico e a noite fantasmagórica.'),
('077d6e46-2633-455e-aa44-8bb49cdb2fd3', 'Cantareira (Serra)', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:24.017', '2026-07-04 16:04:24.017', NULL, 'Lobisomem (Garras Vermelhas - Caern Supremo)', 'Rotas rodoviárias estratégicas, serras tropicais impenetráveis e vilas de transportadoras com galpões maciços.'),
('09e9ca4c-ec57-44b7-89b1-d273fe07430d', 'República', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.200', '2026-07-04 16:04:22.200', NULL, 'Mago (Tecnocracia)', 'Ruas estreitas, prédios históricos ocupados, forte contraste entre o dia caótico e a noite fantasmagórica.'),
('13ff81bc-202c-465c-90f9-57ca4ebc0b30', 'Sapopemba', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.895', '2026-07-04 16:04:23.895', NULL, 'Vampiros (Caitiff / Sangue-Fraco)', 'Densidade demográfica absurda, mercados negros, herança industrial desativada e forte resistência de comunidades.'),
('1864884c-a632-424e-a67c-7f92142fb079', 'Barra Funda', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.011', '2026-07-04 16:04:23.011', NULL, 'Mago (Tecnocracia - Sindicato)', 'Região rica, desenvolvida, com forte aparato tecnológico corporativo, ladeiras nobres e bolhas universitárias.'),
('18cbe11a-6176-4a45-bd9c-e06423d5ad09', 'Tremembé', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.986', '2026-07-04 16:04:23.986', NULL, 'Lobisomem (Fúrias Gêmeas / Crias)', 'Rotas rodoviárias estratégicas, serras tropicais impenetráveis e vilas de transportadoras com galpões maciços.'),
('244d5d83-b316-4288-a303-d4722500cde0', 'Campo Limpo', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.456', '2026-07-04 16:04:23.456', NULL, 'Vampiros (Clã Lasombra Anarquistas)', 'O maior contraste da cidade: muralhas corporativas de vidro blindado e periferias imensas marcadas pela mata e mananciais.'),
('26a5d63e-741d-47f5-81d4-925009b8be2a', 'Jaguaré', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.216', '2026-07-04 16:04:23.216', NULL, 'Caçadores (Células Operárias)', 'Região rica, desenvolvida, com forte aparato tecnológico corporativo, ladeiras nobres e bolhas universitárias.'),
('3416a7c2-e15a-4dcd-a840-ab97f1c0aab4', 'Santa Ifigênia', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.262', '2026-07-04 16:04:22.262', NULL, 'Mago (Tradição: Adeptos da Virtualidade)', 'Ruas estreitas, prédios históricos ocupados, forte contraste entre o dia caótico e a noite fantasmagórica.'),
('383a5125-f3ba-4d8e-81ef-0830e2afbdd2', 'Butantã', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.855', '2026-07-04 16:04:22.855', NULL, 'Mago (Filhos de Éter / Ordem de Hermes)', 'Região rica, desenvolvida, com forte aparato tecnológico corporativo, ladeiras nobres e bolhas universitárias.'),
('393203a2-6e27-4429-92a1-888c6b71c429', 'Santana', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.957', '2026-07-04 16:04:23.957', NULL, 'Vampiros (Clã Ventrue)', 'Rotas rodoviárias estratégicas, serras tropicais impenetráveis e vilas de transportadoras com galpões maciços.'),
('3e48b2f5-9060-4db2-a7b9-339a31cd9128', 'Belenzinho', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.929', '2026-07-04 16:04:23.929', NULL, 'Lobisomem (Andarilhos do Asfalto)', 'Densidade demográfica absurda, mercados negros, herança industrial desativada e forte resistência de comunidades.'),
('3f8553a5-2f1b-47b5-8ec0-183a33e08e00', 'Penha', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.833', '2026-07-04 16:04:23.833', NULL, 'Mago (Coro Celestial)', 'Densidade demográfica absurda, mercados negros, herança industrial desativada e forte resistência de comunidades.'),
('40ffca16-f024-4380-8d91-4775ae93a0a6', 'Mandaqui', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:24.241', '2026-07-04 16:04:24.241', NULL, 'Mago (Tradição: Verbena)', 'Rotas rodoviárias estratégicas, serras tropicais impenetráveis e vilas de transportadoras com galpões maciços.'),
('421661e0-de2f-4b13-af3e-86880fb08ed6', 'Brás', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.802', '2026-07-04 16:04:23.802', NULL, 'Mago (Tecnocracia - Sindicato)', 'Densidade demográfica absurda, mercados negros, herança industrial desativada e forte resistência de comunidades.'),
('43158355-48b7-4976-b76e-a9a3f7c07a2c', 'Mooca', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.668', '2026-07-04 16:04:23.668', NULL, 'Vampiros (Anarquistas / Clã Brujah)', 'Densidade demográfica absurda, mercados negros, herança industrial desativada e forte resistência de comunidades.'),
('455b4fa4-ac46-4c62-a727-6d4c047db7c9', 'Casa Verde', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:24.130', '2026-07-04 16:04:24.130', NULL, 'Vampiros (Clã Toreador / Anarquistas)', 'Rotas rodoviárias estratégicas, serras tropicais impenetráveis e vilas de transportadoras com galpões maciços.'),
('521e01dd-1a4b-43fc-be94-7a78cfb1db1a', 'Lapa', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.959', '2026-07-04 16:04:22.959', NULL, 'Lobisomem (Roedores de Ossos)', 'Região rica, desenvolvida, com forte aparato tecnológico corporativo, ladeiras nobres e bolhas universitárias.'),
('54c56774-2f04-4970-b2ad-f52d97fd7b37', 'Interlagos', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.597', '2026-07-04 16:04:23.597', NULL, 'Lobisomem (Andarilhos do Asfalto)', 'O maior contraste da cidade: muralhas corporativas de vidro blindado e periferias imensas marcadas pela mata e mananciais.'),
('5737fa79-1755-45d0-9abf-3feeeeb92b87', 'Santo Amaro', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.524', '2026-07-04 16:04:23.524', NULL, 'Mago (Coro Celestial)', 'O maior contraste da cidade: muralhas corporativas de vidro blindado e periferias imensas marcadas pela mata e mananciais.'),
('57ae9b7c-c8b1-4bd8-858a-6d97788d791d', 'Jabaquara', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.563', '2026-07-04 16:04:23.563', NULL, 'Vampiros (Clã Malkavian)', 'O maior contraste da cidade: muralhas corporativas de vidro blindado e periferias imensas marcadas pela mata e mananciais.'),
('5acd34ba-2631-409f-9216-b4eefacc5b61', 'Jaçanã', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:24.168', '2026-07-04 16:04:24.168', NULL, 'Mago (Órfãos / Sem Tradição)', 'Rotas rodoviárias estratégicas, serras tropicais impenetráveis e vilas de transportadoras com galpões maciços.'),
('62fd3f88-abb6-4f65-970f-dd65c62de4b2', 'Grajaú', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.488', '2026-07-04 16:04:23.488', NULL, 'Lobisomem (Garras Vermelhas)', 'O maior contraste da cidade: muralhas corporativas de vidro blindado e periferias imensas marcadas pela mata e mananciais.'),
('63ac0cb3-c884-48d2-a595-65035084301e', 'Perdizes', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.905', '2026-07-04 16:04:22.905', NULL, 'Vampiros (Clã Tremere)', 'Região rica, desenvolvida, com forte aparato tecnológico corporativo, ladeiras nobres e bolhas universitárias.'),
('64bc1440-0d82-435b-9a9e-a0a0c36b1786', 'Vila Madalena', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.809', '2026-07-04 16:04:22.809', NULL, 'Vampiros (Anarquistas / Clã Ministry)', 'Região rica, desenvolvida, com forte aparato tecnológico corporativo, ladeiras nobres e bolhas universitárias.'),
('70023c9e-a29e-49af-9408-a55a041c3cb6', 'Vila Leopoldina', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.114', '2026-07-04 16:04:23.114', NULL, 'Vampiros (Clã Gangrel)', 'Região rica, desenvolvida, com forte aparato tecnológico corporativo, ladeiras nobres e bolhas universitárias.'),
('735f31c7-24cd-4114-bd7e-ae2791ef44f1', 'Brasilândia', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:24.049', '2026-07-04 16:04:24.049', NULL, 'Caçadores (Células de Motoboys)', 'Rotas rodoviárias estratégicas, serras tropicais impenetráveis e vilas de transportadoras com galpões maciços.'),
('80175807-fa69-4da2-a882-7c24779a3589', 'Cambuci', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.714', '2026-07-04 16:04:22.714', NULL, 'Lobisomem (Andarilhos do Asfalto)', 'Ruas estreitas, prédios históricos ocupados, forte contraste entre o dia caótico e a noite fantasmagórica.'),
('81d1bbfa-9adb-4202-a11b-e38b947621ab', 'Vila Maria', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:24.086', '2026-07-04 16:04:24.086', NULL, 'Vampiros (Clã Ventrue / Lasombra)', 'Rotas rodoviárias estratégicas, serras tropicais impenetráveis e vilas de transportadoras com galpões maciços.'),
('951eedc1-5334-4589-9ee1-156e52cc705a', 'Moema', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.354', '2026-07-04 16:04:23.354', NULL, 'Lobisomem (Andarilhos / Crias)', 'O maior contraste da cidade: muralhas corporativas de vidro blindado e periferias imensas marcadas pela mata e mananciais.'),
('96686155-d69d-44f2-b1e4-7bd2ce9957b3', 'Jardins (Europa / Paulista)', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.391', '2026-07-04 16:04:23.391', NULL, 'Vampiros (Clã Toreador e Ventrue)', 'O maior contraste da cidade: muralhas corporativas de vidro blindado e periferias imensas marcadas pela mata e mananciais.'),
('a452447c-4e83-4543-a2a6-e2be403b1501', 'Alto de Pinheiros', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.057', '2026-07-04 16:04:23.057', NULL, 'Vampiros (Clã Ventrue)', 'Região rica, desenvolvida, com forte aparato tecnológico corporativo, ladeiras nobres e bolhas universitárias.'),
('b2f31d57-98ce-441e-a9b5-9b80eb54e97a', 'Tatuapé', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.628', '2026-07-04 16:04:23.628', NULL, 'Vampiros (Clã Giovanni / Hecata)', 'Densidade demográfica absurda, mercados negros, herança industrial desativada e forte resistência de comunidades.'),
('b46240e2-7919-4e47-bfe8-79f6cbbc5aac', 'Cachoeirinha', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:24.290', '2026-07-04 16:04:24.290', NULL, 'Vampiros (Caitiff / Carniçais)', 'Rotas rodoviárias estratégicas, serras tropicais impenetráveis e vilas de transportadoras com galpões maciços.'),
('b52ff531-8361-452c-a4d5-d065a8b78050', 'São Paulo (SP)', 3, 'A metrópole que nunca dorme.', 1, NULL, '2026-07-04 16:04:22.074', '2026-07-04 16:04:22.074', NULL, NULL, NULL),
('b6b8bc52-dd3d-4b8e-b992-e284dc21bc88', 'Pinheiros', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.761', '2026-07-04 16:04:22.761', NULL, 'Vampiros (Clã Toreador)', 'Região rica, desenvolvida, com forte aparato tecnológico corporativo, ladeiras nobres e bolhas universitárias.'),
('bc51a5ba-d8db-447d-b889-9ef150a82ff4', 'Higienópolis', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.316', '2026-07-04 16:04:22.316', NULL, 'Vampiros (Clã Ventrue / Anciões)', 'Ruas estreitas, prédios históricos ocupados, forte contraste entre o dia caótico e a noite fantasmagórica.'),
('c283aa0e-e83c-4043-82a7-791d65d3c2c6', 'Bela Vista / Bixiga', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.454', '2026-07-04 16:04:22.454', NULL, 'Vampiros (Clã Hecata / Giovanni)', 'Ruas estreitas, prédios históricos ocupados, forte contraste entre o dia caótico e a noite fantasmagórica.'),
('d4a144b5-f8bf-405d-83c5-cb3baec3cb3f', 'Tucuruvi', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:24.207', '2026-07-04 16:04:24.207', NULL, 'Caçadores (Seguranças de Shopping)', 'Rotas rodoviárias estratégicas, serras tropicais impenetráveis e vilas de transportadoras com galpões maciços.'),
('d66f1ae6-5f2d-4fc6-be86-592548fe15a8', 'Pompéia', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.163', '2026-07-04 16:04:23.163', NULL, 'Vampiros (Anarquistas / Clã Brujah)', 'Região rica, desenvolvida, com forte aparato tecnológico corporativo, ladeiras nobres e bolhas universitárias.'),
('d6c1302e-153c-4b71-b9b7-2a22c3a657d1', 'Itaim Bibi', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.315', '2026-07-04 16:04:23.315', NULL, 'Vampiros (Clã Ventrue - Príncipe)', 'O maior contraste da cidade: muralhas corporativas de vidro blindado e periferias imensas marcadas pela mata e mananciais.'),
('dfec884c-358c-47bf-b333-a02c54ec8264', 'Sé / Centro Velho', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.115', '2026-07-04 16:04:22.115', NULL, 'Vampiros (Clã Nosferatu)', 'Ruas estreitas, prédios históricos ocupados, forte contraste entre o dia caótico e a noite fantasmagórica.'),
('e0356642-0ec1-441b-a679-fc878b3f1fbd', 'Cidade Tiradentes', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.741', '2026-07-04 16:04:23.741', NULL, 'Lobisomem (Roedores de Ossos)', 'Densidade demográfica absurda, mercados negros, herança industrial desativada e forte resistência de comunidades.'),
('e6f3d8d4-df33-4ab7-968b-0909877494a0', 'Liberdade', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.652', '2026-07-04 16:04:22.652', NULL, 'Mago (Irmandade de Akasha)', 'Ruas estreitas, prédios históricos ocupados, forte contraste entre o dia caótico e a noite fantasmagórica.'),
('eaaa8584-2348-4400-9481-2c29f103c32e', 'Itaquera', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.699', '2026-07-04 16:04:23.699', NULL, 'Caçadores (Torcidas Organizadas)', 'Densidade demográfica absurda, mercados negros, herança industrial desativada e forte resistência de comunidades.'),
('ef9ca8bc-f1d7-4476-9bc0-6ec3d8f61be8', 'Vila Formosa', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.862', '2026-07-04 16:04:23.862', NULL, 'Vampiros (Clã Hecata / Necromantes)', 'Densidade demográfica absurda, mercados negros, herança industrial desativada e forte resistência de comunidades.'),
('f23b13c6-dd1a-4387-ba5f-0b749e660042', 'Vila Olímpia', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.266', '2026-07-04 16:04:23.266', NULL, 'Mago (Tecnocracia - Iteração X)', 'O maior contraste da cidade: muralhas corporativas de vidro blindado e periferias imensas marcadas pela mata e mananciais.'),
('f2708adb-df53-47f2-b1af-e6f6b8a14949', 'Capão Redondo', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.424', '2026-07-04 16:04:23.424', NULL, 'Caçadores (Células de Proteção Urbana)', 'O maior contraste da cidade: muralhas corporativas de vidro blindado e periferias imensas marcadas pela mata e mananciais.'),
('f3da5a02-7b12-41e4-a0d4-75b3ef235b34', 'Consolação', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.386', '2026-07-04 16:04:22.386', NULL, 'Caçadores (Células Acadêmicas)', 'Ruas estreitas, prédios históricos ocupados, forte contraste entre o dia caótico e a noite fantasmagórica.'),
('f421cc13-6f63-44b6-b807-513f612043d2', 'Luz', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:22.570', '2026-07-04 16:04:22.570', NULL, 'Vampiros (Clã Brujah / Malkavian)', 'Ruas estreitas, prédios históricos ocupados, forte contraste entre o dia caótico e a noite fantasmagórica.'),
('f90d9482-2ae6-4654-b230-48606e9ef35e', 'São Miguel Paulista', 4, NULL, 1, 'b52ff531-8361-452c-a4d5-d065a8b78050', '2026-07-04 16:04:23.770', '2026-07-04 16:04:23.770', NULL, 'Caçadores (Células Religiosas)', 'Densidade demográfica absurda, mercados negros, herança industrial desativada e forte resistência de comunidades.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `RegionCriminality`
--

CREATE TABLE `RegionCriminality` (
  `regionId` varchar(191) NOT NULL,
  `criminalityId` varchar(191) NOT NULL,
  `testDifficulty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `RegionCriminality`
--

INSERT INTO `RegionCriminality` (`regionId`, `criminalityId`, `testDifficulty`) VALUES
('006de375-961c-48cb-a2a7-bb0dee75b6fb', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('077d6e46-2633-455e-aa44-8bb49cdb2fd3', '622e8669-3da0-44b3-95b0-ae3aef2df117', 8),
('09e9ca4c-ec57-44b7-89b1-d273fe07430d', '14d180fb-faf0-48c2-8e85-c754553f5898', 5),
('13ff81bc-202c-465c-90f9-57ca4ebc0b30', '942eccdf-f996-47e0-b62a-3a85ef975ee9', 2),
('1864884c-a632-424e-a67c-7f92142fb079', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('18cbe11a-6176-4a45-bd9c-e06423d5ad09', '622e8669-3da0-44b3-95b0-ae3aef2df117', 8),
('244d5d83-b316-4288-a303-d4722500cde0', '14d180fb-faf0-48c2-8e85-c754553f5898', 4),
('26a5d63e-741d-47f5-81d4-925009b8be2a', '14d180fb-faf0-48c2-8e85-c754553f5898', 4),
('3416a7c2-e15a-4dcd-a840-ab97f1c0aab4', '14d180fb-faf0-48c2-8e85-c754553f5898', 4),
('383a5125-f3ba-4d8e-81ef-0830e2afbdd2', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('393203a2-6e27-4429-92a1-888c6b71c429', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('3e48b2f5-9060-4db2-a7b9-339a31cd9128', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('3f8553a5-2f1b-47b5-8ec0-183a33e08e00', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('40ffca16-f024-4380-8d91-4775ae93a0a6', 'f1781f52-cb3d-4bbc-8d49-594dab14ab77', 7),
('421661e0-de2f-4b13-af3e-86880fb08ed6', '14d180fb-faf0-48c2-8e85-c754553f5898', 4),
('43158355-48b7-4976-b76e-a9a3f7c07a2c', 'f1781f52-cb3d-4bbc-8d49-594dab14ab77', 7),
('455b4fa4-ac46-4c62-a727-6d4c047db7c9', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('521e01dd-1a4b-43fc-be94-7a78cfb1db1a', 'a3c17235-316b-4e6e-97c1-531a1e73276d', 5),
('54c56774-2f04-4970-b2ad-f52d97fd7b37', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('5737fa79-1755-45d0-9abf-3feeeeb92b87', 'a3c17235-316b-4e6e-97c1-531a1e73276d', 5),
('57ae9b7c-c8b1-4bd8-858a-6d97788d791d', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('5acd34ba-2631-409f-9216-b4eefacc5b61', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('62fd3f88-abb6-4f65-970f-dd65c62de4b2', '14d180fb-faf0-48c2-8e85-c754553f5898', 3),
('63ac0cb3-c884-48d2-a595-65035084301e', '622e8669-3da0-44b3-95b0-ae3aef2df117', 9),
('64bc1440-0d82-435b-9a9e-a0a0c36b1786', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('70023c9e-a29e-49af-9408-a55a041c3cb6', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('735f31c7-24cd-4114-bd7e-ae2791ef44f1', '942eccdf-f996-47e0-b62a-3a85ef975ee9', 2),
('80175807-fa69-4da2-a882-7c24779a3589', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('81d1bbfa-9adb-4202-a11b-e38b947621ab', 'a3c17235-316b-4e6e-97c1-531a1e73276d', 5),
('951eedc1-5334-4589-9ee1-156e52cc705a', '622e8669-3da0-44b3-95b0-ae3aef2df117', 9),
('96686155-d69d-44f2-b1e4-7bd2ce9957b3', '622e8669-3da0-44b3-95b0-ae3aef2df117', 10),
('a452447c-4e83-4543-a2a6-e2be403b1501', '622e8669-3da0-44b3-95b0-ae3aef2df117', 10),
('b2f31d57-98ce-441e-a9b5-9b80eb54e97a', 'f1781f52-cb3d-4bbc-8d49-594dab14ab77', 7),
('b46240e2-7919-4e47-bfe8-79f6cbbc5aac', '14d180fb-faf0-48c2-8e85-c754553f5898', 6),
('b6b8bc52-dd3d-4b8e-b992-e284dc21bc88', 'f1781f52-cb3d-4bbc-8d49-594dab14ab77', 8),
('bc51a5ba-d8db-447d-b889-9ef150a82ff4', '622e8669-3da0-44b3-95b0-ae3aef2df117', 9),
('c283aa0e-e83c-4043-82a7-791d65d3c2c6', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('d4a144b5-f8bf-405d-83c5-cb3baec3cb3f', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('d66f1ae6-5f2d-4fc6-be86-592548fe15a8', 'f1781f52-cb3d-4bbc-8d49-594dab14ab77', 7),
('d6c1302e-153c-4b71-b9b7-2a22c3a657d1', '622e8669-3da0-44b3-95b0-ae3aef2df117', 9),
('dfec884c-358c-47bf-b333-a02c54ec8264', '14d180fb-faf0-48c2-8e85-c754553f5898', 4),
('e0356642-0ec1-441b-a679-fc878b3f1fbd', '14d180fb-faf0-48c2-8e85-c754553f5898', 3),
('e6f3d8d4-df33-4ab7-968b-0909877494a0', 'f1781f52-cb3d-4bbc-8d49-594dab14ab77', 7),
('eaaa8584-2348-4400-9481-2c29f103c32e', 'a3c17235-316b-4e6e-97c1-531a1e73276d', 5),
('ef9ca8bc-f1d7-4476-9bc0-6ec3d8f61be8', 'a73d6188-fd53-4ca2-ad6d-01dc7216e03f', 6),
('f23b13c6-dd1a-4387-ba5f-0b749e660042', '622e8669-3da0-44b3-95b0-ae3aef2df117', 9),
('f2708adb-df53-47f2-b1af-e6f6b8a14949', '14d180fb-faf0-48c2-8e85-c754553f5898', 3),
('f3da5a02-7b12-41e4-a0d4-75b3ef235b34', 'f1781f52-cb3d-4bbc-8d49-594dab14ab77', 7),
('f421cc13-6f63-44b6-b807-513f612043d2', '942eccdf-f996-47e0-b62a-3a85ef975ee9', 2),
('f90d9482-2ae6-4654-b230-48606e9ef35e', '14d180fb-faf0-48c2-8e85-c754553f5898', 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `RegionDemographic`
--

CREATE TABLE `RegionDemographic` (
  `regionId` varchar(191) NOT NULL,
  `demographicProfileId` varchar(191) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `RegionDemographic`
--

INSERT INTO `RegionDemographic` (`regionId`, `demographicProfileId`, `quantity`) VALUES
('006de375-961c-48cb-a2a7-bb0dee75b6fb', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('006de375-961c-48cb-a2a7-bb0dee75b6fb', '8c806e93-eb20-4ca0-859e-1b83427a9ce6', 15),
('077d6e46-2633-455e-aa44-8bb49cdb2fd3', '359d3339-5d5b-4b77-96e3-a602eb6ff3eb', 15),
('077d6e46-2633-455e-aa44-8bb49cdb2fd3', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('09e9ca4c-ec57-44b7-89b1-d273fe07430d', '0754cbf8-0650-4c5e-9553-17a89736dd3a', 15),
('09e9ca4c-ec57-44b7-89b1-d273fe07430d', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('13ff81bc-202c-465c-90f9-57ca4ebc0b30', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('13ff81bc-202c-465c-90f9-57ca4ebc0b30', '4720582e-9bd3-4f7c-a5d7-55f4523ad298', 15),
('1864884c-a632-424e-a67c-7f92142fb079', '30448bb7-31ed-49bd-86e1-d92d501c6c47', 15),
('1864884c-a632-424e-a67c-7f92142fb079', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('18cbe11a-6176-4a45-bd9c-e06423d5ad09', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('18cbe11a-6176-4a45-bd9c-e06423d5ad09', 'd9acd382-b80a-4b56-92a0-c683ffc72205', 15),
('244d5d83-b316-4288-a303-d4722500cde0', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('244d5d83-b316-4288-a303-d4722500cde0', '4bd97f77-2839-4e79-9450-e3cb8f03d0ef', 15),
('26a5d63e-741d-47f5-81d4-925009b8be2a', '2de84a81-36fb-4afe-8146-5b2a45b0d726', 15),
('26a5d63e-741d-47f5-81d4-925009b8be2a', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('3416a7c2-e15a-4dcd-a840-ab97f1c0aab4', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('3416a7c2-e15a-4dcd-a840-ab97f1c0aab4', 'c765ab46-3eda-49f2-8bc3-479213742162', 15),
('383a5125-f3ba-4d8e-81ef-0830e2afbdd2', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('383a5125-f3ba-4d8e-81ef-0830e2afbdd2', 'add1541c-fc8e-4279-be5d-4cfcbd7f00e2', 15),
('393203a2-6e27-4429-92a1-888c6b71c429', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('393203a2-6e27-4429-92a1-888c6b71c429', 'a442b882-ff7c-4394-83e0-0ca0cc30a832', 15),
('3e48b2f5-9060-4db2-a7b9-339a31cd9128', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('3e48b2f5-9060-4db2-a7b9-339a31cd9128', 'e4c19351-76cb-4cb0-86da-47ded5414b8b', 15),
('3f8553a5-2f1b-47b5-8ec0-183a33e08e00', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('3f8553a5-2f1b-47b5-8ec0-183a33e08e00', 'fa7b0aa1-c768-4ab0-88af-1b9075029e5f', 15),
('40ffca16-f024-4380-8d91-4775ae93a0a6', '12d2763b-1e0f-46c5-8861-7f0db28c9ecd', 15),
('40ffca16-f024-4380-8d91-4775ae93a0a6', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('421661e0-de2f-4b13-af3e-86880fb08ed6', '30448bb7-31ed-49bd-86e1-d92d501c6c47', 15),
('421661e0-de2f-4b13-af3e-86880fb08ed6', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('43158355-48b7-4976-b76e-a9a3f7c07a2c', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('43158355-48b7-4976-b76e-a9a3f7c07a2c', '508b871c-7d6f-47f1-8b21-5beb56ebdbc8', 15),
('455b4fa4-ac46-4c62-a727-6d4c047db7c9', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('455b4fa4-ac46-4c62-a727-6d4c047db7c9', '83c821b8-ff5f-4493-8016-a8fee17cb9aa', 15),
('521e01dd-1a4b-43fc-be94-7a78cfb1db1a', '14392d32-237b-4fb7-8bdc-b1c8c095cea1', 15),
('521e01dd-1a4b-43fc-be94-7a78cfb1db1a', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('54c56774-2f04-4970-b2ad-f52d97fd7b37', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('54c56774-2f04-4970-b2ad-f52d97fd7b37', 'e4c19351-76cb-4cb0-86da-47ded5414b8b', 15),
('5737fa79-1755-45d0-9abf-3feeeeb92b87', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('5737fa79-1755-45d0-9abf-3feeeeb92b87', 'fa7b0aa1-c768-4ab0-88af-1b9075029e5f', 15),
('57ae9b7c-c8b1-4bd8-858a-6d97788d791d', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('57ae9b7c-c8b1-4bd8-858a-6d97788d791d', '447cf08e-c1ab-4b8d-ab4d-e56b5b8b5e8b', 15),
('5acd34ba-2631-409f-9216-b4eefacc5b61', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('5acd34ba-2631-409f-9216-b4eefacc5b61', '72af8510-c12b-47d0-8386-dc8ea8170e84', 15),
('62fd3f88-abb6-4f65-970f-dd65c62de4b2', '16b6b8dc-0006-453d-984e-d87ca1f1e2d9', 15),
('62fd3f88-abb6-4f65-970f-dd65c62de4b2', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('63ac0cb3-c884-48d2-a595-65035084301e', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('63ac0cb3-c884-48d2-a595-65035084301e', 'eb4b4148-699f-4d12-ae5e-f94b1a676c78', 15),
('64bc1440-0d82-435b-9a9e-a0a0c36b1786', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('64bc1440-0d82-435b-9a9e-a0a0c36b1786', '935ce533-67e7-496c-b6b6-83b0d91a600f', 15),
('70023c9e-a29e-49af-9408-a55a041c3cb6', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('70023c9e-a29e-49af-9408-a55a041c3cb6', 'bc302b32-d55c-41ea-8590-a68975210443', 15),
('735f31c7-24cd-4114-bd7e-ae2791ef44f1', '15e2416f-d54c-4855-9315-53debed5f29e', 15),
('735f31c7-24cd-4114-bd7e-ae2791ef44f1', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('80175807-fa69-4da2-a882-7c24779a3589', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('80175807-fa69-4da2-a882-7c24779a3589', 'e4c19351-76cb-4cb0-86da-47ded5414b8b', 15),
('81d1bbfa-9adb-4202-a11b-e38b947621ab', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('81d1bbfa-9adb-4202-a11b-e38b947621ab', 'd191d1b5-633c-412d-8608-61a65d288428', 15),
('951eedc1-5334-4589-9ee1-156e52cc705a', '16db7059-3b91-4d7f-b3da-01697f4be8a9', 15),
('951eedc1-5334-4589-9ee1-156e52cc705a', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('96686155-d69d-44f2-b1e4-7bd2ce9957b3', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('96686155-d69d-44f2-b1e4-7bd2ce9957b3', 'eb660fb6-bc87-4f13-b13c-6991afc03bbd', 15),
('a452447c-4e83-4543-a2a6-e2be403b1501', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('a452447c-4e83-4543-a2a6-e2be403b1501', 'a442b882-ff7c-4394-83e0-0ca0cc30a832', 15),
('b2f31d57-98ce-441e-a9b5-9b80eb54e97a', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('b2f31d57-98ce-441e-a9b5-9b80eb54e97a', '996bf5e7-e41b-4294-bcf3-c6a797c34233', 15),
('b46240e2-7919-4e47-bfe8-79f6cbbc5aac', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('b46240e2-7919-4e47-bfe8-79f6cbbc5aac', 'abddfc46-45ac-45f9-a779-2722f17c3c25', 15),
('b6b8bc52-dd3d-4b8e-b992-e284dc21bc88', '352a9e32-8ad8-4edf-abd7-b067288bf4b4', 15),
('b6b8bc52-dd3d-4b8e-b992-e284dc21bc88', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('bc51a5ba-d8db-447d-b889-9ef150a82ff4', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('bc51a5ba-d8db-447d-b889-9ef150a82ff4', '6e9052db-37d7-4862-8363-7eb77386649e', 15),
('c283aa0e-e83c-4043-82a7-791d65d3c2c6', '2aaa7b03-57da-4380-9ca9-b464ee90456e', 15),
('c283aa0e-e83c-4043-82a7-791d65d3c2c6', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('d4a144b5-f8bf-405d-83c5-cb3baec3cb3f', '2e9fc87c-c698-4c43-9c72-3d70f102fe94', 15),
('d4a144b5-f8bf-405d-83c5-cb3baec3cb3f', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('d66f1ae6-5f2d-4fc6-be86-592548fe15a8', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('d66f1ae6-5f2d-4fc6-be86-592548fe15a8', '508b871c-7d6f-47f1-8b21-5beb56ebdbc8', 15),
('d6c1302e-153c-4b71-b9b7-2a22c3a657d1', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('d6c1302e-153c-4b71-b9b7-2a22c3a657d1', 'a41fa57e-df2f-4dad-ae62-07704c53e3d1', 15),
('dfec884c-358c-47bf-b333-a02c54ec8264', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('dfec884c-358c-47bf-b333-a02c54ec8264', '7563d823-bf2e-4969-80c1-015da5918bb7', 15),
('e0356642-0ec1-441b-a679-fc878b3f1fbd', '14392d32-237b-4fb7-8bdc-b1c8c095cea1', 15),
('e0356642-0ec1-441b-a679-fc878b3f1fbd', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('e6f3d8d4-df33-4ab7-968b-0909877494a0', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('e6f3d8d4-df33-4ab7-968b-0909877494a0', '5caee783-c712-4c03-993d-670f650b035b', 15),
('eaaa8584-2348-4400-9481-2c29f103c32e', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('eaaa8584-2348-4400-9481-2c29f103c32e', 'c21a887e-b97e-4570-be67-864b89ffa9bb', 15),
('ef9ca8bc-f1d7-4476-9bc0-6ec3d8f61be8', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('ef9ca8bc-f1d7-4476-9bc0-6ec3d8f61be8', '41b7cd0e-914a-4d2a-81e4-8e039a3faf31', 15),
('f23b13c6-dd1a-4387-ba5f-0b749e660042', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('f23b13c6-dd1a-4387-ba5f-0b749e660042', 'a27d468b-e300-49a8-bd3f-de1abbadeb3c', 15),
('f2708adb-df53-47f2-b1af-e6f6b8a14949', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('f2708adb-df53-47f2-b1af-e6f6b8a14949', '94e96568-af76-4510-9b3a-b33609954436', 15),
('f3da5a02-7b12-41e4-a0d4-75b3ef235b34', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('f3da5a02-7b12-41e4-a0d4-75b3ef235b34', 'bb01d78d-53ad-4ca8-a6bb-0c0f00a88a62', 15),
('f421cc13-6f63-44b6-b807-513f612043d2', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('f421cc13-6f63-44b6-b807-513f612043d2', 'b82be143-ebeb-4ae4-bed6-e8bd2f2d5aff', 15),
('f90d9482-2ae6-4654-b230-48606e9ef35e', '3b4f5c4e-8a3d-4469-a407-59858b89f085', 50),
('f90d9482-2ae6-4654-b230-48606e9ef35e', '48d074c3-1f62-4fae-bb72-a426c443ed88', 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `RegionMediaVisibility`
--

CREATE TABLE `RegionMediaVisibility` (
  `regionId` varchar(191) NOT NULL,
  `mediaVisibilityId` varchar(191) NOT NULL,
  `testDifficulty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `RegionMediaVisibility`
--

INSERT INTO `RegionMediaVisibility` (`regionId`, `mediaVisibilityId`, `testDifficulty`) VALUES
('006de375-961c-48cb-a2a7-bb0dee75b6fb', 'd37282e3-e836-4855-8b2c-5609198a9b23', 5),
('077d6e46-2633-455e-aa44-8bb49cdb2fd3', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 2),
('09e9ca4c-ec57-44b7-89b1-d273fe07430d', 'af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 6),
('13ff81bc-202c-465c-90f9-57ca4ebc0b30', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 3),
('1864884c-a632-424e-a67c-7f92142fb079', '996e87f8-acd8-477d-9dd9-d28d52fd965a', 8),
('18cbe11a-6176-4a45-bd9c-e06423d5ad09', '996e87f8-acd8-477d-9dd9-d28d52fd965a', 8),
('244d5d83-b316-4288-a303-d4722500cde0', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 3),
('26a5d63e-741d-47f5-81d4-925009b8be2a', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 3),
('3416a7c2-e15a-4dcd-a840-ab97f1c0aab4', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 4),
('383a5125-f3ba-4d8e-81ef-0830e2afbdd2', '996e87f8-acd8-477d-9dd9-d28d52fd965a', 8),
('393203a2-6e27-4429-92a1-888c6b71c429', '996e87f8-acd8-477d-9dd9-d28d52fd965a', 8),
('3e48b2f5-9060-4db2-a7b9-339a31cd9128', 'af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 5),
('3f8553a5-2f1b-47b5-8ec0-183a33e08e00', 'af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 5),
('40ffca16-f024-4380-8d91-4775ae93a0a6', 'af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 6),
('421661e0-de2f-4b13-af3e-86880fb08ed6', 'd78e7c9b-0af9-4a4d-b146-13a2fa6d0ec3', 7),
('43158355-48b7-4976-b76e-a9a3f7c07a2c', '996e87f8-acd8-477d-9dd9-d28d52fd965a', 8),
('455b4fa4-ac46-4c62-a727-6d4c047db7c9', '996e87f8-acd8-477d-9dd9-d28d52fd965a', 8),
('521e01dd-1a4b-43fc-be94-7a78cfb1db1a', 'af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 6),
('54c56774-2f04-4970-b2ad-f52d97fd7b37', '996e87f8-acd8-477d-9dd9-d28d52fd965a', 8),
('5737fa79-1755-45d0-9abf-3feeeeb92b87', 'af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 6),
('57ae9b7c-c8b1-4bd8-858a-6d97788d791d', 'af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 5),
('5acd34ba-2631-409f-9216-b4eefacc5b61', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 3),
('62fd3f88-abb6-4f65-970f-dd65c62de4b2', '20a37897-0c1b-4830-8f02-2b1075346cea', 1),
('63ac0cb3-c884-48d2-a595-65035084301e', '6cbaf787-1da7-4d0e-928d-3ef9ffd7a937', 9),
('64bc1440-0d82-435b-9a9e-a0a0c36b1786', '6cbaf787-1da7-4d0e-928d-3ef9ffd7a937', 9),
('70023c9e-a29e-49af-9408-a55a041c3cb6', 'af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 6),
('735f31c7-24cd-4114-bd7e-ae2791ef44f1', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 3),
('80175807-fa69-4da2-a882-7c24779a3589', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 3),
('81d1bbfa-9adb-4202-a11b-e38b947621ab', 'af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 6),
('951eedc1-5334-4589-9ee1-156e52cc705a', '6cbaf787-1da7-4d0e-928d-3ef9ffd7a937', 9),
('96686155-d69d-44f2-b1e4-7bd2ce9957b3', 'c6fc927e-6e30-4036-9587-0ecc4abf69a8', 10),
('a452447c-4e83-4543-a2a6-e2be403b1501', 'c6fc927e-6e30-4036-9587-0ecc4abf69a8', 10),
('b2f31d57-98ce-441e-a9b5-9b80eb54e97a', '996e87f8-acd8-477d-9dd9-d28d52fd965a', 8),
('b46240e2-7919-4e47-bfe8-79f6cbbc5aac', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 9),
('b6b8bc52-dd3d-4b8e-b992-e284dc21bc88', '6cbaf787-1da7-4d0e-928d-3ef9ffd7a937', 9),
('bc51a5ba-d8db-447d-b889-9ef150a82ff4', '6cbaf787-1da7-4d0e-928d-3ef9ffd7a937', 10),
('c283aa0e-e83c-4043-82a7-791d65d3c2c6', 'af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 6),
('d4a144b5-f8bf-405d-83c5-cb3baec3cb3f', '996e87f8-acd8-477d-9dd9-d28d52fd965a', 8),
('d66f1ae6-5f2d-4fc6-be86-592548fe15a8', '6cbaf787-1da7-4d0e-928d-3ef9ffd7a937', 9),
('d6c1302e-153c-4b71-b9b7-2a22c3a657d1', 'c6fc927e-6e30-4036-9587-0ecc4abf69a8', 10),
('dfec884c-358c-47bf-b333-a02c54ec8264', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 3),
('e0356642-0ec1-441b-a679-fc878b3f1fbd', '20a37897-0c1b-4830-8f02-2b1075346cea', 1),
('e6f3d8d4-df33-4ab7-968b-0909877494a0', '996e87f8-acd8-477d-9dd9-d28d52fd965a', 8),
('eaaa8584-2348-4400-9481-2c29f103c32e', 'bb1ff249-bd74-492e-8c4b-53229800ae4e', 7),
('ef9ca8bc-f1d7-4476-9bc0-6ec3d8f61be8', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 2),
('f23b13c6-dd1a-4387-ba5f-0b749e660042', 'c6fc927e-6e30-4036-9587-0ecc4abf69a8', 10),
('f2708adb-df53-47f2-b1af-e6f6b8a14949', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 2),
('f3da5a02-7b12-41e4-a0d4-75b3ef235b34', '996e87f8-acd8-477d-9dd9-d28d52fd965a', 8),
('f421cc13-6f63-44b6-b807-513f612043d2', 'af9d0dc9-e65c-4bcf-8f47-efda1f72473c', 6),
('f90d9482-2ae6-4654-b230-48606e9ef35e', '6ceb229e-c584-4e2a-a4af-05247f0817eb', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `RegionPublicSecurity`
--

CREATE TABLE `RegionPublicSecurity` (
  `regionId` varchar(191) NOT NULL,
  `publicSecurityId` varchar(191) NOT NULL,
  `testDifficulty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `RegionPublicSecurity`
--

INSERT INTO `RegionPublicSecurity` (`regionId`, `publicSecurityId`, `testDifficulty`) VALUES
('006de375-961c-48cb-a2a7-bb0dee75b6fb', '53be1cdd-475d-41a1-98e2-975005e0fdec', 6),
('077d6e46-2633-455e-aa44-8bb49cdb2fd3', 'fe9f4646-3550-4eb3-a18b-26a05ba833b3', 6),
('09e9ca4c-ec57-44b7-89b1-d273fe07430d', '71eea593-7121-4b89-8c8f-bdba97f5c4e9', 6),
('13ff81bc-202c-465c-90f9-57ca4ebc0b30', '2da5b212-4554-4012-986f-1b838b3a17a5', 6),
('1864884c-a632-424e-a67c-7f92142fb079', '1cf807b9-f7bd-40ba-97ea-51ff18d368e1', 8),
('18cbe11a-6176-4a45-bd9c-e06423d5ad09', '2c7a5380-37bf-4f4f-b141-96b31f1eb63a', 7),
('244d5d83-b316-4288-a303-d4722500cde0', 'b80eda4b-a23a-4144-8eef-e9a72a6dd303', 4),
('26a5d63e-741d-47f5-81d4-925009b8be2a', 'bc9a24e2-f49f-48d8-aabe-9e03a6fa6256', 6),
('3416a7c2-e15a-4dcd-a840-ab97f1c0aab4', '59771f9b-c3a3-4cb7-8945-a2fe312c5ab5', 7),
('383a5125-f3ba-4d8e-81ef-0830e2afbdd2', '0245bdac-bb60-4882-b00b-7c6f8b05c1a4', 6),
('393203a2-6e27-4429-92a1-888c6b71c429', 'baafb2a2-514d-4d71-90af-b930e5e6d2d2', 7),
('3e48b2f5-9060-4db2-a7b9-339a31cd9128', '911c1828-eb4c-4199-8006-a4d0eb1f2585', 5),
('3f8553a5-2f1b-47b5-8ec0-183a33e08e00', 'b66b35c8-403e-4e1f-a76c-812cf09511d9', 5),
('40ffca16-f024-4380-8d91-4775ae93a0a6', '47b123df-7ed1-4bb0-aba7-1317d7dbd182', 6),
('421661e0-de2f-4b13-af3e-86880fb08ed6', '04ba1bfc-8bff-4417-bb87-b8030663b388', 7),
('43158355-48b7-4976-b76e-a9a3f7c07a2c', '55b321e2-541a-44f0-9ce6-750749f5edee', 5),
('455b4fa4-ac46-4c62-a727-6d4c047db7c9', '2853a033-b7b4-4503-9c43-f175bcbcfaac', 6),
('521e01dd-1a4b-43fc-be94-7a78cfb1db1a', '1d4bd734-5e05-4fb0-bdf0-95ce5f9a4992', 5),
('54c56774-2f04-4970-b2ad-f52d97fd7b37', 'a7b0b86b-8352-4956-b5cb-23081787c0f4', 6),
('5737fa79-1755-45d0-9abf-3feeeeb92b87', 'e228d65f-ecec-425c-8e12-de96fe5dae04', 5),
('57ae9b7c-c8b1-4bd8-858a-6d97788d791d', 'fd2e828b-cbb8-4c81-bca9-b3b08023d28c', 6),
('5acd34ba-2631-409f-9216-b4eefacc5b61', 'db340ec4-6ece-4c25-a440-22d498443663', 5),
('62fd3f88-abb6-4f65-970f-dd65c62de4b2', '1f525d94-097e-487b-a2dc-acc522ca477d', 4),
('63ac0cb3-c884-48d2-a595-65035084301e', 'a94fa3e8-ae59-4a2c-8c66-966987c3801b', 8),
('64bc1440-0d82-435b-9a9e-a0a0c36b1786', '5d13b621-aa84-4e49-a305-439455c56847', 6),
('70023c9e-a29e-49af-9408-a55a041c3cb6', '821bc9f7-6a0a-48ea-a61e-1ed601d9931e', 6),
('735f31c7-24cd-4114-bd7e-ae2791ef44f1', '29485603-5bf4-4675-bbd6-d875e029c953', 7),
('80175807-fa69-4da2-a882-7c24779a3589', 'eb0efaf9-98e0-4729-867e-ada309ab45c6', 5),
('81d1bbfa-9adb-4202-a11b-e38b947621ab', '291c0274-3607-4f09-a80f-3118ecebca3a', 7),
('951eedc1-5334-4589-9ee1-156e52cc705a', '2f4d815a-7850-471b-a1e3-c711b37592c0', 8),
('96686155-d69d-44f2-b1e4-7bd2ce9957b3', '51ec0d80-a1c6-40f8-b808-96d28283fb1f', 10),
('a452447c-4e83-4543-a2a6-e2be403b1501', '7c974c51-24f2-4568-b3cd-31a6ae037eb6', 9),
('b2f31d57-98ce-441e-a9b5-9b80eb54e97a', '213836d2-9107-46e7-a0c5-aa2e5b68cb01', 7),
('b46240e2-7919-4e47-bfe8-79f6cbbc5aac', 'a40cc9e0-1f3b-4bfb-9e80-e9aaa4d07162', 9),
('b6b8bc52-dd3d-4b8e-b992-e284dc21bc88', 'ad2fac40-a194-45b8-8376-6f21cb07288f', 7),
('bc51a5ba-d8db-447d-b889-9ef150a82ff4', 'd889dfac-9b57-4196-9f7d-daedbbc945ee', 9),
('c283aa0e-e83c-4043-82a7-791d65d3c2c6', 'fab0c6ce-6eb5-4605-a583-54ed6c840527', 5),
('d4a144b5-f8bf-405d-83c5-cb3baec3cb3f', 'e46c4ef8-6af9-4e59-a2d5-c94166848e43', 6),
('d66f1ae6-5f2d-4fc6-be86-592548fe15a8', 'ea8a0e9b-d028-402a-872d-4c9f2a81db1e', 7),
('d6c1302e-153c-4b71-b9b7-2a22c3a657d1', '74b44ecd-a2a5-4799-9ba5-9287581e30c7', 9),
('dfec884c-358c-47bf-b333-a02c54ec8264', 'd5132174-d8e8-4a44-9ac3-59e26dd27f0c', 4),
('e0356642-0ec1-441b-a679-fc878b3f1fbd', '09ee624e-6330-4c28-9bbe-e4b5c92059f3', 5),
('e6f3d8d4-df33-4ab7-968b-0909877494a0', '40e529ce-8beb-4d7e-b7e4-dcef28fb1142', 6),
('eaaa8584-2348-4400-9481-2c29f103c32e', '384c87d8-b274-4a38-9e01-d95b3a05a078', 7),
('ef9ca8bc-f1d7-4476-9bc0-6ec3d8f61be8', '3c78112a-4120-4013-8075-f61e4d1f939a', 4),
('f23b13c6-dd1a-4387-ba5f-0b749e660042', '93e74b98-6777-428f-833a-1654a6295918', 9),
('f2708adb-df53-47f2-b1af-e6f6b8a14949', '5200d839-9e4d-4e2b-971c-c14eb9e12411', 5),
('f3da5a02-7b12-41e4-a0d4-75b3ef235b34', '6e2c049e-ef8d-42c3-bef3-bc5f85ed90e8', 6),
('f421cc13-6f63-44b6-b807-513f612043d2', '33fb8eab-b417-4069-a768-66d07d4732c2', 8),
('f90d9482-2ae6-4654-b230-48606e9ef35e', '80ea809a-c16c-450f-b5d7-5dd6637fa815', 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `RegionWealth`
--

CREATE TABLE `RegionWealth` (
  `regionId` varchar(191) NOT NULL,
  `wealthId` varchar(191) NOT NULL,
  `testDifficulty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `RegionWealth`
--

INSERT INTO `RegionWealth` (`regionId`, `wealthId`, `testDifficulty`) VALUES
('006de375-961c-48cb-a2a7-bb0dee75b6fb', '1d28c1a9-a1de-47c7-b53f-94ca57cbb3dd', 7),
('077d6e46-2633-455e-aa44-8bb49cdb2fd3', 'd8040dd5-a6e5-4165-bcf7-cdfc1efc0898', 5),
('09e9ca4c-ec57-44b7-89b1-d273fe07430d', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('13ff81bc-202c-465c-90f9-57ca4ebc0b30', '27ca0bed-e78c-40d5-aa69-0c1d2ea58e7d', 9),
('1864884c-a632-424e-a67c-7f92142fb079', 'd8040dd5-a6e5-4165-bcf7-cdfc1efc0898', 5),
('18cbe11a-6176-4a45-bd9c-e06423d5ad09', 'c2a4c8a2-82a1-49ca-9dce-efe6153d4a43', 4),
('244d5d83-b316-4288-a303-d4722500cde0', '1d28c1a9-a1de-47c7-b53f-94ca57cbb3dd', 8),
('26a5d63e-741d-47f5-81d4-925009b8be2a', '1d28c1a9-a1de-47c7-b53f-94ca57cbb3dd', 7),
('3416a7c2-e15a-4dcd-a840-ab97f1c0aab4', '1d28c1a9-a1de-47c7-b53f-94ca57cbb3dd', 7),
('383a5125-f3ba-4d8e-81ef-0830e2afbdd2', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('393203a2-6e27-4429-92a1-888c6b71c429', 'd8040dd5-a6e5-4165-bcf7-cdfc1efc0898', 5),
('3e48b2f5-9060-4db2-a7b9-339a31cd9128', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('3f8553a5-2f1b-47b5-8ec0-183a33e08e00', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('40ffca16-f024-4380-8d91-4775ae93a0a6', 'd8040dd5-a6e5-4165-bcf7-cdfc1efc0898', 5),
('421661e0-de2f-4b13-af3e-86880fb08ed6', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('43158355-48b7-4976-b76e-a9a3f7c07a2c', 'd8040dd5-a6e5-4165-bcf7-cdfc1efc0898', 5),
('455b4fa4-ac46-4c62-a727-6d4c047db7c9', 'd8040dd5-a6e5-4165-bcf7-cdfc1efc0898', 5),
('521e01dd-1a4b-43fc-be94-7a78cfb1db1a', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('54c56774-2f04-4970-b2ad-f52d97fd7b37', 'd8040dd5-a6e5-4165-bcf7-cdfc1efc0898', 5),
('5737fa79-1755-45d0-9abf-3feeeeb92b87', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('57ae9b7c-c8b1-4bd8-858a-6d97788d791d', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('5acd34ba-2631-409f-9216-b4eefacc5b61', '1d28c1a9-a1de-47c7-b53f-94ca57cbb3dd', 7),
('62fd3f88-abb6-4f65-970f-dd65c62de4b2', '27ca0bed-e78c-40d5-aa69-0c1d2ea58e7d', 9),
('63ac0cb3-c884-48d2-a595-65035084301e', 'c2a4c8a2-82a1-49ca-9dce-efe6153d4a43', 3),
('64bc1440-0d82-435b-9a9e-a0a0c36b1786', 'c2a4c8a2-82a1-49ca-9dce-efe6153d4a43', 4),
('70023c9e-a29e-49af-9408-a55a041c3cb6', 'c2a4c8a2-82a1-49ca-9dce-efe6153d4a43', 4),
('735f31c7-24cd-4114-bd7e-ae2791ef44f1', '27ca0bed-e78c-40d5-aa69-0c1d2ea58e7d', 9),
('80175807-fa69-4da2-a882-7c24779a3589', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('81d1bbfa-9adb-4202-a11b-e38b947621ab', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('951eedc1-5334-4589-9ee1-156e52cc705a', 'cfe3a0f7-031b-4df6-8fc8-e18d1d7066b0', 2),
('96686155-d69d-44f2-b1e4-7bd2ce9957b3', 'cfe3a0f7-031b-4df6-8fc8-e18d1d7066b0', 1),
('a452447c-4e83-4543-a2a6-e2be403b1501', 'cfe3a0f7-031b-4df6-8fc8-e18d1d7066b0', 1),
('b2f31d57-98ce-441e-a9b5-9b80eb54e97a', 'c2a4c8a2-82a1-49ca-9dce-efe6153d4a43', 4),
('b46240e2-7919-4e47-bfe8-79f6cbbc5aac', '27ca0bed-e78c-40d5-aa69-0c1d2ea58e7d', 9),
('b6b8bc52-dd3d-4b8e-b992-e284dc21bc88', 'c2a4c8a2-82a1-49ca-9dce-efe6153d4a43', 3),
('bc51a5ba-d8db-447d-b889-9ef150a82ff4', 'cfe3a0f7-031b-4df6-8fc8-e18d1d7066b0', 2),
('c283aa0e-e83c-4043-82a7-791d65d3c2c6', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('d4a144b5-f8bf-405d-83c5-cb3baec3cb3f', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('d66f1ae6-5f2d-4fc6-be86-592548fe15a8', 'c2a4c8a2-82a1-49ca-9dce-efe6153d4a43', 4),
('d6c1302e-153c-4b71-b9b7-2a22c3a657d1', 'cfe3a0f7-031b-4df6-8fc8-e18d1d7066b0', 1),
('dfec884c-358c-47bf-b333-a02c54ec8264', '27ca0bed-e78c-40d5-aa69-0c1d2ea58e7d', 9),
('e0356642-0ec1-441b-a679-fc878b3f1fbd', '27ca0bed-e78c-40d5-aa69-0c1d2ea58e7d', 9),
('e6f3d8d4-df33-4ab7-968b-0909877494a0', 'd8040dd5-a6e5-4165-bcf7-cdfc1efc0898', 5),
('eaaa8584-2348-4400-9481-2c29f103c32e', '1d28c1a9-a1de-47c7-b53f-94ca57cbb3dd', 7),
('ef9ca8bc-f1d7-4476-9bc0-6ec3d8f61be8', 'f2f36c82-fc04-4109-93b2-d4016fbcfd13', 6),
('f23b13c6-dd1a-4387-ba5f-0b749e660042', 'cfe3a0f7-031b-4df6-8fc8-e18d1d7066b0', 1),
('f2708adb-df53-47f2-b1af-e6f6b8a14949', '27ca0bed-e78c-40d5-aa69-0c1d2ea58e7d', 9),
('f3da5a02-7b12-41e4-a0d4-75b3ef235b34', 'c2a4c8a2-82a1-49ca-9dce-efe6153d4a43', 4),
('f421cc13-6f63-44b6-b807-513f612043d2', '27ca0bed-e78c-40d5-aa69-0c1d2ea58e7d', 10),
('f90d9482-2ae6-4654-b230-48606e9ef35e', '27ca0bed-e78c-40d5-aa69-0c1d2ea58e7d', 9);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Scene`
--

CREATE TABLE `Scene` (
  `id` varchar(191) NOT NULL,
  `sceneIdentifier` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `imageUrl` varchar(191) DEFAULT NULL,
  `audioUrl` varchar(191) DEFAULT NULL,
  `apiConsequences` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`apiConsequences`)),
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `Scene`
--

INSERT INTO `Scene` (`id`, `sceneIdentifier`, `title`, `description`, `imageUrl`, `audioUrl`, `apiConsequences`, `createdAt`, `updatedAt`) VALUES
('08b2ee8f-4f28-4345-bb93-aa71a011a786', 'Cena19', 'O Preço do Descuido (FIM COM EXPOSIÇÃO - CONSEQUÊNCIA 3)', 'Você tranca a porta do seu refúgio com a Fome totalmente saciada. Suas veias finalmente pararam de queimar. No entanto, dez minutos depois, seu telefone criptografado vibra. É uma mensagem de texto urgente do seu contato: \'Você foi descuidado! Um jornalista freelancer que cobria o congresso médico estava testando lentes de alta definição noturna e gravou um vídeo nítido de você atacando no perímetro do hotel. O arquivo vazou na rede oculta e a Segunda Inquisição interceptou os metadados. Eles sabem sua descrição. Limpe o local e suma da Consolação AGORA!\'', NULL, NULL, '{\"ativar_defeito\": \"Segunda Inquisição no Rastro\", \"modificar_fome\": 0, \"modificar_humanidade\": -1, \"modificar_forca_de_vontade\": 0}', '2026-07-04 18:37:34.978', '2026-07-04 18:37:34.978'),
('096b030b-f032-448a-961d-1907898e8458', 'Cena18', 'O Quarto de Hotel', 'Sua lábia e encantamento quebram a resistência dela. Vocês entram em um hotel/motel discreto nas imediações da Consolação. Entre quatro paredes, longe dos olhos da ShieldGuard e do policiamento, você dá o bote. Você morde com extrema delicadeza, injetando o êxtase do Beijo do Vampiro nas veias dela. Ela não entra em pânico; pelo contrário, o efeito do seu sangue a deixa flutuando em uma felicidade artificial profunda e entorpecida. Você drena o necessário para zerar sua Fome sem matá-la.', NULL, NULL, 'null', '2026-07-04 18:37:34.968', '2026-07-04 18:37:34.968'),
('0a1df234-560c-477b-b7fe-d3b5e64e8576', 'Cena11', 'O Gosto do Plástico', 'O cadeado cede. Dentro do frigobar, você encontra três bolsas de plasma hospitalar intactas. Você rasga o plástico com as presas. O sangue está frio e sem a energia emocional (Ressonância) de uma caça viva, mas é o suficiente para aplacar a queimação e salvar sua pele esta noite.', NULL, NULL, 'null', '2026-07-04 18:37:34.899', '2026-07-04 18:37:34.899'),
('0cda666b-1ac3-40de-93e9-387c4a13efab', 'Cena20', 'Saciedade, Prazer e Silêncio (FIM PERFEITO - CONSEQUÊNCIA 1)', 'Você caminha de volta para o seu refúgio cortando o clima abafado della noite de São Paulo. A caçada foi um sucesso absoluto. A mulher elegante ficou em segurança no hotel, totalmente dopada pelo prazer sobrenatural do seu Beijo e sem memórias claras do ataque. A Besta recuou completamente para o fundo da sua alma. Você fecha as trancas do seu refúgio sabendo que jogou o jogo da Máscara com perfeição e maestria.', NULL, NULL, '{\"modificar_fome\": 0, \"modificar_humanidade\": 0, \"recompensa_habilidade\": \"Subterfúgio\", \"modificar_forca_de_vontade\": 0}', '2026-07-04 18:37:34.988', '2026-07-04 18:37:34.988'),
('17075cbf-0069-4e91-b189-a9540da015fe', 'Cena04', 'O Ponto de Ruptura', 'Seus esforços falham e a queimação nas suas veias se torna insuportável. A Besta assume o controle parcial dos seus músculos, nublando sua visão e empurrando você para fora do refúgio em um estado de quase frenesi. Você está cambaleando na calçada e sua boca saliva ao ver o pescoço de uma jovem que sai de uma farmácia.', NULL, NULL, 'null', '2026-07-04 18:37:34.827', '2026-07-04 18:37:34.827'),
('181fa2e1-96c0-497e-b036-a78712f18de3', 'Cena06', 'O Beco do Policial', 'Você entra no beco escuro. Após procurar intensamente, você não acha nenhum pedestre comum, apenas uma figura caída entre caixas de papelão que parece ser um mendigo adormecido. Movido pelo desespero da fome, você se aproxima para dar o bote, mas o homem abre os olhos abruptamente, rola para o lado esquivando-se e saca uma pistola Taurus da cintura. É um policial do Deic disfarçado em uma operação contra o tráfico local. \'Parado, polícia!\'', NULL, NULL, 'null', '2026-07-04 18:37:34.847', '2026-07-04 18:37:34.847'),
('1d167c21-1aef-44a6-800e-d570569b8f7c', 'Cena17', 'O Bote Sem Controle', 'Você não consegue convencê-la a ir para o motel ou sua fome simplesmente atinge o limite. Sem conseguir se segurar, você a arrasta para a penumbra do estacionamento do próprio hotel do evento. Você crava suas presas com força. Ela solta um gemido abafado contra seu peito. Você se alimenta ali mesmo, de forma arriscada, no epicentro do perigo urbano. Enquanto você bebe, nota o reflexo metálico de uma lente vinda de uma janela do segundo andar do prédio adjacente. Alguém gravou a cena.', NULL, NULL, 'null', '2026-07-04 18:37:34.958', '2026-07-04 18:37:34.958'),
('221eeee1-8cfe-4b66-ab33-da1a852dc706', 'Cena12', 'Noite de Escassez e Fome (FIM POR FALTA DE ALVO)', 'Você se tranca no seu refúgio. Lá fora, o som das sereias e o vaivém da segurança privada deixam claro que Higienópolis e a Consolação se tornaram uma fortaleza impenetrável por conta do evento médico. Você vasculha os cantos, mas não há uma gota de sangue estocada. A Besta ruge de frustração dentro do seu peito. Seus olhos ardem e seus músculos tremem; a Fome venceu esta rodada e sua noite termina no mais puro desespero existencial.', NULL, NULL, '{\"modificar_fome\": 2, \"modificar_humanidade\": 0, \"modificar_forca_de_vontade\": -2}', '2026-07-04 18:37:34.909', '2026-07-04 18:37:34.909'),
('2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 'Cena07', 'O Alarme Soou', 'Seus movimentos bruscos ativam os sensores de proximidade da ShieldGuard ou disparam o alerta da polícia. Uma viatura dobra a esquina em alta velocidade, apontando os holofotes na sua direção. Policiais saem com armas em punho: \'Parado! Mãos na cabeça!\' O cerco está fechado e a vigilância está alta demais hoje. Não há como caçar. Você é forçado a bater em retirada total, usando becos imundos para sumir antes de ser baleado ou capturado.', NULL, NULL, 'null', '2026-07-04 18:37:34.857', '2026-07-04 18:37:34.857'),
('3109de85-558a-490c-800e-fc5e7b50ddeb', 'Cena15', 'A Fuga pelo Sangue', 'A briga no beco é caótica. O policial disfarçado é bom, mas sua força sobrenatural quebra a vantagem dele. Você desfere um soco que o joga contra as lixeiras. O sangue dele espirra no seu rosto por causa de um corte. O cheiro ativa sua fome de forma incontrolável. Você morde o pescoço dele ali mesmo, no chão do beco, sugando freneticamente enquanto ele perde os sentidos. Você ouve pelo rádio caído na sarjeta que o reforço da PM está a dois quarteirões dali.', NULL, NULL, 'null', '2026-07-04 18:37:34.939', '2026-07-04 18:37:34.939'),
('35700470-4d37-4e3d-8082-6e6d96918802', 'Cena05', 'Olhar Clínico', 'Com uma força de vontade impressionante, você sufoca os rosnados da Besta e limpa sua mente. Seus sentidos vampíricos se expandem. Do alto da sacada do refúgio, você percebe que a segurança não é da polícia comum: os carros pretos carregam símbolos da ShieldGuard Security. Eles estão vigiando especificamente os ricaços do congresso. Você nota um ponto fraco no quarteirão de baixo, onde os funcionários do hotel saem para fumar.', NULL, NULL, 'null', '2026-07-04 18:37:34.837', '2026-07-04 18:37:34.837'),
('39f84093-fc94-4ba7-8bbf-26bc01e44843', 'Cena09', 'Rotas Ocultas', 'Seu mapeamento mental das câmeras funciona. Você evita os grandes eixos protegidos pela ShieldGuard e alcança uma ruela residencial escura perto do limite com o Bixiga. O faro de sangue o guia até uma silhueta alta caminhando sozinha na penumbra.', NULL, NULL, 'null', '2026-07-04 18:37:34.878', '2026-07-04 18:37:34.878'),
('58e87852-5dec-41a8-b602-0523bd93692a', 'Cena08', 'O Alvo Elegante', 'Você caminha até a entrada lateral do hotel do evento. Após uma busca intensa, você localiza o alvo perfeito: uma mulher atraente, vestindo roupas de grife elegantes e carregando o crachá da comitiva internacional do congresso. Você passa a segui-la discretamente e nota que ela está inquieta, olhando para os lados e conversando com um sotaque espanhol ao telefone, procurando claramente por algum entorpecente ou diversão fora do protocolo do evento. Ela é uma vítima fácil.', NULL, NULL, 'null', '2026-07-04 18:37:34.868', '2026-07-04 18:37:34.868'),
('7250b119-7c62-4e7f-a24b-7a4552743c51', 'Cena02', 'As Calçadas da Consolação', 'Você ganha as calçadas da Consolação. O movimento de pedestres está estranho: há muitas viaturas da PM cruzando a avenida e seguranças privados de terno e fone de ouvido nas esquinas de Higienópolis. O congresso de medicina trouxe uma vigilância pesada. Caçar aqui de peito aberto é um risco. Você precisa achar um ponto cego.', NULL, NULL, 'null', '2026-07-04 18:37:34.795', '2026-07-04 18:37:34.795'),
('8ec12df3-1f32-4c2f-89e9-17e7e358d848', 'Cena10', 'Invasão Vertical', 'Você pula o muro do estacionamento com precisão felina. O guarda está de costas assistindo a um jogo no celular. O frigobar indicado pelo contato está a poucos metros de você, trancado com um cadeado simples de metal.', NULL, NULL, 'null', '2026-07-04 18:37:34.888', '2026-07-04 18:37:34.888'),
('9d2f4509-c3aa-4bae-bb13-0bfb95014b7b', 'Cena13', 'Sobrevivência Sintética (FIM COM SANGUE DE BANCO)', 'Você retorna deslizando pelas sombras até seu refúgio seguro. O sangue estocado removeu a névoa vermelha da sua mente. Você sobreviveu mais uma noite sem violar a Máscara e sem chamar a atenção da polícia ou da ShieldGuard. Foi uma vitória fria e sem sabor, mas estratégica.', NULL, NULL, '{\"modificar_fome\": -2, \"modificar_humanidade\": 0, \"recompensa_habilidade\": \"Tecnologia\", \"modificar_forca_de_vontade\": 0}', '2026-07-04 18:37:34.919', '2026-07-04 18:37:34.919'),
('ac1f1657-8a3a-465f-8725-67e3fd71a74b', 'Cena01', 'No Refúgio', '[Nome do Personagem] acorda com um barulho vindo da rua. Ao olhar para o relógio, nota que já são 18h40. O clima tropical está abafado e o som caótico dos carros invade o ambiente. Uma análise rápida ao redor mostra que nada de anormal aconteceu no refúgio. Porém, ao se colocar de pé, a intensa queimação da Fome o ataca violentamente, exigindo uma reação imediata.', NULL, NULL, 'null', '2026-07-04 18:37:34.778', '2026-07-04 18:37:34.778'),
('ec38b7ae-dcb7-4d47-83a0-5592bda0cf0a', 'Cena14', 'Sangue no Beco Escondido', 'Suas mãos prendem a vítima contra a parede de tijolos. O pânico dela dura apenas um segundo antes que suas presas perfurem a carótida. Ao beber, o sangue pulsa denso e violento. Mas a sensação de que há algo errado ataca seus sentidos sobrenaturais: passos apressados ecoam na entrada do beco.', NULL, NULL, 'null', '2026-07-04 18:37:34.929', '2026-07-04 18:37:34.929'),
('f255176b-9e3e-4a09-ad3c-9821a7e3fb06', 'Cena03', 'O Telefonema Criptografado', 'Seu contato atende com um sussurro apressado. Ele diz que o centro está cercado por causa do evento, mas deixou uma bolsa de sangue estocada em um frigobar nos fundos de um estacionamento 24h na rua de trás. O problema é que o portão eletrônico está trancado e há um guarda no local.', NULL, NULL, 'null', '2026-07-04 18:37:34.806', '2026-07-04 18:37:34.806'),
('f714ae17-d1b5-4977-bc89-eb6862444124', 'Cena16', 'O Encanto e a Proposta', 'Você se aproxima da mulher elegante do congresso. Utilizando sua lábia, charme e um toque sutil de feitiçaria social, você se apresenta como um empresário influente da noite paulistana e diz que conhece um clube privado exclusivo perfeito para o que ela procura. Ela cai no seu jogo, os olhos dela brilham e ela aceita segui-lo. No entanto, quando você sugere pegar um táxi para ir a um motel discreto, ela hesita, olhando para o relógio do crachá do evento: \'Melhor irmos para aquele canto escuro do estacionamento do hotel... não posso sumir por muito tempo.\' A fome está gigantesca dentro de você.', NULL, NULL, 'null', '2026-07-04 18:37:34.948', '2026-07-04 18:37:34.948');

-- --------------------------------------------------------

--
-- Estrutura para tabela `SceneAction`
--

CREATE TABLE `SceneAction` (
  `id` varchar(191) NOT NULL,
  `sceneId` varchar(191) NOT NULL,
  `actionId` varchar(191) NOT NULL,
  `successSceneId` varchar(191) DEFAULT NULL,
  `failureSceneId` varchar(191) DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `SceneAction`
--

INSERT INTO `SceneAction` (`id`, `sceneId`, `actionId`, `successSceneId`, `failureSceneId`, `order`) VALUES
('072666e4-e46c-489b-8c74-3e067a99aa67', '39f84093-fc94-4ba7-8bbf-26bc01e44843', 'fe8b26fd-ffee-4c8b-bc81-df040ac4b10d', 'ec38b7ae-dcb7-4d47-83a0-5592bda0cf0a', '181fa2e1-96c0-497e-b036-a78712f18de3', 1),
('076a857c-e7cf-4459-8497-9d6db7200270', '17075cbf-0069-4e91-b189-a9540da015fe', 'b77be3b9-7e80-40da-b37e-1ab97e0cd06b', 'f714ae17-d1b5-4977-bc89-eb6862444124', '3109de85-558a-490c-800e-fc5e7b50ddeb', 1),
('1709f269-e431-47a7-aca8-5c509ee50aba', '0a1df234-560c-477b-b7fe-d3b5e64e8576', 'a3bb56e5-fe04-4cc7-a6f3-1b70f69db5c4', '9d2f4509-c3aa-4bae-bb13-0bfb95014b7b', NULL, 0),
('27d5bbf4-3071-4195-8afa-fa0e86b4e4ee', '7250b119-7c62-4e7f-a24b-7a4552743c51', '1c5b91a0-3eba-4b0d-942d-d6ac271285bd', '181fa2e1-96c0-497e-b036-a78712f18de3', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 0),
('2c90867d-2da1-418c-97c9-e1b35f2e3ffc', 'ac1f1657-8a3a-465f-8725-67e3fd71a74b', '45521ee7-df5f-4bba-b724-af73a4f1d9cc', 'f255176b-9e3e-4a09-ad3c-9821a7e3fb06', '17075cbf-0069-4e91-b189-a9540da015fe', 1),
('33a32331-4d08-403b-b32a-8a1189cf5d26', 'ac1f1657-8a3a-465f-8725-67e3fd71a74b', 'e80234f1-09c8-4866-a285-bf92887dec85', '35700470-4d37-4e3d-8082-6e6d96918802', '17075cbf-0069-4e91-b189-a9540da015fe', 2),
('34085fd4-fc09-4397-9cb6-88a72ef2a8e3', '181fa2e1-96c0-497e-b036-a78712f18de3', '2a5e844a-b354-48c4-ba09-59baa39cf01d', '3109de85-558a-490c-800e-fc5e7b50ddeb', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 1),
('37af423a-ea68-4923-bd90-b8489fe8a77f', 'ac1f1657-8a3a-465f-8725-67e3fd71a74b', '9cf9789f-0924-47b1-898b-30c2d2fbec14', '7250b119-7c62-4e7f-a24b-7a4552743c51', NULL, 0),
('3b0bde75-720a-4972-ba3a-f16c12556b3f', '7250b119-7c62-4e7f-a24b-7a4552743c51', '301abe87-1d3f-4e89-9ca2-a9e0673dad8c', '58e87852-5dec-41a8-b602-0523bd93692a', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 1),
('3bf77195-cfc3-456f-a1f9-1abb29f2c0bc', '7250b119-7c62-4e7f-a24b-7a4552743c51', '2910795c-a66f-4f75-a0fc-bf703497de22', '39f84093-fc94-4ba7-8bbf-26bc01e44843', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 2),
('411ea054-1a19-4a52-bf7e-f3cae54b779a', '8ec12df3-1f32-4c2f-89e9-17e7e358d848', '6caf15ab-c718-4356-972c-a7523ac99fc4', '0a1df234-560c-477b-b7fe-d3b5e64e8576', '221eeee1-8cfe-4b66-ab33-da1a852dc706', 1),
('47c7f238-c5c4-4c63-903a-e538dabbc92a', 'f255176b-9e3e-4a09-ad3c-9821a7e3fb06', '96e17643-655c-401d-9fb9-4cd4cabb8288', '8ec12df3-1f32-4c2f-89e9-17e7e358d848', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 0),
('4c4a43cf-b57a-4331-bd53-5878afcfc21a', '181fa2e1-96c0-497e-b036-a78712f18de3', '7d6ce052-42d7-4661-9f8e-0fae813ef549', '3109de85-558a-490c-800e-fc5e7b50ddeb', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 0),
('5d582ea8-d8c9-4857-bdca-aae6e0e8a78e', '39f84093-fc94-4ba7-8bbf-26bc01e44843', 'a6f08631-6b87-4cc6-a8d8-fa8dd6950fe2', 'ec38b7ae-dcb7-4d47-83a0-5592bda0cf0a', '181fa2e1-96c0-497e-b036-a78712f18de3', 0),
('659c34cb-3de0-4b57-81f0-15fe7192dd05', '35700470-4d37-4e3d-8082-6e6d96918802', 'ba4f86a9-0693-4ce1-b72b-a0d405e74a60', '181fa2e1-96c0-497e-b036-a78712f18de3', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 2),
('787ba33d-a6a9-4ed8-bfb9-907535ce5de9', '1d167c21-1aef-44a6-800e-d570569b8f7c', 'a03492cf-d78d-420e-9dc4-eaf9e4265421', '08b2ee8f-4f28-4345-bb93-aa71a011a786', NULL, 0),
('7b1ca931-ea5b-4f21-9bba-fe7519ed56cf', '8ec12df3-1f32-4c2f-89e9-17e7e358d848', 'c611f065-6064-4ed8-92cd-d515afaccd5d', '0a1df234-560c-477b-b7fe-d3b5e64e8576', '221eeee1-8cfe-4b66-ab33-da1a852dc706', 0),
('7f868542-3115-4af0-9c6d-6c94c03963d6', '17075cbf-0069-4e91-b189-a9540da015fe', '353a7bec-deb9-43e1-a29a-3e3eca3a3aeb', '7250b119-7c62-4e7f-a24b-7a4552743c51', '3109de85-558a-490c-800e-fc5e7b50ddeb', 2),
('88c64eae-80c9-4588-af30-4cb9be8fa271', 'f714ae17-d1b5-4977-bc89-eb6862444124', '3655bf01-9098-429e-a4f2-61c6d471fe9b', '1d167c21-1aef-44a6-800e-d570569b8f7c', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 1),
('943f2ff4-a33a-43d5-bef1-25cc80b2dcb2', '181fa2e1-96c0-497e-b036-a78712f18de3', '0f9fdef8-a9d0-482f-b835-1c96517424bc', '7250b119-7c62-4e7f-a24b-7a4552743c51', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 2),
('94a06f5e-296c-45aa-acf4-484949f7ae60', '17075cbf-0069-4e91-b189-a9540da015fe', 'c7be7724-74ef-43a0-a1aa-6c71d7d9beb3', 'ec38b7ae-dcb7-4d47-83a0-5592bda0cf0a', '3109de85-558a-490c-800e-fc5e7b50ddeb', 0),
('a6cfdb93-81d7-4080-868d-5672fbca2d28', '39f84093-fc94-4ba7-8bbf-26bc01e44843', 'f44d8163-b57c-4c0b-83c6-62c0bc7abc49', 'ec38b7ae-dcb7-4d47-83a0-5592bda0cf0a', '181fa2e1-96c0-497e-b036-a78712f18de3', 2),
('a6f9c89c-1f81-4932-9160-afec499ef09b', 'ec38b7ae-dcb7-4d47-83a0-5592bda0cf0a', '74804ad1-1668-447a-9c25-b1ac2f5c1217', '08b2ee8f-4f28-4345-bb93-aa71a011a786', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 0),
('b51a3f3d-8ee0-479d-8f4a-4f75596b9844', '096b030b-f032-448a-961d-1907898e8458', 'ff693ef9-5371-4a09-86ab-e41b96da0512', '0cda666b-1ac3-40de-93e9-387c4a13efab', NULL, 0),
('c903c855-f538-4053-8abc-1e8fb4428b20', '58e87852-5dec-41a8-b602-0523bd93692a', 'c422e8aa-1f70-4d11-aeeb-e31a5994d8d7', 'f714ae17-d1b5-4977-bc89-eb6862444124', '17075cbf-0069-4e91-b189-a9540da015fe', 1),
('cd4b77ae-456b-4d5d-9e9b-32add11073d4', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 'ded2d058-0802-4de0-a04a-e3feb33db723', '221eeee1-8cfe-4b66-ab33-da1a852dc706', NULL, 0),
('cf6fd4ac-0ddb-40d1-a5da-6ce3ecc7e9a8', '3109de85-558a-490c-800e-fc5e7b50ddeb', '75decbb3-b56b-4afd-8730-89c26ea5b4ed', '08b2ee8f-4f28-4345-bb93-aa71a011a786', NULL, 0),
('d673e7fc-790d-4d92-8996-3881bec6cb95', '35700470-4d37-4e3d-8082-6e6d96918802', 'e5d6626e-6977-4d38-8fab-0df2260574b3', 'f714ae17-d1b5-4977-bc89-eb6862444124', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 1),
('e1fe7958-2f51-4bac-a789-2426e58b2217', 'ec38b7ae-dcb7-4d47-83a0-5592bda0cf0a', '8586c3e6-330e-4d8c-a13e-44e6ca6a9943', '08b2ee8f-4f28-4345-bb93-aa71a011a786', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 1),
('e8be20f1-7e1e-45ee-b46f-115cb7fecb37', '35700470-4d37-4e3d-8082-6e6d96918802', '997a7efc-e1f0-4524-b251-95cadf0fd8bf', '181fa2e1-96c0-497e-b036-a78712f18de3', '2da068c9-d1e8-4aa0-9e6a-f631eae3aa76', 0),
('ec156f15-a6a2-4e99-885d-b6f44817c503', 'f255176b-9e3e-4a09-ad3c-9821a7e3fb06', 'f8ed5473-4a43-4b35-8bbf-c838e44cc46f', '0a1df234-560c-477b-b7fe-d3b5e64e8576', '221eeee1-8cfe-4b66-ab33-da1a852dc706', 1),
('edc76c04-9914-48b8-9388-1efb27ca1abd', '58e87852-5dec-41a8-b602-0523bd93692a', '1a357ca9-8cc9-412e-b9bc-5625b08e027e', 'f714ae17-d1b5-4977-bc89-eb6862444124', '181fa2e1-96c0-497e-b036-a78712f18de3', 0),
('ee347c29-8345-4953-9c80-10040b0df386', 'f255176b-9e3e-4a09-ad3c-9821a7e3fb06', 'c7dabbcd-54e6-4471-a03b-631a2017df02', '9d2f4509-c3aa-4bae-bb13-0bfb95014b7b', '221eeee1-8cfe-4b66-ab33-da1a852dc706', 2),
('f8a9ecd8-701e-42f2-86ab-39f66fa36acf', '58e87852-5dec-41a8-b602-0523bd93692a', 'd1e21970-54b8-465f-9a37-f852e503ac4b', 'f714ae17-d1b5-4977-bc89-eb6862444124', '7250b119-7c62-4e7f-a24b-7a4552743c51', 2),
('fd90dff3-9dbd-49f7-963e-04de64a0e06e', 'f714ae17-d1b5-4977-bc89-eb6862444124', '488f789f-646e-4bd6-9658-7d57c19ce51a', '096b030b-f032-448a-961d-1907898e8458', '1d167c21-1aef-44a6-800e-d570569b8f7c', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `SkillDefinition`
--

CREATE TABLE `SkillDefinition` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `SkillDefinition`
--

INSERT INTO `SkillDefinition` (`id`, `name`, `type`, `description`, `createdAt`, `updatedAt`) VALUES
('00d17042-9d76-4ad8-a89d-c8e5d10d8463', 'Armas Brancas', 'VAMPIRE', NULL, '2026-07-04 16:40:33.090', '2026-07-04 16:40:33.090'),
('05127c64-f20e-4340-9dcb-9cd39bd578a6', 'Armas Brancas', 'MAGE', NULL, '2026-07-04 16:40:33.334', '2026-07-04 16:40:33.334'),
('07b45576-7589-4250-8b4e-2c51bcd0628f', 'Armas de Fogo', 'MAGE', NULL, '2026-07-04 16:40:33.319', '2026-07-04 16:40:33.319'),
('08d77eec-38f6-4448-b9d5-230a2e12f17d', 'Empatia', 'MAGE', NULL, '2026-07-04 16:40:33.274', '2026-07-04 16:40:33.274'),
('0953362a-1a54-4dc6-b6f7-1da179148bbf', 'conducao_moto', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000'),
('09e58fe7-0ad0-4340-b4cc-4858503bc260', 'Condução', 'VAMPIRE', NULL, '2026-07-04 16:40:33.123', '2026-07-04 16:40:33.123'),
('0be60180-1759-4c07-a241-37180c58b80f', 'esquiva', 'TALENTOS', 'Gerado automaticamente', '2026-07-09 17:15:56.000', '2026-07-09 17:15:56.000'),
('0cb581cc-5627-48f5-b9c0-84f7338b88d3', 'academia', 'CONHECIMENTOS', 'Gerado automaticamente', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000'),
('0e62f0a7-be5b-4a29-93c3-a9fd6f27829d', 'Liderança', 'VAMPIRE', NULL, '2026-07-04 16:40:33.172', '2026-07-04 16:40:33.172'),
('0fede81e-65ae-41b3-9744-a38bf21eac60', 'Liderança', 'MAGE', NULL, '2026-07-04 16:40:33.289', '2026-07-04 16:40:33.289'),
('1bc0ae91-be85-4e96-ac4d-6430c40f827f', 'Armas de Fogo', 'VAMPIRE', NULL, '2026-07-04 16:40:33.108', '2026-07-04 16:40:33.108'),
('1da140aa-ce9e-4085-97c0-49554751335a', 'Investigação', 'MAGE', NULL, '2026-07-04 16:40:33.385', '2026-07-04 16:40:33.385'),
('1e54afde-0908-44ca-9085-05565bcb7f95', 'Artes Marciais', 'MAGE', NULL, '2026-07-04 16:40:33.324', '2026-07-04 16:40:33.324'),
('21911b32-d5ba-4ebb-9491-44085077084e', 'medicina_primeiros_socorros', 'NIVEL_1', 'Gerado automaticamente', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000'),
('27b60157-4fc9-4da8-b021-cc5032f25b84', 'Direito', 'MAGE', NULL, '2026-07-04 16:40:33.390', '2026-07-04 16:40:33.390'),
('2862c2c3-adfb-4f2a-880e-d34d0807872c', 'linguistica', 'CONHECIMENTOS', 'Gerado automaticamente', '2026-07-09 17:15:56.000', '2026-07-09 17:15:56.000'),
('2908b1f5-ffa1-42a8-afea-94f296274616', 'Ciência', 'MAGE', NULL, '2026-07-04 16:40:33.412', '2026-07-04 16:40:33.412'),
('2c27bf26-8ace-4c64-83ce-a8e09bff13ec', 'Etiqueta', 'VAMPIRE', NULL, '2026-07-04 16:40:33.156', '2026-07-04 16:40:33.156'),
('2eb0c354-58f5-4d14-b7ce-db66f8db25a8', 'artes_marciais', 'PERICIAS', 'Gerado automaticamente', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000'),
('3e6a90c0-acf2-4799-ab1c-364e25a500e6', 'etiqueta_underground', 'PERICIAS', 'Gerado automaticamente', '2026-07-09 17:19:40.000', '2026-07-09 17:19:40.000'),
('4205111f-2065-49a2-ada5-60e5c328b876', 'Performance', 'VAMPIRE', NULL, '2026-07-04 16:40:33.183', '2026-07-04 16:40:33.183'),
('426434a5-c92c-4f9a-9031-3baa4c4b5428', 'Finanças', 'VAMPIRE', NULL, '2026-07-04 16:40:33.212', '2026-07-04 16:40:33.212'),
('443f7320-b393-4008-8984-17ae5889d0ce', 'Briga', 'MAGE', NULL, '2026-07-04 16:40:33.269', '2026-07-04 16:40:33.269'),
('44cfe73f-6883-466e-8fbb-f515221bfac0', 'Medicina', 'VAMPIRE', NULL, '2026-07-04 16:40:33.221', '2026-07-04 16:40:33.221'),
('48dc8239-417f-47b9-96fe-f3595f24eafc', 'Sagacidade', 'VAMPIRE', NULL, '2026-07-04 16:40:33.192', '2026-07-04 16:40:33.192'),
('4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 'Etiqueta', 'MAGE', NULL, '2026-07-04 16:40:33.315', '2026-07-04 16:40:33.315'),
('4ff34328-d627-4893-88a5-9d552a3a4a4f', 'Empatia com Animais', 'VAMPIRE', NULL, '2026-07-04 16:40:33.151', '2026-07-04 16:40:33.151'),
('516e56c8-f4d8-4a26-94cf-ba0a36c6daa0', 'conducao_caminhao', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000'),
('55d18c71-b494-4c22-900d-302f645d3c34', 'Erudição', 'VAMPIRE', NULL, '2026-07-04 16:40:33.207', '2026-07-04 16:40:33.207'),
('5e81cb62-9bb3-4ca6-b82d-5044f8a1a8eb', 'Intimidação', 'VAMPIRE', NULL, '2026-07-04 16:40:33.164', '2026-07-04 16:40:33.164'),
('5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 'Manha', 'MAGE', NULL, '2026-07-04 16:40:33.294', '2026-07-04 16:40:33.294'),
('61e73dee-307b-41b0-a986-1d06afc668cd', 'oficios_eletronica', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000'),
('63d12e39-1156-4406-adb3-55205e5564ea', 'psicologia_urbana', 'CONHECIMENTOS', 'Gerado automaticamente', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000'),
('653011cf-0ac0-4bd6-8869-26961601b647', 'ciencia_quimica', 'NIVEL_3', 'Gerado automaticamente', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000'),
('668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 'Tecnologia', 'MAGE', NULL, '2026-07-04 16:40:33.354', '2026-07-04 16:40:33.354'),
('68844fb0-bd47-4a45-ad33-51f3d046a30d', 'Esoterismo', 'MAGE', NULL, '2026-07-04 16:40:33.379', '2026-07-04 16:40:33.379'),
('689563da-dfc5-4bf0-93b6-1e23665157cb', 'seguranca', 'PERICIAS', 'Gerado automaticamente', '2026-07-09 17:15:56.000', '2026-07-09 17:15:56.000'),
('69e96c2f-edb0-4ee6-b410-eff19845b54d', 'Percepção', 'VAMPIRE', NULL, '2026-07-04 16:40:33.231', '2026-07-04 16:40:33.231'),
('6c29e5e5-481f-4b9c-ba21-fefa2e284f49', 'Consciência', 'MAGE', NULL, '2026-07-04 16:40:33.264', '2026-07-04 16:40:33.264'),
('6dbd50b8-2452-44dc-9e16-7a0d037c7916', 'Acadêmicos', 'MAGE', NULL, '2026-07-04 16:40:33.359', '2026-07-04 16:40:33.359'),
('7143875c-5c06-43da-a3ad-c89c5d621b99', 'ciencia_botanica', 'CONHECIMENTOS', 'Gerado automaticamente', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000'),
('73134799-066f-444b-ae55-109d3bfcef57', 'sobrevivencia_rua', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000'),
('75ba9355-1c76-4a0b-90d5-85d684b7f590', 'sobrevivencia_urbana', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000'),
('787366b0-f856-4dce-ab95-90e5f38eb0e5', 'Medicina', 'MAGE', NULL, '2026-07-04 16:40:33.395', '2026-07-04 16:40:33.395'),
('7ae771ff-4e14-4df3-b4d1-9b9ceb3ccc6c', 'Pesquisa', 'MAGE', NULL, '2026-07-04 16:40:33.339', '2026-07-04 16:40:33.339'),
('8063337d-1f60-49ea-96aa-c18598e2f1ea', 'cinema_e_literatura', 'CONHECIMENTOS', 'Gerado automaticamente', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000'),
('8064844d-9e75-40ee-8616-bfa2e6596acd', 'Lábia', 'MAGE', NULL, '2026-07-04 16:40:33.299', '2026-07-04 16:40:33.299'),
('80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 'Subterfúgio', 'VAMPIRE', NULL, '2026-07-04 16:40:33.197', '2026-07-04 16:40:33.197'),
('83f7ceb4-cf67-408e-8d5f-8912cc8de1d8', 'Enigmas', 'MAGE', NULL, '2026-07-04 16:40:33.374', '2026-07-04 16:40:33.374'),
('871a5920-4680-4daf-965e-bd18449c4db2', 'Atletismo', 'VAMPIRE', NULL, '2026-07-04 16:40:33.114', '2026-07-04 16:40:33.114'),
('87ed59fb-09b7-41a2-9705-7beab70efa70', 'Condução', 'MAGE', NULL, '2026-07-04 16:40:33.309', '2026-07-04 16:40:33.309'),
('89dc28e4-a3c5-41bb-91d2-5e9e9c1e191d', 'manha_crime', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000'),
('90687584-48a3-40f6-af4e-f9bf09a1a4cb', 'Ocultismo', 'MAGE', NULL, '2026-07-04 16:40:33.401', '2026-07-04 16:40:33.401'),
('9076200f-0aa7-4e59-a226-5137311cd960', 'oficios_fotografia', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:44.000', '2026-07-09 17:19:44.000'),
('95a1aedc-366f-40fe-9020-edaccbe51ed8', 'Persuasão', 'VAMPIRE', NULL, '2026-07-04 16:40:33.188', '2026-07-04 16:40:33.188'),
('9729df70-24d2-4b76-9a39-9ad67f4ba89e', 'computador', 'CONHECIMENTOS', 'Gerado automaticamente', '2026-07-09 17:15:56.000', '2026-07-09 17:15:56.000'),
('995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 'Esportes', 'MAGE', NULL, '2026-07-04 16:40:33.259', '2026-07-04 16:40:33.259'),
('9c957410-9b1b-445a-941d-5cee6184e43f', 'oficios_armeiro', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:44.000', '2026-07-09 17:19:44.000'),
('a28466bd-b29e-43fc-87ce-465f189bd152', 'oficios_falsificacao', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:44.000', '2026-07-09 17:19:44.000'),
('a3b5035c-5f9c-435d-b0c7-d25272f30861', 'armas_brancas', 'PERICIAS', 'Gerado automaticamente', '2026-07-09 17:15:57.000', '2026-07-09 17:15:57.000'),
('a4ea19d5-145c-4605-b7c1-e488995aed4d', 'Artes', 'MAGE', NULL, '2026-07-04 16:40:33.255', '2026-07-04 16:40:33.255'),
('ae5d0cc7-9755-4f9d-8398-87cc1eaa4e9f', 'armas_de_fogo', 'PERICIAS', 'Gerado automaticamente', '2026-07-09 17:15:56.000', '2026-07-09 17:15:56.000'),
('b13f0eee-e81b-4d30-ae1b-2d6765938de7', 'oficios_laboratorio', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000'),
('b2326229-400c-4bc6-8772-4f3257dfa810', 'Tecnologia', 'VAMPIRE', NULL, '2026-07-04 16:40:33.240', '2026-07-04 16:40:33.240'),
('b2699299-24e8-4255-9cde-e7ce81efd674', 'Sobrevivência', 'MAGE', NULL, '2026-07-04 16:40:33.349', '2026-07-04 16:40:33.349'),
('b63554b8-e343-492a-ba2d-057f831c22aa', 'Prontidão', 'MAGE', NULL, '2026-07-04 16:40:33.250', '2026-07-04 16:40:33.250'),
('b8a2fa48-a7b9-40dc-9090-6f17ecf0df43', 'Manha', 'VAMPIRE', NULL, '2026-07-04 16:40:33.178', '2026-07-04 16:40:33.178'),
('bd89ae90-55ab-473b-92b1-3c6bae308f67', 'Cosmologia', 'MAGE', NULL, '2026-07-04 16:40:33.370', '2026-07-04 16:40:33.370'),
('bfce5bd1-a23f-4e13-9f39-e315f6fed149', 'Expressão', 'MAGE', NULL, '2026-07-04 16:40:33.279', '2026-07-04 16:40:33.279'),
('c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 'Furtividade', 'MAGE', NULL, '2026-07-04 16:40:33.344', '2026-07-04 16:40:33.344'),
('c84de1c5-d785-4153-aa67-9d6704d2ec88', 'Meditação', 'MAGE', NULL, '2026-07-04 16:40:33.330', '2026-07-04 16:40:33.330'),
('c981e77f-d7e4-45f5-a3b4-1bb8123d38fe', 'Ciência', 'VAMPIRE', NULL, '2026-07-04 16:40:33.202', '2026-07-04 16:40:33.202'),
('cf2cfe23-2434-4e75-9018-5d225996fbb9', 'empatia_com_animais', 'PERICIAS', 'Gerado automaticamente', '2026-07-09 17:15:57.000', '2026-07-09 17:15:57.000'),
('d40b2523-58e3-4323-a8be-a2dafa4bc728', 'Briga', 'VAMPIRE', NULL, '2026-07-04 16:40:33.118', '2026-07-04 16:40:33.118'),
('d5b9c1cf-ab25-46bd-9005-876cdc041bc5', 'oficios_mecanica', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000'),
('d71d4e38-9d59-457f-bf1c-879883abbda3', 'Investigação', 'VAMPIRE', NULL, '2026-07-04 16:40:33.216', '2026-07-04 16:40:33.216'),
('db1c0914-7c79-4be6-902a-331e1ff01038', 'conducao_ambulancia', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:44.000', '2026-07-09 17:19:44.000'),
('dc608ac5-e286-4360-a820-a22dedb5232b', 'Ofícios', 'MAGE', NULL, '2026-07-04 16:40:33.304', '2026-07-04 16:40:33.304'),
('dd36667a-def8-4ff5-af0d-0ac0d7371746', 'armas_brancas_pesadas', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000'),
('e1301b41-ce52-4c7e-8436-86fa58f2bd68', 'Política', 'MAGE', NULL, '2026-07-04 16:40:33.407', '2026-07-04 16:40:33.407'),
('e256b4d2-3bb8-4edf-b0db-a103baa255fa', 'erudicao_teologia', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:44.000', '2026-07-09 17:19:44.000'),
('e3a3f9b9-4f8c-46e4-9776-8b8c116be732', 'Política', 'VAMPIRE', NULL, '2026-07-04 16:40:33.236', '2026-07-04 16:40:33.236'),
('e3eaa266-5a88-42e9-8cd8-99306ae98732', 'sobrevivencia_subterranea', 'NIVEL_2', 'Gerado automaticamente', '2026-07-09 17:19:42.000', '2026-07-09 17:19:42.000'),
('e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 'Intimidação', 'MAGE', NULL, '2026-07-04 16:40:33.284', '2026-07-04 16:40:33.284'),
('e8db8016-d587-4956-9524-a3a65d4c3b42', 'Ofícios', 'VAMPIRE', NULL, '2026-07-04 16:40:33.141', '2026-07-04 16:40:33.141'),
('ea077801-d4b1-4954-94cd-f6b83139daaf', 'Sobrevivência', 'VAMPIRE', NULL, '2026-07-04 16:40:33.146', '2026-07-04 16:40:33.146'),
('ea9cf46b-75b2-42ca-a8aa-c83b5da503f4', 'Computação', 'MAGE', NULL, '2026-07-04 16:40:33.364', '2026-07-04 16:40:33.364'),
('ed013ea8-f060-4925-be66-c79549e3220f', 'medicina_trauma', 'NIVEL_1', 'Gerado automaticamente', '2026-07-09 17:19:43.000', '2026-07-09 17:19:43.000'),
('ef6c68d1-47c8-4d08-821a-aa800deecac2', 'Ladroagem', 'VAMPIRE', NULL, '2026-07-04 16:40:33.134', '2026-07-04 16:40:33.134'),
('f3110672-4e93-4fdf-8f4f-d97e9c1cbb38', 'Ocultismo', 'VAMPIRE', NULL, '2026-07-04 16:40:33.226', '2026-07-04 16:40:33.226'),
('f6388b17-9580-4b2e-bfe2-acbdd3106d89', 'oficios_herbalismo', 'PERICIAS', 'Gerado automaticamente', '2026-07-09 17:19:41.000', '2026-07-09 17:19:41.000'),
('fce38fc7-60db-41e7-8c46-eb3b8a2bea97', 'Furtividade', 'VAMPIRE', NULL, '2026-07-04 16:40:33.128', '2026-07-04 16:40:33.128');

-- --------------------------------------------------------

--
-- Estrutura para tabela `StatusDefinition`
--

CREATE TABLE `StatusDefinition` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `gameStyle` varchar(191) NOT NULL,
  `maxValue` int(11) NOT NULL,
  `defaultInitialValue` int(11) NOT NULL DEFAULT 0,
  `description` text DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `StatusDefinition`
--

INSERT INTO `StatusDefinition` (`id`, `name`, `gameStyle`, `maxValue`, `defaultInitialValue`, `description`, `createdAt`, `updatedAt`) VALUES
('3bac2b72-4e36-4054-971b-9297f6fd54c0', 'Fome', 'VAMPIRE', 5, 1, NULL, '2026-07-04 16:40:33.446', '2026-07-04 16:40:33.446'),
('600ed053-64d4-4a2a-908c-d3a6f9eb6329', 'Paradoxo', 'MAGE', 20, 0, NULL, '2026-07-04 16:40:33.466', '2026-07-04 16:40:33.466'),
('63b9dd9a-5532-4c30-ba9a-da601b3aaf4b', 'Honra', 'WEREWOLF', 10, 0, NULL, '2026-07-04 16:40:33.491', '2026-07-04 16:40:33.491'),
('64e191f1-3898-4387-9e33-6c126fe69a9c', 'Quintessência', 'MAGE', 20, 5, NULL, '2026-07-04 16:40:33.461', '2026-07-04 16:40:33.461'),
('72bed5b7-06d3-4da8-9e3c-8f75115ea478', 'Força de Vontade', 'UNIVERSAL', 10, 5, NULL, '2026-07-04 16:40:33.435', '2026-07-04 16:40:33.435'),
('8c4dcd7a-6669-4404-b07e-33bcb46e55bb', 'Vitalidade', 'UNIVERSAL', 10, 5, NULL, '2026-07-04 16:40:33.417', '2026-07-04 16:40:33.417'),
('995b063f-bd72-4c26-9618-fd3442c57339', 'Potência de Sangue', 'VAMPIRE', 10, 1, NULL, '2026-07-04 16:40:33.451', '2026-07-04 16:40:33.451'),
('aaedf620-23a3-4f9b-86fe-3561112becad', 'Sabedoria', 'WEREWOLF', 10, 0, NULL, '2026-07-04 16:40:33.496', '2026-07-04 16:40:33.496'),
('acbfe932-0eaa-45e4-8885-dbba37851d47', 'Fúria', 'WEREWOLF', 10, 1, NULL, '2026-07-04 16:40:33.471', '2026-07-04 16:40:33.471'),
('ceda6336-478b-4f57-b9bd-1c695090a4a1', 'Arete', 'MAGE', 10, 1, NULL, '2026-07-04 16:40:33.456', '2026-07-04 16:40:33.456'),
('d3ab7a3c-8288-49f8-896d-6401edd9d5fb', 'Glória', 'WEREWOLF', 10, 0, NULL, '2026-07-04 16:40:33.486', '2026-07-04 16:40:33.486'),
('d7029276-c2ec-4961-b8a8-2f9fe8d16118', 'Gnose', 'WEREWOLF', 10, 1, NULL, '2026-07-04 16:40:33.481', '2026-07-04 16:40:33.481'),
('fc2e5692-9f47-4a32-9b90-f4725640e480', 'Humanidade', 'VAMPIRE', 10, 7, NULL, '2026-07-04 16:40:33.440', '2026-07-04 16:40:33.440');

-- --------------------------------------------------------

--
-- Estrutura para tabela `User`
--

CREATE TABLE `User` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `role` enum('ADMIN','MESTRE','JOGADOR') NOT NULL DEFAULT 'JOGADOR',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `User`
--

INSERT INTO `User` (`id`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
('37339df8-b042-458d-8d9c-d15cf18adbd8', 'Sid', 'xzsidneyl@gmail.com', '$2a$10$9CEO/bSvSFp2GYBaMHpPhu88LIPf8ZiKG0ADSIWnG271362P8zRIm', 'MESTRE', '2026-07-01 01:15:07.669', '2026-07-01 01:15:07.669'),
('534cfda8-25d9-4fc5-95a9-3607d5adae68', 'Jogador Teste', 'test@logan.com', '$2a$10$cajohFMpWwQ9eBY/F/orOegsKghsfnXodT9lSfo6LVJSmAPNsO6U2', 'JOGADOR', '2026-07-04 18:53:20.492', '2026-07-04 18:53:20.492'),
('cf1cc44d-11bf-41f6-b620-5c6c1a0fc977', 'Sidney', 'xzsidney@yahoo.com.br', '$2a$10$cajohFMpWwQ9eBY/F/orOegsKghsfnXodT9lSfo6LVJSmAPNsO6U2', 'JOGADOR', '2026-07-01 01:09:58.522', '2026-07-01 01:09:58.522');

-- --------------------------------------------------------

--
-- Estrutura para tabela `VampireClaDefinition`
--

CREATE TABLE `VampireClaDefinition` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `sectAlignment` varchar(255) NOT NULL,
  `mainDisciplines` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`mainDisciplines`)),
  `weaknessName` varchar(255) NOT NULL,
  `weaknessDescription` text NOT NULL,
  `weaknessExamples` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`weaknessExamples`)),
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `VampireClaDefinition`
--

INSERT INTO `VampireClaDefinition` (`id`, `name`, `nickname`, `description`, `sectAlignment`, `mainDisciplines`, `weaknessName`, `weaknessDescription`, `weaknessExamples`, `createdAt`, `updatedAt`) VALUES
('b9641c48-7bb2-11f1-a1c9-e89e5efddb4f', 'Banu Haqim', 'Juízes / Feiticeiros de Assam', 'Guerreiros, juízes e estudiosos que operavam nas sombras do Oriente Médio. São movidos por um senso estrito de justiça e uma fome focada no sangue de outros vampiros.', 'Camarilla', '[\"Ofuscação\",\"Rapidez\",\"Feitiçaria de Sangue\"]', 'Fome de Julgamento / Vício em Vitáe', 'Quando um Banu Haqim bebe o sangue de outro vampiro, ele deve fazer um teste para não entrar em um frenesi de fome, impulsionado pelo desejo de drenar o alvo completamente.', NULL, '2026-07-09 16:24:56.993', '2026-07-09 16:24:56.993'),
('b9642f5a-7bb2-11f1-a1c9-e89e5efddb4f', 'Brujah', 'A Ralé', 'A Ralé, rebeldes e insurgentes, lutando com paixão por suas causas desesperadas. Os Brujah sonham com uma sociedade perfeita para os vampiros[cite: 15].', 'Anarquistas', '[\"Presença\",\"Rapidez\",\"Potência\"]', 'Paixão Ardente', 'A dificuldade dos testes para se evitar o frenesi é dois níveis mais alta para os membros do clã Brujah[cite: 15].', NULL, '2026-07-09 16:24:56.994', '2026-07-09 16:24:56.994'),
('b96440ad-7bb2-11f1-a1c9-e89e5efddb4f', 'Gangrel', 'Forasteiro', 'Os nômades Forasteiros são ferozes e selvagens. Estes errantes solitários são a fonte de muitas das histórias que comparam os vampiros a bestas sombrias[cite: 15].', 'Anarquistas', '[\"Fortitude\",\"Metamorfose\",\"Animalismo\"]', 'Marcas da Besta', 'Toda vez que um Gangrel entra em estado de frenesi ele ganha uma característica animalesca permanente. Para cada cinco características adquiridas, o Gangrel perde um ponto em um Atributo Social[cite: 15].', NULL, '2026-07-09 16:24:56.994', '2026-07-09 16:24:56.994'),
('b96450c7-7bb2-11f1-a1c9-e89e5efddb4f', 'Malkavianos', 'Lunáticos', 'Abençoados e amaldiçoados com uma percepção fragmentada da realidade. A loucura do clã esconde verdades ocultas que os outros membros são incapazes de enxergar.', 'Camarilla', '[\"Auspícios\",\"Ofuscação\",\"Demência\"]', 'Perturbação Mental', 'Todo Malkaviano possui uma psicose ou distúrbio mental permanente que se manifesta de forma mais agressiva quando o personagem sofre falhas críticas ou surtos de estresse.', '[\"Paranoia Obsessiva\",\"Visões e Alucinações Auditivas\"]', '2026-07-09 16:24:56.994', '2026-07-09 16:24:56.994'),
('b9645fce-7bb2-11f1-a1c9-e89e5efddb4f', 'Ministério', 'As Serpentes / Ministry', 'Antigos Seguidores de Set. São mestres da mentira, subversão, corrupção espiritual e quebra de dogmas sociais[cite: 17]. Operam como os donos dos segredos e prazeres ilícitos da noite.', 'Anarquistas', '[\"Ofuscação\",\"Presença\",\"Metamorfose\"]', 'Aversão à Luz / Corrupção da Carne', 'As Serpentes sofrem penalidades severas em seus dados de ação e testes físicos se expostas a luzes artificiais intensas, holofotes ou chamas diretas.', NULL, '2026-07-09 16:24:56.995', '2026-07-09 16:24:56.995'),
('b9646e10-7bb2-11f1-a1c9-e89e5efddb4f', 'Nosferatu', 'Rato de Esgoto', 'Deformados e reclusos, os horrorosos Ratos de Esgoto estão para sempre banidos da sociedade humana, mas guardam segredos sobre a escuridão que os esconde[cite: 15].', 'Camarilla', '[\"Ofuscação\",\"Animalismo\",\"Potência\"]', 'Deformidade Repugnante', 'Aparência permanentemente 0. A maioria das ações Sociais baseadas na primeira impressão falham automaticamente[cite: 15].', '[\"Carne e pele secas e quebradiças, deixando pequenos pedaços que parecem madeira seca pelo chão[cite: 15]\",\"Nenhum pêlo no corpo e pele com a viscosidade de uma lesma, deixando muco onde encostar[cite: 15]\"]', '2026-07-09 16:24:56.995', '2026-07-09 16:24:56.995'),
('b9647ebf-7bb2-11f1-a1c9-e89e5efddb4f', 'Ravnos', 'Malandros / Errantes', 'Nômades mestres da ilusão, truques mentais e fuga de amarras sociais. São caçados pela sua reputação de ladrões e trapaceiros incuráveis do submundo.', 'Autônomos / Independentes', '[\"Animalismo\",\"Ofuscação\",\"Quimerismo / Presença\"]', 'A Besta Inquieta / Vício do Estigma', 'Um Ravnos não consegue permanecer no mesmo local por muito tempo. Se ele dormir no mesmo refúgio por mais de uma noite consecutiva, a Besta racha sua mente, drenando sua Força de Vontade.', NULL, '2026-07-09 16:24:56.996', '2026-07-09 16:24:56.996'),
('b9648d96-7bb2-11f1-a1c9-e89e5efddb4f', 'Salubri', 'Ciclistas / Os De Três Olhos', 'Uma linhagem caçada e quase extinta de curandeiros e guerreiros místicos. São marcados por possuírem um terceiro olho físico na testa e por carregar o peso do fardo espiritual da humanidade.', 'Autônomos / Independentes', '[\"Auspícios\",\"Fortitude\",\"Obeah / Valeren\"]', 'Alimentação Dolorosa / O Terceiro Olho', 'O terceiro olho do Salubri chora lágrimas de sangue quando ele usa seus poderes. Além disso, ele não consegue se alimentar de uma presa que não dê o sangue voluntariamente sem sofrer remorso mecânico.', NULL, '2026-07-09 16:24:56.996', '2026-07-09 16:24:56.996'),
('b9649cdf-7bb2-11f1-a1c9-e89e5efddb4f', 'Toreador', 'Degenerado', 'Amantes da arte e da estética, os Degenerados estão presos na estagnação da não-vida. Os Toreador são apaixonados e decadentes[cite: 15].', 'Camarilla', '[\"Presença\",\"Rapidez\",\"Auspícios\"]', 'Transe da Beleza / Fascinação', 'Quando um Toreador vê algo realmente maravilhoso, precisa ser bem sucedido num teste de Autocontrole (dif. 6) ou se encantará. O Toreador será tomado por um êxtase de fascinação durante uma cena e não pode se defender se atacado[cite: 15].', NULL, '2026-07-09 16:24:56.996', '2026-07-09 16:24:56.996'),
('b964ab26-7bb2-11f1-a1c9-e89e5efddb4f', 'Tremere', 'Feiticeiro', 'Um clã de magos do sangue, os Feiticeiros não são nada confiáveis... e sim temíveis[cite: 15].', 'Camarilla', '[\"Feitiçaria de Sangue\",\"Auspícios\",\"Dominação\"]', 'Laço de Sangue do Conselho', 'Todo neófito Tremere tomou do sangue dos sete anciões do clã. A dificuldade de qualquer tentativa de Dominação feita por um superior do clã é reduzida em 1. Um Tremere é fiel ao clã acima de tudo[cite: 15].', NULL, '2026-07-09 16:24:56.997', '2026-07-09 16:24:56.997'),
('b964b8ec-7bb2-11f1-a1c9-e89e5efddb4f', 'Tzimisce', 'Demônios / Construtores de Carne', 'Tiranos territoriais que dominavam os castelos do Leste Europeu. Possuem controle absoluto sobre a biologia e a ossatura, moldando a própria carne e a de suas vítimas como se fossem argila viva.', 'Autônomos / Independentes', '[\"Animalismo\",\"Auspicíos\",\"Vicissitude / Metamorfose\"]', 'Vínculo Territorial / Sono da Terra Natal', 'Um Tzimisce precisa dormir cercado por pelo menos um punhado de terra de um local de extrema importância histórica para ele (como sua terra natal ou seu local de refúgio inicial). Caso contrário, ele perde dados de ação a cada noite.', NULL, '2026-07-09 16:24:56.997', '2026-07-09 16:24:56.997'),
('b964c822-7bb2-11f1-a1c9-e89e5efddb4f', 'Ventrue', 'Sangue Azul', 'Relutantes membros aristocratas, os de Sangue Azul se reconciliam com sua maldição impondo as Tradições e a Máscara[cite: 15].', 'Camarilla', '[\"Dominação\",\"Fortitude\",\"Presença\"]', 'Paladar Exigente', 'Cada Ventrue só pode se alimentar de um tipo de sangue mortal[cite: 15].', '[\"Sangue de garotas jovens embriagadas com vinho[cite: 15]\",\"Sangue de adolescentes sob a influência de drogas[cite: 15]\"]', '2026-07-09 16:24:56.998', '2026-07-09 16:24:56.998'),
('b964d9c8-7bb2-11f1-a1c9-e89e5efddb4f', 'Sangues-Ralos', 'Thin-Bloods / Décima Quinta Geração', 'Vampiros de gerações muito distantes de Caim. O sangue deles é ralo e fraco[cite: 17]; eles são desprezados pelos anciões, mas possuem a capacidade única de andar sob o sol por alguns minutos e criar alquimia de sangue.', 'Autônomos / Banidos', '[\"Alquimia de Sangue-Ralo\"]', 'Fragilidade Clínica / Rejeição do Sangue', 'Não possuem clã ou disciplinas nativas estáveis[cite: 17]. Não conseguem criar carniçais ou laços de sangue normais e são caçados como anomalias pela Camarilla.', NULL, '2026-07-09 16:24:56.998', '2026-07-09 16:24:56.998'),
('b964e8f6-7bb2-11f1-a1c9-e89e5efddb4f', 'Caitiff', 'Os Sem-Clã', 'Vampiros abandonados ou cujos traços de sangue não manifestaram nenhuma característica de clã[cite: 17]. São vistos como bastardos e cidadãos de segunda classe na sociedade dos Membros.', 'Anarquistas / Autônomos', '[\"Qualquer (Custo de XP universalizado)\"]', 'Estigma Social / Ausência de Linhagem', 'Não possuem fraqueza biológica herdada, mas sofrem falha automática ou penalidades severas em testes de reputação, status e diplomacia com a Camarilla[cite: 17].', NULL, '2026-07-09 16:24:56.998', '2026-07-09 16:24:56.998');

-- --------------------------------------------------------

--
-- Estrutura para tabela `Wealth`
--

CREATE TABLE `Wealth` (
  `id` varchar(191) NOT NULL,
  `wealthType` varchar(191) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `Wealth`
--

INSERT INTO `Wealth` (`id`, `wealthType`, `description`) VALUES
('1d28c1a9-a1de-47c7-b53f-94ca57cbb3dd', 'Média-Baixa', NULL),
('27ca0bed-e78c-40d5-aa69-0c1d2ea58e7d', 'Baixa', NULL),
('c2a4c8a2-82a1-49ca-9dce-efe6153d4a43', 'Alta', NULL),
('cfe3a0f7-031b-4df6-8fc8-e18d1d7066b0', 'Altíssima', NULL),
('d8040dd5-a6e5-4165-bcf7-cdfc1efc0898', 'Média-Alta', NULL),
('f2f36c82-fc04-4109-93b2-d4016fbcfd13', 'Média', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `WerewolfTribeDefinition`
--

CREATE TABLE `WerewolfTribeDefinition` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `englishName` varchar(255) NOT NULL,
  `classicName` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `nationAlignment` varchar(255) NOT NULL,
  `mainGifts` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`mainGifts`)),
  `psychologicalFlawName` varchar(255) NOT NULL,
  `psychologicalFlawDescription` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `WerewolfTribeDefinition`
--

INSERT INTO `WerewolfTribeDefinition` (`id`, `name`, `englishName`, `classicName`, `description`, `nationAlignment`, `mainGifts`, `psychologicalFlawName`, `psychologicalFlawDescription`, `createdAt`, `updatedAt`) VALUES
('1a493dc5-22c0-4d15-995a-3bc8dbb05efe', 'Filhos de Gaia', 'TBD', NULL, 'Gerado automaticamente', 'TBD', '\"TBD\"', 'TBD', 'Os Filhos de Gaia são proibidos de derramar sangue humano desnecessariamente. Eles devem sempre tentar resolver conflitos com humanos mundanos através da diplomacia, intimidação pacífica ou contenção não-letal. Matar a sangue frio gera Harano imediato.', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000'),
('4c70cb44-b968-4799-8993-a86b0d412314', 'Andarilhos do Espelho (Stargazers)', 'TBD', NULL, 'Gerado automaticamente', 'TBD', '\"TBD\"', 'TBD', 'Os Andarilhos do Espelho buscam a iluminação através do desapego das paixões mundanas. Você não pode acumular grandes fortunas (Recursos acima de 2) ou se envolver em disputas de ego e liderança política dentro da Nação Garou sem sofrer penalidades místicas em sua Força de Vontade.', '2026-07-09 17:16:00.000', '2026-07-09 17:16:00.000'),
('6fd9b666-9fca-412b-a512-5a834cafaf4f', 'Galhardos', 'TBD', NULL, 'Gerado automaticamente', 'TBD', '\"TBD\"', 'TBD', 'A honra de um Galhardo reside em sua voz. Você nunca deve quebrar uma promessa feita sob juramento ou mentir deliberadamente para um irmão de matilha. Fazer isso quebra seu vínculo místico com o Cervo, causando perda imediata de Força de Vontade.', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000'),
('a8d60cb2-9eb3-4e44-ab9a-3543e221f88b', 'Crias de Fenris (Matilha Rebelde)', 'TBD', NULL, 'Gerado automaticamente', 'TBD', '\"TBD\"', 'TBD', 'Uma Cria de Fenris não pode recuar de um desafio físico ou demonstrar medo diante de um oponente. Fugir de uma luta justa ou render-se voluntariamente joga o personagem instantaneamente nas garras do desespero e do Harano.', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000'),
('b16cafa4-9786-4b23-85ad-0fb894cf5442', 'Caçadores das Tempestades', 'TBD', NULL, 'Gerado automaticamente', 'TBD', '\"TBD\"', 'TBD', 'Os Caçadores das Tempestades seguem leis estritas de sobrevivência do mais forte. Você nunca deve deixar uma presa ferida ou um agressor de Gaia escapar após iniciar uma caçada ativa. Abandonar uma trilha de sangue por covardia ou conveniência política mancha seu Renome perante os espíritos do inverno.', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000'),
('b37bc5a3-5987-4d6b-9458-6ab5248f3418', 'Garras Vermelhas', 'TBD', NULL, 'Gerado automaticamente', 'TBD', '\"TBD\"', 'TBD', 'Um Garra Vermelha não pode, em hipótese alguma, usar armas de fogo ou depender de tecnologias complexas criadas pela humanidade. Fazer isso é uma ofensa grave a Grifo e enfraquece sua conexão com seu lado espiritual.', '2026-07-09 17:15:59.000', '2026-07-09 17:15:59.000'),
('b6c7fbdd-3ffc-4746-a75a-1d3d2ebe58c6', 'Conselho dos Fantasmas', 'TBD', NULL, 'Gerado automaticamente', 'TBD', '\"TBD\"', 'TBD', 'O Conselho dos Fantasmas lida com segredos perigosos demais para mentes comuns. Você nunca deve revelar a natureza exata de um fetiche, ritual proibido ou espírito selado para membros de outras tribos ou humanos, sob o risco de corromper o próprio conhecimento.', '2026-07-09 17:16:00.000', '2026-07-09 17:16:00.000'),
('b96502a2-7bb2-11f1-a1c9-e89e5efddb4f', 'Senhores das Sombras', 'Shadow Lords', NULL, 'Mestres da política e da intimidação, operam através de manipulação e controle para liderar e expor a corrupção.', 'Membros da Nação Garou', '[\"Dons do Augúrio: Philodox\",\"Dons Universais da Cidade\"]', 'Orgulho Tirânico', 'Sua obsessão por controle e hierarquia faz com que sofram penalidades em dados de Empatia caso precisem aceitar ordens de outrem ou demonstrar fraqueza social[cite: 4].', '2026-07-09 16:24:56.999', '2026-07-09 16:24:56.999'),
('b9651302-7bb2-11f1-a1c9-e89e5efddb4f', 'Crias de Fenris', 'Get of Fenris', NULL, 'Guerreiros implacáveis cujo extremismo os levou a serem marginalizados ou expulsos da Nação Garou tradicional.', 'Culto Extremista (Marginalizados / Expulsos)', '[\"Dons do Augúrio: Ahroun\"]', 'Hauglosk Fanático / Fúria Cega', 'Devido ao seu extremismo de combate, a dificuldade para evitar o estado de Hauglosk (fanatismo cego) é agravada, atacando aliados que mostrem qualquer sinal de hesitação[cite: 1, 4].', '2026-07-09 16:24:56.999', '2026-07-09 16:24:56.999'),
('b9652288-7bb2-11f1-a1c9-e89e5efddb4f', 'Fúrias Negras', 'Black Furies', NULL, 'Guerreiras ferozes dedicadas a proteger os inocentes e os lugares sagrados da natureza. Em São Paulo, atuam fortemente na proteção de minorias e mananciais[cite: 17].', 'Membros da Nação Garou', '[\"Dons do Augúrio: Ahroun\",\"Vida\"]', 'Vingança Justa / Fúria contra o Opressor', 'Sofrem dificuldades aumentadas em rolagens de Autocontrole se testemunharem atos de opressão contra inocentes ou profanação de solo sagrado[cite: 4].', '2026-07-09 16:24:57.000', '2026-07-09 16:24:57.000'),
('b9653413-7bb2-11f1-a1c9-e89e5efddb4f', 'Portadores da Luz', 'Brought Light', 'Crianças de Gaia', 'Pacificadores e diplomatas que buscam a cura e a reconciliação no fragmentado submundo sobrenatural.', 'Membros da Nação Garou', '[\"Dons do Augúrio: Galliard\",\"Vida\"]', 'Aversão ao Conflito / Hesitação Pacifista', 'Caso tentem iniciar um ataque físico surpresa ou uma ação letal direta desprovida de negociação prévia, perdem dados da pilha de ação[cite: 4].', '2026-07-09 16:24:57.000', '2026-07-09 16:24:57.000'),
('b965432f-7bb2-11f1-a1c9-e89e5efddb4f', 'Peregrinos Silenciosos', 'Silent Striders', NULL, 'Viajantes místicos que atuam como mensageiros e lidam com os mortos. Estão sempre em movimento pelas rodovias e estradas.', 'Membros da Nação Garou', '[\"Rapidez\",\"Correspondência / Espírito\"]', 'Assombrado pelos Mortos', 'Devido à sua proximidade com o além, fantasmas e aparições perturbam constantemente seu descanso no refúgio, gerando riscos de testes de Força de Vontade ao amanhecer[cite: 4].', '2026-07-09 16:24:57.001', '2026-07-09 16:24:57.001'),
('b96551fa-7bb2-11f1-a1c9-e89e5efddb4f', 'Andarilhos do Asfalto', 'Glass Walkers', NULL, 'Especialistas em tecnologia e urbanismo, adaptados à vida moderna. Controlam grandes territórios industriais e digitais em São Paulo[cite: 17].', 'Membros da Nação Garou', '[\"Dons Universais da Cidade\",\"Tempo / Matéria\"]', 'Desconexão com o Selvagem / Película Espessa', 'Sua mente é altamente tecnológica e cética, o que aumenta em +2 a dificuldade de qualquer teste místico de travessia espiritual para a Umbra Selvagem[cite: 4].', '2026-07-09 16:24:57.001', '2026-07-09 16:24:57.001'),
('b965615f-7bb2-11f1-a1c9-e89e5efddb4f', 'Senhores da Presa', 'Silver Fangs', NULL, 'A nobreza tradicional dos lobisomens, agora lutando para manter sua relevância em um mundo fragmentado.', 'Líderes Tradicionais (Nação Garou)', '[\"Dons do Augúrio: Philodox\",\"Presença\"]', 'Instabilidade da Linhagem / Decadência Nobre', 'O peso da herança e da consanguinidade gera surtos de exaustão mental, forçando falhas automáticas em testes sob estresse caso sua autoridade seja questionada[cite: 4].', '2026-07-09 16:24:57.001', '2026-07-09 16:24:57.001'),
('b9656fba-7bb2-11f1-a1c9-e89e5efddb4f', 'Roedores de Ossos', 'Bone Gnawers', NULL, 'Sobreviventes urbanos que conhecem os segredos das ruas e os marginalizados. Habitam favelas e cortiços da cidade[cite: 17].', 'Membros da Nação Garou', '[\"Dons Universais da Cidade\",\"Animalismo\"]', 'Estigma de Sarjeta / Repulsão Social', 'Vistos com nojo pela alta sociedade Garou e humana; falham automaticamente em primeiras impressões de Etiqueta ou diplomacia corporativa[cite: 4].', '2026-07-09 16:24:57.002', '2026-07-09 16:24:57.002'),
('b9657dec-7bb2-11f1-a1c9-e89e5efddb4f', 'Filhos do Vento', 'Children of the Sun', 'Uktena', 'Guardiões de segredos místicos e espirituais profundos. Infiltrados em círculos de ocultismo urbano.', 'Membros da Nação Garou', '[\"Dons do Augúrio: Theurge\",\"Entropia\"]', 'Obsessão pelo Proibido / Segredo Sombrio', 'Sua curiosidade insaciável por conhecimento corrompido aumenta as chances de contaminação espiritual por parasitas cósmicos[cite: 4].', '2026-07-09 16:24:57.002', '2026-07-09 16:24:57.002'),
('b9658c5b-7bb2-11f1-a1c9-e89e5efddb4f', 'Guardiões da Floresta', 'Wardens of the Forest', 'Wendigo', 'Defensores ferozes das terras selvagens e tradições ancestrais. Radicados nos extremos de preservação ambiental da Cantareira[cite: 17].', 'Membros da Nação Garou', '[\"Dons do Augúrio: Ahroun\",\"Forças\"]', 'Preconceito Ancestral / Isolacionismo', 'Recusam-se a colaborar ou receber auxílio de personagens de linhagem puramente urbana (como os Andarilhos do Asfalto), sofrendo severas penalidades sociais[cite: 4].', '2026-07-09 16:24:57.003', '2026-07-09 16:24:57.003'),
('b9659ada-7bb2-11f1-a1c9-e89e5efddb4f', 'Irmãos do Inverno', 'Winterwolves', 'Rostos Prateados', 'Adicionados como parte das reformulações de clãs. Sobreviventes implacáveis das franjas geladas ou isoladas da sociedade Garou.', 'Independentes / Isolados', '[\"Fortitude\",\"Dons do Augúrio: Ragabash\"]', 'Harano Inerente / Melancolia Espiritual', 'São propensos a cair no estado de Harano (depressão espiritual do apocalipse) com muito mais facilidade ao término de aventuras fracassadas[cite: 1, 4].', '2026-07-09 16:24:57.003', '2026-07-09 16:24:57.003'),
('b965a92b-7bb2-11f1-a1c9-e89e5efddb4f', 'Vozes da Terra', 'Earth-Voices', 'Fidalgos de Vidro / Stargazers', 'Filósofos e meditadores que buscam o equilíbrio e a iluminação. Operam como os conselheiros neutros das matilhas.', 'Independentes / Conselheiros Autônomos', '[\"Mente\",\"Dons do Augúrio: Philodox\"]', 'Desapego Prático / Alheamento da Realidade', 'Sua busca por iluminação os torna distantes de urgências físicas mundanas; sofrem penalidades em rolagens de Prontidão ou Iniciativa de combate surpresa[cite: 4].', '2026-07-09 16:24:57.003', '2026-07-09 16:24:57.003');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `Action`
--
ALTER TABLE `Action`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Action_actionIdentifier_key` (`actionIdentifier`);

--
-- Índices de tabela `Adventure`
--
ALTER TABLE `Adventure`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `AdventureScene`
--
ALTER TABLE `AdventureScene`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `AdventureScene_adventureId_sceneId_key` (`adventureId`,`sceneId`),
  ADD UNIQUE KEY `adventure_scene_adventure_id_scene_id` (`adventureId`,`sceneId`),
  ADD KEY `AdventureScene_sceneId_fkey` (`sceneId`);

--
-- Índices de tabela `AttributeDefinition`
--
ALTER TABLE `AttributeDefinition`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `AttributeDefinition_name_type_key` (`name`,`type`),
  ADD UNIQUE KEY `attribute_definition_name_type` (`name`,`type`);

--
-- Índices de tabela `BackgroundDefinition`
--
ALTER TABLE `BackgroundDefinition`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `BackgroundDefinition_name_gameStyle_key` (`name`,`gameStyle`),
  ADD UNIQUE KEY `background_definition_name_game_style` (`name`,`gameStyle`);

--
-- Índices de tabela `Character`
--
ALTER TABLE `Character`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Character_userId_fkey` (`userId`),
  ADD KEY `fk_character_vampire_cla` (`vampireClaId`),
  ADD KEY `fk_character_werewolf_tribe` (`werewolfTribeId`),
  ADD KEY `fk_character_mage_tradition` (`mageTraditionId`),
  ADD KEY `fk_character_hunter_creed` (`hunterCreedId`);

--
-- Índices de tabela `CharacterAttribute`
--
ALTER TABLE `CharacterAttribute`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CharacterAttribute_characterId_attributeId_key` (`characterId`,`attributeId`),
  ADD UNIQUE KEY `character_attribute_character_id_attribute_id` (`characterId`,`attributeId`),
  ADD KEY `CharacterAttribute_attributeId_fkey` (`attributeId`);

--
-- Índices de tabela `CharacterBackground`
--
ALTER TABLE `CharacterBackground`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CharacterBackground_characterId_backgroundId_key` (`characterId`,`backgroundId`),
  ADD UNIQUE KEY `character_background_character_id_background_id` (`characterId`,`backgroundId`),
  ADD KEY `CharacterBackground_backgroundId_fkey` (`backgroundId`);

--
-- Índices de tabela `CharacterHaven`
--
ALTER TABLE `CharacterHaven`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CharacterHaven_characterId_fkey` (`characterId`),
  ADD KEY `CharacterHaven_havenDefinitionId_fkey` (`havenDefinitionId`),
  ADD KEY `CharacterHaven_regionId_fkey` (`regionId`);

--
-- Índices de tabela `CharacterItem`
--
ALTER TABLE `CharacterItem`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CharacterItem_characterId_itemId_key` (`characterId`,`itemId`),
  ADD UNIQUE KEY `character_item_character_id_item_id` (`characterId`,`itemId`),
  ADD KEY `CharacterItem_itemId_fkey` (`itemId`);

--
-- Índices de tabela `CharacterMeritFlaw`
--
ALTER TABLE `CharacterMeritFlaw`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CharacterMeritFlaw_characterId_meritFlawId_key` (`characterId`,`meritFlawId`),
  ADD UNIQUE KEY `character_merit_flaw_character_id_merit_flaw_id` (`characterId`,`meritFlawId`),
  ADD KEY `CharacterMeritFlaw_meritFlawId_fkey` (`meritFlawId`);

--
-- Índices de tabela `CharacterPower`
--
ALTER TABLE `CharacterPower`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CharacterPower_characterId_powerDefinitionId_key` (`characterId`,`powerDefinitionId`),
  ADD UNIQUE KEY `character_power_character_id_power_definition_id` (`characterId`,`powerDefinitionId`),
  ADD KEY `CharacterPower_powerDefinitionId_fkey` (`powerDefinitionId`);

--
-- Índices de tabela `CharacterPowerSelection`
--
ALTER TABLE `CharacterPowerSelection`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CharacterPowerSelection_characterPowerId_powerLevelDefinitio_key` (`characterPowerId`,`powerLevelDefinitionId`),
  ADD UNIQUE KEY `idx_char_power_sel_unique` (`characterPowerId`,`powerLevelDefinitionId`),
  ADD KEY `CharacterPowerSelection_powerLevelDefinitionId_fkey` (`powerLevelDefinitionId`);

--
-- Índices de tabela `CharacterSkill`
--
ALTER TABLE `CharacterSkill`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CharacterSkill_characterId_skillId_key` (`characterId`,`skillId`),
  ADD UNIQUE KEY `character_skill_character_id_skill_id` (`characterId`,`skillId`),
  ADD KEY `CharacterSkill_skillId_fkey` (`skillId`);

--
-- Índices de tabela `CharacterStatus`
--
ALTER TABLE `CharacterStatus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CharacterStatus_characterId_statusId_key` (`characterId`,`statusId`),
  ADD UNIQUE KEY `character_status_character_id_status_id` (`characterId`,`statusId`),
  ADD KEY `CharacterStatus_statusId_fkey` (`statusId`);

--
-- Índices de tabela `Criminality`
--
ALTER TABLE `Criminality`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `DemographicProfile`
--
ALTER TABLE `DemographicProfile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `DemographicProfile_species_socialClass_profession_key` (`species`,`socialClass`,`profession`),
  ADD UNIQUE KEY `demographic_profile_species_social_class_profession` (`species`,`socialClass`,`profession`);

--
-- Índices de tabela `HavenDefinition`
--
ALTER TABLE `HavenDefinition`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `HunterCreedDefinition`
--
ALTER TABLE `HunterCreedDefinition`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `ItemDefinition`
--
ALTER TABLE `ItemDefinition`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ItemDefinition_name_key` (`name`);

--
-- Índices de tabela `MageTraditionDefinition`
--
ALTER TABLE `MageTraditionDefinition`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `MediaVisibility`
--
ALTER TABLE `MediaVisibility`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `MeritFlawDefinition`
--
ALTER TABLE `MeritFlawDefinition`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `MeritFlawDefinition_name_gameStyle_type_key` (`name`,`gameStyle`,`type`),
  ADD UNIQUE KEY `merit_flaw_definition_name_game_style_type` (`name`,`gameStyle`,`type`);

--
-- Índices de tabela `PowerDefinition`
--
ALTER TABLE `PowerDefinition`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PowerDefinition_name_gameStyle_key` (`name`,`gameStyle`),
  ADD UNIQUE KEY `power_definition_name_game_style` (`name`,`gameStyle`);

--
-- Índices de tabela `PowerLevelDefinition`
--
ALTER TABLE `PowerLevelDefinition`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PowerLevelDefinition_powerDefinitionId_level_name_key` (`powerDefinitionId`,`level`,`name`),
  ADD UNIQUE KEY `power_level_definition_power_definition_id_level_name` (`powerDefinitionId`,`level`,`name`);

--
-- Índices de tabela `PublicSecurity`
--
ALTER TABLE `PublicSecurity`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Region`
--
ALTER TABLE `Region`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Region_parentRegionId_fkey` (`parentRegionId`);

--
-- Índices de tabela `RegionCriminality`
--
ALTER TABLE `RegionCriminality`
  ADD PRIMARY KEY (`regionId`,`criminalityId`),
  ADD KEY `RegionCriminality_criminalityId_fkey` (`criminalityId`);

--
-- Índices de tabela `RegionDemographic`
--
ALTER TABLE `RegionDemographic`
  ADD PRIMARY KEY (`regionId`,`demographicProfileId`),
  ADD KEY `RegionDemographic_demographicProfileId_fkey` (`demographicProfileId`);

--
-- Índices de tabela `RegionMediaVisibility`
--
ALTER TABLE `RegionMediaVisibility`
  ADD PRIMARY KEY (`regionId`,`mediaVisibilityId`),
  ADD KEY `RegionMediaVisibility_mediaVisibilityId_fkey` (`mediaVisibilityId`);

--
-- Índices de tabela `RegionPublicSecurity`
--
ALTER TABLE `RegionPublicSecurity`
  ADD PRIMARY KEY (`regionId`,`publicSecurityId`),
  ADD KEY `RegionPublicSecurity_publicSecurityId_fkey` (`publicSecurityId`);

--
-- Índices de tabela `RegionWealth`
--
ALTER TABLE `RegionWealth`
  ADD PRIMARY KEY (`regionId`,`wealthId`),
  ADD KEY `RegionWealth_wealthId_fkey` (`wealthId`);

--
-- Índices de tabela `Scene`
--
ALTER TABLE `Scene`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Scene_sceneIdentifier_key` (`sceneIdentifier`);

--
-- Índices de tabela `SceneAction`
--
ALTER TABLE `SceneAction`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `SceneAction_sceneId_actionId_key` (`sceneId`,`actionId`),
  ADD UNIQUE KEY `scene_action_scene_id_action_id` (`sceneId`,`actionId`),
  ADD KEY `SceneAction_actionId_fkey` (`actionId`),
  ADD KEY `SceneAction_successSceneId_fkey` (`successSceneId`),
  ADD KEY `SceneAction_failureSceneId_fkey` (`failureSceneId`);

--
-- Índices de tabela `SkillDefinition`
--
ALTER TABLE `SkillDefinition`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `SkillDefinition_name_type_key` (`name`,`type`),
  ADD UNIQUE KEY `skill_definition_name_type` (`name`,`type`);

--
-- Índices de tabela `StatusDefinition`
--
ALTER TABLE `StatusDefinition`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `StatusDefinition_name_gameStyle_key` (`name`,`gameStyle`),
  ADD UNIQUE KEY `status_definition_name_game_style` (`name`,`gameStyle`);

--
-- Índices de tabela `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Índices de tabela `VampireClaDefinition`
--
ALTER TABLE `VampireClaDefinition`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Wealth`
--
ALTER TABLE `Wealth`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `WerewolfTribeDefinition`
--
ALTER TABLE `WerewolfTribeDefinition`
  ADD PRIMARY KEY (`id`);

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `AdventureScene`
--
ALTER TABLE `AdventureScene`
  ADD CONSTRAINT `AdventureScene_adventureId_fkey` FOREIGN KEY (`adventureId`) REFERENCES `Adventure` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `AdventureScene_sceneId_fkey` FOREIGN KEY (`sceneId`) REFERENCES `Scene` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `Character`
--
ALTER TABLE `Character`
  ADD CONSTRAINT `Character_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_character_hunter_creed` FOREIGN KEY (`hunterCreedId`) REFERENCES `HunterCreedDefinition` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `fk_character_mage_tradition` FOREIGN KEY (`mageTraditionId`) REFERENCES `MageTraditionDefinition` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `fk_character_vampire_cla` FOREIGN KEY (`vampireClaId`) REFERENCES `VampireClaDefinition` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `fk_character_werewolf_tribe` FOREIGN KEY (`werewolfTribeId`) REFERENCES `WerewolfTribeDefinition` (`id`) ON DELETE SET NULL;

--
-- Restrições para tabelas `CharacterAttribute`
--
ALTER TABLE `CharacterAttribute`
  ADD CONSTRAINT `CharacterAttribute_attributeId_fkey` FOREIGN KEY (`attributeId`) REFERENCES `AttributeDefinition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterAttribute_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `CharacterBackground`
--
ALTER TABLE `CharacterBackground`
  ADD CONSTRAINT `CharacterBackground_backgroundId_fkey` FOREIGN KEY (`backgroundId`) REFERENCES `BackgroundDefinition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterBackground_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `CharacterHaven`
--
ALTER TABLE `CharacterHaven`
  ADD CONSTRAINT `CharacterHaven_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterHaven_havenDefinitionId_fkey` FOREIGN KEY (`havenDefinitionId`) REFERENCES `HavenDefinition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterHaven_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `Region` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `CharacterItem`
--
ALTER TABLE `CharacterItem`
  ADD CONSTRAINT `CharacterItem_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterItem_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `ItemDefinition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `CharacterMeritFlaw`
--
ALTER TABLE `CharacterMeritFlaw`
  ADD CONSTRAINT `CharacterMeritFlaw_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterMeritFlaw_meritFlawId_fkey` FOREIGN KEY (`meritFlawId`) REFERENCES `MeritFlawDefinition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `CharacterPower`
--
ALTER TABLE `CharacterPower`
  ADD CONSTRAINT `CharacterPower_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterPower_powerDefinitionId_fkey` FOREIGN KEY (`powerDefinitionId`) REFERENCES `PowerDefinition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `CharacterPowerSelection`
--
ALTER TABLE `CharacterPowerSelection`
  ADD CONSTRAINT `CharacterPowerSelection_characterPowerId_fkey` FOREIGN KEY (`characterPowerId`) REFERENCES `CharacterPower` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterPowerSelection_powerLevelDefinitionId_fkey` FOREIGN KEY (`powerLevelDefinitionId`) REFERENCES `PowerLevelDefinition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `CharacterSkill`
--
ALTER TABLE `CharacterSkill`
  ADD CONSTRAINT `CharacterSkill_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterSkill_skillId_fkey` FOREIGN KEY (`skillId`) REFERENCES `SkillDefinition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `CharacterStatus`
--
ALTER TABLE `CharacterStatus`
  ADD CONSTRAINT `CharacterStatus_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CharacterStatus_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `StatusDefinition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `PowerLevelDefinition`
--
ALTER TABLE `PowerLevelDefinition`
  ADD CONSTRAINT `PowerLevelDefinition_powerDefinitionId_fkey` FOREIGN KEY (`powerDefinitionId`) REFERENCES `PowerDefinition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `Region`
--
ALTER TABLE `Region`
  ADD CONSTRAINT `Region_parentRegionId_fkey` FOREIGN KEY (`parentRegionId`) REFERENCES `Region` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Restrições para tabelas `RegionCriminality`
--
ALTER TABLE `RegionCriminality`
  ADD CONSTRAINT `RegionCriminality_criminalityId_fkey` FOREIGN KEY (`criminalityId`) REFERENCES `Criminality` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `RegionCriminality_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `Region` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `RegionDemographic`
--
ALTER TABLE `RegionDemographic`
  ADD CONSTRAINT `RegionDemographic_demographicProfileId_fkey` FOREIGN KEY (`demographicProfileId`) REFERENCES `DemographicProfile` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `RegionDemographic_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `Region` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `RegionMediaVisibility`
--
ALTER TABLE `RegionMediaVisibility`
  ADD CONSTRAINT `RegionMediaVisibility_mediaVisibilityId_fkey` FOREIGN KEY (`mediaVisibilityId`) REFERENCES `MediaVisibility` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `RegionMediaVisibility_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `Region` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `RegionPublicSecurity`
--
ALTER TABLE `RegionPublicSecurity`
  ADD CONSTRAINT `RegionPublicSecurity_publicSecurityId_fkey` FOREIGN KEY (`publicSecurityId`) REFERENCES `PublicSecurity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `RegionPublicSecurity_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `Region` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `RegionWealth`
--
ALTER TABLE `RegionWealth`
  ADD CONSTRAINT `RegionWealth_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `Region` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `RegionWealth_wealthId_fkey` FOREIGN KEY (`wealthId`) REFERENCES `Wealth` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `SceneAction`
--
ALTER TABLE `SceneAction`
  ADD CONSTRAINT `SceneAction_actionId_fkey` FOREIGN KEY (`actionId`) REFERENCES `Action` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `SceneAction_failureSceneId_fkey` FOREIGN KEY (`failureSceneId`) REFERENCES `Scene` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `SceneAction_sceneId_fkey` FOREIGN KEY (`sceneId`) REFERENCES `Scene` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `SceneAction_successSceneId_fkey` FOREIGN KEY (`successSceneId`) REFERENCES `Scene` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
