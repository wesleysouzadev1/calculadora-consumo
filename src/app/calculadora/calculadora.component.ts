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
    unidade: 'g' | 'kg' = 'g';          // Pode manter um padrão aqui
    quantidadeBase: number | null = null;
    valorBase: number | null = null;
    quantidadeGramas: number | null = null;
    resultado1: number | null = null;
    resultado2: number | null = null;
  
    calcular(): void {
      if (
        this.quantidadeBase === null ||
        this.valorBase === null ||
        this.quantidadeGramas === null
      ) {
        this.resultado1 = null;
        return;
      }
  
      const quantidadeEmGramas = this.unidade === 'kg'
        ? this.quantidadeBase * 1000
        : this.quantidadeBase;
  
      const precoPorGrama = this.valorBase / quantidadeEmGramas;
      this.resultado1 = precoPorGrama * this.quantidadeGramas;

      const valorComLucro = this.resultado1 * 1.55; // 50% de lucro
      this.resultado2 = valorComLucro; // Armazena o valor com lucro
    }
}
  
