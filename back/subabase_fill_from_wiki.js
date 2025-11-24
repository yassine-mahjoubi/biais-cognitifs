// Script pour remplir Supabase avec les biais cognitifs depuis Wikipedia
// Node.js requis

// ============================================
// 1. CONFIGURATION (À REMPLIR)
// ============================================
const SUPABASE_URL = 'https://axwfpclkiloziksybxgt.supabase.co'
const SUPABASE_KEY = 'sb_publishable_LWnBTh4w9hGlynjGnvcy-w_gDIkvZVu'

// Liste des biais à récupérer (commencez avec 5 pour tester)
const BIASES_TEST = [
  'Confirmation_bias',
  'Anchoring_(cognitive_bias)',
  'Availability_heuristic',
  'Dunning–Kruger_effect',
  'Hindsight_bias',
]

// ============================================
// 2. FONCTIONS UTILITAIRES
// ============================================

// Fonction pour faire une pause (rate limiting)
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Convertir le titre Wikipedia en slug
function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/,/g, '')
}

// ============================================
// 3. RÉCUPÉRER DEPUIS WIKIPEDIA
// ============================================

// Récupérer un biais depuis Wikipedia (EN ou FR)
async function getWikiBias(title, lang = 'en') {
  try {
    const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${title}`

    const response = await fetch(url)

    if (!response.ok) {
      console.log(`❌ ${lang.toUpperCase()}: "${title}" non trouvé`)
      return null
    }

    const data = await response.json()

    return {
      title: data.title,
      description: data.description || '',
      extract: data.extract || '',
      url: data.content_urls?.desktop?.page || '',
    }
  } catch (error) {
    console.error(`Erreur Wikipedia ${lang.toUpperCase()}:`, error.message)
    return null
  }
}

// Trouver la version française d'un biais
async function getFrenchTitle(englishTitle) {
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/${englishTitle}/links/language`
    const response = await fetch(url)

    if (!response.ok) return null

    const languages = await response.json()
    const frLink = languages.find((lang) => lang.code === 'fr')

    return frLink ? frLink.key : null
  } catch (error) {
    console.error('Erreur lors de la recherche de traduction FR:', error.message)
    return null
  }
}

// ============================================
// 4. INSÉRER DANS SUPABASE
// ============================================

// Insérer un biais dans la table "biases"
async function insertBias(slug, category = 'uncategorized') {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/biases`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify({
        slug: slug,
        category: category,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Erreur insertion biais:', error)
      return null
    }

    const data = await response.json()
    return data[0].id
  } catch (error) {
    console.error('Erreur insertion biais:', error.message)
    return null
  }
}

// Insérer une traduction dans "bias_translations"
async function insertTranslation(biasId, lang, wikiData) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/bias_translations`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bias_id: biasId,
        language: lang,
        title: wikiData.title,
        short_description: wikiData.description,
        full_description: wikiData.extract,
        wiki_url: wikiData.url,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error(`Erreur insertion traduction ${lang}:`, error)
      return false
    }

    return true
  } catch (error) {
    console.error(`Erreur insertion traduction ${lang}:`, error.message)
    return false
  }
}

// ============================================
// 5. FONCTION PRINCIPALE
// ============================================

async function processBias(biasTitle) {
  console.log(`\n📖 Traitement: ${biasTitle}`)

  // 1. Récupérer version anglaise
  const enData = await getWikiBias(biasTitle, 'en')
  if (!enData) {
    console.log('⏭️  Biais ignoré (non trouvé en anglais)')
    return
  }

  console.log(`✅ EN: "${enData.title}"`)

  // 2. Chercher version française
  const frTitle = await getFrenchTitle(biasTitle)
  let frData = null

  if (frTitle) {
    frData = await getWikiBias(frTitle, 'fr')
    if (frData) {
      console.log(`✅ FR: "${frData.title}"`)
    }
  } else {
    console.log('ℹ️  Pas de traduction française disponible')
  }

  // 3. Créer le slug
  const slug = titleToSlug(enData.title)

  // 4. Insérer dans Supabase
  const biasId = await insertBias(slug, 'information-overload')

  if (!biasId) {
    console.log('❌ Échec insertion du biais')
    return
  }

  console.log(`💾 Biais créé avec ID: ${biasId}`)

  // 5. Insérer traduction EN
  await insertTranslation(biasId, 'en', enData)
  console.log('💾 Traduction EN ajoutée')

  // 6. Insérer traduction FR si disponible
  if (frData) {
    await insertTranslation(biasId, 'fr', frData)
    console.log('💾 Traduction FR ajoutée')
  }

  console.log('✨ Terminé !')
}

// ============================================
// 6. LANCEMENT
// ============================================

async function main() {
  console.log('🚀 Démarrage du remplissage Supabase...\n')
  console.log(`📊 Nombre de biais à traiter: ${BIASES_TEST.length}\n`)

  for (let i = 0; i < BIASES_TEST.length; i++) {
    await processBias(BIASES_TEST[i])

    // Pause de 500ms entre chaque biais (rate limiting)
    if (i < BIASES_TEST.length - 1) {
      console.log('\n⏳ Pause 500ms...')
      await sleep(500)
    }
  }

  console.log('\n\n🎉 TERMINÉ ! Vérifiez vos données dans Supabase.')
  console.log(`📊 URL: ${SUPABASE_URL}/rest/v1/biases?select=*,bias_translations(*)`)
}

// Lancer le script
main().catch((error) => {
  console.error('❌ Erreur fatale:', error)
  process.exit(1)
})
