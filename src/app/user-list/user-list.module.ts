import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UserListComponent } from "./user-list.component";
import { ApiService } from "../rest/api.service";
import { UserComponent } from "./user/user.component";
import { HttpClientModule } from "@angular/common/http";
import { PostListComponent } from "../post-list/post-list.component";
import { PostComponent } from "../post-list/post/post.component";

@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  exports: [UserListComponent, UserComponent, PostListComponent],
  providers: [ApiService]
})
export class UserListModule {}
