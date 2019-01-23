import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private URL = 'http://localhost:3000/data';

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.URL)
  }

  createPost( post ){
    return this.http.post(this.URL, post)
  }

  updatePost( post ){
    return this.http.put(this.URL+'/'+post.record.id,{
      "fname": post.fname
    })
  }

  deletePost ( objID ){
    return this.http.delete(this.URL+'/'+objID)
  }
}
