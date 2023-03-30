import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheExecuterComponent } from './tache-executer.component';

describe('TacheExecuterComponent', () => {
  let component: TacheExecuterComponent;
  let fixture: ComponentFixture<TacheExecuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheExecuterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacheExecuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
