import { TestBed, async } from "@angular/core/testing";
import { ApiService } from "./api.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { User } from "./user/user.model";

const mockData = [
  { id: 1101001, name: "Piter", username: "Smith", email: "test@mail.com" }
  // { id: 1001101, name: "Sara", username: "Parker", email: "test2@mail.com" }
] as User[];

describe("ApiService", () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(ApiService);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  it("shoild return mock user", () => {
    service.getUsers().subscribe(user => {
      expect(user).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(service.USER_URL);

    expect(req.request.method).toEqual("GET");
    req.flush(mockData);
  });
});
