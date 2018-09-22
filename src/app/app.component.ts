import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  visibility: boolean = true;

  readMore(e) {
    this.visibility = !this.visibility;
  }
}
