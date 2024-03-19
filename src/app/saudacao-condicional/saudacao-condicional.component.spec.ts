import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudacaoCondicionalComponent } from './saudacao-condicional.component';

describe('SaudacaoCondicionalComponent', () => {
  let component: SaudacaoCondicionalComponent;
  let fixture: ComponentFixture<SaudacaoCondicionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaudacaoCondicionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaudacaoCondicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
