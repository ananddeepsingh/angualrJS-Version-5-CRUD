import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  isUpdateClicked = false;
  selectedRecord = {};
  private URL = 'http://localhost:3000/data';
  private fname: string;

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
    .subscribe( res =>{
      this.posts = res;
    });
  }

  takeAction(fname){
    if(!this.isUpdateClicked){
      this.createPost(fname);
    }else{
      this.updatePost(fname);
      this.isUpdateClicked = false
    }
  }

  createPost(input: HTMLInputElement){
    let post = { 'fname': input.value};

    this.service.createPost(post)
    .subscribe(res =>{
      // post['id'] = res.JSON().id;
      this.posts.splice(0,0, post);
      input.value = '';
      console.log(res)
    })
  }

  showDataInControl(post){
    this.isUpdateClicked = true;
    let ele = document.querySelector('#fname');
    ele.value = post.fname;
    this.selectedRecord = post
  }

  updatePost(fname){
    let _this = this;
    let obj = {
      'fname':fname.value
      ,'record': _this.selectedRecord
    };

    this.service.updatePost(obj)
    .subscribe( res => {
      fname.value = '';
      //on page load comment below function
      // _this.posts.findIndex( post => {
      //   if(post.id === res.id){ 
      //     post.fname = res.fname
      //   }
      // })
    })
  }

  deletePost(post){
    this.service.deletePost(post.id)
    .subscribe( res => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1)
    })
  }
}
