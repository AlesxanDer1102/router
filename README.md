# React Router desde Cero

Una implementación personalizada de un enrutador React construido desde cero, inspirado en React Router.

## Características

- Enrutamiento dinámico basado en componentes
- Soporte para rutas anidadas
- Navegación programática
- Manejo de rutas dinámicas con parámetros
- Internacionalización (i18n) integrada
- Carga diferida (lazy loading) de componentes
- Manejo de error 404

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/AlesxanDer1102/router.git

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

Uso

```jsx
import { Router, Route } from './Router'

function App() {
	return (
		<Router>
			<Route
				path='/'
				Component={HomePage}
			/>
			<Route
				path='/about'
				Component={AboutPage}
			/>
			<Route
				path='/search/:query'
				Component={SearchPage}
			/>
		</Router>
	)
}
```

API
<Router>
Componente principal que maneja el estado de la navegación.

<Route>
Define una ruta y su componente asociado.

<Link>
Componente para navegación declarativa.

navigate()
Función para navegación programática.

Tests
Los tests están escritos usando Vitest y React Testing Library.

```bash
# Ejecutar tests
pnpm test

# Ver reporte visual de tests
pnpm test:ui
```

Licencia
MIT
