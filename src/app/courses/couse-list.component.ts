// declara que essa classe é um compontent
import { Component } from "@angular/core"
import { Course } from './course'
import { CourseService } from './course.service';
@Component({
    
    templateUrl: './course-list.component.html'
})
//
// para que possa ser acessado de fora
export class CourseListComponent{
    filteredCourse: Course[]=[];
    courses: Course[]=[];
    _filterBy: string="";

    constructor(private  courseService: CourseService){  }
    ngOnInit(): void{
        this.courses = this.courseService.retrieveAll();
        this.filteredCourse = this.courses;
   
    }

    set filter(value: string){
        this._filterBy= value;
        // essa linha aqui é que faz o filtro
        this.filteredCourse = this.courses.filter((course: Course)=> course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())>-1);


    }

    get filter(){
        return this._filterBy;
    }

}