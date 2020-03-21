import { TestBed, async } from "@angular/core/testing";
import { UserListComponent } from "./user-list.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { User } from "../rest/user/user.model";
import { of } from "rxjs";

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
    const apiService = jasmine.createSpyObj("UserService", ["getUsers"]);
    const mockData = [
      { id: 10001, name: "Jhon", username: "Smith", email: "test@mail.com" },
      { id: 10011, name: "Anna", username: "Howell", email: "test2@mail.com" }
    ] as User[];

    apiService.getUsers.and.returnValue(of(mockData));

    const app = new UserListComponent(apiService);
    app.getUsers();
    expect(app.users).toEqual(mockData, "valid data");
  });
});
