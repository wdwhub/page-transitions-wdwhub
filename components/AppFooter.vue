<template>
  <footer>
    This site would not be possible without Creative Commons and Open Source licensing. Please check out the
    <nuxt-link exact to="/credits">credits page</nuxt-link>.
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: black;
  color: white;
  text-align: center;
  letter-spacing: 0.03em;
  margin-top: 30px;
  width: 100%;
  height: 50px;
}

a,
a:visited,
a:active {
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding-left: 6px;
}
</style>