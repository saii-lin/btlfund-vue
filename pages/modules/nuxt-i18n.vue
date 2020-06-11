<template>
  <main>
    <div>
      <nuxt-link to="/">
        <h3>Go Back To Home Page</h3>
      </nuxt-link>
    </div>
    <div>
      <h3>
        <a href="https://nuxt-community.github.io/nuxt-i18n/" target="_blank">
          https://nuxt-community.github.io/nuxt-i18n/
        </a>
      </h3>
    </div>
    <nav>
      <ul>
        <li>
          <nuxt-link :to="switchLocalePath('en-us')">
            en-us
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="switchLocalePath('zh-tw')">
            zh-tw
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="switchLocalePath('zh-cn')">
            zh-cn
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div>
      <h1>{{ $t("greeting") }}</h1>
    </div>
  </main>
</template>
