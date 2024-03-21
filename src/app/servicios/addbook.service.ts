import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../components/interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class AddbookService {

  librosSignal = signal<Book[]>([]);
}