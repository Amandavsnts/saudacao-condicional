import { Component, Input, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-barra-navegacao',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './barra-navegacao.component.html',
  styleUrl: './barra-navegacao.component.scss'
})
export class BarraNavegacaoComponent implements OnInit {

  items: { label: string; icon?: string }[];

  constructor() {
    this.items = []; // Inicializa 'items' como um array vazio
  }


  ngOnInit(): void {
      this.items = [
          {
              label: 'File',
              icon: 'pi pi-fw pi-file',
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
          },
          {
              label: 'Users',
              icon: 'pi pi-fw pi-user',
          },
          {
              label: 'Events',
              icon: 'pi pi-fw pi-calendar',
          },
          {
              label: 'Quit',
              icon: 'pi pi-fw pi-power-off'
          }
    ];
  } 
}

