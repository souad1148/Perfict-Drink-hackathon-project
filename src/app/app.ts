import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from "./components/hero/hero";
import { Products } from "./components/products/products";
import { MenuCarousel } from "./components/menu-carousel/menu-carousel";
import { AboutUs } from "./components/about-us/about-us";
import { OrderSection } from "./components/order-section/order-section";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Products, MenuCarousel, AboutUs, OrderSection, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}
