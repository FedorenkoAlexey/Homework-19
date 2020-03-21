import { TestBed, async } from "@angular/core/testing";
import { UserListComponent } from "./user-list.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Post } from "../rest//post/post.model";
import { User } from "../rest/user/user.model";
import { of } from "rxjs";

const mockUserData = [
  { id: 10001, name: "Jhon", username: "Smith", email: "test@mail.com" },
  { id: 10011, name: "Anna", username: "Howell", email: "test2@mail.com" }
] as User[];

const mockPostData = [
  {
    userId: 3,
    id: 22,
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio"
  }
] as Post[];

describe("UserListComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  it("should create the app-user-list", () => {
    const fixture = TestBed.createComponent(UserListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("get Users", () => {
    const apiService = jasmine.createSpyObj("Service", ["getUsers"]);
    apiService.getUsers.and.returnValue(of(mockUserData));

    const app = new UserListComponent(apiService);
    app.getUsers();
    expect(app.users).toEqual(mockUserData, "valid user data");
  });

  it("get Posts", () => {
    const apiService = jasmine.createSpyObj("Service", ["getPosts"]);
    apiService.getPosts.and.returnValue(of(mockPostData));

    const app = new UserListComponent(apiService);
    app.getPost(3);
    expect(app.posts).toEqual(mockPostData, "valid post data");
  });
});
