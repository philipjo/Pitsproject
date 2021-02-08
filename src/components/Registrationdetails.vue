<template>
  <div>
    <v-layout wrap justify-start pt-12 px-2 px-lg-0 pl-lg-12 pl-xl-12>
      <!-- Image Container -->
      <v-flex xs12 md12 lg4 xl3 pl-sm-4 pt-2 pb-5>
        <v-layout wrap justify-center>
          <v-flex pt-4 xs12 text-left>
            <v-layout wrap justify-center>
              <v-flex xs8 sm6 md6 lg8>
                   <v-card v-if="editImage" flat tile outlined height="300px">
                  <v-layout wrap justify-center fill-height>
                    <v-flex md12 lg12 align-self-center>
                      <v-img
                        
                        :src="imagePreview"
                        height="298px"
                        width="200px"
                        contain
                      >
                      
                      </v-img>
                    </v-flex>
                  </v-layout>
                </v-card>
                <v-card v-else flat tile outlined height="300px">
                  <v-layout wrap justify-center fill-height>
                    <v-flex md12 lg12 align-self-center>
                      <v-img
                        
                        :src="details.image"
                        height="298px"
                        contain
                      >
                      
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
                    Edit Photo
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
          <v-flex xs12 sm9 md9 lg12 pt-4 text-center>
            <v-btn
              width="180px"
              small
              tile
              depressed
              :ripple="false"
              class="text-capitalize"
              color="#EFEFEF"
              router-link
                  :to="{ name: 'Registration', params: { edit: details } }"
            >
              <v-layout wrap justify-center>
                <v-flex xs8 text-right>
                  <span style="font-size: 12px; font-family: opensanssemibold">
                    Edit Profile
                  </span>
                </v-flex>
              </v-layout>
            </v-btn>
            
          </v-flex>
         
        </v-layout>
      </v-flex>

      <v-flex text-left xs1 pt-5 text-center hidden-md-and-down>
        <v-divider vertical></v-divider>
      </v-flex>
      <!-- Main Container -->
      <v-flex xs11 md11 lg6 xl6 pt-5>
        <v-layout wrap justify-start>
          <v-flex xs12 sm12 md12 lg12 xl12 pr-sm-2 pb-5>
            <p> I am <span style="color:rgb(0, 119, 255)"> {{details.firstname}} {{details.lastname}}</span>  and I am <span v-if="details.age == 0" style="color:rgb(0, 119, 255)">above 13 years</span>
            <span v-if="details.age == 1" style="color:rgb(0, 119, 255)">above 20 years</span>  
            <span v-if="details.age == 2" style="color:rgb(0, 119, 255)">above 30 years</span>
            <span v-if="details.age == 4" style="color:rgb(0, 119, 255)">above 45 years</span>   
            and you can send your emails to <span  style="color:rgb(0, 119, 255)">{{details.email}}</span>  . I lives in the state of <span  style="color:rgb(0, 119, 255)">{{details.state}}</span>.
               <span v-if="details.tags.length>0"> I likes to <span v-for="(item, i) in details.tags" :key="i"  style="color:rgb(0, 119, 255)">{{item}},</span>.</span> <span v-if="details.checkbox">And please send me the 
                news letters.</span> Please reach out to me on my phone <span  style="color:rgb(0, 119, 255)">{{details.phone}}</span>.
            </p>
          </v-flex>
         
          

         
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>


export default {
  props: ["details"],
  data() {
    return {
        imagePreview:null,
        selectedFiles:null,
     editImage:false,
    };
  },
  beforeMount() {
    // console.log(this.details)
  },
  methods: {
    uploadImages(event) {
      
      this.editImage = true;
      this.selectedFiles = event.target.files[0];
      this.imagePreview = URL.createObjectURL(this.selectedFiles);
      
    },
  },
};
</script>


