import { Component, Input } from '@angular/core';
import { ProfileHeader } from "../profile-header/profile-header";
import { ProfileInfo } from "../profile-info/profile-info";
import { Persona } from '../../models/personas/persona.model';

@Component({
  selector: 'app-profile-card',
  imports: [ProfileHeader, ProfileInfo],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  @Input() persona: Persona | null = null;
}
