module.exports = {
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'test', 'perf', 'revert']],
    'scope-empty': [0], // Permite un alcance vacío (opcional)
    'subject-empty': [2, 'never'], // El mensaje debe tener una descripción después de los dos puntos
    'subject-full-stop': [2, 'never'], // El mensaje no debe terminar con un punto
    'subject-case': [0], // No se aplica reglas de capitalización en la descripción
    'type-case': [2, 'always', 'lower-case'], // Los tipos de cambio deben estar en minúsculas
  },
};