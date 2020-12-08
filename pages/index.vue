<template>
  <div class="force">
    <!-- landing section -->
    <section class="my-12 px-5">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="mt-md-8 text-center my-5 px-5">
          <h2 class="display-1 mb-6 my-5">Welcome to</h2>
          <h1 class="display-2 primary--text font-weight-bold mb-6 my-5">
            Thunder Enterprises
          </h1>
          <p class="body-1">
            WELCOME TO THUNDER ENTERPRISES, A FAST RISING INVESTMENT FIRM. WITH
            OURONLINE PLATFORM, ENQUIRIES ABOUT OUR SERVICES ARE MADE EASIER AND
            LESSSTRESSFUL AS WE HELP IN SECURING YOUR FINANCIAL FREEDOM
          </p>

          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="text-uppercase"
                color="primary"
                x-large
                dark
                v-bind="attrs"
                v-on="on"
                >Invest</v-btn
              >
            </template>

            <v-card>
              <v-card-title class
                >Open an Investment<br />
                Portfolio.</v-card-title
              >

              <v-card-text
                >Fill in your details below and submit. You will be contacted
                shortly.</v-card-text
              >
              <v-form v-model="valid">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="userFullName"
                        :rules="nameRules"
                        label="Full Name"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="userEmail"
                        :rules="emailRules"
                        type="email"
                        label="Email Address"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="userNumber"
                        type="number"
                        label="Phone number"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="investNow()">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn class="ml-2 text-uppercase" x-large nuxt to="/about">
            <v-icon left>mdi-magnify</v-icon>About
          </v-btn>
        </v-col>

        <v-col cols="12" md="6" class="landing-image pt-12">
          <v-img contain max-height="300" src="/feature1.svg"></v-img>
        </v-col>
      </v-row>
    </section>

    <!-- features -->
    <section class="text-center primary pb-16">
      <v-container>
        <div class="display-1 white--text font-weight-bold my-14">
          <p>Achieve Financial Growth</p>
        </div>
        <v-row>
          <v-col v-for="(feature, i) in features" :key="i" cols="12" md="4">
            <v-hover>
              <template v-slot="{ hover }">
                <v-card class="py-12 px-4" :elevation="hover ? 24 : 0">
                  <img
                    class="mb-5"
                    height="150px"
                    contain
                    :src="feature.image"
                  />

                  <v-card-title class="justify-center primary--text">{{
                    feature.title
                  }}</v-card-title>

                  <v-card-text
                    class="subtitle-1"
                    v-text="feature.text"
                  ></v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <svg viewBox="0 0 1920 135">
      <defs>
        <filter
          id="Path_1006"
          x="-152.573"
          y="-460.806"
          width="2324.175"
          height="631.369"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha"></feOffset>
          <feGaussianBlur stdDeviation="25" result="blur"></feGaussianBlur>
          <feFlood flood-opacity="0.161"></feFlood>
          <feComposite operator="in" in2="blur"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <clipPath id="clip-Home">
          <rect width="1920" height="135"></rect>
        </clipPath>
      </defs>
      <g id="Home" clip-path="url(#clip-Home)">
        <rect width="1920" height="135" fill="#ffffff00"></rect>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1006)">
          <path
            id="Path_1006-2"
            data-name="Path 1006"
            d="M-9948.83,7778.837s223.576,20.394,386.754,27.238,264.528,2.657,433.32-7.967,394.238-56.657,849.857-44.854,433.191,56.657,433.191,56.657l-37.3-459.818H-8937.946s-717.868,3.541-721.409,0S-9970.4,7333.23-9970.4,7333.23l-47.161,238.25,15.345,197.12Z"
            transform="translate(9941 -7718)"
            fill="#ca902b"
            stroke="#ca902b"
            stroke-width="2"
          ></path>
        </g>
      </g>
    </svg>

    <section class="universal pa-5">
      <v-container class="text-center">
        <v-row>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Days</div>
            <div class="display-1">365+</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Investors</div>
            <div class="display-1">100+</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Up time</div>
            <div class="display-1">365+</div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="text-uppercase caption">Active Members</div>
            <div class="display-1">235+</div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- ambassadors-->
    <section class="my-12">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="6" class="landing-image">
            <v-img contain max-height="300" src="/finalfeature.svg"></v-img>
          </v-col>
          <v-col cols="12" md="6" class="mt-md-8 text-center">
            <p class="display-1 font-weight-thin">
              Never depend on single income. Make investment to create a second
              source.'
            </p>
            <p>Warren Buffet- CEO of Berkshire Hathaway</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="pa-5 primary">
      <v-container class="text-center">
        <h2 class="display-1 ma-4 white--text">Investors Testimonials!</h2>

        <v-row>
          <v-col
            v-for="({ image, text, name, company }, i) in testimonies"
            :key="i"
            cols="12"
            md="4"
          >
            <v-hover>
              <template v-slot="{ hover }">
                <v-card class="py-12 px-4" :elevation="hover ? 24 : 1">
                  <div>
                    <v-avatar size="88">
                      <img :src="image" />
                    </v-avatar>
                  </div>

                  <v-card-text>
                    <div class="subtitle-1">{{ text }}</div>
                    <div class="subtitle-1 font-weight-bold mt-5 primary--text">
                      {{ name }}
                    </div>
                    <div class="caption">{{ company }}</div>
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <svg viewBox="0 0 1920 135">
      <defs>
        <filter
          id="Path_1006"
          x="-152.573"
          y="-460.806"
          width="2324.175"
          height="631.369"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha"></feOffset>
          <feGaussianBlur stdDeviation="25" result="blur"></feGaussianBlur>
          <feFlood flood-opacity="0.161"></feFlood>
          <feComposite operator="in" in2="blur"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <clipPath id="clip-Home">
          <rect width="1920" height="135"></rect>
        </clipPath>
      </defs>
      <g id="Home" clip-path="url(#clip-Home)">
        <rect width="1920" height="135" fill="#ffffff00"></rect>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1006)">
          <path
            id="Path_1006-2"
            data-name="Path 1006"
            d="M-9948.83,7778.837s223.576,20.394,386.754,27.238,264.528,2.657,433.32-7.967,394.238-56.657,849.857-44.854,433.191,56.657,433.191,56.657l-37.3-459.818H-8937.946s-717.868,3.541-721.409,0S-9970.4,7333.23-9970.4,7333.23l-47.161,238.25,15.345,197.12Z"
            transform="translate(9941 -7718)"
            fill="#ca902b"
            stroke="#ca902b"
            stroke-width="2"
          ></path>
        </g>
      </g>
    </svg>

    <section class="text-center pt-2">
      <v-container>
        <div class="text-h5 primary--text">Thunder Enterprises newsletter</div>
        <p class="mt-2">Subscribe to Thunder Enterprises newsletter</p>
        <NewsletterForm />
      </v-container>
      <v-divider class="mt-2"></v-divider>
    </section>
  </div>
