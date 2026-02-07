// Auto-generated questions.js
// Exports:
// - getQuestionsFor({ nivel, materia, unidad, category, count })
// - allQuestions (array)

import allQuestions from './questions.json' assert { type: 'json' };
export function getQuestionsFor({ nivel, materia, unidad, category, count = 12 } = {}) {
  // normalize to strings when provided
  const lvl = nivel === undefined ? undefined : String(nivel);
  const mat = materia === undefined ? undefined : String(materia).toLowerCase();
  const uni = unidad === undefined ? undefined : String(unidad);
  const cat = category === undefined ? undefined : String(category);
  

  let pool = allQuestions.slice();

  if (lvl !== undefined) pool = pool.filter(q => String(q.nivel) === lvl);
  if (mat !== undefined)
  pool = pool.filter(q => String(q.materia).toLowerCase() === mat);
  if (uni !== undefined) pool = pool.filter(q => String(q.unidad) === uni);
  if (cat !== undefined) pool = pool.filter(q => String(q.category) === cat);



  if (!pool.length) {
    // return empty array if nothing matches
    return [];
  }

  // shuffle and return up to count
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, Math.min(count, pool.length));
}

export { allQuestions };
export default allQuestions;
