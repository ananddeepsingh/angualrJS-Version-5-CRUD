import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  // followers
  // constructor(
    // private route: ActivatedRoute,
    // private service: GithubFollowersComponent
  // ) { }

  
  constructor(private route: Router) { }
  submit(){
    // this.route.navigate(['/followers'],{
    //   queryParams: { page: 1, order: 'newest'}
    // })
  }

  ngOnInit() {
    // let obs = Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ])
    // .subscribe( combined => {
    //   let id = combined[0].get('id');
    //   let page = combined[1].get('page');
    //   console.log(id, page)
      
    // this.service.getAll()
    // .subscribe( followers => this.followers = followers);

    // this.route.queryParamMap.subscribe();
    
    // })



    // this.route.paramMap
    // .subscribe();

    // this.route.queryParamMap.subscribe();
    
    // this.service.getAll()
    // .subscribe(followers => this.followers = followers)
  }

}
