import { Component, OnInit } from '@angular/core';
import { cursosBD } from '../modelos/cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  public cursosAll:Array<cursosBD>
  public Nota:number

  constructor(){
    this.cursosAll = [
      new cursosBD("Desallorador Web", "Aprender a cear Paginás Web ", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cupiditate non, fugit officia, quam doloribus asperiores nesciunt, esse amet nobis rem explicabo doloremque repellat? Odit nesciunt repudiandae odio ipsum ratione.", true ),
      new cursosBD("Applicación Web", "Desallorador Applicación Web ", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cupiditate non, fugit officia, quam doloribus asperiores nesciunt, esse amet nobis rem explicabo doloremque repellat? Odit nesciunt repudiandae odio ipsum ratione.", true ),
      new cursosBD("Securidad Informatico", "Aprender la securidad entorno Infirmatica ", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cupiditate non, fugit officia, quam doloribus asperiores nesciunt, esse amet nobis rem explicabo doloremque repellat? Odit nesciunt repudiandae odio ipsum ratione.", false )
    ]
    this.Nota = 0
  }

  ngOnInit(): void {
    console.log(this.cursosAll)
  }


}
