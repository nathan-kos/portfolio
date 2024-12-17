import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificate-modal',
  standalone: true,
  imports: [],
  templateUrl: './certificate-modal.component.html',
  styleUrl: './certificate-modal.component.css',
})
export class CertificateModalComponent {
  @Input() src: string | undefined;
}
