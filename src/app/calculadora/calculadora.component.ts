import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 importa o módulo necessário
import { FormsModule } from '@angular/forms';    // 👈 para usar [(ngModel)]

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 importa os módulos aqui
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  unidade: 'g' | 'kg' = 'g';
  quantidadeBase: number = 0;
  valorBase: number = 0;
  consumo: number = 0;
  resultado: number | null = null;

  calcular(): void {
    if (!this.quantidadeBase || !this.valorBase || !this.consumo) {
      this.resultado = null;
      return;
    }

    const quantidadeEmGramas = this.unidade === 'kg' ? this.quantidadeBase * 1000 : this.quantidadeBase;
    const precoPorGrama = this.valorBase / quantidadeEmGramas;
    this.resultado = precoPorGrama * this.consumo;
  }
}
