INSERT INTO Persona (k_tipoPersona, k_numeropersona, n_nombre1, n_nombre2, n_apellido1, n_apellido2)
VALUES ('CC', 1234567890, 'juan', NULL, 'grajales', NULL),
    ('CE', 5896348719, 'diego', NULL, 'castillo', NULL),
    ('CC', 64148184, 'santigo', NULL, 'garcia', NULL),
    ('CE', 054875198, 'juan', 'diego', 'reyes', 'ortiz'),
    ('CC', 218421867, 'valeria', NULL, 'lugo', 'lugo'),
    ('CC', 95348210, 'miguel', NULL, 'ortiz', 'suarez'),
    ('CE', 1963748202, 'samuel', 'mauricio', 'mora', NULL),
    ('CC', 1672983019, 'sebastian', NULL, 'amaya', 'reyes'),
    ('CC', 5159814, 'mariana', NULL, 'gomez', NULL),
    ('CC', 98721894, 'lisa', NULL, 'manrique', NULL),
    ('CC', 561498, 'hanna', 'maria', 'yepes', 'mora'),
    ('CE', 1584891, 'sergio', NULL, 'mora', 'ortiz'),
    ('CC', 655487104, 'diego', NULL, 'carbajal', NULL),
    ('CC', 46526955, 'paulina', 'maria', 'grajales', NULL),
    ('CC', 6540871, 'juan', 'diego', 'carabeles', NULL),
    ('CC', 987482065, 'freddy', NULL, 'consume', NULL),
    ('CC', 20564654, 'jennifer', NULL, 'castillo', NULL),
    ('TI', 13542148, 'salome', NULL, 'grajales', NULL),
    ('TI', 51654657, 'jose', NULL, 'garcia', NULL),
    ('TI', 18941972, 'paula', NULL, 'lugo', NULL),
    ('TI', 21843248, 'hernando', NULL, 'nieto', NULL);

INSERT INTO Responsable (o_correo, o_telefono, k_tipoPersona, k_numeroPersona)
VALUES ('juangra@gmail.com', 3174151972, 'CC', 1234567890),
    ('diegocas@gmail.com', 5184218184, 'CE', 5896348719),
    ('santiagogar@gmail.com', 5198415182, 'CC', 64148184),
    ('juanreyes@gmail.com', 2321504899, 'CE', 054875198),
    ('valerialu@gmail.com', 3218123817, 'CC', 218421867),
    ('miguelor@gmail.com', 5218108507, 'CC', 95348210),
    ('samuelmora@gmail.com', 5021054476, 'CE', 1963748202),
    ('sebastianamaya@gmail.com', 9871064548, 'CC', 1672983019),
    ('marianago@gmail.com', 5601087797, 'CC', 5159814),
    ('lisaman@gmail.com', 8974087526, 'CC', 98721894),
    ('hannayepes@gmail.com', 9054519835, 'CC', 561498),
    ('sergiomora@gmail.com', 3210894654, 'CE', 1584891),
    ('diegocarba@gmail.com', 3210814098, 'CC', 655487104),
    ('paulinamar@gmail.com', 1048975189, 'CC', 46526955),
    ('juandiegocara@gmail.com', 6510579821, 'CC', 6540871),
    ('freddyconsu@gmail.com', 4064796798, 'CC', 987482065),
    ('jennifercast@gmail.com', 3220498767, 'CC', 20564654);

INSERT INTO Apartamento (k_apartamento, v_area, v_coeficiente, q_bloque, q_piso, k_tipoPersona, k_numeropersona)
VALUES (5, 30, 1.3, 3, 2, 'CC', 1234567890),
    (6, 45, 1.5, 6, 9, 'CE', 5896348719),
    (7, 60, 1.8, 1, 5, 'CC', 64148184),
    (8, 20, 1.1, 2, 8, 'CE', 054875198),
    (9, 27, 1.1, 7, 6, 'CC', 218421867),
    (10, 50, 1.7, 1, 7, 'CC', 95348210),
    (11, 38, 1.02, 5, 4, 'CE', 1963748202),
    (12, 25, 1.1, 10, 9, 'CC', 1672983019),
    (13, 30, 1.4, 15, 6, 'CC', 5159814),
    (14, 40, 1.4, 6, 4, 'CC', 98721894),
    (15, 48, 1.17, 5, 10, 'CC', 561498),
    (16, 56, 1.8, 15, 6, 'CE', 1584891),
    (17, 27, 1.06, 20, 7, 'CC', 655487104),
    (18, 34, 1.3, 8, 2, 'CC', 46526955),
    (19, 41, 1.56, 1, 6, 'CC', 6540871),
    (20, 50, 1.4, 4, 3, 'CC', 987482065),
    (21, 65, 1.8, 5, 1, 'CC', 20564654);

INSERT INTO Conjunto (k_conjunto, t_descuento, t_mora, v_base, q_dias, o_direccion)
VALUES (11111, 0.8, 0.5, 500000, 15, 'carerra 31D #2B-02');

INSERT INTO Concepto (v_valor, k_concepto, n_nombre, k_conjunto)
VALUES (20000, 2150, 'reserva', 11111),
    (10000, 9218, 'parqueadero', 11111),  
    (250000, 6545, 'cuota ext', 11111),
    (100000, 5414, 'cuota ext', 11111),
    (120000, 8213, 'limpieza' ,11111);

