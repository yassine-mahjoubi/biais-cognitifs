<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer
    role="contentInfo"
    class="bg-heavy-metal-950 text-heavy-metal-200 flex justify-between items-center px-8 py-4"
  >
    <div class="inline-flex items-center gap-2">
      <span>{{ t('footer.made') }}</span>
      <Icon
        icon="arcticons:brain-out"
        width="24"
        height="24"
        style="color: #ff3939"
        aria-hidden="true"
      />
    </div>
    <div>
      <ul class="flex justify-center gap-3 items-center">
        <li>
          <a
            href="https://github.com/yassine-mahjoubi/biais-cognitifs"
            target="_blank"
            :title="'GIthub ' + t('footer.external_link')"
          >
            <Icon
              aria-hidden="true"
              class="icon"
              icon="streamline-logos:github-logo-2-solid"
              width="24"
              height="24"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yassine-mahjoubi/"
            target="_blank"
            :title="'Linkedin ' + t('footer.external_link')"
          >
            <Icon
              icon="entypo-social:linkedin-with-circle"
              width="24"
              height="24"
              style="color: #fff"
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
