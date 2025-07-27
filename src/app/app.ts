import { Component , OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LogInPage } from "./page/log-in-page/log-in-page";
import { AdminPage } from "./page/admin-page/admin-page";


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [LogInPage, AdminPage]
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}