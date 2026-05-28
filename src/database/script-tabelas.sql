CREATE DATABASE handebol;

USE handebol;

CREATE TABLE respostaInicial (
	id_resposta INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(70) UNIQUE,
	senha VARCHAR(50),
    conhece INT,
    constraint fk_conhece FOREIGN KEY (conhece) REFERENCES respostaInicial(id_resposta)
);

INSERT INTO respostaInicial (descricao) VALUES ('Sim');
INSERT INTO respostaInicial (descricao) VALUES ('Não');

-- Tabela com as perguntas do quiz
CREATE TABLE resultado_quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    erros INT,
    pontuacao INT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fk_usuario INT,
    CONSTRAINT fk_usuario_resultado FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE aviso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(250),
    fk_usuario INT,
    CONSTRAINT fk_usuario_aviso FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE perfil (
    id INT PRIMARY KEY AUTO_INCREMENT,
    bio VARCHAR(250),
    data_nascimento DATE,
    fk_usuario INT UNIQUE,
    CONSTRAINT fk_perfil_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from usuario;

SELECT u.nome, u.email, r.descricao AS conhece_handebol
FROM usuario u
JOIN respostaInicial r ON u.conhece = r.id_resposta;

select * from resultado_quiz;
select * from perfil;