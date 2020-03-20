import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UserListModule } from "./user-list/user-list.module";
import { PostListModule } from "./post-list/post-list.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserListModule, PostListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
