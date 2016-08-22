import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from "./home/home.component";
import { routing } from "./home.routing";
import { SharedModule } from "../shared/shared.module";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        routing,
        SharedModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        AppComponent
    ],
    bootstrap: [
        HomeComponent
    ]
})
export class HomeModule {}