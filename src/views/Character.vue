<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      width="201"
      absolute
      dark
      temporary
      app
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-content>
            <v-list-tile-title>R_ApexTracker</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <router-link to="/index">
              <v-list-tile-title>Home</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <router-link to="/">
              <v-list-tile-title>Search</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>star</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <router-link to="/lore">
              <v-list-tile-title>Lore</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>R_ ApexTracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="floating"></v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-img class="blackFoto" :src="require(`../assets/${name}.png`)"></v-img>

              <v-card-title primary-title>
                <div class="moreInfo">
                  <span class="grey--text">{{lores.characters[0][name].title}}</span>
                  <h3 class="title font-weight-regular">Real name</h3>
                  <h3 class="body-1 font-weight-light">{{lores.characters[0][name].realName}}</h3>
                  <h3 class="title font-weight-regular">Age</h3>
                  <h3 class="body-1 font-weight-light">{{lores.characters[0][name].age}}</h3>
                  <h3 class="title font-weight-regular">Phrase</h3>
                  <h3 class="body-1 font-weight-light">{{lores.characters[0][name].phrase}}</h3>
                  <!-- <div :v-if=" lores.characters[0][name].homeWorld.lenght > 1 ">
                    <h3 class="title font-weight-regular">Homeworld</h3>
                    <h3 class="body-1 font-weight-light">{{lores.characters[0][name].homeWorld}}</h3>
                  </div>-->
                  <v-layout row>
                    <v-dialog v-model="dialog" width="600px">
                      <template v-slot:activator="{ on }">
                        <v-btn color="grey darken-4" dark v-on="on">Story</v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">{{lores.characters[0][name].name}}</span>
                        </v-card-title>
                        <v-card-text class="font-weight-light">{{lores.characters[0][name].story}}</v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn color="black" flat="flat" @click="dialog = false">Close</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-layout>
                  <v-container class="baby" fluid>
                    <v-layout class="mb-2 foticos" justify-center>
                      <v-img relative class="skill" :src="lores.characters[0][name].tacticalImg"></v-img>
                      <v-img relative class="skill" :src="lores.characters[0][name].passiveImg"></v-img>
                      <v-img relative class="skill" :src="lores.characters[0][name].ultimateImg"></v-img>
                    </v-layout>
                    <div>
                      <v-btn
                        class="botones papilla"
                        fab
                        small
                        color="grey"
                        bottom
                        left
                        absolute
                        @click="dialogx = !dialogx"
                      >
                        <v-icon>add</v-icon>
                      </v-btn>
                      <v-dialog v-model="dialogx" max-width="500px">
                        <v-card>
                          <v-card-title primary-title>{{lores.characters[0][name].tacticalAbility}}</v-card-title>
                          <v-card-text>
                            <small
                              class="grey--text"
                            >{{lores.characters[0][name].tacticalDescription}}</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="dialogx = false">Close</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <v-btn
                        class="botones cakilla"
                        fab
                        small
                        color="grey"
                        bottom
                        center
                        absolute
                        @click="dialogc = !dialogc"
                      >
                        <v-icon>add</v-icon>
                      </v-btn>
                      <v-dialog v-model="dialogc" max-width="500px">
                        <v-card>
                          <v-card-title primary-title>{{lores.characters[0][name].passiveAbility}}</v-card-title>
                          <v-card-text>
                            <small
                              class="grey--text"
                            >{{lores.characters[0][name].passiveDescription}}</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="dialogc = false">Close</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <v-btn
                        class="botones flipilla"
                        fab
                        small
                        color="grey"
                        bottom
                        right
                        absolute
                        @click="dialogq = !dialogq"
                      >
                        <v-icon>add</v-icon>
                      </v-btn>
                      <v-dialog v-model="dialogq" max-width="500px">
                        <v-card>
                          <v-card-title primary-title>{{lores.characters[0][name].ultimateAbility}}</v-card-title>
                          <v-card-text>
                            <small
                              class="grey--text"
                            >{{lores.characters[0][name].ultimateDescription}}</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="dialogq = false">Close</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
                  </v-container>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <div class="height"></div>
    <v-footer fixed dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="red darken-2">
          <strong class="subheading">Follow us on our social networks</strong>

          <v-spacer></v-spacer>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;2019 —
          <strong>Richard</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      lores: [],

      abilityImgBang: [
        {
          tacticalImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-bangalore",
          passiveImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-bangalore",
          ultimateImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-bangalore"
        }
      ],
      abilityImgBlood: [
        {
          tacticalImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-bloodhound.png.adapt.crop16x9.652w.png",
          passiveImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-bloodhound.png.adapt.crop16x9.652w.png",
          ultimateImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-bloodhound.png.adapt.crop16x9.652w.png"
        }
      ],
      abilityImgCaus: [
        {
          tacticalImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-caustic.png.adapt.crop16x9.652w.png",
          passiveImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-caustic.png.adapt.crop16x9.652w.png",
          ultimateImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-caustic.png.adapt.crop16x9.652w.png"
        }
      ],

      abilityImgGib: [
        {
          tacticalImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-gibraltar.png.adapt.crop16x9.652w.png",
          passiveImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-gibraltar.png.adapt.crop16x9.652w.png",
          ultimateImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-gibraltar.png.adapt.crop16x9.652w.png"
        }
      ],
      abilityImgLif: [
        {
          tacticalImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-lifeline.png.adapt.crop16x9.652w.png",
          passiveImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-lifeline.png.adapt.crop16x9.652w.png",
          ultimateImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-lifeline.png.adapt.crop16x9.652w.png"
        }
      ],
      abilityImgMir: [
        {
          tacticalImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-mirage.png.adapt.crop16x9.652w.png",
          passiveImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-mirage.png.adapt.crop16x9.652w.png",
          ultimateImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-mirage.png.adapt.crop16x9.652w.png"
        }
      ],
      abilityImgOct: [
        {
          tacticalImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-octane.png.adapt.crop16x9.652w.png",
          passiveImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-octane.png.adapt.crop16x9.652w.png",
          ultimateImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-octane.png.adapt.crop16x9.652w.png"
        }
      ],
      abilityImgPath: [
        {
          tacticalImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-pathfinder.png.adapt.crop16x9.652w.png",
          passiveImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-pathfinder.png.adapt.crop16x9.652w.png",
          ultimateImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-pathfinder.png.adapt.crop16x9.652w.png"
        }
      ],
      abilityImgWraith: [
        {
          tacticalImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-wraith.png.adapt.crop16x9.652w.png",
          passiveImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-wraith.png.adapt.crop16x9.652w.png",
          ultimateImg:
            "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-wraith.png.adapt.crop16x9.652w.png"
        }
      ],
      dialogc: false,
      dialog: false,
      dialogx: false,
      dialogq: false,
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      mini: false,
      right: null
    };
  },
  methods: {
    getData() {
      fetch("../lore.json")
        .then(res => res.json())
        .then(data => {
          this.lores = data;
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
.blackFoto {
  background-color: black;
  height: 370px;
}
.skill {
  height: 93px;
  margin-right: 45px;
  margin-left: -41px;
}
.baby {
  margin-left: 55px;
  padding: -1px;
}
.bug {
  color: white;
}
.botones {
  margin: 56px;
  z-index: 4;
  margin-bottom: 50px;
}
.cakilla {
  left: 112px;
  top: 585px;
  height: 30%;
}
.papilla {
  left: 40px;
  top: 585px;
  height: 30%;
}
.flipilla {
  right: 58px;
  top: 585px;
  height: 30%;
}
.v-btn--bottom.v-btn--absolute.v-btn--small {
  bottom: -20px;
  height: 20px;
  width: 20px;
}

.headline {
  text-transform: capitalize;
}
.foticos {
  justify-content: center;
}
.v-icon scope {
  margin-bottom: 80px;
}
.v-btn--floating.v-btn--fixed,
.v-btn--floating.v-btn--absolute {
  z-index: 3;
}
.height {
  margin-top: 62px;
}
</style>
   
  //  v-if planet lenght is empty = don't show .