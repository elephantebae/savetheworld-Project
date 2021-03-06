import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService
  ) {}
  ngOnInit() {}
  goHome() {
    this._router.navigateByUrl("/home");
  }
}
