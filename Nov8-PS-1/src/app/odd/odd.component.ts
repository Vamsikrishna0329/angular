



// odd.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Output() oddNumber = new EventEmitter<number>();
  private counter = 1;
  private intervalId: any; // Store the interval ID to clear it later

  ngOnInit(): void {
    // Start generating odd numbers
    this.startOddNumbers();
  }

  private startOddNumbers(): void {
    this.intervalId = setInterval(() => {
      this.oddNumber.emit(this.counter);
      this.counter += 2;
    }, 1000);
  }

  ngOnDestroy(): void {
    // Stop generating odd numbers when the component is destroyed
    clearInterval(this.intervalId);
  }
}