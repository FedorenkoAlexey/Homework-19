import { TestBed, async } from "@angular/core/testing";
import { ApiService } from "./api.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { User } from "./user/user.model";
import { Post } from "./post/post.model";

const mockUserData = [
  { id: 1101001, name: "Piter", username: "Smith", email: "test@mail.com" }
] as User[];

const mockPostData = [
  {
    userId: 3,
    id: 22,
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio"
  }
] as Post[];

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
      expect(user).toEqual(mockUserData);
    });

    const req = httpTestingController.expectOne(service.USER_URL);

    expect(req.request.method).toEqual("GET");
    req.flush(mockUserData);
  });

  it("shoild return mock post", () => {
    service.getPosts(3).subscribe(post => {
      expect(post).toEqual(mockPostData);
    });

    const req = httpTestingController.expectOne(`${service.POST_URL}3`);

    expect(req.request.method).toEqual("GET");
    req.flush(mockPostData);
  });
});
