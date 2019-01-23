import { Component } from '@angular/core';

interface FavoriteChangedEventArgs{
  newValue: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canSave = false;

  task ={
    titile: 'Review Applications',
    assignee: {
      name: 'John Smith'
    }
  }

  title = 'Angular App';
  post = {
    title: "Title",
    isFavorite: true
  }
  //tabbing component
  viewMode = 'map';
  courses = [1,2];

  myCourses;

  loadCourses(){
    this.myCourses= [
      {'id':1, name: 'course 1'},
      {'id':2, name: 'course 2'},
      {'id':3, name: 'course 3'}
    ]
  }

  trackCourse(index, course){
    return course ? course.id: undefined
  }
  onAdd(){
    this.myCourses.push({'id':4, name: 'course 4'})
  }

  onRemove(course){
    let index = this.myCourses.indexOf(course);
    this.myCourses.splice(index,1)
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite Changed", eventArgs);
  }
  onComponentChange(isFav){
    console.log(222,isFav)
  }
}
