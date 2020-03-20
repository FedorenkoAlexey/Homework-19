import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../../rest/post/post.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.html",
  styleUrls: ['./post.css']
})
export class PostComponent implements OnInit {
  constructor() {}

  @Input() post: Post;

  ngOnInit(): void {}
}
