import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-ingreso',
  templateUrl: './registro-ingreso.component.html',
  styleUrls: ['./registro-ingreso.component.css']
})
export class RegistroIngresoComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});
  selectedCard!: string;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
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

  onSubmit() {
    const formData = this.formulario.value;
    console.log('Form Data:', formData);
  }

  selectCard(cardType: string) {
    this.selectedCard = cardType;
    this.formulario.patchValue({ tipoVehiculo: cardType });
  }
}
