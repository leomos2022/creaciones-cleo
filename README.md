# 🧵 Creaciones Cleo - Sitio Web Profesional

Sitio web profesional para servicios de costura y arreglos de ropa de Cleo Rodríguez.

## 📋 Características

- ✨ Diseño moderno y responsivo
- 🎨 Interfaz de usuario intuitiva
- 📱 Optimizado para dispositivos móviles
- 📧 Formulario de contacto funcional
- 📸 Galería de portafolio
- ⭐ Sección de testimonios
- 🔗 Integración con redes sociales

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **Remix Icons** - Iconografía moderna
- **JavaScript ES6+** - Sintaxis moderna de JavaScript

## 📁 Estructura del Proyecto

```
CLEOWEBSITE/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── hero/          # Imágenes de la sección principal
│   │       ├── services/      # Imágenes de servicios
│   │       ├── portfolio/     # Imágenes del portafolio
│   │       ├── reviews/       # Imágenes de testimonios
│   │       └── logo/          # Logos y branding
│   ├── components/            # Componentes React
│   ├── constants/             # Datos y configuración
│   └── main.jsx              # Punto de entrada
├── public/                   # Archivos públicos
└── package.json             # Dependencias del proyecto
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/creaciones-cleo.git
   cd creaciones-cleo
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 💻 Desarrollo con Visual Studio Code

### Configuración Recomendada

1. **Instalar extensiones útiles:**
   - **ES7+ React/Redux/React-Native snippets**
   - **Tailwind CSS IntelliSense**
   - **Prettier - Code formatter**
   - **ESLint**
   - **Auto Rename Tag**

2. **Configurar el workspace:**
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "tailwindCSS.includeLanguages": {
       "javascript": "javascript",
       "html": "HTML"
     }
   }
   ```

### Comandos Útiles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de la build
npm run lint         # Ejecutar ESLint
```

## 📝 Personalización

### Modificar Contenido

1. **Datos del sitio:** Edita `src/constants/index.js`
2. **Estilos:** Modifica `src/index.css` o clases de Tailwind
3. **Componentes:** Edita archivos en `src/components/`

### Agregar Nuevas Imágenes

1. Coloca las imágenes en la carpeta correspondiente:
   - `src/assets/images/hero/` - Para imágenes principales
   - `src/assets/images/services/` - Para servicios
   - `src/assets/images/portfolio/` - Para portafolio
   - `src/assets/images/reviews/` - Para testimonios

2. Importa la imagen en `src/constants/index.js`
3. Usa la imagen en el componente correspondiente

## 🌐 Despliegue en GitHub Pages

### Método 1: GitHub Actions (Recomendado)

1. **Crear archivo de workflow:**
   Crea `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Configurar GitHub Pages:**
   - Ve a Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### Método 2: Despliegue Manual

1. **Construir el proyecto:**
   ```bash
   npm run build
   ```

2. **Subir a GitHub:**
   ```bash
   git add .
   git commit -m "Build for production"
   git push origin main
   ```

3. **Configurar GitHub Pages:**
   - Ve a Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs (cambia la carpeta de build a docs en vite.config.js)

### Configurar Vite para GitHub Pages

Edita `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/creaciones-cleo/', // Cambia por tu nombre de repositorio
  build: {
    outDir: 'dist',
  }
})
```

## 📧 Configuración del Formulario de Contacto

El formulario actualmente simula el envío. Para hacerlo funcional:

1. **Usar un servicio de formularios:**
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://docs.netlify.com/forms/setup/)
   - [EmailJS](https://www.emailjs.com/)

2. **Ejemplo con EmailJS:**
   ```javascript
   import emailjs from '@emailjs/browser';
   
   const handleSubmit = async (e) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     try {
       await emailjs.sendForm(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         e.target,
         'YOUR_PUBLIC_KEY'
       );
       setSubmitStatus('success');
     } catch (error) {
       setSubmitStatus('error');
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:
- 📧 Email: tu-email@ejemplo.com
- 💬 WhatsApp: +57 300-4039937

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para Creaciones Cleo**
