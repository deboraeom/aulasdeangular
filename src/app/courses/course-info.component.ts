import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';


@Component({
    
    templateUrl: "./course-info.component.html"
})

export class CourseInfoComponet implements OnInit{
    course:  Course=
    {
        id: 0,
        name: ' ',
        releaseDate: ' ',
        description: ' ',
        duration: 0,
        code: ' ',
        rating: 0,
        price: 0,
        imageUrl: ' ',
    }
    

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){}

    ngOnInit(): void{
        let  nulo=
        {
            id: 0,
            name: ' ',
            releaseDate: ' ',
            description: ' ',
            duration: 0,
            code: ' ',
            rating: 0,
            price: 0,
            imageUrl: ' ',
        }
        //let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')) || 1;
        let id = 1;
        this.course = this.courseService.retriveById(id);
        
        
       
        /*const t= this.activatedRoute.snapshot.paramMap.get('id');
        this.courseId=parseInt(t);*/
        

        /*this.activatedRoute.params.subscribe((params) => {
            this.courseId = +params.get('id');
        });*/
       
    }

}