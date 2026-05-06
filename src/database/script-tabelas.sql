-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE handebol;

USE handebol;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(70),
	senha VARCHAR(50),
    conhece INT,
    constraint fk_conhece FOREIGN KEY (conhece) REFERENCES respostaInicial(id_resposta)
);

CREATE TABLE respostaInicial (
	id_resposta INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(50)
);

INSERT INTO respostaInicial (descricao) VALUES ('Sim');
INSERT INTO respostaInicial (descricao) VALUES ('Não');



select * from usuario;

SELECT u.nome, u.email, r.descricao AS conhece_handebol
FROM usuario u
JOIN respostaInicial r ON u.conhece = r.id_resposta;