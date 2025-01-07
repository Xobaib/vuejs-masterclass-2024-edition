<script setup lang="ts">
interface LinkProp {
  title: string;
  to?: string;
  icon: string;
}

defineProps<{
  links: LinkProp[];
}>();

const emits = defineEmits<{
  actionClicked: [string];
}>();

function emitActionClicked(linkTitle: string) {
  emits('actionClicked', linkTitle);
}
</script>

<template>
  <template v-for="link in links" :key="link.title">
    <!-- RouterLink accepts two props for active paths: 1-activeClass 2-exactActiveClass, and whatever we pass as the value for those props, it will be added as a class to the active link -->
    <RouterLink
      v-if="link.to"
      exactActiveClass="text-primary bg-muted"
      :to="link.to"
      class="nav-link"
    >
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
    </RouterLink>

    <div v-else class="nav-link cursor-pointer" @click="emitActionClicked(link.title)">
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
    </div>
  </template>
</template>

<style scoped>
.nav-link {
  @apply flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground;
}
</style>
