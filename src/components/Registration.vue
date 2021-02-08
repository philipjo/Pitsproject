<template>
  <div>
    <v-layout wrap justify-start pt-12 px-2 px-lg-0 pl-lg-12 pl-xl-12>
      <!-- Image Container -->
      <v-flex xs12 md12 lg4 xl3 pl-sm-4 pt-2 pb-5>
        <v-layout wrap justify-center>
          <v-flex pt-4 xs12 text-left>
            <v-layout wrap justify-center>
              <v-flex xs8 sm6 md6 lg8>
                <v-card flat tile outlined height="300px">
                  <v-layout wrap justify-center fill-height>
                    <v-flex md12 lg12 align-self-center>
                      <v-img
                        v-if="imagePreview"
                        :src="imagePreview"
                        height="298px"
                       
                        contain
                      >
                        <!-- <v-layout wrap>
                          <v-flex text-right pa-2>
                            <v-avatar color="#FF3434" size="20">
                              <v-icon
                                color="#FFF"
                                small
                                @click="removeImageArray(0)"
                              >
                                mdi-close
                              </v-icon>
                            </v-avatar>
                          </v-flex>
                        </v-layout> -->
                      </v-img>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm9 md9 lg12 pt-4 text-center>
            <v-btn
              width="180px"
              small
              tile
              depressed
              :ripple="false"
              class="text-capitalize"
              color="#EFEFEF"
              @click="$refs.files.click()"
            >
              <v-layout wrap justify-center>
                <v-flex xs8 text-right>
                  <span style="font-size: 12px; font-family: opensanssemibold">
                    Upload Image
                  </span>
                </v-flex>
              </v-layout>
            </v-btn>
            <input
              v-show="false"
              accept="image/*"
              id="file"
              ref="files"
              type="file"
              @change="uploadImages"
            />
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex text-left xs1 pt-5 text-center hidden-md-and-down>
        <v-divider vertical></v-divider>
      </v-flex>
      <!-- Main Container -->
      <v-flex xs11 md11 lg6 xl6 pt-5>
        <v-form ref="empform">
          <v-layout wrap justify-start>
            <v-flex xs12 sm2 md2 lg2 xl2 pr-sm-2 text-right pb-5>
              <span> Name </span>
            </v-flex>
            <v-flex xs12 sm5 md5 lg5 xl5 pr-sm-2 text-left pb-5>
              <v-text-field
                v-model="product.firstname"
                hide-selected
                outlined
                placeholder="First Name"
                dense
                hide-details
                :rules="name"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm5 md5 lg5 xl5 pl-sm-2 text-left pb-5 pr-2>
              <v-text-field
                v-model="product.lastname"
                hide-selected
                outlined
                placeholder="Last Name"
                dense
                hide-details
                :rules="name"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm2 md2 lg2 xl2 pr-sm-2 text-right pb-5>
              <span> Age </span>
            </v-flex>
            <v-flex xs12 sm10 md10 lg10 xl10 pr-sm-2 text-left pb-5>
              <v-slider
                v-model="product.age"
                :tick-labels="ticksLabels"
                :max="3"
                step="1"
                ticks="always"
                tick-size="4"
                
              ></v-slider>
            </v-flex>
            <v-flex xs12 sm2 md2 lg2 xl2 pr-sm-2 text-right pb-5>
              <span> Email </span>
            </v-flex>
            <v-flex xs12 sm10 md10 lg10 xl10 pr-sm-2 text-left pb-5>
              <v-text-field
                v-model="product.email"
                hide-selected
                outlined
                placeholder="Email"
                dense
                hide-details
                 :rules="required"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm2 md2 lg2 xl2 pr-sm-2 text-right pb-5>
              <span> Tel </span>
            </v-flex>
            <v-flex xs12 sm10 md10 lg10 xl10 pr-sm-2 text-left pb-5>
              <v-text-field
                v-model="product.phone"
                hide-selected
                outlined
                placeholder="Telephone no"
                dense
                hide-details
                 :rules="required"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm2 md2 lg2 xl2 pr-sm-2 pb-5 text-right>
              <span> State </span>
            </v-flex>
            <v-flex xs12 sm10 md10 lg10 xl10 pr-sm-2 pb-5 text-left>
              <v-select
                :items="states"
                solo
                flat
                placeholder="States"
                dense
                outlined
                 hide-details
                v-model="product.state"
                 :rules="required"
              ></v-select>
            </v-flex>

            <v-flex xs12 sm2 md2 lg2 xl2 pr-sm-2 pb-5 text-right>
              <span> Country </span>
            </v-flex>
            <v-flex xs12 sm10 md10 lg10 xl10 pr-sm-2 pb-5 text-left>
              <v-select
                :items="country"
                solo
                flat
                placeholder="Country"
                dense
                outlined
                 hide-details
                v-model="product.country"
              ></v-select>
            </v-flex>

            <v-flex xs12 sm2 md2 lg2 xl2 pr-sm-2 pb-5 text-right>
              <span> Address </span>
            </v-flex>
            <v-flex xs12 sm10 md10 lg10 xl10 pr-sm-2 pb-5 text-left>
              <v-select
                :items="address"
                solo
                flat
                placeholder="Address"
                dense
                outlined
                 hide-details
                v-model="product.address"
              ></v-select>
            </v-flex>

            <v-flex xs12 sm2 md2 lg2 xl2 pr-sm-2 pb-5 text-right>
              <span> Interests </span>
            </v-flex>
            <v-flex xs12 sm10 md10 lg10 xl10 pr-sm-2 pb-5 text-left>
              <v-combobox
                placeholder="Interests"
                v-model="product.tags"
                outlined
                multiple
                dense
                hide-details
                small-chips
              >
                <template v-slot:selection="{ attrs, item, parent, selected }">
                  <span class="pa-1">
                    <v-chip v-bind="attrs" :input-value="selected" small>
                      <span
                        class="pr-2"
                        style="font-family: opensansregular; font-size: 13px"
                      >
                        {{ item }}
                      </span>
                      <v-icon small @click="parent.selectItem(item)">
                        mdi-close-circle
                      </v-icon>
                    </v-chip>
                  </span>
                </template>
              </v-combobox>
            </v-flex>
            <v-flex
              xs12
              sm2
              md2
              lg2
              xl2
              pr-sm-2
              pb-5
              style="padding-left: 80px"
            >
              <v-checkbox v-model="product.checkbox"></v-checkbox>
            </v-flex>
            <v-flex xs12 sm8 md8 lg8 xl8 pr-sm-2 pb-5 pt-5 text-left>
              <span> Subscribe to the news letter </span>
            </v-flex>
            <v-flex xs12  text-center style="padding-left: 100px;color:red"> {{msg}}</v-flex>
            <v-flex xs12 sm8 md8 lg8 xl8 pr-sm-2 pb-5 pt-5 text-right>
              <v-btn depressed color="primary" @click="inputCheck">
                Submit
              </v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
