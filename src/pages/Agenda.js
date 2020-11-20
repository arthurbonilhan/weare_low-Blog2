import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/agenda.css"

const AgendaPage = () => {
  return (
    <Layout>
      <SEO title="Agenda" />
      <div id="agenda">
        <div class="full clearfix">
          <div class="m-eventList m-eventList__list event_list">
            <div class="m-eventList__wrapper list" id="list">
              {/* <!-- EVENT ITEM --> */}
              <div class="m-eventItem featured clearfix p-listing">
                <div class="m-eventItem__thumb thumb p-listing__thumb">
                  <a href="https://www.google.com" title="More Info">
                    <img alt="evento" src="../../images/8.png" />
                  </a>
                </div>

                <div class="m-eventItem__info info clearfix">
                  <div class="m-eventItem__date date p-listing__date">
                    <span class="m-date__rangeFirst">
                      <span class="m-date__month">November </span>
                      <span class="m-date__day">23</span>
                      <span class="m-date__year">, 2016</span>
                    </span>
                    <span class="m-date__separator"> - </span>
                    <span class="m-date__rangeLast">
                      <span class="m-date__month">April </span>
                      <span class="m-date__day"> 2</span>
                      <span class="m-date__year">, 2017</span>
                    </span>
                  </div>
                  <h3 class="m-eventItem__title m-eventItem__title-withTagline p-listing__title">
                    <a href="https://www.google.com" title="More Info">
                      Green Bay Gamblers Hockey
                    </a>
                  </h3>
                  <h4 class="m-eventItem__tagline p-listing__tagline">
                    2016-2017 Season
                  </h4>
                </div>
                <div class="event-item-meta-data p-listing__meta">
                  Resch Center, Green Bay, WI
                </div>

                <div class="m-eventItem__buttons show-list btn-group btn-group--stack">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                    class="tickets onsalenow btn btn--default"
                  >
                    Buy Tickets
                  </a>
                  <a
                    href="https://www.google.com"
                    class="more m-eventItem__buttons-hide btn btn--alt"
                    title="More Info"
                  >
                    More Info
                  </a>
                </div>
              </div>
              {/* <!-- END EVENT ITEM --> */}
              {/* <!-- EVENT ITEM --> */}
              <div class="m-eventItem featured clearfix p-listing">
                <div class="m-eventItem__thumb thumb p-listing__thumb">
                  <a href="https://www.google.com" title="More Info">
                    <img alt="evento" src="../../images/8.png" />
                  </a>
                </div>

                <div class="m-eventItem__info info clearfix">
                  <div class="m-eventItem__date date p-listing__date">
                    <span class="m-date__rangeFirst">
                      <span class="m-date__month">November </span>
                      <span class="m-date__day">23</span>
                      <span class="m-date__year">, 2016</span>
                    </span>
                    <span class="m-date__separator"> - </span>
                    <span class="m-date__rangeLast">
                      <span class="m-date__month">April </span>
                      <span class="m-date__day"> 2</span>
                      <span class="m-date__year">, 2017</span>
                    </span>
                  </div>
                  <h3 class="m-eventItem__title m-eventItem__title-withTagline p-listing__title">
                    <a href="https://www.google.com" title="More Info">
                      Green Bay Gamblers Hockey
                    </a>
                  </h3>
                  <h4 class="m-eventItem__tagline p-listing__tagline">
                    2016-2017 Season
                  </h4>
                </div>
                <div class="event-item-meta-data p-listing__meta">
                  Resch Center, Green Bay, WI
                </div>

                <div class="m-eventItem__buttons show-list btn-group btn-group--stack">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                    class="tickets onsalenow btn btn--default"
                  >
                    Buy Tickets
                  </a>
                  <a
                    href="https://www.google.com"
                    class="more m-eventItem__buttons-hide btn btn--alt"
                    title="More Info"
                  >
                    More Info
                  </a>
                </div>
              </div>
              {/* <!-- END EVENT ITEM --> */}
              {/* <!-- EVENT ITEM --> */}
              <div class="m-eventItem featured clearfix p-listing">
                <div class="m-eventItem__thumb thumb p-listing__thumb">
                  <a href="https://www.google.com" title="More Info">
                    <img alt="evento" src="../../images/8.png" />
                  </a>
                </div>

                <div class="m-eventItem__info info clearfix">
                  <div class="m-eventItem__date date p-listing__date">
                    <span class="m-date__rangeFirst">
                      <span class="m-date__month">November </span>
                      <span class="m-date__day">23</span>
                      <span class="m-date__year">, 2016</span>
                    </span>
                    <span class="m-date__separator"> - </span>
                    <span class="m-date__rangeLast">
                      <span class="m-date__month">April </span>
                      <span class="m-date__day"> 2</span>
                      <span class="m-date__year">, 2017</span>
                    </span>
                  </div>
                  <h3 class="m-eventItem__title m-eventItem__title-withTagline p-listing__title">
                    <a href="https://www.google.com" title="More Info">
                      Green Bay Gamblers Hockey
                    </a>
                  </h3>
                  <h4 class="m-eventItem__tagline p-listing__tagline">
                    2016-2017 Season
                  </h4>
                </div>
                <div class="event-item-meta-data p-listing__meta">
                  Resch Center, Green Bay, WI
                </div>

                <div class="m-eventItem__buttons show-list btn-group btn-group--stack">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                    class="tickets onsalenow btn btn--default"
                  >
                    Buy Tickets
                  </a>
                  <a
                    href="https://www.google.com"
                    class="more m-eventItem__buttons-hide btn btn--alt"
                    title="More Info"
                  >
                    More Info
                  </a>
                </div>
              </div>
              {/* <!-- END EVENT ITEM --> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default AgendaPage
