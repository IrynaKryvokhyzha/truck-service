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
  opacity: 0.8;
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
  @media (max-width: $tablet) {
    padding: 2rem 2rem;
  }
  @media (max-width: $mobile) {
    padding: 1rem 0;
    gap: 10px;
  }
  @media (max-width: $mobileSmall) {
    gap: 5px;
  }

  // .content__skills

  &__skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 70px;
    @media (max-width: $tablet) {
      gap: 40px;
    }
    @media (max-width: $mobile) {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
    }
    @media (max-width: $mobileSmall) {
    }
  }
}
.title {
  color: $third-color;
  font-size: 4rem;
  @media (max-width: $tablet) {
    font-size: 3rem;
    line-height: 1;
  }
  @media (max-width: $mobile) {
    font-size: 2.5rem;
  }
  @media (max-width: $mobileSmall) {
    font-size: 2rem;
  }
}
.skills-item {
  // .skills-item__header

  &__subtitle {
    font-weight: 800;
    max-width: 70%;
    @media (max-width: $mobileSmall) {
      font-size: 1.7rem;
      max-width: 100%;
    }
  }

  // .skills-item__text

  &__text {
    font-size: 1.2em;
    line-height: 1.5;
  }
}
</style>
