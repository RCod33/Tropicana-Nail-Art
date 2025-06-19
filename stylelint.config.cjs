module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    indentation: 2, // Indentación con 2 espacios
    "number-leading-zero": "always", // Siempre 0 antes del decimal (ej: 0.5)
    "string-quotes": "double", // Comillas dobles en strings
    "color-hex-case": "lower", // Colores hexadecimales en minúsculas (#ff0000)
    "color-hex-length": "short", // Usar formato corto si es posible (#fff)
    "block-no-empty": true, // Prohíbe bloques vacíos
    "max-empty-lines": 2, // Máximo 1 línea vacía consecutiva
    "selector-max-id": 1, // Prohíbe selectores con ID (#id)
    "selector-max-class": 3, // Máximo 3 clases por selector
    "no-descending-specificity": true, // Evita que un selector menos específico sobreescriba uno más específico
    "property-no-vendor-prefix": true, // Prohíbe prefijos de navegador en propiedades (ej: -webkit-)
    "value-no-vendor-prefix": true, // Prohíbe prefijos de navegador en valores
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ], // Línea vacía antes de reglas (menos la primera o después de comentarios)
  },
};
