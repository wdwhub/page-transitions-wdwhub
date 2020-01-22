<template>
  <main>
    <div class="places">
      <p class="top">&nbsp;</p>
      <h1>Credits</h1>
      <p>
        <strong>&nbsp;</strong>
      </p>
    </div>

    <section class="breweries" id="breweries">
      <ul>
        <li>
          <figure>
            <!-- Photo by Quentin Dr on Unsplash -->
            <img src="/mickey_in_fantasyland_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>Mickey in Fantasyland</h3>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/mickey_in_fantasyland_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>Chad Sparkes</h3>
            </figcaption>
          </figure>
          <p>Chad Sparkes</p>
          <a href="https://flic.kr/p/FFYbbj">Visit Website</a>
        </li>
        <li>
          <figure>
            <!-- Photo by Rawpixel on Unsplash -->
            <img
              src="https://images.unsplash.com/photo-1535359056830-d4badde79747?ixlib=rb-1.2.1&auto=format&fit=crop&w=3402&q=80"
              alt="Three different glasses of beer"
            />
            <figcaption>
              <h3>Vast cosmic arena</h3>
            </figcaption>
          </figure>
          <p>carfull...from Wyoming</p>
          <a href="https://flic.kr/p/dWBnrL">Visit Website</a>
        </li>
        <li>
          <figure>
            <!-- Photo by Quentin Dr on Unsplash -->
            <img src="/mickey_in_fantasyland_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>Mickey in Fantasyland</h3>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/teacups_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>Chad Sparkes</h3>
            </figcaption>
          </figure>
          <p>Chad Sparkes</p>
          <a href="https://flic.kr/p/FFYbbj">Visit Website</a>
        </li>
        <li>
          <figure>
            <!-- Photo by Rawpixel on Unsplash -->
            <img src="/wdw_150x150.jpg" alt="Three different glasses of beer" />
            <figcaption>
              <h3>WDW logo</h3>
            </figcaption>
          </figure>
          <p>carfull...from Wyoming</p>
          <a href="https://flic.kr/p/dWBnrL">Visit Website</a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
import IconBase from "~/components/IconBase.vue";
import IconMapPin from "~/components/IconMapPin.vue";
import AppStarRating from "~/components/AppStarRating.vue";

export default {
  layout: "creditsLayout",
  components: {
    IconBase,
    IconMapPin,
    AppStarRating
  },
  computed: mapState(["page", "users", "places"])
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 45px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.location img {
  width: 70px;
  float: left;
  margin: 0 10px 10px 0;
}

p,
.stars {
  margin: 10px 0;
}

.main-img {
  background: url("/header1.jpg") center center;
  background-size: cover;
  width: 100%;
  height: 240px;
}

.top {
  margin: 30px 0 0;
}

/* breweries styles */
.breweries {
  //   padding: 2rem;
}

.breweries > ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}

.breweries > ul > li {
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
}

.breweries > ul > li > figure {
  max-height: 220px;
  overflow: hidden;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  position: relative;
}

.breweries > ul > li > figure > img {
  width: 100%;
}

.breweries > ul > li > figure > figcaption {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
}

.breweries > ul > li > figure > figcaption > h3 {
  color: white;
  padding: 0.75rem;
  font-size: 1.25rem;
}

.breweries > ul > li > p {
  font-size: 1rem;
  line-height: 1.5;
  padding: 1rem 0.75rem;
  color: #666666;
}

.breweries > ul > li > a {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
}
</style>