// Auto-generated questions.js
// Exports:
// - getQuestionsFor({ nivel, materia, unidad, category, count })
// - allQuestions (array)
//
// 📁 PARA AGREGAR UN NUEVO JSON:
//    1. Crea tu archivo, e.g. ./questions.ccss4.json
//    2. Añade una línea import aquí abajo
//    3. Añádelo al array questionSources
//    ¡Nada más cambia!

import baseQuestions      from './questions.json'        assert { type: 'json' };
import ccss4Questions     from './questions.ccss4.json'  assert { type: 'json' };
import lc7comaypunto      from './questions.lcud7.json'  assert { type: 'json' };
import lc7verbos      from './questions.lcud7'  assert { type: 'json' };
import lc7extranjerismos      from './questions_lcud7_extranje.json'  assert { type: 'json' };
import lc8adverbios      from './question_lcud8_adver.json'  assert { type: 'json' };
import lc8preposiciones      from './questions_lcud8_preposicion.json'  assert { type: 'json' };
import lc8palabrasinvariables      from './questions_lc8_palabrasinva.json'  assert { type: 'json' };
import mates7numerosenteros      from './questions_mates7.json'  assert { type: 'json' };
import mates8angulos      from './questions_mates8_angu.json'  assert { type: 'json' };
import mates8medidasangu      from './questions_mates8_medidas_angu.json'  assert { type: 'json' };
import mates8tiposangulos      from './questions_mates8_tiposangu.json'  assert { type: 'json' };
import mates8anguconsecutivos      from './questions_mates8_anguconse.json'  assert { type: 'json' };
import mates8angucomplementarios      from './mates8_angucomplemen.json'  assert { type: 'json' };
import ccss5materiayenergia      from './ccss_u5_materia_energia.json'  assert { type: 'json' };
// import musicQuestions     from './questions_music.json'   assert { type: 'json' };

// ─── Agrega aquí todos los orígenes ───────────────────────────────────────────
const questionSources = [
  baseQuestions,
  ccss4Questions,
  lc7comaypunto,
  lc7verbos,
  lc7extranjerismos,
  lc8adverbios,
  lc8preposiciones,
  lc8palabrasinvariables,
  mates7numerosenteros,
  mates8angulos,
  mates8medidasangu,
  mates8tiposangulos,
  mates8anguconsecutivos,
  mates8angucomplementarios,
  ccss5materiayenergia,
  // musicQuestions,
];
// ──────────────────────────────────────────────────────────────────────────────

export const allQuestions = questionSources.flat();

export function getQuestionsFor({ nivel, materia, unidad, category, count = 12 } = {}) {
  const lvl = nivel    === undefined ? undefined : String(nivel);
  const mat = materia  === undefined ? undefined : String(materia).toLowerCase();
  const uni = unidad   === undefined ? undefined : String(unidad);
  const cat = category === undefined ? undefined : String(category);

  let pool = allQuestions.slice();
  if (lvl !== undefined) pool = pool.filter(q => String(q.nivel)                    === lvl);
  if (mat !== undefined) pool = pool.filter(q => String(q.materia).toLowerCase()    === mat);
  if (uni !== undefined) pool = pool.filter(q => String(q.unidad)                   === uni);
  if (cat !== undefined) pool = pool.filter(q => String(q.category)                 === cat);

  if (!pool.length) return [];

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}

export default allQuestions;