import { Component, Input } from '@angular/core';
import { Persona } from '../../models/personas/persona.model';

@Component({
  selector: 'app-profile-info',
  imports: [],
  templateUrl: './profile-info.html',
  styleUrl: './profile-info.css',
})
export class ProfileInfo {
  @Input() persona: Persona | null = null;
}
