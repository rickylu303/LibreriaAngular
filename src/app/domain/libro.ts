export class Libro {
    constructor(
        public id_libro : number,
        public titulo : string,
        public descripcion : string,
        public id_autor : number,
        public id_editorial : number,
        public anio_publicacion : Date,
        public imgUrl : string
    ){}
}
