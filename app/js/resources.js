exports.users = [
  { id: 1, nombre: "admin", password: "Admin123" },
  { id: 2, nombre: "sebas", password: "123" },
]

exports.drugs = [
  { id: 1,
    nombre: "ACROGESICO AMPOLLA",
    tipo: "MEDICINA",
    precios_fecha: [
    { precio: 0.75, id_user: 1, fecha: "December 17, 2016 03:24:00" },
    ],
    codigo: "ACRO01" },
  { id: 2,
    nombre: "ADMINISTRACION DE SOLUCIONES INTRAVENOSAS",
    tipo: "SERVICIO",
    precios_fecha: [
    { precio: 60.50, id_user: 2, fecha: "December 17, 2015 03:24:00" },
    ],
    codigo: "ADMIN01" },
  { id: 3,
    nombre: "AFRIN GOTAS",
    tipo: "MEDICINA",
    precios_fecha: [
    { precio: 1.50, id_user: 2, fecha: "November 17, 2015 03:24:00" },
    ],
    codigo: "AGUADES01" },
  { id: 4,
    nombre: "AGUA DESTILADA",
    tipo: "SERVICIO",
    precios_fecha: [
    { precio: 1.20, id_user: 1, fecha: "October 17, 2013 02:24:00" },
    ],
    codigo: "AGUADES02" },
  { id: 5,
    nombre: "AGUA DESTILADA CC",
    tipo: "SERVICIO",
    precios_fecha: [
    { precio: 0.39, id_user: 1, fecha: "October 17, 2013 02:24:00" },
    ],
    codigo: "AGUAOX3" },
  { id: 6,
    nombre: "AGUA OXIGENADA",
    tipo: "SERVICIO",
    precios_fecha: [
    { precio: 0.39, id_user: 1, fecha: "October 17, 2013 02:22:00" },
    ],
    codigo: "AGUAOX02" },
  { id: 7,
    nombre: "AMIGDOLECTOMIA",
    tipo: "PROCEDIMIENTO",
    precios_fecha: [
    { precio: 88.39, id_user: 1, fecha: "October 17, 2013 02:22:00" },
    ],
    codigo: "AMIG01" },
]

exports.departments = [
  { id: 1,
    nombre: "FARMACIA",
    stock: [
      { id: 1, cantidad: 2 },
      { id: 2, cantidad: 10 },
      { id: 3, cantidad: 20 },
      { id: 4, cantidad: 13 },
    ],
  },
  { id: 2,
    nombre: "TMP",
    stock: [
      { id: 7, cantidad: 2 },
      { id: 5, cantidad: 10 },
      { id: 3, cantidad: 20 },
      { id: 4, cantidad: 13 },
    ],
  },
]
