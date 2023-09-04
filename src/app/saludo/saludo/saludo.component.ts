import { Component, OnInit, OnDestroy } from '@angular/core';
import { SaludoService } from '../saludo.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit, OnDestroy {

  saludo: string | undefined;
  private intervalSubscription: Subscription | undefined;

  constructor(private saludoService: SaludoService) {}

  ngOnInit(): void {
    this.updateSaludo();
    this.intervalSubscription = interval(5000).subscribe(() => {
      this.updateSaludo();
    });
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  updateSaludo(): void {
    this.saludo = this.saludoService.getSaludo();
  }
}