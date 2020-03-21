import { Component, OnInit } from "@angular/core";
import { ApiService } from "../rest/api.service";
import { User } from "../rest/user/user.model";
import { Post } from "../rest/post/post.model";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.html",
  styleUrls: ["./user-list.css"]
})
export class UserListComponent implements OnInit {
  [x: string]: any;
  constructor(private api: ApiService) {}

  users: User[];
  posts: Post[];

  getUsers(): void {
    this.api.getUsers().subscribe((response: User[]) => {
      this.users = response;
    });
  }

  ngOnInit() {
    // this.api.getUsers();
  }

  getPost(id: any) {
    this.api.getPosts(id).subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
