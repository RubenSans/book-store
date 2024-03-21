import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  booksHome = [
    {
      title: 'El principito',
      author: 'Antoine de Saint-Exupéry',
      price: 6.60,
      image: 'https://m.media-amazon.com/images/I/714Hvb52n-L._SY466_.jpg',
      url: 'https://www.casadellibro.com/libro-principito-colores-originales/9788498381498/1177913'
    },
    {
      title: 'El alquimista',
      author: 'Paulo Coelho',
      price: 17.10,
      image: 'https://www.planetadelibros.com/usuaris/libros/thumbs/54e8361f-d68d-4462-84c6-d06ef130f5ae/d_295_510/portada_el-alquimista_paulo-coelho_201612191218.webp',
      url: 'https://www.casadellibro.com/libro-el-alquimista/9788408144755/4819289'
    },
    {
      title: 'El código Da Vinci',
      author: 'Dan Brown',
      price: 18.95,
      image: 'https://www.planetadelibros.com/usuaris/libros/thumbs/d0a7d172-4365-4625-99a5-4868259c35e5/d_295_510/portada_el-codigo-da-vinci_dan-brown_201706061655.webp',
      url: 'https://www.casadellibro.com/libro-el-codigo-da-vinci/9788408176022/5702001'
    },
    {
      title: 'El amor en los tiempos del cólera',
      author: 'Gabriel García Márquez',
      price: 9.45,
      image: 'https://imagessl7.casadellibro.com/a/l/s5/97/9788466347297.webp',
      url: 'https://www.casadellibro.com/libro-el-amor-en-los-tiempos-del-colera-edicion-escolar/9788466347297/9179455'
    },
    {
      title: 'El tiempo que tuvimos',
      author: 'Cherry Chic',
      price: 18.00,
      image: 'https://m.media-amazon.com/images/I/41QOytwcDiL.jpg',
      url: 'https://www.casadellibro.com/libro-el-tiempo-que-tuvimos/9788419357434/13540252'
    },
    {
      title: 'Imperio final',
      author: 'Brandon Sanderson',
      price: 12.30,
      image: 'https://m.media-amazon.com/images/I/911Ug7hsR4L._AC_UL320_.jpg',
      url: 'https://www.casadellibro.com/libro-el-imperio-final-nacidos-de-la-bruma-mistborn-1/9788413143194/12146475'
    },
    {
      title: 'Elantris (10º ANIVERSARIO)',
      author: 'Brandon Sanderson',
      price: 26.50,
      image: 'https://imagessl3.casadellibro.com/a/l/s5/43/9788466658843.webp',
      url: 'https://www.casadellibro.com/libro-elantris-10-aniversario/9788466658843/2947690'
    },
    {
      title: 'Arcanum Ilimitado',
      author: 'Brandon Sanderson',
      price: 14.21,
      image: 'https://m.media-amazon.com/images/I/91ZgOyqg5SL._SY466_.jpg',
      url: 'https://www.casadellibro.com/libro-arcanum-ilimitado/9788413143408/12146476'
    },
  ];
}
