<template>
  <div class="home">
  
    <section class="swiper-js-container background-image-holder">
      <div class="swiper-container overflow--visible bg-base-1" data-swiper-autoplay="true" data-swiper-effect="slide" data-swiper-items="1" data-swiper-space-between="0">
        <div class="swiper-wrapper">
          <!-- Slide -->
          <div class="swiper-slide" data-swiper-autoplay="">
            <div class="slice--offset-top holder-item holder-item-light d-flex align-items-center" style="padding-bottom: 100px;">
              <div class="col" style="padding: 4rem 0;">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-lg-5">
                      <h2 class="heading heading-1 strong-600 text-normal line-height-1_2 animated" data-animation-in="fadeInDownBig" data-animation-delay="0">
                          Start your job search with Slate
                      </h2>
                      <p class="lead animated mt-4" data-animation-in="fadeInUpBig" data-animation-delay="200">
                          Slate helps to connect Assistant Directors with Production Assistants more effeciently.
                      </p>
                      <router-link class="btn btn-styled btn-lg btn-base-2 btn-circle mt-5 animated" data-animation-in="fadeInUpBig" data-animation-delay="1000" v-bind:to="`/signup`">Create Account</router-link>
                    </div>

                    <div class="col-md-6 col-lg-6 ml-md-auto">
                      <div class="block block-image-holder z-depth-3">
                        <div class="block-image">
                          <img src="/assets/images/prv/app/slate-profile.png" class="img-center">

                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="shape-container relative" data-shape-fill="primary" data-shape-style="opaque_waves_1" data-shape-position="bottom" style="height: 100px;">
            <svg class="shape-item" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
            </svg>
        </div>
    </section>

    <section class="slice-lg sct-color-1">
        <div class="container">
            <div class="row align-items-md-center cols-xs-space cols-md-space cols-lg-space">
                <div class="col-md-5">
                    <div class="px-3 py-3 text-center text-lg-left">
                        <h3 class="heading heading-3 strong-600">
                            Find New Talent.
                        </h3>
                        <p class="lead line-height-1_6 mt-4">
                            Post a project in minutes and get access to talent that was otherwise hard reach. 
                        </p>
                    </div>
                </div>

                <div class="col-md-6 ml-lg-auto">
                    <img src="/assets/images/slate-project.png" class="img-fluid img-center rounded z-depth-3-top">
                </div>
            </div>
        </div>
    </section>

    <section class="slice-lg sct-color-1">
        <div class="container">
            <div class="row align-items-lg-center cols-xs-space cols-md-space cols-lg-space">
                <div class="col-lg-5 ml-lg-auto order-lg-2">
                    <div class="px-3 py-3 text-center text-lg-left">
                        <h3 class="heading heading-3 strong-600 line-height-1_6">
                            Find Projects to Work On
                        </h3>
                        <p class="lead line-height-1_6 mt-4">
                            Get access to projects that you could only previously find through word of mouth. 
                        </p>
                    </div>
                </div>

                <div class="col-md-6">
                    <img src="/assets/images/slate-project-index.png" class="img-fluid img-center rounded z-depth-3-top">
                </div>
            </div>
        </div>
    </section>

    <section class="slice-lg sct-color-1">
        <div class="container">
            <div class="row align-items-md-center cols-xs-space cols-md-space cols-lg-space">
                <div class="col-md-5">
                    <div class="px-3 py-3 text-center text-lg-left">
                        <h3 class="heading heading-3 strong-600">
                            Track Applicants.
                        </h3>
                        <p class="lead line-height-1_6 mt-4">
                            See all your applicants and hires under one view so you know the status of your project at all times.
                        </p>
                    </div>
                </div>

                <div class="col-md-6 ml-lg-auto">
                    <img src="/assets/images/applicants.png" class="img-fluid img-center rounded z-depth-3-top">
                </div>
            </div>
        </div>
    </section>

    <section class="slice-lg sct-color-1">
        <div class="container">
            <div class="section-title section-title--style-1 text-center">
                <h3 class="section-title-inner heading-3 text-normal strong-600">
                    What people say about Slate.
                </h3>
            </div>

            <span class="space-xs-xl"></span>

            <div class="row cols-xs-space cols-md-space cols-lg-space">
                <div class="col-lg-4">
                    <div class="card card-blockquote z-depth-3-top">
                        <div class="card-body">
                            <div class="block-author">
                                <div class="author-image ">
                                    <img src="/assets/images/prv/people/person-1.jpg">
                                </div>
                                <div class="author-info">
                                    <span class="d-block heading-6 author-name strong-600 c-base-1">Cliff Simon</span>
                                    <span class="heading-xs author-desc">2nd Assistnat Director</span>
                                </div>
                            </div>

                            <p class="mt-4 line-height-1_8">
                                Amazing workflow! Beautiful design, and really simple to setup and use.
                                Highly recommended for any AD looking to expand the talent pool they have access to.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card card-blockquote z-depth-3-top">
                        <div class="card-body">
                            <div class="block-author">
                                <div class="author-image ">
                                    <img src="/assets/images/prv/people/person-2.jpg">
                                </div>
                                <div class="author-info">
                                    <span class="d-block heading-6 author-name strong-600 c-base-1">Elisabeth Alanna</span>
                                    <span class="heading-xs author-desc">Key Set PA</span>
                                </div>
                            </div>

                            <p class="mt-4 line-height-1_8">
                                The first place I go when I'm ready to look for work. Always a great selection of opportunites to appy for. Not sure how I got by before this existed!
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card card-blockquote z-depth-3-top">
                        <div class="card-body">
                            <div class="block-author">
                                <div class="author-image ">
                                    <img src="/assets/images/prv/people/person-3.jpg">
                                </div>
                                <div class="author-info">
                                    <span class="d-block heading-6 author-name strong-600 c-base-1">Bertram Ozzie</span>
                                    <span class="heading-xs author-desc">1st Assistant Director</span>
                                </div>
                            </div>

                            <p class="mt-4 line-height-1_8">
                                When my go-to players aren't available this is my first stop. Im always amazed by the quality of those who apply. Keep up the good work Slate!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="sct-color-1">
        <div class="shape-container relative" data-shape-fill="primary" data-shape-style="opaque_waves_1" data-shape-position="top" style="height: 100px;">
            <svg class="shape-item" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
            </svg>
        </div>

        <div class="slice-lg bg-base-1">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h2 class="heading heading-inverse heading-1 strong-600 mt-3">
                            What are you waiting for? Its 100% Free. 
                        </h2>
                        <router-link class="btn btn-styled btn-lg btn-white btn-outline btn-circle mt-5"v-bind:to="`/signup`">Sign Up Today</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
    };
  },
  methods: {
  }
};
</script>
