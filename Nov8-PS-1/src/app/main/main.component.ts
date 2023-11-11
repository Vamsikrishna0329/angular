



// main.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  isGeneratingNumbers = false;
  shouldDisplayOutput = false;

  start(): void {
    if (!this.isGeneratingNumbers) {
      // Implement logic to start OddCmp and EvenCmp
      this.oddNumbers = [];
      this.evenNumbers = [];
      this.isGeneratingNumbers = true;
      this.shouldDisplayOutput = true;
    }
  }

  stop(): void {
    if (this.isGeneratingNumbers) {
      // Implement logic to stop OddCmp and EvenCmp
      this.isGeneratingNumbers = false;
      this.shouldDisplayOutput = false;
    }
  }

  receiveOddNumber(number: number): void {
    if (this.isGeneratingNumbers){
    this.oddNumbers.push(number);
  }
}

  receiveEvenNumber(number: number): void {
    if (this.isGeneratingNumbers) {
    this.evenNumbers.push(number);
  }
}
}