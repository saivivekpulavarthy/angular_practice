import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { cardData } from "../card.model";

@Injectable()

export class ResumeService {
    constructor(private http: HttpClient) {

    }
    getEducationDetails(): Observable<cardData[]> {
        return this.http.get<cardData[]>("http://localhost:3000/education")
    }
    getExperienceDetails(): Observable<cardData[]> {
        return this.http.get<cardData[]>("http://localhost:3000/experience");
    }
}