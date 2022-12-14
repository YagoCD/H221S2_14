/* Crear base de datos dbRestaurante */
DROP database IF EXISTS dbcliente;
CREATE DATABASE dbcliente;

/* Poner en uso la base de datos */
USE dbcliente;

/* Crear tabla Pedido */
Drop table if exists CLIENTE;
CREATE TABLE CLIENTE
(
     IDCLI int AUTO_INCREMENT,
     NOMCLI varchar(80),
     APECLI varchar(80),
     CELCLI char(9),
     EMACLI varchar(80),
     MENCLI varchar(250),
     PRIMARY KEY (IDPED)
);

/* Insertar registros */
INSERT INTO CLIENTE
(NOMCLI, APECLI, CELCLI, EMACLI, MENCLI)
VALUES
('José Ramírez', 'Ramirez', '974815236', 'jose.ramirez@outlook.com', 'Por favor enviar a la dirección Av. Miraflores 253, San Vicente de Cañete');

/* Listar los registros de la tabla CLIENTE */
SELECT * FROM CLIENTE;

ALTER TABLE CLIENTE
    ADD CONSTRAINT EMAIL_VALIDO CHECK (EMACLI LIKE '%@%._%');