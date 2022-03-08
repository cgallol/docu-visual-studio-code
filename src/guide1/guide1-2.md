# Configuración

## Settings

Abrir el archivo de configuracion **JSON** que se encuentra entrando a configuración y entrando en el icono marcada en la imagen.

<div style="display:flex; justify-content:center; align-items:center">
  <img src="/img/img-con-json.png">
</div>

## Configuración inicial

```js
{
    "extensions.ignoreRecommendations": true,
    "workbench.startupEditor": "none",
    "editor.formatOnSave": true,
    "editor.detectIndentation": false,
    "editor.tabSize": 4,
    "emmet.includeLanguages": {
        "vue": "html",
        "md": "html"
    },
}
```

-   **editor.formatOnSave:** formateo cuando se guarda
-   **editor.detectIndentation:** detectar indentación (se arregla con un formateador)
-   **editor.tabsize:** tabulador en 4 espacios
-   **emmet.includeLanguages:** reconocimiento de comandos dentro de archivos (ejm: archivo .vue reconocera etiquetas html)
