import { Component, OnInit } from '@angular/core';
import * as prettier from 'prettier';
import * as babel from 'prettier/plugins/babel';
import * as estree from 'prettier/plugins/estree';

@Component({
  selector: 'app-prettier-demo',
  templateUrl: './prettier-demo.component.html',
  styleUrls: ['./prettier-demo.component.scss']
})
export class PrettierDemoComponent implements OnInit {

 constructor() {
   
  }

  ngOnInit(): void {
  }

  // test(){
  //    const code = `const foo = (a, b) => { return a + b }`;

  //   prettier
  //     .format(code, {
  //       parser: 'babel',
  //       plugins: [babel, estree],
  //     })
  //     .then((formattedCode) => {
  //       console.log(formattedCode);

  //       // const foo = (a, b) => {
  //       //   return a + b;
  //       // };
  //     });
  // }

}