</template>
<script>
//officialtent@gmail.com
//Forexway007
import NewsletterForm from "../components/NewsletterForm";
export default {
  components: {
    NewsletterForm,
  },
  data() {
    return {
      userNumber: "",
      valid: true,
      userEmail: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 3) || "Name greater than 5 characters",
      ],
      userFullName: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      dialog: false,
      features: [
        {
          image: "/feature4.svg",
          title: "Innovative & Simple",
          text:
            "YOU CAN EASILY CREATE AN INVESTMENT PORTFOLIO WITH US FOR EITHERSHORT OT LONG TERM FINANCIAL INVESTMENT DEALS AND ALSO ENQUIRE ABOUTOTHER INVESTMENT OPPORTUNITIES.",
        },
        {
          image: "/feature2.svg",
          title: "Secure & Consistent",
          text:
            "WE OFFER 25% RETURN ON INVESTMENTS IN 30 DAYS. FINANCIAL INVESTMENTSARE SAFE AND SECURED AS CONSISTENT PAYMENT IS GURANTEED. OTHER FORMSOF INVESTMENTS ARE VALID AS LEGITIMATE PROOF OF TRANSACTION WILL BEISSUED.",
        },
        {
          image: "/features.svg",
          title: "Social media platforms",
          text:
            " FOLLOW US ON OUR SOCIAL MEDIA PLATFORMS FOR YOUR MAJOR UPDATES ANDTIPS TO HELP YOU ACHIEVE FINANCIAL FREEDOM.",
        },
      ],
      testimonies: [
        {
          image: "/icon.png",
          name: "Bayo Babalola group of companies.",
          company: "Western, Nigeria",
          text: ` We have been trading with TENT as back as April,
          2020 and we’re proud to say we’resatisfied by the service received.
          TENT is indeed a backbone to our business and we look forward for more trades/transactions.`,
        },
        {
          image: "/icon.png",
          name: "Adeola Temitope",
          company: "Lagos State, Nigeria",
          text: ` Investing with Thunder ent. is one of the good decisions I made in 2020,
           very efficient and theircustomer service is very good `,
        },
        {
          image: "/icon.png",
          name: "Boluwatife Mary",
          company: `I must commend Tent for all they do, started investing since 
          July and I’ve had no regrets till now 
          Helping me achieve my financial goals
           the little way they can. Kudos`,
        },
      ],
    };
  },
  methods: {
    investNow() {
      if (
        (this.userNumber && this.userEmail && this.userFullName != "") ||
        null
      ) {
        this.contactUrl = `https://api.whatsapp.com/send?phone=2347042509361&text=Hello+I+want+to+invest+with+Thunder Enterprises+my+name+is+${this.userFullName}%0Amy+email+addresss+is+${this.userEmail}%0Aand+my+phone+number+is${this.userNumber}`;
        window.location.replace(this.contactUrl);
        this.dialog = false;
      } else {
        alert(
          "please ensure all fields are filled correctly with valid details"
        );
      }
    },
  },
};
</script>


