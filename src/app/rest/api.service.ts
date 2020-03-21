import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user/user.model";
import { Post } from "./post/post.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  public USER_URL = "https://jsonplaceholder.typicode.com/users";
  private POST_URL = "https://jsonplaceholder.typicode.com/posts?userId=";
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.USER_URL}`);
  }

  getPosts(id: number) {
    return this.http.get(`${this.POST_URL}${id}`);
  }
}
