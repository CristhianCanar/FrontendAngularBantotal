import { Component, Input } from '@angular/core';
import { Persona } from '../../models/personas/persona.model';

@Component({
  selector: 'app-profile-header',
  imports: [],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.css',
})
export class ProfileHeader {
  @Input() persona: Persona | null = null;
}
