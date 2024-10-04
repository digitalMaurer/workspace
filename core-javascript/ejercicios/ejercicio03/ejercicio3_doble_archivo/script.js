function checkWheel() {
  // Obtener los valores de entrada
  const diameter = parseFloat(document.getElementById('diameter').value);
  const thickness = parseFloat(document.getElementById('thickness').value);
  let message = '';
  let thicknessMessage = '';

  // Comprobar el diámetro y asignar el mensaje
  if (diameter > 1.4) {
    message = 'La rueda es para un vehículo grande.';
    if (thickness < 0.4) {
      thicknessMessage = 'El grosor para esta rueda es inferior al recomendado.';
    }
  } else if (diameter > 0.8 && diameter <= 1.4) {
    message = 'La rueda es para un vehículo mediano.';
    if (thickness < 0.25) {
      thicknessMessage = 'El grosor para esta rueda es inferior al recomendado.';
    }
  } else {
    message = 'La rueda es para un vehículo pequeño.';
  }

  // Mostrar el mensaje principal
  document.getElementById('result').innerText = message;

  // Mostrar o esconder el mensaje de grosor
  if (thicknessMessage) {
    document.getElementById('thickness-warning').innerText = thicknessMessage;
    document.getElementById('thickness-warning').style.display = 'block';
  } else {
    document.getElementById('thickness-warning').style.display = 'none';
  }
}
