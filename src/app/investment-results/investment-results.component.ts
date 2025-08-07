import { CurrencyPipe } from '@angular/common';
import { Component,input,computed, Input,inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  imports: [CurrencyPipe]
})
export class InvestmentResultsComponent {
 private investmentService= inject(InvestmentService);

 results = computed(() => this.investmentService.resultData())
}
