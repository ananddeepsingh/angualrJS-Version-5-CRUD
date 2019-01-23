import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupFormDetailsComponent } from './signup-form-details/signup-form-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'followers/:username/:id',
    component: GithubProfileComponent
  },
  {
    path: 'followers',
    component: GithubFollowersComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'signup',
    component: SignupFormComponent
  },
  {
    path: 'signup-details',
    component: SignupFormDetailsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
