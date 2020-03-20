import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ApiService } from "../rest/api.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [BrowserModule, HttpClientModule, CommonModule],
  providers: [ApiService]
})
export class PostListModule {}
