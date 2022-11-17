class Usuario {
    
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(titulo, nombreAutor) {
        this.libros.push({nombre: titulo, autor: nombreAutor})
    }

    getBookNames() {
        return this.libros.map( (libro) => libro.nombre)
    }

}

const libros = [

    {
        nombre: "La Odisea",
        autor: "Homero"
    },

    {
        nombre: "El Rey Lear",
        autor: "William Shakespeare"
    }

]

const usuarioCualquiera = new Usuario("Domingo", "Perón", libros, ["Tinolita", "Monito", "Negrita", "Canela"]);

console.log(`getFullName : ${usuarioCualquiera.getFullName()}`); // Domingo Perón
console.log(`getBookNames : ${usuarioCualquiera.getBookNames()}`); // 'La Odisea', 'El Rey Lear'

console.log(`Añadimos "The Black Cat" de "Edgar Allan Poe" con el metodo addBook`);
usuarioCualquiera.addBook("The Black Cat", "Edgar Allan Poe")
console.log(`getBookNames : ${usuarioCualquiera.getBookNames()}`); // 'La Odisea', 'El Rey Lear', 'The Black Cat'

console.log(`countMascotas : ${usuarioCualquiera.countMascotas()}`); // 4
console.log(`Añadimos a "Evita" a la lista de mascotas con el metodo addMascota`);
usuarioCualquiera.addMascota("Evita");
console.log(`countMascotas : ${usuarioCualquiera.countMascotas()}`); // 5