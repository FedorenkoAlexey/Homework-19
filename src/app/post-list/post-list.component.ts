import { Component, OnInit, OnChanges, Input } from "@angular/core";
import { ApiService } from "../rest/api.service";
import { Post } from "../rest/post/post.model";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.html"
  // styleUrls: ["./post-list.css"]
})
export class PostListComponent implements OnInit {
  constructor(private api: ApiService) {}
  @Input() posts: Post[];

  // post: Post;
  UserId: number;

  ngOnInit() {}
}
