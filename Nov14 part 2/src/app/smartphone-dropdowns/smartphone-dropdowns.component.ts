import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Smartphone {
  name: string;
  models: string[];
  prices: { [key: string]: { color: string[]; price: number } };
}

@Component({
  selector: 'app-smartphone-dropdowns',
  templateUrl: './smartphone-dropdowns.component.html',
  styleUrls: ['./smartphone-dropdowns.component.css']
})
export class SmartphoneDropdownsComponent {
  smartphones: Smartphone[] = [
    {
      name: 'Smartphone 1',
      models: ['Model A', 'Model B'],
      prices: {
        'Model A': { color: ['Red', 'Blue'], price: 500 },
        'Model B': { color: ['Black', 'White'], price: 600 }
      }
    },
    // Add more smartphones as needed
  ];

  smartphoneForm: FormGroup;
  selectedColor: string = ''; // Initialize with an empty string
  selectedPrice: number | null = null; // Initialize with null

  constructor(private fb: FormBuilder) {
    this.smartphoneForm = this.fb.group({
      smartphone: [''],
      model: [''],
      color: ['']
    });

    this.smartphoneForm.valueChanges.subscribe(() => {
      this.updateDropdowns();
    });
  }

  updateDropdowns() {
    const selectedSmartphone = this.getSelectedSmartphone();
    const selectedModel = this.smartphoneForm.value.model;

    if (selectedSmartphone && selectedModel) {
      this.selectedColor = this.smartphoneForm.value.color;
      this.selectedPrice = this.getSelectedPrice();
    } else {
      this.selectedColor = '';
      this.selectedPrice = null;
    }
  }

  get models() {
    const selectedSmartphone = this.getSelectedSmartphone();
    return selectedSmartphone ? selectedSmartphone.models : [];
  }

  get colors() {
    const selectedSmartphone = this.getSelectedSmartphone();
    const selectedModel = this.smartphoneForm.value.model;
    return selectedSmartphone && selectedModel ? selectedSmartphone.prices[selectedModel].color : [];
  }

  getSelectedSmartphone(): Smartphone | undefined {
    return this.smartphones.find(s => s.name === this.smartphoneForm.value.smartphone);
  }

  getSelectedPrice(): number | null {
    const selectedSmartphone = this.getSelectedSmartphone();
    const selectedModel = this.smartphoneForm.value.model;

    if (selectedSmartphone && selectedModel) {
      return selectedSmartphone.prices[selectedModel].price;
    }

    return null;
  }
}