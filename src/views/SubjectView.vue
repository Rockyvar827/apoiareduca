<template>
<section>
<h2 class="text-2xl font-bold">{{ materia }} — Nivel {{ nivel }}º</h2>
<p class="mb-4">Elige unidad para comenzar el cuestionario</p>
<div class="flex gap-3">
<router-link v-for="u in unidades" :key="u" :to="`/nivel/${nivel}/materia/${materia}/unidad/${u}`" class="btn">Unidad {{ u }}</router-link>
</div>
</section>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { applySEO, materiaNames, nivelNames } from '../utils/seo.js'
const route = useRoute()
const nivel = route.params.nivel
const materia = route.params.materia
const unidades = [1,2]

onMounted(() => {
  applySEO({
    title: `${materiaNames[materia]} - ${nivelNames[nivel]} | ApoyoEduca`,
    description: `Elige unidad de ${materiaNames[materia]} para ${nivelNames[nivel]} y comienza el cuestionario.`,
    path: route.path
  })
})
</script>