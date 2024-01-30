import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  selectedCard!: string;
  selectedCards: string[] = [];
  vehiculos = [
    { tipo: 'Carro', imagen: 'https://cdn-icons-png.flaticon.com/512/3202/3202926.png' },
    { tipo: 'Moto', imagen: 'https://cdn-icons-png.flaticon.com/512/3988/3988406.png' },
    { tipo: 'Bicicleta', imagen: 'https://cdn.icon-icons.com/icons2/2645/PNG/512/bicycle_icon_160403.png' }
  ];
  constructor(private fb: FormBuilder) {
    this.generateRandomCards();
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.formulario = this.fb.group({
      tipoVehiculo: ['',Validators.required],
      placa: ['',Validators.required],
      modelo: ['',Validators.required],
      color: ['',Validators.required],
      horaIngreso: ['',Validators.required]
    });
  }

  generateRandomCards() {
    this.selectedCards = [];
    while (this.selectedCards.length < 12) {
      const randomIndex = Math.floor(Math.random() * this.vehiculos.length);
      const randomVehicle = this.vehiculos[randomIndex].tipo;
      if (!this.selectedCards.includes(randomVehicle)) {
        this.selectedCards.push(randomVehicle);
      }
    }
    console.log(this.selectedCards)
  }

  getVehicleImage(vehicle: string): string {
    const selectedVehicle = this.vehiculos.find(v => v.tipo === vehicle);
    return selectedVehicle ? selectedVehicle.imagen : '';
  }

  onSubmit() {
    const formData = this.formulario.value;
    console.log('Form Data:', formData);
  }

  selectCard(cardType: string) {
    this.selectedCard = cardType;
    this.formulario.patchValue({ tipoVehiculo: cardType });
  }
}
