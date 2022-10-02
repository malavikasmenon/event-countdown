<template>
  <div class="root-container">
    <svg id="countdown-chart"></svg>
    <h1 class="event-text mb-5">Until {{ eventOccasion }}</h1>
    <a href="/reset">
      <button class="btn bg-grey mt-5 px-3 py-2 text-white">Reset</button>
    </a>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'IndexPage',
  data() {
    return {
      startDate: new Date(this.$store.getters.getStartDate),
      eventDate: new Date(this.$store.getters.getEventDate),
      today: new Date(),
      eventOccasion: this.$store.getters.getEventName
    }
  },
  computed: {
    totalNumberofDays() {
      return this.calcNumberOfDays(this.startDate, this.eventDate)
    },
    currentNumberOfDays() {
      return this.calcNumberOfDays(this.today, this.eventDate)
    }
  },
  mounted() {
    const width = 300
    const height = 300
    const twoPi = 2 * Math.PI
    const ratio = this.currentNumberOfDays / this.totalNumberofDays
    const arc = d3.arc().startAngle(0).innerRadius(80).outerRadius(120)

    const svg = d3
      .select('#countdown-chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

    const meter = svg.append('g').attr('class', 'percentage')

    meter
      .append('path')
      .attr('class', 'background')
      .attr('d', arc.endAngle(twoPi))

    meter
      .append('path')
      .attr('class', 'foreground')
      .attr('d', arc.endAngle(twoPi * ratio))

    meter
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('class', 'percent-complete')
      .attr('dy', '0em')
      .text(this.currentNumberOfDays)

    meter
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('class', 'description')
      .attr('dy', '2.3em')
      .text('Days')
  },
  methods: {
    calcNumberOfDays(startDate, endDate) {
      const diffTime = Math.abs(endDate - startDate)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    }
  }
}
</script>

<style>
html {
  background-color: black;
}
.root-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  border: 1px solid black;
  min-height: 100vh;
  background-image: url('../static/night.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  background-position: center;
  background-attachment: fixed;
}
.background {
  fill: #e6e7e8;
}
.foreground {
  fill: gray;
}
.percent-complete {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 40px;
  fill: white;
  letter-spacing: -0.03em;
}
.description {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  fill: #9b9b9b;
}
#countdown-chart {
  min-height: 300px;
  margin: 0;
}
.event-text {
  max-width: fit-content;
  color: white;
  font-family: fantasy;
  font-weight: 800;
}
.bg-grey {
    background-color: #494f56;
    border: #494f56;
}
</style>
