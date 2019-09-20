import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  getAll() {
    return [{id : 1 , urlImg : "https://via.placeholder.com/400x200" , titre : "article" , contenu : "lorem"},
      {id : 2 , urlImg : "https://via.placeholder.com/400x200" , titre : "coucou !!" , contenu : "lorem"},
      {id : 3 , urlImg : "https://via.placeholder.com/400x200" , titre : "article" , contenu : "lorem"},
      {id : 4 , urlImg : "https://via.placeholder.com/400x200" , titre : "article" , contenu : "lorem"},
      {id : 5 , urlImg : "https://via.placeholder.com/400x200" , titre : "article" , contenu : "lorem"},
      {id : 6 , urlImg : "https://via.placeholder.com/400x200" , titre : "article" , contenu : "lorem"},
      {id : 7 , urlImg : "https://via.placeholder.com/400x200" , titre : "article" , contenu : "lorem"},
      {id : 8 , urlImg : "https://via.placeholder.com/400x200" , titre : "article" , contenu : "lorem"}
    ];
  }

  constructor() { }
}
