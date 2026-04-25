<template>
<section>
<h2>RSS</h2>
<p>Este endpoint sirve para generar el feed RSS. En GitHub Pages puedes pre-generar `rss.xml` o producirlo en build.</p>
</section>
</template>
<script setup>
import { onMounted } from 'vue'
import { applySEO } from '../utils/seo.js'

onMounted(() => {
  applySEO({
    title: 'RSS | ApoyoEduca',
    description: '',
    path: '/rss.xml',
    noindex: true
  })
})
</script>