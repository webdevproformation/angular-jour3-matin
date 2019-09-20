# Jour3

créer le projet Angular jour3
	ng new jour3

installer twitter bootstrap complet 
	npm i bootstrap3
	npm i jquery 

modifier le fichier angular.json


---------------------------

1ère chose à faire 

1 créer tous les composants
	shell dans lequel j'ai fais ng serve -o (touche pas)
	ouvrir un deuxieme shell
- ng g c navbar
- ng g c homepage
- ng g c contactpage

2 ajouter le RouterModule + définir les routes de mon application
dans app.module.ts
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
3 je vais les disposer dans app.component.html (le plus important)
		tout se passe dans ce fichier 
<xmp>
<div class="container">
  <header class="row">
    <div class="col-md-8 col-md-push-2">
      <!-- quelquesoit l'url de la page il ya aura toujours visible la nav bar -->
      <app-navbar></app-navbar>
    </div>
  </header>
  <section class="row">
    <div class="col-md-8 col-md-push-2">
      <!-- en fonction de l'url 
        si l'url / composant HomepageComponent
        si l'url /contact composant ContactpageComponent
      -->
      <router-outlet></router-outlet>
    </div>
  </section>
</div>
</xmp>
4 je vais coder chaque module (html + bootstrap)

barre de nav => 
- https://www.w3schools.com/Bootstrap/bootstrap_navbar.asp
<xmp>
<nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">jour3 matin</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a routerLink="/">Accueil</a></li>
        <li><a routerLink="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</xmp>
page contact
- https://www.w3schools.com/Bootstrap/bootstrap_forms_inputs.asp
- https://www.w3schools.com/Bootstrap/bootstrap_alerts.asp
<xmp>
<form>
    <div class="form-group">
        <label for="email">email:</label>
        <input type="text" class="form-control" id="email" #email name="email">
      </div>
    <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea class="form-control" rows="5" id="comment" #comment name="comment"></textarea>
    </div> 
    <div class="form-group">
        <input type="submit" class="btn btn-primary" value="Envoyer" 
            (click)=onSubmitContact($event,email,comment)>
    </div>
</form>
<div class="alert alert-success" *ngIf="isCorrect">
    <strong>Success!</strong> Indicates a successful or positive action.
</div>
</xmp>
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
<xmp>

<div>
    <article *ngFor="let article of articles">
        <figure>
            <img [src]="article.urlImg" alt="">
        </figure>
        <h2>{{ article.titre }} {{ article.id }}</h2>
        <p>{{ article.contenu }}</p>
    </article>
</div>
</xmp>



5 je vais m'occuper du service 


---------------

vue que je vais faire quasi tout faire à la ligne de commande le fichier
app.module.ts va être mis à jour lors de création des différents composants


