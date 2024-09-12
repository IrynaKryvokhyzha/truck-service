<template>
  <section class="about">
    <div class="about__container">
      <div class="about__content content">
        <div class="content__title title">
          <h2>
            {{ skillsStore.title }}
          </h2>
        </div>
        <div class="content__skills skills">
          <div
            class="skills-item"
            v-for="skill in skillsStore.skills"
            :key="skill.id"
          >
            <h3 class="skills-item__subtitle subtitle">{{ skill.subtitle }}</h3>
            <p class="skills-item__text">
              {{ skill.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSkillsStore } from "~/store/skills";

const skillsStore = useSkillsStore();
</script>

<style lang="scss" scoped>
.about {
  background-color: $secondary-color;
  // .about__container

  &__container {
    color: $third-color;
  }
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 3rem 5rem;
  // .content__title

  &__title {
    color: $third-color;
  }

  // .content__skills

  &__skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 70px;
  }
}
.title {
  font-size: 4rem;
}
.skills-item {
  // .skills-item__header

  &__subtitle {
    font-weight: 800;
    max-width: 70%;
  }

  // .skills-item__text

  &__text {
    font-size: 1.2em;
    line-height: 1.5;
  }
}
</style>
