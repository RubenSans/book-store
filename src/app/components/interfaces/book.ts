export enum Category {
    Terror = 'Terror',
    CienciaFiccion = 'Ciencia Ficción',
    Fantasia = 'Fantasía',
    Romance = 'Romance',
    Aventura = 'Aventura',
    Misterio = 'Misterio',
    Biografia = 'Biografía',
    Infantil = 'Infantil',
    Juvenil = 'Juvenil',
    Poesia = 'Poesía',
    Comic = 'Cómic',
    Manga = 'Manga',
    NovelaGrafica = 'Novela Gráfica',
    Ensayo = 'Ensayo',
    Filosofia = 'Filosofía',
    Historia = 'Historia',
    Politica = 'Política',
    Economia = 'Economía',
    Sociedad = 'Sociedad',
    Autoayuda = 'Autoayuda',
    Cocina = 'Cocina',
    Viajes = 'Viajes',
    Deportes = 'Deportes',
    Salud = 'Salud',
    Ciencia = 'Ciencia',
    Tecnologia = 'Tecnología',
    Informatica = 'Informática',
    Arte = 'Arte',
    Musica = 'Música'
}  

export interface Book {
    reference: string;
    name: string;
    price: number;
    autor: string;
    description: string;
    category: Category; 
    sale: boolean;
    image: string;
}
