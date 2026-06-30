# Fabyan - Portafolio Personal

Este es el repositorio de mi portafolio personal, construido con tecnologías modernas para ofrecer un rendimiento óptimo y una experiencia de usuario fluida, con soporte bilingüe (Español/Inglés) y un diseño adaptable (modo claro/oscuro).

## Características principales

- **Bilingüe:** Soporte nativo para Español e Inglés gestionado globalmente.
- **Modos de Tema:** Cambia fácilmente entre un diseño de tema claro y oscuro, con persistencia.
- **Tecnologías Modernas:** Construido con [Next.js](https://nextjs.org), React y [Tailwind CSS](https://tailwindcss.com) para los estilos.
- **Estado Global:** Uso de [Zustand](https://github.com/pmndrs/zustand) para la gestión del estado (idioma y temas).
- **Diseño Responsivo & Animado:** Adaptado para móviles y computadoras de escritorio, con microinteracciones y efectos modernos.
- **Formulario de Contacto:** Validación en cliente y redirección mediante `mailto:` para envíos rápidos sin backend.

## Desarrollo Local

Primero, instala las dependencias y ejecuta el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

Puedes empezar a editar la página modificando componentes dentro de `app/components/`.

## Despliegue en Vercel

La forma más rápida y recomendada de desplegar esta aplicación es utilizando [Vercel](https://vercel.com/), plataforma de los creadores de Next.js.

### Pasos para desplegar:

1. **Subir a GitHub:** Asegúrate de que todos los cambios estén subidos (push) a tu repositorio de GitHub.
2. **Iniciar sesión en Vercel:** Ve a [vercel.com](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
3. **Importar Proyecto:**
   - En el panel de Vercel (Dashboard), haz clic en **"Add New..."** y luego en **"Project"**.
   - Autoriza a Vercel para acceder a tus repositorios y selecciona este repositorio.
4. **Configuración de Despliegue:**
   - Vercel detectará automáticamente que es un proyecto de Next.js.
   - Puedes dejar todas las configuraciones por defecto (Build command: `npm run build`, Output directory: `.next`).
   - Haz clic en **"Deploy"**.
5. **¡Listo!** En pocos minutos, tu aplicación estará disponible globalmente en una URL segura (`.vercel.app`).
   - A partir de ahora, cada vez que hagas un `git push` a la rama `main`, Vercel desplegará automáticamente la nueva versión.