INSERT INTO Pago (k_serialPago, i_metodo, v_valor, k_numeroReserva)
VALUES (1, 'EFECTIVO', 760000, NULL),
    (2, 'DEBITO', 900000, NULL),
    (3, 'CREDITO', 850000, NULL),
    (4, 'ONLINE', 500000, NULL),
    (5, 'EFECTIVO', 800000, NULL),
    (6, 'DEBITO', 785000, NULL),
    (7, 'EFECTIVO', 750000, NULL),
    (8, 'DEBITO', 700000, NULL),
    (9, 'EFECTIVO', 900000, NULL);
	
INSERT INTO CuentaCobro (k_cuenta, i_estado, f_expedicionCuenta, f_pagoOportuno, f_limite, v_total, q_mes, q_anio, k_serialPago, k_apartamento)
VALUES (1346, 'PENDIENTE', '11/05/2024', '11/06/2024', '26/05/2024', 790000, '5', '2024', NULL, 5),
    (5425, 'PAGADA', '11/05/2024', '11/06/2024', '26/05/2024', 760000, '5', '2024', 1, 6),
    (2541, 'PAGADA', '11/05/2024', '11/06/2024', '26/05/2024', 900000, '5', '2024', 2, 7),
    (7895, 'PENDIENTE', '11/05/2024', '11/06/2024', '26/05/2024', 550000, '5', '2024', NULL, 8),
    (1687, 'PENDIENTE', '11/05/2024', '11/06/2024', '26/05/2024', 550000, '5', '2024', NULL, 9),
    (6514, 'PAGADA', '11/05/2024', '11/06/2024', '26/05/2024', 860000, '5', '2024', 3, 10),
    (8321, 'PENDIENTE', '11/05/2024', '11/06/2024', '26/05/2024', 510000, '5', '2024', NULL, 11),
    (0254, 'PAGADA', '11/05/2024', '11/06/2024', '26/05/2024', 550000, '5', '2024', 4, 12),
    (9564, 'PENDIENTE', '11/05/2024', '11/06/2024', '26/05/2024', 700000, '5', '2024', NULL, 13),
    (8214, 'PAGADA', '11/05/2024', '11/06/2024', '26/05/2024', 950000, '5', '2024', 5, 14),
    (3148, 'PAGADA', '11/05/2024', '11/06/2024', '26/05/2024', 835000, '5', '2024', 6, 15),
    (4058, 'PENDIENTE', '11/05/2024', '11/06/2024', '26/05/2024', 900000, '5', '2024', NULL, 16),
    (7519, 'PENDIENTE', '11/05/2024', '11/06/2024', '26/05/2024', 630000, '5', '2024', NULL, 17),
    (6543, 'PAGADA', '11/05/2024', '11/06/2024', '26/05/2024', 750000, '5', '2024', 7, 18),
    (7985, 'PENDIENTE', '11/05/2024', '11/06/2024', '26/05/2024', 780000, '5', '2024', NULL, 19),
    (0592, 'PAGADA', '11/05/2024', '11/06/2024', '26/05/2024', 700000, '5', '2024', 8, 20),
    (4972, 'PAGADA', '11/05/2024', '11/06/2024', '26/05/2024', 900000, '5', '2024', 9, 21);

INSERT INTO DetalleCuenta (k_detalle, v_valor, k_concepto, k_cuenta)
VALUES ('A651', 20000, 2150, 1346),
    ('A749', 120000, 8213, 1346),
    ('A123', 10000, 9218, 5425),
    ('S489', 10000, 9218, 6514),
    ('S451', 250000, 6545, 8214),
    ('W541', 250000, 6545, 3148),
    ('B466', 100000, 5414, 7519),
    ('F542', 100000, 5414, 6543);

INSERT INTO Parqueadero (k_parqueadero, i_tipo, k_apartamento)
VALUES (1, 'INDIVIDUAL', 10),
    (2, 'DOBLE', 6);

INSERT INTO ZonaComun (k_zonaComun, i_tipo, v_costo, q_numeroDias, k_conjunto)
VALUES ('SALON 1', 'SALON', 20000, 30, 11111),
    ('GIMNASIO 2', 'GIMNASIO', 20000, 15, 11111),
    ('PISCINA 1', 'PISCINA', 20000, 15, 11111),
    ('BARBACOA 1', 'BARBACOA', 20000, 15, 11111);

INSERT INTO Reserva (k_numeroReserva, f_ejecucion, f_limite, i_estado, f_reserva, q_idReservador, k_zonaComun, k_serialPago)
VALUES (2165, '30/05/2024', '24/05/2024', 'PENDIENTE', '25/04/2024',  1234567890, 'PISCINA 1', NULL);

INSERT INTO Residente (f_nacimiento, k_tipoPersona, k_numeroPersona, k_apartamento)
VALUES ('29/08/2004', 'CC', 1234567890, 5),
    ('03/09/1995', 'CC', 64148184, 7),
    ('01/01/2000', 'CC', 218421867, 9),
    ('12/12/1985', 'CE', 1963748202, 11),
    ('13/04/2002', 'CC', 5159814, 13),
    ('03/08/2004', 'CC', 561498, 15),
    ('29/06/1992', 'CC', 655487104, 17),
    ('10/11/2003', 'CC', 6540871, 19),
    ('15/03/1980', 'CC', 20564654, 21),
    ('29/08/2014', 'TI', 13542148, 5),
    ('17/03/2015', 'TI', 51654657, 7),
    ('26/12/2020', 'TI', 18941972, 9),
    ('16/01/2012', 'TI', 21843248, 11);
