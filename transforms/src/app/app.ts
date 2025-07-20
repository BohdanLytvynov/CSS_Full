import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export class Vector2{
  constructor(public x : number = 0, public y : number = 0)
  {

  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  ngAfterViewInit(): void {
    let elem = this.inp.nativeElement as HTMLElement;
    elem.focus();
  }

  protected title = 'transforms';

  boxPosition : Vector2 = new Vector2();

  @ViewChild('input') inp! : ElementRef;
  @ViewChild('box') box! : ElementRef;

  speed : number = 10;

  onMoveRight(event : KeyboardEvent)
  {      
    if(event.key === "d" || event.key === "D"){
      this.boxPosition.x += this.speed;
    }

    if(event.key === "a" || event.key === "A")
    {
      this.boxPosition.x -= this.speed;
    }
    
    if(event.key === "w" || event.key === "W"){
      this.boxPosition.y -= this.speed;
    }

    if(event.key === "s" || event.key === "S")
    {
      this.boxPosition.y += this.speed;
    }

    this.Move();
  }

  private Move() : void
  {
    let box = this.box.nativeElement as HTMLDivElement;
    box.style.transform = `translate(${this.boxPosition.x}px, ${this.boxPosition.y}px)`;
  }
}
