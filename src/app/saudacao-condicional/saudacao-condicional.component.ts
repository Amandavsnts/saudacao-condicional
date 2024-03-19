import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';

import localePtBR from '@angular/common/locales/pt';
import { PrevisaoTempoService } from '../services/previsao-tempo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-saudacao-condicional',
  standalone: true,
  providers: [{ provide: LOCALE_ID, useValue: 'pt_BR' }, DatePipe],
  imports: [CommonModule],
  templateUrl: './saudacao-condicional.component.html',
  styleUrls: ['./saudacao-condicional.component.scss'],
})
export class SaudacaoCondicionalComponent implements OnInit {
  horaAtual: Date = new Date();
  saudacao: string = '';
  diaDaSemana: string | null = '';

  city = 'Aracaju';
  clima: any;

  constructor(
    public datePipe: DatePipe,
    private http: HttpClient,
    private previsaoDoTempo: PrevisaoTempoService
  ) {
    registerLocaleData(localePtBR);
  }

  ngOnInit() {
    this.atualizarSaudacao();
    this.atualizarDiaDaSemana();
    this.obterPrevisao();
  }

  atualizarSaudacao() {
    const horaAtual = this.horaAtual.getHours();

    if (horaAtual >= 6 && horaAtual < 12) {
      this.saudacao = 'Bom dia!';
    } else if (horaAtual >= 12 && horaAtual < 18) {
      this.saudacao = 'Boa tarde!';
    } else {
      this.saudacao = 'Boa noite!';
    }
  }

  atualizarDiaDaSemana() {
    this.diaDaSemana = this.datePipe.transform(this.horaAtual, 'EEEE');
  }

  obterPrevisao(): void {
    this.previsaoDoTempo.obterPrevisao(this.city).subscribe((clima) => {
      this.clima = clima;
      console.log(clima);
    });
  }
}
