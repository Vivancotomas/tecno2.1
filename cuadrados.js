class Cuadrado {
  constructor(pos, img, fondo, lado) {
    this.pos = pos;
    this.img = img;
    this.fondo = fondo;
    this.lado = lado;
  }

  mostrarFondo() {
    // Dibujar el fondo del cuadrado sin aplicar tint
    noTint();
    image(this.fondo, this.pos.x * tamañoCuadricula - tamañoCuadricula / 2, this.pos.y * tamañoCuadricula - tamañoCuadricula / 2, tamañoCuadricula * 2, tamañoCuadricula * 2);
  }

  mostrarCuadrado() {
    let coloresCalidos = [color(255, 0, 0), color(255, 165, 0), color(255, 255, 0)];
    let coloresFrios = [color(0, 200, 250), color(0, 0, 255), color(0, 0, 139)];

    let factor = mic.getLevel() * 10;
    factor = constrain(factor, 0, 1);

    let numColoresCalidos = coloresCalidos.length;
    let numColoresFrios = coloresFrios.length;

    let indexCalido = floor(factor * (numColoresCalidos - 1));
    let indexFrio = floor(factor * (numColoresFrios - 1));

    indexCalido = constrain(indexCalido, 0, numColoresCalidos - 1);
    indexFrio = constrain(indexFrio, 0, numColoresFrios - 1);

    let localFactorCalido = (factor * (numColoresCalidos - 1)) % 1;
    let localFactorFrio = (factor * (numColoresFrios - 1)) % 1;

    let colorInterpoladoCalido = lerpColor(coloresCalidos[indexCalido], coloresCalidos[indexCalido + 1] || coloresCalidos[indexCalido], localFactorCalido);
    let colorInterpoladoFrio = lerpColor(coloresFrios[indexFrio], coloresFrios[indexFrio + 1] || coloresFrios[indexFrio], localFactorFrio);

    let tintColor = lerpColor(colorInterpoladoCalido, colorInterpoladoFrio, factor);

    // Dibujar la imagen del cuadrado con transparencia para el efecto de superposición
    tint(tintColor);
    image(this.img, this.pos.x * tamañoCuadricula - tamañoCuadricula / 2, this.pos.y * tamañoCuadricula - tamañoCuadricula / 2, tamañoCuadricula * 2, tamañoCuadricula * 2);

    // Dibujar el borde del cuadrado sin stroke
    noFill();
    noStroke();
    rect(this.pos.x * tamañoCuadricula - tamañoCuadricula / 2, this.pos.y * tamañoCuadricula - tamañoCuadricula / 2, tamañoCuadricula * 2, tamañoCuadricula * 2);
  }
}