// import axios from "axios";
export default {
    props: ["edit"],
  data() {
    return {
      imageArray: [],
      Images: new FormData(),
      formData: new FormData(),
      selectedFiles: null,
      image: null,

      ticksLabels: ["13-19", "20-19", "30-45", "45 & above"],
      states: ["Texas", "Alaska", "Bangalore", "Kerala"],
      country: ["America", "India"],
      product: {
        firstname: null,
        lastname: null,
        email: null,
        age: null,
        state: null,
        country: null,
        phone: null,
        address: null,
        image: null,
        tags: [],
        checkbox: false,
      },
      imagePreview: null,
      address: ["Home", "Company"],
      msg: null,
      required: [(v) => !!v || " Required"],
       name: [
        (v) => !!v || "Required",
        (v) => /^[A-Za-z]+$/.test(v) || "Name must be valid",
        (v) => v.length <=20
      ],
    };
  },

   beforeMount() {
    if(this.edit != null)
     this.product = this.edit;
     this.imagePreview = this.product.image;
  },

  methods: {
    inputCheck() {
      if (this.$refs.empform.validate()) {
        this.$router.push({
          name: "Registrationdetails",
          params: { details: this.product },
        });
      } else {
        this.msg = "Please fill the details  to Submit! ";
        return;
      }
    },

    uploadImages(event) {
      this.selectedFiles = event.target.files[0];
      this.imagePreview = URL.createObjectURL(this.selectedFiles);
      this.product.image = this.imagePreview;
    },
  },
};
</script>
<style  scoped>
.v-input__slot {
  min-height: 36px;
}
.v-select > .dropdown-menu {
  text-align: right;
}
.vl {
  border-left: 4px rgb(0, 119, 255);
  height: 500px;
}
</style>