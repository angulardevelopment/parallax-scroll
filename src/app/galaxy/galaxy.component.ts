import { Component, OnInit } from '@angular/core';
import { ParallaxConf } from "../parallax-config";
import { IParallaxScrollConfig } from "ngx-parallax-scroll";
import { animations } from "../animations";

interface Position {
  left: string;
  top: string;
}

interface Star {
  img: string;
  position: Position;
  conf: IParallaxScrollConfig;
}
@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.scss'],
  animations: animations

})
export class GalaxyComponent implements OnInit {

 public minStarsCount: number = 10;
 public maxStarsCount: number = 30;
  stars: Array<Star> = [];

  ngOnInit() {
    this.generateStars();
  }

  generateStars() {
    for (let index = 0; index < this.generatedRandomStarsCount(); index++) {
      this.stars.push({
        img: `https://github.com/farengeyt451/ngx-parallax-scroll/blob/master/src/assets/planet-${Math.round(
          Math.random() * 4
        )}.png?raw=true`,
        position: this.generatePosition(),
        conf: new ParallaxConf()
      });
    }
  }

  generatePosition(): Position {
    return {
      left: `${this.mathRandom(100)}%`,
      top: `${this.mathRandom(200)}%`
    };
  }

  mathRandom(endpoint: number): number {
    return Math.round(Math.random() * endpoint);
  }

  generatedRandomStarsCount(): number {
    return Math.floor(
      Math.random() * (this.maxStarsCount - this.minStarsCount + 1) +
        this.minStarsCount
    );
  }

  onGalaxyGenerate() {
    this.stars = [];
    this.generateStars();
  }

}
