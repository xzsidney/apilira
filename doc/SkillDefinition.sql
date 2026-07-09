-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 09/07/2026 às 01:09
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
('09e58fe7-0ad0-4340-b4cc-4858503bc260', 'Condução', 'VAMPIRE', NULL, '2026-07-04 16:40:33.123', '2026-07-04 16:40:33.123'),
('0e62f0a7-be5b-4a29-93c3-a9fd6f27829d', 'Liderança', 'VAMPIRE', NULL, '2026-07-04 16:40:33.172', '2026-07-04 16:40:33.172'),
('0fede81e-65ae-41b3-9744-a38bf21eac60', 'Liderança', 'MAGE', NULL, '2026-07-04 16:40:33.289', '2026-07-04 16:40:33.289'),
('1bc0ae91-be85-4e96-ac4d-6430c40f827f', 'Armas de Fogo', 'VAMPIRE', NULL, '2026-07-04 16:40:33.108', '2026-07-04 16:40:33.108'),
('1da140aa-ce9e-4085-97c0-49554751335a', 'Investigação', 'MAGE', NULL, '2026-07-04 16:40:33.385', '2026-07-04 16:40:33.385'),
('1e54afde-0908-44ca-9085-05565bcb7f95', 'Artes Marciais', 'MAGE', NULL, '2026-07-04 16:40:33.324', '2026-07-04 16:40:33.324'),
('27b60157-4fc9-4da8-b021-cc5032f25b84', 'Direito', 'MAGE', NULL, '2026-07-04 16:40:33.390', '2026-07-04 16:40:33.390'),
('2908b1f5-ffa1-42a8-afea-94f296274616', 'Ciência', 'MAGE', NULL, '2026-07-04 16:40:33.412', '2026-07-04 16:40:33.412'),
('2c27bf26-8ace-4c64-83ce-a8e09bff13ec', 'Etiqueta', 'VAMPIRE', NULL, '2026-07-04 16:40:33.156', '2026-07-04 16:40:33.156'),
('4205111f-2065-49a2-ada5-60e5c328b876', 'Performance', 'VAMPIRE', NULL, '2026-07-04 16:40:33.183', '2026-07-04 16:40:33.183'),
('426434a5-c92c-4f9a-9031-3baa4c4b5428', 'Finanças', 'VAMPIRE', NULL, '2026-07-04 16:40:33.212', '2026-07-04 16:40:33.212'),
('443f7320-b393-4008-8984-17ae5889d0ce', 'Briga', 'MAGE', NULL, '2026-07-04 16:40:33.269', '2026-07-04 16:40:33.269'),
('44cfe73f-6883-466e-8fbb-f515221bfac0', 'Medicina', 'VAMPIRE', NULL, '2026-07-04 16:40:33.221', '2026-07-04 16:40:33.221'),
('48dc8239-417f-47b9-96fe-f3595f24eafc', 'Sagacidade', 'VAMPIRE', NULL, '2026-07-04 16:40:33.192', '2026-07-04 16:40:33.192'),
('4ad62e7e-a9bf-49d3-9444-e51ba2561bad', 'Etiqueta', 'MAGE', NULL, '2026-07-04 16:40:33.315', '2026-07-04 16:40:33.315'),
('4ff34328-d627-4893-88a5-9d552a3a4a4f', 'Empatia com Animais', 'VAMPIRE', NULL, '2026-07-04 16:40:33.151', '2026-07-04 16:40:33.151'),
('55d18c71-b494-4c22-900d-302f645d3c34', 'Erudição', 'VAMPIRE', NULL, '2026-07-04 16:40:33.207', '2026-07-04 16:40:33.207'),
('5e81cb62-9bb3-4ca6-b82d-5044f8a1a8eb', 'Intimidação', 'VAMPIRE', NULL, '2026-07-04 16:40:33.164', '2026-07-04 16:40:33.164'),
('5f60bd58-f7a0-478b-89eb-c3014e61c2a6', 'Manha', 'MAGE', NULL, '2026-07-04 16:40:33.294', '2026-07-04 16:40:33.294'),
('668b42a6-c4e1-4fb1-9ea3-e999ffa77eea', 'Tecnologia', 'MAGE', NULL, '2026-07-04 16:40:33.354', '2026-07-04 16:40:33.354'),
('68844fb0-bd47-4a45-ad33-51f3d046a30d', 'Esoterismo', 'MAGE', NULL, '2026-07-04 16:40:33.379', '2026-07-04 16:40:33.379'),
('69e96c2f-edb0-4ee6-b410-eff19845b54d', 'Percepção', 'VAMPIRE', NULL, '2026-07-04 16:40:33.231', '2026-07-04 16:40:33.231'),
('6c29e5e5-481f-4b9c-ba21-fefa2e284f49', 'Consciência', 'MAGE', NULL, '2026-07-04 16:40:33.264', '2026-07-04 16:40:33.264'),
('6dbd50b8-2452-44dc-9e16-7a0d037c7916', 'Acadêmicos', 'MAGE', NULL, '2026-07-04 16:40:33.359', '2026-07-04 16:40:33.359'),
('787366b0-f856-4dce-ab95-90e5f38eb0e5', 'Medicina', 'MAGE', NULL, '2026-07-04 16:40:33.395', '2026-07-04 16:40:33.395'),
('7ae771ff-4e14-4df3-b4d1-9b9ceb3ccc6c', 'Pesquisa', 'MAGE', NULL, '2026-07-04 16:40:33.339', '2026-07-04 16:40:33.339'),
('8064844d-9e75-40ee-8616-bfa2e6596acd', 'Lábia', 'MAGE', NULL, '2026-07-04 16:40:33.299', '2026-07-04 16:40:33.299'),
('80ac24eb-c4f5-4d7a-a37c-66dc3ae71c98', 'Subterfúgio', 'VAMPIRE', NULL, '2026-07-04 16:40:33.197', '2026-07-04 16:40:33.197'),
('83f7ceb4-cf67-408e-8d5f-8912cc8de1d8', 'Enigmas', 'MAGE', NULL, '2026-07-04 16:40:33.374', '2026-07-04 16:40:33.374'),
('871a5920-4680-4daf-965e-bd18449c4db2', 'Atletismo', 'VAMPIRE', NULL, '2026-07-04 16:40:33.114', '2026-07-04 16:40:33.114'),
('87ed59fb-09b7-41a2-9705-7beab70efa70', 'Condução', 'MAGE', NULL, '2026-07-04 16:40:33.309', '2026-07-04 16:40:33.309'),
('90687584-48a3-40f6-af4e-f9bf09a1a4cb', 'Ocultismo', 'MAGE', NULL, '2026-07-04 16:40:33.401', '2026-07-04 16:40:33.401'),
('95a1aedc-366f-40fe-9020-edaccbe51ed8', 'Persuasão', 'VAMPIRE', NULL, '2026-07-04 16:40:33.188', '2026-07-04 16:40:33.188'),
('995a42ad-fe3d-4c12-9e11-a6ccca7326a5', 'Esportes', 'MAGE', NULL, '2026-07-04 16:40:33.259', '2026-07-04 16:40:33.259'),
('a4ea19d5-145c-4605-b7c1-e488995aed4d', 'Artes', 'MAGE', NULL, '2026-07-04 16:40:33.255', '2026-07-04 16:40:33.255'),
('b2326229-400c-4bc6-8772-4f3257dfa810', 'Tecnologia', 'VAMPIRE', NULL, '2026-07-04 16:40:33.240', '2026-07-04 16:40:33.240'),
('b2699299-24e8-4255-9cde-e7ce81efd674', 'Sobrevivência', 'MAGE', NULL, '2026-07-04 16:40:33.349', '2026-07-04 16:40:33.349'),
('b63554b8-e343-492a-ba2d-057f831c22aa', 'Prontidão', 'MAGE', NULL, '2026-07-04 16:40:33.250', '2026-07-04 16:40:33.250'),
('b8a2fa48-a7b9-40dc-9090-6f17ecf0df43', 'Manha', 'VAMPIRE', NULL, '2026-07-04 16:40:33.178', '2026-07-04 16:40:33.178'),
('bd89ae90-55ab-473b-92b1-3c6bae308f67', 'Cosmologia', 'MAGE', NULL, '2026-07-04 16:40:33.370', '2026-07-04 16:40:33.370'),
('bfce5bd1-a23f-4e13-9f39-e315f6fed149', 'Expressão', 'MAGE', NULL, '2026-07-04 16:40:33.279', '2026-07-04 16:40:33.279'),
('c7910b9c-43b9-4a36-9a88-18bc7c364fdd', 'Furtividade', 'MAGE', NULL, '2026-07-04 16:40:33.344', '2026-07-04 16:40:33.344'),
('c84de1c5-d785-4153-aa67-9d6704d2ec88', 'Meditação', 'MAGE', NULL, '2026-07-04 16:40:33.330', '2026-07-04 16:40:33.330'),
('c981e77f-d7e4-45f5-a3b4-1bb8123d38fe', 'Ciência', 'VAMPIRE', NULL, '2026-07-04 16:40:33.202', '2026-07-04 16:40:33.202'),
('d40b2523-58e3-4323-a8be-a2dafa4bc728', 'Briga', 'VAMPIRE', NULL, '2026-07-04 16:40:33.118', '2026-07-04 16:40:33.118'),
('d71d4e38-9d59-457f-bf1c-879883abbda3', 'Investigação', 'VAMPIRE', NULL, '2026-07-04 16:40:33.216', '2026-07-04 16:40:33.216'),
('dc608ac5-e286-4360-a820-a22dedb5232b', 'Ofícios', 'MAGE', NULL, '2026-07-04 16:40:33.304', '2026-07-04 16:40:33.304'),
('e1301b41-ce52-4c7e-8436-86fa58f2bd68', 'Política', 'MAGE', NULL, '2026-07-04 16:40:33.407', '2026-07-04 16:40:33.407'),
('e3a3f9b9-4f8c-46e4-9776-8b8c116be732', 'Política', 'VAMPIRE', NULL, '2026-07-04 16:40:33.236', '2026-07-04 16:40:33.236'),
('e8bb7fd1-b058-4021-bbcc-3d39a967fb97', 'Intimidação', 'MAGE', NULL, '2026-07-04 16:40:33.284', '2026-07-04 16:40:33.284'),
('e8db8016-d587-4956-9524-a3a65d4c3b42', 'Ofícios', 'VAMPIRE', NULL, '2026-07-04 16:40:33.141', '2026-07-04 16:40:33.141'),
('ea077801-d4b1-4954-94cd-f6b83139daaf', 'Sobrevivência', 'VAMPIRE', NULL, '2026-07-04 16:40:33.146', '2026-07-04 16:40:33.146'),
('ea9cf46b-75b2-42ca-a8aa-c83b5da503f4', 'Computação', 'MAGE', NULL, '2026-07-04 16:40:33.364', '2026-07-04 16:40:33.364'),
('ef6c68d1-47c8-4d08-821a-aa800deecac2', 'Ladroagem', 'VAMPIRE', NULL, '2026-07-04 16:40:33.134', '2026-07-04 16:40:33.134'),
('f3110672-4e93-4fdf-8f4f-d97e9c1cbb38', 'Ocultismo', 'VAMPIRE', NULL, '2026-07-04 16:40:33.226', '2026-07-04 16:40:33.226'),
('fce38fc7-60db-41e7-8c46-eb3b8a2bea97', 'Furtividade', 'VAMPIRE', NULL, '2026-07-04 16:40:33.128', '2026-07-04 16:40:33.128');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `SkillDefinition`
--
ALTER TABLE `SkillDefinition`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `SkillDefinition_name_type_key` (`name`,`type`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
