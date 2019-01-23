import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupFormDetailsComponent } from './signup-form-details/signup-form-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { NospaceDirective } from './shared-validation/nospace.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SignupFormDetailsComponent,
    NotFoundComponent,
    HomeComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    PostsComponent,
    NospaceDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
