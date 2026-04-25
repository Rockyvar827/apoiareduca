// src/utils/seo.js

export const materiaNames = {
  ccnn: 'Ciencias Naturales',
  ccss: 'Ciencias Sociales',
  mate: 'Matemáticas',
  leng: 'Lengua',
  ingl: 'Inglés'
}

export const nivelNames = {
  '1': '1º Primaria', '2': '2º Primaria', '3': '3º Primaria',
  '4': '4º Primaria', '5': '5º Primaria', '6': '6º Primaria'
}
// src/utils/seo.js — añade el parámetro noindex
export function applySEO({ title, description, path, noindex = false }) {
  document.title = title

  // description
  let desc = document.querySelector('meta[name="description"]')
  if (!desc) {
    desc = document.createElement('meta')
    desc.setAttribute('name', 'description')
    document.head.appendChild(desc)
  }
  desc.setAttribute('content', description ?? '')

  // robots
  let robots = document.querySelector('meta[name="robots"]')
  if (!robots) {
    robots = document.createElement('meta')
    robots.setAttribute('name', 'robots')
    document.head.appendChild(robots)
  }
  robots.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow')

  // canonical — apunta siempre a / en el 404
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', `https://apoyoeduca.net${path}`)
}