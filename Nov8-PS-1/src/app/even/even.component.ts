


// even.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Output() evenNumber = new EventEmitter<number>();
  private counter = 2;
  private intervalId: any; // Store the interval ID to clear it later

  ngOnInit(): void {
    // Start generating even numbers
    this.startEvenNumbers();
  }

  private startEvenNumbers(): void {
    this.intervalId = setInterval(() => {
      this.evenNumber.emit(this.counter);
      this.counter += 2;
    }, 1000);
  }

  ngOnDestroy(): void {
    // Stop generating even numbers when the component is destroyed
    clearInterval(this.intervalId);
  }
}
