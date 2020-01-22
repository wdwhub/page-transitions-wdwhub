<template>
  <main>
    <section>
      <div class="places">
        <p class="top">&nbsp;</p>
        <h1>Credits</h1>
        <p>
          <strong>&nbsp;</strong>
        </p>
      </div>
      <div class="cards">
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/darth_vader.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>Darth Vader during the Jedi Academy show at Disney Hollywood Studios</h3>
            </figcaption>
          </figure>
          <p>Jeff Christiansen</p>
          <a href="https://flic.kr/p/FFYbbj">Visit Website</a>
        </div>
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/2520258652_f1cebb76a5_q.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>WDW Yellow Monorail</h3>
            </figcaption>
          </figure>
          <p>George Thomas</p>
          <a href="https://flic.kr/p/4QGZ6o" target="_blank">Visit Website</a>
        </div>
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/dragon_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>When a Dragon rolls down Main Street</h3>
            </figcaption>
          </figure>
          <p>Chad Sparkes</p>
          <a href="https://flic.kr/p/XLkhLr" target="_blank">Visit Website</a>
        </div>
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/poly_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>Chad Sparkes</h3>
            </figcaption>
          </figure>
          <p>Disney's Polynesian Village Resort</p>
          <a href="https://flic.kr/p/FFYbbj" target="_blank">Visit Website</a>
        </div>
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/night_monorail_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>Norm Lanier</h3>
            </figcaption>
          </figure>
          <p>Night Monorail</p>
          <a href="https://flic.kr/p/CYB3Yz" target="_blank">Visit Website</a>
        </div>
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/quartet_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>John Lamar</h3>
            </figcaption>
          </figure>
          <p>Dapper Dans on Main St.</p>
          <a href="https://flic.kr/p/u98v" target="_blank">Visit Website</a>
        </div>
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/teacups_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>carfull...from Wyoming</h3>
            </figcaption>
          </figure>
          <p>Teacups</p>
          <a href="https://flic.kr/p/dWBnrL" target="_blank">Visit Website</a>
        </div>
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/wdw_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>Jonathan</h3>
            </figcaption>
          </figure>
          <p>WDW</p>
          <a href="https://flic.kr/p/5ExU6J" target="_blank">Visit Website</a>
        </div>
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/spaceship_earth_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>WDW</h3>
            </figcaption>
          </figure>
          <p>Chad Sparkes</p>
          <a
            href="https://www.flickr.com/search/?media=photos&license=2%2C3%2C4%2C5%2C6%2C9&orientation=landscape%2Cpanorama&advanced=1&text=wdw "
            target="_blank"
          >Visit Website</a>
        </div>
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/mickey_in_fantasyland_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>Joe Penniston</h3>
            </figcaption>
          </figure>
          <p>Daily Disney - Mickey in Fantasyland</p>
          <a href="https://flic.kr/p/6Dp8NC">Visit Website</a>
        </div>
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/dawn_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>Chad Sparkes</h3>
            </figcaption>
          </figure>
          <p>The Arrival of December</p>
          <a href="https://flic.kr/p/PKQ2Mo">Visit Website</a>
        </div>
        <div class="card">
          <figure>
            <!-- Photo by Drew Farwell on Unsplash -->
            <img src="/teacups_150x150.jpg" alt="Several hands holding beer glasses" />
            <figcaption>
              <h3>Chad Sparkes</h3>
            </figcaption>
          </figure>
          <p>Chad Sparkes</p>
          <a href="https://flic.kr/p/FFYbbj">Visit Website</a>
        </div>
      </div>
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
ol,
ul {
  list-style: none;
}
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
.card {
  background-color: dodgerblue;
  color: white;
  padding: 1rem;
}

.cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>