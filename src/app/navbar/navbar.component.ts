import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu = [
    { texto: 'Painel', pagina: 'painel' },
    { texto: 'Novo', pagina: 'novo' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickItem(pagina: string): void {
    this.router.navigate([pagina], { skipLocationChange: true });
  }

}
