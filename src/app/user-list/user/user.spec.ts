import { TestBed, async } from "@angular/core/testing";
import { UserComponent } from "./user.component";

describe("UserComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents();
  }));

  it("should create the app-user", () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("transfer user id", () => {
    const app = new UserComponent();
    app.user = {
      id: 10001111,
      name: "Jhon",
      username: "Smith",
      email: "test@mail.com"
    };

    spyOn(app.transferId, "emit");
    app.getUserId();
    expect(app.transferId.emit(3)).toBe();
  });
});
