USE amorpeludodb;

-- **************************************** PRODUCTOS ****************************************

INSERT INTO productos (tittle, price, description, img1, img2) 
VALUES ('Alcancía personalizada', 150.00, 
'Una alcancía adorable y personalizada, diseñada con la imagen de tu mascota, que te inspirará a ahorrar para mimarlo con más cariño.', 
'/src/img/imgProductos/producto_1A.png', '/src/img/imgProductos/producto_1B.png');

INSERT INTO productos (tittle, price, description, img1, img2) 
VALUES ('Collar para recordar', 100.00, 
'Conmemora a tu mascota con este collar de recuerdo, elije entre una urna para guardar pelito o un dije para almacenar las cenizas de tu compañero más fiel.', 
'/src/img/imgProductos/producto_2A.png', '/src/img/imgProductos/producto_2B.png');

INSERT INTO productos (tittle, price, description, img1, img2) 
VALUES ('Urna para pelitos de felicidad', 110.00, 
'Guarda los preciados pelitos de tu mascota en nuestra hermosa urna de madera personalizable. Cada urna está diseñada con amor para honrar a tu compañero peludo de manera especial.', 
'/src/img/imgProductos/producto_3A.png', '/src/img/imgProductos/producto_3B.png');

INSERT INTO productos (tittle, price, description, img1, img2) 
VALUES ('Bordado personalizada', 130.00, 
'Crea un tributo único para tu mascota. Personaliza con su imagen y/o nombre en un telar artesanal circular de 15 cm. Un recuerdo especial para siempre.', 
'/src/img/imgProductos/producto_4A.png', '/src/img/imgProductos/producto_4B.png');

INSERT INTO productos (tittle, price, description, img1, img2) 
VALUES ('Estatuilla de vidrio llena de amor', 180.00, 
'Captura la esencia de tu compañero peludo. Una exquisita estatuilla de vidrio soplado con el pelo de tu mascota en su interior.', 
'/src/img/imgProductos/producto_5A.png', '/src/img/imgProductos/producto_5B.png');

INSERT INTO productos (tittle, price, description, img1, img2) 
VALUES ('Figura con textura felting', 90.00, 
'Celebra a tu mascota con arte único. Adquiere figuras hechas a mano con la técnica felting, que capturan su personalidad en detalles texturizados.', 
'/src/img/imgProductos/producto_6A.png', '/src/img/imgProductos/producto_6B.png');

INSERT INTO productos (tittle, price, description, img1, img2) 
VALUES ('Llavero para recordar', 100.00, 
'Lleva a tu amado compañero siempre contigo. Un llavero diseñado para guardar un pequeño recuerdo de sus cenizas o pelo, manteniendo su memoria viva en cada paso.', 
'/src/img/imgProductos/producto_7A.png', '/src/img/imgProductos/producto_7B.png');

INSERT INTO productos (tittle, price, description, img1, img2) VALUES ('Figura de cerámica', 180.00, 
'Inmortaliza la imagen de tu mascota en una hermosa figura de cerámica, creada con amor y cuidado. Un recuerdo para toda la vida.', 
'/src/img/imgProductos/producto_8A.png', '/src/img/imgProductos/producto_8B.png');

INSERT INTO productos (tittle, price, description, img1, img2) 
VALUES ('Cuadro con textura felting', 130.00, 
'Un retrato único lleno de ternura. Cada detalle de tu mascota se captura con la técnica felting en un cuadro de arte texturizado.', 
'/src/img/imgProductos/producto_9A.png', '/src/img/imgProductos/producto_9B.png');

INSERT INTO productos (tittle, price, description, img1, img2) 
VALUES ('Almohada con fotografía impresa', 105.00, 
'Abraza los recuerdos. Personaliza una suave almohada con la fotografía de tu mascota impresa, para sentir su amor en cada abrazo.', 
'/src/img/imgProductos/producto_10A.png', '/src/img/imgProductos/producto_10B.png');

INSERT INTO productos (tittle, price, description, img1, img2) 
VALUES ('Llavero con fotografía', 110.00, 
'Lleva a tu compañero siempre contigo. Un llavero con la fotografía de tu amada mascota y una placa grabada con su nombre, une lo mejor de dos mundos en un accesorio único.', 
'/src/img/imgProductos/producto_11A.png', '/src/img/imgProductos/producto_11B.png');

INSERT INTO productos (tittle, price, description, img1, img2) 
VALUES ('Case con pulsera', 150.00, 
'Lleva tu amor por tu compañero a todas partes. Un case para celular que puedes personalizar con la imagen de tu mascota y viene con una pulsera a juego.', 
'/src/img/imgProductos/producto_12A.png', '/src/img/imgProductos/producto_12B.png');


-- **************************************** USUARIO ****************************************

INSERT INTO usuario (email, nombre, apellido, contraseña, confirmarContraseña) 
VALUES ('tolumes.daniela@gmail.com', 'Daniela', 'Heredia', 'Pa$$w0rd', 'Pa$$w0rd');

INSERT INTO usuario (email, nombre, apellido, contraseña, confirmarContraseña) 
VALUES ('anacristina.cortezjardon@gmail.com', 'Ana', 'Cortez', 'Pa$$w0rd1', 'Pa$$w0rd1');

INSERT INTO usuario (email, nombre, apellido, contraseña, confirmarContraseña) 
VALUES ('chuko.2728@gmail.com', 'Angel', 'Rivera', 'Pa$$w0rd2', 'Pa$$w0rd2');

INSERT INTO usuario (email, nombre, apellido, contraseña, confirmarContraseña) 
VALUES ('francisco.nunez.alonso@outlook.com.mx', 'Francisco', 'Núñez', 'Pa$$w0rd3', 'Pa$$w0rd3');

INSERT INTO usuario (email, nombre, apellido, contraseña, confirmarContraseña) 
VALUES ('sotochavezjoseluis3@gmail.com', 'Luis', 'Soto', 'Pa$$w0rd4', 'Pa$$w0rd4');

INSERT INTO usuario (email, nombre, apellido, contraseña, confirmarContraseña)
VALUES ('dominique.marinvic@gmail.com', 'Dominique', 'Marin', 'Pa$$w0rd5', 'Pa$$w0rd5');


-- **************************************** ORDEN DE COMPRA ****************************************

INSERT INTO ordendecompra (usuario_id, productos_id, fecha, total) 
VALUES (1, 9, (STR_TO_DATE("2023-06-15", "%Y-%m-%d")), 130.00);

INSERT INTO ordendecompra (usuario_id, productos_id, fecha, total) 
VALUES (2, 5, (STR_TO_DATE("2023-07-25", "%Y-%m-%d")), 180.00);

INSERT INTO ordendecompra (usuario_id, productos_id, fecha, total) 
VALUES (3, 3, (STR_TO_DATE("2023-07-30", "%Y-%m-%d")), 110.00);

INSERT INTO ordendecompra (usuario_id, productos_id, fecha, total) 
VALUES (4, 12, (STR_TO_DATE("2023-08-10", "%Y-%m-%d")), 150.00);

INSERT INTO ordendecompra (usuario_id, productos_id, fecha, total) 
VALUES (5, 8, (STR_TO_DATE("2023-08-17", "%Y-%m-%d")), 180.00);

INSERT INTO ordendecompra (usuario_id, productos_id, fecha, total) 
VALUES (6, 1, (STR_TO_DATE("2023-08-12", "%Y-%m-%d")), 150.00);