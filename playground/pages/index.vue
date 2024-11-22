<script setup lang="ts">
const isOpened = ref(false);
const randomStrings = computed(() => isOpened.value ? [...Array(generateRandomNumber(10, 30))].map(() => generateRandomString(15)) : []);

function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateRandomString(length: number) {
  return Math.random().toString(36).substring(2, length + 2).toUpperCase();
}
</script>

<template>
  <div class="page-index">
    <div class="block">
      <div class="block__header">
        <div class="block__header__title">
          Заголовок
        </div>
        <div
          class="block__header__opener"
          @click="isOpened = !isOpened"
        >
          {{ isOpened ? 'Close' : 'Open' }}
        </div>
      </div>
      <transition-expand>
        <div
          v-if="isOpened"
          class="block__content"
        >
          <div
            v-for="row of randomStrings"
            :key="row"
            class="block__content__row"
          >
            {{ row }}
          </div>
        </div>
      </transition-expand>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-family: Roboto, sans-serif;
  user-select: none;
}

.page-index {
  display: flex;
  justify-content: center;
}

.block {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 2px;
  border: 1px solid;

  &__header {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 2px;
    border: 1px solid;

    &__opener {
      width: 85px;
      padding: 2px;
      border: 1px solid;
      text-align: center;
      cursor: pointer;
    }
  }
  &__content {
    border: 1px solid;

    &__row {
      padding: 2px 5px;
      text-align: center;
    }
  }
}
</style>
