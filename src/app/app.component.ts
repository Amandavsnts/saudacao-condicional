import { environment } from './../environments/environment';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { SaudacaoCondicionalComponent } from './saudacao-condicional/saudacao-condicional.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BarraNavegacaoComponent,
    SaudacaoCondicionalComponent,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'visitante';
}
