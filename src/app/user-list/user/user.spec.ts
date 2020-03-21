import { UserComponent } from "./user.component";

describe("UserComponent", () => {
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
