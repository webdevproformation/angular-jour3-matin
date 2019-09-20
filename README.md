# Jour3

créer le projet Angular jour3
- ng new jour3

installer twitter bootstrap complet 
- 	npm i bootstrap3
- 	npm i jquery 

modifier le fichier angular.json

voir => http://formation.webdevpro.net/angular/02-data-event.html section 3

---------------------------

1ère chose à faire 

1 créer tous les composants
	shell dans lequel j'ai fais ng serve -o (touche pas)
	ouvrir un deuxieme shell
- ng g c navbar
- ng g c homepage
- ng g c contactpage

2 ajouter le RouterModule + définir les routes de mon application
dans `app.module.ts`
<pre>
import { RouterModule } from "@angular/router";
</pre>
dans la section import de @NgModule
<pre>
RouterModule.forRoot([
        {path: "", component : HomepageComponent},
        {path: "contact", component : ContactpageComponent},
])
</pre>
3 je vais les disposer dans `app.component.html` (le plus important)
		tout se passe dans ce fichier 
<pre>
&lt;div class="container">
  &lt;header class="row">
    &lt;div class="col-md-8 col-md-push-2">
      &lt;!-- quelquesoit l'url de la page il ya aura toujours visible la nav bar -->
      &lt;app-navbar>&lt;/app-navbar>
    &lt;/div>
  &lt;/header>
  &lt;section class="row">
    &lt;div class="col-md-8 col-md-push-2">
      &lt;!-- en fonction de l'url 
        si l'url / composant HomepageComponent
        si l'url /contact composant ContactpageComponent
      -->
      &lt;router-outlet>&lt;/router-outlet>
    &lt;/div>
  &lt;/section>
&lt;/div>
</pre>
4 je vais coder chaque module (html + bootstrap)

barre de nav => 
- https://www.w3schools.com/Bootstrap/bootstrap_navbar.asp
<pre>
&lt;nav class="navbar navbar-default">
    &lt;div class="container-fluid">
      &lt;div class="navbar-header">
        &lt;a class="navbar-brand" href="#">jour3 matin&lt;/a>
      &lt;/div>
      &lt;ul class="nav navbar-nav">
        &lt;li class="active">&lt;a routerLink="/">Accueil&lt;/a>&lt;/li>
        &lt;li>&lt;a routerLink="/contact">Contact&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav>
</pre>
page contact
- https://www.w3schools.com/Bootstrap/bootstrap_forms_inputs.asp
- https://www.w3schools.com/Bootstrap/bootstrap_alerts.asp
<pre>
&lt;form>
    &lt;div class="form-group">
        &lt;label for="email">email:&lt;/label>
        &lt;input type="text" class="form-control" id="email" #email name="email">
      &lt;/div>
    &lt;div class="form-group">
        &lt;label for="comment">Comment:&lt;/label>
        &lt;textarea class="form-control" rows="5" id="comment" #comment name="comment">&lt;/textarea>
    &lt;/div> 
    &lt;div class="form-group">
        &lt;input type="submit" class="btn btn-primary" value="Envoyer" 
            (click)=onSubmitContact($event,email,comment)>
    &lt;/div>
&lt;/form>
&lt;div class="alert alert-success" *ngIf="isCorrect">
    &lt;strong>Success!&lt;/strong> Indicates a successful or positive action.
&lt;/div>
</pre>
<pre>
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {

  isCorrect = false ;

  onSubmitContact($event, email, comment)
  {
    $event.preventDefault();
    if(email.value =! "" && comment.value != "")
    {
      this.isCorrect = true;
      email.value = "";
      comment.value = "";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
</pre>
page d'accueil
<pre>

&lt;div>
    &lt;article *ngFor="let article of articles">
        &lt;figure>
            &lt;img [src]="article.urlImg" alt="">
        &lt;/figure>
        &lt;h2>{{ article.titre }} {{ article.id }}&lt;/h2>
        &lt;p>{{ article.contenu }}&lt;/p>
    &lt;/article>
&lt;/div>
</pre>

<pre>
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../articles.service"

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    articles ;

    constructor( service : ArticlesService) {

    this.articles = service.getAll();
    }

    ngOnInit() {
    }
}
</pre>

5 je vais m'occuper du service 

<pre>
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
</pre>

et injection de dépendance
<pre>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

import { RouterModule } from "@angular/router";
import { ArticlesService } from './articles.service';

@NgModule({
    declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ContactpageComponent
    ],
    imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: "", component : HomepageComponent},
        {path: "contact", component : ContactpageComponent},
    ])
    ],
    providers: [
    ArticlesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
</pre>

---------------

vue que je vais faire quasi tout faire à la ligne de commande le fichier
app.module.ts va être mis à jour lors de création des différents composants


